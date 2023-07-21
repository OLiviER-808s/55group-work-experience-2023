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
          labels: [ 'Paid', 'Due','Late'  ],
          datasets: [ { data: [423, 210, 122] } ]
        },
        chartOptions: {
        backgroundColor:  ['#4F9D69', '#F2BD4A', '#DB6154' ],
        responsive: true,
        plugins: {
            legend: {
              display: false,
            }
        }}
      }
        
    }}
  </script>