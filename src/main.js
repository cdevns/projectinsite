import Vue from "vue";
import VueRouter from "vue-router";
import { store } from "./store";

import App from "./App.vue";
import { routes } from "./routes";

Vue.config.productionTip = false;

Vue.use(VueRouter);
var router = new VueRouter({
  routes,
  mode: "history"
});

new Vue({
  render: h => h(App),
  router,
  store
}).$mount("#app");
