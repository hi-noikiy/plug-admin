// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import VueRouter from "vue-router";
import VueResource from "vue-resource";
import Vuex from 'vuex';
import routes from "./router";
import store from './store'

// iView UI
// 使用 webpack 前端打包工具，在 build/webpack.prod.conf.js 中需要将
  // module: {
  //   rules: utils.styleLoaders({
  //     sourceMap: config.build.productionSourceMap,
  //     extract: true,
  //     usePostCSS: true
  //   })
  // }
// module 中的 extract 改为 false，否则无法访问 iview 的图标库

import iView from "iview";
import "iview/dist/styles/iview.css";

Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(iView);

const router = new VueRouter({ routes });

// 路由拦截
// 验证将要去的路由是否定义了需要登录验证才能够访问
// 验证用户登录信息是否已经拉取完毕

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
