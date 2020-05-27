import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

import '@/assets/style/reset.css'
import '@/assets/style/commom.scss'

Vue.config.productionTip = false

// router.beforeEach((to, from, next) => {
//     document.title = `${to.meta.title} | 图巴诺校园安全系统`
//     const token = localStorage.getItem('token');
//     if (!token && to.path !== '/login') {
//         next({ path: "/login" });
//     } else if (token) {
//         next()
//     }
// });

const whiteList = ['/login']
// router.beforeEach((to, from, next) => {
// 	document.title = `${to.meta.title} - 图巴诺总控`;
// 	// const token = localStorage.getItem('crl-token');
// 	if (whiteList.indexOf(to.path) !== -1) {
// 		next();
// 	} 
// 	// if(!token && to.path !== '/login') {
// 	// 	next({ path: "/login" });
// 	// } else if(token) {
// 	// 	next();
// 	// }
// })

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
