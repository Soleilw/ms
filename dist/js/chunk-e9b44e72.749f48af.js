(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e9b44e72"],{"22ff":function(e,t,a){},"365c":function(e,t,a){"use strict";var n=a("be3b"),i=a("99b1"),r=a.n(i),o={aip:function(e){return n["a"].post(r.a.Aip,e)},delAip:function(e){return n["a"].del(r.a.Aip,{id:e})},aips:function(e,t){return n["a"].get(r.a.Aips,{page:e,limit:t})},apk:function(e){return n["a"].post(r.a.Apk,e)},apks:function(e,t){return n["a"].get(r.a.Apks,{page:e,limit:t})},apkVersion:function(e){return n["a"].post(r.a.ApkVersion,e)},apkVersions:function(e,t,a){return n["a"].get(r.a.ApkVersions,{page:e,limit:t,apk_id:a})},_apkVersions:function(e){return n["a"].get(r.a.ApkVersions,{id:e})},publishApk:function(e){return n["a"].post(r.a.PublishApk,e)},project:function(e){return n["a"].post(r.a.Project,e)},projects:function(e,t){return n["a"].get(r.a.Projects,{page:e,limit:t})},address:function(e){return n["a"].post(r.a.Address,e)},getaddress:function(e){return n["a"].get(r.a.Address,{id:e})},addresses:function(e,t,a){return n["a"].get(r.a.Addresses,{page:e,limit:t,project_id:a})},addressTypes:function(e,t){return n["a"].get(r.a.AddressTypes,{page:e,limit:t})},face:function(e){return n["a"].post(r.a.Face,e)},faces:function(e,t){return n["a"].get(r.a.Faces,{page:e,limit:t})},areas:function(e,t,a){return n["a"].get(r.a.Areas,{page:e,limit:t,parent_id:a})},area:function(e){return n["a"].post(r.a.Area,e)},device:function(e){return n["a"].post(r.a.Device,e)},devices:function(e,t,a,i){return n["a"].get(r.a.Devices,{page:e,limit:t,type:a,uuid:i})},_devices:function(e,t,a){return n["a"].get(r.a.Devices,{direction:e,addresses:t,limit:a})},deviceLogs:function(e,t,a,i){return n["a"].get(r.a.DeviceLogs,{page:e,limit:t,uuid:a,type:i})},deviceFaceLogs:function(e,t,a,i){return n["a"].get(r.a.DeviceRecord,{page:e,limit:t,uuid:a,address_id:i})},deviceTypes:function(){return n["a"].get(r.a.DeviceTypes)},deviceHeart:function(e){return n["a"].get(r.a.DeviceHeartbeat,{uuid:e})},deviceCommands:function(e,t,a){return n["a"].get(r.a.DeviceCommands,{page:e,limit:t,uuid:a})},commandsType:function(e){return n["a"].get(r.a.Commands,{type:e})},sendDeviceCommand:function(e){return n["a"].post(r.a.SendDeviceCommand,e)},deviceUserList:function(e,t,a){return n["a"].get(r.a.DeviceUserList,{page:e,limit:t,uuid:a})},faceGroup:function(e){return n["a"].get(r.a.FaceGroup,{address_id:e})},uuid:function(e,t){return n["a"].get(r.a.Uuid,{page:e,limit:t})},dangerFace:function(e){return n["a"].post(r.a.DangerFace,e)},delDangerFace:function(e){return n["a"].del(r.a.DelDangerFace,{id:e})},dangerFaces:function(e,t){return n["a"].get(r.a.DangerFaces,{page:e,limit:t})},dangerLogs:function(e,t){return n["a"].get(r.a.DangerLogs,{page:e,limit:t})},roles:function(e,t){return n["a"].get(r.a.Roles,{page:e,limit:t})},oneRole:function(e){return n["a"].get(r.a.Role,{name:e})},role:function(e){return n["a"].post(r.a.Role,e)}};t["a"]=o},"46fa":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],attrs:{"element-loading-text":"加载中"}},[a("div",{staticClass:"handle-box"},[a("div",{staticClass:"btn"},[a("el-input",{staticClass:"input-with-select",attrs:{placeholder:"输入设备号"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.search(e.uuid)}},model:{value:e.uuid,callback:function(t){e.uuid=t},expression:"uuid"}},[a("el-button",{attrs:{slot:"append",icon:"el-icon-search"},on:{click:function(t){return e.search(e.uuid)}},slot:"append"})],1)],1)]),a("el-table",{attrs:{data:e.faceLogsTable,border:"","header-cell-style":{background:"#f0f0f0",color:"#2a9f93"},"max-height":"620"}},[a("el-table-column",{attrs:{prop:"id",label:"ID"}}),a("el-table-column",{attrs:{prop:"device_uuid",label:"设备ID"}}),a("el-table-column",{attrs:{prop:"face.name",label:"名称"}}),a("el-table-column",{attrs:{prop:"time",label:"时间"}}),a("el-table-column",{attrs:{prop:"temp",label:"温度"}}),a("el-table-column",{attrs:{prop:"face_id",label:"人脸ID"}}),a("el-table-column",{attrs:{prop:"image",label:"人脸图片"},scopedSlots:e._u([{key:"default",fn:function(e){return[a("el-popover",{attrs:{placement:"top-start",title:"",trigger:"click"}},[a("img",{staticStyle:{"max-width":"800px","max-height":"800px"},attrs:{src:e.row.image}}),a("img",{staticStyle:{"max-width":"180px","max-height":"80px"},attrs:{slot:"reference",src:e.row.image},slot:"reference"})])]}}])})],1),a("div",{staticClass:"block"},[a("el-pagination",{attrs:{"current-page":e.current,"page-sizes":[10,20,50,100,150,200,250,300],"page-size":e.size,layout:"sizes, prev, pager, next, jumper",total:e.total},on:{"current-change":e.currentPage,"update:currentPage":function(t){e.current=t},"update:current-page":function(t){e.current=t},"size-change":e.sizePage,"prev-click":e.prevChange,"next-click":e.nextChange}})],1)],1)},i=[],r=a("365c"),o={name:"gradems",data:function(){return{loading:!0,uuid:"",faceLogsTable:[],current:1,size:10,total:0}},mounted:function(){this.getLogs()},methods:{search:function(){var e=this;e.loading=!0,r["a"].deviceFaceLogs(1,10,e.uuid).then((function(t){e.loading=!1,e.faceLogsTable=t.data,e.total=t.total,e.$message.success("搜索成功！")})).catch((function(t){e.loading=!1}))},getLogs:function(){var e=this;r["a"].deviceFaceLogs(1,10).then((function(t){e.loading=!1,e.faceLogsTable=t.data,e.total=t.total})).catch((function(t){e.loading=!1}))},currentPage:function(e){var t=this;t.loading=!0,t.current=e,r["a"].deviceFaceLogs(e,t.size,t.uuid).then((function(e){t.loading=!1,t.faceLogsTable=e.data,t.total=e.total})).catch((function(e){t.loading=!1}))},sizePage:function(e){var t=this;t.loading=!0,t.size=e,r["a"].deviceFaceLogs(t.current,e,t.uuid).then((function(e){t.loading=!1,t.faceLogsTable=e.data,t.total=e.total})).catch((function(e){t.loading=!1}))},prevChange:function(e){var t=this;t.loading=!0,t.current=e,r["a"].deviceFaceLogs(e,t.size,t.uuid).then((function(e){t.loading=!1,t.faceLogsTable=e.data,t.total=e.total})).catch((function(e){t.loading=!1}))},nextChange:function(e){var t=this;t.loading=!0,t.current=e,r["a"].deviceFaceLogs(e,t.size,t.uuid).then((function(e){t.loading=!1,t.faceLogsTable=e.data,t.total=e.total})).catch((function(e){t.loading=!1}))}}},c=o,u=(a("9de5"),a("2877")),s=Object(u["a"])(c,n,i,!1,null,"6215836c",null);t["default"]=s.exports},"9de5":function(e,t,a){"use strict";var n=a("22ff"),i=a.n(n);i.a}}]);
//# sourceMappingURL=chunk-e9b44e72.749f48af.js.map