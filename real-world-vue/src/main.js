import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"


import BaseIcon from "@/components/BaseIcon"
import 'nprogress/nprogress.css'

import DateFilter from './filters/date'
    
Vue.filter('date', DateFilter)

Vue.component("BaseIcon", BaseIcon);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");