// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import jQuery from 'jquery'
window.$ = window.jQuery = jQuery;
library.add(fas)

import VuePaginate from 'vue-paginate'
import Axios from 'axios';
import VueSession from 'vue-session'
import Vuex from "vuex"
import 'bootstrap' 

import 'bootstrap/dist/css/bootstrap.css'

Vue.use(VuePaginate)
Vue.use(VueSession)
Vue.use(Vuex)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Axios.defaults.baseURL = process.env.API_ROOT
// Axios.defaults.headers.common['Authorization'] = localStorage.getItem('token') != null ? 'Bearer ' + localStorage.getItem('token') : null;
// Axios.defaults.headers.common['Authorization'] = this.$sesion.has('token') != null ? 'Bearer ' + this.$sesion.getItem('token') : null;
Vue.prototype.$http = Axios

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
