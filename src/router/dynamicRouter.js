const dynamicRouter = [
	{
		path: '/baiduaip',
		name: 'baiduaip',
		component: () => import('@/views/baiduAip'),
		meta: {
			title: '百度接口',
			icon: 'el-icon-document'
		}
	},
	{
		path: '/project',
		name: 'project',
		component: () => import('@/views/project'),
		meta: {
			title: '项目管理',
			icon: 'el-icon-document'
		}
	},
	{
		path: '/address',
		name: 'address',
		component: () => import('@/views/address'),
		meta: {
			title: '地址管理',
			icon: 'el-icon-document'
		}
	},
	{
		path: '/face',
		name: 'face',
		component: () => import('@/views/face'),
		meta: {
			title: '人脸管理',
			icon: 'el-icon-document'
		}
	},
	{
		path: '/device',
		name: 'device',
		component: () => import('@/views/device'),
		meta: {
			title: '设备管理',
			icon: 'el-icon-document'
		}
	},
	{
		path: '/package',
		name: 'package',
		component: () => import('@/views/package'),
		meta: {
			title: '包管理',
			icon: 'el-icon-document'
		}
	},
	// {
	// 	path: '/version',
	// 	component: () => import('@/views/version'),
	// 	meta: {
	// 		title: 'APK版本管理'
	// 	}
	// },
]

export default dynamicRouter
