import Vue from 'vue'
import VueRouter from 'vue-router'
import DynamicRouter from './dynamicRouter.js'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        redirect: '/baiduaip'
    },
    {
        path: '/',
        component: () => import('@/components/Home.vue'),
		meta: { title: '自述文件' },
        children: [
            ...DynamicRouter
        ]
    },
    {
        path: '/login',
        component: () => import('@/views/login.vue'),
        meta: { title: '登录' },
    }

]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
