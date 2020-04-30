import Vue from 'vue'
import Router from 'vue-router'

import Layout from '@/views/layout/index'
import Home from '@/views/home/index'

Vue.use(Router)

/* 初始路由 */
export default new Router({
	mode: 'history',
	routes: [{
			path: '/login',
			component: resolve => require(['@/views/Login'], resolve)
		}
	]
})

// 准备添加的动态路由
export const DynamicRoutes = [
    {
        path: '',
        component: Layout,
        name: 'container',
        redirect: 'home',
        meta: {
            requireAuth: true,
            title: '首页'
        },
        children: [
            {
                path: 'home',
                component: Home,
                name: 'home',
                meta: {
                    title: '首页',
                    icon: 'el-icon-user'
                }
            }
        ]
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