import axios from '@/plugins/axios'
import url from './url.js'

var API = {};

// 百度接口
API.aip = function(data) {
	return axios.post(url.Aip, data)
}

// 删除
API.delAip = function(id) {
	return axios.del(url.Aip, {id:id})
}

API.aips = function(page,limit) {
	return axios.get(url.Aips, {page: page,limit: limit})
}

// 包管理&版本
API.apk = function(formData) {
	return axios.post(url.Apk, formData)
}

API.apks = function(page,limit) {
	return axios.get(url.Apks, {page: page, limit: limit})
}

API.apkVersion = function(formData) {
	return axios.post(url.ApkVersion, formData)
}

API.apkVersions = function(page, limit, apk_id) {
	return axios.get(url.ApkVersions, {page: page,limit: limit, apk_id: apk_id})
}

// 获取版本
API._apkVersions = function(id) {
	return axios.get(url.ApkVersions, {id: id})
}

// 发布版本
API.publishApk = function(data) {
	return axios.post(url.PublishApk, data)
}

// 项目管理
API.project = function(data) {
	return axios.post(url.Project, data)
	
}

API.projects = function(page,limit) {
	return axios.get(url.Projects, {page: page, limit: limit})
}

// 地址管理
API.address = function(data) {
	return axios.post(url.Address, data)
}

API.addresses = function(page,limit) {
	return axios.get(url.Addresses, {page: page, limit: limit})
}

// 人脸管理
API.face = function(data) {
	return axios.post(url.Face, data)
}

API.faces = function(page,limit) {
	return axios.get(url.Faces, {page: page, limit: limit})
}



// 设备管理
API.device = function(data) {
	return axios.post(url.Device, data)
}

API.devices = function(page,limit,id) {
	return axios.get(url.Devices, {page: page, limit: limit, id: id})
}

API._devices = function(direction,addresses,limit) {
	return axios.get(url.Devices, {direction: direction,addresses:addresses,limit:limit})
}

API.deviceLogs = function(page, limit, uuid, type) {
	return axios.get(url.DeviceLogs, {page: page,limit:limit,uuid:uuid, type:type})
}

API.deviceFaceLogs = function(page, limit, uuid, address_id) {
	return axios.get(url.DeviceRecord, {page: page,limit:limit,uuid:uuid, address_id:address_id})
}

API.deviceTypes = function() {
	return axios.get(url.DeviceTypes)
}

// 查看心跳
API.deviceHeart = function(uuid) {
	return axios.get(url.DeviceHeartbeat, {uuid: uuid})
}

// 查看指令
API.deviceCommands = function(page, limit, uuid) {
	return axios.get(url.DeviceCommands, {page:page, limit:limit,uuid: uuid})
}

// 搜索设备号
API.search = function(uuid) {
	return axios.get(url.Devices, {uuid:uuid})
}

// 获取人脸组
API.faceGroup = function(address_id) {
	return axios.get(url.FaceGroup, {address_id: address_id})
}

// 获取UUID
API.uuid = function(page,limit) {
	return axios.get(url.Uuid, {page: page, limit: limit})
}

// 创建可疑人脸
API.dangerFace = function(data) {
	return axios.post(url.DangerFace, data)
}

// 删除可疑人脸
API.delDangerFace = function(id) {
	return axios.del(url.DelDangerFace, {id: id})
}

// 获取可疑人脸
API.dangerFaces = function(page, limit) {
	return axios.get(url.DangerFaces, {page: page, limit: limit})
}

// 获取可疑人脸
API.dangerLogs = function(page, limit) {
	return axios.get(url.DangerLogs, {page: page, limit: limit})
}



export default API

