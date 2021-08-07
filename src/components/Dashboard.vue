<template>
  Dashboard
  <div class="wrapper">
    <Chart :id="'chartFirst'" :data="dataApi" :labels="'labels'" :value="'value'"></Chart>
    <Chart :id="'chartSecond'" :data="dataApi" :labels="'labels'" :value="'value'"></Chart>
  </div>
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
    });
    setInterval(() => {
      this.dataApi = [
        { labels: 'Red', value: 10 },
        { labels: 'Blue', value: 7 },
        { labels: 'Yellow', value: 5 },
      ]
    }, 5000);
  },
  data() {
    return {
      dataApi: [],
    }
  },
}
</script>

<style scoped>
.wrapper {
  display: flex;
  justify-content: space-between;
}
</style>