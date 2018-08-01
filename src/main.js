import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'

Vue.config.productionTip = false


new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
