// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store';
import element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/lib/font-awesome-4.7.0/css/font-awesome.min.css'

Vue.config.productionTip = false

Vue.use(element)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
