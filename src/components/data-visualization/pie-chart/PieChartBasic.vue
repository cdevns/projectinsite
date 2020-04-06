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
  // when #el is mounted
  mounted() {
    // variable declarations
    var svg = d3.select(this.$el.getElementsByTagName("svg")[0]);
    var width = svg.attr("width");
    var height = svg.attr("height");
    var radius = Math.min(width, height) / 2;

    // Generate the arcs
    var arc = d3
      .arc()
      .innerRadius(0)
      .outerRadius(radius);

    // append a group elements to SVG to group all of the pie arcs together.
    var g = svg
      .append("g")
      .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");
    // <g transform="translate(150,100)"></g>

    // Generate the pie
    var pie = d3.pie();

    //Generate groups
    var arcs = g
      .selectAll("arc")
      .data(pie(this.data))
      .enter()
      .append("g")
      .attr("class", "arc");
    // <g class="arc"></g>

    // arc colors
    var colorScale = d3.scaleOrdinal([
      "#4daf4a",
      "#377eb8",
      "#ff7f00",
      "#984ea3",
      "#e41a1c"
    ]);

    //Draw arc paths
    arcs
      .append("path")
      .attr("fill", function(d, i) {
        return colorScale(i);
      })
      .attr("d", arc);

    // <path fill="#4daf4a" d="M-50.00000000000004,-86.60254037844385A100,100,0,0,1,-1.8369701987210297e-14,-100L0,0Z"></path>

    // display text
    arcs
      .append("text")
      .attr("transform", function(d) {
        return "translate(" + arc.centroid(d) + ")";
      })
      .text(function(d, i) {
        // console.log(d,i)
        return d.data+''+i;
        // return colorScale(i)
      })
      .style("font", "24px times");
  }
};
</script>

<!-- output:
<svg width="300" height="200">
  <g transform="translate(150,100)">
    <g class="arc">
      <path fill="#4daf4a" d="M-50.00000000000004,-86.60254037844385A100,100,0,0,1,-1.8369701987210297e-14,-100L0,0Z"></path>
    </g>
  </g>
</svg>
-->