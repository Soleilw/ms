import url from '../url.js'
import api from '../api.js'

var API = {};


// 新增百度配置
API.aip = function(formData) {
	return new Promise(function(resolve, reject) {
		api.post(url.Aip, formData).then(response => {
			resolve(response);
		}).catch(error => {
			reject(error);
		})
	})
	
}

// 获取百度接口配置
API.aips = function(page) {
	return new Promise(function(resolve,reject) {
		api.get(url.Aips, {
			page: page
		}).then(response => {
			resolve(response);
		}).catch(error => {
			reject(error);
		})
	})
}

// 删除百度接口
API.delAip = function(id) {
	return new Promise(function(resolve, reject) {
		api.delete(url.Aip, {
			id: id
		}).then(response => {
			resolve(response);
		}).catch(error => {
			reject(error);
		})
	})
}

// 恢复百度接口
API.restoreAip = function(id) {
	return new Promise(function(resolve, reject) {
		api.get(url.RestoreAip, {
			id: id
		}).then(response => {
			resolve(response);
		}).catch(error => {
			reject(error);
		})
	})
}


export default API;