import Vue from "vue";
import VueRouter from "vue-router";

//import axios from "axios";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "login",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Login.vue"),
  },
  {
    path: "/userprofile",
    name: "userProfile",
    component: () => import("../views/userProfile.vue"),
    meta: {
      requireAuth: true,
    },
  },
  {
    path: "/frontpage",
    name: "frontpage",
    component: () => import("../views/frontPage.vue"),
    meta: {
      requireAuth: true,
    },
  },
  {
    path: "/mybudget",
    name: "myBudget",
    component: () => import("../views/myBudget.vue"),
    meta: {
      requireAuth: true,
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
