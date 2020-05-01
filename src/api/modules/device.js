import url from '../url.js'
import api from '../api.js'

var API = {};

// 新增项目配置
API.device = function(formData) {
	return new Promise(function(resolve, reject) {
		api.post(url.Device, formData).then(response => {
			resolve(response);
		}).catch(error => {
			reject(error);
		})
	})
	
}

// 获取项目
API.devices = function(page) {
	return new Promise(function(resolve,reject) {
		api.get(url.Devices, {
			page: page
		}).then(response => {
			resolve(response);
		}).catch(error => {
			reject(error);
		})
	})
}


export default API;