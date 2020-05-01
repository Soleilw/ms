import url from '../url.js'
import api from '../api.js'

var API = {};

// 新增项目配置
API.address = function(formData) {
	return new Promise(function(resolve, reject) {
		api.post(url.Address, formData).then(response => {
			resolve(response);
		}).catch(error => {
			reject(error);
		})
	})
	
}

// 获取项目
API.addresses = function(page) {
	return new Promise(function(resolve,reject) {
		api.get(url.Addresses, {
			page: page
		}).then(response => {
			resolve(response);
		}).catch(error => {
			reject(error);
		})
	})
}


export default API;