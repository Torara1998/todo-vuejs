// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import { auth } from './plugins/firebase'
import "./plugins/axios"
Vue.config.productionTip = false


// let app
// auth.onAuthStateChanged(() => {
//   if (!app) {
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
//   }
// })
/* eslint-disable no-new */

