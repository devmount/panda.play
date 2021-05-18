/* eslint-disable */

import Vue from 'vue'
import Meta from 'vue-meta'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'

// set local config
Vue.config.productionTip = false

// set global properties
Vue.prototype.$version = process.env.VUE_APP_VERSION

Vue.use(Meta)

// extend Object for filtering
Object.filter = (obj, predicate) =>
  Object.keys(obj)
    .filter(key => predicate(obj[key]))
    .reduce((res, key) => (res[key] = obj[key], res), {})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
