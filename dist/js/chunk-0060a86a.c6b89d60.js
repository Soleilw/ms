(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0060a86a"],{"365c":function(e,t,a){"use strict";var n=a("be3b"),i=a("99b1"),r=a.n(i),o={aip:function(e){return n["a"].post(r.a.Aip,e)},delAip:function(e){return n["a"].del(r.a.Aip,{id:e})},aips:function(e,t){return n["a"].get(r.a.Aips,{page:e,limit:t})},apk:function(e){return n["a"].post(r.a.Apk,e)},apks:function(e,t){return n["a"].get(r.a.Apks,{page:e,limit:t})},apkVersion:function(e){return n["a"].post(r.a.ApkVersion,e)},apkVersions:function(e,t,a){return n["a"].get(r.a.ApkVersions,{page:e,limit:t,apk_id:a})},_apkVersions:function(e){return n["a"].get(r.a.ApkVersions,{id:e})},publishApk:function(e){return n["a"].post(r.a.PublishApk,e)},project:function(e){return n["a"].post(r.a.Project,e)},projects:function(e,t){return n["a"].get(r.a.Projects,{page:e,limit:t})},address:function(e){return n["a"].post(r.a.Address,e)},getaddress:function(e){return n["a"].get(r.a.Address,{id:e})},addresses:function(e,t,a){return n["a"].get(r.a.Addresses,{page:e,limit:t,project_id:a})},addressTypes:function(e,t){return n["a"].get(r.a.AddressTypes,{page:e,limit:t})},face:function(e){return n["a"].post(r.a.Face,e)},faces:function(e,t,a){return n["a"].get(r.a.Faces,{page:e,limit:t,name:a})},pushRecords:function(e,t,a){return n["a"].get(r.a.PushRecords,{page:e,limit:t,name:a})},pushRecordCommands:function(e){return n["a"].get(r.a.PushRecordCommands,{id:e})},againPush:function(e){return n["a"].post(r.a.PushRecord,e)},areas:function(e,t,a){return n["a"].get(r.a.Areas,{page:e,limit:t,parent_id:a})},area:function(e){return n["a"].post(r.a.Area,e)},device:function(e){return n["a"].post(r.a.Device,e)},_device:function(e){return n["a"].get(r.a.Device,{uuid:e})},devices:function(e,t,a,i,o){return n["a"].get(r.a.Devices,{page:e,limit:t,type:a,uuid:i,address_id:o})},_devices:function(e,t,a){return n["a"].get(r.a.Devices,{direction:e,addresses:t,limit:a})},deviceLogs:function(e,t,a,i){return n["a"].get(r.a.DeviceLogs,{page:e,limit:t,uuid:a,type:i})},deviceFaceLogs:function(e,t,a,i){return n["a"].get(r.a.DeviceRecord,{page:e,limit:t,uuid:a,address_id:i})},deviceTypes:function(){return n["a"].get(r.a.DeviceTypes)},deviceHeart:function(e){return n["a"].get(r.a.DeviceHeartbeat,{uuid:e})},deviceCommands:function(e,t,a){return n["a"].get(r.a.DeviceCommands,{page:e,limit:t,uuid:a})},commandsType:function(e){return n["a"].get(r.a.Commands,{type:e})},sendDeviceCommand:function(e){return n["a"].post(r.a.SendDeviceCommand,e)},deviceUserList:function(e,t,a){return n["a"].get(r.a.DeviceUserList,{page:e,limit:t,uuid:a})},faceGroup:function(e){return n["a"].get(r.a.FaceGroup,{address_id:e})},uuid:function(e,t){return n["a"].get(r.a.Uuid,{page:e,limit:t})},dangerFace:function(e){return n["a"].post(r.a.DangerFace,e)},delDangerFace:function(e){return n["a"].del(r.a.DelDangerFace,{id:e})},dangerFaces:function(e,t){return n["a"].get(r.a.DangerFaces,{page:e,limit:t})},dangerLogs:function(e,t){return n["a"].get(r.a.DangerLogs,{page:e,limit:t})},roles:function(e,t){return n["a"].get(r.a.Roles,{page:e,limit:t})},oneRole:function(e){return n["a"].get(r.a.Role,{name:e})},role:function(e){return n["a"].post(r.a.Role,e)},policeStation:function(e){return n["a"].post(r.a.PoliceStation,e)},policeStations:function(e,t,a){return n["a"].get(r.a.PoliceStations,{page:e,limit:t,name:a})},information:function(e){return n["a"].post(r.a.Information,e)},informations:function(e,t,a,i){return n["a"].get(r.a.Information,{page:e,limit:t,id:a,title:i})}};t["a"]=o},"7fcc":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],attrs:{"element-loading-text":"获取数据中"}},[a("div",{staticClass:"handle-box"},[a("div",{staticClass:"btn"},[a("el-button",{attrs:{type:"primary",size:"medium",icon:"el-icon-circle-plus-outline"},on:{click:e.addAip}},[e._v("添加AIP")])],1)]),a("el-dialog",{attrs:{title:"添加AIP",visible:e.dialogAip,width:"50%"},on:{"update:visible":function(t){e.dialogAip=t}}},[a("div",{staticClass:"box"},[a("el-form",{attrs:{model:e.form,"label-width":"80px"}},[a("el-form-item",{attrs:{label:"Apk名字"}},[a("el-input",{model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),a("el-form-item",{attrs:{label:"AppId"}},[a("el-input",{model:{value:e.form.app_id,callback:function(t){e.$set(e.form,"app_id",t)},expression:"form.app_id"}})],1),a("el-form-item",{attrs:{label:"ApiKEY"}},[a("el-input",{model:{value:e.form.api_key,callback:function(t){e.$set(e.form,"api_key",t)},expression:"form.api_key"}})],1),a("el-form-item",{attrs:{label:"SectetKey"}},[a("el-input",{model:{value:e.form.secret_key,callback:function(t){e.$set(e.form,"secret_key",t)},expression:"form.secret_key"}})],1),a("div",{staticClass:"submit"},[a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:e.newAip}},[e._v("提交")])],1)],1)],1)],1)]),a("el-table",{attrs:{data:e.tableData,border:"","header-cell-style":{background:"#f0f0f0",color:"#2a9f93"},"max-height":"620"}},[a("el-table-column",{attrs:{prop:"id",label:"ID"}}),a("el-table-column",{attrs:{prop:"name",label:"名称"}}),a("el-table-column",{attrs:{prop:"remark",label:"备注"}}),a("el-table-column",{attrs:{prop:"state",label:"State"}}),a("el-table-column",{attrs:{prop:"app_id",label:"AppId"}}),a("el-table-column",{attrs:{prop:"api_key",label:"ApiKey",width:"300px"}}),a("el-table-column",{attrs:{prop:"secret_key",label:"SectetKey",width:"300px"}}),a("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-popconfirm",{attrs:{title:"是否要删除该条数据",cancelButtonType:"primary"},on:{onConfirm:function(a){return e.handleDel(t.$index,t.row)}}},[a("el-button",{attrs:{slot:"reference",size:"mini",type:"danger"},slot:"reference"},[e._v("删除")])],1)]}}])})],1),a("div",{staticClass:"block"},[a("el-pagination",{attrs:{"current-page":e.current,"page-sizes":[10,20,50,100,150,200,250,300],"page-size":e.size,layout:"sizes, prev, pager, next, jumper",total:e.total},on:{"current-change":e.currentChange,"update:currentPage":function(t){e.current=t},"update:current-page":function(t){e.current=t},"size-change":e.sizeChange}})],1)],1)},i=[],r=a("365c"),o={name:"gradems",data:function(){return{loading:!0,dialogAip:!1,form:{name:"",app_id:"",api_key:"",secret_key:""},tableData:[],current:1,size:10,total:0}},mounted:function(){this.getAip()},methods:{getAip:function(){var e=this,t=this;r["a"].aips(t.current).then((function(e){t.loading=!1,t.tableData=e.data,t.total=e.total})).catch((function(t){e.loading=!1}))},addAip:function(){var e=this;e.dialogAip=!0,e.form={name:"",app_id:"",api_key:"",secret_key:""}},newAip:function(){var e=this;r["a"].aip(e.form).then((function(t){e.dialogAip=!1,e.$message.success("提交成功"),e.getAip(),e.current=1,e.form={}})).catch((function(e){}))},handleDel:function(e,t){var a=this;console.log(t);var n=t.id;r["a"].delAip(n).then((function(e){a.$message.success("删除成功"),a.getAip(),a.current=1})).catch((function(e){a.loading=!1}))},currentChange:function(e){var t=this;t.loading=!0,t.current=e,r["a"].aips(e,t.size).then((function(e){t.loading=!1,t.tableData=e.data,t.total=e.total})).catch((function(e){t.loading=!1}))},sizeChange:function(e){var t=this;t.loading=!0,t.size=e,r["a"].aips(t.current,e).then((function(e){t.loading=!1,t.tableData=e.data,t.total=e.total})).catch((function(e){t.loading=!1}))}}},c=o,s=a("2877"),u=Object(s["a"])(c,n,i,!1,null,null,null);t["default"]=u.exports}}]);
//# sourceMappingURL=chunk-0060a86a.c6b89d60.js.map