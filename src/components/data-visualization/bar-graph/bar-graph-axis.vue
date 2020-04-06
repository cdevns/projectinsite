<template>
  <div id="bar-axis"></div>
</template>
<script>
import * as d3 from "d3";

export default {
  data() {
    return {
      dataset: [12, 31, 22, 17, 25, 18, 29, 14, 9],
      width: 600,
      height: 200
    };
  },
  mounted: function() {
    var margin = { left: 100, top: 10, right: 10, bottom: 70 };

    d3.select("#bar-axis")
      .append("h2")
      .style("margin-left", "100px")
      .text("BAR GRAPH AXIS");

    var width = this.width - margin.left - margin.right;
    var height = this.height - margin.top - margin.bottom;

    const svg = d3
      .select("#bar-axis")
      .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    var xscale = d3
      .scaleBand()
      .domain(
        this.dataset.map(function(d) {
          return d;
        })
      )
      .range([0, width])
      .padding(0.3);

    var xAxisCall = d3.axisBottom(xscale).tickFormat(function(d, i) {
      return i;
    });

    svg
      .append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxisCall);

    svg
      .append("text")
      .attr("class", "x-axis-label")
      .attr("x", width / 2)
      .attr("y", height + 50)
      .attr("font-size", "20px")
      .attr("text-anchor", "middle")
      .text("X Axis");

    var yscale = d3
      .scaleLinear()
      .domain([
        0,
        d3.max(this.dataset, function(d) {
          return d;
        })
      ])
      .range([height, 0]);

    var yAxisCall = d3.axisLeft(yscale).ticks(3);

    svg
      .append("g")
      .attr("class", "y axis")
      .call(yAxisCall);

    svg
      .append("text")
      .attr("class", "y-axis-label")
      .attr("x", -(height / 2))
      .attr("y", -50)
      .attr("font-size", "20px")
      .attr("text-anchor", "middle")
      .attr("transform", "rotate(-90)")
      .text("Y Axis");

    svg
      .selectAll("rect")
      .data(this.dataset)
      .enter()
      .append("rect")
      .attr("x", function(d) {
        return xscale(d);
      })
      .attr("y", function(d) {
        return yscale(d);
      })
      .attr("width", xscale.bandwidth)
      .attr("height", function(d) {
        return height - yscale(d);
      })
      .attr("fill", "grey");
  }
};
</script>