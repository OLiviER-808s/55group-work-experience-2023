<template>
    <div>
        <HelloWorld msg="Bulletin Board"/>
  
        <div class="grid grid-cols-4">
        <BulletinBox title="" />
        </div>
    
        <div style="height: 75px;"></div>

        <!-- Seperates each box into four sections -->
        <div class="grid grid-cols-4 justify-items-center">

          <!-- Sort by tags -->
          <div class="box-border col-4 h-86 w-64 p-4 border-4 border-blue-400 bg-blue-400 font-filson" style="font-size: 25px; color: black;">
            <div class="flex row items-center justify-between" style="font-weight: bold;">
            <h3>Sort</h3>
            </div>
            <div class="flex row items-center justify-between">
            <h3>News</h3>
            <input type="checkbox" id="checkbox" v-model="checked" />
            <label for="checkbox">{{ checked }}</label>
            </div>

            <div class="flex row items-center justify-between">
            <h3>Marketing</h3>
            <input type="checkbox" id="checkbox" v-model="checked" />
            <label for="checkbox">{{ checked }}</label>
            </div>
            
            <div class="flex row items-center justify-between">
            <h3>Pinned</h3>
            <input type="checkbox" id="checkbox" v-model="checked" />
            <label for="checkbox">{{ checked }}</label>
            </div>
            
            <!-- Sort by date-->
            <div class="flex row items-center justify-between" style="font-weight: bold;">
            <h3>Sort by Date</h3>

            </div>
            <div class="flex row items-center justify-between">
            <h3>Oldest</h3>
            <input type="checkbox" id="checkbox" v-model="checked" />
            <label for="checkbox">{{ checked }}</label>
            </div>

            <div class="flex row items-center justify-between">
            <h3>Newest</h3>
            <input type="checkbox" id="checkbox" v-model="checked" />
            <label for="checkbox">{{ checked }}</label>
            </div>
        </div>

            <!-- First Bulletin Box -->
          <div class="box-border col-4 h-72 w-64 p-4 border-4 border-blue-400 bg-blue-400 font-filson" style="font-size: 20px; color: black;">
              <div class="flex items-center justify-between">
              <h3 class="">Online Webinar</h3>
              <font-awesome-icon :icon="['fas', 'thumbtack']" />
              <input type="checkbox" id="checkbox" v-model="checked" />
              <label for="checkbox">{{ checked }}</label>
              </div>
          </div>
        
            <!-- Second Bulletin Box -->
            <div class="box-border col-4 h-72 w-64 p-4 border-4 border-blue-400 bg-blue-400 font-filson" style="font-size: 20px; color: black;">
                <div class="flex items-center justify-between">
                <h3>System Maintenance</h3>
                <font-awesome-icon :icon="['fas', 'thumbtack']" />
                <font-awesome-icon icon="fa-solid fa-user-secret" />
                <input type="checkbox" id="checkbox" v-model="checked" />
                <label for="checkbox">{{ checked }}</label>
                </div>
            </div>
            
            
            <!-- Third Bulletin Box -->
            <div class="box-border col-4 h-72 w-64 p-4 border-4 border-blue-400 bg-blue-400 font-filson" style="font-size: 20px; color: black;">
                <div class="flex items-center justify-between">
                <h3>Online Webinar</h3>
                <font-awesome-icon :icon="['fas', 'thumbtack']" />
                <input type="checkbox" id="checkbox" v-model="checked" />
                <label for="checkbox">{{ checked }}</label>
                </div>
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
  