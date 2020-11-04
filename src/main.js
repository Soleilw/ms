import Vue from 'vue'
// import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

import axios from "axios";
Vue.prototype.$axios = axios

import '@/assets/style/reset.css'
import '@/assets/style/commom.scss'
import '@/assets/fonts/icomoon.css'

Vue.config.productionTip = false

import VueClipboard from 'vue-clipboard2'
VueClipboard.config.autoSetContainer = true
Vue.use(VueClipboard)

// 图表
import echarts from 'echarts'
Vue.prototype.$echarts = echarts

// 表格
import FileSaver from 'file-saver'
import XLSX from 'xlsx'


router.beforeEach((to, from, next) => {
	document.title = `${to.meta.title} - 公安后台系统`;
	const username = localStorage.getItem('username');
	if (!username) {
		if (to.path == '/overview') {
			next({
				path: '/login'
			})
		}
		if (to.matched.length > 0 && !to.matched.some(record => record.meta.requiresAuth)) {
			next()
		} else {
			next({
				path: '/login'
			})
		}
	} else {
		if (!store.state.permission.permissionList) {
			store.dispatch('permission/FETCH_PERMISSION').then(() => {
				next({
					path: to.path
				})
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

// router.afterEach((to, from, next) => {
// 	var routerList = to.matched
// 	debugger
// 	store.commit('setCrumbList', routerList)
// })

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')
