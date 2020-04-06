<template>
  <div id="app" style="margin: 20px">
    <app-header></app-header>
    <hr/>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from "./Header.vue";

export default {
  name: "App",
  components: {
    appHeader: Header
  }
};
</script>
