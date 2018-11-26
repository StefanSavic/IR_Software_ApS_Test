// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueCarousel from 'vue-carousel';
import {
  library
} from '@fortawesome/fontawesome-svg-core'

import {
  FontAwesomeIcon
} from '@fortawesome/vue-fontawesome'
import {
  faCoffee,
  faCheck,



} from '@fortawesome/free-solid-svg-icons'
import {

} from '@fortawesome/free-brands-svg-icons'
library.add(faCoffee);
library.add(faCheck);
console.log('library', library);
Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.use(BootstrapVue, VueCarousel);
// Vue.use(VueCarousel);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
