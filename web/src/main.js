// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import http from './http'
import './assets/css/index.scss'
Vue.config.devtools = true;
Vue.config.performance = true;
Vue.prototype.$http = http;

Vue.component('ass', {
  template: '<div>ass全局组件</div>',
});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {App},
  template: '<App/>'
});
