import Vue from "vue";
import VueRouter from "vue-router";
import HomePage from "../components/home-page.vue";
import Representatives from "../components/representatives.vue";
import SingleRep from "../components/single-rep.vue";
import Companies from "../components/companies.vue";
import Events from "../components/events.vue";
import Contact from "../components/contact.vue";
import MemberSignUp from "../components/member-sign-up.vue";

Vue.use(VueRouter);

export default new VueRouter({
  mode: "hash",
  routes: [
    {
      path: "/representatives",
      name: "Representatives",
      component: Representatives
    },
    {
      path: "/companies",
      name: "Companies",
      component: Companies
    },
    {
      path: "/events",
      name: "Events",
      component: Events
    },
    {
      path: "/contact",
      name: "Contact",
      component: Contact
    },
    {
      path: "/member-sign-up",
      name: "MemberSignUp",
      component: MemberSignUp
    },
    {
      path: "/",
      name: "HomePage",
      component: HomePage
    },
    {
      path: "/:displayName",
      name: "SingleRep",
      component: SingleRep
    },
    {
      path: "*",
      name: "CatchAll",
      component: HomePage
    }
  ]
});
