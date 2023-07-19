<template>
  <BarChart />
  <DoughnutChart />
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
