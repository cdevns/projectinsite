<template>
  <div id="app">
    <BarGraph />
    <hr />
    <PackChart :tweetData="loadData" />
    <hr />
    <PieChartDonut :data="names" />
    <hr />
    <PieChartBasic />
    <hr>
    <ScatterPlot />
  </div>
</template>

<script>
import * as d3 from "d3";

import BarGraph from "./components/BarGraph.vue";
import PackChart from "./components/PackChart.vue";
import PieChartBasic from "./components/PieChartBasic.vue";
import PieChartDonut from "./components/pie-chart-donut.vue";
import ScatterPlot from "./components/scatter-plot.vue";

export default {
  name: "App",
  components: {
    BarGraph,
    PackChart,
    PieChartDonut,
    PieChartBasic,
    ScatterPlot
  },
  data: function() {
    return {
      loadData: [],
      names: [
        { name: "Sarah", value: 2502 },
        { name: "Emma", value: 2005 },
        { name: "Laura", value: 1968 },
        { name: "Chloé", value: 1863 }
      ]
    };
  },
  mounted() {
    console.log("App loaded");
    this.fetchData();
  },
  methods: {
    async fetchData() {
      let data = await d3.json("./tweets.json");
      this.loadData = data;
    }
  }
};
</script>
