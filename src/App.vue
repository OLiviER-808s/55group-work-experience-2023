<template>

  <!-- Invoice Numbers -->
  <div class="grid grid-cols-4 gap-8" style="margin-left: 23vw; margin-right: 9vw; margin-bottom: 10vh;">
    <!-- Paid -->
    <div class="p-4 rounded-lg shadow-lg " style="background: conic-gradient( #4F9D69 0deg 90deg, rgb(206, 206, 206) 90deg 270deg, #4F9D69 270deg 360deg);">
      <div class="grid grid-rows-2 gap-4">
        <div class="row-span-1" style="font-size: 2vw; font-weight: bold;">Paid</div>
        <div class="row-span-1" style="font-size: 1.7vw;">734</div>
      </div>
    </div>
    <!-- Due -->
    <div class="p-4 rounded-lg shadow-lg " style="background: conic-gradient( #F2BD4A 0deg 90deg, rgb(206, 206, 206) 90deg 270deg, #F2BD4A 270deg 360deg);">
      <div class="grid grid-rows-2 gap-4">
        <div class="row-span-1" style="font-size: 2vw; font-weight: bold;">Due</div>
        <div class="row-span-1" style="font-size: 1.7vw;">413</div>
      </div>
    </div>
    <!-- Late -->
    <div class="p-4 rounded-lg shadow-lg " style="background: conic-gradient( #DB6154 0deg 90deg, rgb(206, 206, 206) 90deg 270deg, #DB6154 270deg 360deg);">
      <div class="grid grid-rows-2 gap-4">
        <div class="row-span-1" style="font-size: 2vw; font-weight: bold;">Late</div>
        <div class="row-span-1" style="font-size: 1.7vw;">129</div>
      </div>
    </div>
  </div>

  <!-- Graph implementation -->
  <div class="grid grid-rows-1" style="margin-left: 10vw;">
    <div class="flex flex-row">
      <div class="basis-1/2" style="margin-left: 10vw; margin-top: 5vh;"><BarChart style="max-width: 25vw; max-height: 40vw;"></BarChart></div>
      <div class="basis-1/2" style="margin-right: 10vw;"><DoughnutChart style="max-width: 25vw; max-height: 25vw;"></DoughnutChart></div>
    </div>
  </div> 

</template>

<script>
import BarChart from './components/BarChart.vue'
import DoughnutChart from './components/DoughnutChart.vue';

export default {
  name: 'App',
  components: { BarChart, DoughnutChart}
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
