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

var headersB = {"content-type" : "application/json; charset=UTF-8"};//设置请求头
var headersC = {"Content-Type" : "application/x-www-form-urlencoded"};//设置请求头
var headersE = { "content-type": "application/json; charset=UTF-8"};//设置请求头

api.get = function(url, data) {
  return request({
    url: 'https://api.fengniaotuangou.cn' + url + queryData(data),
    method: 'get',
	headers: headersC
  })
}

api.post = function(url, data) {
	return request({
		url: 'https://api.fengniaotuangou.cn' + url,
		method: 'post',
		data: data,
		headers: headersC
	})
}

api.delete = function(url, data) {
	return request({
		url: 'https://api.fengniaotuangou.cn' + url,
		method: 'delete',
		data: data
	})
}

export default api;