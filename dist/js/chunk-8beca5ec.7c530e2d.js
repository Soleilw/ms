(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8beca5ec"],{"365c":function(e,t,a){"use strict";a("ac1f");var r=a("be3b"),n=a("99b1"),i=a.n(n),c={aip:function(e){return r["a"].post(i.a.Aip,e)},delAip:function(e){return r["a"].del(i.a.Aip,{id:e})},aips:function(e,t){return r["a"].get(i.a.Aips,{page:e,limit:t})},apk:function(e){return r["a"].post(i.a.Apk,e)},apks:function(e,t){return r["a"].get(i.a.Apks,{page:e,limit:t})},apkVersion:function(e){return r["a"].post(i.a.ApkVersion,e)},apkVersions:function(e,t,a){return r["a"].get(i.a.ApkVersions,{page:e,limit:t,apk_id:a})},_apkVersions:function(e){return r["a"].get(i.a.ApkVersions,{id:e})},publishApk:function(e){return r["a"].post(i.a.PublishApk,e)},project:function(e){return r["a"].post(i.a.Project,e)},projects:function(e,t){return r["a"].get(i.a.Projects,{page:e,limit:t})},address:function(e){return r["a"].post(i.a.Address,e)},addresses:function(e,t){return r["a"].get(i.a.Addresses,{page:e,limit:t})},face:function(e){return r["a"].post(i.a.Face,e)},faces:function(e,t){return r["a"].get(i.a.Faces,{page:e,limit:t})},device:function(e){return r["a"].post(i.a.Device,e)},devices:function(e,t,a){return r["a"].get(i.a.Devices,{page:e,limit:t,id:a})},_devices:function(e,t,a){return r["a"].get(i.a.Devices,{direction:e,addresses:t,limit:a})},deviceLogs:function(e,t,a,n){return r["a"].get(i.a.DeviceLogs,{page:e,limit:t,uuid:a,type:n})},deviceFaceLogs:function(e,t,a,n){return r["a"].get(i.a.DeviceRecord,{page:e,limit:t,uuid:a,address_id:n})},deviceTypes:function(){return r["a"].get(i.a.DeviceTypes)},deviceHeart:function(e){return r["a"].get(i.a.DeviceHeartbeat,{uuid:e})},search:function(e){return r["a"].get(i.a.Devices,{uuid:e})},faceGroup:function(e){return r["a"].get(i.a.FaceGroup,{address_id:e})},uuid:function(e,t){return r["a"].get(i.a.Uuid,{page:e,limit:t})},dangerFace:function(e){return r["a"].post(i.a.DangerFace,e)},delDangerFace:function(e){return r["a"].del(i.a.DelDangerFace,{id:e})},dangerFaces:function(e,t){return r["a"].get(i.a.DangerFaces,{page:e,limit:t})},dangerLogs:function(e,t){return r["a"].get(i.a.DangerLogs,{page:e,limit:t})}};t["a"]=c},7984:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"btn"},[a("el-button",{attrs:{type:"primary"},on:{click:e.addProject}},[e._v("添加地址")])],1),a("el-dialog",{attrs:{title:"添加地址",visible:e.dialogProject,"close-on-click-modal":!1},on:{"update:visible":function(t){e.dialogProject=t}}},[a("div",{staticClass:"box"},[a("el-form",{attrs:{model:e.form,"label-width":"120px"}},[a("el-form-item",{attrs:{label:"选择项目"}},[a("el-select",{model:{value:e.form.project_id,callback:function(t){e.$set(e.form,"project_id",t)},expression:"form.project_id"}},e._l(e.projectList,(function(e,t){return a("el-option",{key:t,attrs:{label:e.name,value:e.id}})})),1)],1),a("el-form-item",{attrs:{label:"地址"}},[a("el-input",{model:{value:e.form.address,callback:function(t){e.$set(e.form,"address",t)},expression:"form.address"}})],1),a("el-form-item",{attrs:{label:"联系方式"}},[a("el-input",{model:{value:e.form.contact,callback:function(t){e.$set(e.form,"contact",t)},expression:"form.contact"}})],1),e._l(e.form.face_groups,(function(t,r){return a("div",{key:r},[a("el-form-item",{attrs:{label:"人脸分组姓名"}},[a("el-input",{model:{value:t.name,callback:function(a){e.$set(t,"name",a)},expression:"item.name"}})],1),a("el-form-item",{attrs:{label:"是否默认分组"}},[a("el-radio-group",{model:{value:t.is_default,callback:function(a){e.$set(t,"is_default",a)},expression:"item.is_default"}},[a("el-radio",{attrs:{label:1}},[e._v("是")]),a("el-radio",{attrs:{label:2}},[e._v("否")])],1)],1),a("el-form-item",{attrs:{label:"是否为在线分组"}},[a("el-radio-group",{model:{value:t.online,callback:function(a){e.$set(t,"online",a)},expression:"item.online"}},[a("el-radio",{attrs:{label:1}},[e._v("是")]),a("el-radio",{attrs:{label:2}},[e._v("否")])],1)],1)],1)})),a("el-form-item",{attrs:{label:"操作"}},[a("el-button",{attrs:{size:"mini",type:"success"},on:{click:e.addFace}},[e._v("添加人脸姓名")]),a("el-button",{attrs:{size:"mini",type:"danger"},on:{click:e.delFace}},[e._v("删除人脸姓名")])],1),a("div",{staticClass:"submit"},[a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:e.newProject}},[e._v("提交")])],1)],1)],2)],1)]),a("el-table",{ref:"multipleTable",attrs:{data:e.tableDate}},[a("el-table-column",{attrs:{label:"名称",type:"selection",align:"center"}}),a("el-table-column",{attrs:{prop:"id",label:"ID",align:"center"}}),a("el-table-column",{attrs:{prop:"project_id",label:"项目ID",align:"center"}}),a("el-table-column",{attrs:{prop:"address",label:"地址",align:"center"}}),a("el-table-column",{attrs:{prop:"contact",label:"联系方式",align:"center"}}),a("el-table-column",{attrs:{prop:"address_uuid",label:"address_uuid",align:"center"}}),a("el-table-column",{attrs:{label:"操作",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{size:"mini"},on:{click:function(a){return e.handleDelete(t.$index,t.row)}}},[e._v("删除")])]}}])})],1),a("div",{staticClass:"block"},[a("el-pagination",{attrs:{"current-page":e.currentPage,"page-size":10,layout:"prev, pager, next, jumper",total:e.totalPage},on:{"current-change":e.handleCurrentChange,"update:currentPage":function(t){e.currentPage=t},"update:current-page":function(t){e.currentPage=t}}})],1)],1)},n=[],i=a("365c"),c={name:"gradems",data:function(){return{dialogProject:!1,projectList:[],form:{project_id:"",address:"",contact:"",face_groups:[]},tableDate:[],currentPage:1,totalPage:0}},mounted:function(){this.getAddress(),this.getProject()},methods:{getProject:function(){var e=this;i["a"].projects(e.currentPage).then((function(t){e.projectList=t.data}))},getAddress:function(){var e=this;i["a"].addresses(e.currentPage).then((function(t){e.tableDate=t.data,e.totalPage=t.total}))},addProject:function(){var e=this;e.dialogProject=!0,e.form={project_id:"",address:"",contact:"",face_groups:[]}},addFace:function(){var e=this;e.form.face_groups.push({})},delFace:function(){var e=this;e.form.face_groups.pop({})},newProject:function(){var e=this;i["a"].address(e.form).then((function(t){e.dialogProject=!1,e.$message.success("提交成功"),e.getAddress(),e.currentPage=1,e.form={}}))},handleDel:function(){},handleCurrentChange:function(e){var t=this;t.getAddress()}}},s=c,o=a("2877"),l=Object(o["a"])(s,r,n,!1,null,null,null);t["default"]=l.exports},9263:function(e,t,a){"use strict";var r=a("ad6d"),n=a("9f7f"),i=RegExp.prototype.exec,c=String.prototype.replace,s=i,o=function(){var e=/a/,t=/b*/g;return i.call(e,"a"),i.call(t,"a"),0!==e.lastIndex||0!==t.lastIndex}(),l=n.UNSUPPORTED_Y||n.BROKEN_CARET,u=void 0!==/()??/.exec("")[1],d=o||u||l;d&&(s=function(e){var t,a,n,s,d=this,p=l&&d.sticky,f=r.call(d),g=d.source,m=0,v=e;return p&&(f=f.replace("y",""),-1===f.indexOf("g")&&(f+="g"),v=String(e).slice(d.lastIndex),d.lastIndex>0&&(!d.multiline||d.multiline&&"\n"!==e[d.lastIndex-1])&&(g="(?: "+g+")",v=" "+v,m++),a=new RegExp("^(?:"+g+")",f)),u&&(a=new RegExp("^"+g+"$(?!\\s)",f)),o&&(t=d.lastIndex),n=i.call(p?a:d,v),p?n?(n.input=n.input.slice(m),n[0]=n[0].slice(m),n.index=d.lastIndex,d.lastIndex+=n[0].length):d.lastIndex=0:o&&n&&(d.lastIndex=d.global?n.index+n[0].length:t),u&&n&&n.length>1&&c.call(n[0],a,(function(){for(s=1;s<arguments.length-2;s++)void 0===arguments[s]&&(n[s]=void 0)})),n}),e.exports=s},9523:function(e,t){function a(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}e.exports=a},"99b1":function(e,t,a){var r,n=a("9523"),i=(r={Login:"/login",Password:"/password",Aip:"/aip",Aips:"/aips"},n(r,"Aip","/aip"),n(r,"RestoreAip","/restore/aip"),n(r,"Project","/project"),n(r,"Projects","/projects"),n(r,"Project","/project"),n(r,"RestoreProject","/restore/project"),n(r,"Address","/address"),n(r,"Addresses","/addresses"),n(r,"Address","/address"),n(r,"RestoreAddress","/restore/address"),n(r,"Face","/face"),n(r,"PassFace","/pass/face"),n(r,"Face","/face"),n(r,"Faces","/faces"),n(r,"Device","/device"),n(r,"Devices","/devices"),n(r,"Uuid","/unknown/devices"),n(r,"DeviceFaceGroup","/device/face/group"),n(r,"FaceGroup","/face/groups"),n(r,"DeviceLogs","/device/logs"),n(r,"DeviceRecord","/face/logs"),n(r,"DeviceTypes","/device/types"),n(r,"DeviceHeartbeat","/device/heartbeat"),n(r,"Apk","/apk"),n(r,"Apks","/apks"),n(r,"ApkVersion","/apk/version"),n(r,"ApkVersions","/apk/versions"),n(r,"PublishApk","/publish/apk"),n(r,"DangerFace","/danger/face"),n(r,"DangerFaces","/danger/faces"),n(r,"DelDangerFace","/danger/face"),n(r,"DangerLogs","/danger/logs"),n(r,"UploadFace","/upload/face"),n(r,"ApiToken","/api/token"),r);e.exports=i},"9f7f":function(e,t,a){"use strict";var r=a("d039");function n(e,t){return RegExp(e,t)}t.UNSUPPORTED_Y=r((function(){var e=n("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),t.BROKEN_CARET=r((function(){var e=n("^r","gy");return e.lastIndex=2,null!=e.exec("str")}))},ac1f:function(e,t,a){"use strict";var r=a("23e7"),n=a("9263");r({target:"RegExp",proto:!0,forced:/./.exec!==n},{exec:n})}}]);
//# sourceMappingURL=chunk-8beca5ec.7c530e2d.js.map