(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8af8e5aa"],{"0beb":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],attrs:{"element-loading-text":"加载中"}},[a("div",{staticClass:"content-box"},[a("div",{staticClass:"content-box-left"},[e._m(0),a("div",{staticClass:"btn"},[a("el-select",{attrs:{placeholder:"请选择检索状态"},on:{change:e.changeSearch},model:{value:e.searchState,callback:function(t){e.searchState=t},expression:"searchState"}},e._l(e.searchList,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),e._m(1),a("div",{staticClass:"btn"},[a("el-input",{staticClass:"input-with-select",attrs:{placeholder:"输入姓名或身份证号"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.search(e.searchName)}},model:{value:e.searchName,callback:function(t){e.searchName=t},expression:"searchName"}},[a("el-button",{attrs:{slot:"append",icon:"el-icon-search"},on:{click:function(t){return e.search(e.searchName)}},slot:"append"})],1)],1),a("div",{staticClass:"btn"},[a("el-button",{attrs:{type:"primary"},on:{click:e.resetSelect}},[e._v("重新筛选")])],1)]),a("div",{staticClass:"content-box-right"},[a("el-table",{attrs:{data:e.tableData,stripe:"",border:"","header-cell-style":{background:"#f0f0f0",color:"#003366"},"max-height":"720"}},[a("el-table-column",{attrs:{prop:"id",label:"ID"}}),a("el-table-column",{attrs:{prop:"name",label:"姓名"}}),a("el-table-column",{attrs:{prop:"number",label:"身份证号",width:"200px"}}),a("el-table-column",{attrs:{prop:"remark",label:"备注",width:"400px"}}),a("el-table-column",{attrs:{prop:"number",label:"工号",width:"200px"}}),a("el-table-column",{attrs:{prop:"state",label:"检索状态"},scopedSlots:e._u([{key:"default",fn:function(t){return[0==t.row.state?a("span",[e._v("不检索")]):e._e(),1==t.row.state?a("span",[e._v("检索通过")]):e._e(),2==t.row.state?a("span",[e._v("检索不通过")]):e._e()]}}])}),a("el-table-column",{attrs:{prop:"image",label:"人脸照片"},scopedSlots:e._u([{key:"default",fn:function(e){return[a("el-popover",{attrs:{placement:"top-start",title:"",trigger:"click"}},[a("img",{staticStyle:{"max-width":"800px","max-height":"800px"},attrs:{src:e.row.image}}),a("img",{staticStyle:{"max-width":"150px","max-height":"80px"},attrs:{slot:"reference",src:e.row.image},slot:"reference"})])]}}])})],1),a("div",{staticClass:"block"},[a("el-pagination",{attrs:{"current-page":e.current,"page-sizes":[10,20,50,100,150,200,250,300],"page-size":e.size,layout:"sizes, prev, pager, next, jumper",total:e.total},on:{"current-change":e.handleCurrentChange,"update:currentPage":function(t){e.current=t},"update:current-page":function(t){e.current=t},"size-change":e.handleSizeChange}})],1)],1)])])},r=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"btn"},[a("div",{staticClass:"tip"},[e._v("根据检索状态筛选：")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"btn"},[a("div",{staticClass:"tip"},[e._v("搜索名称或身份证号：")])])}],i=a("365c"),s={data:function(){return{loading:!0,dialogDepartment:!1,searchName:"",searchState:"",searchList:[{value:0,label:"全部"},{value:1,label:"检索通过"},{value:2,label:"检索不通过"}],tableData:[{}],current:1,size:10,total:0}},mounted:function(){this.getPersonVerifies()},methods:{getPersonVerifies:function(){var e=this;i["a"].personVerifies(1,10).then((function(t){e.loading=!1,e.tableData=t.data,e.total=t.total})).catch((function(t){e.loading=!1}))},search:function(e){var t=this;t.loading=!0,i["a"].personVerifies(1,10,e,t.searchState).then((function(e){t.loading=!1,t.tableData=e.data,t.total=e.total})).catch((function(e){t.loading=!1}))},changeSearch:function(e){var t=this;t.loading=!0,i["a"].personVerifies(1,10,t.searchName,e).then((function(e){t.loading=!1,t.tableData=e.data,t.total=e.total})).catch((function(e){t.loading=!1}))},resetSelect:function(){window.location.reload()},handleCurrentChange:function(e){var t=this;t.current=e,t.loading=!0,i["a"].personVerifies(e,t.size,t.searchName,t.searchState).then((function(e){t.loading=!1,t.tableData=e.data,t.total=e.total})).catch((function(e){t.loading=!1}))},handleSizeChange:function(e){var t=this;t.size=e,t.loading=!0,i["a"].personVerifies(t.current,e,t.searchName,t.searchState).then((function(e){t.loading=!1,t.tableData=e.data,t.total=e.total})).catch((function(e){t.loading=!1}))}}},c=s,o=a("2877"),u=Object(o["a"])(c,n,r,!1,null,"ecdb3900",null);t["default"]=u.exports},"365c":function(e,t,a){"use strict";var n=a("ade3"),r=a("be3b"),i=a("99b1"),s=a.n(i),c={aip:function(e){return r["a"].post(s.a.Aip,e)},delAip:function(e){return r["a"].del(s.a.Aip,{id:e})},aips:function(e,t){return r["a"].get(s.a.Aips,{page:e,limit:t})},apk:function(e){return r["a"].post(s.a.Apk,e)},apks:function(e,t){return r["a"].get(s.a.Apks,{page:e,limit:t})},apkVersion:function(e){return r["a"].post(s.a.ApkVersion,e)},apkVersions:function(e,t,a){return r["a"].get(s.a.ApkVersions,{page:e,limit:t,apk_id:a})},_apkVersions:function(e){return r["a"].get(s.a.ApkVersions,{id:e})},publishApk:function(e){return r["a"].post(s.a.PublishApk,e)},project:function(e){return r["a"].post(s.a.Project,e)},projects:function(e,t){return r["a"].get(s.a.Projects,{page:e,limit:t})},address:function(e){return r["a"].post(s.a.Address,e)},getaddress:function(e){return r["a"].get(s.a.Address,{id:e})},delAddress:function(e){return r["a"].del(s.a.Address,{id:e})},addresses:function(e,t,a,n,i){return r["a"].get(s.a.Addresses,{page:e,limit:t,project_id:a,area_id:n,address:i})},addressTypes:function(e,t){return r["a"].get(s.a.AddressTypes,{page:e,limit:t})},addressesMap:function(e,t,a){return r["a"].get(s.a.Addresses,{page:e,limit:t,type:a})},face:function(e){return r["a"].post(s.a.Face,e)},faces:function(e,t,a){return r["a"].get(s.a.Faces,{page:e,limit:t,name:a})},delFace:function(e){return r["a"].get(s.a.DeleteFace,{id:e})},searchFace:function(e){return r["a"].post(s.a.SearchImageFace,e)},pushRecords:function(e,t,a,n){return r["a"].get(s.a.PushRecords,{page:e,limit:t,name:a,address:n})},pushRecordCommands:function(e){return r["a"].get(s.a.PushRecordCommands,{id:e})},againPush:function(e){return r["a"].post(s.a.PushRecord,e)},areas:function(e,t,a){return r["a"].get(s.a.Areas,{page:e,limit:t,parent_id:a})},area:function(e){return r["a"].post(s.a.Area,e)},device:function(e){return r["a"].post(s.a.Device,e)},_device:function(e){return r["a"].get(s.a.Device,{uuid:e})},devices:function(e,t,a,n,i,c,o,u){return r["a"].get(s.a.Devices,{page:e,limit:t,type:a,uuid:n,area_id:i,address_id:c,online:o,address:u})},_devices:function(e,t,a){return r["a"].get(s.a.Devices,{direction:e,addresses:t,limit:a})},deviceLogs:function(e,t,a,n){return r["a"].get(s.a.DeviceLogs,{page:e,limit:t,uuid:a,type:n})},deviceFaceLogs:function(e,t,a,n,i,c){return r["a"].get(s.a.DeviceRecord,{page:e,limit:t,uuid:a,search:n,area_id:i,address_id:c})},searchFaceLogs:function(e,t,a){return r["a"].get(s.a.DeviceRecord,{page:e,limit:t,faces:a})},deviceTypes:function(){return r["a"].get(s.a.DeviceTypes)},deviceHeart:function(e){return r["a"].get(s.a.DeviceHeartbeat,{uuid:e})},deviceCommands:function(e,t,a){return r["a"].get(s.a.DeviceCommands,{page:e,limit:t,uuid:a})},commandsType:function(e){return r["a"].get(s.a.Commands,{type:e})},sendDeviceCommand:function(e){return r["a"].post(s.a.SendDeviceCommand,e)},resetCommand:function(e){return r["a"].get(s.a.RestartDeviceCommands,{uuid:e})},catchFace:function(e){return r["a"].get(s.a.CatchFaces,{id:e})},deviceUserList:function(e,t,a){return r["a"].get(s.a.DeviceUserList,{page:e,limit:t,uuid:a})},faceGroup:function(e){return r["a"].get(s.a.FaceGroup,{address_id:e})},uuid:function(e,t){return r["a"].get(s.a.Uuid,{page:e,limit:t})},dangerFace:function(e){return r["a"].post(s.a.DangerFace,e)},importHistory:function(e,t,a){return r["a"].get(s.a.ImportTasks,{page:e,limit:t,state:a})},delDangerFace:function(e){return r["a"].del(s.a.DelDangerFace,{id:e})},dangerFaces:function(e,t){return r["a"].get(s.a.DangerFaces,{page:e,limit:t})},personVerifies:function(e,t,a,n){return r["a"].get(s.a.PersonVerifies,{page:e,limit:t,search:a,state:n})},dangerLogs:function(e,t,a,n){return r["a"].get(s.a.DangerLogs,{page:e,limit:t,danger_id:a,address:n})},alert:function(e,t,a,n,i,c,o,u,l){return r["a"].get(s.a.DangerAlerts,{page:e,limit:t,state:a,search:n,dangers:i,alert_type:c,start:o,end:u,danger_type:l})},handleAlerts:function(e){return r["a"].post(s.a.HandleAlerts,{results:e})},dangerTypes:function(){return r["a"].get(s.a.DangerTypes,{})},notifyChange:function(e){return r["a"].post(s.a.ChangeDangerFace,e)},roles:function(e,t){return r["a"].get(s.a.Roles,{page:e,limit:t})},oneRole:function(e){return r["a"].get(s.a.Role,{name:e})},role:function(e){return r["a"].post(s.a.Role,e)},users:function(e,t){return r["a"].get(s.a.Users,{page:e,limit:t})},user:function(e){return r["a"].post(s.a.User,e)},policeLevel:function(e){return r["a"].post(s.a.PoliceLevel,e)},policeLevels:function(e,t,a,n){return r["a"].get(s.a.PoliceLevels,{page:e,limit:t,level:a,parent_id:n})},policeman:function(e){return r["a"].post(s.a.Policeman,e)},policemen:function(e,t,a,n,i,c){return r["a"].get(s.a.Policemen,{page:e,limit:t,station_id:a,department_id:n,state:i,search:c})},audit:function(e){return r["a"].post(s.a.PassPoliceman,e)},delPolice:function(e){return r["a"].del(s.a.Policeman,{id:e})},screenSaver:function(e){return r["a"].post(s.a.screenSaver,e)},screenSavers:function(e,t){return r["a"].get(s.a.screenSavers,{page:e,limit:t})},delScreenSaver:function(e){return r["a"].del(s.a.screenSaver,Object(n["a"])({id:e},"id",e))},issueScreenSaver:function(e){return r["a"].post(s.a.publishScreenSavers,e)},policeStation:function(e){return r["a"].post(s.a.PoliceStation,e)},policeStations:function(e,t,a){return r["a"].get(s.a.PoliceStations,{page:e,limit:t,name:a})},getParentPoliceStations:function(e,t,a){return r["a"].get(s.a.PoliceStations,{page:e,limit:t,parent_id:a})},onePoliceStation:function(e){return r["a"].get(s.a.PoliceStation,{id:e})},delPoliceStation:function(e){return r["a"].get(s.a.DelPoliceStation,{id:e})},information:function(e){return r["a"].post(s.a.Information,e)},informations:function(e,t,a,n){return r["a"].get(s.a.Information,{page:e,limit:t,id:a,title:n})},faceSwitch:function(e){return r["a"].post(s.a.FaceSwicth,e)},delFaceSwitch:function(e){return r["a"].del(s.a.FaceSwicth,{id:e})},faceSwitches:function(e,t){return r["a"].get(s.a.FaceSwicthes,{page:e,limit:t})},statistical:function(){return r["a"].get(s.a.Count)},currentDay:function(){return r["a"].get(s.a.CountOpenRecord)},strangerRecord:function(){return r["a"].get(s.a.CountStrangerRecord)},addressStrangerRecord:function(e){return r["a"].get(s.a.CountAddressStrangerRecord,{id:e})},searchStrangerRecord:function(e){return r["a"].get(s.a.CountStrangerRecord,{address:e})},getTransmits:function(e,t){return r["a"].get(s.a.Transmits,{page:e,limit:t})},getOfflineDevices:function(e,t){return r["a"].get(s.a.OfflineDevices,{sort:e,filter:t})}};t["a"]=c}}]);