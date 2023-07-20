<template>
  <div>
    <HelloWorld msg="Bulletin Board" />

    <div class="text-base text-black">
      <font-awesome-icon :icon="['fas', 'thumbtack']" />
      <font-awesome-icon icon="fa-solid fa-user-secret" />
    </div>
    <BulletinGrid />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import BulletinGrid from './components/BulletinGrid.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    BulletinGrid,
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
