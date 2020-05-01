import api from '../api.js'
import url from '../url.js'

var user = {};

// 登录
user.login = function(formData) {
	return new Promise(function(resolve, reject) {
		api.post(url.Login, formData).then(response => {
			resolve(response);
		}).catch(error => {
			reject(error)
		})
	})
}

// 重置密码
user.repwd = function(formData) {
	return new Promise(function(resolve, reject) {
		api.post(url.Password, formData).then(response => {
			resolve(response);
		}).catch(error => {
			reject(error)
		})
	})
}


export default user;