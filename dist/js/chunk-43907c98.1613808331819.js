(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-43907c98"],{"365c":function(e,t,a){"use strict";var n=a("ade3"),r=a("be3b"),i=a("99b1"),s=a.n(i),o={aip:function(e){return r["a"].post(s.a.Aip,e)},delAip:function(e){return r["a"].del(s.a.Aip,{id:e})},aips:function(e,t){return r["a"].get(s.a.Aips,{page:e,limit:t})},apk:function(e){return r["a"].post(s.a.Apk,e)},apks:function(e,t){return r["a"].get(s.a.Apks,{page:e,limit:t})},apkVersion:function(e){return r["a"].post(s.a.ApkVersion,e)},apkVersions:function(e,t,a){return r["a"].get(s.a.ApkVersions,{page:e,limit:t,apk_id:a})},_apkVersions:function(e){return r["a"].get(s.a.ApkVersions,{id:e})},publishApk:function(e){return r["a"].post(s.a.PublishApk,e)},project:function(e){return r["a"].post(s.a.Project,e)},projects:function(e,t){return r["a"].get(s.a.Projects,{page:e,limit:t})},address:function(e){return r["a"].post(s.a.Address,e)},getaddress:function(e){return r["a"].get(s.a.Address,{id:e})},addresses:function(e,t,a,n,i){return r["a"].get(s.a.Addresses,{page:e,limit:t,project_id:a,area_id:n,address:i})},addressTypes:function(e,t){return r["a"].get(s.a.AddressTypes,{page:e,limit:t})},addressesMap:function(e,t,a){return r["a"].get(s.a.Addresses,{page:e,limit:t,type:a})},face:function(e){return r["a"].post(s.a.Face,e)},faces:function(e,t,a){return r["a"].get(s.a.Faces,{page:e,limit:t,name:a})},delFace:function(e){return r["a"].get(s.a.DeleteFace,{id:e})},searchFace:function(e){return r["a"].post(s.a.SearchImageFace,e)},pushRecords:function(e,t,a,n){return r["a"].get(s.a.PushRecords,{page:e,limit:t,name:a,address:n})},pushRecordCommands:function(e){return r["a"].get(s.a.PushRecordCommands,{id:e})},againPush:function(e){return r["a"].post(s.a.PushRecord,e)},areas:function(e,t,a){return r["a"].get(s.a.Areas,{page:e,limit:t,parent_id:a})},area:function(e){return r["a"].post(s.a.Area,e)},device:function(e){return r["a"].post(s.a.Device,e)},_device:function(e){return r["a"].get(s.a.Device,{uuid:e})},devices:function(e,t,a,n,i,o,l,c){return r["a"].get(s.a.Devices,{page:e,limit:t,type:a,uuid:n,area_id:i,address_id:o,online:l,address:c})},_devices:function(e,t,a){return r["a"].get(s.a.Devices,{direction:e,addresses:t,limit:a})},deviceLogs:function(e,t,a,n){return r["a"].get(s.a.DeviceLogs,{page:e,limit:t,uuid:a,type:n})},deviceFaceLogs:function(e,t,a,n,i,o){return r["a"].get(s.a.DeviceRecord,{page:e,limit:t,uuid:a,search:n,area_id:i,address_id:o})},searchFaceLogs:function(e,t,a){return r["a"].get(s.a.DeviceRecord,{page:e,limit:t,faces:a})},deviceTypes:function(){return r["a"].get(s.a.DeviceTypes)},deviceHeart:function(e){return r["a"].get(s.a.DeviceHeartbeat,{uuid:e})},deviceCommands:function(e,t,a){return r["a"].get(s.a.DeviceCommands,{page:e,limit:t,uuid:a})},commandsType:function(e){return r["a"].get(s.a.Commands,{type:e})},sendDeviceCommand:function(e){return r["a"].post(s.a.SendDeviceCommand,e)},resetCommand:function(e){return r["a"].get(s.a.RestartDeviceCommands,{uuid:e})},catchFace:function(e){return r["a"].get(s.a.CatchFaces,{id:e})},deviceUserList:function(e,t,a){return r["a"].get(s.a.DeviceUserList,{page:e,limit:t,uuid:a})},faceGroup:function(e){return r["a"].get(s.a.FaceGroup,{address_id:e})},uuid:function(e,t){return r["a"].get(s.a.Uuid,{page:e,limit:t})},dangerFace:function(e){return r["a"].post(s.a.DangerFace,e)},importHistory:function(e,t,a){return r["a"].get(s.a.ImportTasks,{page:e,limit:t,state:a})},delDangerFace:function(e){return r["a"].del(s.a.DelDangerFace,{id:e})},dangerFaces:function(e,t){return r["a"].get(s.a.DangerFaces,{page:e,limit:t})},personVerifies:function(e,t,a,n){return r["a"].get(s.a.PersonVerifies,{page:e,limit:t,search:a,state:n})},dangerLogs:function(e,t,a,n){return r["a"].get(s.a.DangerLogs,{page:e,limit:t,danger_id:a,address:n})},alert:function(e,t,a,n,i,o,l,c,u){return r["a"].get(s.a.DangerAlerts,{page:e,limit:t,state:a,search:n,dangers:i,alert_type:o,start:l,end:c,danger_type:u})},handleAlerts:function(e){return r["a"].post(s.a.HandleAlerts,{results:e})},dangerTypes:function(){return r["a"].get(s.a.DangerTypes,{})},notifyChange:function(e){return r["a"].post(s.a.ChangeDangerFace,e)},roles:function(e,t){return r["a"].get(s.a.Roles,{page:e,limit:t})},oneRole:function(e){return r["a"].get(s.a.Role,{name:e})},role:function(e){return r["a"].post(s.a.Role,e)},users:function(e,t){return r["a"].get(s.a.Users,{page:e,limit:t})},user:function(e){return r["a"].post(s.a.User,e)},policeLevel:function(e){return r["a"].post(s.a.PoliceLevel,e)},policeLevels:function(e,t,a,n){return r["a"].get(s.a.PoliceLevels,{page:e,limit:t,level:a,parent_id:n})},policeman:function(e){return r["a"].post(s.a.Policeman,e)},policemen:function(e,t,a,n,i,o){return r["a"].get(s.a.Policemen,{page:e,limit:t,station_id:a,department_id:n,state:i,search:o})},audit:function(e){return r["a"].post(s.a.PassPoliceman,e)},delPolice:function(e){return r["a"].del(s.a.Policeman,{id:e})},screenSaver:function(e){return r["a"].post(s.a.screenSaver,e)},screenSavers:function(e,t){return r["a"].get(s.a.screenSavers,{page:e,limit:t})},delScreenSaver:function(e){return r["a"].del(s.a.screenSaver,Object(n["a"])({id:e},"id",e))},issueScreenSaver:function(e){return r["a"].post(s.a.publishScreenSavers,e)},policeStation:function(e){return r["a"].post(s.a.PoliceStation,e)},policeStations:function(e,t,a){return r["a"].get(s.a.PoliceStations,{page:e,limit:t,name:a})},information:function(e){return r["a"].post(s.a.Information,e)},informations:function(e,t,a,n){return r["a"].get(s.a.Information,{page:e,limit:t,id:a,title:n})},faceSwitch:function(e){return r["a"].post(s.a.FaceSwicth,e)},delFaceSwitch:function(e){return r["a"].del(s.a.FaceSwicth,{id:e})},faceSwitches:function(e,t){return r["a"].get(s.a.FaceSwicthes,{page:e,limit:t})},statistical:function(){return r["a"].get(s.a.Count)},currentDay:function(){return r["a"].get(s.a.CountOpenRecord)},strangerRecord:function(){return r["a"].get(s.a.CountStrangerRecord)},addressStrangerRecord:function(e){return r["a"].get(s.a.CountAddressStrangerRecord,{id:e})},searchStrangerRecord:function(e){return r["a"].get(s.a.CountStrangerRecord,{address:e})},getTransmits:function(e,t){return r["a"].get(s.a.Transmits,{page:e,limit:t})}};t["a"]=o},"7aad":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],attrs:{"element-loading-text":"获取数据中"}},[a("div",{staticClass:"content-box"},[a("div",{staticClass:"content-box-left",staticStyle:{width:"25%","border-right":"1px #ccc solid"}},[e._m(0),a("div",{staticClass:"btn"},[a("div",[a("el-input",{staticClass:"input-with-select",attrs:{placeholder:"输入姓名"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.search(e.name)}},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}},[a("el-button",{attrs:{slot:"append",icon:"el-icon-search"},on:{click:function(t){return e.search(e.name)}},slot:"append"})],1)],1)]),e._m(1),a("div",{staticClass:"btn"},[a("el-select",{attrs:{placeholder:"请选择处理状态",filterable:""},on:{change:e.stateChange},model:{value:e.state,callback:function(t){e.state=t},expression:"state"}},e._l(e.stateList,(function(e,t){return a("el-option",{key:t,attrs:{label:e.label,value:e.value}})})),1)],1),e._m(2),a("div",{staticClass:"btn"},[a("el-select",{attrs:{placeholder:"请选择可疑分类"},on:{change:e.alertTypeChange},model:{value:e.alert_type,callback:function(t){e.alert_type=t},expression:"alert_type"}},e._l(e.dangerTypeList,(function(e,t){return a("el-option",{key:e,attrs:{label:e,value:t}})})),1)],1),a("div",{staticClass:"btn"},[a("el-date-picker",{attrs:{"value-format":e.valueFormatTime,type:"datetimerange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期"},on:{change:e.dateChange},model:{value:e.date,callback:function(t){e.date=t},expression:"date"}})],1),a("div",{staticClass:"btn"},[a("el-button",{attrs:{type:"primary"},on:{click:e.resetSelect}},[e._v("重新筛选")])],1)]),a("div",{staticClass:"content-box-right"},[a("el-table",{ref:"multipleTable",attrs:{data:e.tableData,stripe:"",border:"","header-cell-style":{background:"#f0f0f0",color:"#003366"},"max-height":"680","row-key":function(e){return e.id}},on:{"selection-change":e.handleSelectionChange}},[a("el-table-column",{attrs:{type:"selection",width:"55","reserve-selection":!0}}),a("el-table-column",{attrs:{prop:"id",label:"ID"}}),a("el-table-column",{attrs:{prop:"danger.name",label:"姓名",width:"100px"}}),a("el-table-column",{attrs:{prop:"danger.number",label:"身份证号",width:"200px"}}),a("el-table-column",{attrs:{prop:"danger.href",label:"照片"},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.danger?a("div",{staticClass:"leftaa"},[a("el-popover",{attrs:{placement:"left",title:"",trigger:"click"}},[a("img",{staticStyle:{"max-width":"800px","max-height":"800px"},attrs:{src:t.row.danger.href}}),a("img",{staticStyle:{"max-width":"180px","max-height":"80px"},attrs:{slot:"reference",src:t.row.danger.href},slot:"reference"})])],1):a("div",[a("span",[e._v("--暂无图片--")])])]}}])}),a("el-table-column",{attrs:{prop:"address.address",label:"所出现地址",width:"300px"}}),a("el-table-column",{attrs:{prop:"alert_type",label:"告警分类"}}),a("el-table-column",{attrs:{prop:"danger_type",label:"危险类型"}}),a("el-table-column",{attrs:{prop:"state",label:"处理状态"},scopedSlots:e._u([{key:"default",fn:function(t){return[1==t.row.state?a("span",[e._v("未处理")]):e._e(),2==t.row.state?a("span",[e._v("已处理")]):e._e()]}}])}),a("el-table-column",{attrs:{label:"操作",width:"200px",fixed:"right"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"text"},on:{click:function(a){return e.handleProcess(t.$index,t.row)}}},[e._v("立即处理")]),a("el-button",{attrs:{type:"text"},on:{click:function(a){return e.handleDetail(t.$index,t.row)}}},[e._v("查看详情")])]}}])})],1),a("div",{staticClass:"btn"},[a("el-button",{attrs:{type:"primary"},on:{click:e.batchOpen}},[e._v("批量处理")])],1),a("div",{staticClass:"block"},[a("el-pagination",{attrs:{"current-page":e.current,"page-sizes":[10,20,50,100,150,200,250,300],"page-size":e.size,layout:"sizes, prev, pager, next, jumper",total:e.total},on:{"current-change":e.handleCurrentChange,"update:currentPage":function(t){e.current=t},"update:current-page":function(t){e.current=t},"size-change":e.handleSizeChange}})],1)],1)]),a("el-dialog",{attrs:{visible:e.dialogProcess,title:"告警处理","close-on-click-modal":!1},on:{"update:visible":function(t){e.dialogProcess=t}}},[a("div",{staticClass:"box"},[a("el-form",{attrs:{model:e.processForm,"label-width":"100px"}},[a("el-form-item",{attrs:{label:"处理人"}},[a("el-input",{attrs:{disabled:""},model:{value:e.processForm.name,callback:function(t){e.$set(e.processForm,"name",t)},expression:"processForm.name"}})],1),a("el-form-item",{attrs:{label:"备注"}},[a("el-input",{attrs:{type:"textarea",placeholder:"非必填"},model:{value:e.processForm.remark,callback:function(t){e.$set(e.processForm,"remark",t)},expression:"processForm.remark"}})],1),a("div",{staticClass:"submit"},[a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:e.processed}},[e._v("提交")])],1)],1)],1)],1)]),a("el-dialog",{attrs:{visible:e.dialogDetail,title:"查看详情","close-on-click-modal":!1,width:"80%"},on:{"update:visible":function(t){e.dialogDetail=t}}},[a("div",{staticClass:"box"},[a("el-table",{attrs:{data:e.DetailForm,border:"","header-cell-style":{background:"#f0f0f0",color:"#003366"},"max-height":"620"}},[a("el-table-column",{attrs:{prop:"id",label:"ID"}}),a("el-table-column",{attrs:{prop:"danger.name",label:"姓名"}}),a("el-table-column",{attrs:{prop:"log.score",label:"相似度"}}),a("el-table-column",{attrs:{prop:"danger.href",label:"人脸库照片"},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.danger.href?a("div",{staticClass:"leftaa"},[a("el-image",{staticStyle:{width:"100%",height:"100%"},attrs:{fit:"fill",src:t.row.danger.href,"preview-src-list":e.hrefList},on:{load:function(a){return e.compareImage(t.row.danger.href)}}})],1):a("div",[a("span",[e._v("--暂无图片--")])])]}}])}),a("el-table-column",{attrs:{prop:"log.image",label:"抓拍原图"},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.log.image?a("div",{staticClass:"leftbb"},[a("el-image",{staticStyle:{width:"100%",height:"100%"},attrs:{fit:"fill",src:t.row.log.image,"preview-src-list":e.imageList},on:{load:function(a){return e.compareImage2(t.row.log.image)}}})],1):a("div",[a("span",[e._v("--暂无图片--")])])]}}])}),a("el-table-column",{attrs:{prop:"log.catch_faces[0].face_img",label:"抓拍照片"},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.log.catch_faces.length>0?a("div",{staticClass:"leftbb"},[a("el-image",{staticStyle:{width:"100%",height:"100%"},attrs:{fit:"fill",src:t.row.log.catch_faces[0].face_img,"preview-src-list":e.catchFacesList},on:{load:function(a){return e.compareImage3(t.row.log.catch_faces[0].face_img)}}})],1):a("div",[a("span",[e._v("--暂无图片--")])])]}}])}),a("el-table-column",{attrs:{prop:"log.timestamp",label:"抓拍时间"}})],1)],1)])],1)},r=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"btn"},[a("div",{staticClass:"tip"},[e._v(" 根据姓名筛选： ")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"btn"},[a("div",{staticClass:"tip"},[e._v(" 根据处理状态筛选： ")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"btn"},[a("div",{staticClass:"tip"},[e._v(" 根据告警分类和时间筛选： ")])])}],i=(a("4160"),a("b0c0"),a("159b"),a("365c")),s=a("c466"),o={data:function(){return{loading:!0,name:"",state:1,stateList:[{label:"全部",value:0},{label:"未处理",value:1},{label:"已处理",value:2}],tableData:[],dangerTypeList:[],alert_type:"",date:"",start_date:"",end_date:"",valueFormatTime:"yyyy-MM-dd HH:mm:ss",dangers:[],dialogProcess:!1,processForm:{name:localStorage.getItem("username"),remark:""},id:"",multipleSelection:[],dialogDetail:!1,DetailForm:[],hrefList:[],imageList:[],catchFacesList:[],current:1,size:10,total:0}},mounted:function(){this.getAlerts(),this.getAlertType()},methods:{getAlerts:function(){var e=this;i["a"].alert(e.current,10,e.state).then((function(t){e.$refs.multipleTable.clearSelection(),e.tableData=t.data,e.total=t.total,e.loading=!1})).catch((function(t){e.loading=!1}))},getAlertType:function(){var e=this;e.loading=!0,i["a"].dangerTypes().then((function(t){e.dangerTypeList=t.alert_type,e.loading=!1})).catch((function(t){e.loading=!1}))},alertTypeChange:function(e){var t=this;t.loading=!0,i["a"].alert(1,10,t.state,t.name,t.dangers,e,t.start_date,t.end_date).then((function(e){t.tableData=e.data,t.total=e.total,t.loading=!1})).catch((function(e){t.loading=!1}))},dateChange:function(e){var t=this;t.loading=!0,t.start_date=e[0],t.end_date=e[1],i["a"].alert(1,10,t.state,t.name,t.dangers,t.alert_type,e[0],e[1]).then((function(e){t.tableData=e.data,t.total=e.total,t.loading=!1})).catch((function(e){t.loading=!1}))},stateChange:function(e){var t=this;t.loading=!0,i["a"].alert(1,10,e,t.name,t.dangers,t.alert_type,t.start_date,t.end_date).then((function(e){t.tableData=e.data,t.total=e.total,t.loading=!1})).catch((function(e){t.loading=!1}))},search:function(){var e=this;e.loading=!0,i["a"].alert(1,10,e.state,e.name,e.dangers,e.alert_type,e.start_date,e.end_date).then((function(t){e.tableData=t.data,e.total=t.total,e.loading=!1})).catch((function(t){e.loading=!1}))},handleProcess:function(e,t){this.dialogProcess=!0,console.log(t),this.id=t.id,this.processForm={name:localStorage.getItem("username"),remark:""}},stateRadio:function(e){console.log(e)},handleSelectionChange:function(e){this.multipleSelection=e,console.log(123,this.multipleSelection)},batchOpen:function(){this.multipleSelection.length>0?this.dialogProcess=!0:this.$message.warning("请选择要处理的数据")},processed:function(){var e=this,t=this,a=[];this.multipleSelection.length>0?(this.multipleSelection.forEach((function(t){a.push({id:t.id,remark:e.processForm.remark})})),i["a"].handleAlerts(a).then((function(e){t.$message.success("提交成功！"),t.dialogProcess=!1,t.getAlerts()}))):(a.push({id:t.id,remark:this.processForm.remark}),i["a"].handleAlerts(a).then((function(e){t.$message.success("提交成功！"),t.dialogProcess=!1,t.getAlerts()})))},handleDetail:function(e,t){console.log([t]),this.DetailForm=[t],this.DetailForm.forEach((function(e){e.log.timestamp=s["a"].formatTime(e.log.timestamp,"Y-M-D h:m:s")})),this.dialogDetail=!0},compareImage:function(e){var t=this;t.hrefList.push(e)},compareImage2:function(e){var t=this;t.imageList.push(e)},compareImage3:function(e){var t=this;t.catchFacesList.push(e)},resetSelect:function(){window.location.reload()},handleCurrentChange:function(e){var t=this;t.loading=!0,t.current=e,i["a"].alert(e,t.size,t.state,t.name,t.dangers,t.alert_type,t.start_date,t.end_date).then((function(e){t.tableData=e.data,t.total=e.total,t.loading=!1})).catch((function(e){t.loading=!1}))},handleSizeChange:function(e){var t=this;t.loading=!0,t.size=e,i["a"].alert(t.current,e,t.state,t.name,t.dangers,t.alert_type,t.start_date,t.end_date).then((function(e){t.tableData=e.data,t.total=e.total,t.loading=!1})).catch((function(e){t.loading=!1}))}}},l=o,c=(a("cad7"),a("2877")),u=Object(c["a"])(l,n,r,!1,null,"2db284a4",null);t["default"]=u.exports},c466:function(e,t,a){"use strict";a("d3b7"),a("ac1f"),a("25f0"),a("5319");var n={};function r(e){return e=e.toString(),e[1]?e:"0"+e}n.formatTime=function(e,t){var a=["Y","M","D","h","m","s"],n=[],i=new Date(1e3*e);for(var s in n.push(i.getFullYear()),n.push(r(i.getMonth()+1)),n.push(r(i.getDate())),n.push(r(i.getHours())),n.push(r(i.getMinutes())),n.push(r(i.getSeconds())),n)t=t.replace(a[s],n[s]);return t},t["a"]=n},cad7:function(e,t,a){"use strict";var n=a("d650"),r=a.n(n);r.a},d650:function(e,t,a){}}]);