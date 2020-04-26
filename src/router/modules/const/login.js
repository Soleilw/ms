export default [
	{
		path: '/login', // 登录
		name: 'login',
		component: resolve => require(['../../../views/Login'], resolve),
		meta: {
			title: '登录'
		}
	}
]