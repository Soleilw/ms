(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e47ac14e"],{"0338":function(e,a,t){},"365c":function(e,a,t){"use strict";var n=t("be3b"),o=t("99b1"),i=t.n(o),r={aip:function(e){return n["a"].post(i.a.Aip,e)},delAip:function(e){return n["a"].del(i.a.Aip,{id:e})},aips:function(e,a){return n["a"].get(i.a.Aips,{page:e,limit:a})},apk:function(e){return n["a"].post(i.a.Apk,e)},apks:function(e,a){return n["a"].get(i.a.Apks,{page:e,limit:a})},apkVersion:function(e){return n["a"].post(i.a.ApkVersion,e)},apkVersions:function(e,a,t){return n["a"].get(i.a.ApkVersions,{page:e,limit:a,apk_id:t})},_apkVersions:function(e){return n["a"].get(i.a.ApkVersions,{id:e})},publishApk:function(e){return n["a"].post(i.a.PublishApk,e)},project:function(e){return n["a"].post(i.a.Project,e)},projects:function(e,a){return n["a"].get(i.a.Projects,{page:e,limit:a})},address:function(e){return n["a"].post(i.a.Address,e)},getaddress:function(e){return n["a"].get(i.a.Address,{id:e})},addresses:function(e,a,t){return n["a"].get(i.a.Addresses,{page:e,limit:a,project_id:t})},addressTypes:function(e,a){return n["a"].get(i.a.AddressTypes,{page:e,limit:a})},face:function(e){return n["a"].post(i.a.Face,e)},faces:function(e,a){return n["a"].get(i.a.Faces,{page:e,limit:a})},pushRecords:function(e,a,t){return n["a"].get(i.a.PushRecords,{page:e,limit:a,name:t})},pushRecordCommands:function(e){return n["a"].get(i.a.PushRecordCommands,{id:e})},againPush:function(e){return n["a"].post(i.a.PushRecord,e)},areas:function(e,a,t){return n["a"].get(i.a.Areas,{page:e,limit:a,parent_id:t})},area:function(e){return n["a"].post(i.a.Area,e)},device:function(e){return n["a"].post(i.a.Device,e)},_device:function(e){return n["a"].get(i.a.Device,{uuid:e})},devices:function(e,a,t,o,r){return n["a"].get(i.a.Devices,{page:e,limit:a,type:t,uuid:o,address_id:r})},_devices:function(e,a,t){return n["a"].get(i.a.Devices,{direction:e,addresses:a,limit:t})},deviceLogs:function(e,a,t,o){return n["a"].get(i.a.DeviceLogs,{page:e,limit:a,uuid:t,type:o})},deviceFaceLogs:function(e,a,t,o){return n["a"].get(i.a.DeviceRecord,{page:e,limit:a,uuid:t,address_id:o})},deviceTypes:function(){return n["a"].get(i.a.DeviceTypes)},deviceHeart:function(e){return n["a"].get(i.a.DeviceHeartbeat,{uuid:e})},deviceCommands:function(e,a,t){return n["a"].get(i.a.DeviceCommands,{page:e,limit:a,uuid:t})},commandsType:function(e){return n["a"].get(i.a.Commands,{type:e})},sendDeviceCommand:function(e){return n["a"].post(i.a.SendDeviceCommand,e)},deviceUserList:function(e,a,t){return n["a"].get(i.a.DeviceUserList,{page:e,limit:a,uuid:t})},faceGroup:function(e){return n["a"].get(i.a.FaceGroup,{address_id:e})},uuid:function(e,a){return n["a"].get(i.a.Uuid,{page:e,limit:a})},dangerFace:function(e){return n["a"].post(i.a.DangerFace,e)},delDangerFace:function(e){return n["a"].del(i.a.DelDangerFace,{id:e})},dangerFaces:function(e,a){return n["a"].get(i.a.DangerFaces,{page:e,limit:a})},dangerLogs:function(e,a){return n["a"].get(i.a.DangerLogs,{page:e,limit:a})},roles:function(e,a){return n["a"].get(i.a.Roles,{page:e,limit:a})},oneRole:function(e){return n["a"].get(i.a.Role,{name:e})},role:function(e){return n["a"].post(i.a.Role,e)}};a["a"]=r},"9f87":function(e,a,t){"use strict";t.r(a);var n=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],attrs:{"element-loading-text":"获取数据中"}},[t("div",{staticClass:"handle-box"},[t("div",{staticClass:"btn"},[t("el-button",{attrs:{type:"primary"},on:{click:e.addCommand}},[e._v("发送指令")])],1),t("el-dialog",{attrs:{title:"发送指令",visible:e.dialogCommand},on:{"update:visible":function(a){e.dialogCommand=a},close:e.closeCommands}},[t("div",{staticClass:"btn"},[t("el-form",{attrs:{model:e.commandform,"label-width":"100px"}},[t("el-form-item",{attrs:{label:"请选择类型"}},[t("el-select",{attrs:{placeholder:"请选择类型"},on:{change:e.typeChange},model:{value:e.type,callback:function(a){e.type=a},expression:"type"}},e._l(e.typeList,(function(a,n){return t("el-option",{key:n,attrs:{label:e.typeList[n],value:n}})})),1)],1),t("el-form-item",{attrs:{label:"请选择省市区"}},[t("el-cascader",{attrs:{placeholder:"请选择省市区",options:e.cascaderData,props:e.props},on:{change:e.proChange},model:{value:e.pro_city_area,callback:function(a){e.pro_city_area=a},expression:"pro_city_area"}})],1),t("el-form-item",{attrs:{label:"设备uuid"}},[t("el-select",{attrs:{placeholder:"请选择uuid",filterable:""},on:{change:e.uuidChange},model:{value:e.command_uuid,callback:function(a){e.command_uuid=a},expression:"command_uuid"}},e._l(e.uuidList,(function(e,a){return t("el-option",{key:a,attrs:{label:e.uuid,value:e.uuid}})})),1)],1),t("el-form-item",{attrs:{label:"指令"}},[t("el-select",{on:{change:e.changeCommand},model:{value:e.command,callback:function(a){e.command=a},expression:"command"}},e._l(e.commandList,(function(e,a){return t("el-option",{key:a,attrs:{label:e,value:a}})})),1)],1),"setPassword"===e.command?t("div",[t("el-form-item",{attrs:{label:"密码"}},[t("el-input",{attrs:{placeholder:"请输入密码"},model:{value:e.commandform.new_password,callback:function(a){e.$set(e.commandform,"new_password",a)},expression:"commandform.new_password"}})],1)],1):e._e(),"deleteUser"===e.command?t("div",[t("el-form-item",{attrs:{label:"FACE_ID"}},[t("el-input",{attrs:{placeholder:"请输入FACE_ID"},model:{value:e.commandform.face_id,callback:function(a){e.$set(e.commandform,"face_id",a)},expression:"commandform.face_id"}})],1)],1):e._e(),"addUser"===e.command?t("div",[t("el-form-item",{attrs:{label:"FACE_ID"}},[t("el-input",{attrs:{placeholder:"请输入FACE_ID"},model:{value:e.commandform.face_id,callback:function(a){e.$set(e.commandform,"face_id",a)},expression:"commandform.face_id"}})],1)],1):e._e(),"setUserAuthTime"===e.command?t("div",[t("el-form-item",{attrs:{label:"人脸生效时间"}},[t("el-date-picker",{attrs:{type:"datetimerange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期","value-format":e.valueFormatTime},on:{change:e.chooseTime},model:{value:e.userAuthTime,callback:function(a){e.userAuthTime=a},expression:"userAuthTime"}})],1),t("el-form-item",{attrs:{label:"FACE_ID"}},[t("el-input",{attrs:{placeholder:"请输入FACE_ID"},model:{value:e.commandform.face_id,callback:function(a){e.$set(e.commandform,"face_id",a)},expression:"commandform.face_id"}})],1)],1):e._e(),t("div",{staticStyle:{"margin-left":"100px"}},[t("el-button",{attrs:{type:"primary"},on:{click:e.sendCommand}},[e._v("发送")])],1)],1)],1)]),t("div",{staticClass:"btn"},[t("el-input",{staticClass:"input-with-select",attrs:{placeholder:"输入设备号"},nativeOn:{keyup:function(a){return!a.type.indexOf("key")&&e._k(a.keyCode,"enter",13,a.key,"Enter")?null:e.search(e.uuid)}},model:{value:e.uuid,callback:function(a){e.uuid=a},expression:"uuid"}},[t("el-button",{attrs:{slot:"append",icon:"el-icon-search"},on:{click:function(a){return e.search(e.uuid)}},slot:"append"})],1)],1)],1),t("el-table",{attrs:{data:e.commandsData,border:"","header-cell-style":{background:"#f0f0f0",color:"#2a9f93"},"max-height":480}},[t("el-table-column",{attrs:{prop:"id",label:"ID"}}),t("el-table-column",{attrs:{prop:"device_uuid",label:"设备ID"}}),t("el-table-column",{attrs:{prop:"command",label:"指令"}}),t("el-table-column",{attrs:{prop:"command_title",label:"指令名字"}}),t("el-table-column",{attrs:{prop:"state",label:"状态"},scopedSlots:e._u([{key:"default",fn:function(a){return["1"==a.row.state?t("span",[e._v("已创建")]):e._e(),"2"==a.row.state?t("span",[e._v("已下发")]):e._e(),"3"==a.row.state?t("span",[e._v("成功")]):e._e(),"4"==a.row.state?t("span",[e._v("失败")]):e._e()]}}])}),t("el-table-column",{attrs:{prop:"updated_at",label:"更新时间"}}),t("el-table-column",{attrs:{label:"操作",prop:"data",width:"200px"},scopedSlots:e._u([{key:"default",fn:function(a){return[t("el-popover",{attrs:{placement:"right",width:"800",trigger:"click"}},[e._l(JSON.parse(a.row.data),(function(a,n){return t("el-row",{key:n,staticStyle:{padding:"10px"}},[e._v(" "+e._s(n)+": "+e._s(a)+" ")])})),t("el-button",{attrs:{slot:"reference"},slot:"reference"},[e._v("查看内容")])],2)]}}])})],1),t("div",{staticClass:"block"},[t("el-pagination",{attrs:{"current-page":e.current,"page-sizes":[10,20,50,100,150,200,250,300],"page-size":e.size,layout:"sizes, prev, pager, next, jumper",total:e.total},on:{"current-change":e.currentPage,"update:currentPage":function(a){e.current=a},"update:current-page":function(a){e.current=a},"size-change":e.sizePage}})],1)],1)},o=[],i=(t("7db0"),t("4160"),t("159b"),t("365c")),r={name:"gradems",data:function(){return{loading:!0,dialogCommand:!1,uuidList:[],typeList:[],type:"",uuid:"",command_uuid:"",command:"",commandform:{},commandsData:[],userAuthTime:[],valueFormatTime:"yyyy-MM-dd HH:mm:ss",more_data:"",commandList:[],pro_city_area:[],pro_city_area_id:"",cascaderData:[],props:{label:"title",value:"id",lazy:!0,lazyLoad:function(e,a){var t=e.level;if(1==t){var n=e.data.id;i["a"].areas(1,100,n).then((function(e){var n=e.data;n.forEach((function(e){e.leaf=t>=3})),a(n)}))}if(2==t){var o=e.data.id;i["a"].areas(1,100,o).then((function(e){var n=e.data;n.forEach((function(e){e.leaf=t>=3})),a(n)}))}if(3==t){var r=e.data.id;i["a"].areas(1,100,r).then((function(e){var n=e.data;n.forEach((function(e){e.leaf=t>=3})),a(n)}))}}},current:1,size:10,total:0}},mounted:function(){this.getCommands(),this.getPro()},methods:{getCommands:function(){var e=this;i["a"].deviceCommands(1,10).then((function(a){e.loading=!1,e.commandsData=a.data,e.total=a.total})).catch((function(a){e.loading=!1}))},addCommand:function(){var e=this;e.dialogCommand=!0,i["a"].deviceTypes().then((function(a){e.typeList=a}))},typeChange:function(e){var a=this;a.getUUIDlist(e,a.pro_city_area_id)},getPro:function(){var e=this;i["a"].areas(1,100,0).then((function(a){e.cascaderData=a.data}))},proChange:function(e){var a=this;a.pro_city_area_id=e[3],a.getUUIDlist(a.type,a.pro_city_area_id)},getUUIDlist:function(e,a){var t=this;i["a"].devices(1,1e3,e,0,a).then((function(e){t.uuidList=e.data}))},uuidChange:function(e){var a=this;a.uuidList.find((function(t){t.uuid===e&&i["a"].commandsType(t.type).then((function(e){a.commandList=e}))}))},getCommandType:function(e){},search:function(){var e=this;i["a"].deviceCommands(1,e.size,e.uuid).then((function(a){e.loading=!1,e.commandsData=a.data,e.total=a.total,e.$message.success("搜索成功！")})).catch((function(a){e.loading=!1}))},chooseTime:function(e){console.log(this.userAuthTime)},changeCommand:function(e){var a=this;switch(a.commandform={},a.command){case"setPassword":a.commandform={uuid:a.command_uuid,command:"setPassword",new_password:""};break;case"deleteUser":a.commandform={uuid:a.command_uuid,command:"deleteUser",face_id:""};break;case"addUser":a.commandform={uuid:a.command_uuid,command:"addUser",face_id:""};break;case"getSoftVersion":a.commandform={uuid:a.command_uuid,command:"getSoftVersion"};break;case"openDoor":a.commandform={uuid:a.command_uuid,command:"openDoor"};break;case"setUserAuthTime":a.commandform={uuid:a.command_uuid,command:"setUserAuthTime",auth_start_time:"",auth_end_time:"",face_id:""};break;case"restart":a.commandform={uuid:a.command_uuid,command:"restart"}}},sendCommand:function(){var e=this;if(e.command)switch(e.command){case"setPassword":i["a"].sendDeviceCommand(e.commandform).then((function(a){e.$message.success("发送成功"),e.command_uuid="",e.command="",e.dialogCommand=!1,e.getCommands()}));break;case"deleteUser":i["a"].sendDeviceCommand(e.commandform).then((function(a){e.$message.success("发送成功"),e.command_uuid="",e.command="",e.commandform.face_id="",e.dialogCommand=!1,e.getCommands()}));break;case"addUser":i["a"].sendDeviceCommand(e.commandform).then((function(a){e.$message.success("发送成功"),e.command_uuid="",e.command="",e.commandform.face_id="",e.dialogCommand=!1,e.getCommands()}));break;case"getSoftVersion":i["a"].sendDeviceCommand(e.commandform).then((function(a){e.$message.success("发送成功"),e.command_uuid="",e.command="",e.dialogCommand=!1,e.getCommands()}));break;case"openDoor":i["a"].sendDeviceCommand(e.commandform).then((function(a){e.$message.success("发送成功"),e.command_uuid="",e.command="",e.dialogCommand=!1,e.getCommands()}));break;case"setUserAuthTime":e.commandform.auth_start_time=e.userAuthTime[0],e.commandform.auth_end_time=e.userAuthTime[1],i["a"].sendDeviceCommand(e.commandform).then((function(a){e.$message.success("发送成功"),e.command_uuid="",e.command="",e.commandform.face_id="",e.dialogCommand=!1,e.getCommands()}));break;case"restart":i["a"].sendDeviceCommand(e.commandform).then((function(a){e.$message.success("发送成功"),e.uuid="",e.command="",e.dialogCommand=!1,e.getCommands()}))}else e.$message.warning("请选择指令！")},closeCommands:function(){var e=this;console.log("111uuid",e.command_uuid),e.command_uuid="",e.command=""},currentPage:function(e){var a=this;a.loading=!0,a.current=e,i["a"].deviceCommands(e,a.size,a.uuid).then((function(e){a.loading=!1,a.commandsData=e.data,a.total=e.total})).catch((function(e){a.loading=!1}))},sizePage:function(e){var a=this;a.loading=!0,a.size=e,i["a"].deviceCommands(a.current,e,a.uuid).then((function(e){a.loading=!1,a.commandsData=e.data,a.total=e.total})).catch((function(e){a.loading=!1}))}},beforeDestroy:function(){clearInterval(this.timer)}},c=r,d=(t("a908"),t("2877")),s=Object(d["a"])(c,n,o,!1,null,"1f6b6f27",null);a["default"]=s.exports},a908:function(e,a,t){"use strict";var n=t("0338"),o=t.n(n);o.a}}]);
//# sourceMappingURL=chunk-e47ac14e.540abb98.js.map