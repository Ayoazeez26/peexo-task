<template>
  <div>
    <header class="h-16 flex items-center w-full">
      <div
        class="header-content flex items-center justify-between w-11/12 mx-auto"
      >
        <img
          class="w-28 w-[102px] h-[26px]"
          src="../assets/peexo-logo.png"
          alt="Peexo Logo"
        />
        <nav class="right flex justify-between items-center">
          <ul class="flex space-x-6 font-regular text-px-base items-center">
            <li>Business Manager</li>
            <li>MarketPlace</li>
            <li>XooCam</li>
          </ul>
          <p class="text-px-pri ml-40">Join Peexo</p>
        </nav>
      </div>
    </header>
    <section class="w-full bg-px-body mt-6">
      <div class="body-bg mx-auto  rounded-xl w-11/12 h-60"></div>
      <div class="flex h-20 items-center mx-auto w-5/6">
        <div class="profile flex items-center w-1/3">
          <img class="w-12" src="../assets/avi.png" alt="Profile Picture" />
          <p @click="showCard = !showCard" class="text-px-pri ml-2 text-sm">Show Card</p>
        </div>
        <div class="tabs flex items-center w-2/3">
          <h4
            v-for="(tab, index) in tabs"
            :key="index"
            class="cursor-pointer text-sm mx-2 px-8 py-3 relative"
            :class="{ activeTab: selectedTab === tab }"
            @click="selectedTab = tab"
          >
            {{ tab }}
          </h4>
        </div>
      </div>
      <div class="content flex w-10/12 mx-auto">
        <portfolio v-if="showCard" @close="showCard = !showCard" />
        <div class="mt-8 w-2/3">
          <port-images :selectedTab="selectedTab" />
          <availability :selectedTab="selectedTab" />
          <pricing :selectedTab="selectedTab" />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Portfolio from './Portfolio.vue';
import Availability from './Availability.vue';
import PortImages from './PortImages.vue';
import Pricing from './Pricing.vue';
export default {
  components: { Portfolio, Availability, PortImages, Pricing },
  data() {
    return {
      tabs: ["Portfolio", "Availability", "Pricing Package"],
      selectedTab: "Portfolio",
      showCard: false,
    };
  },
};
</script>

<style scoped>
header {
  box-shadow: 0px 1px 3px #00000029;
}
.body-bg {
  background-image: url("../assets/image-bg.jpg");
}
.activeTab {
  border-radius: 19px;
  background-color: #F29F0510;
  font-weight: 700;
  font-size: 1rem; 
}
</style>
