<template>
  <div class="chart" :style="{ 'width': width, 'height': height }">
    <canvas :id="id" height="100%"></canvas>
  </div>
</template>

<script>
import Chart from 'chart.js/auto';

export default {
  name: "Chart",
  props: {
    id: {
      type: String,
      default: 'chartId'
    },
    width: {
      type: String,
      default: "600px"
    },
    height: {
      type: String,
      default: "400px"
    },
    data: {
      type: Array,
      require: true
    },
    labels: {
      type: String,
      require: true
    },
    value: {
      type: String,
      require: true
    }
  },
  mounted() {
    this.initChart();
  },
  watch: {
    data: function (newVal) {
      this.myChart.destroy();
      this.initChart(newVal);
    }
  },
  data() {
    return {
      myChart: null,
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
      ],
    }
  },
  methods: {
    initChart(data = null) {
      this.myChart = new Chart(this.id, {
        type: 'bar',
        data: {
          labels: this.labelsData(data),
          datasets: [{
            data: this.getData(data),
            backgroundColor: this.getColor(this.backgroundColor, data),
            borderColor:  this.getColor(this.borderColor, data),
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          },
          plugins: {
            legend: {
              display: false,
            }
          }
        }
      });
    },
    labelsData(data) {
      return data?.map(item => item[this.labels]);
    },
    getData(data) {
      return data?.map(item => item[this.value]);
    },
    getColor(colors, data) {
      const arr = [];
      if (data) {
        for (let i = 0; i < data.length; i++) {
          arr.push(colors[i % 5]);
        }
      }
      return arr;
    }
  }
}
</script>

<style scoped>
.chart {
  margin: 50px 0 0 50px;
}
</style>