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
          labels: ['Due', 'Paid', 'Late'  ],
          datasets: [ { data: [210, 423,  122] } ]
        },
        chartOptions: {
        backgroundColor:  ['#F2BD4A', '#4F9D69' , '#DB6154' ],
        responsive: true,
        plugins: {
            legend: {
              display: false,
            }
        }}
      }
        
    }}
  </script>