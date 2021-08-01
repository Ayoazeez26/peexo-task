<template>
  <div v-if="selectedTab === 'Portfolio'">
    <div class="category"></div>
    <div class="images flex space-x-5">
      <div
        class="img-col w-1/3 space-y-5"
      >
        <div
          class="img-contain cursor-pointer relative"
          v-for="(image, index) in media.slice(0, 4)"
          :key="index"
        >
          <img
            :src="getImg(image.src)"
            class="img-rounded"
            @click="openGallery(index)"
          />
          <div class="cap bg-white absolute bottom-0 w-full left-0 rounded-b-cus"></div>
        </div>
      </div>
      <div
        class="img-col w-1/3 space-y-5"
      >
        <img
          v-for="(image, index) in media.slice(4, 8)"
          :key="index"
          :src="getImg(image.src)"
          class="img-rounded cursor-pointer"
          @click="openGallery(index + 4)"
        />
      </div>
      <div
        class="img-col w-1/3 space-y-5"
      >
        <img
          v-for="(image, index) in media.slice(8, 12)"
          :key="index"
          :src="getImg(image.src)"
          class="img-rounded cursor-pointer"
          @click="openGallery(index + 8)"
        />
      </div>
    </div>
    <LightBox ref="lightbox" :media="media" />
  </div>
</template>

<script>
import LightBox from "./LightBox.vue";

import media from "../media";
export default {
  components: {
    LightBox,
  },
  data() {
    return {
      media
    }
  },
  props: ["selectedTab"],
  methods: {
    getImg(image) {
      return require(`../assets/${image}`);
    },
    openGallery(index) {
      this.$refs.lightbox.showImage(index)
    }
  },
};
</script>

<style>
.img-rounded {
  border-radius: 10px;
}
</style>
