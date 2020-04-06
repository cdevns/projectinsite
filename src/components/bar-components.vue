<template>
  <div>
    <BarAxis />
    <hr />

    <!-- BAR BASIC -->
    <BarBasic />
    <hr />

    <!-- BAR GRAPH FILTERS -->
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
    <BarFilter :barGraphData="filteredData" />
    <hr />

    <!-- BAR HOVER -->
    <BarHover />
    <hr />
    <BarTooltip />
  </div>
</template>

<script>
import * as d3 from "d3";

import BarAxis from "./data-visualization/bar-graph/bar-graph-axis.vue";
import BarBasic from "./data-visualization/bar-graph/bar-graph-basic.vue";
import BarFilter from "./data-visualization/bar-graph/bar-graph-filters.vue";
import BarHover from "./data-visualization/bar-graph/bar-graph-labels-hover.vue";
import BarTooltip from "./data-visualization/bar-graph/bar-graph-tooltip.vue";

export default {
  components: {
    BarAxis,
    BarBasic,
    BarFilter,
    BarHover,
    BarTooltip
  },
  data() {
    return {
      selectOptions: ["Books", "Journals"],
      filteredData: []
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
      this.filteredData = data;
    }
  }
};
</script>
