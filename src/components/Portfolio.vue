<template>
  <div class="details transform -translate-y-60 rounded flex flex-col items-center bg-white">
    <p @click="$emit('close')" class="self-end mr-3 mt-2 text-sm text-px-pri">Hide</p>
    <img class=" w-28" src="../assets/avi.png" alt="user avatar" />
    <p class="font-semibold mt-4 text-4xl">Ekemini Mark</p>
    <p class="text-base text-center w-11/12">
      I’m a wedding and portrait photographer based in Lagos, Nigeria. I’ve been
      shooting weddings since I was in high school (before I ever had my
      driver’s license!).
    </p>
    <div class="inter mt-5 mb-8 flex justify-between items-center w-5/6">
      <div class="view flex flex-col">
        <p class="font-semibold text-lg">22.1k</p>
        <p class="text-sm text-px-fade">Total View</p>
      </div>
      <div class="likes flex flex-col">
        <p class="font-semibold flex items-center text-lg">
          <img
            class="w-4 h-4 mr-1"
            src="../assets/heart-outline.svg"
            alt="likes"
          />
          13.1k
        </p>
        <p class="text-sm text-px-fade">Total Likes</p>
      </div>
      <div class="cam flex flex-col">
        <p class="font-semibold text-lg">Sony 92J</p>
        <p class="text-sm text-px-fade">Camera Lens</p>
      </div>
    </div>
    <div class="desc mb-12 w-11/12">
      <div class="cat flex items-center">
        <p class="text-px-fade mr-3">Category</p>
        <p class="flex items-center">
          Food
          <img
            class="px-2"
            src="../assets/ellipse.png"
            alt="ellipse"
          />Potrait<img
            class="px-2"
            src="../assets/ellipse.png"
            alt="ellipse"
          />Wedding<img
            class="px-2"
            src="../assets/ellipse.png"
            alt="ellipse"
          />Model
        </p>
      </div>
      <div class="cat flex items-center">
        <p class="text-px-fade mr-5">Location</p>
        <p class="">
          Lagos, Nigeria
        </p>
      </div>
    </div>
    <p class="link flex items-center"><img class="w-5 mr-2" src="../assets/group_1.png" alt="share-link">www.peexoo.ai/anijohnson</p>
    <div class="socials flex items-center mb-5 justify-center mt-4 w-11/12">
      <a href="#" class="tweet rounded-full flex items-center justify-center mr-4"><img class="w-4" src="../assets/twitter.png" alt="twitter icon"></a>
      <a href="#" class="tweet rounded-full flex items-center justify-center mr-4"><img class="w-4" src="../assets/instagram.png" alt="instagram icon"></a>
      <a href="#" class="tweet rounded-full flex items-center justify-center mr-4"><img class="w-4" src="../assets/envelope.png" alt="envelope icon"></a>
      <a href="#" class="book bg-px-pri flex items-center justify-center text-sm text-white px-7 py-3">Book Now</a>
    </div>
    <p class="flex items-center text-px-fade text-xs">Built <img class="mx-1 w-3 h-3" src="../assets/black-heart.svg" alt="Heart Emoji"> on Peexoo</p>
  </div>
</template>

<script>
export default {
};
</script>

<style scoped>
.details {
  width: 416px;
  height: 630px;
  border: 0.25px solid #ffb500;
}
.tweet {
  background-color: #E4E4E430;
  width: 37px;
  height: 37px;
}
.book {
  height: 37px;
  border-radius: 100px;
}
</style>
