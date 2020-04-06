<template>
  <div>
    <h2>BAR GRAPH FILTER</h2>
    <form>
      <div class="row">
        <div class="col-xs-12 form-group">
          <label for="selectOptions" class="col-xs-2">Select Filter</label>
          <select id="selectOptions" class="col-xs-3" @change="onChange">
            <option value="select">select</option>
            <option v-for="(option,index) in selectOptions" :key="index">{{option}}</option>
          </select>
        </div>
      </div>
    </form>
    <svg id="bar-filter" :width="width" :height="height" />
  </div>
</template>
<script>
import * as d3 from "d3";

export default {
  data() {
    return {
      // dataset: [12, 31, 22, 17, 25, 18, 29, 14, 9],
      width: 600,
      height: 200,
      selectOptions: ["Books", "Journals"],
      bookList: []
    };
  },
  methods: {
    onChange() {
      console.log("onchange: ", event.target.value);
      this.fetchData();
    },
    async fetchData() {
      let data = await d3.json("./data/books.json");
      console.log("books-data: ", data);
      this.bookList = data;
    }
  },
  mounted: function() {
    var margin = { left: 100, top: 10, right: 10, bottom: 70 };

    // visualization width and height
    var width = this.width - margin.left - margin.right;
    var height = this.height - margin.top - margin.bottom;

    // svg dimensions
    const svg = d3
      .select("#bar-filter")
      .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      // old left value +  margin-left and old top value + margin-top
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    // X AXIS
    // 1. define x scale
    var xscale = d3
      .scaleBand()
      .domain(
        this.bookList.map(function(d) {
          console.log("domain");
          return d.sold_count;
        })
      )
      .range([0, width])
      // 'padding' applies to paddingInner and paddingOuter
      .padding(0.3);

    // 2. define x axis position and tickformat
    var xAxisCall = d3.axisBottom(xscale).tickFormat(function(d, i) {
      return i;
    });

    // 3. move and call x axis from top to bottom
    svg
      .append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxisCall);

    // 4. display TITLE of x axis
    svg
      .append("text")
      .attr("class", "x-axis-label")
      .attr("x", width / 2)
      .attr("y", height + 50)
      .attr("font-size", "20px")
      .attr("text-anchor", "middle")
      .text("X Axis");

    // Y AXIS
    // 1. define y scale
    var yscale = d3
      .scaleLinear()
      .domain([
        0,
        d3.max(this.bookList, function(book) {
          return book.sold_count;
        })
      ])
      .range([height, 0]);

    // 2. define Y axis position
    var yAxisCall = d3.axisLeft(yscale).ticks(3);

    // 3. call y axis
    svg
      .append("g")
      .attr("class", "y axis")
      .call(yAxisCall);

    // 4. display title of y axis
    svg
      .append("text")
      .attr("class", "y-axis-label")
      .attr("x", -(height / 2))
      .attr("y", -50)
      .attr("font-size", "20px")
      .attr("text-anchor", "middle")
      .attr("transform", "rotate(-90)")
      .text("Y Axis");

    // svg generate bars
    svg
      .selectAll("rect")
      .data(this.bookList)
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
};
</script>