const url = {
	// 用户管理接口
	'Login': '/login', // 登录
	'Password': '/password', // 重置密码
	'Token': '/token', // 重置密码
	'Permissions': '/permissions', // 重置密码

	
	// 百度配置
	'Aip': '/aip', // 新增百度配置
	'Aips': '/aips', // 获取百度接口配置
	'Aip': '/aip', // 删除百度配置,方式‘delete’
	'RestoreAip': '/restore/aip', // 恢复百度接口配置
	
	// 项目管理
	'Project': '/project', // 新增项目
	'Projects': '/projects', // 获取项目列表
	'Project': '/project', // 删除项目,方式‘delete’
	'RestoreProject': '/restore/project', // 恢复项目
	
	// 地址管理
	'Address': '/address', // 新增地址
	'Addresses': '/addresses', // 获取地址列表
	'Address': '/address', // 删除地址,方式‘delete’
	'RestoreAddress': '/restore/address', // 恢复地址
	'AddressTypes': '/address/types', // 地址类型
	'AddressTypes': '/address/types', // 恢复地址
	'Areas': '/areas', // 获取社区
	'Area': '/area', // 新增地区
	
	// 人脸管理
	'Face': '/face', // 新增人脸
	'PassFace': '/pass/face', // 人脸通过
	'Face': '/face', // 删除人脸,方式‘delete’
	'Faces': '/faces', // 获取人脸列表
	'PushRecords': '/push/records', // 获取推送记录
	'PushRecordCommands': '/push/record/commands', // 获取推送详情
	'PushRecord': '/push/record', // 获取推送详情
	
	// 设备管理
	'Device': '/device', // 新增设备
	'Devices': '/devices', // 获取设备列表
	'Uuid': '/unknown/devices', // 添加设备人脸组
	'DeviceFaceGroup': '/device/face/group', // 添加设备人脸组
	"FaceGroup": '/face/groups',
	"DeviceLogs": '/device/logs', // 查看日志
	"DeviceRecord": '/face/logs', // 查看进出记录
	"DeviceTypes": '/device/types', // 查看日志
	"DeviceHeartbeat": '/device/heartbeat', // 查看心跳
	"DeviceCommands": '/device/commands', // 获取指令
	"DeviceUserList": '/device/user/list', // 查看用户列表
	"Commands": '/commands', // 查看指令列表
	"SendDeviceCommand": 'send/device/command', // 发送指令
	
	// apk管理
	'Apk': '/apk', // 创建apk
	'Apks': '/apks', // 获取apk列表
	'ApkVersion': '/apk/version', // 新增apk版本
	'ApkVersions': '/apk/versions', // 获取apk版本列表
	'PublishApk': '/publish/apk', // 获取apk版本列表
	
	// 可疑人脸
	'DangerFace': '/danger/face', // 新增可疑人脸
	'DangerFaces': '/danger/faces', // 获取可疑人脸
	'DelDangerFace': '/danger/face', // 删除可疑人脸
	'DangerLogs': '/danger/logs', // 可疑人脸日志
	
	// 上传人脸
	'UploadFace': '/upload/face', // 上传人脸
	
	// token
	'ApiToken': '/api/token',
	
	// 权限管理
	'Role': '/role' ,// 新增角色
	'Roles': '/roles' ,// 获取角色
}

module.exports = url;




