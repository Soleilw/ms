(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-203b322d"],{"365c":function(e,t,a){"use strict";var n=a("ade3"),r=a("be3b"),i=a("99b1"),s=a.n(i),c={aip:function(e){return r["a"].post(s.a.Aip,e)},delAip:function(e){return r["a"].del(s.a.Aip,{id:e})},aips:function(e,t){return r["a"].get(s.a.Aips,{page:e,limit:t})},apk:function(e){return r["a"].post(s.a.Apk,e)},apks:function(e,t){return r["a"].get(s.a.Apks,{page:e,limit:t})},apkVersion:function(e){return r["a"].post(s.a.ApkVersion,e)},apkVersions:function(e,t,a){return r["a"].get(s.a.ApkVersions,{page:e,limit:t,apk_id:a})},_apkVersions:function(e){return r["a"].get(s.a.ApkVersions,{id:e})},publishApk:function(e){return r["a"].post(s.a.PublishApk,e)},project:function(e){return r["a"].post(s.a.Project,e)},projects:function(e,t){return r["a"].get(s.a.Projects,{page:e,limit:t})},address:function(e){return r["a"].post(s.a.Address,e)},getaddress:function(e){return r["a"].get(s.a.Address,{id:e})},addresses:function(e,t,a,n,i){return r["a"].get(s.a.Addresses,{page:e,limit:t,project_id:a,area_id:n,address:i})},addressTypes:function(e,t){return r["a"].get(s.a.AddressTypes,{page:e,limit:t})},addressesMap:function(e,t,a){return r["a"].get(s.a.Addresses,{page:e,limit:t,type:a})},face:function(e){return r["a"].post(s.a.Face,e)},faces:function(e,t,a){return r["a"].get(s.a.Faces,{page:e,limit:t,name:a})},delFace:function(e){return r["a"].get(s.a.DeleteFace,{id:e})},searchFace:function(e){return r["a"].post(s.a.SearchImageFace,e)},pushRecords:function(e,t,a,n){return r["a"].get(s.a.PushRecords,{page:e,limit:t,name:a,address:n})},pushRecordCommands:function(e){return r["a"].get(s.a.PushRecordCommands,{id:e})},againPush:function(e){return r["a"].post(s.a.PushRecord,e)},areas:function(e,t,a){return r["a"].get(s.a.Areas,{page:e,limit:t,parent_id:a})},area:function(e){return r["a"].post(s.a.Area,e)},device:function(e){return r["a"].post(s.a.Device,e)},_device:function(e){return r["a"].get(s.a.Device,{uuid:e})},devices:function(e,t,a,n,i,c,o,u){return r["a"].get(s.a.Devices,{page:e,limit:t,type:a,uuid:n,area_id:i,address_id:c,online:o,address:u})},_devices:function(e,t,a){return r["a"].get(s.a.Devices,{direction:e,addresses:t,limit:a})},deviceLogs:function(e,t,a,n){return r["a"].get(s.a.DeviceLogs,{page:e,limit:t,uuid:a,type:n})},deviceFaceLogs:function(e,t,a,n,i,c){return r["a"].get(s.a.DeviceRecord,{page:e,limit:t,uuid:a,search:n,area_id:i,address_id:c})},searchFaceLogs:function(e,t,a){return r["a"].get(s.a.DeviceRecord,{page:e,limit:t,faces:a})},deviceTypes:function(){return r["a"].get(s.a.DeviceTypes)},deviceHeart:function(e){return r["a"].get(s.a.DeviceHeartbeat,{uuid:e})},deviceCommands:function(e,t,a){return r["a"].get(s.a.DeviceCommands,{page:e,limit:t,uuid:a})},commandsType:function(e){return r["a"].get(s.a.Commands,{type:e})},sendDeviceCommand:function(e){return r["a"].post(s.a.SendDeviceCommand,e)},resetCommand:function(e){return r["a"].get(s.a.RestartDeviceCommands,{uuid:e})},catchFace:function(e){return r["a"].get(s.a.CatchFaces,{id:e})},deviceUserList:function(e,t,a){return r["a"].get(s.a.DeviceUserList,{page:e,limit:t,uuid:a})},faceGroup:function(e){return r["a"].get(s.a.FaceGroup,{address_id:e})},uuid:function(e,t){return r["a"].get(s.a.Uuid,{page:e,limit:t})},dangerFace:function(e){return r["a"].post(s.a.DangerFace,e)},importHistory:function(e,t,a){return r["a"].get(s.a.ImportTasks,{page:e,limit:t,state:a})},delDangerFace:function(e){return r["a"].del(s.a.DelDangerFace,{id:e})},dangerFaces:function(e,t){return r["a"].get(s.a.DangerFaces,{page:e,limit:t})},personVerifies:function(e,t,a,n){return r["a"].get(s.a.PersonVerifies,{page:e,limit:t,search:a,state:n})},dangerLogs:function(e,t,a,n){return r["a"].get(s.a.DangerLogs,{page:e,limit:t,danger_id:a,address:n})},alert:function(e,t,a,n,i,c,o,u,l){return r["a"].get(s.a.DangerAlerts,{page:e,limit:t,state:a,search:n,dangers:i,alert_type:c,start:o,end:u,danger_type:l})},handleAlerts:function(e){return r["a"].post(s.a.HandleAlerts,{results:e})},dangerTypes:function(){return r["a"].get(s.a.DangerTypes,{})},notifyChange:function(e){return r["a"].post(s.a.ChangeDangerFace,e)},roles:function(e,t){return r["a"].get(s.a.Roles,{page:e,limit:t})},oneRole:function(e){return r["a"].get(s.a.Role,{name:e})},role:function(e){return r["a"].post(s.a.Role,e)},users:function(e,t){return r["a"].get(s.a.Users,{page:e,limit:t})},user:function(e){return r["a"].post(s.a.User,e)},policeLevel:function(e){return r["a"].post(s.a.PoliceLevel,e)},policeLevels:function(e,t,a,n){return r["a"].get(s.a.PoliceLevels,{page:e,limit:t,level:a,parent_id:n})},policeman:function(e){return r["a"].post(s.a.Policeman,e)},policemen:function(e,t,a,n,i,c){return r["a"].get(s.a.Policemen,{page:e,limit:t,station_id:a,department_id:n,state:i,search:c})},audit:function(e){return r["a"].post(s.a.PassPoliceman,e)},delPolice:function(e){return r["a"].del(s.a.Policeman,{id:e})},screenSaver:function(e){return r["a"].post(s.a.screenSaver,e)},screenSavers:function(e,t){return r["a"].get(s.a.screenSavers,{page:e,limit:t})},delScreenSaver:function(e){return r["a"].del(s.a.screenSaver,Object(n["a"])({id:e},"id",e))},issueScreenSaver:function(e){return r["a"].post(s.a.publishScreenSavers,e)},policeStation:function(e){return r["a"].post(s.a.PoliceStation,e)},policeStations:function(e,t,a){return r["a"].get(s.a.PoliceStations,{page:e,limit:t,name:a})},information:function(e){return r["a"].post(s.a.Information,e)},informations:function(e,t,a,n){return r["a"].get(s.a.Information,{page:e,limit:t,id:a,title:n})},faceSwitch:function(e){return r["a"].post(s.a.FaceSwicth,e)},delFaceSwitch:function(e){return r["a"].del(s.a.FaceSwicth,{id:e})},faceSwitches:function(e,t){return r["a"].get(s.a.FaceSwicthes,{page:e,limit:t})},statistical:function(){return r["a"].get(s.a.Count)},currentDay:function(){return r["a"].get(s.a.CountOpenRecord)},strangerRecord:function(){return r["a"].get(s.a.CountStrangerRecord)},addressStrangerRecord:function(e){return r["a"].get(s.a.CountAddressStrangerRecord,{id:e})},searchStrangerRecord:function(e){return r["a"].get(s.a.CountStrangerRecord,{address:e})},getTransmits:function(e,t){return r["a"].get(s.a.Transmits,{page:e,limit:t})}};t["a"]=c},"754c":function(e,t,a){},a09c:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],attrs:{"element-loading-text":"获取数据中"}},[a("div",{staticClass:"content-box"},[a("div",{staticClass:"content-box-left",staticStyle:{width:"15%"}},[e._m(0),a("div",{staticClass:"btn"},[a("el-input",{staticClass:"input-with-select",attrs:{placeholder:"请输入姓名"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.search(e.name)}},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}},[a("el-button",{attrs:{slot:"append",icon:"el-icon-search"},on:{click:function(t){return e.search(e.name)}},slot:"append"})],1)],1),e._m(1),a("div",{staticClass:"btn"},[a("el-input",{attrs:{placeholder:"请填写地址",autosize:"",type:"textarea"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.addressSearch(e.address)}},model:{value:e.address,callback:function(t){e.address=t},expression:"address"}})],1),a("div",{staticClass:"btn"},[a("el-button",{attrs:{type:"primary"},on:{click:e.resetSelect}},[e._v("重新筛选")])],1)]),a("div",{staticClass:"content-box-right",staticStyle:{width:"84%"}},[a("el-table",{attrs:{data:e.tableData,stripe:"",border:"","header-cell-style":{background:"#f0f0f0",color:"#003366"},"max-height":"700"}},[a("el-table-column",{attrs:{prop:"face_id",label:"人脸ID",width:"200px"}}),a("el-table-column",{attrs:{prop:"group",label:"人脸组",width:"200px"}}),a("el-table-column",{attrs:{prop:"face.name",label:"姓名",width:"100px"}}),a("el-table-column",{attrs:{prop:"address.address",label:"地址",width:"200px"}}),a("el-table-column",{attrs:{prop:"face.href",label:"人脸图片",width:"200px"},scopedSlots:e._u([{key:"default",fn:function(e){return[a("el-popover",{attrs:{placement:"top-start",title:"",trigger:"click"}},[a("img",{staticStyle:{"max-width":"800px","max-height":"800px"},attrs:{src:e.row.face.href}}),a("img",{staticStyle:{"max-width":"180px","max-height":"80px"},attrs:{slot:"reference",src:e.row.face.href},slot:"reference"})])]}}])}),a("el-table-column",{attrs:{prop:"result",label:"结果",width:"300px"}}),a("el-table-column",{attrs:{prop:"type",label:"类型",width:"200px"}}),a("el-table-column",{attrs:{prop:"offline",label:"在线状态"},scopedSlots:e._u([{key:"default",fn:function(t){return[1==t.row.offline?a("span",[e._v("离线")]):e._e(),0==t.row.offline?a("span",[e._v("在线")]):e._e()]}}])}),a("el-table-column",{attrs:{prop:"created_at",label:"创建时间",width:"200px"}}),a("el-table-column",{attrs:{prop:"updated_at",label:"完成时间",width:"200px"}}),a("el-table-column",{attrs:{label:"操作",width:"200px",fixed:"right"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-popover",{attrs:{placement:"right",width:"800",trigger:"click"}},[e._l(e.detailList,(function(t,n){return a("el-row",{key:n,staticStyle:{padding:"10px"}},[a("div",[e._v("设备号："+e._s(t.device_uuid))]),a("div",[e._v("设备名："+e._s(t.device.remark))]),1==t.state?a("div",[e._v("状态：待下发")]):e._e(),2==t.state?a("div",[e._v("状态：待执行")]):e._e(),3==t.state?a("div",[e._v("状态：已完成")]):e._e(),4==t.state?a("div",[e._v("状态：失败")]):e._e()])})),a("el-button",{staticStyle:{"margin-right":"10px"},attrs:{slot:"reference",type:"text"},on:{click:function(a){return e.showDetail(t.$index,t.row)}},slot:"reference"},[e._v("查看详情")])],2),a("el-button",{attrs:{type:"text"},on:{click:function(a){return e.againPush(t.$index,t.row)}}},[e._v("重新推送")])]}}])})],1),a("div",{staticClass:"block"},[a("el-pagination",{attrs:{"current-page":e.current,"page-sizes":[10,20,50,100,300,500,700,900],"page-size":e.size,layout:"sizes, prev, pager, next, jumper",total:e.total},on:{"current-change":e.currentChange,"update:currentPage":function(t){e.current=t},"update:current-page":function(t){e.current=t},"size-change":e.sizeChange}})],1)],1)])])},r=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"btn"},[a("div",{staticClass:"tip"},[e._v("根据姓名筛选：")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"btn"},[a("div",{staticClass:"tip"},[e._v("根据地址筛选：")])])}],i=(a("b0c0"),a("365c")),s={name:"gradems",data:function(){return{loading:!0,name:"",address:"",tableData:[],detailList:[],current:1,size:10,total:0}},mounted:function(){this.getPushRecords()},methods:{getPushRecords:function(){var e=this;i["a"].pushRecords(e.current).then((function(t){e.loading=!1,e.tableData=t.data,e.total=t.total})).catch((function(t){e.loading=!1}))},search:function(){var e=this;e.loading=!0,i["a"].pushRecords(1,10,e.name).then((function(t){console.log(t),e.loading=!1,e.tableData=t.data,e.total=t.total,e.$message.success("搜索成功!")})).catch((function(t){e.loading=!1}))},addressSearch:function(e){var t=this;t.loading=!0,i["a"].pushRecords(1,10,t.name,e).then((function(e){console.log(e),t.loading=!1,t.tableData=e.data,t.total=e.total,t.$message.success("搜索成功!")})).catch((function(e){t.loading=!1}))},showDetail:function(e,t){var a=this;i["a"].pushRecordCommands(t.id).then((function(e){a.detailList=e}))},againPush:function(e,t){var a=this,n={id:t.id};i["a"].againPush(n).then((function(e){a.$message.success("推送成功"),a.getPushRecords()}))},resetSelect:function(){window.location.reload()},currentChange:function(e){var t=this;t.loading=!0,t.current=e,i["a"].pushRecords(e,t.size,t.name,t.address).then((function(e){t.loading=!1,t.tableData=e.data,t.total=e.total})).catch((function(e){t.loading=!1}))},sizeChange:function(e){var t=this;t.loading=!0,t.size=e,i["a"].pushRecords(t.current,e,t.name,t.address).then((function(e){t.loading=!1,t.tableData=e.data,t.total=e.total})).catch((function(e){t.loading=!1}))}}},c=s,o=(a("f1c6"),a("2877")),u=Object(o["a"])(c,n,r,!1,null,"2db2a197",null);t["default"]=u.exports},f1c6:function(e,t,a){"use strict";var n=a("754c"),r=a.n(n);r.a}}]);