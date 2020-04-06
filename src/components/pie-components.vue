<template>
  <div>
    <PieChartDonut :data="names" />
    <hr />
    <PieChartBasic />
  </div>
</template>

<script>
import PieChartBasic from "./data-visualization/pie-chart/PieChartBasic.vue";
import PieChartDonut from "./data-visualization/pie-chart/pie-chart-donut.vue";

export default {
  components: {
    PieChartDonut,
    PieChartBasic
  },
  data: function() {
    return {
      names: [
        { name: "Sarah", value: 2502 },
        { name: "Emma", value: 2005 },
        { name: "Laura", value: 1968 },
        { name: "Chloé", value: 1863 }
      ]
    };
  }
};
</script>
