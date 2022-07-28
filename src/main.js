import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueSweetalert2 from 'vue-sweetalert2';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'sweetalert2/dist/sweetalert2.min.css'
// import UUID from "vue-uuid";


Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueSweetalert2)
  
new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app')
