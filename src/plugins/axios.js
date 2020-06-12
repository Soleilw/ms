import Vue from 'vue'
import axios from 'axios'
import {
	Message
} from 'element-ui'
import {
	MessageBox
} from 'element-ui';
var Qs = require('qs')

const http = {}

const instance = axios.create({
	timeout: 5000,
	baseURL: 'https://api.fengniaotuangou.cn',
	headers: {
		'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
	},
	validateStatus(status) {
		switch (status) {
			case 400:
				Message.error('请求出错')
				break
			case 401:
				Message.warning({
					message: '授权失败，请重新登录'
				})
				setTimeout(() => {
					localStorage.removeItem('role');
					localStorage.removeItem('token');
				}, 1000)
				return
			case 403:
				Message.warning({
					message: '拒绝访问'
				})
				break
			case 404:
				Message.warning({
					message: '请求错误,未找到该资源'
				})
				break
			case 500:
				Message.warning({
					message: '请重新登录'
				})
				break
		}
		return status >= 200 && status < 300
	}
})

// 请求拦截
instance.interceptors.request.use(config => {
	// var token = localStorage.getItem('token');
	// if (token) {
	// 	config.headers.common['token'] = `${token}`
	// }
	return config
}, err => {
	return Promise.reject(error)
})

// 响应拦截
instance.interceptors.response.use(res => {
	if (res.status === 200) {
		return res.data
	}
}, err => {
	return Promise.reject(err)
})

http.get = function(url, data = {}) {
	return new Promise((resolve, reject) => {
		instance.get(url, {
			params: data
		}).then(res => {
			resolve(res.data)
		})
	}).catch(err => {
		reject(err);
	})
}

http.del = function(url, data = {}) {
	return new Promise((resolve, reject) => {
		instance.delete(url, {
			params: data
		}).then(res => {
			resolve(res.data)
		}).catch(err => {
			reject(err);
		})
	})
}

http.post = function(url, data) {
	return new Promise((resolve, reject) => {
		instance.post(url, Qs.stringify(data)).then(res => {
			resolve(res.data)
		})
	}).catch(err => {
		reject(err);
	})
}

export default http
