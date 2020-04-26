import url from '../url.js'
import api from '../api.js'

var aip = {};

// 新增百度配置
aip.aip = function(name, app-id, api_key, secret_key) {
	return new Promise(function(resolve, reject) {
		api.post(url.Aip, {
			name: name,
			app_id: app_id,
			api_key: api_key,
			secret_key: secret_key
		}).then(response => {
			resolve(response);
		}).catch(error => {
			reject(error);
		})
	})
	
}

// 获取百度接口配置
aip.aips = function(page) {
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
aip.delAip = function(id) {
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
aip.restoreAip = function(id) {
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


export default aip;