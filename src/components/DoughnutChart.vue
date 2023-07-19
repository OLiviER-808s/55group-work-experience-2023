<template>
    <Doughnut 
    :options="chartOptions"
    :data="chartData"
    />
  </template>
  
  <script >
  import { Doughnut } from 'vue-chartjs'
  import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
  
  ChartJS.register(ArcElement, Tooltip, Legend)
  
  export default {
    name: 'DoughtnutChart',
    components: {
      Doughnut
    },
    data() {
      return {
        chartData: {
          labels: [ 'Paid', 'Due', 'Late' ],
          datasets: [ { data: [40, 20, 12] } ]
        },
        chartOptions: {
          responsive: true,
          backgroundColor: ['#4F9D69', '#F2BD4A','#DB6154' ],
        }
      }
    }
  }
  </script>