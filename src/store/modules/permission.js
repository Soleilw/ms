import router, { DynamicRoutes } from '@/router/index'
import dynamicRoutes from '@/router/dynamic-router'
import { recursionRouter } from '@/utils/recursion-router'

export default {
    namespaced: true,
    state: {
        permissionList: null,
        sidebarMenu: [],
        currentMenu: '',
        control_list: []
    },
    mutations: {
        SET_PERMISSION_LIST(state, routes) {
            state.permissionList = routes
        },
        SET_SIDEBAR_MENU(state, menu) {
            state.sidebarMenu = menu
        },
        SET_CURRENT_MENU(state, currentMenu) {
            state.currentMenu = currentMenu
        },
        SET_CONTROL_LIST(state, list) {
            state.control_list = list
        }
    },
    actions: {
        async FETCH_PERMISSION({commit, state}){
            let arr = ['project','aip','index','abc','address','device'];
            let routes = recursionRouter(arr, dynamicRoutes);
            let MainContainer = DynamicRoutes.find(item => item.path === '');
            let children = MainContainer.children;
            commit('SET_CONTROL_LIST', [...children, ...dynamicRoutes]);
            children.push(...routes);
            commit('SET_SIDEBAR_MENU', children);
            let initialRoutes = router.options.routes;
            router.addRoutes(DynamicRoutes);
            console.log(DynamicRoutes)
            commit('SET_PERMISSION_LIST', [...initialRoutes, ...DynamicRoutes]);
        }
    
    }
}