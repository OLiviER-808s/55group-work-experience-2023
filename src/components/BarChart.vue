<template>
    <Bar
      :options="chartOptions"
      :data="chartData"
    />
  </template>
  
  <script>
  import { Bar } from 'vue-chartjs'
  import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
  
  ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)
  
  export default {
    name: 'BarChart',
    components: { Bar },
    data() {
      return {
        chartData: {
          labels: [ 'Late', 'Due', 'Paid' ],
          datasets: [ { data: [40, 20, 12] } ]
        },
        chartOptions: {
          responsive: true,
          backgroundColor: ['#DB6154', '#F2BD4A', '#4F9D69'],

        }
      }
    }
  }
  </script>