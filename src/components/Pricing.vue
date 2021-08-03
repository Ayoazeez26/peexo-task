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
      <div
        class="w-full pack cursor-pointer px-5 py-3 text-px-base flex items-center justify-between"
        v-for="item in packages"
        :key="item.items"
        @click="showData(item.title)"
      >
        <p class="w-2/5">{{ item.title }}</p>
        <p class="w-1/4">{{ item.category}}</p>
        <p class="w-1/6 text-right">{{ item.items }}</p>
        <p class="w-1/4 text-right">{{ item.created }}</p>
        <p class="w-1/6 text-right">{{ item.amount }}</p>
      </div>
    </div>
    <single-package :routeName="routeName" v-if="showSingle" @close="showSingle = !showSingle" />
  </div>
</template>

<script>
import SinglePackage from './SinglePackage.vue'
export default {
  components: { SinglePackage },
  props: ["selectedTab"],
  data() {
    return {
      showSingle: false,
      routeName: "",
      packages: [
        {
          title: "Wedding Classic",
          category: "Wedding",
          items: 15,
          created: "5th Sep, 2020",
          amount: "N350,000"
        },
        {
          title: "Beauty Campaign",
          category: "Beauty",
          items: 2,
          created: "5th Sep, 2020",
          amount: "N45,000"
        },
        {
          title: "Prewedding Gold",
          category: "Wedding",
          items: 2,
          created: "5th Sep, 2020",
          amount: "N45,000"
        },
        {
          title: "Culinary Photography",
          category: "Food",
          items: 18,
          created: "5th Sep, 2020",
          amount: "N75,000"
        },
      ]
    }
  },
  methods: {
    showData(title) {
      this.showSingle = !this.showSingle;
      this.routeName = title;


    }
  },
}
</script>

<style>
thead tr {
  padding: 10px 15px;
}
</style>