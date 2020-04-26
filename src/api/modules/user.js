import api from '../api.js'
import url from '../url.js'

var user = {};

// 登录
user.login = function(username, password) {
	return new Promise(function(resolve, reject) {
		debugger
		api.post(url.Login, {
			username: username,
			password: password
		}).then(response => {
			debugger
			resolve(response);
		}).catch(error => {
			debugger
			reject(error)
		})
	})
}

// 重置密码
user.repwd = function(old_password, new_password, confirm_password) {
	return new Promise(function(resolve, reject) {
		api.post(url.Password, {
			old_password: old_password,
			new_password: new_password,
			confirm_password: confirm_password
		}).then(response => {
			resolve(response);
		}).catch(error => {
			reject(error)
		})
	})
}


export default user;