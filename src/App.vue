<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" class="px-24 bg-black"> -->
  <div class="hello">
  <ActionTable msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import ActionTable from './components/ActionTable.vue'

export default {
  name: 'App',
  components: {
    ActionTable
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
