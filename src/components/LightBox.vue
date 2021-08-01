<template>
  <div @click.stop="closeLightBox">
    <transition
      mode="out-in"
      name="vib-container-transition"
      @afterEnter="enableImageTransition"
      @beforeLeave="disableImageTransition"
    >
      <div
        v-if="media && media.length > 0"
        v-show="lightBoxShown"
        ref="container"
        class="vib-container"
      >
        <div
          class="vib-content"
          @click.stop
        >
          <transition
            mode="out-in"
            :name="imageTransitionName"
          >
            <img
              v-if="currentMedia.type == undefined || currentMedia.type == 'image'"
              :key="currentMedia.src"
              :src="showImg(currentMedia.src)"
              :srcset="currentMedia.srcset || ''"
              class="vib-image rounded-xl"
              :alt="currentMedia.caption"
            >
          </transition>
        </div> <!-- .vib-content -->

        <div
          v-if="showThumbs"
          class="vib-thumbnail-wrapper vib-hideable"
          :class="{ 'vib-hidden': controlsHidden }"
          @click.stop
          @mouseover="interfaceHovered = true"
          @mouseleave="interfaceHovered = false"
        >
          <div
            v-for="(image, index) in imagesThumb"
            v-show="index >= thumbIndex.begin && index <= thumbIndex.end"
            :key="typeof image.thumb === 'string' ? `${image.thumb}${index}` : index"
            :style="{ backgroundImage: 'url(' + showThumb(image.thumb) + ')' }"
            :class="'vib-thumbnail' + (select === index ? '-active' : '')"
            @click.stop="showImage(index)"
          >
  
          </div>
        </div> <!-- .vib-thumbnail-wrapper -->

      </div> <!-- .vib-container -->
    </transition>
  </div>
</template>

<script>
// import LeftArrowIcon from './LeftArrowIcon'
// import RightArrowIcon from './RightArrowIcon'
// import CloseIcon from './CloseIcon'
// import VideoIcon from './VideoIcon'

// let Hammer

// // istanbul ignore else
// if (typeof window !== 'undefined') {
//   Hammer = require('hammerjs')
// }

export default {
  // components: {
  //   LeftArrowIcon,
  //   RightArrowIcon,
  //   CloseIcon,
  //   VideoIcon,
  // },

  props: {
    media: {
      type: Array,
      required: true,
    },

    disableScroll: {
      type: Boolean,
      default: true,
    },

    showLightBox: {
      type: Boolean,
      default: true,
    },

    closable: {
      type: Boolean,
      default: true,
    },

    startAt: {
      type: Number,
      default: 0,
    },

    nThumbs: {
      type: Number,
      default: 12,
    },

    showThumbs: {
      type: Boolean,
      default: true,
    },

    // Mode
    autoPlay: {
      type: Boolean,
      default: false,
    },

    autoPlayTime: {
      type: Number,
      default: 3000,
    },

    interfaceHideTime: {
      type: Number,
      default: 3000,
    },

    showCaption: {
      type: Boolean,
      default: false,
    },

    lengthToLoadMore: {
      type: Number,
      default: 0
    },
  },

  data() {
    return {
      select: this.startAt,
      lightBoxShown: this.showLightBox,
      controlsHidden: false,
      imageTransitionName: 'vib-image-no-transition',
      timer: null,
      interactionTimer: null,
      interfaceHovered: false,
    }
  },

  computed: {
    currentMedia() {
      return this.media[this.select]
    },

    thumbIndex() {
      const halfDown = Math.floor(this.nThumbs / 2)

      if (this.select >= halfDown && this.select < this.media.length - halfDown)
        return {
          begin: this.select - halfDown + (1 - this.nThumbs % 2),
          end: this.select + halfDown,
        }

      if (this.select < halfDown)
        return {
          begin: 0,
          end: this.nThumbs - 1,
        }

      return {
        begin: this.media.length - this.nThumbs,
        end: this.media.length - 1,
      }
    },

    imagesThumb() {
      return this.media.map(({ thumb, type }) => ({ thumb, type }))
    },
  },

  watch: {
    lightBoxShown(value) {
      // istanbul ignore else
      if (document != null) {
        this.onToggleLightBox(value)
      }
    },

    select() {
      this.$emit('onImageChanged', this.select)

      if (this.select >= this.media.length - this.lengthToLoadMore - 1)
        this.$emit('onLoad')

      if (this.select === this.media.length - 1)
        this.$emit('onLastIndex')

      if (this.select === 0)
        this.$emit('onFirstIndex')

      if (this.select === this.startAt)
        this.$emit('onStartIndex')
    },
  },

  mounted() {
    if (this.autoPlay) {
      this.timer = setInterval(this.nextImage, this.autoPlayTime)
    }

    this.onToggleLightBox(this.lightBoxShown)

    if (this.$refs.container) {
      // const hammer = new Hammer(this.$refs.container)

      // hammer.on('swiperight', this.previousImage)
      // hammer.on('swipeleft', this.nextImage)

      this.$refs.container.addEventListener('mousedown', this.handleMouseActivity);
      this.$refs.container.addEventListener('mousemove', this.handleMouseActivity);
      this.$refs.container.addEventListener('touchmove', this.handleMouseActivity);
    }
  },

  beforeDestroy() {
    document.removeEventListener('keydown', this.addKeyEvent)

    if (this.$refs.container) {
      this.$refs.container.removeEventListener('mousedown', this.handleMouseActivity);
      this.$refs.container.removeEventListener('mousemove', this.handleMouseActivity);
      this.$refs.container.removeEventListener('touchmove', this.handleMouseActivity);
    }
  },

  methods: {
    showImg(image) {
      return require(`../assets/${image}`);
    },
    showThumb(image) {
      return require(`../assets/${image}`);
    },
    onLightBoxOpen() {
      this.$emit('onOpened')

      if (this.disableScroll) {
        document.querySelector('html').classList.add('no-scroll')
      }

      document.querySelector('body').classList.add('vib-open')
      document.addEventListener('keydown', this.addKeyEvent)

    },

    onLightBoxClose() {
      this.$emit('onClosed')

      if (this.disableScroll) {
        document.querySelector('html').classList.remove('no-scroll')
      }

      document.querySelector('body').classList.remove('vib-open')
      document.removeEventListener('keydown', this.addKeyEvent)

    },

    onToggleLightBox(value) {
      if (value) this.onLightBoxOpen()
      else this.onLightBoxClose()
    },

    showImage(index) {
      this.select = index
      this.controlsHidden = false
      this.lightBoxShown = true
    },

    addKeyEvent(event) {
      switch (event.keyCode) {
        case 37: // left arrow
          this.previousImage()
          break
        case 39: // right arrow
          this.nextImage()
          break
        case 27: // esc
          this.closeLightBox()
          break
      }
    },

    closeLightBox() {
      if (this.$refs.video)
        this.$refs.video.pause();
      if (!this.closable) return;
      this.$set(this, 'lightBoxShown', false)
    },
    enableImageTransition() {
      this.handleMouseActivity()
      this.imageTransitionName = 'vib-image-transition'
    },

    disableImageTransition() {
      this.imageTransitionName = 'vib-image-no-transition'
    },

    handleMouseActivity() {
      clearTimeout(this.interactionTimer);

      if (this.controlsHidden) {
        this.controlsHidden = false
      }

      if (this.interfaceHovered) {
        this.stopInteractionTimer()
      } else {
        this.startInteractionTimer()
      }
    },

    startInteractionTimer() {
      this.interactionTimer = setTimeout(() => {
        this.controlsHidden = true
      }, this.interfaceHideTime)
    },

    stopInteractionTimer() {
      this.interactionTimer = null
    },
  },
}
</script>

<style>
/* general style */

.vib-open {
  overflow: hidden;
}

.no-scroll {
  overflow-y: hidden;
}

.vib-hideable {
  transition: opacity .5s ease;
}

.vib-hidden {
  opacity: 0;
}

/* elements styling */

.vib-container {
  align-items: center;
  background-color: rgba(0, 0, 0, 0.85);
  box-sizing: border-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  height: 100%;
  justify-content: center;
  left: 0px;
  position: fixed;
  top: 0px;
  width: 100%;
  z-index: 2000;
  -webkit-align-items: center;
  -moz-box-sizing: border-box;
  -webkit-justify-content: center;
  -ms-flex-align: center;
  -webkit-box-align: center;
  -ms-flex-pack: center;
  -webkit-box-pack: center;
}

.vib-content {
  position: relative;
  margin: 0;
  display: block;
}

.vib-image {
  cursor: pointer;
  max-height: calc(60vh);
  cursor: pointer;
  display: block;
  height: auto;
  margin: 0 auto;
  max-width: 100%;
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
}

.vib-thumbnail-wrapper {
  background: rgba(0, 0, 0, 0.2);
  padding: 10px 12px;
  text-align: center;
  white-space: nowrap;
  position: fixed;
  display: inline-block;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  bottom: 0;
}

.vib-thumbnail {
  background-position: center;
  background-size: cover;
  border-radius: 4px;
  box-shadow: inset 0 0 0 1px hsla(0,0%,100%,.2);
  cursor: pointer;
  display: inline-block;
  height: 64px;
  margin: 2px 2px 0 2px;
  overflow: hidden;
  width: 64px;
}

.vib-thumbnail-active {
  background-position: center;
  background-size: cover;
  border-radius: 8px;
  border: 2px solid #F29F05;
  cursor: pointer;
  display: inline-block;
  height: 98px;
  margin: 2px 2px 0 2px;
  overflow: hidden;
  width: 98px;
}

/* image transitions */

.vib-image-transition-enter-active,
.vib-image-transition-leave-active {
  transition: opacity .2s ease;
}

.vib-image-transition-enter,
.vib-image-transition-leave-to {
  opacity: 0;
}

.vib-image-no-transition-enter-active,
.vib-image-no-transition-leave-active {
  transition: none;
}

.vib-image-no-transition-enter,
.vib-image-no-transition-leave-to {
  opacity: 0;
}

/* container transitions */

.vib-container-transition-enter-active,
.vib-container-transition-leave-active {
  transition: opacity .3s ease;
}

.vib-container-transition-enter,
.vib-container-transition-leave-to {
  opacity: 0;
}

</style>
