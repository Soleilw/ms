import Vue from 'vue'
import Router from 'vue-router'
import DynamicRouter from './dynamicRouter.js'

Vue.use(Router)

/* 初始路由 */
export default new Router({
	mode: 'history',
    routes: [
        {
            path: '/login',
			name: 'login',
            component: () => import('@/views/login.vue'),
			meta: { title: '登录' },
        }
    ]
})

/* 准备动态添加的路由 */
export const DynamicRoutes = [
    {
        path: '',
        component: () => import('@/components/Home.vue'),
        name: 'container',
        redirect: 'overview',
        meta: {
            requiresAuth: true,
            title: '首页'
        },
        children: [
        ]
    },
	{
		path: '*',
		component: () => import('@/views/404.vue')
	}
]
