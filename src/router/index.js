import Vue from 'vue'
import Router from 'vue-router'
import Login from './modules/const/login'

Vue.use(Router)

// 常用路由
export const constantRoutes = [
	...Login // 登录
]

const createRouter = () => new Router({
	mode: 'history',
	routes: [...constantRoutes]
})
const router = createRouter();

export default router
