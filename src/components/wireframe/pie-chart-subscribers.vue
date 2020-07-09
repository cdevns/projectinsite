<template>
  <div>
    <h2>PIE CHART</h2>
    <svg width="500" height="400" />
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  computed: {
    ...mapGetters(["getterSubscribers"])
  },
  methods: {
    ...mapActions(["actionSubscribersData"]),
    renderGraph(data) {
      // DATA RECEIVING CODE
      console.log("3: ", data[0].male);

      // PIE CHART CODE TO BE WRITTEN WITH THIS DATA COMES
    }
  },
  async mounted() {
    await this.actionSubscribersData();
    this.renderGraph(this.getterSubscribers);
  },
  // watch: {
  //   getterSubscribers: {
  //     // watch the data to set
  //     deep: true,
  //     handler: function(value) {
  //       // console.log("value: ",value);
  //       if (value) {
  //         // once the data is set trigger the function
  //         this.renderGraph(value);
  //       }
  //     }
  //   }
  // }
};
</script>
