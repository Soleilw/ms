(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-dae7a9e8"],{"365c":function(e,t,a){"use strict";var n=a("be3b"),r=a("99b1"),i=a.n(r),o={aip:function(e){return n["a"].post(i.a.Aip,e)},delAip:function(e){return n["a"].del(i.a.Aip,{id:e})},aips:function(e,t){return n["a"].get(i.a.Aips,{page:e,limit:t})},apk:function(e){return n["a"].post(i.a.Apk,e)},apks:function(e,t){return n["a"].get(i.a.Apks,{page:e,limit:t})},apkVersion:function(e){return n["a"].post(i.a.ApkVersion,e)},apkVersions:function(e,t,a){return n["a"].get(i.a.ApkVersions,{page:e,limit:t,apk_id:a})},_apkVersions:function(e){return n["a"].get(i.a.ApkVersions,{id:e})},publishApk:function(e){return n["a"].post(i.a.PublishApk,e)},project:function(e){return n["a"].post(i.a.Project,e)},projects:function(e,t){return n["a"].get(i.a.Projects,{page:e,limit:t})},address:function(e){return n["a"].post(i.a.Address,e)},getaddress:function(e){return n["a"].get(i.a.Address,{id:e})},addresses:function(e,t,a){return n["a"].get(i.a.Addresses,{page:e,limit:t,project_id:a})},addressTypes:function(e,t){return n["a"].get(i.a.AddressTypes,{page:e,limit:t})},face:function(e){return n["a"].post(i.a.Face,e)},faces:function(e,t){return n["a"].get(i.a.Faces,{page:e,limit:t})},pushRecords:function(e,t,a){return n["a"].get(i.a.PushRecords,{page:e,limit:t,name:a})},pushRecordCommands:function(e){return n["a"].get(i.a.PushRecordCommands,{id:e})},againPush:function(e){return n["a"].post(i.a.PushRecord,e)},areas:function(e,t,a){return n["a"].get(i.a.Areas,{page:e,limit:t,parent_id:a})},area:function(e){return n["a"].post(i.a.Area,e)},device:function(e){return n["a"].post(i.a.Device,e)},_device:function(e){return n["a"].get(i.a.Device,{uuid:e})},devices:function(e,t,a,r,o){return n["a"].get(i.a.Devices,{page:e,limit:t,type:a,uuid:r,address_id:o})},_devices:function(e,t,a){return n["a"].get(i.a.Devices,{direction:e,addresses:t,limit:a})},deviceLogs:function(e,t,a,r){return n["a"].get(i.a.DeviceLogs,{page:e,limit:t,uuid:a,type:r})},deviceFaceLogs:function(e,t,a,r){return n["a"].get(i.a.DeviceRecord,{page:e,limit:t,uuid:a,address_id:r})},deviceTypes:function(){return n["a"].get(i.a.DeviceTypes)},deviceHeart:function(e){return n["a"].get(i.a.DeviceHeartbeat,{uuid:e})},deviceCommands:function(e,t,a){return n["a"].get(i.a.DeviceCommands,{page:e,limit:t,uuid:a})},commandsType:function(e){return n["a"].get(i.a.Commands,{type:e})},sendDeviceCommand:function(e){return n["a"].post(i.a.SendDeviceCommand,e)},deviceUserList:function(e,t,a){return n["a"].get(i.a.DeviceUserList,{page:e,limit:t,uuid:a})},faceGroup:function(e){return n["a"].get(i.a.FaceGroup,{address_id:e})},uuid:function(e,t){return n["a"].get(i.a.Uuid,{page:e,limit:t})},dangerFace:function(e){return n["a"].post(i.a.DangerFace,e)},delDangerFace:function(e){return n["a"].del(i.a.DelDangerFace,{id:e})},dangerFaces:function(e,t){return n["a"].get(i.a.DangerFaces,{page:e,limit:t})},dangerLogs:function(e,t){return n["a"].get(i.a.DangerLogs,{page:e,limit:t})},roles:function(e,t){return n["a"].get(i.a.Roles,{page:e,limit:t})},oneRole:function(e){return n["a"].get(i.a.Role,{name:e})},role:function(e){return n["a"].post(i.a.Role,e)}};t["a"]=o},"6df6":function(e,t,a){},"87b4":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"handle-box"},[a("div",{staticClass:"btn"},[a("el-button",{attrs:{type:"primary"},on:{click:e.addUser}},[e._v("添加用户")])],1)]),a("el-table",{attrs:{data:e.tableData,border:"","header-cell-style":{background:"#f0f0f0",color:"#2a9f93"},"max-height":"620"}},[a("el-table-column",{attrs:{prop:"id",label:"ID"}}),a("el-table-column",{attrs:{prop:"name",label:"账号"}}),a("el-table-column",{attrs:{prop:"role",label:"角色名"}}),a("el-table-column",{attrs:{prop:"enable",label:"状态"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",{domProps:{textContent:e._s("1"==t.row.enable?"启用":"禁用")}})]}}])}),a("el-table-column",{attrs:{label:"操作",width:"300px"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(a){return e.handleEdit(t.$index,t.row)}}},[e._v("编辑")]),a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(a){return e.handleReset(t.$index,t.row)}}},[e._v("重置密码")]),a("el-button",{attrs:{type:"danger",size:"mini"},on:{click:function(a){return e.handleDel(t.$index,t.row)}}},[e._v("删除")])]}}])})],1),a("el-dialog",{attrs:{visible:e.dialogDel,title:"删除角色",width:"20%",align:"center","close-on-click-modal":!1},on:{"update:visible":function(t){e.dialogDel=t}}},[a("div",{staticStyle:{"font-size":"20px","margin-bottom":"30px"}},[e._v("是否删除该角色")]),a("span",[a("el-button",{attrs:{type:"primary"},on:{click:e.toDel}},[e._v("删除")]),a("el-button",{attrs:{type:"danger"},on:{click:function(t){e.dialogDel=!1}}},[e._v("取消")])],1)]),a("div",{staticClass:"block"},[a("el-pagination",{attrs:{"current-page":e.currentPage,"page-sizes":[10,20,50,100,150,200,250,300],"page-size":10,layout:"sizes, prev, pager, next, jumper",total:e.totalPage},on:{"current-change":e.handleCurrentChange,"update:currentPage":function(t){e.currentPage=t},"update:current-page":function(t){e.currentPage=t},"size-change":e.handleSizeChange}})],1),a("el-dialog",{attrs:{title:"添加用户",visible:e.dialogUser,width:"60%","close-on-click-modal":!1},on:{"update:visible":function(t){e.dialogUser=t}}},[a("div",{staticClass:"box"},[a("el-form",{attrs:{model:e.form,"label-width":"80px"}},[a("el-form-item",{attrs:{label:"账号"}},[a("el-input",{attrs:{placeholder:"请输入账号"},model:{value:e.form.username,callback:function(t){e.$set(e.form,"username",t)},expression:"form.username"}})],1),a("el-form-item",{attrs:{label:"输入密码"}},[a("el-input",{attrs:{placeholder:"请输入密码",type:"password"},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}})],1),a("el-form-item",{attrs:{label:"选择角色"}},[a("el-select",{attrs:{placeholder:"请选择角色"},model:{value:e.form.role,callback:function(t){e.$set(e.form,"role",t)},expression:"form.role"}},e._l(e.rolesList,(function(e){return a("el-option",{key:e.title,attrs:{label:e.name,value:e.title}})})),1)],1),a("el-form-item",{attrs:{label:"选择社区"}},[a("el-select",{staticStyle:{"margin-right":"10px"},attrs:{placeholder:"请选择省份"},on:{change:e.proChange},model:{value:e.pro_id,callback:function(t){e.pro_id=t},expression:"pro_id"}},e._l(e.proList,(function(e){return a("el-option",{key:e.id,attrs:{label:e.title,value:e.id}})})),1),a("el-select",{staticStyle:{"margin-right":"10px"},attrs:{placeholder:"请选择市级"},on:{change:e.cityChange},model:{value:e.city_id,callback:function(t){e.city_id=t},expression:"city_id"}},e._l(e.cityList,(function(e){return a("el-option",{key:e.id,attrs:{label:e.title,value:e.id}})})),1),a("el-select",{staticStyle:{"margin-right":"10px"},attrs:{placeholder:"请选择区级"},on:{change:e.areasChange},model:{value:e.areas_id,callback:function(t){e.areas_id=t},expression:"areas_id"}},e._l(e.communityList,(function(e){return a("el-option",{key:e.id,attrs:{label:e.title,value:e.id}})})),1),a("el-select",{staticStyle:{"margin-right":"10px"},attrs:{placeholder:"请选择社区"},on:{change:e.communityChange},model:{value:e.community_id,callback:function(t){e.community_id=t},expression:"community_id"}},e._l(e.areaList,(function(e){return a("el-option",{key:e.id,attrs:{label:e.title,value:e.id}})})),1)],1),a("el-form-item",{attrs:{label:"选择状态"}},[a("el-select",{attrs:{placeholder:"请选择状态"},model:{value:e.form.enable,callback:function(t){e.$set(e.form,"enable",t)},expression:"form.enable"}},e._l(e.stateList,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),a("div",{staticClass:"submit"},[a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:e.newUser}},[e._v("提交")])],1)],1)],1)],1)]),a("el-dialog",{attrs:{title:"修改密码",visible:e.dialogResetPassWord,width:"500px","close-on-click-modal":!1},on:{"update:visible":function(t){e.dialogResetPassWord=t}}},[a("div",{staticClass:"box"},[a("el-form",{attrs:{model:e.pwdForm,"label-width":"120px"}},[a("el-form-item",{attrs:{label:"旧密码"}},[a("el-input",{model:{value:e.pwdForm.old_password,callback:function(t){e.$set(e.pwdForm,"old_password",t)},expression:"pwdForm.old_password"}})],1),a("el-form-item",{attrs:{label:"新密码"}},[a("el-input",{model:{value:e.pwdForm.new_password,callback:function(t){e.$set(e.pwdForm,"new_password",t)},expression:"pwdForm.new_password"}})],1),a("el-form-item",{attrs:{label:"再次确认新密码"}},[a("el-input",{model:{value:e.pwdForm.confirm_password,callback:function(t){e.$set(e.pwdForm,"confirm_password",t)},expression:"pwdForm.confirm_password"}})],1),a("div",{staticClass:"submit"},[a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:e.ChangePassword}},[e._v("提交")])],1)],1)],1)],1)])],1)},r=[],i=(a("b0c0"),a("365c")),o={data:function(){return{dialogUser:!1,form:{id:"",username:"",password:"",enable:"",role:"",areas_id:""},stateList:[{label:"启用",value:1},{label:"禁用",value:2}],proList:[],pro_id:"",cityList:[],city_id:"",communityList:[],community_id:"",areaList:[],areas_id:"",rolesList:[],tableData:[],dialogResetPassWord:!1,pwdForm:{new_password:"",old_password:"",confirm_password:"",id:""},dialogDel:!1,id:"",currentPage:1,totalPage:0}},mounted:function(){this.getPro(),this.getRoles(),this.getUsers()},methods:{getPro:function(){var e=this;i["a"].areas(e.currentPage,100,0).then((function(t){e.proList=t.data}))},proChange:function(e){this.getCity(e)},getCity:function(e){var t=this;i["a"].areas(t.currentPage,100,e).then((function(e){t.cityList=e.data}))},cityChange:function(e){this.getCommunity(e)},getCommunity:function(e){var t=this;i["a"].areas(t.currentPage,100,e).then((function(e){t.communityList=e.data}))},areasChange:function(e){this.getAreas(e)},communityChange:function(e){this.form.areas_id=e},getAreas:function(e){var t=this;i["a"].areas(t.currentPage,100,e).then((function(e){t.areaList=e.data}))},getRoles:function(){var e=this;i["a"].getRole(e.currentPage).then((function(t){e.rolesList=t.data}))},getUsers:function(){var e=this;i["a"].users(e.currentPage).then((function(t){e.tableData=t.data,e.totalPage=t.total}))},addUser:function(){var e=this;e.dialogUser=!0,e.form={id:"",username:"",password:"",enable:"",role:"",areas_id:""},e.pro_id="",e.city_id="",e.areas_id="",e.community_id=""},newUser:function(){var e=this;e.form.username&&e.form.password&&e.form.enable&&e.form.role&&e.form.areas_id?i["a"].user(e.form).then((function(t){e.dialogUser=!1,e.$message.success("提交成功"),e.getUsers(),e.currentPage=1,e.form={}})):e.$message.warning("请补充完整信息")},handleEdit:function(e,t){var a=this;a.dialogUser=!0,a.form.username=t.name,a.form.role=t.role,a.form.enable=t.enable,a.pro_id=t.province,a.city_id=t.city,a.areas_id=t.area,a.community_id=t.community,a.form.areas_id=t.areas_id,a.form.id=t.id},handleReset:function(e,t){var a=this;a.dialogResetPassWord=!0,a.pwdForm.id=t.id},ChangePassword:function(){var e=this;e.pwdForm.new_password===e.pwdForm.confirm_password?i["a"].resetPassword(e.pwdForm).then((function(t){e.dialogResetPassWord=!1,e.$message.success("修改成功"),e.getUsers(),e.currentPage=1,e.pwdForm={}})):e.$message.error("新密码与确认密码不一致")},handleDel:function(e,t){var a=this;a.dialogDel=!0,a.id=t.id},toDel:function(){var e=this;i["a"].delUser(e.id).then((function(t){e.$message.success("删除成功"),e.dialogDel=!1,e.getUsers(),e.currentPage=1}))},handleCurrentChange:function(e){var t=this;t.getUsers()},handleSizeChange:function(e){var t=this;i["a"].users(t.currentPage,e).then((function(e){t.tableData=e.data,t.totalPage=e.total}))}}},s=o,l=(a("9e95"),a("2877")),c=Object(l["a"])(s,n,r,!1,null,"c52787d4",null);t["default"]=c.exports},"9e95":function(e,t,a){"use strict";var n=a("6df6"),r=a.n(n);r.a}}]);
//# sourceMappingURL=chunk-dae7a9e8.98583da1.js.map