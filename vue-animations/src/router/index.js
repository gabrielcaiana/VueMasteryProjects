import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Modal",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Modal.vue"),
  },
  {
    path: "/lista",
    name: "Lista",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/List.vue"),
  },

  {
    path: "/drawer",
    name: "Drawer",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Drawer.vue"),
  },

  {
    path: "/cards",
    name: "Cards",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Cards.vue"),
  },

  {
    path: "/simple",
    name: "Simple",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Simple.vue"),
  },

  {
    path: "/stagger",
    name: "Stagger",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Stagger.vue"),
  },

  {
    path: "/state",
    name: "State",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/State.vue"),
  },

  {
    path: "/timeline",
    name: "TimeLine",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Timeline.vue"),
  },

  {
    path: "/master",
    name: "Master",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Master.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
