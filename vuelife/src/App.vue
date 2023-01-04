<template>
  <div id="app">
    <vue-life/>
  </div>
</template>

<script>
import VueLife from './components/VueLife.vue'

export default {
  name: 'App',
  components: {
    VueLife
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #4B0082;
  margin-top: 60px;
}
</style>
