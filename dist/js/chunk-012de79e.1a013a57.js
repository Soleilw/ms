(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-012de79e"],{"026e":function(t,e,a){"use strict";var n=a("ec10"),r=a.n(n);r.a},"8d81":function(t,e,a){var n;(function(r){"use strict";function o(t,e){var a=(65535&t)+(65535&e),n=(t>>16)+(e>>16)+(a>>16);return n<<16|65535&a}function i(t,e){return t<<e|t>>>32-e}function l(t,e,a,n,r,l){return o(i(o(o(e,t),o(n,l)),r),a)}function c(t,e,a,n,r,o,i){return l(e&a|~e&n,t,e,r,o,i)}function s(t,e,a,n,r,o,i){return l(e&n|a&~n,t,e,r,o,i)}function u(t,e,a,n,r,o,i){return l(e^a^n,t,e,r,o,i)}function f(t,e,a,n,r,o,i){return l(a^(e|~n),t,e,r,o,i)}function m(t,e){var a,n,r,i,l;t[e>>5]|=128<<e%32,t[14+(e+64>>>9<<4)]=e;var m=1732584193,d=-271733879,g=-1732584194,h=271733878;for(a=0;a<t.length;a+=16)n=m,r=d,i=g,l=h,m=c(m,d,g,h,t[a],7,-680876936),h=c(h,m,d,g,t[a+1],12,-389564586),g=c(g,h,m,d,t[a+2],17,606105819),d=c(d,g,h,m,t[a+3],22,-1044525330),m=c(m,d,g,h,t[a+4],7,-176418897),h=c(h,m,d,g,t[a+5],12,1200080426),g=c(g,h,m,d,t[a+6],17,-1473231341),d=c(d,g,h,m,t[a+7],22,-45705983),m=c(m,d,g,h,t[a+8],7,1770035416),h=c(h,m,d,g,t[a+9],12,-1958414417),g=c(g,h,m,d,t[a+10],17,-42063),d=c(d,g,h,m,t[a+11],22,-1990404162),m=c(m,d,g,h,t[a+12],7,1804603682),h=c(h,m,d,g,t[a+13],12,-40341101),g=c(g,h,m,d,t[a+14],17,-1502002290),d=c(d,g,h,m,t[a+15],22,1236535329),m=s(m,d,g,h,t[a+1],5,-165796510),h=s(h,m,d,g,t[a+6],9,-1069501632),g=s(g,h,m,d,t[a+11],14,643717713),d=s(d,g,h,m,t[a],20,-373897302),m=s(m,d,g,h,t[a+5],5,-701558691),h=s(h,m,d,g,t[a+10],9,38016083),g=s(g,h,m,d,t[a+15],14,-660478335),d=s(d,g,h,m,t[a+4],20,-405537848),m=s(m,d,g,h,t[a+9],5,568446438),h=s(h,m,d,g,t[a+14],9,-1019803690),g=s(g,h,m,d,t[a+3],14,-187363961),d=s(d,g,h,m,t[a+8],20,1163531501),m=s(m,d,g,h,t[a+13],5,-1444681467),h=s(h,m,d,g,t[a+2],9,-51403784),g=s(g,h,m,d,t[a+7],14,1735328473),d=s(d,g,h,m,t[a+12],20,-1926607734),m=u(m,d,g,h,t[a+5],4,-378558),h=u(h,m,d,g,t[a+8],11,-2022574463),g=u(g,h,m,d,t[a+11],16,1839030562),d=u(d,g,h,m,t[a+14],23,-35309556),m=u(m,d,g,h,t[a+1],4,-1530992060),h=u(h,m,d,g,t[a+4],11,1272893353),g=u(g,h,m,d,t[a+7],16,-155497632),d=u(d,g,h,m,t[a+10],23,-1094730640),m=u(m,d,g,h,t[a+13],4,681279174),h=u(h,m,d,g,t[a],11,-358537222),g=u(g,h,m,d,t[a+3],16,-722521979),d=u(d,g,h,m,t[a+6],23,76029189),m=u(m,d,g,h,t[a+9],4,-640364487),h=u(h,m,d,g,t[a+12],11,-421815835),g=u(g,h,m,d,t[a+15],16,530742520),d=u(d,g,h,m,t[a+2],23,-995338651),m=f(m,d,g,h,t[a],6,-198630844),h=f(h,m,d,g,t[a+7],10,1126891415),g=f(g,h,m,d,t[a+14],15,-1416354905),d=f(d,g,h,m,t[a+5],21,-57434055),m=f(m,d,g,h,t[a+12],6,1700485571),h=f(h,m,d,g,t[a+3],10,-1894986606),g=f(g,h,m,d,t[a+10],15,-1051523),d=f(d,g,h,m,t[a+1],21,-2054922799),m=f(m,d,g,h,t[a+8],6,1873313359),h=f(h,m,d,g,t[a+15],10,-30611744),g=f(g,h,m,d,t[a+6],15,-1560198380),d=f(d,g,h,m,t[a+13],21,1309151649),m=f(m,d,g,h,t[a+4],6,-145523070),h=f(h,m,d,g,t[a+11],10,-1120210379),g=f(g,h,m,d,t[a+2],15,718787259),d=f(d,g,h,m,t[a+9],21,-343485551),m=o(m,n),d=o(d,r),g=o(g,i),h=o(h,l);return[m,d,g,h]}function d(t){var e,a="",n=32*t.length;for(e=0;e<n;e+=8)a+=String.fromCharCode(t[e>>5]>>>e%32&255);return a}function g(t){var e,a=[];for(a[(t.length>>2)-1]=void 0,e=0;e<a.length;e+=1)a[e]=0;var n=8*t.length;for(e=0;e<n;e+=8)a[e>>5]|=(255&t.charCodeAt(e/8))<<e%32;return a}function h(t){return d(m(g(t),8*t.length))}function p(t,e){var a,n,r=g(t),o=[],i=[];for(o[15]=i[15]=void 0,r.length>16&&(r=m(r,8*t.length)),a=0;a<16;a+=1)o[a]=909522486^r[a],i[a]=1549556828^r[a];return n=m(o.concat(g(e)),512+8*e.length),d(m(i.concat(n),640))}function b(t){var e,a,n="0123456789abcdef",r="";for(a=0;a<t.length;a+=1)e=t.charCodeAt(a),r+=n.charAt(e>>>4&15)+n.charAt(15&e);return r}function v(t){return unescape(encodeURIComponent(t))}function x(t){return h(v(t))}function D(t){return b(x(t))}function y(t,e){return p(v(t),v(e))}function C(t,e){return b(y(t,e))}function _(t,e,a){return e?a?y(e,t):C(e,t):a?x(t):D(t)}n=function(){return _}.call(e,a,e,t),void 0===n||(t.exports=n)})()},aafb:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],attrs:{"element-loading-text":"获取数据中"}},[a("el-dialog",{attrs:{title:"添加可疑人脸",visible:t.dialogDoubtable,"close-on-click-modal":!1},on:{"update:visible":function(e){t.dialogDoubtable=e}}},[a("div",{staticClass:"box"},[a("el-form",{attrs:{model:t.form,"label-width":"100px"}},[a("el-form-item",{attrs:{label:"姓名"}},[a("el-input",{attrs:{placeholder:"请输入姓名"},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),a("el-form-item",{attrs:{label:"身份证号"}},[a("el-input",{attrs:{placeholder:"请输入身份证号"},model:{value:t.form.number,callback:function(e){t.$set(t.form,"number",e)},expression:"form.number"}})],1),a("div",{staticClass:"tips"},[a("p",[a("span",[t._v("提示：")]),t._v("如有人脸照片会覆盖掉原有的人脸照片！")])]),a("el-form-item",{attrs:{label:"上传人脸图片"}},[a("el-upload",{ref:"upload",attrs:{action:"https://upload-z2.qiniup.com",limit:1,"before-upload":t.beforeAvatarUpload,"auto-upload":!1,"on-success":t.handleAvatarSuccess,"on-remove":t.handleRemove,"on-exceed":t.handleExceed,"on-change":t.handleChange,data:t.imgData}},[a("el-button",{attrs:{size:"small",type:"primary"}},[t._v("选择图片")])],1),t.hasNewImage?a("div",{staticStyle:{color:"red","font-size":"12px"}},[t._v("* 点击文件名可删除所选图片")]):t._e(),t.old_href?a("div",{staticClass:"up-img"},[a("span",{staticStyle:{display:"flex","justify-items":"center",color:"#409eff"}},[t._v("原人脸图片")]),a("img",{staticClass:"pic-box",attrs:{src:t.old_href}})]):t._e(),t.form.href?a("div",{staticClass:"up-img"},[a("span",{staticStyle:{display:"flex","justify-items":"center",color:"#67C23A"}},[t._v("新人脸图片")]),a("img",{staticClass:"pic-box",attrs:{src:t.form.href}})]):a("div",{staticClass:"up-img"},[a("img",{staticClass:"pic-box",attrs:{src:t.change_href}})])],1),a("div",{staticClass:"submit"},[a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:t.newDoubtablet}},[t._v("提交")])],1)],1)],1)],1)]),a("el-table",{attrs:{data:t.tableDate,border:"","header-cell-style":{background:"#f0f0f0",color:"#2a9f93"},"max-height":"620"}},[a("el-table-column",{attrs:{prop:"id",label:"ID"}}),a("el-table-column",{attrs:{prop:"danger.name",label:"姓名"}}),a("el-table-column",{attrs:{prop:"danger.number",label:"身份证号"}}),a("el-table-column",{attrs:{prop:"danger.href",label:"照片"},scopedSlots:t._u([{key:"default",fn:function(t){return[a("el-popover",{attrs:{placement:"top-start",title:"",trigger:"click"}},[a("img",{staticStyle:{"max-width":"800px","max-height":"800px"},attrs:{src:t.row.danger.href}}),a("img",{staticStyle:{"max-width":"180px","max-height":"80px"},attrs:{slot:"reference",src:t.row.danger.href},slot:"reference"})])]}}])}),a("el-table-column",{attrs:{prop:"log.image",label:"抓拍照片"},scopedSlots:t._u([{key:"default",fn:function(t){return[a("el-popover",{attrs:{placement:"top-start",title:"",trigger:"click"}},[a("img",{staticStyle:{"max-width":"800px","max-height":"800px"},attrs:{src:t.row.log.image}}),a("img",{staticStyle:{"max-width":"180px","max-height":"80px"},attrs:{slot:"reference",src:t.row.log.image},slot:"reference"})])]}}])}),a("el-table-column",{attrs:{prop:"score",label:"相似度"}}),a("el-table-column",{attrs:{prop:"address",label:"抓拍地点"}}),a("el-table-column",{attrs:{prop:"log.timestamp",label:"抓拍时间"}}),a("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-popconfirm",{attrs:{title:"是否要删除该条数据",cancelButtonType:"primary"},on:{onConfirm:function(a){return t.handleDel(e.$index,e.row)}}},[a("el-button",{attrs:{slot:"reference",size:"mini",type:"danger"},slot:"reference"},[t._v("删除")])],1)]}}])})],1),a("div",{staticClass:"block"},[a("el-pagination",{attrs:{"current-page":t.current,"page-sizes":[10,20,50,100,150,200,250,300],"page-size":t.size,layout:"sizes, prev, pager, next, jumper",total:t.total},on:{"current-change":t.currentChange,"update:currentPage":function(e){t.current=e},"update:current-page":function(e){t.current=e},"size-change":t.sizeChange,"prev-click":t.prevChange,"next-click":t.nextChange}})],1)],1)},r=[],o=(a("99af"),a("4160"),a("baa5"),a("b0c0"),a("d3b7"),a("3ca3"),a("159b"),a("ddb0"),a("2b3d"),a("365c")),i=a("8d81"),l=a.n(i),c=a("bc3a"),s=a.n(c),u=a("c466"),f={name:"gradems",data:function(){return{loading:!0,dialogDoubtable:!1,imgData:{key:"",token:""},fileName:"",suffix:"",qiniuaddr:"https://tu.fengniaotuangou.cn",form:{href:"",name:"",number:""},old_href:"",change_href:"",hasNewImage:!1,tableDate:[],id:"",dialogDel:!1,current:1,size:10,total:0}},mounted:function(){this.getDangerLogs(),this.getQiniuToken()},methods:{getDangerLogs:function(){var t=this;o["a"].dangerLogs(t.current).then((function(e){t.loading=!1,t.tableDate=e.data,t.total=e.total,t.tableDate.forEach((function(t){t.log.timestamp=u["a"].formatTime(t.log.timestamp,"Y-M-D h:m:s")}))})).catch((function(e){t.loading=!1}))},addDoubtable:function(){var t=this;t.dialogDoubtable=!0,t.form={href:"",name:"",number:""},t.change_href=""},handleChange:function(t){var e=this;e.change_href=URL.createObjectURL(t.raw),e.hasNewImage=!0},handleRemove:function(t){var e=this;e.change_href="",e.hasNewImage=!1},beforeAvatarUpload:function(t){var e=this;e.fileName=l()(t.name),e.suffix=t.name.substring(t.name.lastIndexOf(".")+1),e.imgData.key="tmp_".concat(e.fileName,".").concat(e.suffix)},newDoubtablet:function(){var t=this;""===t.change_href?(t.form.href=t.old_href,o["a"].dangerFace(t.form).then((function(e){t.$message.success("上传成功"),t.current=1,t.form.href="",t.dialogDoubtable=!1,o["a"].dangerFaces(t.current).then((function(e){t.tableDate=e.data,t.total=e.total}))}))):this.$refs.upload.submit()},handleAvatarSuccess:function(t,e){var a=this;e.url="".concat(a.qiniuaddr,"/").concat(t.key),a.form.href=e.url,o["a"].dangerFace(a.form).then((function(t){a.$message.success("上传成功"),a.current=1,a.dialogStudent=!0,o["a"].dangerFaces(a.current).then((function(t){a.tableDate=t.data,a.total=t.total})),a.$refs.upload.clearFiles(),a.form.href="",a.change_href="",a.old_href="",a.imgData.key="",a.dialogDoubtable=!1}))},handleExceed:function(t,e){var a=this;a.$message.error("上传图片不能超过1张!重新上传"),a.$refs.upload.clearFiles(),a.form.href="",a.imgData.key=""},handleDel:function(t,e){},getQiniuToken:function(){var t=this;s.a.get("https://api.fengniaotuangou.cn/api/upload/token").then((function(e){t.imgData.token=e.data.uptoken}))},currentChange:function(t){var e=this;e.loading=!0,e.current=t,o["a"].dangerLogs(t,e.size).then((function(t){e.loading=!1,e.tableDate=t.data,e.total=t.total,e.tableDate.forEach((function(t){t.log.timestamp=u["a"].formatTime(t.log.timestamp,"Y-M-D h:m:s")}))})).catch((function(t){e.loading=!1}))},sizeChange:function(t){var e=this;e.loading=!0,e.size=t,o["a"].dangerLogs(e.current,t).then((function(t){e.loading=!1,e.tableDate=t.data,e.total=t.total,e.tableDate.forEach((function(t){t.log.timestamp=u["a"].formatTime(t.log.timestamp,"Y-M-D h:m:s")}))})).catch((function(t){e.loading=!1}))},prevChange:function(t){var e=this;e.loading=!0,e.current=t,o["a"].dangerLogs(t,e.size).then((function(t){e.loading=!1,e.tableDate=t.data,e.total=t.total,e.tableDate.forEach((function(t){t.log.timestamp=u["a"].formatTime(t.log.timestamp,"Y-M-D h:m:s")}))})).catch((function(t){e.loading=!1}))},nextChange:function(t){var e=this;e.loading=!0,e.current=t,o["a"].dangerLogs(t,e.size).then((function(t){e.loading=!1,e.tableDate=t.data,e.total=t.total,e.tableDate.forEach((function(t){t.log.timestamp=u["a"].formatTime(t.log.timestamp,"Y-M-D h:m:s")}))})).catch((function(t){e.loading=!1}))}}},m=f,d=(a("026e"),a("2877")),g=Object(d["a"])(m,n,r,!1,null,"297ef86a",null);e["default"]=g.exports},baa5:function(t,e,a){var n=a("23e7"),r=a("e58c");n({target:"Array",proto:!0,forced:r!==[].lastIndexOf},{lastIndexOf:r})},c466:function(t,e,a){"use strict";a("d3b7"),a("ac1f"),a("25f0"),a("5319");var n={};function r(t){return t=t.toString(),t[1]?t:"0"+t}n.formatTime=function(t,e){var a=["Y","M","D","h","m","s"],n=[],o=new Date(1e3*t);for(var i in n.push(o.getFullYear()),n.push(r(o.getMonth()+1)),n.push(r(o.getDate())),n.push(r(o.getHours())),n.push(r(o.getMinutes())),n.push(r(o.getSeconds())),n)e=e.replace(a[i],n[i]);return e},e["a"]=n},e58c:function(t,e,a){"use strict";var n=a("fc6a"),r=a("a691"),o=a("50c4"),i=a("a640"),l=a("ae40"),c=Math.min,s=[].lastIndexOf,u=!!s&&1/[1].lastIndexOf(1,-0)<0,f=i("lastIndexOf"),m=l("indexOf",{ACCESSORS:!0,1:0}),d=u||!f||!m;t.exports=d?function(t){if(u)return s.apply(this,arguments)||0;var e=n(this),a=o(e.length),i=a-1;for(arguments.length>1&&(i=c(i,r(arguments[1]))),i<0&&(i=a+i);i>=0;i--)if(i in e&&e[i]===t)return i||0;return-1}:s},ec10:function(t,e,a){}}]);
//# sourceMappingURL=chunk-012de79e.1a013a57.js.map