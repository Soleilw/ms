import axios from '@/plugins/axios'
import url from './url.js'

const API = {}
API.login = function(formData) {
	return axios.post(url.Login, formData)
}

API.logout = function() {
	return axios.get(url.Logout)
}

API.token = function () {
	return axios.get(url.Token)
}
export default API