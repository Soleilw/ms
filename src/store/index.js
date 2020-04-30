import Vue from 'vue'
import Vuex from 'vuex'

import state from './state'
import modules from './modules'
import mutations from './mutations'

Vue.use(Vuex)

export default new Vuex.Store({
    state,
    mutations,
    modules
})
