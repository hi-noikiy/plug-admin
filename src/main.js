// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import VueRouter from "vue-router";
import VueResource from "vue-resource";
import Vuex from 'vuex';
import routes from "./router";
import store from './store'

// ui
import iView from "iview";
import "iview/dist/styles/iview.css";

Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(iView);

const router = new VueRouter({
  routes
});

router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) {
  	if (!store.state.userinfo.username) {
  		next({ path: '/login' })
  	} else {
  		next()
  	}
  } else {
  	next()
  }
})


Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  store,
  components: { App },
  template: "<App/>"
});
