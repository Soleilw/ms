(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-33ab2225"],{"365c":function(e,t,a){"use strict";a("ac1f");var n=a("be3b"),i=a("99b1"),r=a.n(i),s={aip:function(e){return n["a"].post(r.a.Aip,e)},delAip:function(e){return n["a"].delete(r.a.Aip,{id:e})},aips:function(e,t){return n["a"].get(r.a.Aips,{page:e,limit:t})},apk:function(e){return n["a"].post(r.a.Apk,e)},apks:function(e,t){return n["a"].get(r.a.Apks,{page:e,limit:t})},apkVersion:function(e){return n["a"].post(r.a.ApkVersion,e)},apkVersions:function(e,t,a){return n["a"].get(r.a.ApkVersions,{page:e,limit:t,apk_id:a})},_apkVersions:function(e){return n["a"].get(r.a.ApkVersions,{id:e})},publishApk:function(e){return n["a"].post(r.a.PublishApk,e)},project:function(e){return n["a"].post(r.a.Project,e)},projects:function(e,t){return n["a"].get(r.a.Projects,{page:e,limit:t})},address:function(e){return n["a"].post(r.a.Address,e)},addresses:function(e,t){return n["a"].get(r.a.Addresses,{page:e,limit:t})},face:function(e){return n["a"].post(r.a.Face,e)},faces:function(e,t){return n["a"].get(r.a.Faces,{page:e,limit:t})},device:function(e){return n["a"].post(r.a.Device,e)},devices:function(e,t){return n["a"].get(r.a.Devices,{page:e,limit:t})},_devices:function(e,t,a){return n["a"].get(r.a.Devices,{direction:e,addresses:t,limit:a})},deviceLogs:function(e,t,a,i){return n["a"].get(r.a.DeviceLogs,{page:e,limit:t,uuid:a,type:i})},deviceFaceLogs:function(e,t,a,i){return n["a"].get(r.a.DeviceRecord,{page:e,limit:t,uuid:a,address_id:i})},search:function(e){return n["a"].get(r.a.Devices,{uuid:e})},faceGroup:function(e){return n["a"].get(r.a.FaceGroup,{address_id:e})},uuid:function(e,t){return n["a"].get(r.a.Uuid,{page:e,limit:t})}};t["a"]=s},9035:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"btn"},[a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.dialogApk=!0}}},[e._v("添加AIP")])],1),a("el-dialog",{attrs:{title:"添加AIP",visible:e.dialogApk},on:{"update:visible":function(t){e.dialogApk=t}}},[a("div",{staticClass:"box"},[a("el-form",{attrs:{model:e.form,"label-width":"80px"}},[a("el-form-item",{attrs:{label:"APK名字"}},[a("el-input",{model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),a("el-form-item",{attrs:{label:"APPID"}},[a("el-input",{model:{value:e.form.app_id,callback:function(t){e.$set(e.form,"app_id",t)},expression:"form.app_id"}})],1),a("el-form-item",{attrs:{label:"ApiKEY"}},[a("el-input",{model:{value:e.form.api_key,callback:function(t){e.$set(e.form,"api_key",t)},expression:"form.api_key"}})],1),a("el-form-item",{attrs:{label:"SectetKey"}},[a("el-input",{model:{value:e.form.secret_key,callback:function(t){e.$set(e.form,"secret_key",t)},expression:"form.secret_key"}})],1),a("div",{staticClass:"submit"},[a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:e.newAip}},[e._v("提交")])],1)],1)],1)],1)]),a("el-table",{ref:"multipleTable",attrs:{data:e.tableData}},[a("el-table-column",{attrs:{label:"名称",type:"selection",align:"center"}}),a("el-table-column",{attrs:{prop:"id",label:"ID",align:"center"}}),a("el-table-column",{attrs:{prop:"name",label:"名称",align:"center"}}),a("el-table-column",{attrs:{prop:"remark",label:"备注",align:"center"}}),a("el-table-column",{attrs:{prop:"state",label:"State",align:"center"}}),a("el-table-column",{attrs:{prop:"app_id",label:"AppId",align:"center"}}),a("el-table-column",{attrs:{prop:"api_key",label:"ApiKey",align:"center",width:"300px"}}),a("el-table-column",{attrs:{prop:"secret_key",label:"SectetKey",align:"center",width:"300px"}}),a("el-table-column",{attrs:{label:"操作",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(a){return e.handleDel(t.$index,t.row)}}},[e._v("删除")])]}}])})],1),a("div",{staticClass:"block"},[a("el-pagination",{attrs:{"current-page":e.currentPage,"page-sizes":[10,20,30,40,50],"page-size":e.pageSize,layout:"sizes, prev, pager, next, jumper",total:e.totalPage},on:{"current-change":e.handleCurrentChange,"update:currentPage":function(t){e.currentPage=t},"update:current-page":function(t){e.currentPage=t},"size-change":e.handleSizeChange}})],1)],1)},i=[],r=a("365c"),s={name:"gradems",data:function(){return{dialogApk:!1,form:{name:"",app_id:"",api_key:"",secret_key:""},tableData:[],currentPage:1,pageSize:10,totalPage:0}},mounted:function(){this.getAip()},methods:{getAip:function(){var e=this;r["a"].aips(e.currentPage).then((function(t){e.tableData=t.data,e.totalPage=t.total}))},newAip:function(){var e=this;r["a"].aip(e.form).then((function(t){e.dialogApk=!1,e.$message.success("提交成功"),e.getAip(),e.currentPage=1,e.form={}}))},handleDel:function(e,t){var a=this;console.log(t);var n=t.id;r["a"].delAip(n).then((function(e){a.$message.success("删除成功"),a.getAip(),a.currentPage=1}))},handleCurrentChange:function(e){var t=this;r["a"].aips(e,t.pageSize).then((function(e){t.tableData=e.data,t.totalPage=e.total}))},handleSizeChange:function(e){var t=this;t.pageSize=e,r["a"].aips(1,e).then((function(e){t.tableData=e.data,t.totalPage=e.total,t.currentPage=1}))}}},o=s,l=a("2877"),c=Object(l["a"])(o,n,i,!1,null,null,null);t["default"]=c.exports},9263:function(e,t,a){"use strict";var n=a("ad6d"),i=a("9f7f"),r=RegExp.prototype.exec,s=String.prototype.replace,o=r,l=function(){var e=/a/,t=/b*/g;return r.call(e,"a"),r.call(t,"a"),0!==e.lastIndex||0!==t.lastIndex}(),c=i.UNSUPPORTED_Y||i.BROKEN_CARET,p=void 0!==/()??/.exec("")[1],u=l||p||c;u&&(o=function(e){var t,a,i,o,u=this,d=c&&u.sticky,f=n.call(u),g=u.source,m=0,b=e;return d&&(f=f.replace("y",""),-1===f.indexOf("g")&&(f+="g"),b=String(e).slice(u.lastIndex),u.lastIndex>0&&(!u.multiline||u.multiline&&"\n"!==e[u.lastIndex-1])&&(g="(?: "+g+")",b=" "+b,m++),a=new RegExp("^(?:"+g+")",f)),p&&(a=new RegExp("^"+g+"$(?!\\s)",f)),l&&(t=u.lastIndex),i=r.call(d?a:u,b),d?i?(i.input=i.input.slice(m),i[0]=i[0].slice(m),i.index=u.lastIndex,u.lastIndex+=i[0].length):u.lastIndex=0:l&&i&&(u.lastIndex=u.global?i.index+i[0].length:t),p&&i&&i.length>1&&s.call(i[0],a,(function(){for(o=1;o<arguments.length-2;o++)void 0===arguments[o]&&(i[o]=void 0)})),i}),e.exports=o},9523:function(e,t){function a(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}e.exports=a},"99b1":function(e,t,a){var n,i=a("9523"),r=(n={Login:"/login",Password:"/password",Aip:"/aip",Aips:"/aips"},i(n,"Aip","/aip"),i(n,"RestoreAip","/restore/aip"),i(n,"Project","/project"),i(n,"Projects","/projects"),i(n,"Project","/project"),i(n,"RestoreProject","/restore/project"),i(n,"Address","/address"),i(n,"Addresses","/addresses"),i(n,"Address","/address"),i(n,"RestoreAddress","/restore/address"),i(n,"Face","/face"),i(n,"PassFace","/pass/face"),i(n,"Face","/face"),i(n,"Faces","/faces"),i(n,"Device","/device"),i(n,"Devices","/devices"),i(n,"Uuid","/unknown/devices"),i(n,"DeviceFaceGroup","/device/face/group"),i(n,"FaceGroup","/face/groups"),i(n,"DeviceLogs","/device/logs"),i(n,"DeviceRecord","/face/logs"),i(n,"Apk","/apk"),i(n,"Apks","/apks"),i(n,"ApkVersion","/apk/version"),i(n,"ApkVersions","/apk/versions"),i(n,"PublishApk","/publish/apk"),i(n,"UploadFace","/upload/face"),i(n,"ApiToken","/api/token"),n);e.exports=r},"9f7f":function(e,t,a){"use strict";var n=a("d039");function i(e,t){return RegExp(e,t)}t.UNSUPPORTED_Y=n((function(){var e=i("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),t.BROKEN_CARET=n((function(){var e=i("^r","gy");return e.lastIndex=2,null!=e.exec("str")}))},ac1f:function(e,t,a){"use strict";var n=a("23e7"),i=a("9263");n({target:"RegExp",proto:!0,forced:/./.exec!==i},{exec:i})}}]);
//# sourceMappingURL=chunk-33ab2225.c208e9a0.js.map