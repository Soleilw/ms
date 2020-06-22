import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

import '@/assets/style/reset.css'
import '@/assets/style/commom.scss'

Vue.config.productionTip = false

import VueClipboard from 'vue-clipboard2'
VueClipboard.config.autoSetContainer = true
Vue.use(VueClipboard)

// 图表
import echarts from 'echarts'
Vue.prototype.$echarts = echarts


router.beforeEach((to, from, next) => {
	document.title = `${to.meta.title} - 图巴诺总控系统`;
	const token = localStorage.getItem('token');
    if (!token) {
        if (to.matched.length > 0 && !to.matched.some(record => record.meta.requiresAuth)) {
            next()
        } else {
            next({ path: '/login' })
        }
    } else {
        if (!store.state.permission.permissionList) {
            store.dispatch('permission/FETCH_PERMISSION').then(() => {
                next({ path: to.path })
            })
        } else {
            if (to.path !== '/login') {
                next()
            } else {
                next(from.fullPath)
            }
        }
    }
})

router.afterEach((to, from, next) => {
    var routerList = to.matched
    store.commit('setCrumbList', routerList)
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
