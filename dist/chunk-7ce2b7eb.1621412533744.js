(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7ce2b7eb"],{"365c":function(e,t,a){"use strict";var n=a("ade3"),i=a("be3b"),r=a("99b1"),o=a.n(r),c={aip:function(e){return i["a"].post(o.a.Aip,e)},delAip:function(e){return i["a"].del(o.a.Aip,{id:e})},aips:function(e,t){return i["a"].get(o.a.Aips,{page:e,limit:t})},apk:function(e){return i["a"].post(o.a.Apk,e)},apks:function(e,t){return i["a"].get(o.a.Apks,{page:e,limit:t})},apkVersion:function(e){return i["a"].post(o.a.ApkVersion,e)},apkVersions:function(e,t,a){return i["a"].get(o.a.ApkVersions,{page:e,limit:t,apk_id:a})},_apkVersions:function(e){return i["a"].get(o.a.ApkVersions,{id:e})},publishApk:function(e){return i["a"].post(o.a.PublishApk,e)},project:function(e){return i["a"].post(o.a.Project,e)},projects:function(e,t){return i["a"].get(o.a.Projects,{page:e,limit:t})},address:function(e){return i["a"].post(o.a.Address,e)},getaddress:function(e){return i["a"].get(o.a.Address,{id:e})},delAddress:function(e){return i["a"].del(o.a.Address,{id:e})},addresses:function(e,t,a,n,r){return i["a"].get(o.a.Addresses,{page:e,limit:t,project_id:a,area_id:n,address:r})},addressTypes:function(e,t){return i["a"].get(o.a.AddressTypes,{page:e,limit:t})},addressesMap:function(e,t,a){return i["a"].get(o.a.Addresses,{page:e,limit:t,type:a})},face:function(e){return i["a"].post(o.a.Face,e)},faces:function(e,t,a){return i["a"].get(o.a.Faces,{page:e,limit:t,name:a})},delFace:function(e){return i["a"].get(o.a.DeleteFace,{id:e})},searchFace:function(e){return i["a"].post(o.a.SearchImageFace,e)},pushRecords:function(e,t,a,n){return i["a"].get(o.a.PushRecords,{page:e,limit:t,name:a,address:n})},pushRecordCommands:function(e){return i["a"].get(o.a.PushRecordCommands,{id:e})},againPush:function(e){return i["a"].post(o.a.PushRecord,e)},areas:function(e,t,a){return i["a"].get(o.a.Areas,{page:e,limit:t,parent_id:a})},area:function(e){return i["a"].post(o.a.Area,e)},device:function(e){return i["a"].post(o.a.Device,e)},_device:function(e){return i["a"].get(o.a.Device,{uuid:e})},devices:function(e,t,a,n,r,c,s,u){return i["a"].get(o.a.Devices,{page:e,limit:t,type:a,uuid:n,area_id:r,address_id:c,online:s,address:u})},_devices:function(e,t,a){return i["a"].get(o.a.Devices,{direction:e,addresses:t,limit:a})},deviceLogs:function(e,t,a,n){return i["a"].get(o.a.DeviceLogs,{page:e,limit:t,uuid:a,type:n})},deviceFaceLogs:function(e,t,a,n,r,c){return i["a"].get(o.a.DeviceRecord,{page:e,limit:t,uuid:a,search:n,area_id:r,address_id:c})},searchFaceLogs:function(e,t,a){return i["a"].get(o.a.DeviceRecord,{page:e,limit:t,faces:a})},deviceTypes:function(){return i["a"].get(o.a.DeviceTypes)},deviceHeart:function(e){return i["a"].get(o.a.DeviceHeartbeat,{uuid:e})},deviceCommands:function(e,t,a){return i["a"].get(o.a.DeviceCommands,{page:e,limit:t,uuid:a})},commandsType:function(e){return i["a"].get(o.a.Commands,{type:e})},sendDeviceCommand:function(e){return i["a"].post(o.a.SendDeviceCommand,e)},resetCommand:function(e){return i["a"].get(o.a.RestartDeviceCommands,{uuid:e})},catchFace:function(e){return i["a"].get(o.a.CatchFaces,{id:e})},deviceUserList:function(e,t,a){return i["a"].get(o.a.DeviceUserList,{page:e,limit:t,uuid:a})},faceGroup:function(e){return i["a"].get(o.a.FaceGroup,{address_id:e})},uuid:function(e,t){return i["a"].get(o.a.Uuid,{page:e,limit:t})},dangerFace:function(e){return i["a"].post(o.a.DangerFace,e)},importHistory:function(e,t,a){return i["a"].get(o.a.ImportTasks,{page:e,limit:t,state:a})},delDangerFace:function(e){return i["a"].del(o.a.DelDangerFace,{id:e})},dangerFaces:function(e,t){return i["a"].get(o.a.DangerFaces,{page:e,limit:t})},personVerifies:function(e,t,a,n){return i["a"].get(o.a.PersonVerifies,{page:e,limit:t,search:a,state:n})},dangerLogs:function(e,t,a,n){return i["a"].get(o.a.DangerLogs,{page:e,limit:t,danger_id:a,address:n})},alert:function(e,t,a,n,r,c,s,u,l){return i["a"].get(o.a.DangerAlerts,{page:e,limit:t,state:a,search:n,dangers:r,alert_type:c,start:s,end:u,danger_type:l})},handleAlerts:function(e){return i["a"].post(o.a.HandleAlerts,{results:e})},dangerTypes:function(){return i["a"].get(o.a.DangerTypes,{})},notifyChange:function(e){return i["a"].post(o.a.ChangeDangerFace,e)},roles:function(e,t){return i["a"].get(o.a.Roles,{page:e,limit:t})},oneRole:function(e){return i["a"].get(o.a.Role,{name:e})},role:function(e){return i["a"].post(o.a.Role,e)},users:function(e,t){return i["a"].get(o.a.Users,{page:e,limit:t})},user:function(e){return i["a"].post(o.a.User,e)},policeLevel:function(e){return i["a"].post(o.a.PoliceLevel,e)},policeLevels:function(e,t,a,n){return i["a"].get(o.a.PoliceLevels,{page:e,limit:t,level:a,parent_id:n})},policeman:function(e){return i["a"].post(o.a.Policeman,e)},policemen:function(e,t,a,n,r,c){return i["a"].get(o.a.Policemen,{page:e,limit:t,station_id:a,department_id:n,state:r,search:c})},audit:function(e){return i["a"].post(o.a.PassPoliceman,e)},delPolice:function(e){return i["a"].del(o.a.Policeman,{id:e})},screenSaver:function(e){return i["a"].post(o.a.screenSaver,e)},screenSavers:function(e,t){return i["a"].get(o.a.screenSavers,{page:e,limit:t})},delScreenSaver:function(e){return i["a"].del(o.a.screenSaver,Object(n["a"])({id:e},"id",e))},issueScreenSaver:function(e){return i["a"].post(o.a.publishScreenSavers,e)},policeStation:function(e){return i["a"].post(o.a.PoliceStation,e)},policeStations:function(e,t,a){return i["a"].get(o.a.PoliceStations,{page:e,limit:t,name:a})},getpoliceStationSTree:function(e,t,a){return i["a"].get(o.a.policeStationTree,{page:e,limit:t,name:a})},getParentPoliceStations:function(e,t,a){return i["a"].get(o.a.PoliceStations,{page:e,limit:t,parent_id:a})},onePoliceStation:function(e){return i["a"].get(o.a.PoliceStation,{id:e})},delPoliceStation:function(e){return i["a"].get(o.a.DelPoliceStation,{id:e})},information:function(e){return i["a"].post(o.a.Information,e)},informations:function(e,t,a,n){return i["a"].get(o.a.Information,{page:e,limit:t,id:a,title:n})},faceSwitch:function(e){return i["a"].post(o.a.FaceSwicth,e)},delFaceSwitch:function(e){return i["a"].del(o.a.FaceSwicth,{id:e})},faceSwitches:function(e,t){return i["a"].get(o.a.FaceSwicthes,{page:e,limit:t})},statistical:function(){return i["a"].get(o.a.Count)},currentDay:function(){return i["a"].get(o.a.CountOpenRecord)},strangerRecord:function(){return i["a"].get(o.a.CountStrangerRecord)},addressStrangerRecord:function(e){return i["a"].get(o.a.CountAddressStrangerRecord,{id:e})},searchStrangerRecord:function(e){return i["a"].get(o.a.CountStrangerRecord,{address:e})},getTransmits:function(e,t){return i["a"].get(o.a.Transmits,{page:e,limit:t})},getOfflineDevices:function(e,t){return i["a"].get(o.a.OfflineDevices,{sort:e,filter:t})}};t["a"]=c},"42f7":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],attrs:{"element-loading-text":"获取数据中"}},[a("div",{staticClass:"handle-box"},[a("div",{staticClass:"btn"},[a("el-button",{attrs:{type:"primary",size:"medium",icon:"el-icon-circle-plus-outline"},on:{click:e.addSwitch}},[e._v("添加开关信息")])],1)]),a("el-dialog",{attrs:{title:"添加开关信息",visible:e.dialogSwitch,width:"50%"},on:{"update:visible":function(t){e.dialogSwitch=t}}},[a("div",{staticClass:"box"},[a("el-form",{attrs:{model:e.form,"label-width":"80px"}},[a("el-form-item",{attrs:{label:"开关名称"}},[a("el-input",{model:{value:e.form.switch_title,callback:function(t){e.$set(e.form,"switch_title",t)},expression:"form.switch_title"}})],1),a("el-form-item",{attrs:{label:"版本"}},[a("el-input",{model:{value:e.form.version,callback:function(t){e.$set(e.form,"version",t)},expression:"form.version"}})],1),a("el-form-item",{attrs:{label:"开关值"}},[a("el-input",{model:{value:e.form.switch_value,callback:function(t){e.$set(e.form,"switch_value",t)},expression:"form.switch_value"}})],1),a("div",{staticClass:"submit"},[a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:e.newSwitch}},[e._v("提交")])],1)],1)],1)],1)]),a("el-table",{attrs:{data:e.tableData,stripe:"",border:"","header-cell-style":{background:"#f0f0f0",color:"#003366"},"max-height":"620"}},[a("el-table-column",{attrs:{prop:"id",label:"ID"}}),a("el-table-column",{attrs:{prop:"switch_title",label:"开关名称"}}),a("el-table-column",{attrs:{prop:"version",label:"版本"}}),a("el-table-column",{attrs:{prop:"switch_value",label:"开关值"},scopedSlots:e._u([{key:"default",fn:function(t){return[2==t.row.switch_value?a("span",[e._v("关")]):e._e(),1==t.row.switch_value?a("span",[e._v("开")]):e._e()]}}])}),a("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{slot:"reference",size:"mini",type:"primary"},on:{click:function(a){return e.handleEdit(t.$index,t.row)}},slot:"reference"},[e._v("编辑")]),a("el-popconfirm",{staticStyle:{"margin-left":"10px"},attrs:{title:"是否要删除该条数据",cancelButtonType:"primary"},on:{confirm:function(a){return e.handleDel(t.$index,t.row)}}},[a("el-button",{attrs:{slot:"reference",size:"mini",type:"danger"},slot:"reference"},[e._v("删除")])],1)]}}])})],1),a("div",{staticClass:"block"},[a("el-pagination",{attrs:{"current-page":e.current,"page-sizes":[10,20,50,100,150,200,250,300],"page-size":e.size,layout:"sizes, prev, pager, next, jumper",total:e.total},on:{"current-change":e.currentChange,"update:currentPage":function(t){e.current=t},"update:current-page":function(t){e.current=t},"size-change":e.sizeChange}})],1)],1)},i=[],r=a("365c"),o={name:"gradems",data:function(){return{loading:!0,dialogSwitch:!1,form:{switch_title:"人脸开关",version:"1.0.1",switch_value:"2"},tableData:[],current:1,size:10,total:0}},mounted:function(){this.getSwitch()},methods:{oneChange:function(e){console.log(self.checkList)},getSwitch:function(){var e=this,t=this;r["a"].faceSwitches(t.current).then((function(e){t.loading=!1,t.tableData=e.data,t.total=e.total})).catch((function(t){e.loading=!1}))},addSwitch:function(){var e=this;e.dialogSwitch=!0,e.form={switch_title:"人脸开关",version:"",switch_value:""}},newSwitch:function(){var e=this;r["a"].faceSwitch(e.form).then((function(t){e.dialogSwitch=!1,e.$message.success("提交成功"),e.getSwitch(),e.current=1,e.form={}})).catch((function(e){}))},handleDel:function(e,t){var a=this;console.log(t);var n=t.id;r["a"].delFaceSwitch(n).then((function(e){a.$message.success("删除成功"),a.getSwitch(),a.current=1})).catch((function(e){a.loading=!1}))},handleEdit:function(e,t){var a=this;a.dialogSwitch=!0,a.form=t},currentChange:function(e){var t=this;t.loading=!0,t.current=e,r["a"].faceSwitches(e,t.size).then((function(e){t.loading=!1,t.tableData=e.data,t.total=e.total})).catch((function(e){t.loading=!1}))},sizeChange:function(e){var t=this;t.loading=!0,t.size=e,r["a"].faceSwitches(t.current,e).then((function(e){t.loading=!1,t.tableData=e.data,t.total=e.total})).catch((function(e){t.loading=!1}))}}},c=o,s=a("2877"),u=Object(s["a"])(c,n,i,!1,null,null,null);t["default"]=u.exports}}]);