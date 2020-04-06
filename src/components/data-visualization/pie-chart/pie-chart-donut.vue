<template>
  <div>
    <h2>PIE DONUT</h2>
    <svg width="500" height="300" />
  </div>
</template>

<script>
import * as d3 from "d3";

export default {
  mounted: function() {
    // console.log(this.$el.getElementsByTagName("svg")); // HTMLCollection[svg]
    // this.$el element at root which is svg
    var svg = d3.select(this.$el.getElementsByTagName("svg")[0]);
    var width = +svg.attr("width");
    var height = +svg.attr("height");

    var margin = { top: 20, right: 0, bottom: 30, left: 0 };

    var chartWidth = width - (margin.left + margin.right);
    var chartHeight = height - (margin.top + margin.bottom);

    this.chartLayer = svg
      // The <g> SVG element is a container used to group other SVG elements.
      .append("g")
      .attr("transform", `translate(${margin.left}, ${margin.top})`);
    // configuring arc properties
    this.arc = d3
      .arc()
      .outerRadius(chartHeight / 2)
      .innerRadius(chartHeight / 4)
      // gaps between arcs
      .padAngle(0.03)
      // arc edges get curved shape
      .cornerRadius(8);

    this.pieG = this.chartLayer
      .append("g")
      .attr("transform", `translate(${chartWidth / 2}, ${chartHeight / 2})`);

    this.drawChart(this.data);
  },
  props: ["data"],
  watch: {
    data: function(newData) {
      this.drawChart(newData);
    }
  },
  methods: {
    drawChart: function(data) {
      let argData = data;

      var arcs = d3
        .pie()
        // sort by default ascending order
        .sort(null)
        // return values of an object with key/values passed
        .value(function(d) {
          // { name: "Sarah", value: 2502 }
          return d.value;
        })(argData); // passing 'argData' and return inside value() func

      var block = this.pieG.selectAll(".arc").data(arcs);

      block.select("path").attr("d", this.arc);

      var newBlock = block
        .enter()
        .append("g")
        // applying 'arc' class
        .classed("arc", true);

      newBlock
        .append("path")
        .attr("d", this.arc)
        .attr("id", function(d, i) {
          return "arc-" + i;
        })
        .attr("stroke", "gray")
        .attr("fill", () => d3.interpolateCool(Math.random()));

      newBlock
        .append("text")
        .attr("dx", 10)
        .attr("dy", -5)
        .append("textPath")
        .attr("xlink:href", function(d, i) {
          return "#arc-" + i;
        })
        .text(function(d) {
          return d.data.name;
        });
    }
  }
};
</script>
