import Vue from 'vue'
import Router from 'vue-router'
import DynamicRouter from './dynamicRouter.js'

Vue.use(Router)

/* 初始路由 */
export default new Router({
	mode: 'hash',
	routes: [{
			path: '/login',
			name: 'login',
			component: () => import('@/views/login.vue'),
			meta: {
				title: '登录'
			},
		},
		{
			path: '/overview',
			name: 'overview',
			component: () => import('@/views/overview/overview'),
			meta: {
				title: '数据总览',
				icon: 'el-icon-menu'
			}
		}
	]
})

/* 准备动态添加的路由 */
export const DynamicRoutes = [{
		path: '',
		component: () => import('@/components/layout/Home.vue'),
		name: 'container',
		redirect: 'alert',
		// meta: {
		// 	requiresAuth: true,
		// 	title: '进出记录管理'
		// },
		children: []
	},
	{
		path: '*',
		component: () => import('@/views/404.vue')
	}
]
