import request from '../utils/request.js'

function queryData(data) {
  var str = "";
  for (var i in data) {
    str += i + "=" + data[i] + "&";
  }
  if (str) {
    str = "?" + str;
    str = str.substr(0, str.length - 1);
  }
  return str;
}

var api = {};

api.get = function(url, data) {
  return request({
    url: 'https://easy-mock.com/mock/5de9b43f2e6a182661ce3f36/example' + url + queryData(data),
    method: 'get'
  })
}

api.post = function(url, data) {
	return request({
		url: 'https://easy-mock.com/mock/5de9b43f2e6a182661ce3f36/example' + url,
		method: 'post',
		data: data
	})
}

api.delete = function(url, data) {
	return request({
		url: 'https://gong.fengniaotuangou.cn/api' + url,
		method: 'delete',
		data: data
	})
}

export default api;