// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import store from './store'
import request from './utils/request.js'
import VueCookie from 'vue-cookie'
// 全局引入公共的样式
// import './assets/css/global.css'
import './assets/scss/base.scss'
Vue.use(ElementUI)
Vue.config.productionTip = false
// 全局挂载
Vue.prototype.$http = request

Vue.use(VueCookie)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
