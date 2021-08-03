<template>
  <div>
    <header
      :class="{ 'scrolledNav': !view.atTopOfPage}"
      class="h-16 flex items-center w-full bg-white z-30">
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
          <p class="text-px-pri flex items-center ml-40">Join Peexo <img src="../assets/arrow-down-s-fill.svg" alt="arrow-down-fill"></p>
        </nav>
      </div>
    </header>
    <section class="w-full relative bg-px-body mt-6">
      <div class="body-bg mx-auto  rounded-xl w-11/12 h-60"></div>
      <div
          :class="{ 'scrolled': !view.atTopOfSection }" class="tabParent bg-px-body h-20 flex items-center w-full z-30">
        <div
          class="flex items-center relative justify-center mx-auto w-5/6">
          <div v-if="!showCard" class="profile absolute left-0 top-0 flex items-center w-1/3">
            <img class="w-12" src="../assets/avi.png" alt="Profile Picture" />
            <p @click="showCard = !showCard" class="cursor-pointer text-px-pri ml-2 text-sm">Show Card</p>
          </div>
          <div class="ml-48 big:ml-0 tabs flex items-center">
            <h4
              v-for="(tab, index) in tabs"
              :key="index"
              class="cursor-pointer text-sm mx-2 px-5 py-3 relative"
              :class="{ activeTab: selectedTab === tab }"
              @click="selectedTab = tab"
            >
              {{ tab }}
            </h4>
          </div>
        </div>
      </div>
      
      <portfolio :selectedTab="selectedTab" class="fixed top-32 big:left-20 left-28" v-if="showCard" @open="showDP = !showDP" @close="showCard = !showCard" />
      <div class="content relative flex flex-col items-end justify-end w-11/12 mx-auto space-x-5">
        <div :class="varWidth">
          <port-images :selectedTab="selectedTab" />
          <availability :selectedTab="selectedTab" />
          <pricing :selectedTab="selectedTab" />
        </div>
      </div>
    </section>
    <profile-pic v-if="showDP" @close="showDP = !showDP" />
  </div>
</template>

<script>
import Portfolio from './Portfolio.vue';
import Availability from './Availability.vue';
import PortImages from './PortImages.vue';
import Pricing from './Pricing.vue';
import ProfilePic from './ProfilePic.vue';
export default {
  components: { Portfolio, Availability, PortImages, Pricing, ProfilePic },
  data() {
    return {
      view: {
        atTopOfPage: true,
        atTopOfSection: true
      },
      tabs: ["Portfolio", "Availability", "Pricing Package"],
      selectedTab: "Portfolio",
      showCard: false,
      showDP: false,
    };
  },
  beforeMount () {
    window.addEventListener('scroll', this.handleScroll);
  },
  computed: {
    varWidth() {
      // let width = "w-full";
      if (this.showCard) {
        return "w-7/12 big:w-2/3"
      } else {
        return "w-full"
      }
    }
  },
  methods: {
    handleScroll () {
      if(window.pageYOffset>0){
        // user is scrolled
        if(this.view.atTopOfPage) this.view.atTopOfPage = false
      }else{
        // user is at top of Page
        if(!this.view.atTopOfPage) this.view.atTopOfPage = true
      }
      if(window.pageYOffset>268){
        // user is scrolled
        if(this.view.atTopOfSection) this.view.atTopOfSection = false
      }else{
        // user is at top of Section
        if(!this.view.atTopOfSection) this.view.atTopOfSection = true
      }
    }
  }
};
</script>

<style scoped>
header {
  box-shadow: 0px 1px 3px #00000029;
}
.body-bg {
  background-image: url("../assets/image-bg.jpg");
}
.scrolled {
  @apply sticky top-16;
}
.scrolledNav {
  @apply sticky top-0
}
.activeTab {
  border-radius: 19px;
  background-color: #F29F0510;
  font-weight: 700;
  font-size: 1rem; 
}
</style>
