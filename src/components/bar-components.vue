<template>
  <div>
    <!-- BAR GRAPH FILTERS -->
    <form>
      <div class="row">
        <div class="col-xs-12 form-group">
          <label for="selectOptions" class="col-xs-2">Select Filter</label>
          <select id="selectOptions" class="col-xs-3" @change="onChange">
            <option v-for="(option,index) in selectOptions" :key="index" :value="option">{{option}}</option>
          </select>
        </div>
      </div>
    </form>
    <BarFilter :barGraphData="filteredData" />
    <hr />
  </div>
</template>

<script>
import * as d3 from "d3";

import BarFilter from "./data-visualization/bar-graph/bar-graph-filters.vue";

export default {
  components: {
    BarFilter
  },
  data() {
    return {
      selectOptions: ["Books", "Journals"],
      filteredData: []
    };
  },
  methods: {
    onChange() {
      this.fetchData();
    },
    async fetchData() {
      let selectedOption =
        event.target.value === "Books" ? "Books" : "Journals";
      let data = await d3.json(`./data/${selectedOption}.json`);
      this.filteredData = data;
    }
  },
  async mounted() {
    let data = await d3.json("./data/books.json");
    this.filteredData = data;
  }
};
</script>
