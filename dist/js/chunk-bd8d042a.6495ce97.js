(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-bd8d042a"],{1341:function(e,t,a){"use strict";var o=a("411e"),n=a.n(o);n.a},"365c":function(e,t,a){"use strict";var o=a("be3b"),n=a("99b1"),i=a.n(n),r={aip:function(e){return o["a"].post(i.a.Aip,e)},delAip:function(e){return o["a"].del(i.a.Aip,{id:e})},aips:function(e,t){return o["a"].get(i.a.Aips,{page:e,limit:t})},apk:function(e){return o["a"].post(i.a.Apk,e)},apks:function(e,t){return o["a"].get(i.a.Apks,{page:e,limit:t})},apkVersion:function(e){return o["a"].post(i.a.ApkVersion,e)},apkVersions:function(e,t,a){return o["a"].get(i.a.ApkVersions,{page:e,limit:t,apk_id:a})},_apkVersions:function(e){return o["a"].get(i.a.ApkVersions,{id:e})},publishApk:function(e){return o["a"].post(i.a.PublishApk,e)},project:function(e){return o["a"].post(i.a.Project,e)},projects:function(e,t){return o["a"].get(i.a.Projects,{page:e,limit:t})},address:function(e){return o["a"].post(i.a.Address,e)},getaddress:function(e){return o["a"].get(i.a.Address,{id:e})},addresses:function(e,t,a){return o["a"].get(i.a.Addresses,{page:e,limit:t,project_id:a})},addressTypes:function(e,t){return o["a"].get(i.a.AddressTypes,{page:e,limit:t})},face:function(e){return o["a"].post(i.a.Face,e)},faces:function(e,t,a){return o["a"].get(i.a.Faces,{page:e,limit:t,name:a})},pushRecords:function(e,t,a){return o["a"].get(i.a.PushRecords,{page:e,limit:t,name:a})},pushRecordCommands:function(e){return o["a"].get(i.a.PushRecordCommands,{id:e})},againPush:function(e){return o["a"].post(i.a.PushRecord,e)},areas:function(e,t,a){return o["a"].get(i.a.Areas,{page:e,limit:t,parent_id:a})},area:function(e){return o["a"].post(i.a.Area,e)},device:function(e){return o["a"].post(i.a.Device,e)},_device:function(e){return o["a"].get(i.a.Device,{uuid:e})},devices:function(e,t,a,n,r){return o["a"].get(i.a.Devices,{page:e,limit:t,type:a,uuid:n,address_id:r})},_devices:function(e,t,a){return o["a"].get(i.a.Devices,{direction:e,addresses:t,limit:a})},deviceLogs:function(e,t,a,n){return o["a"].get(i.a.DeviceLogs,{page:e,limit:t,uuid:a,type:n})},deviceFaceLogs:function(e,t,a,n){return o["a"].get(i.a.DeviceRecord,{page:e,limit:t,uuid:a,address_id:n})},deviceTypes:function(){return o["a"].get(i.a.DeviceTypes)},deviceHeart:function(e){return o["a"].get(i.a.DeviceHeartbeat,{uuid:e})},deviceCommands:function(e,t,a){return o["a"].get(i.a.DeviceCommands,{page:e,limit:t,uuid:a})},commandsType:function(e){return o["a"].get(i.a.Commands,{type:e})},sendDeviceCommand:function(e){return o["a"].post(i.a.SendDeviceCommand,e)},deviceUserList:function(e,t,a){return o["a"].get(i.a.DeviceUserList,{page:e,limit:t,uuid:a})},faceGroup:function(e){return o["a"].get(i.a.FaceGroup,{address_id:e})},uuid:function(e,t){return o["a"].get(i.a.Uuid,{page:e,limit:t})},dangerFace:function(e){return o["a"].post(i.a.DangerFace,e)},delDangerFace:function(e){return o["a"].del(i.a.DelDangerFace,{id:e})},dangerFaces:function(e,t){return o["a"].get(i.a.DangerFaces,{page:e,limit:t})},dangerLogs:function(e,t){return o["a"].get(i.a.DangerLogs,{page:e,limit:t})},roles:function(e,t){return o["a"].get(i.a.Roles,{page:e,limit:t})},oneRole:function(e){return o["a"].get(i.a.Role,{name:e})},role:function(e){return o["a"].post(i.a.Role,e)},policeStation:function(e){return o["a"].post(i.a.PoliceStation,e)},policeStations:function(e,t,a){return o["a"].get(i.a.PoliceStations,{page:e,limit:t,name:a})},information:function(e){return o["a"].post(i.a.Information,e)},informations:function(e,t,a,n){return o["a"].get(i.a.Information,{page:e,limit:t,id:a,title:n})}};t["a"]=r},"411e":function(e,t,a){},ac3a:function(e,t,a){"use strict";a.r(t);var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],attrs:{"element-loading-text":"获取数据中"}},[a("div",{staticClass:"handle-box"},[a("div",{staticClass:"btn"},[a("el-button",{attrs:{type:"primary"},on:{click:e.addDevice}},[e._v("添加设备")])],1),a("div",{staticClass:"btn"},[a("el-input",{staticClass:"input-with-select",attrs:{placeholder:"输入设备号"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.search(e.uuid)}},model:{value:e.uuid,callback:function(t){e.uuid=t},expression:"uuid"}},[a("el-button",{attrs:{slot:"append",icon:"el-icon-search"},on:{click:function(t){return e.search(e.uuid)}},slot:"append"})],1)],1),a("div",{staticClass:"btn"},[a("el-select",{attrs:{placeholder:"请选择类型"},on:{change:e.typeChange},model:{value:e.type,callback:function(t){e.type=t},expression:"type"}},e._l(e.typeList,(function(t,o){return a("el-option",{key:o,attrs:{label:e.typeList[o],value:o}})})),1)],1),a("div",{staticClass:"btn"},[a("el-cascader",{attrs:{placeholder:"请选择省市区",options:e.cascaderData,props:e.props},on:{change:e.proChange},model:{value:e.pro_city_area,callback:function(t){e.pro_city_area=t},expression:"pro_city_area"}})],1)]),a("el-dialog",{attrs:{title:"添加设备",visible:e.dialogDevice},on:{"update:visible":function(t){e.dialogDevice=t}}},[a("div",{staticClass:"box"},[a("el-form",{attrs:{model:e.form,"label-width":"100px"}},[a("el-form-item",{attrs:{label:"设备名称"}},[a("el-input",{model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),a("el-form-item",{attrs:{label:"类型"}},[a("el-select",{attrs:{placeholder:"请选择类型"},on:{change:e.faceTypeChange},model:{value:e.face_type,callback:function(t){e.face_type=t},expression:"face_type"}},e._l(e.typeList,(function(t,o){return a("el-option",{key:o,attrs:{label:e.typeList[o],value:o}})})),1)],1),a("el-form-item",{attrs:{label:"选择项目"}},[a("el-select",{attrs:{placeholder:"请选择项目"},on:{change:e.changeProject},model:{value:e.face_project,callback:function(t){e.face_project=t},expression:"face_project"}},e._l(e.projectList,(function(e,t){return a("el-option",{key:t,attrs:{label:e.name,value:e.id}})})),1)],1),a("el-form-item",{attrs:{label:"选择地址"}},[a("el-select",{attrs:{placeholder:"请选择地址"},on:{change:e.addressChange},model:{value:e.face_address,callback:function(t){e.face_address=t},expression:"face_address"}},e._l(e.addressList,(function(e){return a("el-option",{key:e.id,attrs:{label:e.address,value:e.id}})})),1)],1),e.face_address?a("div",[a("el-form-item",{attrs:{label:"选择人脸组"}},[a("el-checkbox",{on:{change:e.handleCheckAllChange},model:{value:e.checkAll,callback:function(t){e.checkAll=t},expression:"checkAll"}},[e._v("全选")]),a("div",{staticClass:"facebox"},[a("el-checkbox-group",{staticClass:"facebox-item",model:{value:e.form.face_groups,callback:function(t){e.$set(e.form,"face_groups",t)},expression:"form.face_groups"}},e._l(e.faceGroupList,(function(t,o){return a("div",{key:o},[a("el-checkbox",{attrs:{label:t.group_name},on:{change:e.checkOneChange}},[e._v(e._s(t.group_name))])],1)})),0)],1)],1)],1):e._e(),a("el-form-item",{attrs:{label:"选择uuid"}},[a("el-select",{attrs:{placeholder:"请选择uuid",disabled:e.uuidDisabled},model:{value:e.form.uuid,callback:function(t){e.$set(e.form,"uuid",t)},expression:"form.uuid"}},e._l(e.uuidList,(function(e){return a("el-option",{key:e.id,attrs:{label:e.uuid,value:e.uuid}})})),1),a("span",{staticStyle:{"margin-left":"10px"}},[a("el-button",{attrs:{size:"medium",type:"primary"},on:{click:e.referUUID}},[e._v("刷新UUID")])],1)],1),a("el-form-item",{attrs:{label:"选择安装包"}},[a("el-select",{attrs:{placeholder:"请选择安装包"},on:{change:e.apkChange},model:{value:e.face_apk,callback:function(t){e.face_apk=t},expression:"face_apk"}},e._l(e.apkList,(function(e){return a("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})),1)],1),a("el-form-item",{attrs:{label:"安装包版本"}},[a("el-select",{attrs:{placeholder:"请选择版本"},model:{value:e.face_apk_version,callback:function(t){e.face_apk_version=t},expression:"face_apk_version"}},e._l(e.versionList,(function(e){return a("el-option",{key:e.id,attrs:{label:e.version,value:e.id}})})),1)],1),a("el-form-item",{attrs:{label:"配置热感"}},[a("el-radio-group",{model:{value:e.hotness,callback:function(t){e.hotness=t},expression:"hotness"}},[a("el-radio",{attrs:{label:1}},[e._v("正常")]),a("el-radio",{attrs:{label:2}},[e._v("严格")]),a("el-radio",{attrs:{label:3}},[e._v("关闭")])],1)],1),a("el-form-item",{attrs:{label:"选择方向"}},[a("el-select",{attrs:{placeholder:"请选择地址"},model:{value:e.form.direction,callback:function(t){e.$set(e.form,"direction",t)},expression:"form.direction"}},e._l(e.directionList,(function(e){return a("el-option",{key:e.id,attrs:{label:e.direction,value:e.id}})})),1)],1),a("div",{staticClass:"submit"},[a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:e.newDevice}},[e._v("提交")])],1)],1)],1)],1)]),a("el-table",{attrs:{data:e.tableDate,border:"","header-cell-style":{background:"#f0f0f0",color:"#2a9f93"},"max-height":"620"}},[a("el-table-column",{attrs:{prop:"id",label:"ID",width:"80px"}}),a("el-table-column",{attrs:{prop:"address.address",label:"地址",width:"200px"}}),a("el-table-column",{attrs:{prop:"uuid",label:"uuid",width:"200px"}}),a("el-table-column",{attrs:{prop:"type_string",label:"类型",width:"100px"}}),a("el-table-column",{attrs:{prop:"direction",label:"方向",width:"80px"}}),a("el-table-column",{attrs:{prop:"version",label:"版本"}}),a("el-table-column",{attrs:{prop:"remark",label:"备注",width:"300px"}}),a("el-table-column",{attrs:{prop:"online",label:"状态"},scopedSlots:e._u([{key:"default",fn:function(t){return[1==t.row.online?a("span",[e._v("在线")]):e._e(),0==t.row.online?a("span",[e._v("离线")]):e._e()]}}])}),a("el-table-column",{attrs:{prop:"last_login",label:"最后登录时间",width:"200px"}}),a("el-table-column",{attrs:{label:"操作",width:"200px"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-dropdown",[a("el-button",{attrs:{type:"primary"}},[e._v(" 操作"),a("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),a("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[a("el-dropdown-item",[a("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(a){return e.handleExit(t.$index,t.row)}}},[e._v("编辑")])],1),a("el-dropdown-item",[a("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(a){return e.handleShowLog(t.$index,t.row)}}},[e._v("查看日志")])],1),a("el-dropdown-item",[4==t.row.type?a("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(a){return e.handleUserList(t.$index,t.row)}}},[e._v("查看用户")]):e._e()],1),a("el-dropdown-item",[a("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(a){return e.handleShowRecord(t.$index,t.row)}}},[e._v("查看进出记录")])],1),a("el-dropdown-item",[a("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(a){return e.handleShowFace(t.$index,t.row)}}},[e._v("查看人脸组")])],1),a("el-dropdown-item"),a("el-dropdown-item",[a("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(a){return e.handleHeart(t.$index,t.row)}}},[e._v("查看心跳")])],1),a("el-dropdown-item",[a("el-popconfirm",{attrs:{title:"是否要删除该条数据",cancelButtonType:"primary"},on:{onConfirm:function(a){return e.handleDel(t.$index,t.row)}}},[a("el-button",{attrs:{slot:"reference",size:"mini",type:"danger"},slot:"reference"},[e._v("删除")])],1)],1)],1)],1)]}}])})],1),a("div",{staticClass:"block"},[a("el-pagination",{attrs:{"current-page":e.current,"page-sizes":[10,20,50,100,150,200,250,300],"page-size":e.size,layout:"sizes, prev, pager, next, jumper",total:e.total},on:{"current-change":e.currentChange,"update:currentPage":function(t){e.current=t},"update:current-page":function(t){e.current=t},"size-change":e.sizeChange}})],1),a("el-dialog",{attrs:{title:"查看日志",visible:e.dialogLogs,width:"80%"},on:{"update:visible":function(t){e.dialogLogs=t}}},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.logLoading,expression:"logLoading"}],attrs:{data:e.logstable,border:"","header-cell-style":{background:"#f0f0f0",color:"#2a9f93"},"element-loading-text":"获取数据中"}},[a("el-table-column",{attrs:{prop:"id",label:"ID"}}),a("el-table-column",{attrs:{prop:"uuid",label:"设备ID"}}),a("el-table-column",{attrs:{prop:"time",label:"时间"}}),a("el-table-column",{attrs:{prop:"logCat",label:"消息",width:"400px"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("div",{staticClass:"logcat"},[e._v(e._s(t.row.logCat)+" ")]),t.row.logCat?a("div",{staticStyle:{"text-align":"left"}},[a("el-button",{attrs:{size:"mini"},on:{click:function(a){return e.showlogcat(t.$index,t.row)}}},[e._v("查看更多")])],1):e._e()]}}])}),a("el-table-column",{attrs:{prop:"type",label:"状态"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",{domProps:{textContent:e._s(1==t.row.type?"正常":"异常")}})]}}])}),a("el-table-column",{attrs:{prop:"created_at",label:"创建时间"}})],1),a("div",{staticClass:"block"},[a("el-pagination",{attrs:{"current-page":e.currentLog,"page-sizes":[10,20,50,100,150,200,250,300],"page-size":e.sizeLog,layout:"sizes, prev, pager, next, jumper",total:e.totalLog},on:{"current-change":e.logCurrentChange,"update:currentPage":function(t){e.currentLog=t},"update:current-page":function(t){e.currentLog=t},"size-change":e.logSizeChange}})],1)],1),a("el-dialog",{attrs:{title:"查看日志",visible:e.dialogLogcat,width:"800px"},on:{"update:visible":function(t){e.dialogLogcat=t}}},[a("textarea",{directives:[{name:"model",rawName:"v-model",value:e.logCat,expression:"logCat"}],staticClass:"temp",domProps:{value:e.logCat},on:{input:function(t){t.target.composing||(e.logCat=t.target.value)}}})]),a("el-dialog",{attrs:{title:"查看进出记录",visible:e.dialogShowRecord,width:"80%"},on:{"update:visible":function(t){e.dialogShowRecord=t}}},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.faceLoading,expression:"faceLoading"}],attrs:{data:e.faceLogsTable,border:"","header-cell-style":{background:"#f0f0f0",color:"#2a9f93"},"max-height":"620","element-loading-text":"获取数据中"}},[a("el-table-column",{attrs:{prop:"id",label:"ID"}}),a("el-table-column",{attrs:{prop:"device_uuid",label:"设备ID"}}),a("el-table-column",{attrs:{prop:"face.name",label:"名称"}}),a("el-table-column",{attrs:{prop:"time",label:"时间"}}),a("el-table-column",{attrs:{prop:"temp",label:"温度"}}),a("el-table-column",{attrs:{prop:"face_id",label:"人脸ID"}}),a("el-table-column",{attrs:{prop:"image",label:"人脸图片"},scopedSlots:e._u([{key:"default",fn:function(e){return[a("el-popover",{attrs:{placement:"top-start",title:"",trigger:"click"}},[a("img",{staticStyle:{"max-width":"800px","max-height":"800px"},attrs:{src:e.row.image}}),a("img",{staticStyle:{"max-width":"180px","max-height":"80px"},attrs:{slot:"reference",src:e.row.image},slot:"reference"})])]}}])})],1),a("div",{staticClass:"block"},[a("el-pagination",{attrs:{"current-page":e.currentFace,"page-sizes":[10,20,50,100,150,200,250,300],"page-size":e.sizeFace,layout:"sizes, prev, pager, next, jumper",total:e.totalFace},on:{"current-change":e.faceCurrentChange,"update:currentPage":function(t){e.currentFace=t},"update:current-page":function(t){e.currentFace=t},"size-change":e.faceSizeChange}})],1)],1),a("el-dialog",{attrs:{title:"查看人脸组",visible:e.dialogFaceGroup,width:"80%"},on:{"update:visible":function(t){e.dialogFaceGroup=t}}},[a("el-table",{attrs:{data:e.facetable,border:"","header-cell-style":{background:"#f0f0f0",color:"#2a9f93"}}},[a("el-table-column",{attrs:{prop:"id",label:"ID"}}),a("el-table-column",{attrs:{prop:"device_id",label:"设备ID"}}),a("el-table-column",{attrs:{prop:"group_id",label:"人脸组ID"}}),a("el-table-column",{attrs:{prop:"group_name",label:"人脸组名字"}})],1)],1),a("el-dialog",{attrs:{title:"设备："+e.uuid,visible:e.dialogHeart,fullscreen:!0},on:{"update:visible":function(t){e.dialogHeart=t}}},[a("div",{ref:"heartChart",staticStyle:{width:"100%",height:"600px"},attrs:{id:"heartChart"}}),a("el-table",{attrs:{data:e.arr,border:"","header-cell-style":{background:"#f0f0f0",color:"#2a9f93"}}},[a("el-table-column",{attrs:{prop:"id",label:"ID"}}),a("el-table-column",{attrs:{prop:"device_uuid",label:"设备ID"}}),a("el-table-column",{attrs:{prop:"time",label:"时间"}}),a("el-table-column",{attrs:{prop:"updated_at",label:"更新时间"}})],1)],1),a("el-dialog",{attrs:{title:"查看指令",visible:e.dialogCommands,width:"90%"},on:{"update:visible":function(t){e.dialogCommands=t},close:e.closeCommands}},[a("div",{staticClass:"handle-box"},[a("div",{staticClass:"btn"},[a("el-form",{attrs:{model:e.commandform,"label-width":"100px"}},[a("el-form-item",{attrs:{label:"指令"}},[a("el-select",{on:{change:e.changeCommand},model:{value:e.command,callback:function(t){e.command=t},expression:"command"}},e._l(e.commandList,(function(e,t){return a("el-option",{key:t,attrs:{label:e,value:t}})})),1)],1),"setPassword"===e.command?a("div",[a("el-form-item",{attrs:{label:"密码"}},[a("el-input",{attrs:{placeholder:"请输入密码"},model:{value:e.commandform.new_password,callback:function(t){e.$set(e.commandform,"new_password",t)},expression:"commandform.new_password"}})],1)],1):e._e(),"deleteUser"===e.command?a("div",[a("el-form-item",{attrs:{label:"FACE_ID"}},[a("el-input",{attrs:{placeholder:"请输入FACE_ID"},model:{value:e.commandform.face_id,callback:function(t){e.$set(e.commandform,"face_id",t)},expression:"commandform.face_id"}})],1)],1):e._e(),"addUser"===e.command?a("div",[a("el-form-item",{attrs:{label:"FACE_ID"}},[a("el-input",{attrs:{placeholder:"请输入FACE_ID"},model:{value:e.commandform.face_id,callback:function(t){e.$set(e.commandform,"face_id",t)},expression:"commandform.face_id"}})],1)],1):e._e(),a("div",{staticStyle:{"margin-left":"100px"}},[a("el-button",{attrs:{type:"primary"},on:{click:e.sendCommand}},[e._v("发送指令")])],1)],1)],1)]),a("el-table",{attrs:{data:e.commandsData,border:"","header-cell-style":{background:"#f0f0f0",color:"#2a9f93"},"max-height":480}},[a("el-table-column",{attrs:{prop:"id",label:"ID"}}),a("el-table-column",{attrs:{prop:"device_uuid",label:"设备ID"}}),a("el-table-column",{attrs:{prop:"command",label:"指令"}}),a("el-table-column",{attrs:{prop:"command_title",label:"指令名字"}}),a("el-table-column",{attrs:{prop:"state",label:"状态"},scopedSlots:e._u([{key:"default",fn:function(t){return["1"==t.row.state?a("span",[e._v("已创建")]):e._e(),"2"==t.row.state?a("span",[e._v("已下发")]):e._e(),"3"==t.row.state?a("span",[e._v("成功")]):e._e(),"4"==t.row.state?a("span",[e._v("失败")]):e._e()]}}])}),a("el-table-column",{attrs:{prop:"updated_at",label:"更新时间"}})],1)],1),a("el-dialog",{attrs:{title:"查看用户",visible:e.dialogUserList,width:"80%"},on:{"update:visible":function(t){e.dialogUserList=t}}},[a("el-table",{attrs:{data:e.userListData,border:"","header-cell-style":{background:"#f0f0f0",color:"#2a9f93"},"max-height":600}},[a("el-table-column",{attrs:{prop:"name",label:"姓名"}}),a("el-table-column",{attrs:{prop:"face_id",label:"FACE_ID"}}),a("el-table-column",{attrs:{prop:"href",label:"照片"},scopedSlots:e._u([{key:"default",fn:function(e){return[a("el-popover",{attrs:{placement:"top-start",title:"",trigger:"click"}},[a("img",{staticStyle:{"max-width":"800px","max-height":"800px"},attrs:{src:e.row.href}}),a("img",{staticStyle:{"max-width":"180px","max-height":"80px"},attrs:{slot:"reference",src:e.row.href},slot:"reference"})])]}}])}),a("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-popconfirm",{attrs:{title:"是否要删除该条数据",cancelButtonType:"primary"},on:{onConfirm:function(a){return e.handleDelUser(t.$index,t.row)}}},[a("el-button",{attrs:{slot:"reference",size:"mini",type:"danger"},slot:"reference"},[e._v("删除")])],1)]}}])})],1)],1)],1)},n=[],i=(a("4160"),a("b0c0"),a("159b"),a("365c")),r=a("c466"),s=[],c={name:"gradems",data:function(){return{loading:!0,dialogLogcat:!1,logCat:"",dialogDevice:!1,typeList:[],type:"",pro_city_area:[],pro_city_area_id:"",label:"",projectList:[],addressList:[],faceGroupList:[],checkAll:!1,faceGroup:[],uuidList:[],uuidDisabled:!1,apkList:[],versionList:[],directionList:[{id:"in",direction:"进"},{id:"out",direction:"出"}],hotness:1,form:{name:"",address_id:"",project_id:"",type:"人脸机",uuid:"",remark:"",configs:[],apk:"",apk_version:"",face_groups:[],direction:""},face_type:"",face_project:"",face_address:"",face_apk:"",face_apk_version:"",tableDate:[],dialogFaceGroup:!1,facetable:[],dialogLogs:!1,logLoading:!0,logstable:[],dialogShowRecord:!1,faceLogsTable:[],faceLoading:!1,uuid:"",address_id:"",dialogHeart:!1,x_formatData:[],x_formatData_value:[],arr:[],heart_uuid:"",dialogCommands:!1,commandsData:[],command_uuid:"",command:"",commandform:{uuid:"",command:"",new_password:"",face_id:""},commandList:[],dialogUserList:!1,userListData:[],user_list_uuid:"",timer:"",langtime:10,current:1,size:10,total:0,log_uuid:"",currentLog:1,sizeLog:10,totalLog:0,face_uuid:"",currentFace:1,sizeFace:10,totalFace:0,cascaderData:[],props:{label:"title",value:"id",lazy:!0,lazyLoad:function(e,t){var a=e.level;if(1==a){var o=e.data.id;i["a"].areas(1,100,o).then((function(e){var o=e.data;o.forEach((function(e){e.leaf=a>=3})),t(o)}))}if(2==a){var n=e.data.id;i["a"].areas(1,100,n).then((function(e){var o=e.data;o.forEach((function(e){e.leaf=a>=3})),t(o)}))}if(3==a){var r=e.data.id;i["a"].areas(1,100,r).then((function(e){var o=e.data;o.forEach((function(e){e.leaf=a>=3})),t(o)}))}}}}},mounted:function(){this.getDevice(),this.getAddress(),this.getUuid(),this.getApk(),this.getTypes(),this.getProject(),this.getCommandType(),this.getPro()},methods:{getPro:function(){var e=this;i["a"].areas(1,100,0).then((function(t){e.cascaderData=t.data}))},proChange:function(e){var t=this;t.pro_city_area_id=e[3],t.loading=!0,i["a"].devices(1,10,t.type,t.uuid,t.pro_city_area_id).then((function(e){t.loading=!1,t.tableDate=e.data,t.total=e.total,t.$message.success("搜索成功!")})).catch((function(e){t.loading=!1}))},search:function(){var e=this;e.loading=!0,i["a"].devices(1,10,e.type,e.uuid,e.pro_city_area_id).then((function(t){e.loading=!1,e.tableDate=t.data,e.total=t.total,e.$message.success("搜索成功!")})).catch((function(t){e.loading=!1}))},typeChange:function(e){var t=this;t.loading=!0,i["a"].devices(1,t.size,e,t.uuid,t.pro_city_area_id).then((function(e){t.loading=!1,t.tableDate=e.data,t.total=e.total,t.current=1,t.$message.success("搜索成功！")})).catch((function(e){t.loading=!1}))},getDevice:function(){var e=this;i["a"].devices(this.current).then((function(t){e.loading=!1,e.tableDate=t.data,e.total=t.total})).catch((function(t){e.loading=!1}))},getTypes:function(){var e=this;i["a"].deviceTypes().then((function(t){console.log(t),e.typeList=t}))},faceTypeChange:function(e){this.form.type=e},getProject:function(){var e=this;i["a"].projects(1).then((function(t){e.projectList=t.data}))},changeProject:function(e){var t=this;t.form.project_id=e,t.getAddress(e)},getAddress:function(e){var t=this;i["a"].addresses(1,1e3,e).then((function(e){t.addressList=e.data}))},addressChange:function(e){this.form.address_id=e,this.form.face_groups=[],this.getFaceGroup(e)},getFaceGroup:function(e){var t=this;i["a"].faceGroup(e).then((function(e){t.faceGroupList=e.data,console.log(t.faceGroupList)}))},handleCheckAllChange:function(e){!0===e?(s=[],this.faceGroupList.forEach((function(e){s.push(e.group_name)})),this.form.face_groups=s):!1===e&&(s=[],this.form.face_groups=[])},checkOneChange:function(e){console.log(this.form.face_groups),this.form.face_groups.length>=this.faceGroupList.length?this.checkAll=!0:this.checkAll=!1},getUuid:function(){var e=this;i["a"].uuid(1,1e3).then((function(t){e.uuidList=t.data}))},referUUID:function(){var e=this;i["a"].uuid(1,1e3).then((function(t){e.uuidList=t.data}))},getApk:function(){var e=this;i["a"].apks(1).then((function(t){e.apkList=t.data}))},apkChange:function(e){console.log(e),this.form.apk=e,this.getApkVersion(e)},getApkVersion:function(e){var t=this;i["a"]._apkVersions(e).then((function(e){t.versionList=e.data}))},apkVersionChange:function(e){this.form.apk_version=e},addDevice:function(){var e=this;e.uuidDisabled=!1,e.dialogDevice=!0,e.checkAll=!1,e.form={name:"",address_id:"",project_id:"",type:"人脸机",uuid:"",remark:"",configs:[],apk:"",apk_version:"",face_groups:[],direction:""},e.face_project="",e.face_address="",e.faceGroup="",e.face_apk="",e.face_apk_version="",e.face_type=""},newDevice:function(){var e=this;switch(e.hotness){case 1:e.form.configs.push({heatvision:"normal"});break;case 2:e.form.configs.push({heatvision:"strict"});break;case 3:e.form.configs.push({heatvision:"none"})}i["a"].device(e.form).then((function(t){e.getUuid(),e.dialogDevice=!1,e.$message.success("提交成功"),e.getDevice(),e.currentPage=1,e.form={id:"",name:"",address_id:"",project_id:"",type:"人脸机",uuid:"",remark:"",configs:[],apk:"",apk_version:"",face_groups:[],direction:""},e.face_project="",e.face_address="",e.faceGroup="",e.face_apk="",e.face_apk_version="",e.face_type=""}))},handleExit:function(e,t){var a=this;a.dialogDevice=!0,a.uuidDisabled=!0,i["a"]._device(t.uuid).then((function(e){switch(a.form.id=e.id,a.form.name=e.remark,a.form.address_id=e.address_id,a.form.project_id=e.project_id,a.form.type=e.type,a.form.uuid=e.uuid,a.form.configs=[],a.hotness=e.configs.heatvision,a.form.direction=e.direction,a.form.remark=e.remark,a.form.face_groups=e.face_group,a.face_project=e.project,a.face_address=e.address_id,a.face_apk=e.apk,a.face_apk_version=e.apk_version,a.face_type=e.type_string,i["a"].faceGroup(e.address_id).then((function(e){a.faceGroupList=e.data,a.form.face_groups.length>=a.faceGroupList.length?a.checkAll=!0:a.checkAll=!1})),e.configs.heatvision){case"normal":a.hotness=1;break;case"strict":a.hotness=2;break;case"none":a.hotness=3}}))},handleShowLog:function(e,t){var a=this;this.dialogLogs=!0,this.log_uuid=t.uuid,i["a"].deviceLogs(1,10,t.uuid).then((function(e){a.logLoading=!1,a.logstable=e.data,a.totalLog=e.total})).catch((function(e){a.logLoading=!1}))},logCurrentChange:function(e){var t=this;t.currentLog=e,t.logLoading=!0,i["a"].deviceLogs(e,t.sizeLog,t.log_uuid).then((function(e){t.logLoading=!1,t.logstable=e.data,t.totalLog=e.total})).catch((function(e){t.logLoading=!1}))},logSizeChange:function(e){var t=this;t.logLoading=!0,t.sizeLog=e,i["a"].deviceLogs(t.currentLog,e,t.log_uuid).then((function(e){t.logLoading=!1,t.logstable=e.data,t.totalLog=e.total})).catch((function(e){t.logLoading=!1}))},handleShowFace:function(e,t){console.log(t.groups),this.dialogFaceGroup=!0,this.facetable=t.groups},handleShowRecord:function(e,t){var a=this;this.dialogShowRecord=!0,this.face_uuid=t.uuid,this.address_id=t.address_id,i["a"].deviceFaceLogs(1,10,t.uuid,t.address_id).then((function(e){a.faceLogsTable=e.data,a.totalFace=e.total}))},faceCurrentChange:function(e){var t=this;t.currentFace=e,t.FaceLoading=!0,i["a"].deviceFaceLogs(e,t.sizeFace,t.face_uuid).then((function(e){t.faceLoading=!1,t.faceLogsTable=e.data,t.totalFace=e.total})).catch((function(e){t.faceLoading=!1}))},faceSizeChange:function(e){var t=this;t.faceLoading=!0,t.sizeFace=e,i["a"].deviceFaceLogs(t.currentFace,e,t.face_uuid).then((function(e){t.faceLoading=!1,t.faceLogsTable=e.data,t.totalFace=e.total})).catch((function(e){t.faceLoading=!1}))},handleDel:function(){},showlogcat:function(e,t){this.dialogLogcat=!0,this.logCat=t.logCat},handleHeart:function(e,t){console.log(t);var a=this;a.dialogHeart=!0,a.heart_uuid=t.uuid,a.x_formatData=[],clearInterval(a.timer),a.langtime=10,a.drawLine(),i["a"].deviceHeart(a.heart_uuid).then((function(e){a.arr=e.originData,a.arr.forEach((function(e){e.time=r["a"].formatTime(e.time,"Y-M-D h:m:s")}))}))},drawLine:function(){var e=this;e.$nextTick((function(){e.x_formatData=[];var t=[],a=e.$echarts.init(e.$refs.heartChart);a.setOption({title:{text:"网络心跳图NaN"},tooltip:{},legend:{data:["销量"]},xAxis:{name:"时间/分钟",data:[]},yAxis:{},series:[{name:"time",type:"line"}]}),a.showLoading(),i["a"].deviceHeart(e.heart_uuid).then((function(o){a.hideLoading(),t=[];for(var n=0;n<o.formatData.length;n++)e.x_formatData.push(n),t.push(o.formatData[n]);a.setOption({xAxis:{data:e.x_formatData},series:[{name:"time",data:t}]})})),e.timer=setInterval((function(){if(0==e.langtime){e.x_formatData=[],t=[];var a=e.$echarts.init(e.$refs.heartChart);a.setOption({title:{text:"网络心跳图"+e.langtime--+"秒后刷新"},tooltip:{},legend:{data:["销量"]},xAxis:{name:"时间/分钟",data:[]},yAxis:{},series:[{name:"time",type:"line"}]}),a.showLoading(),i["a"].deviceHeart(e.heart_uuid).then((function(o){e.arr=o.originData,e.arr.forEach((function(e){e.time=r["a"].formatTime(e.time,"Y-M-D h:m:s")})),a.hideLoading();for(var n=0;n<o.formatData.length;n++)e.x_formatData.push(n),t.push(o.formatData[n]);a.setOption({xAxis:{data:e.x_formatData},series:[{name:"time",data:t}]})})),e.langtime=10}else e.$nextTick((function(){var t=e.$echarts.init(e.$refs.heartChart);t.setOption({title:{text:"网络心跳图"+e.langtime--+"秒后刷新"}})}))}),1e3)}))},handleShowCommands:function(e,t){var a=this;a.dialogCommands=!0,a.command_uuid=t.uuid,console.log("uuid",a.command_uuid),i["a"].deviceCommands(1,10,t.uuid).then((function(e){a.commandsData=e.data,a.totalCommandsPage=e.total}))},getCommandType:function(){var e=this;i["a"].commandsType(4).then((function(t){e.commandList=t}))},changeCommand:function(e){var t=this;switch(t.commandform={},t.command){case"setPassword":t.commandform={uuid:t.command_uuid,command:"setPassword",new_password:""};break;case"deleteUser":t.commandform={uuid:t.command_uuid,command:"deleteUser",face_id:""};break;case"addUser":t.commandform={uuid:t.command_uuid,command:"addUser",face_id:""};break;case"getSoftVersion":t.commandform={uuid:t.command_uuid,command:"getSoftVersion"};break;case"restart":t.commandform={uuid:t.command_uuid,command:"restart"}}},sendCommand:function(){var e=this;switch(e.command){case"setPassword":i["a"].sendDeviceCommand(e.commandform).then((function(t){e.$message.success("发送成功"),e.command=""}));break;case"deleteUser":i["a"].sendDeviceCommand(e.commandform).then((function(t){e.$message.success("发送成功"),e.command=""}));break;case"addUser":i["a"].sendDeviceCommand(e.commandform).then((function(t){e.$message.success("发送成功"),e.command=""}));break;case"getSoftVersion":i["a"].sendDeviceCommand(e.commandform).then((function(t){e.$message.success("发送成功"),e.command=""}));break;case"restart":i["a"].sendDeviceCommand(e.commandform).then((function(t){e.$message.success("发送成功"),e.command=""}))}},closeCommands:function(){var e=this;e.command_uuid="",e.command="",console.log("111uuid",e.command_uuid)},handleUserList:function(e,t){var a=this;a.dialogUserList=!0,a.user_list_uuid=t.uuid,i["a"].deviceUserList(1,10,t.uuid).then((function(e){a.userListData=e,a.totalUserListPage=e.total}))},handleDelUser:function(e,t){var a=this,o={uuid:a.user_list_uuid,command:"deleteUser",face_id:t.face_id};i["a"].sendDeviceCommand(o).then((function(e){a.$message.success("删除成功"),i["a"].deviceUserList(1,10,a.user_list_uuid).then((function(e){a.userListData=e}))}))},currentChange:function(e){var t=this;t.current=e,t.loading=!0,i["a"].devices(e,t.size,t.type,t.uuid,t.pro_city_area_id).then((function(e){t.loading=!1,t.tableDate=e.data,t.total=e.total})).catch((function(e){t.loading=!1}))},sizeChange:function(e){var t=this;t.loading=!0,t.size=e,i["a"].devices(t.current,e,t.type,t.uuid,t.pro_city_area_id).then((function(e){t.loading=!1,t.tableDate=e.data,t.total=e.total})).catch((function(e){t.loading=!1}))}},beforeDestroy:function(){clearInterval(this.timer)}},l=c,d=(a("1341"),a("2877")),u=Object(d["a"])(l,o,n,!1,null,"a7eec1fe",null);t["default"]=u.exports},c466:function(e,t,a){"use strict";a("d3b7"),a("ac1f"),a("25f0"),a("5319");var o={};function n(e){return e=e.toString(),e[1]?e:"0"+e}o.formatTime=function(e,t){var a=["Y","M","D","h","m","s"],o=[],i=new Date(1e3*e);for(var r in o.push(i.getFullYear()),o.push(n(i.getMonth()+1)),o.push(n(i.getDate())),o.push(n(i.getHours())),o.push(n(i.getMinutes())),o.push(n(i.getSeconds())),o)t=t.replace(a[r],o[r]);return t},t["a"]=o}}]);
//# sourceMappingURL=chunk-bd8d042a.6495ce97.js.map