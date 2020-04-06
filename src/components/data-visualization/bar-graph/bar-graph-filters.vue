<template>
  <div>
    <h2>BAR GRAPH FILTER</h2>

    <svg id="bar-filter" :width="width" :height="height" />
  </div>
</template>
<script>
import * as d3 from "d3";

export default {
  data() {
    return {
      width: 600,
      height: 200
    };
  },
  methods: {
    drawBarGraph(graphData) {
      var margin = { left: 100, top: 10, right: 10, bottom: 70 };

      var width = this.width - margin.left - margin.right;
      var height = this.height - margin.top - margin.bottom;

      const svg = d3
        .select("#bar-filter")
        .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

      var xscale = d3
        .scaleBand()
        .domain(
          graphData.map(function(d) {
            return d.sold_count;
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
          d3.max(graphData, function(book) {
            return book.sold_count;
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
        .data(graphData)
        .enter()
        .append("rect")
        .attr("x", function(d) {
          return xscale(d.sold_count);
        })
        .attr("y", function(d) {
          return yscale(d.sold_count);
        })
        .attr("width", xscale.bandwidth)
        .attr("height", function(d) {
          return height - yscale(d.sold_count);
        })
        .attr("fill", "grey");
    }
  },
  mounted: function() {
    this.drawBarGraph(this.barGraphData);
  },
  props: ["barGraphData"],
  watch: {
    barGraphData: function(newData) {
      this.drawBarGraph(newData);
    }
  }
};
</script>