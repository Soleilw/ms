const dynamicRouter = [{
	    path: '/overview',
	    name: 'overview',
	    component: () => import('@/views/overview'),
	    meta: {
	        title: '数据总览',
	        icon: 'el-icon-menu'
	    }
	},{
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
			icon: 'el-icon-folder'
		}
	},
	{
		path: '/address',
		name: 'address',
		component: () => import('@/views/address'),
		meta: {
			title: '地址管理',
			icon: 'el-icon-location'
		}
	},
	{
		path: '/face',
		name: 'face',
		component: () => import('@/views/face'),
		meta: {
			title: '人脸管理',
			icon: 'el-icon-picture'
		}
	},
	{
		path: '/device',
		name: 'device',
		component: () => import('@/views/device'),
		meta: {
			title: '设备管理',
			icon: 'el-icon-video-camera'
		}
	},
	{
		path: '/package',
		name: 'package',
		component: () => import('@/views/package'),
		meta: {
			title: '安装包管理',
			icon: 'el-icon-shopping-bag-2'
		}
	},
	{
		path: '/danger',
		name: 'danger',
		component: () => import('@/views/danger/index'),
		meta: {
			title: '可疑管理',
			icon: 'el-icon-picture-outline',
		},
		children: [{
				path: '/doubtable',
				name: 'doubtable',
				component: () => import('@/views/danger/doubtable'),
				meta: {
					title: '可疑人脸管理',
					icon: 'el-icon-warning'
				}
			},
			{
				path: '/dangerlogs',
				name: 'dangerlogs',
				component: () => import('@/views/danger/dangerlogs'),
				meta: {
					title: '可疑人脸日志',
					icon: 'el-icon-s-release'
				},
			}
		]
	},
	{
	    path: '/permission',
	    name: 'permission',
	    component: () => import('@/views/permission/permission.vue'),
	    meta: {
	        title: '权限管理',
	        icon: 'el-icon-setting'
	    }
	}
	




]



export default dynamicRouter
