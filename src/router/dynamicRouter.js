const dynamicRouter = [
	{
		path: '/baiduaip',
		component: () => import('@/views/baiduAip'),
		meta: {
			title: '百度接口'
		}
	},
	{
		path: '/package',
		component: () => import('@/views/package'),
		meta: {
			title: 'APK管理'
		}
	},
	// {
	// 	path: '/version',
	// 	component: () => import('@/views/version'),
	// 	meta: {
	// 		title: 'APK版本管理'
	// 	}
	// },
	{
		path: '/project',
		component: () => import('@/views/project'),
		meta: {
			title: '项目管理'
		}
	},
	{
		path: '/address',
		component: () => import('@/views/address'),
		meta: {
			title: '地址管理'
		}
	},
	{
		path: '/face',
		component: () => import('@/views/face'),
		meta: {
			title: '人脸管理'
		}
	},
	{
		path: '/device',
		component: () => import('@/views/device'),
		meta: {
			title: '设备管理'
		}
	}
]

export default dynamicRouter
