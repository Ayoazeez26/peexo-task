<template>
  <div class="flex justify-center" v-if="selectedTab === 'Pricing Package'">
    <div v-if="!showSingle" class="packages text-left text-sm w-11/12">
      <div @click="showSingle = !showSingle" class="pack-head px-5 py-3 rounded bg-px-list flex items-center justify-between">
        <h4 class="w-2/5">Title</h4>
        <h4 class="w-1/4">Category</h4>
        <h4 class="w-1/6 text-right">Items</h4>
        <h4 class="w-1/4 text-right">Date Created</h4>
        <h4 class="w-1/6 text-right">Amount</h4>
      </div>
      <div @click="showSingle = !showSingle" class="pack px-5 py-3 text-px-base flex items-center justify-between">
        <p class="w-2/5">Wedding Classic</p>
        <p class="w-1/4">Wedding</p>
        <p class="w-1/6 text-right">15</p>
        <p class="w-1/4 text-right">5th Sep, 2020</p>
        <p class="w-1/6 text-right">N350,000</p>
      </div>
      <div
        @click="showSingle = !showSingle"
        class="pack cursor-pointer px-5 py-3 text-px-base flex items-center justify-between">
        <p class="w-2/5">Beauty Campaign</p>
        <p class="w-1/4">Beauty</p>
        <p class="w-1/6 text-right">2</p>
        <p class="w-1/4 text-right">5th Sep, 2020</p>
        <p class="w-1/6 text-right">N45,000</p>
      </div>
      <div
        @click="showSingle = !showSingle"
        class="pack px-5 py-3 text-px-base flex items-center justify-between"
      >
        <p class="w-2/5">Prewedding Gold</p>
        <p class="w-1/4">Wedding</p>
        <p class="w-1/6 text-right">2</p>
        <p class="w-1/4 text-right">5th Sep, 2020</p>
        <p class="w-1/6 text-right">N45,000</p>
      </div>
      <div
        @click="showSingle = !showSingle"
        class="pack px-5 py-3 text-px-base flex items-center justify-between"
      >
        <p class="w-2/5">Culinary Photography</p>
        <p class="w-1/4">Food</p>
        <p class="w-1/6 text-right">18</p>
        <p class="w-1/4 text-right">5th Sep, 2020</p>
        <p class="w-1/6 text-right">N75,000</p>
      </div>
    </div>
    <single-package v-if="showSingle" @close="showSingle = !showSingle" />
  </div>
</template>

<script>
import SinglePackage from './SinglePackage.vue'
export default {
  components: { SinglePackage },
  props: ["selectedTab"],
  data() {
    return {
      showSingle: false
    }
  },
}
</script>

<style>
thead tr {
  padding: 10px 15px;
}
</style>