(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c516ef9c"],{"365c":function(e,t,a){"use strict";a("ac1f");var n=a("be3b"),i=a("99b1"),r=a.n(i),o={aip:function(e){return n["a"].post(r.a.Aip,e)},delAip:function(e){return n["a"].del(r.a.Aip,{id:e})},aips:function(e,t){return n["a"].get(r.a.Aips,{page:e,limit:t})},apk:function(e){return n["a"].post(r.a.Apk,e)},apks:function(e,t){return n["a"].get(r.a.Apks,{page:e,limit:t})},apkVersion:function(e){return n["a"].post(r.a.ApkVersion,e)},apkVersions:function(e,t,a){return n["a"].get(r.a.ApkVersions,{page:e,limit:t,apk_id:a})},_apkVersions:function(e){return n["a"].get(r.a.ApkVersions,{id:e})},publishApk:function(e){return n["a"].post(r.a.PublishApk,e)},project:function(e){return n["a"].post(r.a.Project,e)},projects:function(e,t){return n["a"].get(r.a.Projects,{page:e,limit:t})},address:function(e){return n["a"].post(r.a.Address,e)},getaddress:function(e){return n["a"].get(r.a.Address,{id:e})},addresses:function(e,t,a){return n["a"].get(r.a.Addresses,{page:e,limit:t,project_id:a})},addressTypes:function(e,t){return n["a"].get(r.a.AddressTypes,{page:e,limit:t})},face:function(e){return n["a"].post(r.a.Face,e)},faces:function(e,t){return n["a"].get(r.a.Faces,{page:e,limit:t})},areas:function(e,t,a){return n["a"].get(r.a.Areas,{page:e,limit:t,parent_id:a})},device:function(e){return n["a"].post(r.a.Device,e)},devices:function(e,t,a){return n["a"].get(r.a.Devices,{page:e,limit:t,id:a})},_devices:function(e,t,a){return n["a"].get(r.a.Devices,{direction:e,addresses:t,limit:a})},deviceLogs:function(e,t,a,i){return n["a"].get(r.a.DeviceLogs,{page:e,limit:t,uuid:a,type:i})},deviceFaceLogs:function(e,t,a,i){return n["a"].get(r.a.DeviceRecord,{page:e,limit:t,uuid:a,address_id:i})},deviceTypes:function(){return n["a"].get(r.a.DeviceTypes)},deviceHeart:function(e){return n["a"].get(r.a.DeviceHeartbeat,{uuid:e})},deviceCommands:function(e,t,a){return n["a"].get(r.a.DeviceCommands,{page:e,limit:t,uuid:a})},commandsType:function(e){return n["a"].get(r.a.Commands,{type:e})},sendDeviceCommand:function(e){return n["a"].post(r.a.SendDeviceCommand,e)},deviceUserList:function(e,t,a){return n["a"].get(r.a.DeviceUserList,{page:e,limit:t,uuid:a})},search:function(e){return n["a"].get(r.a.Devices,{uuid:e})},searchType:function(e){return n["a"].get(r.a.Devices,{type:e})},faceGroup:function(e){return n["a"].get(r.a.FaceGroup,{address_id:e})},uuid:function(e,t){return n["a"].get(r.a.Uuid,{page:e,limit:t})},dangerFace:function(e){return n["a"].post(r.a.DangerFace,e)},delDangerFace:function(e){return n["a"].del(r.a.DelDangerFace,{id:e})},dangerFaces:function(e,t){return n["a"].get(r.a.DangerFaces,{page:e,limit:t})},dangerLogs:function(e,t){return n["a"].get(r.a.DangerLogs,{page:e,limit:t})},roles:function(e,t){return n["a"].get(r.a.Roles,{page:e,limit:t})},oneRole:function(e){return n["a"].get(r.a.Role,{name:e})},role:function(e){return n["a"].post(r.a.Role,e)}};t["a"]=o},"616c":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"handle-box"},[a("div",{staticClass:"btn"},[a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.dialogProject=!0}}},[e._v("添加项目")])],1)]),a("el-dialog",{attrs:{title:"添加项目",visible:e.dialogProject},on:{"update:visible":function(t){e.dialogProject=t}}},[a("div",{staticClass:"box"},[a("el-form",{attrs:{model:e.form,"label-width":"100px"}},[a("el-form-item",{attrs:{label:"选择AIPID"}},[a("el-select",{model:{value:e.form.aip_id,callback:function(t){e.$set(e.form,"aip_id",t)},expression:"form.aip_id"}},e._l(e.apiList,(function(e,t){return a("el-option",{key:t,attrs:{label:e.name,value:e.id}})})),1)],1),a("el-form-item",{attrs:{label:"项目名字"}},[a("el-input",{model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),a("div",{staticClass:"submit"},[a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:e.newProject}},[e._v("提交")])],1)],1)],1)],1)]),a("el-table",{attrs:{data:e.tableData,border:"","header-cell-style":{background:"#f0f0f0",color:"#2a9f93"}}},[a("el-table-column",{attrs:{prop:"id",label:"ID"}}),a("el-table-column",{attrs:{prop:"name",label:"名称"}}),a("el-table-column",{attrs:{prop:"state",label:"State"}}),a("el-table-column",{attrs:{prop:"app_id",label:"AppId",width:"300px"}}),a("el-table-column",{attrs:{prop:"aip_id",label:"AipId"}}),a("el-table-column",{attrs:{prop:"secret",label:"Sectet",width:"300px"}}),a("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(a){return e.handleDelete(t.$index,t.row)}}},[e._v("删除")])]}}])})],1),a("div",{staticClass:"block"},[a("el-pagination",{attrs:{"current-page":e.currentPage,"page-sizes":[10,20,30,40,50],"page-size":e.pageSize,layout:"sizes, prev, pager, next, jumper",total:e.totalPage},on:{"current-change":e.handleCurrentChange,"update:currentPage":function(t){e.currentPage=t},"update:current-page":function(t){e.currentPage=t},"size-change":e.handleSizeChange}})],1)],1)},i=[],r=a("365c"),o={name:"gradems",data:function(){return{dialogProject:!1,apiList:[],form:{aip_id:"",name:""},tableData:[],currentPage:1,pageSize:10,totalPage:0}},mounted:function(){this.getAip(),this.getProject()},methods:{getAip:function(){var e=this;r["a"].aips(e.currentPage).then((function(t){e.apiList=t.data}))},getProject:function(){var e=this;r["a"].projects(e.currentPage).then((function(t){e.tableData=t.data,e.totalPage=t.total}))},newProject:function(){var e=this;r["a"].project(e.form).then((function(t){e.dialogProject=!1,e.$message.success("提交成功"),e.getProject(),e.currentPage=1,e.form={}}))},handleDel:function(){},handleCurrentChange:function(e){var t=this;t.currentPage=e,r["a"].projects(e,t.pageSize).then((function(e){t.tableData=e.data,t.totalPage=e.total}))},handleSizeChange:function(e){var t=this;t.pageSize=e,r["a"].projects(t.currentPage,e).then((function(e){t.tableData=e.data,t.totalPage=e.total}))}}},c=o,u=a("2877"),s=Object(u["a"])(c,n,i,!1,null,null,null);t["default"]=s.exports}}]);
//# sourceMappingURL=chunk-c516ef9c.0e8ab1c5.js.map