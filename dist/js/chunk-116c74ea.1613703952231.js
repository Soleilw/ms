(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-116c74ea","chunk-2d225891"],{"0ac0":function(e,t,a){},"365c":function(e,t,a){"use strict";var n=a("ade3"),i=a("be3b"),r=a("99b1"),o=a.n(r),l={aip:function(e){return i["a"].post(o.a.Aip,e)},delAip:function(e){return i["a"].del(o.a.Aip,{id:e})},aips:function(e,t){return i["a"].get(o.a.Aips,{page:e,limit:t})},apk:function(e){return i["a"].post(o.a.Apk,e)},apks:function(e,t){return i["a"].get(o.a.Apks,{page:e,limit:t})},apkVersion:function(e){return i["a"].post(o.a.ApkVersion,e)},apkVersions:function(e,t,a){return i["a"].get(o.a.ApkVersions,{page:e,limit:t,apk_id:a})},_apkVersions:function(e){return i["a"].get(o.a.ApkVersions,{id:e})},publishApk:function(e){return i["a"].post(o.a.PublishApk,e)},project:function(e){return i["a"].post(o.a.Project,e)},projects:function(e,t){return i["a"].get(o.a.Projects,{page:e,limit:t})},address:function(e){return i["a"].post(o.a.Address,e)},getaddress:function(e){return i["a"].get(o.a.Address,{id:e})},addresses:function(e,t,a,n,r){return i["a"].get(o.a.Addresses,{page:e,limit:t,project_id:a,area_id:n,address:r})},addressTypes:function(e,t){return i["a"].get(o.a.AddressTypes,{page:e,limit:t})},addressesMap:function(e,t,a){return i["a"].get(o.a.Addresses,{page:e,limit:t,type:a})},face:function(e){return i["a"].post(o.a.Face,e)},faces:function(e,t,a){return i["a"].get(o.a.Faces,{page:e,limit:t,name:a})},delFace:function(e){return i["a"].get(o.a.DeleteFace,{id:e})},searchFace:function(e){return i["a"].post(o.a.SearchImageFace,e)},pushRecords:function(e,t,a,n){return i["a"].get(o.a.PushRecords,{page:e,limit:t,name:a,address:n})},pushRecordCommands:function(e){return i["a"].get(o.a.PushRecordCommands,{id:e})},againPush:function(e){return i["a"].post(o.a.PushRecord,e)},areas:function(e,t,a){return i["a"].get(o.a.Areas,{page:e,limit:t,parent_id:a})},area:function(e){return i["a"].post(o.a.Area,e)},device:function(e){return i["a"].post(o.a.Device,e)},_device:function(e){return i["a"].get(o.a.Device,{uuid:e})},devices:function(e,t,a,n,r,l,c,s){return i["a"].get(o.a.Devices,{page:e,limit:t,type:a,uuid:n,area_id:r,address_id:l,online:c,address:s})},_devices:function(e,t,a){return i["a"].get(o.a.Devices,{direction:e,addresses:t,limit:a})},deviceLogs:function(e,t,a,n){return i["a"].get(o.a.DeviceLogs,{page:e,limit:t,uuid:a,type:n})},deviceFaceLogs:function(e,t,a,n,r,l){return i["a"].get(o.a.DeviceRecord,{page:e,limit:t,uuid:a,search:n,area_id:r,address_id:l})},searchFaceLogs:function(e,t,a){return i["a"].get(o.a.DeviceRecord,{page:e,limit:t,faces:a})},deviceTypes:function(){return i["a"].get(o.a.DeviceTypes)},deviceHeart:function(e){return i["a"].get(o.a.DeviceHeartbeat,{uuid:e})},deviceCommands:function(e,t,a){return i["a"].get(o.a.DeviceCommands,{page:e,limit:t,uuid:a})},commandsType:function(e){return i["a"].get(o.a.Commands,{type:e})},sendDeviceCommand:function(e){return i["a"].post(o.a.SendDeviceCommand,e)},resetCommand:function(e){return i["a"].get(o.a.RestartDeviceCommands,{uuid:e})},catchFace:function(e){return i["a"].get(o.a.CatchFaces,{id:e})},deviceUserList:function(e,t,a){return i["a"].get(o.a.DeviceUserList,{page:e,limit:t,uuid:a})},faceGroup:function(e){return i["a"].get(o.a.FaceGroup,{address_id:e})},uuid:function(e,t){return i["a"].get(o.a.Uuid,{page:e,limit:t})},dangerFace:function(e){return i["a"].post(o.a.DangerFace,e)},importHistory:function(e,t,a){return i["a"].get(o.a.ImportTasks,{page:e,limit:t,state:a})},delDangerFace:function(e){return i["a"].del(o.a.DelDangerFace,{id:e})},dangerFaces:function(e,t){return i["a"].get(o.a.DangerFaces,{page:e,limit:t})},personVerifies:function(e,t,a,n){return i["a"].get(o.a.PersonVerifies,{page:e,limit:t,search:a,state:n})},dangerLogs:function(e,t,a,n){return i["a"].get(o.a.DangerLogs,{page:e,limit:t,danger_id:a,address:n})},alert:function(e,t,a,n,r,l,c,s,u){return i["a"].get(o.a.DangerAlerts,{page:e,limit:t,state:a,search:n,dangers:r,alert_type:l,start:c,end:s,danger_type:u})},handleAlerts:function(e){return i["a"].post(o.a.HandleAlerts,{results:e})},dangerTypes:function(){return i["a"].get(o.a.DangerTypes,{})},notifyChange:function(e){return i["a"].post(o.a.ChangeDangerFace,e)},roles:function(e,t){return i["a"].get(o.a.Roles,{page:e,limit:t})},oneRole:function(e){return i["a"].get(o.a.Role,{name:e})},role:function(e){return i["a"].post(o.a.Role,e)},users:function(e,t){return i["a"].get(o.a.Users,{page:e,limit:t})},user:function(e){return i["a"].post(o.a.User,e)},policeLevel:function(e){return i["a"].post(o.a.PoliceLevel,e)},policeLevels:function(e,t,a,n){return i["a"].get(o.a.PoliceLevels,{page:e,limit:t,level:a,parent_id:n})},policeman:function(e){return i["a"].post(o.a.Policeman,e)},policemen:function(e,t,a,n,r,l){return i["a"].get(o.a.Policemen,{page:e,limit:t,station_id:a,department_id:n,state:r,search:l})},audit:function(e){return i["a"].post(o.a.PassPoliceman,e)},delPolice:function(e){return i["a"].del(o.a.Policeman,{id:e})},screenSaver:function(e){return i["a"].post(o.a.screenSaver,e)},screenSavers:function(e,t){return i["a"].get(o.a.screenSavers,{page:e,limit:t})},delScreenSaver:function(e){return i["a"].del(o.a.screenSaver,Object(n["a"])({id:e},"id",e))},issueScreenSaver:function(e){return i["a"].post(o.a.publishScreenSavers,e)},policeStation:function(e){return i["a"].post(o.a.PoliceStation,e)},policeStations:function(e,t,a){return i["a"].get(o.a.PoliceStations,{page:e,limit:t,name:a})},information:function(e){return i["a"].post(o.a.Information,e)},informations:function(e,t,a,n){return i["a"].get(o.a.Information,{page:e,limit:t,id:a,title:n})},faceSwitch:function(e){return i["a"].post(o.a.FaceSwicth,e)},delFaceSwitch:function(e){return i["a"].del(o.a.FaceSwicth,{id:e})},faceSwitches:function(e,t){return i["a"].get(o.a.FaceSwicthes,{page:e,limit:t})},statistical:function(){return i["a"].get(o.a.Count)},currentDay:function(){return i["a"].get(o.a.CountOpenRecord)},strangerRecord:function(){return i["a"].get(o.a.CountStrangerRecord)},addressStrangerRecord:function(e){return i["a"].get(o.a.CountAddressStrangerRecord,{id:e})},searchStrangerRecord:function(e){return i["a"].get(o.a.CountStrangerRecord,{address:e})},getTransmits:function(){return i["a"].get(o.a.Transmits)}};t["a"]=l},"3c84":function(e,t,a){"use strict";var n=a("0ac0"),i=a.n(n);i.a},4585:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],attrs:{"element-loading-text":"加载中"}},[a("div",{staticClass:"content-box"},[a("div",{staticClass:"content-box-left",staticStyle:{width:"15%"}},[a("div",{staticClass:"btn"},[a("el-button",{attrs:{type:"primary"},on:{click:e.addPolice}},[e._v("添加警员")])],1),e._m(0),a("div",{staticClass:"btn"},[a("el-select",{attrs:{placeholder:"请选择审核状态"},on:{change:e.changeAudit},model:{value:e.auditState,callback:function(t){e.auditState=t},expression:"auditState"}},e._l(e.auditList,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),e._m(1),a("div",{staticClass:"btn"},[a("el-select",{attrs:{placeholder:"请选择辖区"},on:{change:e.changeArea},model:{value:e.station,callback:function(t){e.station=t},expression:"station"}},e._l(e.areaList,(function(e,t){return a("el-option",{key:t,attrs:{label:e.name,value:e.id}})})),1)],1),e._m(2),a("div",{staticClass:"btn"},[a("el-select",{staticStyle:{"margin-right":"10px"},attrs:{placeholder:"请选择所属的一级部门"},on:{change:e.ChangeLevelOne},model:{value:e.department_one,callback:function(t){e.department_one=t},expression:"department_one"}},e._l(e.levelOneList,(function(e,t){return a("el-option",{key:t,attrs:{label:e.title,value:e.id}})})),1)],1),a("div",{staticClass:"btn"},[a("el-select",{staticStyle:{"margin-right":"10px"},attrs:{placeholder:"请选择所属的二级部门"},on:{change:e.ChangeLevelTwo},model:{value:e.department_two,callback:function(t){e.department_two=t},expression:"department_two"}},e._l(e.levelTwoList,(function(e,t){return a("el-option",{key:t,attrs:{label:e.title,value:e.id}})})),1)],1),a("div",{staticClass:"btn"},[a("el-select",{staticStyle:{"margin-right":"10px"},attrs:{placeholder:"请选择所属的三级部门"},on:{change:e.ChangeLevelThree},model:{value:e.department_three,callback:function(t){e.department_three=t},expression:"department_three"}},e._l(e.levelThreeList,(function(e,t){return a("el-option",{key:t,attrs:{label:e.title,value:e.id}})})),1)],1),a("div",{staticClass:"btn"},[a("el-select",{staticStyle:{"margin-right":"10px"},attrs:{placeholder:"请选择所属的四级部门"},on:{change:e.ChangeLevelFour},model:{value:e.department_four,callback:function(t){e.department_four=t},expression:"department_four"}},e._l(e.levelFourList,(function(e,t){return a("el-option",{key:t,attrs:{label:e.title,value:e.id}})})),1)],1),a("div",{staticClass:"btn"},[a("el-button",{attrs:{type:"primary"},on:{click:e.resetSelect}},[e._v("重新筛选")])],1)]),a("div",{staticClass:"content-box-right",staticStyle:{width:"84%"}},[a("el-table",{attrs:{data:e.tableData,stripe:"",border:"","header-cell-style":{background:"#f0f0f0",color:"#003366"},"max-height":"750"}},[a("el-table-column",{attrs:{prop:"station.name",label:"所属辖区"}}),a("el-table-column",{attrs:{prop:"department.title",label:"所属部门"}}),a("el-table-column",{attrs:{prop:"name",label:"姓名"}}),a("el-table-column",{attrs:{prop:"phone",label:"手机号",width:"200px"}}),a("el-table-column",{attrs:{prop:"id_card",label:"身份证号",width:"200px"}}),a("el-table-column",{attrs:{prop:"number",label:"工号"}}),a("el-table-column",{attrs:{prop:"state",label:"审核状态"},scopedSlots:e._u([{key:"default",fn:function(t){return[1==t.row.state?a("span",[e._v("待审核")]):e._e(),2==t.row.state?a("span",{staticStyle:{color:"green"}},[e._v("已通过")]):e._e(),3==t.row.state?a("span",{staticStyle:{color:"red"}},[e._v("未通过")]):e._e()]}}])}),a("el-table-column",{attrs:{prop:"face_image",label:"人脸照片"},scopedSlots:e._u([{key:"default",fn:function(e){return[a("el-popover",{attrs:{placement:"top-start",title:"",trigger:"click"}},[a("img",{staticStyle:{"max-width":"800px","max-height":"800px"},attrs:{src:e.row.face_image}}),a("img",{staticStyle:{"max-width":"150px","max-height":"80px"},attrs:{slot:"reference",src:e.row.face_image},slot:"reference"})])]}}])}),a("el-table-column",{attrs:{label:"操作",width:"200px",fixed:"right"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"text"},on:{click:function(a){return e.handleEdit(t.$index,t.row)}}},[e._v("编辑")]),1==t.row.state?a("el-button",{attrs:{type:"text"},on:{click:function(a){return e.handleAudit(t.$index,t.row)}}},[e._v("审核")]):e._e(),a("el-popconfirm",{staticStyle:{"margin-left":"10px"},attrs:{title:"是否要删除该警员信息",cancelButtonType:"primary"},on:{confirm:function(a){return e.handleDel(t.$index,t.row)}}},[a("el-button",{attrs:{slot:"reference",type:"text"},slot:"reference"},[e._v("删除")])],1)]}}])})],1),a("div",{staticClass:"block"},[a("el-pagination",{attrs:{"current-page":e.current,"page-sizes":[10,20,50,100,150,200,250,300],"page-size":e.size,layout:"sizes, prev, pager, next, jumper",total:e.total},on:{"current-change":e.handleCurrentChange,"update:currentPage":function(t){e.current=t},"update:current-page":function(t){e.current=t},"size-change":e.handleSizeChange}})],1)],1)]),a("el-dialog",{attrs:{visible:e.dialogAudit,title:"审核",width:"20%",align:"center"},on:{"update:visible":function(t){e.dialogAudit=t}}},[a("div",{staticStyle:{"font-size":"20px","margin-bottom":"30px"}},[e._v("是否通过审核")]),a("span",[a("el-button",{attrs:{type:"primary"},on:{click:e.toAudit}},[e._v("通过")]),a("el-button",{attrs:{type:"danger"},on:{click:e.unAudit}},[e._v("不通过")])],1)]),a("el-dialog",{attrs:{title:"添加警员",visible:e.dialogPolice,width:"60%","close-on-click-modal":!1},on:{"update:visible":function(t){e.dialogPolice=t},close:e.clearForm}},[a("div",{staticClass:"box"},[a("el-form",{attrs:{model:e.form,"label-width":"80px"}},[a("el-form-item",{attrs:{label:"姓名"}},[a("el-input",{attrs:{placeholder:"请输入姓名"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),a("el-form-item",{attrs:{label:"手机号"}},[a("el-input",{attrs:{placeholder:"请输入手机号"},model:{value:e.form.phone,callback:function(t){e.$set(e.form,"phone",t)},expression:"form.phone"}})],1),a("el-form-item",{attrs:{label:"身份证号"}},[a("el-input",{attrs:{placeholder:"请输入身份证号"},model:{value:e.form.id_card,callback:function(t){e.$set(e.form,"id_card",t)},expression:"form.id_card"}})],1),a("el-form-item",{attrs:{label:"选择辖区"}},[a("el-select",{attrs:{placeholder:"请选择辖区"},model:{value:e.form.station_id,callback:function(t){e.$set(e.form,"station_id",t)},expression:"form.station_id"}},e._l(e.areaList,(function(e){return a("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})),1)],1),a("el-form-item",{attrs:{label:"选择部门"}},[a("el-select",{staticStyle:{"margin-right":"10px"},attrs:{placeholder:"请选择所属的一级部门"},on:{change:e.levelOneChange},model:{value:e.level.one,callback:function(t){e.$set(e.level,"one",t)},expression:"level.one"}},e._l(e.levelOneList,(function(e,t){return a("el-option",{key:t,attrs:{label:e.title,value:e.id}})})),1),a("el-select",{staticStyle:{"margin-right":"10px"},attrs:{placeholder:"请选择所属的二级部门"},on:{change:e.levelTwoChange},model:{value:e.level.two,callback:function(t){e.$set(e.level,"two",t)},expression:"level.two"}},e._l(e.levelTwoList,(function(e,t){return a("el-option",{key:t,attrs:{label:e.title,value:e.id}})})),1),a("el-select",{staticStyle:{"margin-right":"10px"},attrs:{placeholder:"请选择所属的三级部门"},on:{change:e.levelThreeChange},model:{value:e.level.three,callback:function(t){e.$set(e.level,"three",t)},expression:"level.three"}},e._l(e.levelThreeList,(function(e,t){return a("el-option",{key:t,attrs:{label:e.title,value:e.id}})})),1),a("el-select",{staticStyle:{"margin-right":"10px"},attrs:{placeholder:"请选择所属的四级部门"},on:{change:e.levelFourChange},model:{value:e.level.four,callback:function(t){e.$set(e.level,"four",t)},expression:"level.four"}},e._l(e.levelFourList,(function(e,t){return a("el-option",{key:t,attrs:{label:e.title,value:e.id}})})),1)],1),a("el-form-item",{attrs:{label:"工号"}},[a("el-input",{attrs:{placeholder:"请输入工号"},model:{value:e.form.number,callback:function(t){e.$set(e.form,"number",t)},expression:"form.number"}})],1),a("el-form-item",{attrs:{label:"上传人脸"}},[a("div",{staticStyle:{display:"flex"}},[e.form.face_image?a("el-image",{staticStyle:{margin:"0 10px","max-width":"150px","max-height":"150px"},attrs:{src:e.form.face_image}}):e._e(),a("el-upload",{ref:"upload",attrs:{action:"https://upload-z2.qiniup.com",limit:1,"before-upload":e.beforeUpload,"auto-upload":!1,"on-success":e.successUpload,"on-exceed":e.handleExceed,data:e.imgData,"list-type":"picture-card"}},[e.form.face_image?a("el-button",{attrs:{size:"small",type:"primary"}},[e._v("更改照片")]):a("el-button",{attrs:{size:"small",type:"primary"}},[e._v("上传照片")])],1)],1)]),a("div",{staticClass:"submit"},[a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:e.newPolice}},[e._v("提交")])],1)],1)],1)],1)])],1)},i=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"btn"},[a("div",{staticClass:"tip"},[e._v("根据状态筛选：")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"btn"},[a("div",{staticClass:"tip"},[e._v("根据辖区筛选：")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"btn"},[a("div",{staticClass:"tip"},[e._v("根据部门筛选：")])])}],r=(a("99af"),a("baa5"),a("b0c0"),a("8d81")),o=a.n(r),l=a("bc3a"),c=a.n(l),s=a("365c"),u={data:function(){return{loading:!0,dialogPolice:!1,imgData:{key:"",token:""},fileName:"",suffix:"",qiniuaddr:"https://tu.fengniaotuangou.cn",areaList:[],departmentList:[],levelOneList:[],levelTwoList:[],levelThreeList:[],levelFourList:[],level:{one:"",two:"",three:"",four:""},form:{name:"",phone:"",id_card:"",number:"",station_id:"",department_id:"",face_image:""},auditList:[{value:0,label:"全部"},{value:1,label:"待审核"},{value:2,label:"已通过"},{value:3,label:"未通过"}],auditState:"",station:"",tableData:[{}],dialogAudit:!1,police_id:"",department:"",department_one:"",department_two:"",department_three:"",department_four:"",dialogDel:!1,id:"",current:1,size:10,total:0}},mounted:function(){var e=this;this.getPolice(),this.getLevelOne(),this.getQiniuToken(),s["a"].policeStations(1,100).then((function(t){e.areaList=t.data}))},methods:{getPolice:function(){var e=this;s["a"].policemen(1,10).then((function(t){e.loading=!1,e.tableData=t.data,e.total=t.total})).catch((function(t){e.loading=!1}))},changeAudit:function(e){var t=this;t.loading=!0,s["a"].policemen(1,10,t.station,t.department,e).then((function(e){t.loading=!1,t.tableData=e.data,t.total=e.total})).catch((function(e){t.loading=!1}))},changeArea:function(e){var t=this;t.loading=!0,s["a"].policemen(1,10,e,t.department,t.auditState).then((function(e){t.loading=!1,t.tableData=e.data,t.total=e.total})).catch((function(e){t.loading=!1}))},ChangeLevelOne:function(e){var t=this;t.department=e,t.loading=!0,s["a"].policemen(1,10,t.station,e,t.auditState).then((function(e){t.loading=!1,t.tableData=e.data,t.total=e.total})).catch((function(e){t.loading=!1})),s["a"].policeLevels(1,10,2,e).then((function(e){t.levelTwoList=e.data,t.department_two="",t.department_three="",t.department_four=""}))},ChangeLevelTwo:function(e){var t=this;t.department=e,s["a"].policemen(1,10,t.station,e,t.auditState).then((function(e){t.tableData=e.data})),s["a"].policeLevels(1,10,3,e).then((function(e){t.levelThreeList=e.data,t.department_three="",t.department_four=""}))},ChangeLevelThree:function(e){var t=this;t.department=e,s["a"].policemen(1,10,t.station,e,t.auditState).then((function(e){t.tableData=e.data})),s["a"].policeLevels(1,10,4,e).then((function(e){t.levelFourList=e.data,t.department_four=""}))},ChangeLevelFour:function(e){var t=this;t.department=e,s["a"].policemen(1,10,t.station,e,t.auditState).then((function(e){t.tableData=e.data}))},resetSelect:function(){window.location.reload()},addPolice:function(){var e=this;e.dialogPolice=!0,e.form={name:"",phone:"",id_card:"",number:"",station_id:"",department_id:"",face_image:"",password:"123456"},e.level={one:"",two:"",three:"",four:""}},getLevelOne:function(){var e=this;s["a"].policeLevels(1,10,1,1).then((function(t){e.levelOneList=t.data}))},levelOneChange:function(e){var t=this;t.form.department_id=e,s["a"].policeLevels(1,10,2,e).then((function(e){t.levelTwoList=e.data,t.level.two="",t.level.three="",t.level.four=""}))},levelTwoChange:function(e){var t=this;t.form.department_id=e,s["a"].policeLevels(1,10,3,e).then((function(e){t.levelThreeList=e.data,t.level.three="",t.level.four=""}))},levelThreeChange:function(e){var t=this;t.form.department_id=e,s["a"].policeLevels(1,10,4,e).then((function(e){t.levelFourList=e.data,t.level.four=""}))},levelFourChange:function(e){var t=this;t.form.department_id=e},beforeUpload:function(e,t){var a=this;console.log(e,t),a.fileName=o()(e.name),a.suffix=e.name.substring(e.name.lastIndexOf(".")+1),a.imgData.key="tmp_".concat(a.fileName,".").concat(a.suffix)},successUpload:function(e,t){var a=this;t.url="".concat(a.qiniuaddr,"/").concat(e.key),a.form.face_image=t.url,s["a"].policeman(a.form).then((function(e){a.$message.success("提交成功"),a.dialogPolice=!1,a.form={},a.$refs.upload.clearFiles(),a.getPolice()}))},newPolice:function(){this.$refs.upload.submit()},handleExceed:function(e,t){var a=this;a.$message.error("上传图片不能超过1张!重新上传"),a.$refs.upload.clearFiles(),a.form.href="",a.imgData.key=""},handleEdit:function(e,t){var a=this;s["a"].policeStations(1).then((function(e){a.areaList=e.data})),this.getLevelOne(),a.dialogPolice=!0,a.form={id:t.id,name:t.name,phone:t.phone,id_card:t.id_card,number:t.number,station_id:t.station_id,department_id:t.department_id,face_image:t.face_image,password:"123456"}},handleDel:function(e,t){var a=this;console.log(t);var n=t.id;s["a"].delPolice(n).then((function(e){a.$message.success("删除成功"),a.getPolice(),a.current=1})).catch((function(e){a.loading=!1}))},clearForm:function(){this.$refs.upload.clearFiles()},getQiniuToken:function(){var e=this;c.a.get("https://api.fengniaotuangou.cn/api/upload/token").then((function(t){e.imgData.token=t.data.uptoken}))},handleAudit:function(e,t){var a=this;a.police_id=t.id,console.log(a.police_id),a.dialogAudit=!0},toAudit:function(){var e=this,t={state:2,id:e.police_id};s["a"].audit(t).then((function(t){e.dialogAudit=!1,e.$message.success("提交成功"),e.getPolice()}))},unAudit:function(){var e=this,t={state:3,id:e.police_id};s["a"].audit(t).then((function(t){e.dialogAudit=!1,e.$message.success("提交成功"),e.getPolice()}))},handleCurrentChange:function(e){var t=this;t.current=e,t.loading=!0,s["a"].policemen(e,t.size,t.station,t.department,t.auditState).then((function(e){t.loading=!1,t.tableData=e.data,t.total=e.total})).catch((function(e){t.loading=!1}))},handleSizeChange:function(e){var t=this;t.size=e,t.loading=!0,s["a"].policemen(t.current,e,t.station,t.department,t.auditState).then((function(e){t.loading=!1,t.tableData=e.data,t.total=e.total})).catch((function(e){t.loading=!1}))}}},d=u,p=(a("3c84"),a("2877")),f=Object(p["a"])(d,n,i,!1,null,"ed05cb9c",null);t["default"]=f.exports},"8d81":function(e,t,a){var n;(function(i){"use strict";function r(e,t){var a=(65535&e)+(65535&t),n=(e>>16)+(t>>16)+(a>>16);return n<<16|65535&a}function o(e,t){return e<<t|e>>>32-t}function l(e,t,a,n,i,l){return r(o(r(r(t,e),r(n,l)),i),a)}function c(e,t,a,n,i,r,o){return l(t&a|~t&n,e,t,i,r,o)}function s(e,t,a,n,i,r,o){return l(t&n|a&~n,e,t,i,r,o)}function u(e,t,a,n,i,r,o){return l(t^a^n,e,t,i,r,o)}function d(e,t,a,n,i,r,o){return l(a^(t|~n),e,t,i,r,o)}function p(e,t){var a,n,i,o,l;e[t>>5]|=128<<t%32,e[14+(t+64>>>9<<4)]=t;var p=1732584193,f=-271733879,m=-1732584194,g=271733878;for(a=0;a<e.length;a+=16)n=p,i=f,o=m,l=g,p=c(p,f,m,g,e[a],7,-680876936),g=c(g,p,f,m,e[a+1],12,-389564586),m=c(m,g,p,f,e[a+2],17,606105819),f=c(f,m,g,p,e[a+3],22,-1044525330),p=c(p,f,m,g,e[a+4],7,-176418897),g=c(g,p,f,m,e[a+5],12,1200080426),m=c(m,g,p,f,e[a+6],17,-1473231341),f=c(f,m,g,p,e[a+7],22,-45705983),p=c(p,f,m,g,e[a+8],7,1770035416),g=c(g,p,f,m,e[a+9],12,-1958414417),m=c(m,g,p,f,e[a+10],17,-42063),f=c(f,m,g,p,e[a+11],22,-1990404162),p=c(p,f,m,g,e[a+12],7,1804603682),g=c(g,p,f,m,e[a+13],12,-40341101),m=c(m,g,p,f,e[a+14],17,-1502002290),f=c(f,m,g,p,e[a+15],22,1236535329),p=s(p,f,m,g,e[a+1],5,-165796510),g=s(g,p,f,m,e[a+6],9,-1069501632),m=s(m,g,p,f,e[a+11],14,643717713),f=s(f,m,g,p,e[a],20,-373897302),p=s(p,f,m,g,e[a+5],5,-701558691),g=s(g,p,f,m,e[a+10],9,38016083),m=s(m,g,p,f,e[a+15],14,-660478335),f=s(f,m,g,p,e[a+4],20,-405537848),p=s(p,f,m,g,e[a+9],5,568446438),g=s(g,p,f,m,e[a+14],9,-1019803690),m=s(m,g,p,f,e[a+3],14,-187363961),f=s(f,m,g,p,e[a+8],20,1163531501),p=s(p,f,m,g,e[a+13],5,-1444681467),g=s(g,p,f,m,e[a+2],9,-51403784),m=s(m,g,p,f,e[a+7],14,1735328473),f=s(f,m,g,p,e[a+12],20,-1926607734),p=u(p,f,m,g,e[a+5],4,-378558),g=u(g,p,f,m,e[a+8],11,-2022574463),m=u(m,g,p,f,e[a+11],16,1839030562),f=u(f,m,g,p,e[a+14],23,-35309556),p=u(p,f,m,g,e[a+1],4,-1530992060),g=u(g,p,f,m,e[a+4],11,1272893353),m=u(m,g,p,f,e[a+7],16,-155497632),f=u(f,m,g,p,e[a+10],23,-1094730640),p=u(p,f,m,g,e[a+13],4,681279174),g=u(g,p,f,m,e[a],11,-358537222),m=u(m,g,p,f,e[a+3],16,-722521979),f=u(f,m,g,p,e[a+6],23,76029189),p=u(p,f,m,g,e[a+9],4,-640364487),g=u(g,p,f,m,e[a+12],11,-421815835),m=u(m,g,p,f,e[a+15],16,530742520),f=u(f,m,g,p,e[a+2],23,-995338651),p=d(p,f,m,g,e[a],6,-198630844),g=d(g,p,f,m,e[a+7],10,1126891415),m=d(m,g,p,f,e[a+14],15,-1416354905),f=d(f,m,g,p,e[a+5],21,-57434055),p=d(p,f,m,g,e[a+12],6,1700485571),g=d(g,p,f,m,e[a+3],10,-1894986606),m=d(m,g,p,f,e[a+10],15,-1051523),f=d(f,m,g,p,e[a+1],21,-2054922799),p=d(p,f,m,g,e[a+8],6,1873313359),g=d(g,p,f,m,e[a+15],10,-30611744),m=d(m,g,p,f,e[a+6],15,-1560198380),f=d(f,m,g,p,e[a+13],21,1309151649),p=d(p,f,m,g,e[a+4],6,-145523070),g=d(g,p,f,m,e[a+11],10,-1120210379),m=d(m,g,p,f,e[a+2],15,718787259),f=d(f,m,g,p,e[a+9],21,-343485551),p=r(p,n),f=r(f,i),m=r(m,o),g=r(g,l);return[p,f,m,g]}function f(e){var t,a="",n=32*e.length;for(t=0;t<n;t+=8)a+=String.fromCharCode(e[t>>5]>>>t%32&255);return a}function m(e){var t,a=[];for(a[(e.length>>2)-1]=void 0,t=0;t<a.length;t+=1)a[t]=0;var n=8*e.length;for(t=0;t<n;t+=8)a[t>>5]|=(255&e.charCodeAt(t/8))<<t%32;return a}function g(e){return f(p(m(e),8*e.length))}function h(e,t){var a,n,i=m(e),r=[],o=[];for(r[15]=o[15]=void 0,i.length>16&&(i=p(i,8*e.length)),a=0;a<16;a+=1)r[a]=909522486^i[a],o[a]=1549556828^i[a];return n=p(r.concat(m(t)),512+8*t.length),f(p(o.concat(n),640))}function v(e){var t,a,n="0123456789abcdef",i="";for(a=0;a<e.length;a+=1)t=e.charCodeAt(a),i+=n.charAt(t>>>4&15)+n.charAt(15&t);return i}function b(e){return unescape(encodeURIComponent(e))}function _(e){return g(b(e))}function y(e){return v(_(e))}function x(e,t){return h(b(e),b(t))}function S(e,t){return v(x(e,t))}function k(e,t,a){return t?a?x(t,e):S(t,e):a?_(e):y(e)}n=function(){return k}.call(t,a,t,e),void 0===n||(e.exports=n)})()},baa5:function(e,t,a){var n=a("23e7"),i=a("e58c");n({target:"Array",proto:!0,forced:i!==[].lastIndexOf},{lastIndexOf:i})},e58c:function(e,t,a){"use strict";var n=a("fc6a"),i=a("a691"),r=a("50c4"),o=a("a640"),l=a("ae40"),c=Math.min,s=[].lastIndexOf,u=!!s&&1/[1].lastIndexOf(1,-0)<0,d=o("lastIndexOf"),p=l("indexOf",{ACCESSORS:!0,1:0}),f=u||!d||!p;e.exports=f?function(e){if(u)return s.apply(this,arguments)||0;var t=n(this),a=r(t.length),o=a-1;for(arguments.length>1&&(o=c(o,i(arguments[1]))),o<0&&(o=a+o);o>=0;o--)if(o in t&&t[o]===e)return o||0;return-1}:s}}]);