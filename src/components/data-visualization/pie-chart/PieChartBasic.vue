<template>
  <div>
    <h2>PIE CHART</h2>
    <svg width="500" height="400" />
  </div>
</template>

<script>
import * as d3 from "d3";

export default {
  data() {
    return {
      data: [2, 4, 8, 10]
    };
  },
  mounted() {
    var svg = d3.select(this.$el.getElementsByTagName("svg")[0]);
    var width = svg.attr("width");
    var height = svg.attr("height");
    var radius = Math.min(width, height) / 2;

    var arc = d3
      .arc()
      .innerRadius(0)
      .outerRadius(radius);

    var g = svg
      .append("g")
      .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

    var pie = d3.pie();

    var arcs = g
      .selectAll("arc")
      .data(pie(this.data))
      .enter()
      .append("g")
      .attr("class", "arc");

    var colorScale = d3.scaleOrdinal([
      "#4daf4a",
      "#377eb8",
      "#ff7f00",
      "#984ea3",
      "#e41a1c"
    ]);

    arcs
      .append("path")
      .attr("fill", function(d, i) {
        return colorScale(i);
      })
      .attr("d", arc);

    arcs
      .append("text")
      .attr("transform", function(d) {
        return "translate(" + arc.centroid(d) + ")";
      })
      .text(function(d, i) {
        return d.data + "" + i;
      })
      .style("font", "24px times");
  }
};
</script>

