<template>
  <Bar :options="chartOptions" :data="chartData" />
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
        labels: [""],
        datasets: [
          { label: "Paid", data: [423], backgroundColor:  '#4F9D69'}, 
          { label: "Due", data: [210], backgroundColor: '#F2BD4A' }, 
          { label: "Late", data: [122], backgroundColor: '#DB6154'}]
      },
      chartOptions: {
        responsive: true,
      }
    }
  }
}
</script>