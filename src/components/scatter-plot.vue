<template>
  <div id="scatter-plot"></div>
</template>
<script>
import * as d3 from "d3";

export default {
  data() {
    return {
      dataset: [
        [34, 78],
        [109, 280],
        [310, 120],
        [79, 411],
        [420, 220],
        [233, 145],
        [333, 96],
        [222, 333],
        [78, 320],
        [21, 123]
      ]
    };
  },
  mounted() {
    d3.select("#scatter-plot")
      .append("h2")
      .text("SCATTER PLOT");

    const width = 600;
    const height = 500;
    const padding = 60;

    const xScale = d3
      .scaleLinear()
      .domain([0, d3.max(this.dataset, d => d[0])])
      .range([padding, width - padding]);

    const yScale = d3
      .scaleLinear()
      .domain([0, d3.max(this.dataset, d => d[1])])
      .range([height - padding, padding]);

    const svg = d3
      .select("#scatter-plot")
      .append("svg")
      .attr("width", width)
      .attr("height", height);

    svg
      .selectAll("circle")
      .data(this.dataset)
      .enter()
      .append("circle")
      .attr("cx", d => xScale(d[0]))
      .attr("cy", d => yScale(d[1]))
      .attr("r", 5);

    svg
      .selectAll("text")
      .data(this.dataset)
      .enter()
      .append("text")
      .text(d => d[0] + ", " + d[1])
      .attr("x", d => xScale(d[0] + 10))
      .attr("y", d => xScale(d[1]));
  }
};
</script>