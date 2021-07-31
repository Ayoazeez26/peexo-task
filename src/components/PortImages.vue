<template>
  <div v-if="selectedTab === 'Portfolio'">
    <div class="category"></div>
    <div class="images flex space-x-5">
      <div class="img-col w-1/3 space-y-5">
        <img class="img-rounded" src="../assets/pexels-dapurmelodi-1109197.jpg" alt="">
        <img class="img-rounded" src="../assets/pexels-picjumbocom-196643.jpg" alt="">
        <img class="img-rounded" src="../assets/pexels-pixabay-416471.jpg" alt="">
      </div>
      <div class="img-col w-1/3 space-y-5">
        <img class="img-rounded" src="../assets/pexels-trang-doan-1092730.jpg" alt="">
        <img class="img-rounded" src="../assets/pexels-william-choquette-2641886.jpg" alt="">
        <img class="img-rounded" src="../assets/pexels-ella-olsson-1640777.jpg" alt="">
      </div>
      <div class="img-col w-1/3 space-y-5">
        <img class="img-rounded" src="../assets/pexels-elle-hughes-1660030.jpg" alt="">
        <img class="img-rounded" src="../assets/pexels-pixabay-35629.jpg" alt="">
        <img class="img-rounded" src="../assets/pexels-valeria-boltneva-842571.jpg" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["selectedTab"],
}
</script>

<style>
.img-rounded {
  border-radius: 10px;
}
</style>