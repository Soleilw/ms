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

// 路由拦截
router.beforeEach((to, from, next) => {
    if(localStorage.getItem('user')) {
        if (to.matched.length > 0 && !to.matched.some(item => item.meta.requiresAuth)) {
            next()
        } else {
            store.dispatch('permission/FETCH_PERMISSION').then(() => {
                next({ path: to.path })
            })
        }
        
    } else {
        if (to.path !== '/login') {
            next()
        } else {
            next({ path: '/login' })
        }
    }
})

// 进入路由
router.afterEach((to, from, next) => {
    store.commit('permission/SET_CURRENT_MENU', to.name)
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
