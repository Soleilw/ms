const url = {
	// 用户管理接口
	'Login': '/FaceCore/pubilc/login', // 登录
	'Password': '/FaceCore/public/password', // 重置密码
	
	// 百度配置
	'Aip': '/FaceCore/public/aip', // 新增百度配置
	'Aips': '/FaceCore/public/aips', // 获取百度接口配置
	'Aip': '/FaceCore/public/aip', // 删除百度配置,方式‘delete’
	'RestoreAip': '/FaceCore/public/restore/aip', // 恢复百度接口配置
	
	// 项目管理
	'Project': '/FaceCore/public/project', // 新增项目
	'Projects': '/FaceCore/public/projects', // 获取项目列表
	'Project': '/FaceCore/public/project', // 删除项目,方式‘delete’
	'RestoreProject': '/FaceCore/public/restore/project', // 恢复项目
	
	// 地址管理
	'Address': '/FaceCore/public/address', // 新增地址
	'Addresses': '/FaceCore/public/addresses', // 获取地址列表
	'Address': '/FaceCore/public/address', // 删除地址,方式‘delete’
	'RestoreAddress': '/FaceCore/public/restore/address', // 恢复地址
	
	// 人脸管理
	'Face': '/FaceCore/public/face', // 新增人脸
	'PassFace': '/FaceCore/public/pass/face', // 人脸通过
	'Face': '/FaceCore/public/face', // 删除人脸,方式‘delete’
	'Faces': '/FaceCore/public/faces', // 获取人脸列表
	
	// 设备管理
	'Device': '/FaceCore/public/device', // 新增设备
	'Devices': '/FaceCore/public/devices', // 获取设备列表
	'DeviceFaceGroup': '/FaceCore/public/device/face/group', // 添加设备人脸组
	
	// apk管理
	'Apk': '/FaceCore/public/apk', // 创建apk
	'Apks': '/FaceCore/public/apks', // 获取apk列表
	'ApkVersion': '/FaceCore/public/apk/version', // 新增apk版本
	'ApkVersions': '/FaceCore/public/apk/versions', // 获取apk版本列表
	
	// 上传人脸
	'UploadFace': '/FaceCore/public/upload/face', // 上传人脸
	
	// token
	'ApiToken': '/FaceCore/public/api/token'
}

module.exports = url;




