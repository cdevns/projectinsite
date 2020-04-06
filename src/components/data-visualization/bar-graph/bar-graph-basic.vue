<template>
  <div id="bar-basic"></div>
</template>
<script>
import * as d3 from "d3";

export default {
  data() {
    return {
      dataset: [12, 31, 22, 17, 25, 18, 29, 14, 9],
      width: 500,
      height: 120
    };
  },
  mounted: function() {
    // console.log(this.width);
    // console.log(this.height);
    // console.log("this1: ", this);

    d3.select("#bar-basic")
      .append("h2")
      .text("BAR GRAPH BASIC");

    const height = this.height;

    const svg = d3
      .select("#bar-basic")
      .append("svg")
      .attr("width", this.width)
      .attr("height", this.height);

    svg
      .selectAll("rect")
      .data(this.dataset)
      .enter()
      .append("rect")
      .attr("x", function(d, i) {
        return i * 30;
      })
      .attr("y", function(d) {
        // console.log('this: ', this);
        return height - 3 * d;
      })
      .attr("width", 25)
      .attr("height", function(d) {
        return 3 * d;
      })
      .attr("fill", "navy");
  }
};
</script>