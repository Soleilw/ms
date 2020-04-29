import user from '../../api/modules/user.js'

const state = {
	roles: []
}

const mutations = {
	SET_ROLES: (state, roles) => {
		state.roles = roles;
	}
}

const actions = {
	login({ commit }, userInfo) {
		const {username, password} = userInfo;
		user.login('admin', '123456').then(response => {
			const { data } = response;
			const { roles } = data;
			commit('SET_ROLES', roles);
			resolve(data);
		})
	}
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}