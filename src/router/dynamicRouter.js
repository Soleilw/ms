const dynamicRouter = [{
	    path: '/overview',
	    name: 'overview',
	    component: () => import('@/views/overview/overview'),
	    meta: {
	        title: '数据总览',
	        icon: 'el-icon-menu'
	    }
	},{
		path: '/baiduaip',
		name: 'baiduaip',
		component: () => import('@/views/baiduAip/baiduAip'),
		meta: {
			title: '百度接口',
			icon: 'el-icon-document'
		}
	},
	{
		path: '/project',
		name: 'project',
		component: () => import('@/views/project/project'),
		meta: {
			title: '项目管理',
			icon: 'el-icon-folder'
		}
	},
	{
		path: '/address',
		name: 'address',
		component: () => import('@/views/address/index'),
		meta: {
			title: '地址管理',
			icon: 'el-icon-location'
		},
		children: [{
				path: '/address-list',
				name: 'addressList',
				component: () => import('@/views/address/address-list'),
				meta: {
					title: '地址列表',
					icon: 'el-icon-warning'
				}
			},
			{
				path: '/areas',
				name: 'areas',
				component: () => import('@/views/address/areas'),
				meta: {
					title: '地区管理',
					icon: 'el-icon-s-release'
				},
			}
		]
	},
	{
		path: '/face',
		name: 'face',
		component: () => import('@/views/face/index'),
		meta: {
			title: '人脸管理',
			icon: 'el-icon-picture'
		},
		children: [{
				path: '/face-list',
				name: 'faceList',
				component: () => import('@/views/face/face-list'),
				meta: {
					title: '人脸列表',
					icon: 'el-icon-warning'
				}
			},
			{
				path: '/push-logs',
				name: 'pushLogs',
				component: () => import('@/views/face/push-logs'),
				meta: {
					title: '推送记录',
					icon: 'el-icon-s-release'
				},
			}
		]
	},
	{
		path: '/device',
		name: 'device',
		component: () => import('@/views/device/index'),
		meta: {
			title: '设备管理',
			icon: 'el-icon-video-camera'
		},
		children: [{
				path: '/device-list',
				name: 'deviceList',
				component: () => import('@/views/device/device-list'),
				meta: {
					title: '设备列表',
					icon: 'el-icon-warning'
				}
			},
			{
				path: '/command',
				name: 'command',
				component: () => import('@/views/device/command'),
				meta: {
					title: '指令管理',
					icon: 'el-icon-s-release'
				},
			}
		]
	},
	{
		path: '/package',
		name: 'package',
		component: () => import('@/views/package/package'),
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
	    path: '/outInLogs',
	    name: 'outInLogs',
	    component: () => import('@/views/outInLogs/outInLogs'),
	    meta: {
	        title: '进出记录管理',
	        icon: 'el-icon-setting'
	    }
	},
	{
		path: '/area',  //  辖区管理
		name: 'area',
		component: () => import('@/views/area/index'),
		meta: {
			title: '辖区管理',
			icon: 'el-icon-picture-outline',
		},
		children: [{
				path: '/area-list',
				name: 'areaList',
				component: () => import('@/views/area/area-list'),
				meta: {
					title: '辖区列表',
					icon: 'el-icon-warning'
				}
			}
		]
	},
	{
		path: '/user',  //  用户管理
		name: 'user',
		component: () => import('@/views/user/index'),
		meta: {
			title: '用户管理',
			icon: 'el-icon-picture-outline',
		},
		children: [{
				path: '/user-list',
				name: 'userList',
				component: () => import('@/views/user/user-list'),
				meta: {
					title: '用户列表',
					icon: 'el-icon-warning'
				}
			}
		]
	},
	{
		path: '/renter',  //  住户管理
		name: 'renter',
		component: () => import('@/views/renter/index'),
		meta: {
			title: '住户管理',
			icon: 'el-icon-picture-outline',
		},
		children: [{
				path: '/renter-list',
				name: 'renterList',
				component: () => import('@/views/renter/renter-list'),
				meta: {
					title: '住户列表',
					icon: 'el-icon-warning'
				}
			}
		]
	},
	{
		path: '/school',  //  学校管理
		name: 'school',
		component: () => import('@/views/school/index'),
		meta: {
			title: '学校管理',
			icon: 'el-icon-picture-outline',
		},
		children: [{
				path: '/school-list',
				name: 'schoolList',
				component: () => import('@/views/school/school-list'),
				meta: {
					title: '学校列表',
					icon: 'el-icon-warning'
				}
			}
		]
	},
	{
		path: '/information', // 资讯管理
		name: 'information',
		component: () => import('@/views/information/index'),
		meta: {
			title: '资讯管理',
			icon: 'el-icon-picture-outline',
		},
		children: [{
				path: '/info-list',
				name: 'infoList',
				component: () => import('@/views/information/info-list'),
				meta: {
					title: '资讯列表',
					icon: 'el-icon-warning'
				}
			}
		]
	},
	{
	    path: '/permission',
	    name: 'permission',
	    component: () => import('@/views/permission/index'),
	    meta: {
	        title: '权限管理',
	        icon: 'el-icon-setting'
	    },
		children: [{
				path: '/roles',
				name: 'roles',
				component: () => import('@/views/permission/roles'),
				meta: {
					title: '角色管理',
					icon: 'el-icon-warning'
				}
			},
			{
				path: '/manage',
				name: 'manage',
				component: () => import('@/views/permission/manage'),
				meta: {
					title: '用户管理',
					icon: 'el-icon-s-release'
				},
			}
		]
	}
]



export default dynamicRouter
