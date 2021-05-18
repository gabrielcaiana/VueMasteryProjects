import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/register-form',
    name: 'RegisterForm',
    component: () =>
      import(
        /* webpackChunkName: "RegisterForm" */ '../views/RegisterForm.vue'
      ),
  },
  {
    path: '/random-number',
    name: 'RandomNumber',
    component: () =>
      import(
        /* webpackChunkName: "RandomNumber" */ '../views/RandomNumber.vue'
      ),
  },
  {
    path: '/message-display',
    name: 'MessageDisplay',
    component: () =>
      import(
        /* webpackChunkName: "RegisterForm" */ '../views/MessageDisplay.vue'
      ),
  },
  {
    path: '/login-form',
    name: 'LoginForm',
    component: () =>
      import(/* webpackChunkName: "RegisterForm" */ '../views/LoginForm.vue'),
  },
  {
    path: '/app-header',
    name: 'AppHeader',
    component: () =>
      import(/* webpackChunkName: "RegisterForm" */ '../views/AppHeader.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
