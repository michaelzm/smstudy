import Vue from "vue";
import VueRouter from "vue-router";
import Learn from "../views/Learn.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "learn",
    component: Learn
  },
  {
    path: "/create",
    name: "create",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Create.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
