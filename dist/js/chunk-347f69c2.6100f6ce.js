(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-347f69c2"],{"0cc1":function(e,t,a){},"129f":function(e,t){e.exports=Object.is||function(e,t){return e===t?0!==e||1/e===1/t:e!=e&&t!=t}},"13b8":function(e,t,a){"use strict";var n=a("0cc1"),o=a.n(n);o.a},"365c":function(e,t,a){"use strict";a("ac1f");var n=a("be3b"),o=a("99b1"),r=a.n(o),i={aip:function(e){return n["a"].post(r.a.Aip,e)},delAip:function(e){return n["a"].del(r.a.Aip,{id:e})},aips:function(e,t){return n["a"].get(r.a.Aips,{page:e,limit:t})},apk:function(e){return n["a"].post(r.a.Apk,e)},apks:function(e,t){return n["a"].get(r.a.Apks,{page:e,limit:t})},apkVersion:function(e){return n["a"].post(r.a.ApkVersion,e)},apkVersions:function(e,t,a){return n["a"].get(r.a.ApkVersions,{page:e,limit:t,apk_id:a})},_apkVersions:function(e){return n["a"].get(r.a.ApkVersions,{id:e})},publishApk:function(e){return n["a"].post(r.a.PublishApk,e)},project:function(e){return n["a"].post(r.a.Project,e)},projects:function(e,t){return n["a"].get(r.a.Projects,{page:e,limit:t})},address:function(e){return n["a"].post(r.a.Address,e)},getaddress:function(e){return n["a"].get(r.a.Address,{id:e})},addresses:function(e,t,a){return n["a"].get(r.a.Addresses,{page:e,limit:t,project_id:a})},addressTypes:function(e,t){return n["a"].get(r.a.AddressTypes,{page:e,limit:t})},face:function(e){return n["a"].post(r.a.Face,e)},faces:function(e,t){return n["a"].get(r.a.Faces,{page:e,limit:t})},areas:function(e,t,a){return n["a"].get(r.a.Areas,{page:e,limit:t,parent_id:a})},area:function(e){return n["a"].post(r.a.Area,e)},device:function(e){return n["a"].post(r.a.Device,e)},devices:function(e,t,a){return n["a"].get(r.a.Devices,{page:e,limit:t,type:a})},_devices:function(e,t,a){return n["a"].get(r.a.Devices,{direction:e,addresses:t,limit:a})},deviceLogs:function(e,t,a,o){return n["a"].get(r.a.DeviceLogs,{page:e,limit:t,uuid:a,type:o})},deviceFaceLogs:function(e,t,a,o){return n["a"].get(r.a.DeviceRecord,{page:e,limit:t,uuid:a,address_id:o})},deviceTypes:function(){return n["a"].get(r.a.DeviceTypes)},deviceHeart:function(e){return n["a"].get(r.a.DeviceHeartbeat,{uuid:e})},deviceCommands:function(e,t,a){return n["a"].get(r.a.DeviceCommands,{page:e,limit:t,uuid:a})},searchCommand:function(e){return n["a"].get(r.a.DeviceCommands,{uuid:e})},commandsType:function(e){return n["a"].get(r.a.Commands,{type:e})},sendDeviceCommand:function(e){return n["a"].post(r.a.SendDeviceCommand,e)},deviceUserList:function(e,t,a){return n["a"].get(r.a.DeviceUserList,{page:e,limit:t,uuid:a})},search:function(e){return n["a"].get(r.a.Devices,{uuid:e})},searchType:function(e){return n["a"].get(r.a.Devices,{type:e})},faceGroup:function(e){return n["a"].get(r.a.FaceGroup,{address_id:e})},uuid:function(e,t){return n["a"].get(r.a.Uuid,{page:e,limit:t})},dangerFace:function(e){return n["a"].post(r.a.DangerFace,e)},delDangerFace:function(e){return n["a"].del(r.a.DelDangerFace,{id:e})},dangerFaces:function(e,t){return n["a"].get(r.a.DangerFaces,{page:e,limit:t})},dangerLogs:function(e,t){return n["a"].get(r.a.DangerLogs,{page:e,limit:t})},roles:function(e,t){return n["a"].get(r.a.Roles,{page:e,limit:t})},oneRole:function(e){return n["a"].get(r.a.Role,{name:e})},role:function(e){return n["a"].post(r.a.Role,e)}};t["a"]=i},"841c":function(e,t,a){"use strict";var n=a("d784"),o=a("825a"),r=a("1d80"),i=a("129f"),s=a("14c3");n("search",1,(function(e,t,a){return[function(t){var a=r(this),n=void 0==t?void 0:t[e];return void 0!==n?n.call(t,a):new RegExp(t)[e](String(a))},function(e){var n=a(t,e,this);if(n.done)return n.value;var r=o(e),l=String(this),c=r.lastIndex;i(c,0)||(r.lastIndex=0);var d=s(r,l);return i(r.lastIndex,c)||(r.lastIndex=c),null===d?-1:d.index}]}))},ac3a:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"handle-box"},[a("div",{staticClass:"btn"},[a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.dialogDevice=!0}}},[e._v("添加设备")])],1),a("div",{staticClass:"btn"},[a("el-input",{staticClass:"input-with-select",attrs:{placeholder:"输入设备号"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.search(e.uuid)}},model:{value:e.uuid,callback:function(t){e.uuid=t},expression:"uuid"}},[a("el-button",{attrs:{slot:"append",icon:"el-icon-search"},on:{click:function(t){return e.search(e.uuid)}},slot:"append"})],1)],1),a("div",{staticClass:"btn"},[a("el-select",{attrs:{placeholder:"请选择类型"},on:{change:e.typeChange},model:{value:e.type,callback:function(t){e.type=t},expression:"type"}},e._l(e.typeList,(function(t,n){return a("el-option",{key:n,attrs:{label:e.typeList[n],value:n}})})),1)],1)]),a("el-dialog",{attrs:{title:"添加设备",visible:e.dialogDevice},on:{"update:visible":function(t){e.dialogDevice=t}}},[a("div",{staticClass:"box"},[a("el-form",{attrs:{model:e.form,"label-width":"100px"}},[a("el-form-item",{attrs:{label:"设备名称"}},[a("el-input",{model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),a("el-form-item",{attrs:{label:"类型"}},[a("el-select",{attrs:{placeholder:"请选择类型"},model:{value:e.form.type,callback:function(t){e.$set(e.form,"type",t)},expression:"form.type"}},e._l(e.typeList,(function(t,n){return a("el-option",{key:n,attrs:{label:e.typeList[n],value:n}})})),1)],1),a("el-form-item",{attrs:{label:"选择项目"}},[a("el-select",{attrs:{placeholder:"请选择项目"},on:{change:e.changeProject},model:{value:e.form.project_id,callback:function(t){e.$set(e.form,"project_id",t)},expression:"form.project_id"}},e._l(e.projectList,(function(e,t){return a("el-option",{key:t,attrs:{label:e.name,value:e.id}})})),1)],1),a("el-form-item",{attrs:{label:"选择地址"}},[a("el-select",{attrs:{placeholder:"请选择地址"},on:{change:e.addressChange},model:{value:e.form.address_id,callback:function(t){e.$set(e.form,"address_id",t)},expression:"form.address_id"}},e._l(e.addressList,(function(e){return a("el-option",{key:e.id,attrs:{label:e.address,value:e.id}})})),1)],1),e.form.address_id?a("div",[a("el-form-item",{attrs:{label:"选择人脸组"}},[a("el-checkbox",{on:{change:e.handleCheckAllChange},model:{value:e.checkAll,callback:function(t){e.checkAll=t},expression:"checkAll"}},[e._v("全选")]),a("div",{staticClass:"facebox"},e._l(e.faceGroupList,(function(t,n){return a("div",{key:n},[a("el-checkbox-group",{staticClass:"facebox-item",model:{value:e.form.face_groups,callback:function(t){e.$set(e.form,"face_groups",t)},expression:"form.face_groups"}},[a("el-checkbox",{attrs:{label:t.group_name}})],1)],1)})),0)],1)],1):e._e(),a("el-form-item",{attrs:{label:"选择uuid"}},[a("el-select",{attrs:{placeholder:"请选择uuid"},model:{value:e.form.uuid,callback:function(t){e.$set(e.form,"uuid",t)},expression:"form.uuid"}},e._l(e.uuidList,(function(e){return a("el-option",{key:e.id,attrs:{label:e.uuid,value:e.uuid}})})),1),a("span",{staticStyle:{"margin-left":"10px"}},[a("el-button",{attrs:{size:"medium",type:"primary"},on:{click:e.referUUID}},[e._v("刷新UUID")])],1)],1),a("el-form-item",{attrs:{label:"选择安装包"}},[a("el-select",{attrs:{placeholder:"请选择安装包"},on:{change:e.apkChange},model:{value:e.form.apk,callback:function(t){e.$set(e.form,"apk",t)},expression:"form.apk"}},e._l(e.apkList,(function(e){return a("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})),1)],1),a("el-form-item",{attrs:{label:"安装包版本"}},[a("el-select",{attrs:{placeholder:"请选择版本"},model:{value:e.form.apk_version,callback:function(t){e.$set(e.form,"apk_version",t)},expression:"form.apk_version"}},e._l(e.versionList,(function(e){return a("el-option",{key:e.id,attrs:{label:e.version,value:e.id}})})),1)],1),a("el-form-item",{attrs:{label:"配置热感"}},[a("el-radio-group",{model:{value:e.hotness,callback:function(t){e.hotness=t},expression:"hotness"}},[a("el-radio",{attrs:{label:1}},[e._v("正常")]),a("el-radio",{attrs:{label:2}},[e._v("严格")]),a("el-radio",{attrs:{label:3}},[e._v("关闭")])],1)],1),a("el-form-item",{attrs:{label:"选择方向"}},[a("el-select",{attrs:{placeholder:"请选择地址"},model:{value:e.form.direction,callback:function(t){e.$set(e.form,"direction",t)},expression:"form.direction"}},e._l(e.directionList,(function(e){return a("el-option",{key:e.id,attrs:{label:e.direction,value:e.id}})})),1)],1),a("div",{staticClass:"submit"},[a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:e.newDevice}},[e._v("提交")])],1)],1)],1)],1)]),a("el-table",{attrs:{data:e.tableDate,border:"","header-cell-style":{background:"#f0f0f0",color:"#2a9f93"},"max-height":"620"}},[a("el-table-column",{attrs:{prop:"id",label:"ID",width:"80px"}}),a("el-table-column",{attrs:{prop:"address.address",label:"地址",width:"200px"}}),a("el-table-column",{attrs:{prop:"uuid",label:"uuid",width:"200px"}}),a("el-table-column",{attrs:{prop:"type_string",label:"类型",width:"100px"}}),a("el-table-column",{attrs:{prop:"direction",label:"方向",width:"80px"}}),a("el-table-column",{attrs:{prop:"version",label:"版本"}}),a("el-table-column",{attrs:{prop:"remark",label:"备注",width:"300px"}}),a("el-table-column",{attrs:{prop:"last_login",label:"最后登录时间",width:"200px"}}),a("el-table-column",{attrs:{label:"操作",width:"200px"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-dropdown",[a("el-button",{attrs:{type:"primary"}},[e._v(" 操作"),a("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),a("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[a("el-dropdown-item",[a("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(a){return e.handleShowLog(t.$index,t.row)}}},[e._v("查看日志")])],1),a("el-dropdown-item",[4==t.row.type?a("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(a){return e.handleUserList(t.$index,t.row)}}},[e._v("查看用户")]):e._e()],1),a("el-dropdown-item",[a("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(a){return e.handleShowRecord(t.$index,t.row)}}},[e._v("查看进出记录")])],1),a("el-dropdown-item",[a("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(a){return e.handleShowFace(t.$index,t.row)}}},[e._v("查看人脸组")])],1),a("el-dropdown-item"),a("el-dropdown-item",[a("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(a){return e.handleHeart(t.$index,t.row)}}},[e._v("查看心跳")])],1),a("el-dropdown-item",[a("el-popconfirm",{attrs:{title:"是否要删除该条数据",cancelButtonType:"primary"},on:{onConfirm:function(a){return e.handleDel(t.$index,t.row)}}},[a("el-button",{attrs:{slot:"reference",size:"mini",type:"danger"},slot:"reference"},[e._v("删除")])],1)],1)],1)],1)]}}])})],1),a("el-dialog",{attrs:{title:"查看日志",visible:e.dialogLogs,width:"80%"},on:{"update:visible":function(t){e.dialogLogs=t}}},[a("el-table",{attrs:{data:e.logstable,border:"","header-cell-style":{background:"#f0f0f0",color:"#2a9f93"}}},[a("el-table-column",{attrs:{prop:"id",label:"ID"}}),a("el-table-column",{attrs:{prop:"uuid",label:"设备ID"}}),a("el-table-column",{attrs:{prop:"time",label:"时间"}}),a("el-table-column",{attrs:{prop:"logCat",label:"消息",width:"400px"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("div",{staticClass:"logcat"},[e._v(e._s(t.row.logCat)+" ")]),t.row.logCat?a("div",{staticStyle:{"text-align":"left"}},[a("el-button",{attrs:{size:"mini"},on:{click:function(a){return e.showlogcat(t.$index,t.row)}}},[e._v("查看更多")])],1):e._e()]}}])}),a("el-table-column",{attrs:{prop:"type",label:"状态"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",{domProps:{textContent:e._s(1==t.row.type?"正常":"异常")}})]}}])}),a("el-table-column",{attrs:{prop:"created_at",label:"创建时间"}})],1),a("div",{staticClass:"block"},[a("el-pagination",{attrs:{"current-page":e.currentLogsPage,"page-size":10,layout:"prev, pager, next, jumper",total:e.totalLogsPage},on:{"current-change":e.handleCurrentLogsChange,"update:currentPage":function(t){e.currentLogsPage=t},"update:current-page":function(t){e.currentLogsPage=t}}})],1)],1),a("el-dialog",{attrs:{title:"查看日志",visible:e.dialogLogcat,width:"800px"},on:{"update:visible":function(t){e.dialogLogcat=t}}},[a("textarea",{directives:[{name:"model",rawName:"v-model",value:e.logCat,expression:"logCat"}],staticClass:"temp",domProps:{value:e.logCat},on:{input:function(t){t.target.composing||(e.logCat=t.target.value)}}})]),a("el-dialog",{attrs:{title:"查看进出记录",visible:e.dialogShowRecord,width:"80%"},on:{"update:visible":function(t){e.dialogShowRecord=t}}},[a("el-table",{attrs:{data:e.faceLogsTable,border:"","header-cell-style":{background:"#f0f0f0",color:"#2a9f93"},"max-height":"620"}},[a("el-table-column",{attrs:{prop:"id",label:"ID"}}),a("el-table-column",{attrs:{prop:"device_uuid",label:"设备ID"}}),a("el-table-column",{attrs:{prop:"face.name",label:"名称"}}),a("el-table-column",{attrs:{prop:"time",label:"时间"}}),a("el-table-column",{attrs:{prop:"temp",label:"温度"}}),a("el-table-column",{attrs:{prop:"face_id",label:"人脸ID"}}),a("el-table-column",{attrs:{prop:"image",label:"人脸图片"},scopedSlots:e._u([{key:"default",fn:function(e){return[a("el-popover",{attrs:{placement:"top-start",title:"",trigger:"click"}},[a("img",{staticStyle:{"max-width":"800px","max-height":"800px"},attrs:{src:e.row.image}}),a("img",{staticStyle:{"max-width":"180px","max-height":"80px"},attrs:{slot:"reference",src:e.row.image},slot:"reference"})])]}}])})],1),a("div",{staticClass:"block"},[a("el-pagination",{attrs:{"current-page":e.currentFaceLogsPage,"page-size":10,layout:"prev, pager, next, jumper",total:e.totalFaceLogsPage},on:{"current-change":e.handleCurrentFaceLogsChange,"update:currentPage":function(t){e.currentFaceLogsPage=t},"update:current-page":function(t){e.currentFaceLogsPage=t}}})],1)],1),a("el-dialog",{attrs:{title:"查看人脸组",visible:e.dialogFaceGroup,width:"80%"},on:{"update:visible":function(t){e.dialogFaceGroup=t}}},[a("el-table",{attrs:{data:e.facetable,border:"","header-cell-style":{background:"#f0f0f0",color:"#2a9f93"}}},[a("el-table-column",{attrs:{prop:"id",label:"ID"}}),a("el-table-column",{attrs:{prop:"device_id",label:"设备ID"}}),a("el-table-column",{attrs:{prop:"group_id",label:"人脸组ID"}}),a("el-table-column",{attrs:{prop:"group_name",label:"人脸组名字"}})],1)],1),a("el-dialog",{attrs:{title:"设备："+e.uuid,visible:e.dialogHeart,fullscreen:!0},on:{"update:visible":function(t){e.dialogHeart=t}}},[a("div",{ref:"heartChart",staticStyle:{width:"100%",height:"600px"},attrs:{id:"heartChart"}}),a("el-table",{attrs:{data:e.arr,border:"","header-cell-style":{background:"#f0f0f0",color:"#2a9f93"}}},[a("el-table-column",{attrs:{prop:"id",label:"ID"}}),a("el-table-column",{attrs:{prop:"device_uuid",label:"设备ID"}}),a("el-table-column",{attrs:{prop:"time",label:"时间"}}),a("el-table-column",{attrs:{prop:"updated_at",label:"更新时间"}})],1)],1),a("el-dialog",{attrs:{title:"查看指令",visible:e.dialogCommands,width:"90%"},on:{"update:visible":function(t){e.dialogCommands=t},close:e.closeCommands}},[a("div",{staticClass:"handle-box"},[a("div",{staticClass:"btn"},[a("el-form",{attrs:{model:e.commandform,"label-width":"100px"}},[a("el-form-item",{attrs:{label:"指令"}},[a("el-select",{on:{change:e.changeCommand},model:{value:e.command,callback:function(t){e.command=t},expression:"command"}},e._l(e.commandList,(function(e,t){return a("el-option",{key:t,attrs:{label:e,value:t}})})),1)],1),"setPassword"===e.command?a("div",[a("el-form-item",{attrs:{label:"密码"}},[a("el-input",{attrs:{placeholder:"请输入密码"},model:{value:e.commandform.new_password,callback:function(t){e.$set(e.commandform,"new_password",t)},expression:"commandform.new_password"}})],1)],1):e._e(),"deleteUser"===e.command?a("div",[a("el-form-item",{attrs:{label:"FACE_ID"}},[a("el-input",{attrs:{placeholder:"请输入FACE_ID"},model:{value:e.commandform.face_id,callback:function(t){e.$set(e.commandform,"face_id",t)},expression:"commandform.face_id"}})],1)],1):e._e(),"addUser"===e.command?a("div",[a("el-form-item",{attrs:{label:"FACE_ID"}},[a("el-input",{attrs:{placeholder:"请输入FACE_ID"},model:{value:e.commandform.face_id,callback:function(t){e.$set(e.commandform,"face_id",t)},expression:"commandform.face_id"}})],1)],1):e._e(),a("div",{staticStyle:{"margin-left":"100px"}},[a("el-button",{attrs:{type:"primary"},on:{click:e.sendCommand}},[e._v("发送指令")])],1)],1)],1)]),a("el-table",{attrs:{data:e.commandsData,border:"","header-cell-style":{background:"#f0f0f0",color:"#2a9f93"},"max-height":480}},[a("el-table-column",{attrs:{prop:"id",label:"ID"}}),a("el-table-column",{attrs:{prop:"device_uuid",label:"设备ID"}}),a("el-table-column",{attrs:{prop:"command",label:"指令"}}),a("el-table-column",{attrs:{prop:"command_title",label:"指令名字"}}),a("el-table-column",{attrs:{prop:"state",label:"状态"},scopedSlots:e._u([{key:"default",fn:function(t){return["1"==t.row.state?a("span",[e._v("已创建")]):e._e(),"2"==t.row.state?a("span",[e._v("已下发")]):e._e(),"3"==t.row.state?a("span",[e._v("成功")]):e._e(),"4"==t.row.state?a("span",[e._v("失败")]):e._e()]}}])}),a("el-table-column",{attrs:{prop:"updated_at",label:"更新时间"}})],1),a("div",{staticClass:"block"},[a("el-pagination",{attrs:{"current-page":e.currentCommandsPage,"page-sizes":[10,20,50,100,150,200,250,300],"page-size":e.pageCommandsSize,layout:"sizes, prev, pager, next, jumper",total:e.totalCommandsPage},on:{"current-change":e.handleCurrentCommandsChange,"update:currentPage":function(t){e.currentCommandsPage=t},"update:current-page":function(t){e.currentCommandsPage=t},"size-change":e.handleSizeCommandsChange}})],1)],1),a("el-dialog",{attrs:{title:"查看用户",visible:e.dialogUserList,width:"80%"},on:{"update:visible":function(t){e.dialogUserList=t}}},[a("el-table",{attrs:{data:e.userListData,border:"","header-cell-style":{background:"#f0f0f0",color:"#2a9f93"},"max-height":600}},[a("el-table-column",{attrs:{prop:"name",label:"姓名"}}),a("el-table-column",{attrs:{prop:"face_id",label:"FACE_ID"}}),a("el-table-column",{attrs:{prop:"href",label:"照片"},scopedSlots:e._u([{key:"default",fn:function(e){return[a("el-popover",{attrs:{placement:"top-start",title:"",trigger:"click"}},[a("img",{staticStyle:{"max-width":"800px","max-height":"800px"},attrs:{src:e.row.href}}),a("img",{staticStyle:{"max-width":"180px","max-height":"80px"},attrs:{slot:"reference",src:e.row.href},slot:"reference"})])]}}])})],1),a("div",{staticClass:"block"},[a("el-pagination",{attrs:{"current-page":e.currentUserListPage,"page-sizes":[10,20,50,100,150,200,250,300],"page-size":e.pageUserListSize,layout:"sizes, prev, pager, next, jumper",total:e.totalUserListPage},on:{"current-change":e.handleCurrentUserListChange,"update:currentPage":function(t){e.currentUserListPage=t},"update:current-page":function(t){e.currentUserListPage=t},"size-change":e.handleSizeUserListChange}})],1)],1),a("div",{staticClass:"block"},[a("el-pagination",{attrs:{"current-page":e.currentPage,"page-sizes":[10,20,50,100,150,200,250,300],"page-size":e.pageSize,layout:"sizes, prev, pager, next, jumper",total:e.totalPage},on:{"current-change":e.handleCurrentChange,"update:currentPage":function(t){e.currentPage=t},"update:current-page":function(t){e.currentPage=t},"size-change":e.handleSizeChange}})],1)],1)},o=[],r=(a("4160"),a("ac1f"),a("841c"),a("159b"),a("365c")),i=a("c466"),s={name:"gradems",data:function(){return{dialogLogcat:!1,logCat:"",dialogDevice:!1,typeList:[],type:"",label:"",projectList:[],addressList:[],faceGroupList:[],checkAll:!1,uuidList:[],apkList:[],versionList:[],directionList:[{id:"in",direction:"进"},{id:"out",direction:"出"}],hotness:1,form:{name:"",address_id:"",project_id:"",type:"人脸机",uuid:"",remark:"",configs:[],apk:"",apk_version:"",face_groups:[],direction:""},tableDate:[],dialogFaceGroup:!1,facetable:[],dialogLogs:!1,logstable:[],dialogShowRecord:!1,faceLogsTable:[],uuid:"",address_id:"",dialogHeart:!1,x_formatData:[],x_formatData_value:[],arr:[],dialogCommands:!1,commandsData:[],command_uuid:"",command:"",commandform:{uuid:"",command:"",new_password:"",face_id:""},commandList:[],dialogUserList:!1,userListData:[],user_list_uuid:"",currentUserListPage:1,pageUserListSize:10,totalUserListPage:0,currentCommandsPage:1,pageCommandsSize:10,totalCommandsPage:0,currentFaceLogsPage:1,totalFaceLogsPage:0,currentLogsPage:1,totalLogsPage:0,currentPage:1,pageSize:10,totalPage:0,timer:"",langtime:10}},mounted:function(){this.getDevice(),this.getAddress(),this.getUuid(),this.getApk(),this.getTypes(),this.getProject(),this.getCommandType()},methods:{search:function(){var e=this;r["a"].search(e.uuid).then((function(t){e.tableDate=t.data,e.totalPage=t.total,e.uuid="",e.$message.success("搜索成功！")}))},typeChange:function(e){var t=this;r["a"].searchType(e).then((function(e){t.tableDate=e.data,t.totalPage=e.total,t.$message.success("搜索成功！")}))},getDevice:function(){var e=this,t=this;r["a"].devices(this.currentPage).then((function(a){e.tableDate=a.data,t.totalPage=a.total}))},getTypes:function(){var e=this;r["a"].deviceTypes().then((function(t){console.log(t),e.typeList=t}))},getProject:function(){var e=this;r["a"].projects(e.currentPage).then((function(t){e.projectList=t.data}))},changeProject:function(e){var t=this;t.getAddress(e)},getAddress:function(e){var t=this;r["a"].addresses(t.currentPage,1e3,e).then((function(e){t.addressList=e.data}))},addressChange:function(e){this.getFaceGroup(e)},getFaceGroup:function(e){var t=this;r["a"].faceGroup(e).then((function(e){t.faceGroupList=e.data}))},handleCheckAllChange:function(e){var t=[];this.faceGroupList.forEach((function(e){t.push(e.group_name)})),this.form.face_groups=e?t:[]},getUuid:function(){var e=this;r["a"].uuid(e.currentPage,1e3).then((function(t){e.uuidList=t.data}))},referUUID:function(){var e=this;r["a"].uuid(e.currentPage,1e3).then((function(t){e.uuidList=t.data}))},getApk:function(){var e=this;r["a"].apks(e.currentPage).then((function(t){e.apkList=t.data}))},apkChange:function(e){console.log(e),this.getApkVersion(e)},getApkVersion:function(e){var t=this;r["a"]._apkVersions(e).then((function(e){t.versionList=e.data}))},newDevice:function(){var e=this;switch(e.hotness){case 1:e.form.configs.push({heatvision:"normal"});break;case 2:e.form.configs.push({heatvision:"strict"});break;case 3:e.form.configs.push({heatvision:"none"})}r["a"].device(e.form).then((function(t){e.getUuid(),e.dialogDevice=!1,e.$message.success("提交成功"),e.getDevice(),e.currentPage=1,e.form={name:"",address_id:"",project_id:"",type:"人脸机",uuid:"",remark:"",configs:[],apk:"",apk_version:"",face_groups:[],direction:""}}))},handleShowLog:function(e,t){var a=this;this.dialogLogs=!0,this.uuid=t.uuid,r["a"].deviceLogs(1,10,t.uuid).then((function(e){a.logstable=e.data,a.totalLogsPage=e.total}))},handleCurrentLogsChange:function(e){var t=this;r["a"].deviceLogs(e,10,this.uuid).then((function(e){t.logstable=e.data,t.totalLogsPage=e.total}))},handleShowFace:function(e,t){console.log(t.groups),this.dialogFaceGroup=!0,this.facetable=t.groups},handleShowRecord:function(e,t){var a=this;this.dialogShowRecord=!0,this.uuid=t.uuid,this.address_id=t.address_id,r["a"].deviceFaceLogs(1,10,t.uuid,t.address_id).then((function(e){a.faceLogsTable=e.data,a.totalFaceLogsPage=e.total}))},handleDel:function(){},showlogcat:function(e,t){this.dialogLogcat=!0,this.logCat=t.logCat},handleHeart:function(e,t){console.log(t);var a=this;a.dialogHeart=!0,a.uuid=t.uuid,a.x_formatData=[],clearInterval(a.timer),a.langtime=10,a.drawLine(),r["a"].deviceHeart(a.uuid).then((function(e){a.arr=e.originData,a.arr.forEach((function(e){e.time=i["a"].formatTime(e.time,"Y-M-D h:m:s")}))}))},drawLine:function(){var e=this;e.$nextTick((function(){e.x_formatData=[];var t=[],a=e.$echarts.init(e.$refs.heartChart);a.setOption({title:{text:"网络心跳图NaN"},tooltip:{},legend:{data:["销量"]},xAxis:{name:"时间/分钟",data:[]},yAxis:{},series:[{name:"time",type:"line"}]}),a.showLoading(),r["a"].deviceHeart(e.uuid).then((function(n){a.hideLoading(),t=[];for(var o=0;o<n.formatData.length;o++)e.x_formatData.push(o),t.push(n.formatData[o]);a.setOption({xAxis:{data:e.x_formatData},series:[{name:"time",data:t}]})})),e.timer=setInterval((function(){if(0==e.langtime){e.x_formatData=[],t=[];var a=e.$echarts.init(e.$refs.heartChart);a.setOption({title:{text:"网络心跳图"+e.langtime--+"秒后刷新"},tooltip:{},legend:{data:["销量"]},xAxis:{name:"时间/分钟",data:[]},yAxis:{},series:[{name:"time",type:"line"}]}),a.showLoading(),r["a"].deviceHeart(e.uuid).then((function(n){a.hideLoading();for(var o=0;o<n.formatData.length;o++)e.x_formatData.push(o),t.push(n.formatData[o]);a.setOption({xAxis:{data:e.x_formatData},series:[{name:"time",data:t}]})})),e.langtime=10}else e.$nextTick((function(){var t=e.$echarts.init(e.$refs.heartChart);t.setOption({title:{text:"网络心跳图"+e.langtime--+"秒后刷新"}})}))}),1e3)}))},handleShowCommands:function(e,t){var a=this;a.dialogCommands=!0,a.command_uuid=t.uuid,console.log("uuid",a.command_uuid),r["a"].deviceCommands(1,10,t.uuid).then((function(e){a.commandsData=e.data,a.totalCommandsPage=e.total}))},getCommandType:function(){var e=this;r["a"].commandsType(4).then((function(t){e.commandList=t}))},changeCommand:function(e){var t=this;switch(t.commandform={},t.command){case"setPassword":t.commandform={uuid:t.command_uuid,command:"setPassword",new_password:""};break;case"deleteUser":t.commandform={uuid:t.command_uuid,command:"deleteUser",face_id:""};break;case"addUser":t.commandform={uuid:t.command_uuid,command:"addUser",face_id:""};break;case"getSoftVersion":t.commandform={uuid:t.command_uuid,command:"getSoftVersion"};break;case"restart":t.commandform={uuid:t.command_uuid,command:"restart"}}},sendCommand:function(){var e=this;switch(e.command){case"setPassword":r["a"].sendDeviceCommand(e.commandform).then((function(t){e.$message.success("发送成功"),e.command=""}));break;case"deleteUser":r["a"].sendDeviceCommand(e.commandform).then((function(t){e.$message.success("发送成功"),e.command=""}));break;case"addUser":r["a"].sendDeviceCommand(e.commandform).then((function(t){e.$message.success("发送成功"),e.command=""}));break;case"getSoftVersion":r["a"].sendDeviceCommand(e.commandform).then((function(t){e.$message.success("发送成功"),e.command=""}));break;case"restart":r["a"].sendDeviceCommand(e.commandform).then((function(t){e.$message.success("发送成功"),e.command=""}))}},closeCommands:function(){var e=this;e.command_uuid="",e.command="",console.log("111uuid",e.command_uuid)},handleUserList:function(e,t){var a=this;a.dialogUserList=!0,a.user_list_uuid=t.uuid,r["a"].deviceUserList(1,10,t.uuid).then((function(e){a.userListData=e}))},handleCurrentChange:function(e){var t=this;t.currentPage=e,r["a"].devices(e,t.pageSize,t.type).then((function(e){t.tableDate=e.data,t.totalPage=e.total}))},handleSizeChange:function(e){var t=this;t.pageSize=e,r["a"].devices(t.currentPage,e,t.type).then((function(e){t.tableDate=e.data,t.totalPage=e.total}))},handleCurrentFaceLogsChange:function(e){var t=this;r["a"].deviceFaceLogs(e,10,this.uuid,this.address_id).then((function(e){t.faceLogsTable=e.data,t.totalFaceLogsPage=e.total}))},handleSizeCommandsChange:function(e){var t=this;t.pageCommandsSize=e,r["a"].deviceCommands(t.currentCommandsPage,e,t.command_uuid).then((function(e){t.commandsData=e.data,t.totalCommandsPage=e.total}))},handleCurrentCommandsChange:function(e){var t=this;t.currentCommandsPage=e,r["a"].deviceCommands(e,t.pageCommandsSize,t.command_uuid).then((function(e){t.commandsData=e.data,t.totalCommandsPage=e.total}))}},beforeDestroy:function(){clearInterval(this.timer)}},l=s,c=(a("13b8"),a("2877")),d=Object(c["a"])(l,n,o,!1,null,"474cd0e6",null);t["default"]=d.exports},c466:function(e,t,a){"use strict";a("d3b7"),a("ac1f"),a("25f0"),a("5319");var n={};function o(e){return e=e.toString(),e[1]?e:"0"+e}n.formatTime=function(e,t){var a=["Y","M","D","h","m","s"],n=[],r=new Date(1e3*e);for(var i in n.push(r.getFullYear()),n.push(o(r.getMonth()+1)),n.push(o(r.getDate())),n.push(o(r.getHours())),n.push(o(r.getMinutes())),n.push(o(r.getSeconds())),n)t=t.replace(a[i],n[i]);return t},t["a"]=n}}]);
//# sourceMappingURL=chunk-347f69c2.6100f6ce.js.map