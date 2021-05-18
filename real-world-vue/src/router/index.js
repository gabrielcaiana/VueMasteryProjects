import Vue from "vue";
import VueRouter from "vue-router";
import NProgress from 'nprogress'
import store from '@/store'

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "event-list",
    component: () => import("../views/EventList"),
		props: true
  },

  {
    path: "/event/:id",
    name: "event-show",
    component: () => import("../views/EventShow"),
		props: true,
		beforeEnter(routeTo, routeFrom, next) {
			store.dispatch('event/fetchEvent', routeTo.params.id).then((event) => {
				routeTo.params.event = event
				next()
			})
			.catch((error) => {
				if(error.response && error.response.status == 404) {
					next({name: '404', params: {resource: 'event'} })
				}else {
					next({name: 'network-issue'})
				}
			})
		}
  },

  {
    path: "/event/create",
    name: "event-create",
    component: () => import("../views/EventCreate"),
  },

	{
		path: '/network-issue',
		name: 'network-issue',
		component: () => import("../views/NetworkIssue")
	},

	{
		path: '/404',
		name: '404',
		component: () => import("../views/NotFound"),
		props: true

	},

	{
		path: '*',
		redirect: {name: '404', params: {resource: 'page' }}
	}
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((routeTo, routeFrom, next) => {
	NProgress.start()
	next()
})

router.afterEach(() => {
	NProgress.done()
})

export default router;
