const sidebar = [{
		index: 'user',
		title: '用户管理',
		icon: 'el-icon-document',
	},
	{
		index: 'student',
		title: '学生管理',
		icon: 'el-icon-user-solid',
		children: [{
				index: 'infomation',
				title: '学生列表',
			}, {
				index: 'grade',
				title: '班级管理',
			}, {
				index: 'announcement',
				title: '公告管理',
				operationList: [{
					value: 'announcement-add',
					title: '增加',
				},
				{
					value: 'announcement-del',
					title: '删除',
				},
				{
					value: 'announcement-edit',
					title: '编辑',
				},
				{
					value: 'announcement-post',
					title: '查询',
				}],
			},
			{
				index: 'achievement',
				title: '成绩管理',
			},
			{
				index: 'family',
				title: '家长信息',
			}
		]
	}, {
		index: 'teacher',
		title: '教职工管理',
		icon: 'el-icon-user',
	},
	{
		index: 'school',
		title: '学校管理',
		icon: 'el-icon-school',
	},
	{
		index: '2',
		title: '图文管理',
		icon: 'el-icon-picture',
		children: [{
				index: 'banner',
				title: '轮播图管理',
			},
			{
				index: 'message',
				title: '资讯管理',
				checked: false,
			},
			{
				index: 'document',
				title: '文档管理',
				checked: false,
			}
		],
	},
	{
		index: 'buy',
		title: '购买服务管理',
		icon: 'el-icon-school',
	},
	{
		index: 'permission',
		title: '权限管理',
		icon: 'el-icon-school',
	},
]

export default sidebar
