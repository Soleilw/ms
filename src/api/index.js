import axios from '@/plugins/axios'
import url from './url.js'

var API = {};

// 百度接口
API.aip = function(data) {
	return axios.post(url.Aip, data)
}

// 删除
API.delAip = function(id) {
	return axios.delete(url.Aip, {id:id})
}

API.aips = function(page) {
	return axios.get(url.Aips, {page: page})
}

// 包管理&版本
API.apk = function(formData) {
	return axios.post(url.Apk, formData)
}

API.apks = function(page) {
	return axios.get(url.Apks, {page: page})
}

API.apkVersion = function(formData) {
	return axios.post(url.ApkVersion, formData)
}

API.apkVersions = function(page, apk_id) {
	return axios.get(url.ApkVersions, {page: page, apk_id: apk_id})
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

API.projects = function(page) {
	return axios.get(url.Projects, {page: page})
}

// 地址管理
API.address = function(data) {
	return axios.post(url.Address, data)
}

API.addresses = function(page) {
	return axios.get(url.Addresses, {page: page})
}

// 人脸管理
API.face = function(data) {
	return axios.post(url.Face, data)
}

API.faces = function(page) {
	return axios.get(url.Faces, {page: page})
}



// 设备管理
API.device = function(data) {
	return axios.post(url.Device, data)
}

API.devices = function(page) {
	return axios.get(url.Devices, {page: page})
}

API._devices = function(direction,addresses,limit) {
	return axios.get(url.Devices, {direction: direction,addresses:addresses,limit:limit})
}

// 获取人脸组
API.faceGroup = function(address_id) {
	return axios.get(url.FaceGroup, {address_id: address_id})
}

// 获取UUID
API.uuid = function(page,limit) {
	return axios.get(url.Uuid, {page: page, limit: limit})
}





export default API

