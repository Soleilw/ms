(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5617beb8"],{"30b50":function(e,a,t){},"365c":function(e,a,t){"use strict";var n=t("be3b"),o=t("99b1"),i=t.n(o),c={aip:function(e){return n["a"].post(i.a.Aip,e)},delAip:function(e){return n["a"].del(i.a.Aip,{id:e})},aips:function(e,a){return n["a"].get(i.a.Aips,{page:e,limit:a})},apk:function(e){return n["a"].post(i.a.Apk,e)},apks:function(e,a){return n["a"].get(i.a.Apks,{page:e,limit:a})},apkVersion:function(e){return n["a"].post(i.a.ApkVersion,e)},apkVersions:function(e,a,t){return n["a"].get(i.a.ApkVersions,{page:e,limit:a,apk_id:t})},_apkVersions:function(e){return n["a"].get(i.a.ApkVersions,{id:e})},publishApk:function(e){return n["a"].post(i.a.PublishApk,e)},project:function(e){return n["a"].post(i.a.Project,e)},projects:function(e,a){return n["a"].get(i.a.Projects,{page:e,limit:a})},address:function(e){return n["a"].post(i.a.Address,e)},getaddress:function(e){return n["a"].get(i.a.Address,{id:e})},addresses:function(e,a,t){return n["a"].get(i.a.Addresses,{page:e,limit:a,project_id:t})},addressTypes:function(e,a){return n["a"].get(i.a.AddressTypes,{page:e,limit:a})},face:function(e){return n["a"].post(i.a.Face,e)},faces:function(e,a){return n["a"].get(i.a.Faces,{page:e,limit:a})},areas:function(e,a,t){return n["a"].get(i.a.Areas,{page:e,limit:a,parent_id:t})},area:function(e){return n["a"].post(i.a.Area,e)},device:function(e){return n["a"].post(i.a.Device,e)},devices:function(e,a,t,o){return n["a"].get(i.a.Devices,{page:e,limit:a,type:t,uuid:o})},_devices:function(e,a,t){return n["a"].get(i.a.Devices,{direction:e,addresses:a,limit:t})},deviceLogs:function(e,a,t,o){return n["a"].get(i.a.DeviceLogs,{page:e,limit:a,uuid:t,type:o})},deviceFaceLogs:function(e,a,t,o){return n["a"].get(i.a.DeviceRecord,{page:e,limit:a,uuid:t,address_id:o})},deviceTypes:function(){return n["a"].get(i.a.DeviceTypes)},deviceHeart:function(e){return n["a"].get(i.a.DeviceHeartbeat,{uuid:e})},deviceCommands:function(e,a,t){return n["a"].get(i.a.DeviceCommands,{page:e,limit:a,uuid:t})},commandsType:function(e){return n["a"].get(i.a.Commands,{type:e})},sendDeviceCommand:function(e){return n["a"].post(i.a.SendDeviceCommand,e)},deviceUserList:function(e,a,t){return n["a"].get(i.a.DeviceUserList,{page:e,limit:a,uuid:t})},faceGroup:function(e){return n["a"].get(i.a.FaceGroup,{address_id:e})},uuid:function(e,a){return n["a"].get(i.a.Uuid,{page:e,limit:a})},dangerFace:function(e){return n["a"].post(i.a.DangerFace,e)},delDangerFace:function(e){return n["a"].del(i.a.DelDangerFace,{id:e})},dangerFaces:function(e,a){return n["a"].get(i.a.DangerFaces,{page:e,limit:a})},dangerLogs:function(e,a){return n["a"].get(i.a.DangerLogs,{page:e,limit:a})},roles:function(e,a){return n["a"].get(i.a.Roles,{page:e,limit:a})},oneRole:function(e){return n["a"].get(i.a.Role,{name:e})},role:function(e){return n["a"].post(i.a.Role,e)}};a["a"]=c},"9f87":function(e,a,t){"use strict";t.r(a);var n=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],attrs:{"element-loading-text":"获取数据中"}},[t("div",{staticClass:"handle-box"},[t("div",{staticClass:"btn"},[t("el-button",{attrs:{type:"primary"},on:{click:function(a){e.dialogCommand=!0}}},[e._v("发送指令")])],1),t("el-dialog",{attrs:{title:"发送指令",visible:e.dialogCommand},on:{"update:visible":function(a){e.dialogCommand=a},close:e.closeCommands}},[t("div",{staticClass:"btn"},[t("el-form",{attrs:{model:e.commandform,"label-width":"100px"}},[t("el-form-item",{attrs:{label:"设备uuid"}},[t("el-input",{attrs:{placeholder:"请输入uuid"},model:{value:e.command_uuid,callback:function(a){e.command_uuid=a},expression:"command_uuid"}})],1),t("el-form-item",{attrs:{label:"指令"}},[t("el-select",{on:{change:e.changeCommand},model:{value:e.command,callback:function(a){e.command=a},expression:"command"}},e._l(e.commandList,(function(e,a){return t("el-option",{key:a,attrs:{label:e,value:a}})})),1)],1),"setPassword"===e.command?t("div",[t("el-form-item",{attrs:{label:"密码"}},[t("el-input",{attrs:{placeholder:"请输入密码"},model:{value:e.commandform.new_password,callback:function(a){e.$set(e.commandform,"new_password",a)},expression:"commandform.new_password"}})],1)],1):e._e(),"deleteUser"===e.command?t("div",[t("el-form-item",{attrs:{label:"FACE_ID"}},[t("el-input",{attrs:{placeholder:"请输入FACE_ID"},model:{value:e.commandform.face_id,callback:function(a){e.$set(e.commandform,"face_id",a)},expression:"commandform.face_id"}})],1)],1):e._e(),"addUser"===e.command?t("div",[t("el-form-item",{attrs:{label:"FACE_ID"}},[t("el-input",{attrs:{placeholder:"请输入FACE_ID"},model:{value:e.commandform.face_id,callback:function(a){e.$set(e.commandform,"face_id",a)},expression:"commandform.face_id"}})],1)],1):e._e(),t("div",{staticStyle:{"margin-left":"100px"}},[t("el-button",{attrs:{type:"primary"},on:{click:e.sendCommand}},[e._v("发送指令")])],1)],1)],1)]),t("div",{staticClass:"btn"},[t("el-input",{staticClass:"input-with-select",attrs:{placeholder:"输入设备号"},nativeOn:{keyup:function(a){return!a.type.indexOf("key")&&e._k(a.keyCode,"enter",13,a.key,"Enter")?null:e.search(e.uuid)}},model:{value:e.uuid,callback:function(a){e.uuid=a},expression:"uuid"}},[t("el-button",{attrs:{slot:"append",icon:"el-icon-search"},on:{click:function(a){return e.search(e.uuid)}},slot:"append"})],1)],1)],1),t("el-table",{attrs:{data:e.commandsData,border:"","header-cell-style":{background:"#f0f0f0",color:"#2a9f93"},"max-height":480}},[t("el-table-column",{attrs:{prop:"id",label:"ID"}}),t("el-table-column",{attrs:{prop:"device_uuid",label:"设备ID"}}),t("el-table-column",{attrs:{prop:"command",label:"指令"}}),t("el-table-column",{attrs:{prop:"command_title",label:"指令名字"}}),t("el-table-column",{attrs:{prop:"state",label:"状态"},scopedSlots:e._u([{key:"default",fn:function(a){return["1"==a.row.state?t("span",[e._v("已创建")]):e._e(),"2"==a.row.state?t("span",[e._v("已下发")]):e._e(),"3"==a.row.state?t("span",[e._v("成功")]):e._e(),"4"==a.row.state?t("span",[e._v("失败")]):e._e()]}}])}),t("el-table-column",{attrs:{prop:"updated_at",label:"更新时间"}}),t("el-table-column",{attrs:{label:"操作",prop:"data",width:"200px"},scopedSlots:e._u([{key:"default",fn:function(a){return[t("el-popover",{attrs:{placement:"right",width:"800",trigger:"click"}},[e._l(JSON.parse(a.row.data),(function(a,n){return t("el-row",{key:n,staticStyle:{padding:"10px"}},[e._v(" "+e._s(n)+": "+e._s(a)+" ")])})),t("el-button",{attrs:{slot:"reference"},slot:"reference"},[e._v("查看内容")])],2)]}}])})],1),t("div",{staticClass:"block"},[t("el-pagination",{attrs:{"current-page":e.current,"page-sizes":[10,20,50,100,150,200,250,300],"page-size":e.size,layout:"sizes, prev, pager, next, jumper",total:e.total},on:{"current-change":e.currentPage,"update:currentPage":function(a){e.current=a},"update:current-page":function(a){e.current=a},"size-change":e.sizePage,"prev-click":e.prevChange,"next-click":e.nextChange}})],1)],1)},o=[],i=t("365c"),c={name:"gradems",data:function(){return{loading:!0,dialogCommand:!1,uuid:"",command_uuid:"",command:"",commandform:{},commandsData:[],more_data:"",commandList:[],current:1,size:10,total:0}},mounted:function(){this.getCommands(),this.getCommandType()},methods:{search:function(){var e=this;i["a"].deviceCommands(1,e.size,e.uuid).then((function(a){e.loading=!1,e.commandsData=a.data,e.total=a.total,e.$message.success("搜索成功！")})).catch((function(a){e.loading=!1}))},getCommands:function(){var e=this;i["a"].deviceCommands(1,10).then((function(a){e.loading=!1,e.commandsData=a.data,e.total=a.total})).catch((function(a){e.loading=!1}))},getCommandType:function(){var e=this;i["a"].commandsType(4).then((function(a){e.commandList=a}))},changeCommand:function(e){var a=this;switch(a.commandform={},a.command){case"setPassword":a.commandform={uuid:a.command_uuid,command:"setPassword",new_password:""};break;case"deleteUser":a.commandform={uuid:a.command_uuid,command:"deleteUser",face_id:""};break;case"addUser":a.commandform={uuid:a.command_uuid,command:"addUser",face_id:""};break;case"getSoftVersion":a.commandform={uuid:a.command_uuid,command:"getSoftVersion"};break;case"restart":a.commandform={uuid:a.command_uuid,command:"restart"}}},sendCommand:function(){var e=this;switch(e.command){case"setPassword":i["a"].sendDeviceCommand(e.commandform).then((function(a){e.$message.success("发送成功"),e.command_uuid="",e.command="",e.dialogCommand=!1}));break;case"deleteUser":i["a"].sendDeviceCommand(e.commandform).then((function(a){e.$message.success("发送成功"),e.command_uuid="",e.command="",e.dialogCommand=!1}));break;case"addUser":i["a"].sendDeviceCommand(e.commandform).then((function(a){e.$message.success("发送成功"),e.command_uuid="",e.command="",e.dialogCommand=!1}));break;case"getSoftVersion":i["a"].sendDeviceCommand(e.commandform).then((function(a){e.$message.success("发送成功"),e.command_uuid="",e.command="",e.dialogCommand=!1}));break;case"restart":i["a"].sendDeviceCommand(e.commandform).then((function(a){e.$message.success("发送成功"),e.uuid="",e.command="",e.dialogCommand=!1}))}},closeCommands:function(){var e=this;console.log("111uuid",e.command_uuid),e.command_uuid="",e.command=""},currentPage:function(e){var a=this;a.loading=!0,a.current=e,i["a"].deviceCommands(e,a.size,a.uuid).then((function(e){a.loading=!1,a.commandsData=e.data,a.total=e.total})).catch((function(e){a.loading=!1}))},sizePage:function(e){var a=this;a.loading=!0,a.size=e,i["a"].deviceCommands(a.current,e,a.uuid).then((function(e){a.loading=!1,a.commandsData=e.data,a.total=e.total})).catch((function(e){a.loading=!1}))},prevChange:function(e){var a=this;a.loading=!0,a.current=e,i["a"].deviceCommands(e,a.size,a.uuid).then((function(e){a.loading=!1,a.commandsData=e.data,a.total=e.total})).catch((function(e){a.loading=!1}))},nextChange:function(e){var a=this;a.loading=!0,a.current=e,i["a"].deviceCommands(e,a.size,a.uuid).then((function(e){a.loading=!1,a.commandsData=e.data,a.total=e.total})).catch((function(e){a.loading=!1}))}},beforeDestroy:function(){clearInterval(this.timer)}},d=c,r=(t("df1f"),t("2877")),s=Object(r["a"])(d,n,o,!1,null,"21661c03",null);a["default"]=s.exports},df1f:function(e,a,t){"use strict";var n=t("30b50"),o=t.n(n);o.a}}]);
//# sourceMappingURL=chunk-5617beb8.c363a70b.js.map