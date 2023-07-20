<template>
  <div>
    <HelloWorld msg="Bulletin Board" />

    <div class="grid grid-cols-4">
      <BulletinBox title="" />
    </div>

    <div style="height: 0px;"></div>

    <!-- Seperates each box into four sections -->
    <div class="grid grid-cols-4 justify-items-center">

      <!-- Sort by tags -->
      <div class="box-border col-4 h-86 w-64 p-4 border-4 border-blue-400 bg-blue-400 font-filson"
        style="font-size: 20px; color: black;">
        <div class="flex row items-center justify-between" style="font-weight: bold;">
          <h3 class="border-b-2 border-black">Sort</h3>
        </div>
        <div class="flex row items-center justify-between">
          <h3>News</h3>
          <input type="checkbox" id="newsCheck " v-model="newsCheck" />
        </div>

        <div class="flex row items-center justify-between">
          <h3>Marketing</h3>
          <input type="checkbox" id="marketCheck" v-model="marketCheck" />
        </div>

        <div class="flex row items-center justify-between">
          <h3>Pinned</h3>
          <input type="checkbox" id="pinnedCheck" v-model="pinnedCheck" />

        </div>

        <!-- Sort by date-->
        <div class="flex row items-center justify-between" style="font-weight: bold;">
          <h3 class="border-b-2 border-black">Sort by Date</h3>

        </div>
        <div class="flex row items-center justify-between">
          <h3>Oldest</h3>
          <input type="checkbox" id="oldCheck" v-model="oldCheck" />

        </div>

        <div class="flex row items-center justify-between">
          <h3>Newest</h3>
          <input type="checkbox" id="newCheck" v-model="newCheck" />
        </div>
      </div>

      <!-- First Bulletin Box -->
      <div class="box-border col-4 h-72 w-64 p-4 border-4 border-blue-400 bg-blue-400 font-filson"
        style="font-size: 18px; color: black;">
        <div class="flex items-center justify-between">
          <h3 class="border-b-2 border-black font-bold">Online Webinar</h3>
          <font-awesome-icon v-on:click="section1 = !section1" :icon="['fas', 'thumbtack']" class="text-white" :class="section1 ? 'text-yellow-300' : 'text-white'" />
              </div>
              <p> Test Test Test Test Test Test Test Test Test Test Test </p>
              <div style="height: 3px;"></div>
              <h3 class="border-b-2 border-black font-bold">Tags</h3>
              <h3 class="font-bold">@News</h3>
              <h3 class="font-bold">@Marketing</h3>
              <h3 class="font-bold">@Pinned</h3>
              <button class="bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded">
                Read more 
                </button>
        </div>

        <!-- Second Bulletin Box -->
        <div class="box-border col-4 h-72 w-64 p-4 border-4 border-blue-400 bg-blue-400 font-filson"
          style="font-size: 18px; color: black;">
          <div class="flex items-center justify-between">
            <h3 class="border-b-2 border-black font-bold">System Maintenance</h3>
            <font-awesome-icon v-on:click="section2 = !section2" :icon="['fas', 'thumbtack']" class="text-white" :class="section2 ? 'text-yellow-300' : 'text-white'" />
                </div>
                <p> Test Test Test Test Test Test Test Test Test Test Test </p>
                <div style="height: 25px;"></div>
                <h3 class="border-b-2 border-black font-bold">Tags</h3>
                <h3 class="font-bold">@Marketing</h3>
                <h3 class="font-bold">@Pinned</h3>
                <button class="bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded">
                Read more 
                </button>
        </div>

        <!-- Third Bulletin Box -->
        <div class="box-border col-4 h-72 w-64 p-4 border-4 border-blue-400 bg-blue-400 font-filson"
          style="font-size: 18px; color: black;">
          <div class="flex items-center justify-between">
            <h3 class="border-b-2 border-black font-bold">Online Webinar</h3>
            <font-awesome-icon v-on:click="section3 = !section3" :icon="['fas', 'thumbtack']" class="text-white" :class="section3 ? 'text-yellow-300' : 'text-white'" />
               </div>
               <p> Test Test Test Test Test Test Test Test Test Test Test </p>
                <div style="height: 15px;"></div>
                <h3 class="border-b-2 border-black font-bold">Tags</h3>
                <h3 class="font-bold">@News</h3>
                <h3 class="font-bold">@Pinned</h3>
                <div style="height: 6px;"></div>
                <button class="bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded">
                Read more 
                </button>

        </div>
      </div>
    </div>
</template>
  
<script>
import BulletinBox from './/BulletinBox.vue'

export default {
  name: 'BulletinGrid',
  components: {
    BulletinBox
  },
  data() {
    return {
      checked: false,
      newsCheck: false,
      marketCheck: false,
      pinnedCheck: false,
      oldCheck: false,
      newCheck: false,
      section1: false,
      section2: false,
      section3: false 

      
    }
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
}</style>
  