<template>
  Dashboard
  <div class="wrapper">
    <Chart :id="'chartFirst'" :data="dataApi" :labels="'labels'" :value="'value'"></Chart>
    <Chart :id="'chartSecond'" :data="dataApi" :labels="'labels'" :value="'value'"></Chart>
  </div>
  <button @click="changeData()">Change Data</button>
</template>

<script>
import Chart from './share/Chart.vue';

export default {
  name: "Dashboard",
  components: {
    Chart
  },
  created() {
    setTimeout(() => {
      this.dataApi = [
        { labels: 'Red', value: 10 },
        { labels: 'Blue', value: 7 },
        { labels: 'Yellow', value: 5 },
        { labels: 'Green', value: 12 },
        { labels: 'Purple', value: 9 },
        { labels: 'Orange', value: 4 },
      ]
    })
  },
  data() {
    return {
      dataApi: [],
    }
  },
  methods: {
    changeData() {
      setInterval(() => {
        this.dataApi = [
          { labels: 'Red', value: 10 },
          { labels: 'Blue', value: 7 },
          { labels: 'Yellow', value: 5 },
        ]
      }, 5000);
    }
  }
}
</script>

<style scoped>
.wrapper {
  display: flex;
  justify-content: space-between;
}
</style>