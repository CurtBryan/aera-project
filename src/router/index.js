import Vue from "vue";
import VueRouter from "vue-router";
import HomePage from "../components/home-page.vue";
import Represenitives from "../components/represenitives.vue";
import SingleRep from "../components/single-rep.vue";

Vue.use(VueRouter);

export default new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "HomePage",
      component: HomePage
    },
    {
      path: "/represenitives",
      name: "Represenitives",
      component: Represenitives
    },
    {
      path: "/represenitives/:displayName/:person",
      name: "SingleRep",
      component: SingleRep
    }
  ]
});
