import axios from '@/plugins/axios'
import url from './url.js'

const API = {}
API.login = function(formData) {
	return axios.post(url.Login, formData)
}

API.logout = function() {
	return axios.get(url.Logout)
}

API.permissions = function () {
	return axios.get(url.Permissions)
}
export default API