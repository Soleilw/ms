(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8f226da0"],{"3b5e":function(e,t,a){},"829e":function(e,t,a){"use strict";var n=a("3b5e"),r=a.n(n);r.a},"8d81":function(e,t,a){var n;(function(r){"use strict";function o(e,t){var a=(65535&e)+(65535&t),n=(e>>16)+(t>>16)+(a>>16);return n<<16|65535&a}function l(e,t){return e<<t|e>>>32-t}function i(e,t,a,n,r,i){return o(l(o(o(t,e),o(n,i)),r),a)}function c(e,t,a,n,r,o,l){return i(t&a|~t&n,e,t,r,o,l)}function s(e,t,a,n,r,o,l){return i(t&n|a&~n,e,t,r,o,l)}function u(e,t,a,n,r,o,l){return i(t^a^n,e,t,r,o,l)}function f(e,t,a,n,r,o,l){return i(a^(t|~n),e,t,r,o,l)}function g(e,t){var a,n,r,l,i;e[t>>5]|=128<<t%32,e[14+(t+64>>>9<<4)]=t;var g=1732584193,d=-271733879,m=-1732584194,h=271733878;for(a=0;a<e.length;a+=16)n=g,r=d,l=m,i=h,g=c(g,d,m,h,e[a],7,-680876936),h=c(h,g,d,m,e[a+1],12,-389564586),m=c(m,h,g,d,e[a+2],17,606105819),d=c(d,m,h,g,e[a+3],22,-1044525330),g=c(g,d,m,h,e[a+4],7,-176418897),h=c(h,g,d,m,e[a+5],12,1200080426),m=c(m,h,g,d,e[a+6],17,-1473231341),d=c(d,m,h,g,e[a+7],22,-45705983),g=c(g,d,m,h,e[a+8],7,1770035416),h=c(h,g,d,m,e[a+9],12,-1958414417),m=c(m,h,g,d,e[a+10],17,-42063),d=c(d,m,h,g,e[a+11],22,-1990404162),g=c(g,d,m,h,e[a+12],7,1804603682),h=c(h,g,d,m,e[a+13],12,-40341101),m=c(m,h,g,d,e[a+14],17,-1502002290),d=c(d,m,h,g,e[a+15],22,1236535329),g=s(g,d,m,h,e[a+1],5,-165796510),h=s(h,g,d,m,e[a+6],9,-1069501632),m=s(m,h,g,d,e[a+11],14,643717713),d=s(d,m,h,g,e[a],20,-373897302),g=s(g,d,m,h,e[a+5],5,-701558691),h=s(h,g,d,m,e[a+10],9,38016083),m=s(m,h,g,d,e[a+15],14,-660478335),d=s(d,m,h,g,e[a+4],20,-405537848),g=s(g,d,m,h,e[a+9],5,568446438),h=s(h,g,d,m,e[a+14],9,-1019803690),m=s(m,h,g,d,e[a+3],14,-187363961),d=s(d,m,h,g,e[a+8],20,1163531501),g=s(g,d,m,h,e[a+13],5,-1444681467),h=s(h,g,d,m,e[a+2],9,-51403784),m=s(m,h,g,d,e[a+7],14,1735328473),d=s(d,m,h,g,e[a+12],20,-1926607734),g=u(g,d,m,h,e[a+5],4,-378558),h=u(h,g,d,m,e[a+8],11,-2022574463),m=u(m,h,g,d,e[a+11],16,1839030562),d=u(d,m,h,g,e[a+14],23,-35309556),g=u(g,d,m,h,e[a+1],4,-1530992060),h=u(h,g,d,m,e[a+4],11,1272893353),m=u(m,h,g,d,e[a+7],16,-155497632),d=u(d,m,h,g,e[a+10],23,-1094730640),g=u(g,d,m,h,e[a+13],4,681279174),h=u(h,g,d,m,e[a],11,-358537222),m=u(m,h,g,d,e[a+3],16,-722521979),d=u(d,m,h,g,e[a+6],23,76029189),g=u(g,d,m,h,e[a+9],4,-640364487),h=u(h,g,d,m,e[a+12],11,-421815835),m=u(m,h,g,d,e[a+15],16,530742520),d=u(d,m,h,g,e[a+2],23,-995338651),g=f(g,d,m,h,e[a],6,-198630844),h=f(h,g,d,m,e[a+7],10,1126891415),m=f(m,h,g,d,e[a+14],15,-1416354905),d=f(d,m,h,g,e[a+5],21,-57434055),g=f(g,d,m,h,e[a+12],6,1700485571),h=f(h,g,d,m,e[a+3],10,-1894986606),m=f(m,h,g,d,e[a+10],15,-1051523),d=f(d,m,h,g,e[a+1],21,-2054922799),g=f(g,d,m,h,e[a+8],6,1873313359),h=f(h,g,d,m,e[a+15],10,-30611744),m=f(m,h,g,d,e[a+6],15,-1560198380),d=f(d,m,h,g,e[a+13],21,1309151649),g=f(g,d,m,h,e[a+4],6,-145523070),h=f(h,g,d,m,e[a+11],10,-1120210379),m=f(m,h,g,d,e[a+2],15,718787259),d=f(d,m,h,g,e[a+9],21,-343485551),g=o(g,n),d=o(d,r),m=o(m,l),h=o(h,i);return[g,d,m,h]}function d(e){var t,a="",n=32*e.length;for(t=0;t<n;t+=8)a+=String.fromCharCode(e[t>>5]>>>t%32&255);return a}function m(e){var t,a=[];for(a[(e.length>>2)-1]=void 0,t=0;t<a.length;t+=1)a[t]=0;var n=8*e.length;for(t=0;t<n;t+=8)a[t>>5]|=(255&e.charCodeAt(t/8))<<t%32;return a}function h(e){return d(g(m(e),8*e.length))}function p(e,t){var a,n,r=m(e),o=[],l=[];for(o[15]=l[15]=void 0,r.length>16&&(r=g(r,8*e.length)),a=0;a<16;a+=1)o[a]=909522486^r[a],l[a]=1549556828^r[a];return n=g(o.concat(m(t)),512+8*t.length),d(g(l.concat(n),640))}function b(e){var t,a,n="0123456789abcdef",r="";for(a=0;a<e.length;a+=1)t=e.charCodeAt(a),r+=n.charAt(t>>>4&15)+n.charAt(15&t);return r}function v(e){return unescape(encodeURIComponent(e))}function x(e){return h(v(e))}function D(e){return b(x(e))}function y(e,t){return p(v(e),v(t))}function _(e,t){return b(y(e,t))}function k(e,t,a){return t?a?y(t,e):_(t,e):a?x(e):D(e)}n=function(){return k}.call(t,a,t,e),void 0===n||(e.exports=n)})()},aafb:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-dialog",{attrs:{title:"添加可疑人脸",visible:e.dialogDoubtable,"close-on-click-modal":!1},on:{"update:visible":function(t){e.dialogDoubtable=t}}},[a("div",{staticClass:"box"},[a("el-form",{attrs:{model:e.form,"label-width":"100px"}},[a("el-form-item",{attrs:{label:"姓名"}},[a("el-input",{attrs:{placeholder:"请输入姓名"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),a("el-form-item",{attrs:{label:"身份证号"}},[a("el-input",{attrs:{placeholder:"请输入身份证号"},model:{value:e.form.number,callback:function(t){e.$set(e.form,"number",t)},expression:"form.number"}})],1),a("div",{staticClass:"tips"},[a("p",[a("span",[e._v("提示：")]),e._v("如有人脸照片会覆盖掉原有的人脸照片！")])]),a("el-form-item",{attrs:{label:"上传人脸图片"}},[a("el-upload",{ref:"upload",attrs:{action:"https://upload-z2.qiniup.com",limit:1,"before-upload":e.beforeAvatarUpload,"auto-upload":!1,"on-success":e.handleAvatarSuccess,"on-remove":e.handleRemove,"on-exceed":e.handleExceed,"on-change":e.handleChange,data:e.imgData}},[a("el-button",{attrs:{size:"small",type:"primary"}},[e._v("选择图片")])],1),e.hasNewImage?a("div",{staticStyle:{color:"red","font-size":"12px"}},[e._v("* 点击文件名可删除所选图片")]):e._e(),e.old_href?a("div",{staticClass:"up-img"},[a("span",{staticStyle:{display:"flex","justify-items":"center",color:"#409eff"}},[e._v("原人脸图片")]),a("img",{staticClass:"pic-box",attrs:{src:e.old_href}})]):e._e(),e.form.href?a("div",{staticClass:"up-img"},[a("span",{staticStyle:{display:"flex","justify-items":"center",color:"#67C23A"}},[e._v("新人脸图片")]),a("img",{staticClass:"pic-box",attrs:{src:e.form.href}})]):a("div",{staticClass:"up-img"},[a("img",{staticClass:"pic-box",attrs:{src:e.change_href}})])],1),a("div",{staticClass:"submit"},[a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:e.newDoubtablet}},[e._v("提交")])],1)],1)],1)],1)]),a("el-table",{attrs:{data:e.tableDate,border:"","header-cell-style":{background:"#f0f0f0",color:"#2a9f93"},"max-height":"620"}},[a("el-table-column",{attrs:{prop:"id",label:"ID"}}),a("el-table-column",{attrs:{prop:"danger.name",label:"姓名"}}),a("el-table-column",{attrs:{prop:"danger.number",label:"身份证号"}}),a("el-table-column",{attrs:{prop:"danger.href",label:"照片"},scopedSlots:e._u([{key:"default",fn:function(e){return[a("el-popover",{attrs:{placement:"top-start",title:"",trigger:"click"}},[a("img",{staticStyle:{"max-width":"800px","max-height":"800px"},attrs:{src:e.row.danger.href}}),a("img",{staticStyle:{"max-width":"180px","max-height":"80px"},attrs:{slot:"reference",src:e.row.danger.href},slot:"reference"})])]}}])}),a("el-table-column",{attrs:{prop:"log.image",label:"抓拍照片"},scopedSlots:e._u([{key:"default",fn:function(e){return[a("el-popover",{attrs:{placement:"top-start",title:"",trigger:"click"}},[a("img",{staticStyle:{"max-width":"800px","max-height":"800px"},attrs:{src:e.row.log.image}}),a("img",{staticStyle:{"max-width":"180px","max-height":"80px"},attrs:{slot:"reference",src:e.row.log.image},slot:"reference"})])]}}])}),a("el-table-column",{attrs:{prop:"score",label:"相似度"}}),a("el-table-column",{attrs:{prop:"address",label:"抓拍地点"}}),a("el-table-column",{attrs:{prop:"log.timestamp",label:"抓拍时间"}}),a("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"danger",size:"mini"},on:{click:function(a){return e.handleDel(t.$index,t.row)}}},[e._v("删除")])]}}])})],1),a("el-dialog",{attrs:{visible:e.dialogDel,title:"删除年级",width:"20%",align:"center","close-on-click-modal":!1},on:{"update:visible":function(t){e.dialogDel=t}}},[a("div",{staticStyle:{"font-size":"20px","margin-bottom":"30px"}},[e._v("是否删除该可疑人员")]),a("span",[a("el-button",{attrs:{type:"primary"},on:{click:e.toDel}},[e._v("删除")]),a("el-button",{attrs:{type:"danger"},on:{click:function(t){e.dialogDel=!1}}},[e._v("取消")])],1)]),a("div",{staticClass:"block"},[a("el-pagination",{attrs:{"current-page":e.currentPage,"page-sizes":[10,20,50,100,150,200,250,300],"page-size":e.pageSize,layout:"sizes, prev, pager, next, jumper",total:e.totalPage},on:{"current-change":e.handleCurrentChange,"update:currentPage":function(t){e.currentPage=t},"update:current-page":function(t){e.currentPage=t},"size-change":e.handleSizeChange}})],1)],1)},r=[],o=(a("99af"),a("4160"),a("baa5"),a("b0c0"),a("d3b7"),a("3ca3"),a("159b"),a("ddb0"),a("2b3d"),a("365c")),l=a("8d81"),i=a.n(l),c=a("bc3a"),s=a.n(c),u=a("c466"),f={name:"gradems",data:function(){return{dialogDoubtable:!1,imgData:{key:"",token:""},fileName:"",suffix:"",qiniuaddr:"https://tu.fengniaotuangou.cn",form:{href:"",name:"",number:""},old_href:"",change_href:"",hasNewImage:!1,tableDate:[],id:"",dialogDel:!1,currentPage:1,pageSize:10,totalPage:0}},mounted:function(){this.getDangerLogs(),this.getQiniuToken()},methods:{getDangerLogs:function(){var e=this;o["a"].dangerLogs(e.currentPage).then((function(t){e.tableDate=t.data,e.totalPage=t.total,e.tableDate.forEach((function(e){e.log.timestamp=u["a"].formatTime(e.log.timestamp,"Y-M-D h:m:s")}))}))},addDoubtable:function(){var e=this;e.dialogDoubtable=!0,e.form={href:"",name:"",number:""},e.change_href=""},handleChange:function(e){var t=this;t.change_href=URL.createObjectURL(e.raw),t.hasNewImage=!0},handleRemove:function(e){var t=this;t.change_href="",t.hasNewImage=!1},beforeAvatarUpload:function(e){var t=this;t.fileName=i()(e.name),t.suffix=e.name.substring(e.name.lastIndexOf(".")+1),t.imgData.key="tmp_".concat(t.fileName,".").concat(t.suffix)},newDoubtablet:function(){var e=this;""===e.change_href?(e.form.href=e.old_href,o["a"].dangerFace(e.form).then((function(t){e.$message.success("上传成功"),e.currentPage=1,e.form.href="",e.dialogDoubtable=!1,o["a"].dangerFaces(e.currentPage).then((function(t){e.tableDate=t.data,e.totalPage=t.total}))}))):this.$refs.upload.submit()},handleAvatarSuccess:function(e,t){var a=this;t.url="".concat(a.qiniuaddr,"/").concat(e.key),a.form.href=t.url,o["a"].dangerFace(a.form).then((function(e){a.$message.success("上传成功"),a.currentPage=1,a.dialogStudent=!0,o["a"].dangerFaces(a.currentPage).then((function(e){a.tableDate=e.data,a.totalPage=e.total})),a.$refs.upload.clearFiles(),a.form.href="",a.change_href="",a.old_href="",a.imgData.key="",a.dialogDoubtable=!1}))},handleExceed:function(e,t){var a=this;a.$message.error("上传图片不能超过1张!重新上传"),a.$refs.upload.clearFiles(),a.form.href="",a.imgData.key=""},handleDel:function(e,t){var a=this;a.id=t.id,a.dialogDel=!0},toDel:function(){var e=this;o["a"].delDangerFace(e.id).then((function(t){e.$message.success("删除成功"),e.dialogDel=!1,e.getDangerFaces(),e.currentPage=1}))},getQiniuToken:function(){var e=this;s.a.get("https://api.fengniaotuangou.cn/api/upload/token").then((function(t){e.imgData.token=t.data.uptoken}))},handleCurrentChange:function(e){var t=this;t.currentPage=e,o["a"].dangerLogs(e,t.pageSize).then((function(e){t.tableDate=e.data,t.totalPage=e.total,t.tableDate.forEach((function(e){e.log.timestamp=u["a"].formatTime(e.log.timestamp,"Y-M-D h:m:s")}))}))},handleSizeChange:function(e){var t=this;t.pageSize=e,o["a"].dangerLogs(t.currentPage,e).then((function(e){t.tableDate=e.data,t.totalPage=e.total}))}}},g=f,d=(a("829e"),a("2877")),m=Object(d["a"])(g,n,r,!1,null,"7d54ea13",null);t["default"]=m.exports},baa5:function(e,t,a){var n=a("23e7"),r=a("e58c");n({target:"Array",proto:!0,forced:r!==[].lastIndexOf},{lastIndexOf:r})},c466:function(e,t,a){"use strict";a("d3b7"),a("ac1f"),a("25f0"),a("5319");var n={};function r(e){return e=e.toString(),e[1]?e:"0"+e}n.formatTime=function(e,t){var a=["Y","M","D","h","m","s"],n=[],o=new Date(1e3*e);for(var l in n.push(o.getFullYear()),n.push(r(o.getMonth()+1)),n.push(r(o.getDate())),n.push(r(o.getHours())),n.push(r(o.getMinutes())),n.push(r(o.getSeconds())),n)t=t.replace(a[l],n[l]);return t},t["a"]=n},e58c:function(e,t,a){"use strict";var n=a("fc6a"),r=a("a691"),o=a("50c4"),l=a("a640"),i=a("ae40"),c=Math.min,s=[].lastIndexOf,u=!!s&&1/[1].lastIndexOf(1,-0)<0,f=l("lastIndexOf"),g=i("indexOf",{ACCESSORS:!0,1:0}),d=u||!f||!g;e.exports=d?function(e){if(u)return s.apply(this,arguments)||0;var t=n(this),a=o(t.length),l=a-1;for(arguments.length>1&&(l=c(l,r(arguments[1]))),l<0&&(l=a+l);l>=0;l--)if(l in t&&t[l]===e)return l||0;return-1}:s}}]);
//# sourceMappingURL=chunk-8f226da0.0c1d6bec.js.map