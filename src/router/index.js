import Vue from 'vue'
import Router from 'vue-router'

import DynamicRoutes from './dynamic-router.js'
import Layout from '@/views/layout/index'


Vue.use(Router)

/* 初始路由 */
export default new Router({
	mode: 'history',
	routes: [{
			path: '/login',
			component: resolve => require(['@/views/login'], resolve)
		},
		{
			path: '',
			component: Layout,
			children: [...DynamicRoutes]
		},
		{
			path: '/403',
			component: resolve => require(['@/views/errorPage/403'], resolve)
		},
		{
			path: '*',
			component: resolve => require(['@/views/errorPage/404'], resolve)
		}
	]
})