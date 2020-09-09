import axios from '@/plugins/axios'
import url from './url.js'

var API = {};

// 百度接口
API.aip = function(data) {
	return axios.post(url.Aip, data)
}

// 删除
API.delAip = function(id) {
	return axios.del(url.Aip, {
		id: id
	})
}

// 获取
API.aips = function(page, limit) {
	return axios.get(url.Aips, {
		page: page,
		limit: limit
	})
}

// 包管理&版本
API.apk = function(formData) {
	return axios.post(url.Apk, formData)
}

API.apks = function(page, limit) {
	return axios.get(url.Apks, {
		page: page,
		limit: limit
	})
}

API.apkVersion = function(formData) {
	return axios.post(url.ApkVersion, formData)
}

API.apkVersions = function(page, limit, apk_id) {
	return axios.get(url.ApkVersions, {
		page: page,
		limit: limit,
		apk_id: apk_id
	})
}

// 获取版本
API._apkVersions = function(id) {
	return axios.get(url.ApkVersions, {
		id: id
	})
}

// 发布版本
API.publishApk = function(data) {
	return axios.post(url.PublishApk, data)
}

// 项目管理
API.project = function(data) {
	return axios.post(url.Project, data)

}

API.projects = function(page, limit) {
	return axios.get(url.Projects, {
		page: page,
		limit: limit
	})
}

// 地址管理
API.address = function(data) {
	return axios.post(url.Address, data)
}

API.getaddress = function(id) {
	return axios.get(url.Address, {
		id: id
	})
}

API.addresses = function(page, limit, project_id, area_id) {
	return axios.get(url.Addresses, {
		page: page,
		limit: limit,
		project_id: project_id,
		area_id: area_id
	})
}

API.addressTypes = function(page, limit) {
	return axios.get(url.AddressTypes, {
		page: page,
		limit: limit
	})
}

// 人脸管理
API.face = function(data) {
	return axios.post(url.Face, data)
}

API.faces = function(page, limit, name) {
	return axios.get(url.Faces, {
		page: page,
		limit: limit,
		name: name
	})
}

// 获取推送记录
API.pushRecords = function(page, limit, name) {
	return axios.get(url.PushRecords, {
		page: page,
		limit: limit,
		name: name
	})
}

// 获取推送详情
API.pushRecordCommands = function(id) {
	return axios.get(url.PushRecordCommands, {
		id: id
	})
}

// 重新推送
API.againPush = function(data) {
	return axios.post(url.PushRecord, data)
}

// 获取社区列表（省市区选中）
API.areas = function(page, limit, parent_id) {
	return axios.get(url.Areas, {
		page: page,
		limit: limit,
		parent_id: parent_id
	})
}

// 新增地区
API.area = function(data) {
	return axios.post(url.Area, data)
}



// 设备管理
API.device = function(data) {
	return axios.post(url.Device, data)
}

// 编辑查看用
API._device = function(uuid) {
	return axios.get(url.Device, {
		uuid: uuid
	})
}

// 获取设备
// 获取人脸组
// 地址搜索
API.devices = function(page, limit, type, uuid, area_id, address_id) {
	return axios.get(url.Devices, {
		page: page,
		limit: limit,
		type: type,
		uuid: uuid,
		area_id: area_id,
		address_id: address_id
	})
}

API._devices = function(direction, addresses, limit) {
	return axios.get(url.Devices, {
		direction: direction,
		addresses: addresses,
		limit: limit
	})
}

API.deviceLogs = function(page, limit, uuid, type) {
	return axios.get(url.DeviceLogs, {
		page: page,
		limit: limit,
		uuid: uuid,
		type: type
	})
}

API.deviceFaceLogs = function(page, limit, uuid, address_id) {
	return axios.get(url.DeviceRecord, {
		page: page,
		limit: limit,
		uuid: uuid,
		address_id: address_id
	})
}

API.deviceTypes = function() {
	return axios.get(url.DeviceTypes)
}

// 查看心跳
API.deviceHeart = function(uuid) {
	return axios.get(url.DeviceHeartbeat, {
		uuid: uuid
	})
}

// 查看指令
API.deviceCommands = function(page, limit, uuid) {
	return axios.get(url.DeviceCommands, {
		page: page,
		limit: limit,
		uuid: uuid
	})
}


// 获取指令类型
API.commandsType = function(type) {
	return axios.get(url.Commands, {
		type: type
	})
}

// 发送指令
API.sendDeviceCommand = function(data) {
	return axios.post(url.SendDeviceCommand, data)
}

// 查看用户列表
API.deviceUserList = function(page, limit, uuid) {
	return axios.get(url.DeviceUserList, {
		page: page,
		limit: limit,
		uuid: uuid
	})
}

// 搜索设备号
// API.search = function(page,limit,uuid) {
// 	return axios.get(url.Devices, {page:page, limit:limit,uuid:uuid})
// }

// 获取人脸组
API.faceGroup = function(address_id) {
	return axios.get(url.FaceGroup, {
		address_id: address_id
	})
}

// 获取UUID
API.uuid = function(page, limit) {
	return axios.get(url.Uuid, {
		page: page,
		limit: limit
	})
}

// 创建可疑人脸
API.dangerFace = function(data) {
	return axios.post(url.DangerFace, data)
}

// 删除可疑人脸
API.delDangerFace = function(id) {
	return axios.del(url.DelDangerFace, {
		id: id
	})
}

// 获取可疑人脸
API.dangerFaces = function(page, limit) {
	return axios.get(url.DangerFaces, {
		page: page,
		limit: limit
	})
}

// 获取可疑人脸
API.dangerLogs = function(page, limit) {
	return axios.get(url.DangerLogs, {
		page: page,
		limit: limit
	})
}

// 权限管理
// 获取角色
API.roles = function(page, limit) {
	return axios.get(url.Roles, {
		page: page,
		limit: limit
	})
}

// 获取单个角色
API.oneRole = function(name) {
	return axios.get(url.Role, {
		name: name
	})
}

// 增加角色
API.role = function(data) {
	return axios.post(url.Role, data)
}

// 获取账号列表
API.users = function(page, limit) {
	return axios.get(url.Users, {
		page: page,
		limit: limit
	})
}

API.user = function(data) {
	return axios.post(url.User, data)
}

// 辖区管理
// 添加公安辖区
API.policeStation = function(data) {
	return axios.post(url.PoliceStation, data)
}

// 获取公安辖区
API.policeStations = function(page, limit, name) {
	return axios.get(url.PoliceStations, {
		page: page,
		limit: limit,
		name: name
	})
}


// 资讯管理
// 新增资讯
API.information = function(data) {
	return axios.post(url.Information, data)
}

// 获取资讯
API.informations = function(page, limit, id, title) {
	return axios.get(url.Information, {
		page: page,
		limit: limit,
		id: id,
		title: title
	})
}

// 人脸开关
// 新增开关
API.faceSwitch = function(data) {
	return axios.post(url.FaceSwicth, data)
}

// 删除开关
API.delFaceSwitch = function(id) {
	return axios.del(url.FaceSwicth, {
		id: id
	})
}

// 获取开关
API.faceSwitches = function(page, limit) {
	return axios.get(url.FaceSwicthes, {
		page: page,
		limit: limit
	})
}


export default API
