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
      .text("BAR GRAPH WITH HOVER AND LABELS");

    const svg = d3
      .select(this.$el)
      .append("svg")
      .attr("width", this.width)
      .attr("height", this.height)
      .style("border", "1px solid black");

    var xScale = d3
      .scaleBand()
      .domain(this.dataset)
      .range([0, this.width])
      .padding(0.3);

    svg
      .selectAll("rect")
      .data(this.dataset)
      .enter()
      .append("rect")
      .attr("x", d => xScale(d))
      .attr("y", d => this.height - 3 * d)
      .attr("width", xScale.bandwidth())
      .attr("height", d => 3 * d)
      .attr("fill", "navy")
      .attr("class", "bar");

    svg
      .selectAll("text")
      .data(this.dataset)
      .enter()
      .append("text")
      .text(d => d)
      .attr("x", d => xScale(d))
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