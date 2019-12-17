<script>
  import HelloWorld from './components/HelloWorld.vue'

  export default {
    name: 'app',
    components: {
      HelloWorld
    }
  }
</script>

<template>
  <div class="app" id="app">
    <img alt="Vue logo" src="./assets/logo.png" class="app__logo">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<style lang="scss">
.app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
