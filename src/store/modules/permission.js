// import { asyncRoutes, constantRoutes } from '@/router/index.js'

function hasPermission(roles, route) {
  if (route.meta && route.meta.roles) {
    return roles.some(role => route.meta.roles.includes(role))
  } else {
    return true
  }
}

export function fifterAsyncRoutes(routes, roles) {
	const res = []
	routers.forEach(route => {
		const tmp = { ...route } 
		if(hasPermission(roles, tmp)) {
			if(tmp.children) {
				tmp.children = fifterAsyncRoutes(tmp.children, roles)
			}
			res.push(tmp);
		}
	})
	
	return res;
}

const state = {
	routes: [], // 完整的路由表
	addRoutes: [] // 用户可访问路由表
}

const mutations = {
	SET_ROUTES: (state, routes) => {
		state.addRoutes = routes
		state.routes = constantRoutes.concat(routes)
	}
}

const actions = {
	generateRoutes({ commit }, roles) {
		return new Promise(resolve => {
			let accessedRoutes;
			if(roles.includes('admin')) {
				accessedRoutes = asyncRoutes || []
			} else {
				accessedRoutes = fifterAsyncRoutes(asyncRoutes, roles);
			}
			
			commit('SET_ROUTES', accessRoutes);
			resolve(accessRoutes);
		})
	}
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}