(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4ae45692"],{"0cac":function(e,t,a){},"129f":function(e,t){e.exports=Object.is||function(e,t){return e===t?0!==e||1/e===1/t:e!=e&&t!=t}},"14c3":function(e,t,a){var n=a("c6b6"),r=a("9263");e.exports=function(e,t){var a=e.exec;if("function"===typeof a){var i=a.call(e,t);if("object"!==typeof i)throw TypeError("RegExp exec method returned something other than an Object or null");return i}if("RegExp"!==n(e))throw TypeError("RegExp#exec called on incompatible receiver");return r.call(e,t)}},"365c":function(e,t,a){"use strict";a("ac1f");var n=a("be3b"),r=a("99b1"),i=a.n(r),o={aip:function(e){return n["a"].post(i.a.Aip,e)},delAip:function(e){return n["a"].del(i.a.Aip,{id:e})},aips:function(e,t){return n["a"].get(i.a.Aips,{page:e,limit:t})},apk:function(e){return n["a"].post(i.a.Apk,e)},apks:function(e,t){return n["a"].get(i.a.Apks,{page:e,limit:t})},apkVersion:function(e){return n["a"].post(i.a.ApkVersion,e)},apkVersions:function(e,t,a){return n["a"].get(i.a.ApkVersions,{page:e,limit:t,apk_id:a})},_apkVersions:function(e){return n["a"].get(i.a.ApkVersions,{id:e})},publishApk:function(e){return n["a"].post(i.a.PublishApk,e)},project:function(e){return n["a"].post(i.a.Project,e)},projects:function(e,t){return n["a"].get(i.a.Projects,{page:e,limit:t})},address:function(e){return n["a"].post(i.a.Address,e)},addresses:function(e,t){return n["a"].get(i.a.Addresses,{page:e,limit:t})},face:function(e){return n["a"].post(i.a.Face,e)},faces:function(e,t){return n["a"].get(i.a.Faces,{page:e,limit:t})},device:function(e){return n["a"].post(i.a.Device,e)},devices:function(e,t,a){return n["a"].get(i.a.Devices,{page:e,limit:t,id:a})},_devices:function(e,t,a){return n["a"].get(i.a.Devices,{direction:e,addresses:t,limit:a})},deviceLogs:function(e,t,a,r){return n["a"].get(i.a.DeviceLogs,{page:e,limit:t,uuid:a,type:r})},deviceFaceLogs:function(e,t,a,r){return n["a"].get(i.a.DeviceRecord,{page:e,limit:t,uuid:a,address_id:r})},deviceTypes:function(){return n["a"].get(i.a.DeviceTypes)},deviceHeart:function(e){return n["a"].get(i.a.DeviceHeartbeat,{uuid:e})},search:function(e){return n["a"].get(i.a.Devices,{uuid:e})},faceGroup:function(e){return n["a"].get(i.a.FaceGroup,{address_id:e})},uuid:function(e,t){return n["a"].get(i.a.Uuid,{page:e,limit:t})},dangerFace:function(e){return n["a"].post(i.a.DangerFace,e)},delDangerFace:function(e){return n["a"].del(i.a.DelDangerFace,{id:e})},dangerFaces:function(e,t){return n["a"].get(i.a.DangerFaces,{page:e,limit:t})},dangerLogs:function(e,t){return n["a"].get(i.a.DangerLogs,{page:e,limit:t})}};t["a"]=o},5319:function(e,t,a){"use strict";var n=a("d784"),r=a("825a"),i=a("7b0b"),o=a("50c4"),l=a("a691"),c=a("1d80"),s=a("8aa5"),u=a("14c3"),d=Math.max,p=Math.min,g=Math.floor,f=/\$([$&'`]|\d\d?|<[^>]*>)/g,h=/\$([$&'`]|\d\d?)/g,v=function(e){return void 0===e?e:String(e)};n("replace",2,(function(e,t,a,n){var m=n.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,b=n.REPLACE_KEEPS_$0,x=m?"$":"$0";return[function(a,n){var r=c(this),i=void 0==a?void 0:a[e];return void 0!==i?i.call(a,r,n):t.call(String(r),a,n)},function(e,n){if(!m&&b||"string"===typeof n&&-1===n.indexOf(x)){var i=a(t,e,this,n);if(i.done)return i.value}var c=r(e),g=String(this),f="function"===typeof n;f||(n=String(n));var h=c.global;if(h){var _=c.unicode;c.lastIndex=0}var y=[];while(1){var L=u(c,g);if(null===L)break;if(y.push(L),!h)break;var w=String(L[0]);""===w&&(c.lastIndex=s(g,o(c.lastIndex),_))}for(var D="",P=0,C=0;C<y.length;C++){L=y[C];for(var A=String(L[0]),E=d(p(l(L.index),g.length),0),F=[],S=1;S<L.length;S++)F.push(v(L[S]));var $=L.groups;if(f){var R=[A].concat(F,E,g);void 0!==$&&R.push($);var I=String(n.apply(void 0,R))}else I=k(A,g,E,F,$,n);E>=P&&(D+=g.slice(P,E)+I,P=E+A.length)}return D+g.slice(P)}];function k(e,a,n,r,o,l){var c=n+e.length,s=r.length,u=h;return void 0!==o&&(o=i(o),u=f),t.call(l,u,(function(t,i){var l;switch(i.charAt(0)){case"$":return"$";case"&":return e;case"`":return a.slice(0,n);case"'":return a.slice(c);case"<":l=o[i.slice(1,-1)];break;default:var u=+i;if(0===u)return t;if(u>s){var d=g(u/10);return 0===d?t:d<=s?void 0===r[d-1]?i.charAt(1):r[d-1]+i.charAt(1):t}l=r[u-1]}return void 0===l?"":l}))}}))},"5f1f":function(e,t,a){"use strict";var n=a("0cac"),r=a.n(n);r.a},"841c":function(e,t,a){"use strict";var n=a("d784"),r=a("825a"),i=a("1d80"),o=a("129f"),l=a("14c3");n("search",1,(function(e,t,a){return[function(t){var a=i(this),n=void 0==t?void 0:t[e];return void 0!==n?n.call(t,a):new RegExp(t)[e](String(a))},function(e){var n=a(t,e,this);if(n.done)return n.value;var i=r(e),c=String(this),s=i.lastIndex;o(s,0)||(i.lastIndex=0);var u=l(i,c);return o(i.lastIndex,s)||(i.lastIndex=s),null===u?-1:u.index}]}))},"8aa5":function(e,t,a){"use strict";var n=a("6547").charAt;e.exports=function(e,t,a){return t+(a?n(e,t).length:1)}},9263:function(e,t,a){"use strict";var n=a("ad6d"),r=a("9f7f"),i=RegExp.prototype.exec,o=String.prototype.replace,l=i,c=function(){var e=/a/,t=/b*/g;return i.call(e,"a"),i.call(t,"a"),0!==e.lastIndex||0!==t.lastIndex}(),s=r.UNSUPPORTED_Y||r.BROKEN_CARET,u=void 0!==/()??/.exec("")[1],d=c||u||s;d&&(l=function(e){var t,a,r,l,d=this,p=s&&d.sticky,g=n.call(d),f=d.source,h=0,v=e;return p&&(g=g.replace("y",""),-1===g.indexOf("g")&&(g+="g"),v=String(e).slice(d.lastIndex),d.lastIndex>0&&(!d.multiline||d.multiline&&"\n"!==e[d.lastIndex-1])&&(f="(?: "+f+")",v=" "+v,h++),a=new RegExp("^(?:"+f+")",g)),u&&(a=new RegExp("^"+f+"$(?!\\s)",g)),c&&(t=d.lastIndex),r=i.call(p?a:d,v),p?r?(r.input=r.input.slice(h),r[0]=r[0].slice(h),r.index=d.lastIndex,d.lastIndex+=r[0].length):d.lastIndex=0:c&&r&&(d.lastIndex=d.global?r.index+r[0].length:t),u&&r&&r.length>1&&o.call(r[0],a,(function(){for(l=1;l<arguments.length-2;l++)void 0===arguments[l]&&(r[l]=void 0)})),r}),e.exports=l},9523:function(e,t){function a(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}e.exports=a},"99b1":function(e,t,a){var n,r=a("9523"),i=(n={Login:"/login",Password:"/password",Aip:"/aip",Aips:"/aips"},r(n,"Aip","/aip"),r(n,"RestoreAip","/restore/aip"),r(n,"Project","/project"),r(n,"Projects","/projects"),r(n,"Project","/project"),r(n,"RestoreProject","/restore/project"),r(n,"Address","/address"),r(n,"Addresses","/addresses"),r(n,"Address","/address"),r(n,"RestoreAddress","/restore/address"),r(n,"Face","/face"),r(n,"PassFace","/pass/face"),r(n,"Face","/face"),r(n,"Faces","/faces"),r(n,"Device","/device"),r(n,"Devices","/devices"),r(n,"Uuid","/unknown/devices"),r(n,"DeviceFaceGroup","/device/face/group"),r(n,"FaceGroup","/face/groups"),r(n,"DeviceLogs","/device/logs"),r(n,"DeviceRecord","/face/logs"),r(n,"DeviceTypes","/device/types"),r(n,"DeviceHeartbeat","/device/heartbeat"),r(n,"Apk","/apk"),r(n,"Apks","/apks"),r(n,"ApkVersion","/apk/version"),r(n,"ApkVersions","/apk/versions"),r(n,"PublishApk","/publish/apk"),r(n,"DangerFace","/danger/face"),r(n,"DangerFaces","/danger/faces"),r(n,"DelDangerFace","/danger/face"),r(n,"DangerLogs","/danger/logs"),r(n,"UploadFace","/upload/face"),r(n,"ApiToken","/api/token"),n);e.exports=i},"9f7f":function(e,t,a){"use strict";var n=a("d039");function r(e,t){return RegExp(e,t)}t.UNSUPPORTED_Y=n((function(){var e=r("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),t.BROKEN_CARET=n((function(){var e=r("^r","gy");return e.lastIndex=2,null!=e.exec("str")}))},ac1f:function(e,t,a){"use strict";var n=a("23e7"),r=a("9263");n({target:"RegExp",proto:!0,forced:/./.exec!==r},{exec:r})},c466:function(e,t,a){"use strict";a("d3b7"),a("ac1f"),a("25f0"),a("5319");var n={};function r(e){return e=e.toString(),e[1]?e:"0"+e}n.formatTime=function(e,t){var a=["Y","M","D","h","m","s"],n=[],i=new Date(1e3*e);for(var o in n.push(i.getFullYear()),n.push(r(i.getMonth()+1)),n.push(r(i.getDate())),n.push(r(i.getHours())),n.push(r(i.getMinutes())),n.push(r(i.getSeconds())),n)t=t.replace(a[o],n[o]);return t},t["a"]=n},d784:function(e,t,a){"use strict";a("ac1f");var n=a("6eeb"),r=a("d039"),i=a("b622"),o=a("9263"),l=a("9112"),c=i("species"),s=!r((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")})),u=function(){return"$0"==="a".replace(/./,"$0")}(),d=i("replace"),p=function(){return!!/./[d]&&""===/./[d]("a","$0")}(),g=!r((function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var a="ab".split(e);return 2!==a.length||"a"!==a[0]||"b"!==a[1]}));e.exports=function(e,t,a,d){var f=i(e),h=!r((function(){var t={};return t[f]=function(){return 7},7!=""[e](t)})),v=h&&!r((function(){var t=!1,a=/a/;return"split"===e&&(a={},a.constructor={},a.constructor[c]=function(){return a},a.flags="",a[f]=/./[f]),a.exec=function(){return t=!0,null},a[f](""),!t}));if(!h||!v||"replace"===e&&(!s||!u||p)||"split"===e&&!g){var m=/./[f],b=a(f,""[e],(function(e,t,a,n,r){return t.exec===o?h&&!r?{done:!0,value:m.call(t,a,n)}:{done:!0,value:e.call(a,t,n)}:{done:!1}}),{REPLACE_KEEPS_$0:u,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:p}),x=b[0],k=b[1];n(String.prototype,e,x),n(RegExp.prototype,f,2==t?function(e,t){return k.call(e,this,t)}:function(e){return k.call(e,this)})}d&&l(RegExp.prototype[f],"sham",!0)}},f1b3:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"btn"},[a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.dialogDevice=!0}}},[e._v("添加设备")])],1),a("div",{staticClass:"btn"},[a("el-input",{staticClass:"search",attrs:{placeholder:"输入设备号"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.search(e.uuid)}},model:{value:e.uuid,callback:function(t){e.uuid=t},expression:"uuid"}})],1),a("div",{staticClass:"btn"},[a("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.search(e.uuid)}}},[e._v("搜索")])],1),a("el-dialog",{attrs:{title:"添加设备",visible:e.dialogDevice},on:{"update:visible":function(t){e.dialogDevice=t}}},[a("div",{staticClass:"box"},[a("el-form",{attrs:{model:e.form,"label-width":"100px"}},[a("el-form-item",{attrs:{label:"设备名称"}},[a("el-input",{model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),a("el-form-item",{attrs:{label:"类型"}},[a("el-select",{attrs:{placeholder:"请选择类型"},model:{value:e.form.type,callback:function(t){e.$set(e.form,"type",t)},expression:"form.type"}},e._l(e.typeList,(function(t,n){return a("el-option",{key:n,attrs:{label:e.typeList[n],value:n}})})),1)],1),a("el-form-item",{attrs:{label:"选择地址"}},[a("el-select",{attrs:{placeholder:"请选择地址"},on:{change:e.addressChange},model:{value:e.form.address_id,callback:function(t){e.$set(e.form,"address_id",t)},expression:"form.address_id"}},e._l(e.addressList,(function(e){return a("el-option",{key:e.id,attrs:{label:e.address,value:e.id}})})),1)],1),e.form.address_id?a("div",[a("el-form-item",{attrs:{label:"选择人脸组"}},[a("el-checkbox",{on:{change:e.handleCheckAllChange},model:{value:e.checkAll,callback:function(t){e.checkAll=t},expression:"checkAll"}},[e._v("全选")]),a("div",{staticClass:"facebox"},e._l(e.faceGroupList,(function(t,n){return a("div",{key:n},[a("el-checkbox-group",{staticClass:"facebox-item",model:{value:e.form.face_groups,callback:function(t){e.$set(e.form,"face_groups",t)},expression:"form.face_groups"}},[a("el-checkbox",{attrs:{label:t.group_name}})],1)],1)})),0)],1)],1):e._e(),a("el-form-item",{attrs:{label:"选择uuid"}},[a("el-select",{attrs:{placeholder:"请选择uuid"},model:{value:e.form.uuid,callback:function(t){e.$set(e.form,"uuid",t)},expression:"form.uuid"}},e._l(e.uuidList,(function(e){return a("el-option",{key:e.id,attrs:{label:e.uuid,value:e.uuid}})})),1)],1),a("el-form-item",{attrs:{label:"选择安装包"}},[a("el-select",{attrs:{placeholder:"请选择安装包"},on:{change:e.apkChange},model:{value:e.form.apk,callback:function(t){e.$set(e.form,"apk",t)},expression:"form.apk"}},e._l(e.apkList,(function(e){return a("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})),1)],1),a("el-form-item",{attrs:{label:"安装包版本"}},[a("el-select",{attrs:{placeholder:"请选择版本"},model:{value:e.form.apk_version,callback:function(t){e.$set(e.form,"apk_version",t)},expression:"form.apk_version"}},e._l(e.versionList,(function(e){return a("el-option",{key:e.id,attrs:{label:e.version,value:e.id}})})),1)],1),a("el-form-item",{attrs:{label:"配置热感"}},[a("el-radio-group",{model:{value:e.hotness,callback:function(t){e.hotness=t},expression:"hotness"}},[a("el-radio",{attrs:{label:1}},[e._v("正常")]),a("el-radio",{attrs:{label:2}},[e._v("严格")]),a("el-radio",{attrs:{label:3}},[e._v("关闭")])],1)],1),a("el-form-item",{attrs:{label:"选择方向"}},[a("el-select",{attrs:{placeholder:"请选择地址"},model:{value:e.form.direction,callback:function(t){e.$set(e.form,"direction",t)},expression:"form.direction"}},e._l(e.directionList,(function(e){return a("el-option",{key:e.id,attrs:{label:e.direction,value:e.id}})})),1)],1),a("div",{staticClass:"submit"},[a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:e.newDevice}},[e._v("提交")])],1)],1)],1)],1)]),a("el-table",{ref:"multipleTable",attrs:{data:e.tableDate}},[a("el-table-column",{attrs:{label:"名称",type:"selection",align:"center"}}),a("el-table-column",{attrs:{prop:"id",label:"ID",align:"center"}}),a("el-table-column",{attrs:{prop:"address_id",label:"地址ID",align:"center"}}),a("el-table-column",{attrs:{prop:"uuid",label:"uuid",align:"center"}}),a("el-table-column",{attrs:{prop:"type",label:"类型",align:"center"}}),a("el-table-column",{attrs:{prop:"direction",label:"方向",align:"center"}}),a("el-table-column",{attrs:{prop:"version",label:"版本",align:"center"}}),a("el-table-column",{attrs:{prop:"remark",label:"备注",align:"center",width:"200px"}}),a("el-table-column",{attrs:{prop:"last_login",label:"最后登录时间",align:"center",width:"200px"}}),a("el-table-column",{attrs:{label:"操作",align:"center",width:"200px"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-dropdown",[a("el-button",{attrs:{type:"primary"}},[e._v(" 操作"),a("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),a("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[a("el-dropdown-item",[a("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(a){return e.handleShowLog(t.$index,t.row)}}},[e._v("查看日志")])],1),a("el-dropdown-item",[a("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(a){return e.handleShowRecord(t.$index,t.row)}}},[e._v("查看进出记录")])],1),a("el-dropdown-item",[a("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(a){return e.handleShowFace(t.$index,t.row)}}},[e._v("查看人脸组")])],1),a("el-dropdown-item",[a("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(a){return e.handleShowLog(t.$index,t.row)}}},[e._v("查看指令")])],1),a("el-dropdown-item",[a("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(a){return e.handleHeart(t.$index,t.row)}}},[e._v("查看心跳")])],1),a("el-dropdown-item",[a("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(a){return e.handleDelete(t.$index,t.row)}}},[e._v("删除")])],1)],1)],1)]}}])})],1),a("el-dialog",{attrs:{title:"查看日志",visible:e.dialogLogs,width:"80%"},on:{"update:visible":function(t){e.dialogLogs=t}}},[a("el-table",{attrs:{data:e.logstable}},[a("el-table-column",{attrs:{prop:"id",label:"ID",align:"center"}}),a("el-table-column",{attrs:{prop:"uuid",label:"设备ID",align:"center"}}),a("el-table-column",{attrs:{prop:"time",label:"时间",align:"center"}}),a("el-table-column",{attrs:{prop:"logCat",label:"消息",align:"center",width:"400px"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("div",{staticClass:"logcat"},[e._v(e._s(t.row.logCat)+" ")]),t.row.logCat?a("div",{staticStyle:{"text-align":"left"}},[a("el-button",{attrs:{size:"mini"},on:{click:function(a){return e.showlogcat(t.$index,t.row)}}},[e._v("查看更多")])],1):e._e()]}}])}),a("el-table-column",{attrs:{prop:"type",label:"状态",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",{domProps:{textContent:e._s(1==t.row.type?"正常":"异常")}})]}}])}),a("el-table-column",{attrs:{prop:"created_at",label:"创建时间",align:"center"}})],1),a("div",{staticClass:"block"},[a("el-pagination",{attrs:{"current-page":e.currentLogsPage,"page-size":10,layout:"prev, pager, next, jumper",total:e.totalLogsPage},on:{"current-change":e.handleCurrentLogsChange,"update:currentPage":function(t){e.currentLogsPage=t},"update:current-page":function(t){e.currentLogsPage=t}}})],1)],1),a("el-dialog",{attrs:{title:"查看日志",visible:e.dialogLogcat,width:"800px"},on:{"update:visible":function(t){e.dialogLogcat=t}}},[a("textarea",{directives:[{name:"model",rawName:"v-model",value:e.logCat,expression:"logCat"}],staticClass:"temp",domProps:{value:e.logCat},on:{input:function(t){t.target.composing||(e.logCat=t.target.value)}}})]),a("el-dialog",{attrs:{title:"查看进出记录",visible:e.dialogShowRecord,width:"80%"},on:{"update:visible":function(t){e.dialogShowRecord=t}}},[a("el-table",{attrs:{data:e.faceLogsTable}},[a("el-table-column",{attrs:{prop:"id",label:"ID",align:"center"}}),a("el-table-column",{attrs:{prop:"device_uuid",label:"设备ID",align:"center"}}),a("el-table-column",{attrs:{prop:"time",label:"时间",align:"center"}}),a("el-table-column",{attrs:{prop:"temp",label:"温度",align:"center"}}),a("el-table-column",{attrs:{prop:"face_id",label:"人脸ID",align:"center"}}),a("el-table-column",{attrs:{prop:"image",label:"人脸图片",align:"center"},scopedSlots:e._u([{key:"default",fn:function(e){return[a("img",{staticStyle:{"max-width":"180px","max-height":"80px"},attrs:{src:e.row.image}})]}}])})],1),a("div",{staticClass:"block"},[a("el-pagination",{attrs:{"current-page":e.currentFaceLogsPage,"page-size":10,layout:"prev, pager, next, jumper",total:e.totalFaceLogsPage},on:{"current-change":e.handleCurrentFaceLogsChange,"update:currentPage":function(t){e.currentFaceLogsPage=t},"update:current-page":function(t){e.currentFaceLogsPage=t}}})],1)],1),a("el-dialog",{attrs:{title:"查看人脸组",visible:e.dialogFaceGroup,width:"80%"},on:{"update:visible":function(t){e.dialogFaceGroup=t}}},[a("el-table",{attrs:{data:e.facetable}},[a("el-table-column",{attrs:{prop:"id",label:"ID",align:"center"}}),a("el-table-column",{attrs:{prop:"device_id",label:"设备ID",align:"center"}}),a("el-table-column",{attrs:{prop:"group_id",label:"人脸组ID",align:"center"}}),a("el-table-column",{attrs:{prop:"group_name",label:"人脸组名字",align:"center"}})],1)],1),a("el-dialog",{attrs:{title:"设备："+e.uuid,visible:e.dialogHeart,fullscreen:!0},on:{"update:visible":function(t){e.dialogHeart=t}}},[a("div",{ref:"heartChart",staticStyle:{width:"100%",height:"600px"},attrs:{id:"heartChart"}}),a("el-table",{attrs:{data:e.arr}},[a("el-table-column",{attrs:{prop:"id",label:"ID",align:"center"}}),a("el-table-column",{attrs:{prop:"device_uuid",label:"设备ID",align:"center"}}),a("el-table-column",{attrs:{prop:"time",label:"时间",align:"center"}}),a("el-table-column",{attrs:{prop:"updated_at",label:"更新时间",align:"center"}})],1)],1),a("div",{staticClass:"block"},[a("el-pagination",{attrs:{"current-page":e.currentPage,"page-size":10,layout:"prev, pager, next, jumper",total:e.totalPage},on:{"current-change":e.handleCurrentChange,"update:currentPage":function(t){e.currentPage=t},"update:current-page":function(t){e.currentPage=t}}})],1)],1)},r=[],i=(a("4160"),a("ac1f"),a("841c"),a("159b"),a("365c")),o=a("c466"),l={name:"gradems",data:function(){return{dialogLogcat:!1,logCat:"",dialogDevice:!1,typeList:[],label:"",addressList:[],faceGroupList:[],checkAll:!1,uuidList:[],apkList:[],versionList:[],directionList:[{id:"in",direction:"进"},{id:"out",direction:"出"}],hotness:1,form:{name:"",address_id:"",type:"人脸机",uuid:"",remark:"",configs:[],apk:"",apk_version:"",face_groups:[],direction:""},tableDate:[],dialogFaceGroup:!1,facetable:[],dialogLogs:!1,logstable:[],dialogShowRecord:!1,faceLogsTable:[],uuid:"",address_id:"",dialogHeart:!1,x_formatData:[],arr:[],currentFaceLogsPage:1,totalFaceLogsPage:0,currentLogsPage:1,totalLogsPage:0,currentPage:1,totalPage:0}},mounted:function(){this.getDevice(),this.getAddress(),this.getUuid(),this.getApk(),this.getTypes()},methods:{search:function(){var e=this;e.uuid?i["a"].search(e.uuid).then((function(t){e.tableDate=t.data,e.totalPage=1,e.uuid="",e.$message.success("搜索成功！")})):e.$message.warning("输入设备号")},getDevice:function(){var e=this,t=this;i["a"].devices(this.currentPage).then((function(a){e.tableDate=a.data,t.totalPage=a.total}))},getTypes:function(){var e=this;i["a"].deviceTypes().then((function(t){console.log(t),e.typeList=t}))},getAddress:function(){var e=this;i["a"].addresses(e.currentPage,1e3).then((function(t){e.addressList=t.data}))},addressChange:function(e){this.getFaceGroup(e)},getFaceGroup:function(e){var t=this;i["a"].faceGroup(e).then((function(e){t.faceGroupList=e.data}))},handleCheckAllChange:function(e){var t=[];this.faceGroupList.forEach((function(e){t.push(e.group_name)})),this.form.face_groups=e?t:[]},getUuid:function(){var e=this;i["a"].uuid(e.currentPage,1e3).then((function(t){e.uuidList=t.data}))},getApk:function(){var e=this;i["a"].apks(e.currentPage).then((function(t){e.apkList=t.data}))},apkChange:function(e){console.log(e),this.getApkVersion(e)},getApkVersion:function(e){var t=this;i["a"]._apkVersions(e).then((function(e){t.versionList=e.data}))},newDevice:function(){var e=this;switch(e.hotness){case 1:e.form.configs.push({heatvision:"normal"});break;case 2:e.form.configs.push({heatvision:"strict"});break;case 3:e.form.configs.push({heatvision:"none"})}i["a"].device(e.form).then((function(t){e.getUuid(),e.dialogDevice=!1,e.$message.success("提交成功"),e.getDevice(),e.currentPage=1,e.form={name:"",address_id:"",type:"人脸机",uuid:"",remark:"",configs:[],apk:"",apk_version:"",face_groups:[],direction:""}}))},handleShowLog:function(e,t){var a=this;this.dialogLogs=!0,this.uuid=t.uuid,i["a"].deviceLogs(1,10,t.uuid).then((function(e){a.logstable=e.data,a.totalLogsPage=e.total}))},handleCurrentLogsChange:function(e){var t=this;i["a"].deviceLogs(e,10,this.uuid).then((function(e){t.logstable=e.data,t.totalLogsPage=e.total}))},handleShowFace:function(e,t){console.log(t.groups),this.dialogFaceGroup=!0,this.facetable=t.groups},handleShowRecord:function(e,t){var a=this;this.dialogShowRecord=!0,this.uuid=t.uuid,this.address_id=t.address_id,i["a"].deviceFaceLogs(1,10,t.uuid,t.address_id).then((function(e){a.faceLogsTable=e.data,a.totalFaceLogsPage=e.total}))},handleDel:function(){},showlogcat:function(e,t){this.dialogLogcat=!0,this.logCat=t.logCat},handleHeart:function(e,t){console.log(t);var a=this;a.dialogHeart=!0,a.uuid=t.uuid,a.x_formatData=[],a.$nextTick((function(){a.drawLine()})),i["a"].deviceHeart(a.uuid).then((function(e){a.arr=e.originData,a.arr.forEach((function(e){e.time=o["a"].formatTime(e.time,"Y-M-D h:m:s")}))}))},drawLine:function(){var e=this,t=e.$echarts.init(e.$refs.heartChart);t.setOption({title:{text:"网络心跳图"},tooltip:{},legend:{data:["销量"]},xAxis:{name:"时间/分钟",data:[]},yAxis:{},series:[{name:"time",type:"line",data:[]}]}),t.showLoading(),i["a"].deviceHeart(e.uuid).then((function(a){t.hideLoading();for(var n=[],r=0;r<a.formatData.length;r++)e.x_formatData.push(r),n.push(a.formatData[r]);t.setOption({xAxis:{data:e.x_formatData},series:[{name:"time",data:n}]})}))},handleCurrentChange:function(e){var t=this;t.getDevice()},handleCurrentFaceLogsChange:function(e){var t=this;i["a"].deviceFaceLogs(e,10,this.uuid,this.address_id).then((function(e){t.faceLogsTable=e.data,t.totalFaceLogsPage=e.total}))}}},c=l,s=(a("5f1f"),a("2877")),u=Object(s["a"])(c,n,r,!1,null,"8b806cc2",null);t["default"]=u.exports}}]);
//# sourceMappingURL=chunk-4ae45692.4a2fcfd1.js.map