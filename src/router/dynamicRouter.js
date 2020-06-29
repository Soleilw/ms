const dynamicRouter = [{
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
	{
		path: '/doubtable',
		name: 'doubtable',
		component: () => import('@/views/doubtable'),
		meta: {
			title: '可疑人脸管理',
			icon: 'el-icon-document'
		}
	},
	{
		path: '/dangerlogs',
		name: 'dangerlogs',
		component: () => import('@/views/dangerlogs'),
		meta: {
			title: '可疑人脸日志',
			icon: 'el-icon-document'
		},
	}
]



export default dynamicRouter
