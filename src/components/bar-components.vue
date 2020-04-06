<template>
  <div>
    <BarAxis />
    <hr />
    <BarBasic />
    <hr/>
    <BarFilter />
    <hr />
    <BarHover />
    <hr />
    <BarTooltip />
  </div>
</template>

<script>
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
  }
};
</script>
