(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-cb564b1c"],{"0635":function(e,t,a){},"15b2":function(e,t,a){},"365c":function(e,t,a){"use strict";var n=a("ade3"),i=a("be3b"),s=a("99b1"),l=a.n(s),o={aip:function(e){return i["a"].post(l.a.Aip,e)},delAip:function(e){return i["a"].del(l.a.Aip,{id:e})},aips:function(e,t){return i["a"].get(l.a.Aips,{page:e,limit:t})},apk:function(e){return i["a"].post(l.a.Apk,e)},apks:function(e,t){return i["a"].get(l.a.Apks,{page:e,limit:t})},apkVersion:function(e){return i["a"].post(l.a.ApkVersion,e)},apkVersions:function(e,t,a){return i["a"].get(l.a.ApkVersions,{page:e,limit:t,apk_id:a})},_apkVersions:function(e){return i["a"].get(l.a.ApkVersions,{id:e})},publishApk:function(e){return i["a"].post(l.a.PublishApk,e)},project:function(e){return i["a"].post(l.a.Project,e)},projects:function(e,t){return i["a"].get(l.a.Projects,{page:e,limit:t})},address:function(e){return i["a"].post(l.a.Address,e)},getaddress:function(e){return i["a"].get(l.a.Address,{id:e})},delAddress:function(e){return i["a"].del(l.a.Address,{id:e})},addresses:function(e,t,a,n,s){return i["a"].get(l.a.Addresses,{page:e,limit:t,project_id:a,area_id:n,address:s})},addressTypes:function(e,t){return i["a"].get(l.a.AddressTypes,{page:e,limit:t})},addressesMap:function(e,t,a){return i["a"].get(l.a.Addresses,{page:e,limit:t,type:a})},face:function(e){return i["a"].post(l.a.Face,e)},faces:function(e,t,a){return i["a"].get(l.a.Faces,{page:e,limit:t,name:a})},delFace:function(e){return i["a"].get(l.a.DeleteFace,{id:e})},searchFace:function(e){return i["a"].post(l.a.SearchImageFace,e)},pushRecords:function(e,t,a,n){return i["a"].get(l.a.PushRecords,{page:e,limit:t,name:a,address:n})},pushRecordCommands:function(e){return i["a"].get(l.a.PushRecordCommands,{id:e})},againPush:function(e){return i["a"].post(l.a.PushRecord,e)},areas:function(e,t,a){return i["a"].get(l.a.Areas,{page:e,limit:t,parent_id:a})},area:function(e){return i["a"].post(l.a.Area,e)},device:function(e){return i["a"].post(l.a.Device,e)},_device:function(e){return i["a"].get(l.a.Device,{uuid:e})},devices:function(e,t,a,n,s,o,r,c){return i["a"].get(l.a.Devices,{page:e,limit:t,type:a,uuid:n,area_id:s,address_id:o,online:r,address:c})},_devices:function(e,t,a){return i["a"].get(l.a.Devices,{direction:e,addresses:t,limit:a})},deviceLogs:function(e,t,a,n){return i["a"].get(l.a.DeviceLogs,{page:e,limit:t,uuid:a,type:n})},deviceFaceLogs:function(e,t,a,n,s,o){return i["a"].get(l.a.DeviceRecord,{page:e,limit:t,uuid:a,search:n,area_id:s,address_id:o})},searchFaceLogs:function(e,t,a){return i["a"].get(l.a.DeviceRecord,{page:e,limit:t,faces:a})},deviceTypes:function(){return i["a"].get(l.a.DeviceTypes)},deviceHeart:function(e){return i["a"].get(l.a.DeviceHeartbeat,{uuid:e})},deviceCommands:function(e,t,a){return i["a"].get(l.a.DeviceCommands,{page:e,limit:t,uuid:a})},commandsType:function(e){return i["a"].get(l.a.Commands,{type:e})},sendDeviceCommand:function(e){return i["a"].post(l.a.SendDeviceCommand,e)},resetCommand:function(e){return i["a"].get(l.a.RestartDeviceCommands,{uuid:e})},catchFace:function(e){return i["a"].get(l.a.CatchFaces,{id:e})},deviceUserList:function(e,t,a){return i["a"].get(l.a.DeviceUserList,{page:e,limit:t,uuid:a})},upLoadDeviceImages:function(e){return i["a"].post(l.a.DevicePhotos,e)},getDeviceImages:function(e){return i["a"].get(l.a.DevicePhotos,{device_id:e})},faceGroup:function(e){return i["a"].get(l.a.FaceGroup,{address_id:e})},uuid:function(e,t){return i["a"].get(l.a.Uuid,{page:e,limit:t})},dangerFace:function(e){return i["a"].post(l.a.DangerFace,e)},importHistory:function(e,t,a){return i["a"].get(l.a.ImportTasks,{page:e,limit:t,state:a})},delDangerFace:function(e){return i["a"].del(l.a.DelDangerFace,{id:e})},dangerFaces:function(e,t){return i["a"].get(l.a.DangerFaces,{page:e,limit:t})},personVerifies:function(e,t,a,n){return i["a"].get(l.a.PersonVerifies,{page:e,limit:t,search:a,state:n})},dangerLogs:function(e,t,a,n){return i["a"].get(l.a.DangerLogs,{page:e,limit:t,danger_id:a,address:n})},alert:function(e,t,a,n,s,o,r,c,d){return i["a"].get(l.a.DangerAlerts,{page:e,limit:t,state:a,search:n,dangers:s,alert_type:o,start:r,end:c,danger_type:d})},handleAlerts:function(e){return i["a"].post(l.a.HandleAlerts,{results:e})},dangerTypes:function(){return i["a"].get(l.a.DangerTypes,{})},notifyChange:function(e){return i["a"].post(l.a.ChangeDangerFace,e)},roles:function(e,t){return i["a"].get(l.a.Roles,{page:e,limit:t})},oneRole:function(e){return i["a"].get(l.a.Role,{name:e})},role:function(e){return i["a"].post(l.a.Role,e)},users:function(e,t){return i["a"].get(l.a.Users,{page:e,limit:t})},user:function(e){return i["a"].post(l.a.User,e)},policeLevel:function(e){return i["a"].post(l.a.PoliceLevel,e)},policeLevels:function(e,t,a,n){return i["a"].get(l.a.PoliceLevels,{page:e,limit:t,level:a,parent_id:n})},policeman:function(e){return i["a"].post(l.a.Policeman,e)},policemen:function(e,t,a,n,s,o){return i["a"].get(l.a.Policemen,{page:e,limit:t,station_id:a,department_id:n,state:s,search:o})},audit:function(e){return i["a"].post(l.a.PassPoliceman,e)},delPolice:function(e){return i["a"].del(l.a.Policeman,{id:e})},screenSaver:function(e){return i["a"].post(l.a.screenSaver,e)},screenSavers:function(e,t){return i["a"].get(l.a.screenSavers,{page:e,limit:t})},delScreenSaver:function(e){return i["a"].del(l.a.screenSaver,Object(n["a"])({id:e},"id",e))},issueScreenSaver:function(e){return i["a"].post(l.a.publishScreenSavers,e)},policeStation:function(e){return i["a"].post(l.a.PoliceStation,e)},policeStations:function(e,t,a){return i["a"].get(l.a.PoliceStations,{page:e,limit:t,name:a})},getpoliceStationSTree:function(e,t,a){return i["a"].get(l.a.policeStationTree,{page:e,limit:t,name:a})},getParentPoliceStations:function(e,t,a){return i["a"].get(l.a.PoliceStations,{page:e,limit:t,parent_id:a})},onePoliceStation:function(e){return i["a"].get(l.a.PoliceStation,{id:e})},delPoliceStation:function(e){return i["a"].get(l.a.DelPoliceStation,{id:e})},information:function(e){return i["a"].post(l.a.Information,e)},informations:function(e,t,a,n){return i["a"].get(l.a.Information,{page:e,limit:t,id:a,title:n})},faceSwitch:function(e){return i["a"].post(l.a.FaceSwicth,e)},delFaceSwitch:function(e){return i["a"].del(l.a.FaceSwicth,{id:e})},faceSwitches:function(e,t){return i["a"].get(l.a.FaceSwicthes,{page:e,limit:t})},statistical:function(){return i["a"].get(l.a.Count)},currentDay:function(){return i["a"].get(l.a.CountOpenRecord)},strangerRecord:function(){return i["a"].get(l.a.CountStrangerRecord)},addressStrangerRecord:function(e){return i["a"].get(l.a.CountAddressStrangerRecord,{id:e})},searchStrangerRecord:function(e){return i["a"].get(l.a.CountStrangerRecord,{address:e})},getTransmits:function(e,t){return i["a"].get(l.a.Transmits,{page:e,limit:t})},getOfflineDevices:function(e,t){return i["a"].get(l.a.OfflineDevices,{sort:e,filter:t})}};t["a"]=o},4442:function(e,t,a){"use strict";var n=a("15b2"),i=a.n(n);i.a},"4d6e":function(e,t,a){"use strict";var n=a("0635"),i=a.n(n);i.a},"88c6":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-tabs",{on:{"tab-click":e.changeActive},model:{value:e.activeName,callback:function(t){e.activeName=t},expression:"activeName"}},[a("el-tab-pane",{attrs:{label:"用户管理",name:"user"}},[a("v-user")],1),a("el-tab-pane",{attrs:{label:"角色管理",name:"role"}},[a("v-role")],1)],1)],1)},i=[],s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],attrs:{"element-loading-text":"加载中"}},[a("div",{staticClass:"handle-box"},[a("div",{staticClass:"btn"},[a("el-button",{attrs:{type:"primary"},on:{click:e.addUser}},[e._v("添加用户")])],1)]),a("el-table",{attrs:{data:e.tableData,stripe:"",border:"","header-cell-style":{background:"#f0f0f0",color:"#003366"},"max-height":"620"}},[a("el-table-column",{attrs:{prop:"id",label:"ID"}}),a("el-table-column",{attrs:{prop:"department.title",label:"所属部门"}}),a("el-table-column",{attrs:{prop:"station.name",label:"所属辖区"}}),a("el-table-column",{attrs:{prop:"name",label:"昵称"}}),a("el-table-column",{attrs:{prop:"username",label:"账号"}}),a("el-table-column",{attrs:{prop:"role",label:"角色名"}}),a("el-table-column",{attrs:{label:"操作",width:"300px"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"text"},on:{click:function(a){return e.handleEdit(t.$index,t.row)}}},[e._v("编辑")]),a("el-button",{attrs:{type:"text"},on:{click:function(a){return e.handleReset(t.$index,t.row)}}},[e._v("重置密码")]),a("el-button",{attrs:{type:"text"},on:{click:function(a){return e.loginLogs(t.$index,t.row)}}},[e._v("登录记录")])]}}])})],1),a("el-dialog",{attrs:{visible:e.dialogDel,title:"删除角色",width:"20%",align:"center","close-on-click-modal":!1},on:{"update:visible":function(t){e.dialogDel=t}}},[a("div",{staticStyle:{"font-size":"20px","margin-bottom":"30px"}},[e._v("是否删除该账号")]),a("span",[a("el-button",{attrs:{type:"primary"},on:{click:e.toDel}},[e._v("删除")]),a("el-button",{attrs:{type:"danger"},on:{click:function(t){e.dialogDel=!1}}},[e._v("取消")])],1)]),a("div",{staticClass:"block"},[a("el-pagination",{attrs:{"current-page":e.current,"page-sizes":[10,20,50,100,150,200,250,300],"page-size":e.size,layout:"sizes, prev, pager, next, jumper",total:e.total},on:{"current-change":e.handleCurrentChange,"update:currentPage":function(t){e.current=t},"update:current-page":function(t){e.current=t},"size-change":e.handleSizeChange}})],1),a("el-dialog",{attrs:{title:"添加用户",visible:e.dialogUser,width:"60%","close-on-click-modal":!1},on:{"update:visible":function(t){e.dialogUser=t}}},[a("div",{staticClass:"box"},[a("el-form",{attrs:{model:e.form,"label-width":"80px"}},[a("el-form-item",{attrs:{label:"姓名"}},[a("el-input",{attrs:{placeholder:"请输入昵称"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),a("el-form-item",{attrs:{label:"账号"}},[a("el-input",{attrs:{placeholder:"请输入账号"},model:{value:e.form.username,callback:function(t){e.$set(e.form,"username",t)},expression:"form.username"}})],1),a("el-form-item",{attrs:{label:"输入密码"}},[a("el-input",{attrs:{placeholder:"请输入密码",type:"password"},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}})],1),a("el-form-item",{attrs:{label:"选择角色"}},[a("el-select",{attrs:{placeholder:"请选择角色"},model:{value:e.form.role,callback:function(t){e.$set(e.form,"role",t)},expression:"form.role"}},e._l(e.rolesList,(function(e){return a("el-option",{key:e.id,attrs:{label:e.name,value:e.name}})})),1)],1),a("el-form-item",{attrs:{label:"选择辖区"}},[a("el-select",{attrs:{placeholder:"请选择辖区"},model:{value:e.form.station_id,callback:function(t){e.$set(e.form,"station_id",t)},expression:"form.station_id"}},e._l(e.areaList,(function(e){return a("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})),1)],1),a("el-form-item",{attrs:{label:"选择部门"}},[a("el-select",{staticStyle:{"margin-right":"10px"},attrs:{placeholder:"请选择所属的一级部门"},on:{change:e.levelOneChange},model:{value:e.level.one,callback:function(t){e.$set(e.level,"one",t)},expression:"level.one"}},e._l(e.levelOneList,(function(e,t){return a("el-option",{key:t,attrs:{label:e.title,value:e.id}})})),1),a("el-select",{staticStyle:{"margin-right":"10px"},attrs:{placeholder:"请选择所属的一级部门"},on:{change:e.levelTwoChange},model:{value:e.level.two,callback:function(t){e.$set(e.level,"two",t)},expression:"level.two"}},e._l(e.levelTwoList,(function(e,t){return a("el-option",{key:t,attrs:{label:e.title,value:e.id}})})),1),a("el-select",{staticStyle:{"margin-right":"10px"},attrs:{placeholder:"请选择所属的一级部门"},on:{change:e.levelThreeChange},model:{value:e.level.three,callback:function(t){e.$set(e.level,"three",t)},expression:"level.three"}},e._l(e.levelThreeList,(function(e,t){return a("el-option",{key:t,attrs:{label:e.title,value:e.id}})})),1),a("el-select",{staticStyle:{"margin-right":"10px"},attrs:{placeholder:"请选择所属的一级部门"},on:{change:e.levelFourChange},model:{value:e.level.four,callback:function(t){e.$set(e.level,"four",t)},expression:"level.four"}},e._l(e.levelFourList,(function(e,t){return a("el-option",{key:t,attrs:{label:e.title,value:e.id}})})),1)],1),a("div",{staticClass:"submit"},[a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:e.newUser}},[e._v("提交")])],1)],1)],1)],1)]),a("el-dialog",{attrs:{title:"修改密码",visible:e.dialogResetPassWord,width:"500px","close-on-click-modal":!1},on:{"update:visible":function(t){e.dialogResetPassWord=t}}},[a("div",{staticClass:"box"},[a("el-form",{attrs:{model:e.pwdForm,"label-width":"120px"}},[a("el-form-item",{attrs:{label:"旧密码"}},[a("el-input",{model:{value:e.pwdForm.old_password,callback:function(t){e.$set(e.pwdForm,"old_password",t)},expression:"pwdForm.old_password"}})],1),a("el-form-item",{attrs:{label:"新密码"}},[a("el-input",{model:{value:e.pwdForm.new_password,callback:function(t){e.$set(e.pwdForm,"new_password",t)},expression:"pwdForm.new_password"}})],1),a("el-form-item",{attrs:{label:"再次确认新密码"}},[a("el-input",{model:{value:e.pwdForm.confirm_password,callback:function(t){e.$set(e.pwdForm,"confirm_password",t)},expression:"pwdForm.confirm_password"}})],1),a("div",{staticClass:"submit"},[a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:e.ChangePassword}},[e._v("提交")])],1)],1)],1)],1)]),a("el-dialog",{attrs:{title:"登录记录",visible:e.dialogLoginLogs,width:"80%","close-on-click-modal":!1},on:{"update:visible":function(t){e.dialogLoginLogs=t}}},[a("el-table",{attrs:{data:e.loginLogsTable,border:"","header-cell-style":{background:"#f0f0f0",color:"#003366"},"max-height":"620"}},[a("el-table-column",{attrs:{prop:"id",label:"ID",width:"80px"}}),a("el-table-column",{attrs:{prop:"ip",label:"ip地址"}}),a("el-table-column",{attrs:{prop:"updated_at",label:"登录时间"}}),a("el-table-column",{attrs:{prop:"device",label:"设备"}})],1),a("div",{staticClass:"block"},[a("el-pagination",{attrs:{"current-page":e.loginCurrent,"page-sizes":[10,20,50,100,150,200,250,300],"page-size":e.loginSize,layout:"sizes, prev, pager, next, jumper",total:e.loginTotal},on:{"current-change":e.loginCurrentChange,"update:currentPage":function(t){e.loginCurrent=t},"update:current-page":function(t){e.loginCurrent=t},"size-change":e.loginSizeChange}})],1)],1)],1)},l=[],o=(a("b0c0"),a("ac1f"),a("5319"),a("365c")),r=a("7ded"),c={data:function(){return{loading:!0,dialogUser:!1,form:{name:"",username:"",password:"",role:"",station_id:"",department_id:""},stateList:[{label:"启用",value:1},{label:"禁用",value:2}],rolesList:[],areaList:[],departmentList:[],levelOneList:[],levelTwoList:[],levelThreeList:[],levelFourList:[],level:{one:"",two:"",three:"",four:""},tableData:[],dialogLoginLogs:!1,loginLogsTable:[],loginCurrent:1,loginSize:10,loginTotal:0,login_id:"",dialogResetPassWord:!1,pwdForm:{new_password:"",old_password:"",confirm_password:"",id:""},dialogDel:!1,id:"",current:1,size:10,total:0}},mounted:function(){this.getAreas(),this.getRoles(),this.getUsers(),this.getLevelOne()},methods:{getAreas:function(){var e=this;o["a"].policeStations(1,1e3).then((function(t){e.areaList=t.data}))},getRoles:function(){var e=this;o["a"].roles(1,1e3).then((function(t){e.rolesList=t.data}))},getUsers:function(){var e=this;o["a"].users(1,10).then((function(t){e.loading=!1,e.tableData=t.data,e.total=t.total})).catch((function(t){e.loading=!1}))},addUser:function(){var e=this;e.dialogUser=!0,e.form={name:"",username:"",password:"",role:"",station_id:"",department_id:""},e.level={one:"",two:"",three:"",four:""}},getLevelOne:function(){var e=this;o["a"].policeLevels(1,1e3,1,1).then((function(t){e.levelOneList=t.data}))},levelOneChange:function(e){var t=this;t.form.department_id=e,o["a"].policeLevels(1,1e3,2,e).then((function(e){t.levelTwoList=e.data,t.level.two="",t.level.three="",t.level.four=""}))},levelTwoChange:function(e){var t=this;t.form.department_id=e,o["a"].policeLevels(1,1e3,3,e).then((function(e){t.levelThreeList=e.data,t.level.three="",t.level.four=""}))},levelThreeChange:function(e){var t=this;t.form.department_id=e,o["a"].policeLevels(1,1e3,4,e).then((function(e){t.levelFourList=e.data,t.level.four=""}))},levelFourChange:function(e){var t=this;t.form.department_id=e},newUser:function(){var e=this;e.form.name&&e.form.username&&e.form.password&&e.form.role&&e.form.station_id?o["a"].user(e.form).then((function(t){e.dialogUser=!1,e.$message.success("提交成功"),e.getUsers(),e.currentPage=1,e.form={}})):e.$message.warning("请补充完整信息")},handleEdit:function(e,t){var a=this;a.dialogUser=!0,a.form.name=t.name,a.form.username=t.username,a.form.role=t.role[0],a.form.station_id=t.station_id,a.form.department_id=t.department_id,a.form.id=t.id},handleReset:function(e,t){var a=this;a.dialogResetPassWord=!0,a.pwdForm.id=t.id},ChangePassword:function(){var e=this;e.pwdForm.new_password===e.pwdForm.confirm_password?r["a"].resetPassword(e.pwdForm).then((function(t){e.dialogResetPassWord=!1,e.$message.success("修改成功"),e.getUsers(),e.currentPage=1,e.pwdForm={},localStorage.removeItem("username"),window.location.reload(),e.$router.replace("/login")})):e.$message.error("新密码与确认密码不一致")},loginLogs:function(e,t){var a=this;a.dialogLoginLogs=!0,a.login_id=t.id,r["a"].loginLogs(1,10,t.id).then((function(e){a.loginLogsTable=e.data,a.loginTotal=e.total}))},handleDel:function(e,t){var a=this;a.dialogDel=!0,a.id=t.id},toDel:function(){var e=this;o["a"].delUser(e.id).then((function(t){e.$message.success("删除成功"),e.dialogDel=!1,e.getUsers(),e.currentPage=1}))},handleCurrentChange:function(e){var t=this;t.current=e,t.loading=!0,o["a"].users(e,t.size).then((function(e){t.loading=!1,t.tableData=e.data,t.total=e.total})).catch((function(e){t.loading=!1}))},handleSizeChange:function(e){var t=this;t.size=e,t.loading=!0,o["a"].users(t.current,e).then((function(e){t.loading=!1,t.tableData=e.data,t.total=e.total})).catch((function(e){t.loading=!1}))},loginCurrentChange:function(e){var t=this;t.loginCurrent=!0,r["a"].loginLogs(e,t.loginSize,t.login_id).then((function(e){t.loginLogsTable=e.data,t.loginTotal=e.total}))},loginSizeChange:function(e){var t=this;t.loginSize=!0,r["a"].loginLogs(t.loginCurrent,e,t.login_id).then((function(e){t.loginLogsTable=e.data,t.loginTotal=e.total}))}}},d=c,u=(a("4442"),a("2877")),g=Object(u["a"])(d,s,l,!1,null,"d85228d6",null),p=g.exports,h=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],attrs:{"element-loading-text":"获取数据中"}},[a("div",{staticClass:"handle-box"},[a("div",{staticClass:"btn"},[a("el-button",{attrs:{type:"primary"},on:{click:e.addRole}},[e._v("添加角色")])],1)]),a("el-table",{attrs:{data:e.tableData,border:"","header-cell-style":{background:"#f0f0f0",color:"#003366"},"max-height":"620"}},[a("el-table-column",{attrs:{prop:"id",label:"ID"}}),a("el-table-column",{attrs:{prop:"name",label:"角色名"}}),a("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(a){return e.handleEdit(t.$index,t.row)}}},[e._v("编辑权限")]),a("el-button",{attrs:{type:"danger",size:"mini"},on:{click:function(a){return e.handleDel(t.$index,t.row)}}},[e._v("删除")])]}}])})],1),a("el-dialog",{attrs:{visible:e.dialogDel,title:"删除角色",width:"20%",align:"center","close-on-click-modal":!1},on:{"update:visible":function(t){e.dialogDel=t}}},[a("div",{staticStyle:{"font-size":"20px","margin-bottom":"30px"}},[e._v("是否删除该角色")]),a("span",[a("el-button",{attrs:{type:"primary"},on:{click:e.toDel}},[e._v("删除")]),a("el-button",{attrs:{type:"danger"},on:{click:function(t){e.dialogDel=!1}}},[e._v("取消")])],1)]),a("div",{staticClass:"block"},[a("el-pagination",{attrs:{"current-page":e.current,"page-sizes":[10,20,50,100,150,200,250,300],"page-size":e.size,layout:"sizes, prev, pager, next, jumper",total:e.total},on:{"current-change":e.currentChange,"update:currentPage":function(t){e.current=t},"update:current-page":function(t){e.current=t},"size-change":e.sizeChange}})],1),a("el-dialog",{attrs:{title:"添加角色",visible:e.dialogRole,width:"90%","close-on-click-modal":!1},on:{"update:visible":function(t){e.dialogRole=t}}},[a("div",{staticClass:"box"},[a("el-form",{attrs:{model:e.form,"label-width":"120px"}},[a("el-form-item",{attrs:{label:"角色名称"}},[a("el-input",{attrs:{placeholder:"请输入角色名",disabled:e.disabledRole},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),a("el-form-item",{attrs:{label:"选择权限"}},[a("el-checkbox",{on:{change:e.AllChange},model:{value:e.checkAll,callback:function(t){e.checkAll=t},expression:"checkAll"}},[e._v("全选")]),a("div",{staticClass:"permission",staticStyle:{width:"1000px"}},[a("div",{staticClass:"table"},[a("div",{staticClass:"th",staticStyle:{width:"20%"}},[e._v("一级菜单")]),a("div",{staticClass:"th",staticStyle:{width:"20%"}},[e._v("二级菜单")]),a("div",{staticClass:"th",staticStyle:{width:"60%"}},[e._v("操作")])]),a("el-checkbox-group",{model:{value:e.form.permissions,callback:function(t){e.$set(e.form,"permissions",t)},expression:"form.permissions"}},[a("div",{staticClass:"table"},[a("div",{staticClass:"tb",staticStyle:{width:"20%"}},[a("div",{staticClass:"level1"},[a("el-checkbox",{attrs:{label:"overview"},on:{change:e.oneChange}},[a("span",{staticStyle:{"font-weight":"bold"}},[e._v("数据总览")])])],1)]),a("div",{staticClass:"tb tr",staticStyle:{width:"20%"}}),a("div",{staticClass:"tb tr",staticStyle:{width:"60%"}})]),a("div",{staticClass:"table"},[a("div",{staticClass:"tb",staticStyle:{width:"20%"}},[a("div",{staticClass:"level1"},[a("el-checkbox",{attrs:{label:"police"},on:{change:e.oneChange}},[a("span",{staticStyle:{"font-weight":"bold"}},[e._v("日常管理")])])],1)]),a("div",{staticClass:"tb tr",staticStyle:{width:"20%"}},[a("div",{staticClass:"level2"},[a("el-checkbox",{attrs:{label:"policeList"},on:{change:e.oneChange}},[e._v("警员管理")])],1),a("div",{staticClass:"level2"},[a("el-checkbox",{attrs:{label:"department"},on:{change:e.oneChange}},[e._v("部门管理")])],1),a("div",{staticClass:"level2"},[a("el-checkbox",{attrs:{label:"account"},on:{change:e.oneChange}},[e._v("账号管理")])],1),a("div",{staticClass:"level2"},[a("el-checkbox",{attrs:{label:"personVerifies"},on:{change:e.oneChange}},[e._v("证件核验")])],1),a("div",{staticClass:"level2"},[a("el-checkbox",{attrs:{label:"screenSaver"},on:{change:e.oneChange}},[e._v("屏保设置")])],1)]),a("div",{staticClass:"tb set",staticStyle:{width:"60%"}},[a("div",{staticClass:"level2"},[a("el-checkbox",{staticClass:"permission-span",attrs:{label:"policeListAdd"},on:{change:e.oneChange}},[e._v("新增")]),a("el-checkbox",{staticClass:"permission-span",attrs:{label:"policeListDel"},on:{change:e.oneChange}},[e._v("删除")]),a("el-checkbox",{staticClass:"permission-span",attrs:{label:"policeListEdit"},on:{change:e.oneChange}},[e._v("编辑")]),a("el-checkbox",{staticClass:"permission-span",attrs:{label:"policeListGet"},on:{change:e.oneChange}},[e._v("查看")])],1),a("div",{staticClass:"level2"},[a("el-checkbox",{staticClass:"permission-span",attrs:{label:"departmentGet"},on:{change:e.oneChange}},[e._v("新增")]),a("el-checkbox",{staticClass:"permission-span",attrs:{label:"departmentDel"},on:{change:e.oneChange}},[e._v("删除")]),a("el-checkbox",{staticClass:"permission-span",attrs:{label:"departmentEdit"},on:{change:e.oneChange}},[e._v("编辑")]),a("el-checkbox",{staticClass:"permission-span",attrs:{label:"departmentGet"},on:{change:e.oneChange}},[e._v("查看")])],1),a("div",{staticClass:"level2"},[e._v(" 暂无 ")]),a("div",{staticClass:"level2"},[e._v(" 暂无 ")]),a("div",{staticClass:"level2"},[e._v(" 暂无 ")])])]),a("div",{staticClass:"table"},[a("div",{staticClass:"tb",staticStyle:{width:"20%"}},[a("div",{staticClass:"level1"},[a("el-checkbox",{attrs:{label:"security"},on:{change:e.oneChange}},[a("span",{staticStyle:{"font-weight":"bold"}},[e._v("安防布控")])])],1)]),a("div",{staticClass:"tb tr",staticStyle:{width:"20%"}},[a("div",{staticClass:"level2"},[a("el-checkbox",{attrs:{label:"upload"},on:{change:e.oneChange}},[e._v("上传可疑人脸")])],1),a("div",{staticClass:"level2"},[a("el-checkbox",{attrs:{label:"search"},on:{change:e.oneChange}},[e._v("搜索人脸")])],1)]),a("div",{staticClass:"tb set",staticStyle:{width:"60%"}},[a("div",{staticClass:"level2"},[a("el-checkbox",{staticClass:"permission-span",attrs:{label:"uploadAdd"},on:{change:e.oneChange}},[e._v("新增")]),a("el-checkbox",{staticClass:"permission-span",attrs:{label:"uploadGet"},on:{change:e.oneChange}},[e._v("查看")])],1),a("div",{staticClass:"level2"},[a("el-checkbox",{staticClass:"permission-span",attrs:{label:"searchGet"},on:{change:e.oneChange}},[e._v("查看")])],1)])]),a("div",{staticClass:"table"},[a("div",{staticClass:"tb",staticStyle:{width:"20%"}},[a("div",{staticClass:"level1"},[a("el-checkbox",{attrs:{label:"device"},on:{change:e.oneChange}},[a("span",{staticStyle:{"font-weight":"bold"}},[e._v("设备管理")])])],1)]),a("div",{staticClass:"tb tr",staticStyle:{width:"20%"}},[a("div",{staticClass:"level2"},[a("el-checkbox",{attrs:{label:"deviceList"},on:{change:e.oneChange}},[e._v("设备列表")])],1)]),a("div",{staticClass:"tb set",staticStyle:{width:"60%"}},[a("div",{staticClass:"level2"},[a("el-checkbox",{staticClass:"permission-span",attrs:{label:"deviceGetStation"},on:{change:e.oneChange}},[e._v("查看本辖区")])],1)])]),a("div",{staticClass:"table"},[a("div",{staticClass:"tb",staticStyle:{width:"20%"}},[a("div",{staticClass:"level1"},[a("el-checkbox",{attrs:{label:"address"},on:{change:e.oneChange}},[a("span",{staticStyle:{"font-weight":"bold"}},[e._v("地址管理")])])],1)]),a("div",{staticClass:"tb tr",staticStyle:{width:"20%"}},[a("div",{staticClass:"level2"},[a("el-checkbox",{attrs:{label:"addressList"},on:{change:e.oneChange}},[e._v("地址列表")])],1),a("div",{staticClass:"level2"},[a("el-checkbox",{attrs:{label:"areas"},on:{change:e.oneChange}},[e._v("地区管理")])],1)]),a("div",{staticClass:"tb set",staticStyle:{width:"60%"}},[a("div",{staticClass:"level2"},[a("el-checkbox",{staticClass:"permission-span",attrs:{label:"addressAdd"},on:{change:e.oneChange}},[e._v("新增")]),a("el-checkbox",{staticClass:"permission-span",attrs:{label:"addressDel"},on:{change:e.oneChange}},[e._v("删除")]),a("el-checkbox",{staticClass:"permission-span",attrs:{label:"addressGet"},on:{change:e.oneChange}},[e._v("查看")])],1),a("div",{staticClass:"level2"},[a("el-checkbox",{staticClass:"permission-span",attrs:{label:"areasAdd"},on:{change:e.oneChange}},[e._v("新增")]),a("el-checkbox",{staticClass:"permission-span",attrs:{label:"areasDel"},on:{change:e.oneChange}},[e._v("删除")]),a("el-checkbox",{staticClass:"permission-span",attrs:{label:"areasGet"},on:{change:e.oneChange}},[e._v("查看")])],1)])]),a("div",{staticClass:"table"},[a("div",{staticClass:"tb",staticStyle:{width:"20%"}},[a("div",{staticClass:"level1"},[a("el-checkbox",{attrs:{label:"danger"},on:{change:e.oneChange}},[a("span",{staticStyle:{"font-weight":"bold"}},[e._v("可疑管理")])])],1)]),a("div",{staticClass:"tb tr",staticStyle:{width:"20%"}},[a("div",{staticClass:"level2"},[a("el-checkbox",{attrs:{label:"doubtable"},on:{change:e.oneChange}},[e._v("可疑人脸")])],1),a("div",{staticClass:"level2"},[a("el-checkbox",{attrs:{label:"dangerlogs"},on:{change:e.oneChange}},[e._v("可疑日志")])],1)]),a("div",{staticClass:"tb set",staticStyle:{width:"60%"}},[a("div",{staticClass:"level2"},[a("el-checkbox",{staticClass:"permission-span",attrs:{label:"dangerAdd"},on:{change:e.oneChange}},[e._v("新增")]),a("el-checkbox",{staticClass:"permission-span",attrs:{label:"dangerDel"},on:{change:e.oneChange}},[e._v("删除")]),a("el-checkbox",{staticClass:"permission-span",attrs:{label:"dangerGet"},on:{change:e.oneChange}},[e._v("查看")])],1),a("div",{staticClass:"level2"},[a("el-checkbox",{staticClass:"permission-span",attrs:{label:"dangerLogDel"},on:{change:e.oneChange}},[e._v("删除")]),a("el-checkbox",{staticClass:"permission-span",attrs:{label:"dangerLogGet"},on:{change:e.oneChange}},[e._v("查看所有")]),a("el-checkbox",{staticClass:"permission-span",attrs:{label:"dangerLogGetStation"},on:{change:e.oneChange}},[e._v("查看本辖区")])],1)])]),a("div",{staticClass:"table"},[a("div",{staticClass:"tb",staticStyle:{width:"20%"}},[a("el-checkbox",{attrs:{label:"outInLogs"},on:{change:e.oneChange}},[a("span",{staticStyle:{"font-weight":"bold"}},[e._v("进出记录管理")])])],1),a("div",{staticClass:"tb tr",staticStyle:{width:"20%"}}),a("div",{staticClass:"tb set",staticStyle:{width:"60%"}})]),a("div",{staticClass:"table"},[a("div",{staticClass:"tb",staticStyle:{width:"20%"}},[a("el-checkbox",{attrs:{label:"alert"},on:{change:e.oneChange}},[a("span",{staticStyle:{"font-weight":"bold"}},[e._v("告警处理")])])],1),a("div",{staticClass:"tb tr",staticStyle:{width:"20%"}}),a("div",{staticClass:"tb set",staticStyle:{width:"60%"}})]),a("div",{staticClass:"table"},[a("div",{staticClass:"tb",staticStyle:{width:"20%"}},[a("div",{staticClass:"level1"},[a("el-checkbox",{attrs:{label:"area"},on:{change:e.oneChange}},[a("span",{staticStyle:{"font-weight":"bold"}},[e._v("辖区管理")])])],1)]),a("div",{staticClass:"tb tr",staticStyle:{width:"20%"}},[a("div",{staticClass:"level2"},[a("el-checkbox",{attrs:{label:"areaList"},on:{change:e.oneChange}},[e._v("辖区列表")])],1)]),a("div",{staticClass:"tb set",staticStyle:{width:"60%"}})])])],1)],1),a("div",{staticClass:"submit"},[a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:e.newRole}},[e._v("提交")])],1)],1)],1)],1)])],1)},v=[],m={data:function(){return{username:localStorage.getItem("username"),loading:!0,dialogRole:!1,form:{name:"",permissions:[]},stateList:[{label:"启用",value:1},{label:"禁用",value:0}],tableData:[],checkAll:!1,permissionList:["overview","address","addressList","areas","addressAdd","addressGet","addressDel","areasAdd","areasGet","areasDel","device","deviceList","deviceGetStation","danger","doubtable","dangerlogs","dangerAdd","dangerDel","dangerGet","dangerLogGet","dangerLogDel","dangerLogGetStation","police","policeList","department","account","policeListAdd","policeListGet","policeListEdit","policeListDel","departmentAdd","departmentGet","departmentEdit","departmentDel","personVerifies","screenSaver","security","upload","search","uploadAdd","uploadGet","searchGet","statistical","data","generate","outInLogs","area","areaList","alert"],dialogDel:!1,id:"",disabledRole:!1,current:1,size:10,total:0}},mounted:function(){this.getRoles()},methods:{addRole:function(){var e=this;e.dialogRole=!0,e.form={name:"",permissions:[]},e.disabledRole=!1,e.checkAll=!0,!0===e.checkAll&&(e.form.permissions=e.checkAll?e.permissionList:[],console.log(e.form.permissions))},getRoles:function(){var e=this;o["a"].roles(e.current).then((function(t){e.loading=!1,e.tableData=t.data,e.total=t.total})).catch((function(t){e.loading=!1}))},newRole:function(){var e=this;o["a"].role(e.form).then((function(t){e.dialogRole=!1,e.$message.success("提交成功"),e.getRoles(),e.currentPage=1,e.form={},e.form.permissions=[],window.location.reload()}))},handleEdit:function(e,t){var a=this;a.dialogRole=!0,a.disabledRole=!0,o["a"].oneRole(t.name).then((function(e){a.form=e,a.checkAll=e.permissions.length>=a.permissionList.length}))},AllChange:function(e){var t=this;t.form.permissions=e?t.permissionList:[]},oneChange:function(e){var t=this;console.log(t.form.permissions),t.checkAll=t.form.permissions.length>=t.permissionList.length},handleDel:function(e,t){var a=this;a.dialogDel=!0,a.id=t.id},toDel:function(){var e=this;o["a"].delRole(e.id).then((function(t){e.$message.success("删除成功"),e.dialogDel=!1,e.getRoles(),e.currentPage=1}))},currentChange:function(e){var t=this;t.loading=!0,t.current=e,o["a"].roles(e,t.size).then((function(e){t.loading=!1,t.tableData=e.data,t.total=e.total})).catch((function(e){t.loading=!1}))},sizeChange:function(e){var t=this;t.loading=!0,t.size=e,o["a"].roles(t.current,e).then((function(e){t.loading=!1,t.tableData=e.data,t.total=e.total})).catch((function(e){t.loading=!1}))}}},f=m,b=(a("4d6e"),Object(u["a"])(f,h,v,!1,null,"7691c704",null)),C=b.exports,_={name:"student",components:{vUser:p,vRole:C},data:function(){return{activeName:"user"}},methods:{changeActive:function(){this.activeName,"more"===this.activeName&&console.log(111)}}},w=_,k=Object(u["a"])(w,n,i,!1,null,null,null);t["default"]=k.exports}}]);