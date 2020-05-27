import router, { DynamicRoutes } from '@/router/index'
import { recursionRouter } from '@/utils/recursion-router'
import dynamicRouter from '@/router/dynamicRouter'

export default {
    namespaced: true,
    state: {
        permissionList: null /** 所有路由 */,
        sidebarMenu: [] /** 导航菜单 */,
        currentMenu: '' /** 当前active导航菜单 */,
        control_list: [] /** 完整的权限列表 */,
    },
    getters: {},
    mutations: {
        SET_PERMISSION(state, routes) {
            state.permissionList = routes
        },
        CLEAR_PERMISSION(state) {
            state.permissionList = null
        },
        SET_MENU(state, menu) {
            state.sidebarMenu = menu
        },
        CLEAR_MENU(state) {
            state.sidebarMenu = []
        },
        SET_CURRENT_MENU(state, currentMenu) {
            state.currentMenu = currentMenu
        },
        SET_CONTROL_LIST(state, list) {
            state.control_list = list
        }
    },
	
    actions: {
        async FETCH_PERMISSION({ commit, state }) {
			let role = localStorage.getItem('role');
			if(role === 'super') {
				let MainContainer = DynamicRoutes.find(v => v.path === '')
				let children = MainContainer.children
			  children.push(...dynamicRouter)
			  commit('SET_MENU', children)
			  let initialRoutes = router.options.routes
			  router.addRoutes(DynamicRoutes)
			  commit('SET_PERMISSION', [...initialRoutes, ...DynamicRoutes])
			} else {
				let arr = localStorage.getItem('permissions')
				let routes = recursionRouter(arr, dynamicRouter)
				let MainContainer = DynamicRoutes.find(v => v.path === '')
				let children = MainContainer.children
				commit('SET_CONTROL_LIST', [...children, ...dynamicRouter])
				children.push(...routes)
				commit('SET_MENU', children)
				let initialRoutes = router.options.routes
				router.addRoutes(DynamicRoutes)
				commit('SET_PERMISSION', [...initialRoutes, ...DynamicRoutes])
			}
        }
    }
}
