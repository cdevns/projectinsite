<template>
  <div id="bar-tooltip"></div>
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
    d3.select("#bar-tooltip")
      .append("h2")
      .text("BAR TOOLTIP");

    const height = this.height;

    const svg = d3
      .select("#bar-tooltip")
      .append("svg")
      .attr("width", this.width)
      .attr("height", this.height);

    var tooltip = d3
      .select("body")
      .append("div")
      .attr("class", "toolTip");

    var rects = svg
      .selectAll("rect")
      .data(this.dataset)
      .enter()
      .append("rect")
      .attr("x", function(d, i) {
        return i * 30;
      })
      .attr("y", function(d) {
        return height - 3 * d;
      })
      .attr("width", 25)
      .attr("height", function(d) {
        return 3 * d;
      })
      .attr("fill", "navy");

    rects
      .on("mousemove", function() {
        tooltip
          .style("left", d3.event.pageX - 50 + "px")
          .style("top", d3.event.pageY - 60 + "px")
          .style("display", "inline-block")
          .html("sample-tooltip-value");
      })
      .on("mouseout", function() {
        tooltip.style("display", "none");
      });
  }
};
</script>
<style>
.toolTip {
  position: absolute;
  display: none;
  min-width: 80px;
  height: auto;
  background: none repeat scroll 0 0 #ffffff;
  border: 1px solid #6f257f;
  padding: 14px;
  text-align: center;
}
</style>