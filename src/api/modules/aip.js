import url from '../url.js'
import api from '../api.js'

var aip = {};


// 新增百度配置
aip.aip = function(formData) {
	return new Promise(function(resolve, reject) {
		api.post(url.Aip, formData).then(response => {
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


// 新增项目配置
aip.project = function(formData) {
	return new Promise(function(resolve, reject) {
		api.post(url.Project, formData).then(response => {
			debugger
			resolve(response);
		}).catch(error => {
			reject(error);
		})
	})
	
}

// 获取项目
aip.projects = function(page) {
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

// 新增项目配置
aip.address = function(formData) {
	return new Promise(function(resolve, reject) {
		api.post(url.Address, formData).then(response => {
			debugger
			resolve(response);
		}).catch(error => {
			reject(error);
		})
	})
	
}

// 获取项目
aip.addresses = function(page) {
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

// 新增项目配置
aip.project = function(formData) {
	return new Promise(function(resolve, reject) {
		api.post(url.Project, formData).then(response => {
			debugger
			resolve(response);
		}).catch(error => {
			reject(error);
		})
	})
	
}

// 获取项目
aip.projects = function(page) {
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


export default aip;