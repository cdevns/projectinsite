import Home from "./components/Home.vue";
import BarComponents from "./components/bar-components.vue";
import PieComponents from "./components/pie-components.vue";

export const routes = [
  { path: "", component: Home },
  { path: "/bar", component: BarComponents },
  { path: "/pie", component: PieComponents }
];
