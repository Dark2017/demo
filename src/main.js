import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './plugins/element.js'
import axios from 'axios'
import './mock/mock'
import APi from './axios/axios'
import loading from './components/index'

Vue.prototype.$api = APi
Vue.prototype.axios = axios
Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(loading) //挂载该组件 即可在全局使用




new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
