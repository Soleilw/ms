(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-91bab420"],{"365c":function(e,t,a){"use strict";var n=a("be3b"),i=a("99b1"),r=a.n(i),o={aip:function(e){return n["a"].post(r.a.Aip,e)},delAip:function(e){return n["a"].del(r.a.Aip,{id:e})},aips:function(e,t){return n["a"].get(r.a.Aips,{page:e,limit:t})},apk:function(e){return n["a"].post(r.a.Apk,e)},apks:function(e,t){return n["a"].get(r.a.Apks,{page:e,limit:t})},apkVersion:function(e){return n["a"].post(r.a.ApkVersion,e)},apkVersions:function(e,t,a){return n["a"].get(r.a.ApkVersions,{page:e,limit:t,apk_id:a})},_apkVersions:function(e){return n["a"].get(r.a.ApkVersions,{id:e})},publishApk:function(e){return n["a"].post(r.a.PublishApk,e)},project:function(e){return n["a"].post(r.a.Project,e)},projects:function(e,t){return n["a"].get(r.a.Projects,{page:e,limit:t})},address:function(e){return n["a"].post(r.a.Address,e)},getaddress:function(e){return n["a"].get(r.a.Address,{id:e})},addresses:function(e,t,a,i){return n["a"].get(r.a.Addresses,{page:e,limit:t,project_id:a,area_id:i})},addressTypes:function(e,t){return n["a"].get(r.a.AddressTypes,{page:e,limit:t})},face:function(e){return n["a"].post(r.a.Face,e)},faces:function(e,t,a){return n["a"].get(r.a.Faces,{page:e,limit:t,name:a})},pushRecords:function(e,t,a){return n["a"].get(r.a.PushRecords,{page:e,limit:t,name:a})},pushRecordCommands:function(e){return n["a"].get(r.a.PushRecordCommands,{id:e})},againPush:function(e){return n["a"].post(r.a.PushRecord,e)},areas:function(e,t,a){return n["a"].get(r.a.Areas,{page:e,limit:t,parent_id:a})},area:function(e){return n["a"].post(r.a.Area,e)},device:function(e){return n["a"].post(r.a.Device,e)},_device:function(e){return n["a"].get(r.a.Device,{uuid:e})},devices:function(e,t,a,i,o,c){return n["a"].get(r.a.Devices,{page:e,limit:t,type:a,uuid:i,area_id:o,address_id:c})},_devices:function(e,t,a){return n["a"].get(r.a.Devices,{direction:e,addresses:t,limit:a})},deviceLogs:function(e,t,a,i){return n["a"].get(r.a.DeviceLogs,{page:e,limit:t,uuid:a,type:i})},deviceFaceLogs:function(e,t,a,i){return n["a"].get(r.a.DeviceRecord,{page:e,limit:t,uuid:a,address_id:i})},deviceTypes:function(){return n["a"].get(r.a.DeviceTypes)},deviceHeart:function(e){return n["a"].get(r.a.DeviceHeartbeat,{uuid:e})},deviceCommands:function(e,t,a){return n["a"].get(r.a.DeviceCommands,{page:e,limit:t,uuid:a})},commandsType:function(e){return n["a"].get(r.a.Commands,{type:e})},sendDeviceCommand:function(e){return n["a"].post(r.a.SendDeviceCommand,e)},deviceUserList:function(e,t,a){return n["a"].get(r.a.DeviceUserList,{page:e,limit:t,uuid:a})},faceGroup:function(e){return n["a"].get(r.a.FaceGroup,{address_id:e})},uuid:function(e,t){return n["a"].get(r.a.Uuid,{page:e,limit:t})},dangerFace:function(e){return n["a"].post(r.a.DangerFace,e)},delDangerFace:function(e){return n["a"].del(r.a.DelDangerFace,{id:e})},dangerFaces:function(e,t){return n["a"].get(r.a.DangerFaces,{page:e,limit:t})},dangerLogs:function(e,t){return n["a"].get(r.a.DangerLogs,{page:e,limit:t})},roles:function(e,t){return n["a"].get(r.a.Roles,{page:e,limit:t})},oneRole:function(e){return n["a"].get(r.a.Role,{name:e})},role:function(e){return n["a"].post(r.a.Role,e)},users:function(e,t){return n["a"].get(r.a.Users,{page:e,limit:t})},user:function(e){return n["a"].post(r.a.User,e)},policeStation:function(e){return n["a"].post(r.a.PoliceStation,e)},policeStations:function(e,t,a){return n["a"].get(r.a.PoliceStations,{page:e,limit:t,name:a})},information:function(e){return n["a"].post(r.a.Information,e)},informations:function(e,t,a,i){return n["a"].get(r.a.Information,{page:e,limit:t,id:a,title:i})},faceSwitch:function(e){return n["a"].post(r.a.FaceSwicth,e)},delFaceSwitch:function(e){return n["a"].del(r.a.FaceSwicth,{id:e})},faceSwitches:function(e,t){return n["a"].get(r.a.FaceSwicthes,{page:e,limit:t})}};t["a"]=o},"7e23":function(e,t,a){"use strict";var n=a("c55d"),i=a.n(n);i.a},a09c:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],attrs:{"element-loading-text":"获取数据中"}},[a("div",{staticClass:"handle-box"},[a("div",{staticClass:"btn"},[a("el-input",{staticClass:"input-with-select",attrs:{placeholder:"请输入姓名"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.search(e.name)}},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}},[a("el-button",{attrs:{slot:"append",icon:"el-icon-search"},on:{click:function(t){return e.search(e.name)}},slot:"append"})],1)],1)]),a("el-table",{attrs:{data:e.tableData,border:"","header-cell-style":{background:"#f0f0f0",color:"#2a9f93"},"max-height":"620"}},[a("el-table-column",{attrs:{prop:"face_id",label:"人脸ID"}}),a("el-table-column",{attrs:{prop:"group",label:"人脸组"}}),a("el-table-column",{attrs:{prop:"face.name",label:"姓名"}}),a("el-table-column",{attrs:{prop:"address.address",label:"地址"}}),a("el-table-column",{attrs:{prop:"face.href",label:"人脸图片",width:"100px"},scopedSlots:e._u([{key:"default",fn:function(e){return[a("el-popover",{attrs:{placement:"top-start",title:"",trigger:"click"}},[a("img",{staticStyle:{"max-width":"800px","max-height":"800px"},attrs:{src:e.row.face.href}}),a("img",{staticStyle:{"max-width":"180px","max-height":"80px"},attrs:{slot:"reference",src:e.row.face.href},slot:"reference"})])]}}])}),a("el-table-column",{attrs:{prop:"result",label:"结果",width:"300px"}}),a("el-table-column",{attrs:{prop:"type",label:"类型"}}),a("el-table-column",{attrs:{prop:"offline",label:"在线状态"},scopedSlots:e._u([{key:"default",fn:function(t){return[1==t.row.offline?a("span",[e._v("离线")]):e._e(),0==t.row.offline?a("span",[e._v("在线")]):e._e()]}}])}),a("el-table-column",{attrs:{prop:"created_at",label:"创建时间"}}),a("el-table-column",{attrs:{prop:"updated_at",label:"完成时间"}}),a("el-table-column",{attrs:{label:"操作",width:"200px"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-popover",{attrs:{placement:"right",width:"800",trigger:"click"}},[e._l(e.detailList,(function(t,n){return a("el-row",{key:n,staticStyle:{padding:"10px"}},[a("div",[e._v("设备号："+e._s(t.device_uuid))]),a("div",[e._v("设备名："+e._s(t.device.remark))]),1==t.state?a("div",[e._v("状态：待下发")]):e._e(),2==t.state?a("div",[e._v("状态：待执行")]):e._e(),3==t.state?a("div",[e._v("状态：已完成")]):e._e(),4==t.state?a("div",[e._v("状态：失败")]):e._e()])})),a("el-button",{staticStyle:{"margin-right":"10px"},attrs:{slot:"reference",size:"mini",type:"primary"},on:{click:function(a){return e.showDetail(t.$index,t.row)}},slot:"reference"},[e._v("查看详情")])],2),a("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(a){return e.againPush(t.$index,t.row)}}},[e._v("重新推送")])]}}])})],1),a("div",{staticClass:"block"},[a("el-pagination",{attrs:{"current-page":e.current,"page-sizes":[10,20,50,100,300,500,700,900],"page-size":e.size,layout:"sizes, prev, pager, next, jumper",total:e.total},on:{"current-change":e.currentChange,"update:currentPage":function(t){e.current=t},"update:current-page":function(t){e.current=t},"size-change":e.sizeChange}})],1)],1)},i=[],r=(a("b0c0"),a("365c")),o={name:"gradems",data:function(){return{loading:!0,name:"",tableData:[],detailList:[],current:1,size:10,total:0}},mounted:function(){this.getPushRecords()},methods:{getPushRecords:function(){var e=this;r["a"].pushRecords(e.current).then((function(t){e.loading=!1,e.tableData=t.data,e.total=t.total})).catch((function(t){e.loading=!1}))},search:function(){var e=this;e.loading=!0,r["a"].pushRecords(1,10,e.name).then((function(t){console.log(t),e.loading=!1,e.tableData=t.data,e.total=t.total,e.$message.success("搜索成功!")})).catch((function(t){e.loading=!1}))},showDetail:function(e,t){var a=this;r["a"].pushRecordCommands(t.id).then((function(e){a.detailList=e}))},againPush:function(e,t){var a=this,n={id:t.id};r["a"].againPush(n).then((function(e){a.$message.success("推送成功"),a.getPushRecords()}))},currentChange:function(e){var t=this;t.loading=!0,t.current=e,r["a"].pushRecords(e,t.size).then((function(e){t.loading=!1,t.tableData=e.data,t.total=e.total})).catch((function(e){t.loading=!1}))},sizeChange:function(e){var t=this;t.loading=!0,t.size=e,r["a"].pushRecords(t.current,e).then((function(e){t.loading=!1,t.tableData=e.data,t.total=e.total})).catch((function(e){t.loading=!1}))}}},c=o,s=(a("7e23"),a("2877")),u=Object(s["a"])(c,n,i,!1,null,"53df6a90",null);t["default"]=u.exports},c55d:function(e,t,a){}}]);
//# sourceMappingURL=chunk-91bab420.8af462eb.js.map