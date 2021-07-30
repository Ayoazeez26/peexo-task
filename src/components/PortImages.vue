<template>
  <div v-if="selectedTab === 'Portfolio'">
    <h1 class="text-5xl font-bold">Portfolio Images</h1>
  </div>
</template>

<script>
export default {
  props: ["selectedTab"],
}
</script>

<style>

</style>