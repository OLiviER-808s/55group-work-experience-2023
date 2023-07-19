<template>
  <HelloWorld msg="Bulletin Board"/>

  <div class="grid grid-cols-3">
    <BulletinBox title="" />
  </div>

  <div class="grid grid-cols-3 justify-items-center">
    <div class="box-border col-4 h-72 w-64 p-4 border-4 border-blue-400 bg-blue-400 font-filson" style="font-size: 25px; color: black;">
      <div class="flex items-center justify-between">
        <h3>Title</h3>
        <p class="text-sm">Pin</p>
      </div>
    </div>

    <!-- Second Bulletin Box-->
    <div class="box-border col-4 h-72 w-64 p-4 border-4 border-blue-400 bg-blue-400 font-filson" style="font-size: 25px; color: black;">
    </div>
    
    <!-- Third Bulletin Box-->
    <div class="box-border col-4 h-72 w-64 p-4 border-4 border-blue-400 bg-blue-400 font-filson" style="font-size: 25px; color: black;">
    </div>
  </div>
  
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import BulletinBox from './components/BulletinBox.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    BulletinBox
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
