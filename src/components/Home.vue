<template>
  <div>
    <h2>Insite Dashboard</h2>
    <PieChartSubscribers />
  </div>
</template>
<script>
// import { mapActions } from "vuex";

import PieChartSubscribers from "./wireframe/pie-chart-subscribers.vue";

export default {
  components: {
    PieChartSubscribers
  },
  // methods: {
  //   // ...mapActions(["commitSubscribersData"])
  // },
  // async mounted() {
  //   // console.log("1: ",this.commitSubscribersData())
  //   // this.$store.dispatch("commitSubscribersData");
  //   this.commitSubscribersData();
  // }
};
</script>