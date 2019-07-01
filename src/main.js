/* eslint-disable */

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'

Vue.config.productionTip = false

// extend Object for filtering
Object.filter = (obj, predicate) =>
  Object.keys(obj)
    .filter(key => predicate(obj[key]))
    .reduce((res, key) => (res[key] = obj[key], res), {})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
