import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import store from './store'

// 引入ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

import '@/assets/styles/reset.css'
import '@/assets/styles/index.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
