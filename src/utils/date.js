var date = {};

var formatNumber = function(n) {
  n = n.toString()
  return n[1] ? n : '0' + n
}
var regYear = getRegExp("(y+)", "i");
var dateFormat = function(timestamp, format) {
  if (!format) {
    format = "yyyy-MM-dd hh:mm:ss";
  }
  timestamp = parseInt(timestamp);
  var realDate = getDate(timestamp);

  function timeFormat(num) {
    return num < 10 ? '0' + num : num;
  }
  var date = [
    ["M+", timeFormat(realDate.getMonth() + 1)],
    ["d+", timeFormat(realDate.getDate())],
    ["h+", timeFormat(realDate.getHours())],
    ["m+", timeFormat(realDate.getMinutes())],
    ["s+", timeFormat(realDate.getSeconds())],
    ["q+", Math.floor((realDate.getMonth() + 3) / 3)],
    ["S+", realDate.getMilliseconds()],
  ];
  var reg1 = regYear.exec(format);
  if (reg1) {

    format = format.replace(reg1[1], (realDate.getFullYear() + '').substring(4 - reg1[1].length));
  }
  for (var i = 0; i < date.length; i++) {
    var k = date[i][0];
    var v = date[i][1];
    var reg2 = getRegExp("(" + k + ")").exec(format);
    if (reg2) {
      format = format.replace(reg2[1], reg2[1].length == 1 ?
        v : ("00" + v).substring(("" + v).length));
    }
  }
  return format;
}

date.utilFormat = function(timesS, format) {
  return dateFormat(timesS * 1000, format);
}

date.dateFormat = dateFormat;

module.exports = date;
