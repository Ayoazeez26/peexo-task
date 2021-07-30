<template>
  <div id="app">
    <landing />
  </div>
</template>

<script>
import Landing from './components/Landing.vue'

export default {
  name: 'App',
  components: {
    Landing
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=Poppins:wght@400;500;600&display=swap');
#app {
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
}
</style>
