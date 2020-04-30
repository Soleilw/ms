import Layout from '@/views/layout/index'

const dynamicRoutes = [
	{
		path: '/project',
		name: 'project',
		component: resolve => require(['@/views/msProject/index'], resolve),
		meta: {
			title: '项目管理',
			icon: 'el-icon-user'
		}
	},
	{
		path: '/aip',
		name: 'aip',
		component: Layout,
		meta: {
			title: 'AIP管理',
			icon: 'el-icon-user'
		},
		children: [ 
			{
			path: '/aip/index',
			name: 'index',
			component: resolve => require(['@/views/msBaiduAip/index'], resolve),
			meta: {
				title: 'AIP管理',
				icon: 'el-icon-user'
			}
		},
		{
			path: '/aip/abc',
			name: 'abc',
			component: resolve => require(['@/views/msBaiduAip/component/abc'], resolve),
			meta: {
				title: 'AI理',
				icon: 'el-icon-user'
			}
		}
			
		]
	},
	
	{
		path: '/address',
		name: 'address',
		component: resolve => require(['@/views/msAddress/index'], resolve),
		meta: {
			title: '地址管理',
			icon: 'el-icon-user'
		}
	},
	{
		path: '/device',
		name: 'device',
		component: resolve => require(['@/views/msDevice/index'], resolve),
		meta: {
			title: '设备管理',
			icon: 'el-icon-user'
		}
	}
]


export default dynamicRoutes