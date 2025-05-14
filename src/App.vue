<!-- src/App.vue -->
<template>
  <div id="app">
    <ConsultaCep />
  </div>
</template>

<script>
import ConsultaCep from './components/ConsultaCep.vue'

export default {
  components: {
    ConsultaCep
  }
}
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
