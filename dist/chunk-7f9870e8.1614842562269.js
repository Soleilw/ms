(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7f9870e8","chunk-2d225891"],{"365c":function(e,t,n){"use strict";var r=n("ade3"),a=n("be3b"),i=n("99b1"),o=n.n(i),s={aip:function(e){return a["a"].post(o.a.Aip,e)},delAip:function(e){return a["a"].del(o.a.Aip,{id:e})},aips:function(e,t){return a["a"].get(o.a.Aips,{page:e,limit:t})},apk:function(e){return a["a"].post(o.a.Apk,e)},apks:function(e,t){return a["a"].get(o.a.Apks,{page:e,limit:t})},apkVersion:function(e){return a["a"].post(o.a.ApkVersion,e)},apkVersions:function(e,t,n){return a["a"].get(o.a.ApkVersions,{page:e,limit:t,apk_id:n})},_apkVersions:function(e){return a["a"].get(o.a.ApkVersions,{id:e})},publishApk:function(e){return a["a"].post(o.a.PublishApk,e)},project:function(e){return a["a"].post(o.a.Project,e)},projects:function(e,t){return a["a"].get(o.a.Projects,{page:e,limit:t})},address:function(e){return a["a"].post(o.a.Address,e)},getaddress:function(e){return a["a"].get(o.a.Address,{id:e})},delAddress:function(e){return a["a"].del(o.a.Address,{id:e})},addresses:function(e,t,n,r,i){return a["a"].get(o.a.Addresses,{page:e,limit:t,project_id:n,area_id:r,address:i})},addressTypes:function(e,t){return a["a"].get(o.a.AddressTypes,{page:e,limit:t})},addressesMap:function(e,t,n){return a["a"].get(o.a.Addresses,{page:e,limit:t,type:n})},face:function(e){return a["a"].post(o.a.Face,e)},faces:function(e,t,n){return a["a"].get(o.a.Faces,{page:e,limit:t,name:n})},delFace:function(e){return a["a"].get(o.a.DeleteFace,{id:e})},searchFace:function(e){return a["a"].post(o.a.SearchImageFace,e)},pushRecords:function(e,t,n,r){return a["a"].get(o.a.PushRecords,{page:e,limit:t,name:n,address:r})},pushRecordCommands:function(e){return a["a"].get(o.a.PushRecordCommands,{id:e})},againPush:function(e){return a["a"].post(o.a.PushRecord,e)},areas:function(e,t,n){return a["a"].get(o.a.Areas,{page:e,limit:t,parent_id:n})},area:function(e){return a["a"].post(o.a.Area,e)},device:function(e){return a["a"].post(o.a.Device,e)},_device:function(e){return a["a"].get(o.a.Device,{uuid:e})},devices:function(e,t,n,r,i,s,c,l){return a["a"].get(o.a.Devices,{page:e,limit:t,type:n,uuid:r,area_id:i,address_id:s,online:c,address:l})},_devices:function(e,t,n){return a["a"].get(o.a.Devices,{direction:e,addresses:t,limit:n})},deviceLogs:function(e,t,n,r){return a["a"].get(o.a.DeviceLogs,{page:e,limit:t,uuid:n,type:r})},deviceFaceLogs:function(e,t,n,r,i,s){return a["a"].get(o.a.DeviceRecord,{page:e,limit:t,uuid:n,search:r,area_id:i,address_id:s})},searchFaceLogs:function(e,t,n){return a["a"].get(o.a.DeviceRecord,{page:e,limit:t,faces:n})},deviceTypes:function(){return a["a"].get(o.a.DeviceTypes)},deviceHeart:function(e){return a["a"].get(o.a.DeviceHeartbeat,{uuid:e})},deviceCommands:function(e,t,n){return a["a"].get(o.a.DeviceCommands,{page:e,limit:t,uuid:n})},commandsType:function(e){return a["a"].get(o.a.Commands,{type:e})},sendDeviceCommand:function(e){return a["a"].post(o.a.SendDeviceCommand,e)},resetCommand:function(e){return a["a"].get(o.a.RestartDeviceCommands,{uuid:e})},catchFace:function(e){return a["a"].get(o.a.CatchFaces,{id:e})},deviceUserList:function(e,t,n){return a["a"].get(o.a.DeviceUserList,{page:e,limit:t,uuid:n})},faceGroup:function(e){return a["a"].get(o.a.FaceGroup,{address_id:e})},uuid:function(e,t){return a["a"].get(o.a.Uuid,{page:e,limit:t})},dangerFace:function(e){return a["a"].post(o.a.DangerFace,e)},importHistory:function(e,t,n){return a["a"].get(o.a.ImportTasks,{page:e,limit:t,state:n})},delDangerFace:function(e){return a["a"].del(o.a.DelDangerFace,{id:e})},dangerFaces:function(e,t){return a["a"].get(o.a.DangerFaces,{page:e,limit:t})},personVerifies:function(e,t,n,r){return a["a"].get(o.a.PersonVerifies,{page:e,limit:t,search:n,state:r})},dangerLogs:function(e,t,n,r){return a["a"].get(o.a.DangerLogs,{page:e,limit:t,danger_id:n,address:r})},alert:function(e,t,n,r,i,s,c,l,u){return a["a"].get(o.a.DangerAlerts,{page:e,limit:t,state:n,search:r,dangers:i,alert_type:s,start:c,end:l,danger_type:u})},handleAlerts:function(e){return a["a"].post(o.a.HandleAlerts,{results:e})},dangerTypes:function(){return a["a"].get(o.a.DangerTypes,{})},notifyChange:function(e){return a["a"].post(o.a.ChangeDangerFace,e)},roles:function(e,t){return a["a"].get(o.a.Roles,{page:e,limit:t})},oneRole:function(e){return a["a"].get(o.a.Role,{name:e})},role:function(e){return a["a"].post(o.a.Role,e)},users:function(e,t){return a["a"].get(o.a.Users,{page:e,limit:t})},user:function(e){return a["a"].post(o.a.User,e)},policeLevel:function(e){return a["a"].post(o.a.PoliceLevel,e)},policeLevels:function(e,t,n,r){return a["a"].get(o.a.PoliceLevels,{page:e,limit:t,level:n,parent_id:r})},policeman:function(e){return a["a"].post(o.a.Policeman,e)},policemen:function(e,t,n,r,i,s){return a["a"].get(o.a.Policemen,{page:e,limit:t,station_id:n,department_id:r,state:i,search:s})},audit:function(e){return a["a"].post(o.a.PassPoliceman,e)},delPolice:function(e){return a["a"].del(o.a.Policeman,{id:e})},screenSaver:function(e){return a["a"].post(o.a.screenSaver,e)},screenSavers:function(e,t){return a["a"].get(o.a.screenSavers,{page:e,limit:t})},delScreenSaver:function(e){return a["a"].del(o.a.screenSaver,Object(r["a"])({id:e},"id",e))},issueScreenSaver:function(e){return a["a"].post(o.a.publishScreenSavers,e)},policeStation:function(e){return a["a"].post(o.a.PoliceStation,e)},policeStations:function(e,t,n){return a["a"].get(o.a.PoliceStations,{page:e,limit:t,name:n})},getParentPoliceStations:function(e,t,n){return a["a"].get(o.a.PoliceStations,{page:e,limit:t,parent_id:n})},onePoliceStation:function(e){return a["a"].get(o.a.PoliceStation,{id:e})},delPoliceStation:function(e){return a["a"].get(o.a.DelPoliceStation,{id:e})},information:function(e){return a["a"].post(o.a.Information,e)},informations:function(e,t,n,r){return a["a"].get(o.a.Information,{page:e,limit:t,id:n,title:r})},faceSwitch:function(e){return a["a"].post(o.a.FaceSwicth,e)},delFaceSwitch:function(e){return a["a"].del(o.a.FaceSwicth,{id:e})},faceSwitches:function(e,t){return a["a"].get(o.a.FaceSwicthes,{page:e,limit:t})},statistical:function(){return a["a"].get(o.a.Count)},currentDay:function(){return a["a"].get(o.a.CountOpenRecord)},strangerRecord:function(){return a["a"].get(o.a.CountStrangerRecord)},addressStrangerRecord:function(e){return a["a"].get(o.a.CountAddressStrangerRecord,{id:e})},searchStrangerRecord:function(e){return a["a"].get(o.a.CountStrangerRecord,{address:e})},getTransmits:function(e,t){return a["a"].get(o.a.Transmits,{page:e,limit:t})},getOfflineDevices:function(e,t){return a["a"].get(o.a.OfflineDevices,{sort:e,filter:t})}};t["a"]=s},"8d81":function(e,t,n){var r;(function(a){"use strict";function i(e,t){var n=(65535&e)+(65535&t),r=(e>>16)+(t>>16)+(n>>16);return r<<16|65535&n}function o(e,t){return e<<t|e>>>32-t}function s(e,t,n,r,a,s){return i(o(i(i(t,e),i(r,s)),a),n)}function c(e,t,n,r,a,i,o){return s(t&n|~t&r,e,t,a,i,o)}function l(e,t,n,r,a,i,o){return s(t&r|n&~r,e,t,a,i,o)}function u(e,t,n,r,a,i,o){return s(t^n^r,e,t,a,i,o)}function d(e,t,n,r,a,i,o){return s(n^(t|~r),e,t,a,i,o)}function f(e,t){var n,r,a,o,s;e[t>>5]|=128<<t%32,e[14+(t+64>>>9<<4)]=t;var f=1732584193,p=-271733879,m=-1732584194,g=271733878;for(n=0;n<e.length;n+=16)r=f,a=p,o=m,s=g,f=c(f,p,m,g,e[n],7,-680876936),g=c(g,f,p,m,e[n+1],12,-389564586),m=c(m,g,f,p,e[n+2],17,606105819),p=c(p,m,g,f,e[n+3],22,-1044525330),f=c(f,p,m,g,e[n+4],7,-176418897),g=c(g,f,p,m,e[n+5],12,1200080426),m=c(m,g,f,p,e[n+6],17,-1473231341),p=c(p,m,g,f,e[n+7],22,-45705983),f=c(f,p,m,g,e[n+8],7,1770035416),g=c(g,f,p,m,e[n+9],12,-1958414417),m=c(m,g,f,p,e[n+10],17,-42063),p=c(p,m,g,f,e[n+11],22,-1990404162),f=c(f,p,m,g,e[n+12],7,1804603682),g=c(g,f,p,m,e[n+13],12,-40341101),m=c(m,g,f,p,e[n+14],17,-1502002290),p=c(p,m,g,f,e[n+15],22,1236535329),f=l(f,p,m,g,e[n+1],5,-165796510),g=l(g,f,p,m,e[n+6],9,-1069501632),m=l(m,g,f,p,e[n+11],14,643717713),p=l(p,m,g,f,e[n],20,-373897302),f=l(f,p,m,g,e[n+5],5,-701558691),g=l(g,f,p,m,e[n+10],9,38016083),m=l(m,g,f,p,e[n+15],14,-660478335),p=l(p,m,g,f,e[n+4],20,-405537848),f=l(f,p,m,g,e[n+9],5,568446438),g=l(g,f,p,m,e[n+14],9,-1019803690),m=l(m,g,f,p,e[n+3],14,-187363961),p=l(p,m,g,f,e[n+8],20,1163531501),f=l(f,p,m,g,e[n+13],5,-1444681467),g=l(g,f,p,m,e[n+2],9,-51403784),m=l(m,g,f,p,e[n+7],14,1735328473),p=l(p,m,g,f,e[n+12],20,-1926607734),f=u(f,p,m,g,e[n+5],4,-378558),g=u(g,f,p,m,e[n+8],11,-2022574463),m=u(m,g,f,p,e[n+11],16,1839030562),p=u(p,m,g,f,e[n+14],23,-35309556),f=u(f,p,m,g,e[n+1],4,-1530992060),g=u(g,f,p,m,e[n+4],11,1272893353),m=u(m,g,f,p,e[n+7],16,-155497632),p=u(p,m,g,f,e[n+10],23,-1094730640),f=u(f,p,m,g,e[n+13],4,681279174),g=u(g,f,p,m,e[n],11,-358537222),m=u(m,g,f,p,e[n+3],16,-722521979),p=u(p,m,g,f,e[n+6],23,76029189),f=u(f,p,m,g,e[n+9],4,-640364487),g=u(g,f,p,m,e[n+12],11,-421815835),m=u(m,g,f,p,e[n+15],16,530742520),p=u(p,m,g,f,e[n+2],23,-995338651),f=d(f,p,m,g,e[n],6,-198630844),g=d(g,f,p,m,e[n+7],10,1126891415),m=d(m,g,f,p,e[n+14],15,-1416354905),p=d(p,m,g,f,e[n+5],21,-57434055),f=d(f,p,m,g,e[n+12],6,1700485571),g=d(g,f,p,m,e[n+3],10,-1894986606),m=d(m,g,f,p,e[n+10],15,-1051523),p=d(p,m,g,f,e[n+1],21,-2054922799),f=d(f,p,m,g,e[n+8],6,1873313359),g=d(g,f,p,m,e[n+15],10,-30611744),m=d(m,g,f,p,e[n+6],15,-1560198380),p=d(p,m,g,f,e[n+13],21,1309151649),f=d(f,p,m,g,e[n+4],6,-145523070),g=d(g,f,p,m,e[n+11],10,-1120210379),m=d(m,g,f,p,e[n+2],15,718787259),p=d(p,m,g,f,e[n+9],21,-343485551),f=i(f,r),p=i(p,a),m=i(m,o),g=i(g,s);return[f,p,m,g]}function p(e){var t,n="",r=32*e.length;for(t=0;t<r;t+=8)n+=String.fromCharCode(e[t>>5]>>>t%32&255);return n}function m(e){var t,n=[];for(n[(e.length>>2)-1]=void 0,t=0;t<n.length;t+=1)n[t]=0;var r=8*e.length;for(t=0;t<r;t+=8)n[t>>5]|=(255&e.charCodeAt(t/8))<<t%32;return n}function g(e){return p(f(m(e),8*e.length))}function h(e,t){var n,r,a=m(e),i=[],o=[];for(i[15]=o[15]=void 0,a.length>16&&(a=f(a,8*e.length)),n=0;n<16;n+=1)i[n]=909522486^a[n],o[n]=1549556828^a[n];return r=f(i.concat(m(t)),512+8*t.length),p(f(o.concat(r),640))}function v(e){var t,n,r="0123456789abcdef",a="";for(n=0;n<e.length;n+=1)t=e.charCodeAt(n),a+=r.charAt(t>>>4&15)+r.charAt(15&t);return a}function b(e){return unescape(encodeURIComponent(e))}function y(e){return g(b(e))}function k(e){return v(y(e))}function _(e,t){return h(b(e),b(t))}function F(e,t){return v(_(e,t))}function S(e,t,n){return t?n?_(t,e):F(t,e):n?y(e):k(e)}r=function(){return S}.call(t,n,t,e),void 0===r||(e.exports=r)})()},"9f54":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],attrs:{"element-loading-text":"获取数据中"}},[n("div",{staticClass:"handle-box"},[n("div",{staticClass:"btn"},[n("el-button",{attrs:{type:"primary"},on:{click:function(t){e.dialogAPK=!0}}},[e._v("添加APK")])],1)]),n("el-table",{attrs:{data:e.tableData,stripe:"",border:"","header-cell-style":{background:"#f0f0f0",color:"#003366"}}},[n("el-table-column",{attrs:{prop:"id",label:"APKID"}}),n("el-table-column",{attrs:{prop:"name",label:"名称"}}),n("el-table-column",{attrs:{prop:"description",label:"描述"}}),n("el-table-column",{attrs:{prop:"created_at",label:"创建日期"}}),n("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(n){return e.handleShowVersion(t.$index,t.row)}}},[e._v("查看版本")]),n("el-popconfirm",{staticStyle:{"margin-left":"10px"},attrs:{title:"是否要删除该条数据",cancelButtonType:"primary"},on:{confirm:function(n){return e.handleDel(t.$index,t.row)}}},[n("el-button",{attrs:{slot:"reference",size:"mini",type:"danger"},slot:"reference"},[e._v("删除")])],1)]}}])})],1),n("el-dialog",{attrs:{title:"添加APK",visible:e.dialogAPK},on:{"update:visible":function(t){e.dialogAPK=t}}},[n("div",{staticClass:"box"},[n("el-form",{attrs:{model:e.form,"label-width":"100px"}},[n("el-form-item",{attrs:{label:"APK名字"}},[n("el-input",{model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),n("el-form-item",{attrs:{label:"APK描述"}},[n("el-input",{model:{value:e.form.description,callback:function(t){e.$set(e.form,"description",t)},expression:"form.description"}})],1),n("div",{staticClass:"submit"},[n("el-form-item",[n("el-button",{attrs:{type:"primary"},on:{click:e.newApk}},[e._v("添加")])],1)],1)],1)],1)]),n("el-dialog",{attrs:{title:"查看版本",visible:e.dialogShowVersion,modal:!1,width:"80%","close-on-click-modal":!1},on:{"update:visible":function(t){e.dialogShowVersion=t}}},[n("div",[n("div",{staticClass:"handle-box"},[n("div",{staticClass:"btn"},[n("el-button",{attrs:{type:"primary"},on:{click:e.addVersion}},[e._v("添加版本")])],1)]),n("el-dialog",{attrs:{title:"添加版本",visible:e.dialogVersion,"close-on-click-modal":!1,modal:!1},on:{"update:visible":function(t){e.dialogVersion=t}}},[n("div",{staticClass:"box"},[n("el-form",{attrs:{model:e.versionForm,"label-width":"100px"}},[n("el-form-item",{attrs:{label:"版本名字"}},[n("el-input",{model:{value:e.versionForm.version,callback:function(t){e.$set(e.versionForm,"version",t)},expression:"versionForm.version"}})],1),n("el-form-item",{attrs:{label:"上传版本"}},[n("el-upload",{ref:"upload",attrs:{action:"https://upload-z2.qiniup.com",limit:1,"before-upload":e.beforeAvatarUpload,"on-success":e.handleAvatarSuccess,"on-remove":e.handleRemove,"on-exceed":e.handleExceed,"on-progress":e.uploadProcess,data:e.versionData}},[n("el-button",{attrs:{size:"small",type:"primary"}},[e._v("选择包")])],1),!0===e.hasFile?n("el-progress",{attrs:{"text-inside":!0,"stroke-width":15,percentage:e.percentage}}):e._e()],1),n("el-form-item",{attrs:{label:"版本链接"}},[n("el-input",{model:{value:e.versionForm.href,callback:function(t){e.$set(e.versionForm,"href",t)},expression:"versionForm.href"}})],1),n("div",{staticClass:"submit"},[n("el-form-item",[n("el-button",{attrs:{type:"primary"},on:{click:e.newApkVersion}},[e._v("添加")])],1)],1)],1)],1)]),n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.versionLoading,expression:"versionLoading"}],attrs:{data:e.versionTableData,border:"","header-cell-style":{background:"#f0f0f0",color:"#003366"},"max-height":"620","element-loading-text":"获取数据中"}},[n("el-table-column",{attrs:{prop:"id",label:"ID",align:"center"}}),n("el-table-column",{attrs:{prop:"apk_id",label:"APKID",align:"center"}}),n("el-table-column",{attrs:{prop:"version",label:"版本",align:"center"}}),n("el-table-column",{attrs:{prop:"created_at",label:"创建日期",align:"center"}}),n("el-table-column",{attrs:{label:"操作",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(n){return e.handleSend(t.$index,t.row)}}},[e._v("发布")]),n("el-button",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:t.row.href,expression:"scope.row.href",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:e.onCopy,expression:"onCopy",arg:"success"},{name:"clipboard",rawName:"v-clipboard:error",value:e.onError,expression:"onError",arg:"error"}],staticClass:"copy",attrs:{size:"mini",type:"primary"}},[e._v("复制链接")]),n("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(n){return e.handleDelete(t.$index,t.row)}}},[e._v("删除")])]}}])})],1),n("el-dialog",{attrs:{title:"发布",visible:e.dialogSend,modal:!1,width:"80%"},on:{"update:visible":function(t){e.dialogSend=t}}},[n("div",{staticClass:"box"},[n("el-form",{attrs:{model:e.sendForm,"label-width":"100px"}},[n("el-form-item",{attrs:{label:"选择类型"}},[n("el-select",{on:{change:e.typeChange},model:{value:e.sendForm.type,callback:function(t){e.$set(e.sendForm,"type",t)},expression:"sendForm.type"}},e._l(e.typeList,(function(e,t){return n("el-option",{key:t,attrs:{label:e.label,value:e.value}})})),1)],1),2===e.sendForm.type?n("div",[n("el-form-item",{attrs:{label:"选择项目"}},[n("el-select",{attrs:{placeholder:"请选择项目"},on:{change:e.changeProject},model:{value:e.sendForm.project_id,callback:function(t){e.$set(e.sendForm,"project_id",t)},expression:"sendForm.project_id"}},e._l(e.projectList,(function(e,t){return n("el-option",{key:t,attrs:{label:e.name,value:e.id}})})),1)],1)],1):e._e(),2===e.sendForm.type&&e.hasAddress?n("div",[n("el-form-item",{attrs:{label:"选择地址"}},[n("el-transfer",{attrs:{filterable:"",data:e.addressList,titles:["id-地址","选中地址"],"button-texts":["取消","确定"]},on:{change:e.handleCheckAllAddress},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.option;return n("span",{},[e._v(" "+e._s(r.key)+" - "+e._s(r.label))])}}],null,!1,3071261631),model:{value:e.sendForm.addresses,callback:function(t){e.$set(e.sendForm,"addresses",t)},expression:"sendForm.addresses"}})],1)],1):e._e(),3===e.sendForm.type?n("div",[n("el-form-item",{attrs:{label:"选择项目"}},[n("el-select",{attrs:{placeholder:"请选择项目"},on:{change:e.changeProject},model:{value:e.sendForm.project_id,callback:function(t){e.$set(e.sendForm,"project_id",t)},expression:"sendForm.project_id"}},e._l(e.projectList,(function(e,t){return n("el-option",{key:t,attrs:{label:e.name,value:e.id}})})),1)],1)],1):e._e(),3===e.sendForm.type&&e.hasAddress?n("div",[n("el-form-item",{attrs:{label:"选择地址"}},[n("el-transfer",{attrs:{filterable:"",data:e.addressList,titles:["id-地址","选中地址"],"button-texts":["取消","确定"]},on:{change:e.handleCheckAllAddress},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.option;return n("span",{},[e._v(" "+e._s(r.key)+" - "+e._s(r.label))])}}],null,!1,3071261631),model:{value:e.sendForm.addresses,callback:function(t){e.$set(e.sendForm,"addresses",t)},expression:"sendForm.addresses"}})],1)],1):e._e(),e.hasType?n("div",[n("el-form-item",{attrs:{label:"选择方向"}},[n("el-select",{on:{change:e.handleCheckeddirection},model:{value:e.sendForm.direction,callback:function(t){e.$set(e.sendForm,"direction",t)},expression:"sendForm.direction"}},e._l(e.directionList,(function(e,t){return n("el-option",{key:t,attrs:{label:e.name,value:e.value}})})),1)],1),n("el-form-item",{attrs:{label:"选择设备"}},[n("el-transfer",{directives:[{name:"loading",rawName:"v-loading",value:e.dialogLoading,expression:"dialogLoading"}],attrs:{"element-loading-text":"获取数据中",filterable:"",data:e.deviceList,titles:["uuid-备注","选中地址"],"button-texts":["取消","确定"]},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.option;return n("span",{},[e._v(" "+e._s(r.key)+" - "+e._s(r.label))])}}],null,!1,3071261631),model:{value:e.sendForm.devices,callback:function(t){e.$set(e.sendForm,"devices",t)},expression:"sendForm.devices"}})],1)],1):e._e(),n("div",{staticClass:"submit"},[n("el-form-item",[n("el-button",{attrs:{type:"primary"},on:{click:e.newSend}},[e._v("发布")])],1)],1)],1)],1)]),n("div",{staticClass:"block"},[n("el-pagination",{attrs:{"current-page":e.currentVersion,"page-sizes":[10,20,50,100,150,200,250,300],"page-size":e.sizeVersion,layout:"sizes, prev, pager, next, jumper",total:e.totalVersion},on:{"current-change":e.versionCurrentChange,"update:currentPage":function(t){e.currentVersion=t},"update:current-page":function(t){e.currentVersion=t},"size-change":e.versionSizeChange}})],1)],1)]),n("div",{staticClass:"block"},[n("el-pagination",{attrs:{"current-page":e.current,"page-sizes":[10,20,50,100,150,200,250,300],"page-size":e.size,layout:"sizes, prev, pager, next, jumper",total:e.total},on:{"current-change":e.currentChange,"update:currentPage":function(t){e.current=t},"update:current-page":function(t){e.current=t},"size-change":e.sizeChange}})],1)],1)},a=[],i=(n("99af"),n("baa5"),n("b0c0"),n("365c")),o=n("bc3a"),s=n.n(o),c=n("8d81"),l=n.n(c),u=(n("b311"),{name:"gradems",data:function(){return{loading:!0,dialogAPK:!1,form:{name:"",description:""},dialogVersion:!1,tableData:[],current:1,size:10,total:0,dialogShowVersion:!1,apkList:[],qiniuaddr:"https://tu.fengniaotuangou.cn",fileName:"",suffix:"",percentage:0,hasFile:"",versionData:{key:"",token:""},versionForm:{apk_id:"",version:"",href:""},dialogSend:!1,projectList:[],hasAddress:!1,typeList:[{value:1,label:"全部设备"},{value:2,label:"按地址选择"},{value:3,label:"自定义"}],directionList:[{value:"out",name:"出"},{value:"in",name:"进"}],versionTableData:[],versionLoading:!0,sendForm:{type:"",addresses:[],direction:"",devices:[],version_id:"",project_id:""},addressList:[],addresses:[],checkAll:!1,hasType:!1,deviceList:[],dialogLoading:!1,currentVersion:1,sizeVersion:10,totalVersion:0}},mounted:function(){this.getApk(),this.getAddress(),this.getQiniuToken()},methods:{getApk:function(){var e=this;i["a"].apks(1,10).then((function(t){e.loading=!1,e.tableData=t.data,e.total=t.total})).catch((function(t){e.loading=!1}))},newApk:function(){var e=this,t=this;i["a"].apk(t.form).then((function(n){t.$message.success("提交成功"),e.getApk(),t.ApkForm=!1,t.current=1,t.form={}}))},handleDel:function(){},handleShowVersion:function(e,t){var n=this;n.dialogShowVersion=!0,n.versionForm.apk_id=t.id,i["a"].apkVersions(1,10,n.versionForm.apk_id).then((function(e){n.versionLoading=!1,n.versionTableData=e.data,n.totalVersionPage=e.total})).catch((function(e){n.versionLoading=!1}))},currentChange:function(e){var t=this;t.loading=!0,t.current=e,i["a"].apks(e,t.size).then((function(e){t.loading=!1,t.tableData=e.data,t.total=e.total})).catch((function(e){t.loading=!1}))},sizeChange:function(e){var t=this;t.loading=!0,t.size=e,i["a"].apks(t.current,e).then((function(e){t.loading=!1,t.tableData=e.data,t.total=e.total})).catch((function(e){t.loading=!1}))},getApkVersion:function(){var e=this;i["a"].apkVersions(1,10,e.versionForm.apk_id).then((function(t){e.versionTableData=t.data,e.totalVersionPage=t.total}))},addVersion:function(){var e=this;e.dialogVersion=!0,e.versionForm={apk_id:e.versionForm.apk_id,version:"",href:""}},newApkVersion:function(){var e=this;i["a"].apkVersion(e.versionForm).then((function(t){e.$message.success("提交成功"),i["a"].apkVersions(1,10,e.versionForm.apk_id).then((function(t){e.versionTableData=t.data,e.totalVersionPage=t.total})),e.dialogVersion=!1,e.currentPage=1,e.versionForm={apk_id:"",version:"",href:""}}))},handleSend:function(e,t){this.dialogSend=!0,this.sendForm={type:"",addresses:[],direction:"",devices:[],version_id:"",project_id:""},this.sendForm.version_id=t.id,console.log(this.sendForm.version_id)},typeChange:function(e){var t=this;console.log(t.sendForm.addresses),1===t.sendForm.type&&(t.addressList=[],t.sendForm.project_id="",t.sendForm.addresses=[],t.hasAddress=!1,t.hasType=!1),3===t.sendForm.type&&(t.addressList=[],t.sendForm.project_id="",t.sendForm.addresses=[],t.hasAddress=!1,t.hasType=!1,t.getProject()),2===t.sendForm.type&&(t.addressList=[],t.sendForm.project_id="",t.sendForm.addresses=[],t.hasAddress=!1,t.hasType=!1,t.getProject())},getProject:function(){var e=this;i["a"].projects(1,100).then((function(t){e.projectList=t.data}))},changeProject:function(e){var t=this;t.sendForm.addresses=[],t.getAddress(e),t.hasAddress=!0},getAddress:function(e){var t=this;t.dialogLoading=!0,i["a"].addresses(1,1e5,e).then((function(e){for(var n=e.data,r=0;r<n.length;r++)t.addressList.push({key:n[r].id,label:n[r].address});return console.log(t.addressList),t.dialogLoading=!1,t.addressList})).catch((function(e){t.dialogLoading=!1}))},handleCheckAllAddress:function(e){var t=this;console.log(t.sendForm.addresses),3===t.sendForm.type&&(t.hasType=!0)},handleCheckeddirection:function(e){var t=this;t.getDevice(e)},getDevice:function(e){var t=this;t.dialogLoading=!0,i["a"]._devices(e,t.sendForm.addresses,1e7).then((function(e){t.deviceList=[];for(var n=e.data,r=0;r<n.length;r++)t.deviceList.push({key:n[r].id,label:n[r].uuid+n[r].remark});return console.log(t.deviceList),t.dialogLoading=!1,t.deviceList})).catch((function(e){t.dialogLoading=!1}))},newSend:function(){var e=this,t=this,n=t.sendForm.type;switch(n){case 1:var r={version_id:t.sendForm.version_id,type:1};i["a"].publishApk(r).then((function(n){t.$message.success("发布成功"),e.dialogSend=!1}));break;case 2:var a={version_id:t.sendForm.version_id,type:2,addresses:t.sendForm.addresses};i["a"].publishApk(a).then((function(n){t.$message.success("发布成功"),e.dialogSend=!1}));break;case 3:i["a"].publishApk(t.sendForm).then((function(n){t.$message.success("发布成功"),e.dialogSend=!1}))}},onCopy:function(e){var t=this;t.$message.success("复制成功")},onError:function(e){var t=this;t.$message.warning("复制失败")},handleRemove:function(e,t){var n=this;n.hasFile=!1,n.percentage=0,n.versionForm.href=""},beforeAvatarUpload:function(e){var t=this;t.fileName=l()(e.name),t.suffix=e.name.substring(e.name.lastIndexOf(".")+1),t.versionData.key="".concat(t.fileName,".").concat(t.suffix)},handleAvatarSuccess:function(e,t){var n=this;n.versionForm.href="".concat(n.qiniuaddr,"/").concat(e.key),n.$message.success("上传成功"),console.log(n.versionForm.href)},handleExceed:function(e,t){var n=this;n.$message.error("只能上传一个文件"),n.hasFile=!1,n.percentage=0,n.$refs.upload.clearFiles(),n.versionData.key="",n.versionForm.href=""},uploadProcess:function(e,t,n){var r=this;r.hasFile=!0,r.percentage=e.loaded/e.total*100|0},getQiniuToken:function(){var e=this;s.a.get("https://api.fengniaotuangou.cn/api/upload/token").then((function(t){e.versionData.token=t.data.uptoken}))},versionCurrentChange:function(e){var t=this;t.versionLoading=!0,t.currentVersion=e,i["a"].apkVersions(e,t.sizeVersion,t.versionForm.apk_id).then((function(e){t.versionLoading=!1,t.versionTableData=e.data,t.totalVersion=e.total})).catch((function(e){t.versionLoading=!1}))},versionSizeChange:function(e){var t=this;t.versionLoading=!0,t.sizeVersion=e,i["a"].apkVersions(t.currentVersion,e,t.versionForm.apk_id).then((function(e){t.versionLoading=!1,t.versionTableData=e.data,t.totalVersion=e.total})).catch((function(e){t.versionLoading=!1}))}}}),d=u,f=n("2877"),p=Object(f["a"])(d,r,a,!1,null,null,null);t["default"]=p.exports},b311:function(e,t,n){
/*!
 * clipboard.js v2.0.6
 * https://clipboardjs.com/
 * 
 * Licensed MIT © Zeno Rocha
 */
(function(t,n){e.exports=n()})(0,(function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=6)}([function(e,t){function n(e){var t;if("SELECT"===e.nodeName)e.focus(),t=e.value;else if("INPUT"===e.nodeName||"TEXTAREA"===e.nodeName){var n=e.hasAttribute("readonly");n||e.setAttribute("readonly",""),e.select(),e.setSelectionRange(0,e.value.length),n||e.removeAttribute("readonly"),t=e.value}else{e.hasAttribute("contenteditable")&&e.focus();var r=window.getSelection(),a=document.createRange();a.selectNodeContents(e),r.removeAllRanges(),r.addRange(a),t=r.toString()}return t}e.exports=n},function(e,t){function n(){}n.prototype={on:function(e,t,n){var r=this.e||(this.e={});return(r[e]||(r[e]=[])).push({fn:t,ctx:n}),this},once:function(e,t,n){var r=this;function a(){r.off(e,a),t.apply(n,arguments)}return a._=t,this.on(e,a,n)},emit:function(e){var t=[].slice.call(arguments,1),n=((this.e||(this.e={}))[e]||[]).slice(),r=0,a=n.length;for(r;r<a;r++)n[r].fn.apply(n[r].ctx,t);return this},off:function(e,t){var n=this.e||(this.e={}),r=n[e],a=[];if(r&&t)for(var i=0,o=r.length;i<o;i++)r[i].fn!==t&&r[i].fn._!==t&&a.push(r[i]);return a.length?n[e]=a:delete n[e],this}},e.exports=n,e.exports.TinyEmitter=n},function(e,t,n){var r=n(3),a=n(4);function i(e,t,n){if(!e&&!t&&!n)throw new Error("Missing required arguments");if(!r.string(t))throw new TypeError("Second argument must be a String");if(!r.fn(n))throw new TypeError("Third argument must be a Function");if(r.node(e))return o(e,t,n);if(r.nodeList(e))return s(e,t,n);if(r.string(e))return c(e,t,n);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}function o(e,t,n){return e.addEventListener(t,n),{destroy:function(){e.removeEventListener(t,n)}}}function s(e,t,n){return Array.prototype.forEach.call(e,(function(e){e.addEventListener(t,n)})),{destroy:function(){Array.prototype.forEach.call(e,(function(e){e.removeEventListener(t,n)}))}}}function c(e,t,n){return a(document.body,e,t,n)}e.exports=i},function(e,t){t.node=function(e){return void 0!==e&&e instanceof HTMLElement&&1===e.nodeType},t.nodeList=function(e){var n=Object.prototype.toString.call(e);return void 0!==e&&("[object NodeList]"===n||"[object HTMLCollection]"===n)&&"length"in e&&(0===e.length||t.node(e[0]))},t.string=function(e){return"string"===typeof e||e instanceof String},t.fn=function(e){var t=Object.prototype.toString.call(e);return"[object Function]"===t}},function(e,t,n){var r=n(5);function a(e,t,n,r,a){var i=o.apply(this,arguments);return e.addEventListener(n,i,a),{destroy:function(){e.removeEventListener(n,i,a)}}}function i(e,t,n,r,i){return"function"===typeof e.addEventListener?a.apply(null,arguments):"function"===typeof n?a.bind(null,document).apply(null,arguments):("string"===typeof e&&(e=document.querySelectorAll(e)),Array.prototype.map.call(e,(function(e){return a(e,t,n,r,i)})))}function o(e,t,n,a){return function(n){n.delegateTarget=r(n.target,t),n.delegateTarget&&a.call(e,n)}}e.exports=i},function(e,t){var n=9;if("undefined"!==typeof Element&&!Element.prototype.matches){var r=Element.prototype;r.matches=r.matchesSelector||r.mozMatchesSelector||r.msMatchesSelector||r.oMatchesSelector||r.webkitMatchesSelector}function a(e,t){while(e&&e.nodeType!==n){if("function"===typeof e.matches&&e.matches(t))return e;e=e.parentNode}}e.exports=a},function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var c=function(){function e(t){s(this,e),this.resolveOptions(t),this.initSelection()}return o(e,[{key:"resolveOptions",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action=e.action,this.container=e.container,this.emitter=e.emitter,this.target=e.target,this.text=e.text,this.trigger=e.trigger,this.selectedText=""}},{key:"initSelection",value:function(){this.text?this.selectFake():this.target&&this.selectTarget()}},{key:"selectFake",value:function(){var e=this,t="rtl"==document.documentElement.getAttribute("dir");this.removeFake(),this.fakeHandlerCallback=function(){return e.removeFake()},this.fakeHandler=this.container.addEventListener("click",this.fakeHandlerCallback)||!0,this.fakeElem=document.createElement("textarea"),this.fakeElem.style.fontSize="12pt",this.fakeElem.style.border="0",this.fakeElem.style.padding="0",this.fakeElem.style.margin="0",this.fakeElem.style.position="absolute",this.fakeElem.style[t?"right":"left"]="-9999px";var n=window.pageYOffset||document.documentElement.scrollTop;this.fakeElem.style.top=n+"px",this.fakeElem.setAttribute("readonly",""),this.fakeElem.value=this.text,this.container.appendChild(this.fakeElem),this.selectedText=a()(this.fakeElem),this.copyText()}},{key:"removeFake",value:function(){this.fakeHandler&&(this.container.removeEventListener("click",this.fakeHandlerCallback),this.fakeHandler=null,this.fakeHandlerCallback=null),this.fakeElem&&(this.container.removeChild(this.fakeElem),this.fakeElem=null)}},{key:"selectTarget",value:function(){this.selectedText=a()(this.target),this.copyText()}},{key:"copyText",value:function(){var e=void 0;try{e=document.execCommand(this.action)}catch(t){e=!1}this.handleResult(e)}},{key:"handleResult",value:function(e){this.emitter.emit(e?"success":"error",{action:this.action,text:this.selectedText,trigger:this.trigger,clearSelection:this.clearSelection.bind(this)})}},{key:"clearSelection",value:function(){this.trigger&&this.trigger.focus(),document.activeElement.blur(),window.getSelection().removeAllRanges()}},{key:"destroy",value:function(){this.removeFake()}},{key:"action",set:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"copy";if(this._action=e,"copy"!==this._action&&"cut"!==this._action)throw new Error('Invalid "action" value, use either "copy" or "cut"')},get:function(){return this._action}},{key:"target",set:function(e){if(void 0!==e){if(!e||"object"!==("undefined"===typeof e?"undefined":i(e))||1!==e.nodeType)throw new Error('Invalid "target" value, use a valid Element');if("copy"===this.action&&e.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if("cut"===this.action&&(e.hasAttribute("readonly")||e.hasAttribute("disabled")))throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');this._target=e}},get:function(){return this._target}}]),e}(),l=c,u=n(1),d=n.n(u),f=n(2),p=n.n(f),m="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},g=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();function h(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function v(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function b(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var y=function(e){function t(e,n){h(this,t);var r=v(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return r.resolveOptions(n),r.listenClick(e),r}return b(t,e),g(t,[{key:"resolveOptions",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action="function"===typeof e.action?e.action:this.defaultAction,this.target="function"===typeof e.target?e.target:this.defaultTarget,this.text="function"===typeof e.text?e.text:this.defaultText,this.container="object"===m(e.container)?e.container:document.body}},{key:"listenClick",value:function(e){var t=this;this.listener=p()(e,"click",(function(e){return t.onClick(e)}))}},{key:"onClick",value:function(e){var t=e.delegateTarget||e.currentTarget;this.clipboardAction&&(this.clipboardAction=null),this.clipboardAction=new l({action:this.action(t),target:this.target(t),text:this.text(t),container:this.container,trigger:t,emitter:this})}},{key:"defaultAction",value:function(e){return k("action",e)}},{key:"defaultTarget",value:function(e){var t=k("target",e);if(t)return document.querySelector(t)}},{key:"defaultText",value:function(e){return k("text",e)}},{key:"destroy",value:function(){this.listener.destroy(),this.clipboardAction&&(this.clipboardAction.destroy(),this.clipboardAction=null)}}],[{key:"isSupported",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:["copy","cut"],t="string"===typeof e?[e]:e,n=!!document.queryCommandSupported;return t.forEach((function(e){n=n&&!!document.queryCommandSupported(e)})),n}}]),t}(d.a);function k(e,t){var n="data-clipboard-"+e;if(t.hasAttribute(n))return t.getAttribute(n)}t["default"]=y}])["default"]}))},baa5:function(e,t,n){var r=n("23e7"),a=n("e58c");r({target:"Array",proto:!0,forced:a!==[].lastIndexOf},{lastIndexOf:a})},e58c:function(e,t,n){"use strict";var r=n("fc6a"),a=n("a691"),i=n("50c4"),o=n("a640"),s=n("ae40"),c=Math.min,l=[].lastIndexOf,u=!!l&&1/[1].lastIndexOf(1,-0)<0,d=o("lastIndexOf"),f=s("indexOf",{ACCESSORS:!0,1:0}),p=u||!d||!f;e.exports=p?function(e){if(u)return l.apply(this,arguments)||0;var t=r(this),n=i(t.length),o=n-1;for(arguments.length>1&&(o=c(o,a(arguments[1]))),o<0&&(o=n+o);o>=0;o--)if(o in t&&t[o]===e)return o||0;return-1}:l}}]);