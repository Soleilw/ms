import axios from 'axios'

const service = axios.create({
	 timeout: 5000
})

// 添加请求拦截器
service.interceptors.request.use(config => {
	return config;
}, error => {
	console.log(error)
	return Promise.reject(error)
})

// 添加响应拦截器
service.interceptors.response.use(response => {
	debugger
	// let res = response.data;
	if(response.status === 200) {
		return response;
	} else {
		debugger
		if(response.status === 401) {
			this.$router.push('/login');
		}
		return Promise.reject(new Error(response.msg || 'Error'));
	}
}, error => {
	debugger
	console.log(error);
	return Promise.reject(error);
})

export default service;