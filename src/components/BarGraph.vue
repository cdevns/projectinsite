<template>
  <div id="bar-hover"></div>
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
    d3.select("#bar-hover")
      .append("h2")
      .text("BAR GRAPH WITH HOVER EFFECT");

    const svg = d3
      .select(this.$el)
      .append("svg")
      .attr("width", this.width)
      .attr("height", this.height);

    svg
      .selectAll("rect")
      .data(this.dataset)
      .enter()
      .append("rect")
      .attr("x", (d, i) => i * 30)
      .attr("y", d => this.height - 3 * d)
      .attr("width", 25)
      .attr("height", d => 3 * d)
      .attr("fill", "navy")
      .attr("class", "bar");

    svg
      .selectAll("text")
      .data(this.dataset)
      .enter()
      .append("text")
      .text(d => d)
      .attr("x", (d, i) => i * 30)
      .attr("y", d => this.height - 3 * d - 3)
      .style("font-size", "25px")
      .style("fill", "red")
      .append("title")
      .text(d => d);
  }
};
</script>
<style>
.bar:hover {
  fill: brown;
}
</style>