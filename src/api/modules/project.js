import url from '../url.js'
import api from '../api.js'

var API = {};


// 新增项目配置
API.project = function(formData) {
	return new Promise(function(resolve, reject) {
		api.post(url.Project, formData).then(response => {
			resolve(response);
		}).catch(error => {
			reject(error);
		})
	})
	
}

// 获取项目
API.projects = function(page) {
	return new Promise(function(resolve,reject) {
		api.get(url.Projects, {
			page: page
		}).then(response => {
			resolve(response);
		}).catch(error => {
			reject(error);
		})
	})
}


export default API;