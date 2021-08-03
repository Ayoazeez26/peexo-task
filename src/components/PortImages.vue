<template>
  <div v-if="selectedTab === 'Portfolio'">
    <ul class="text-sm flex justify-end items-center mb-8 w-full">
      <li>Sort by Image Category</li>
      <li
        @mouseover="showList = true"
        class="rounded bg-px-list ml-5 flex items-center pl-3 py-3">
        All
        <img
          v-if="showList"
          class="ml-5 mr-2" src="../assets/arrow-down-s-line.svg" alt="arrow down"
        >
        <img
          v-else
          class="ml-5 mr-2" src="../assets/arrow-up-s-line.svg" alt="arrow up"
        >
      </li>
    </ul>
    <ul
      v-if="showList"
      @mouseover="showList = true"
      @mouseleave="showList = false"
      class="list absolute rounded text-right top-10 right-0 bg-white pr-3 text-sm w-40 z-20">
      <li class="cursor-pointer py-2 text-px-base hover:text-black">Food</li>
      <li class="cursor-pointer py-2 text-px-base hover:text-black">Wedding Images</li>
      <li class="cursor-pointer py-2 text-px-base hover:text-black">Potraits</li>
      <li class="cursor-pointer py-2 text-px-base hover:text-black">Model Shots</li>
    </ul>
    <div class="images flex space-x-5 z-10">
      <div
        class="img-col w-1/3 space-y-5"
      >
        <div
          class="img-contain rounded-cus border hover:border-px-bright cursor-pointer relative"
          v-for="(image, index) in media.slice(0, 4)"
          :key="index"
          @mouseover="showDesc(image.id)"
          @mouseout="remDesc(image.id)"
        >
          <img
            :src="getImg(image.src)"
            class="img-rounded"
            @click="openGallery(index)"
          />
          <div
            ref="desc"
            :id="image.id"
            class="cap hidden bg-white h-14 border-t border-px-bright items-center justify-center absolute bottom-0 w-full left-0 rounded-b-cus">
            <div class="likes flex mx-2">
              <img
                class="w-4 h-4 mr-1"
                src="../assets/heart-line.svg"
                alt="likes"
              />
              <p>5,349</p>
            </div>
            <div class="dislikes flex mx-2">
              <img
                class="w-4 h-4 mr-1"
                src="../assets/dislike-line.svg"
                alt="likes"
              />
              <p>23</p>
            </div>
            <div class="views flex mx-2">
              <img
                class="w-4 h-4 mr-1"
                src="../assets/eye-off-line.svg"
                alt="likes"
              />
              <p>24,023</p>
            </div>
          </div>
        </div>
      </div>
      <div
        class="img-col w-1/3 space-y-5"
      >
        <div
          class="img-contain cursor-pointer relative"
          v-for="(image, index) in media.slice(4, 8)"
          :key="index"
          @mouseover="showDesc(image.id)"
          @mouseout="remDesc(image.id)"
        >
          <img
            :src="getImg(image.src)"
            class="img-rounded"
            @click="openGallery(index + 4)"
          />
          <div
            ref="desc"
            :id="image.id"
            class="cap hidden bg-white h-14 border-t border-px-bright items-center justify-center absolute bottom-0 w-full left-0 rounded-b-cus">
            <div class="likes flex mx-2">
              <img
                class="w-4 h-4 mr-1"
                src="../assets/heart-line.svg"
                alt="likes"
              />
              <p>5,349</p>
            </div>
            <div class="dislikes flex mx-2">
              <img
                class="w-4 h-4 mr-1"
                src="../assets/dislike-line.svg"
                alt="likes"
              />
              <p>23</p>
            </div>
            <div class="views flex mx-2">
              <img
                class="w-4 h-4 mr-1"
                src="../assets/eye-off-line.svg"
                alt="likes"
              />
              <p>24,023</p>
            </div>
          </div>
        </div>
      </div>
      <div
        class="img-col w-1/3 space-y-5"
      >
        <div
          class="img-contain cursor-pointer relative"
          v-for="(image, index) in media.slice(8, 12)"
          :key="index"
          @mouseover="showDesc(image.id)"
          @mouseout="remDesc(image.id)"
        >
          <img
            :src="getImg(image.src)"
            class="img-rounded"
            @click="openGallery(index + 8)"
          />
          <div
            ref="desc"
            :id="image.id"
            class="cap hidden bg-white h-14 border-t border-px-bright items-center justify-center absolute bottom-0 w-full left-0 rounded-b-cus">
            <div class="likes flex mx-2">
              <img
                class="w-4 h-4 mr-1"
                src="../assets/heart-line.svg"
                alt="likes"
              />
              <p>5,349</p>
            </div>
            <div class="dislikes flex mx-2">
              <img
                class="w-4 h-4 mr-1"
                src="../assets/dislike-line.svg"
                alt="likes"
              />
              <p>23</p>
            </div>
            <div class="views flex mx-2">
              <img
                class="w-4 h-4 mr-1"
                src="../assets/eye-off-line.svg"
                alt="likes"
              />
              <p>24,023</p>
            </div>
          </div>
        </div>
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
      media,
      showList: false,
    }
  },
  props: ["selectedTab"],
  methods: {
    showDesc(id) {
      document.querySelector(`#${id}`).classList.replace("hidden", "flex");
    },
    remDesc(id) {
      document.querySelector(`#${id}`).classList.replace("flex", "hidden");
    },
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
.cap p {
  font-size: 11px;
}
</style>
