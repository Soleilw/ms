(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ce18a652"],{"365c":function(e,t,a){"use strict";var n=a("be3b"),i=a("99b1"),r=a.n(i),o={aip:function(e){return n["a"].post(r.a.Aip,e)},delAip:function(e){return n["a"].del(r.a.Aip,{id:e})},aips:function(e,t){return n["a"].get(r.a.Aips,{page:e,limit:t})},apk:function(e){return n["a"].post(r.a.Apk,e)},apks:function(e,t){return n["a"].get(r.a.Apks,{page:e,limit:t})},apkVersion:function(e){return n["a"].post(r.a.ApkVersion,e)},apkVersions:function(e,t,a){return n["a"].get(r.a.ApkVersions,{page:e,limit:t,apk_id:a})},_apkVersions:function(e){return n["a"].get(r.a.ApkVersions,{id:e})},publishApk:function(e){return n["a"].post(r.a.PublishApk,e)},project:function(e){return n["a"].post(r.a.Project,e)},projects:function(e,t){return n["a"].get(r.a.Projects,{page:e,limit:t})},address:function(e){return n["a"].post(r.a.Address,e)},getaddress:function(e){return n["a"].get(r.a.Address,{id:e})},addresses:function(e,t,a){return n["a"].get(r.a.Addresses,{page:e,limit:t,project_id:a})},addressTypes:function(e,t){return n["a"].get(r.a.AddressTypes,{page:e,limit:t})},face:function(e){return n["a"].post(r.a.Face,e)},faces:function(e,t){return n["a"].get(r.a.Faces,{page:e,limit:t})},areas:function(e,t,a){return n["a"].get(r.a.Areas,{page:e,limit:t,parent_id:a})},area:function(e){return n["a"].post(r.a.Area,e)},device:function(e){return n["a"].post(r.a.Device,e)},devices:function(e,t,a,i){return n["a"].get(r.a.Devices,{page:e,limit:t,type:a,uuid:i})},_devices:function(e,t,a){return n["a"].get(r.a.Devices,{direction:e,addresses:t,limit:a})},deviceLogs:function(e,t,a,i){return n["a"].get(r.a.DeviceLogs,{page:e,limit:t,uuid:a,type:i})},deviceFaceLogs:function(e,t,a,i){return n["a"].get(r.a.DeviceRecord,{page:e,limit:t,uuid:a,address_id:i})},deviceTypes:function(){return n["a"].get(r.a.DeviceTypes)},deviceHeart:function(e){return n["a"].get(r.a.DeviceHeartbeat,{uuid:e})},deviceCommands:function(e,t,a){return n["a"].get(r.a.DeviceCommands,{page:e,limit:t,uuid:a})},commandsType:function(e){return n["a"].get(r.a.Commands,{type:e})},sendDeviceCommand:function(e){return n["a"].post(r.a.SendDeviceCommand,e)},deviceUserList:function(e,t,a){return n["a"].get(r.a.DeviceUserList,{page:e,limit:t,uuid:a})},faceGroup:function(e){return n["a"].get(r.a.FaceGroup,{address_id:e})},uuid:function(e,t){return n["a"].get(r.a.Uuid,{page:e,limit:t})},dangerFace:function(e){return n["a"].post(r.a.DangerFace,e)},delDangerFace:function(e){return n["a"].del(r.a.DelDangerFace,{id:e})},dangerFaces:function(e,t){return n["a"].get(r.a.DangerFaces,{page:e,limit:t})},dangerLogs:function(e,t){return n["a"].get(r.a.DangerLogs,{page:e,limit:t})},roles:function(e,t){return n["a"].get(r.a.Roles,{page:e,limit:t})},oneRole:function(e){return n["a"].get(r.a.Role,{name:e})},role:function(e){return n["a"].post(r.a.Role,e)}};t["a"]=o},"3ac8":function(e,t,a){},5899:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(e,t,a){var n=a("1d80"),i=a("5899"),r="["+i+"]",o=RegExp("^"+r+r+"*"),s=RegExp(r+r+"*$"),c=function(e){return function(t){var a=String(n(t));return 1&e&&(a=a.replace(o,"")),2&e&&(a=a.replace(s,"")),a}};e.exports={start:c(1),end:c(2),trim:c(3)}},"9ab3":function(e,t,a){},"9d5f":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],attrs:{"element-loading-text":"获取数据中"}},[a("div",{staticClass:"handle-box"},[a("div",{staticClass:"btn"},[a("el-button",{attrs:{type:"primary"},on:{click:e.addAddress}},[e._v("添加地址")])],1)]),a("el-dialog",{attrs:{title:"添加地址",visible:e.dialogAddress,"close-on-click-modal":!1,width:"80%"},on:{"update:visible":function(t){e.dialogAddress=t}}},[a("div",{staticClass:"box"},[a("el-form",{attrs:{model:e.form,"label-width":"120px"}},[a("el-form-item",{attrs:{label:"选择项目"}},[a("el-select",{model:{value:e.form.project_id,callback:function(t){e.$set(e.form,"project_id",t)},expression:"form.project_id"}},e._l(e.projectList,(function(e,t){return a("el-option",{key:t,attrs:{label:e.name,value:e.id}})})),1)],1),a("el-form-item",{attrs:{label:"选择类型"}},[a("el-select",{model:{value:e.form.type,callback:function(t){e.$set(e.form,"type",t)},expression:"form.type"}},e._l(e.typeList,(function(e,t){return a("el-option",{key:t,attrs:{label:e,value:t}})})),1)],1),a("el-form-item",{attrs:{label:"选择社区"}},[a("el-select",{staticStyle:{"margin-right":"10px"},attrs:{placeholder:"请选择省份"},on:{change:e.proChange},model:{value:e.pro_id,callback:function(t){e.pro_id=t},expression:"pro_id"}},e._l(e.proList,(function(e){return a("el-option",{key:e.id,attrs:{label:e.title,value:e.id}})})),1),a("el-select",{staticStyle:{"margin-right":"10px"},attrs:{placeholder:"请选择市级"},on:{change:e.cityChange},model:{value:e.city_id,callback:function(t){e.city_id=t},expression:"city_id"}},e._l(e.cityList,(function(e){return a("el-option",{key:e.id,attrs:{label:e.title,value:e.id}})})),1),a("el-select",{staticStyle:{"margin-right":"10px"},attrs:{placeholder:"请选择区级"},on:{change:e.areasChange},model:{value:e.community_id,callback:function(t){e.community_id=t},expression:"community_id"}},e._l(e.areaList,(function(e){return a("el-option",{key:e.id,attrs:{label:e.title,value:e.id}})})),1),a("el-select",{staticStyle:{"margin-right":"10px"},attrs:{placeholder:"请选择社区"},on:{change:e.communityChange},model:{value:e.areas_id,callback:function(t){e.areas_id=t},expression:"areas_id"}},e._l(e.communityList,(function(e){return a("el-option",{key:e.id,attrs:{label:e.title,value:e.id}})})),1)],1),a("el-form-item",{attrs:{label:"地址"}},[a("div",{staticClass:"address-info"},[a("el-input",{staticStyle:{"margin-right":"10px"},attrs:{placeholder:"地址显示"},model:{value:e.form.address,callback:function(t){e.$set(e.form,"address",t)},expression:"form.address"}}),a("el-input",{staticStyle:{"margin-right":"10px"},attrs:{placeholder:"经度显示"},model:{value:e.form.lng,callback:function(t){e.$set(e.form,"lng",t)},expression:"form.lng"}}),a("el-input",{staticStyle:{"margin-right":"10px"},attrs:{placeholder:"纬度显示"},model:{value:e.form.lat,callback:function(t){e.$set(e.form,"lat",t)},expression:"form.lat"}})],1)]),a("el-form-item",{attrs:{label:"地图显示"}},[a("el-switch",{attrs:{"active-color":"#2a9f93"},model:{value:e.showMap,callback:function(t){e.showMap=t},expression:"showMap"}}),e.showMap?a("div",[a("v-map",{on:{callback:e.getLoc}})],1):e._e()],1),a("el-form-item",{attrs:{label:"联系方式"}},[a("el-input",{model:{value:e.form.contact,callback:function(t){e.$set(e.form,"contact",t)},expression:"form.contact"}})],1),e._l(e.form.face_groups,(function(t,n){return a("div",{key:n},[a("el-form-item",{attrs:{label:"人脸分组姓名"}},[a("el-input",{model:{value:t.name,callback:function(a){e.$set(t,"name",a)},expression:"item.name"}})],1),a("el-form-item",{attrs:{label:"是否默认分组"}},[a("el-radio-group",{model:{value:t.is_default,callback:function(a){e.$set(t,"is_default",a)},expression:"item.is_default"}},[a("el-radio",{attrs:{label:1}},[e._v("是")]),a("el-radio",{attrs:{label:2}},[e._v("否")])],1)],1),a("el-form-item",{attrs:{label:"是否为在线分组"}},[a("el-radio-group",{model:{value:t.online,callback:function(a){e.$set(t,"online",a)},expression:"item.online"}},[a("el-radio",{attrs:{label:1}},[e._v("是")]),a("el-radio",{attrs:{label:2}},[e._v("否")])],1)],1)],1)})),a("el-form-item",{attrs:{label:"操作"}},[a("el-button",{attrs:{size:"mini",type:"primary"},on:{click:e.addFace}},[e._v("添加人脸姓名")]),a("el-button",{attrs:{size:"mini",type:"danger"},on:{click:e.delFace}},[e._v("删除人脸姓名")])],1),a("div",{staticClass:"submit"},[a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:e.newProject}},[e._v("提交")])],1)],1)],2)],1)]),a("el-table",{attrs:{data:e.tableData,border:"","header-cell-style":{background:"#f0f0f0",color:"#2a9f93"},"max-height":"620"}},[a("el-table-column",{attrs:{prop:"id",label:"ID"}}),a("el-table-column",{attrs:{prop:"project_id",label:"项目ID"}}),a("el-table-column",{attrs:{prop:"address",label:"地址"}}),a("el-table-column",{attrs:{prop:"contact",label:"联系方式"}}),a("el-table-column",{attrs:{prop:"address_uuid",label:"address_uuid"}}),a("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(a){return e.handleEdit(t.$index,t.row)}}},[e._v("编辑")]),a("el-popconfirm",{staticStyle:{"margin-left":"10px"},attrs:{title:"是否要删除该条数据",cancelButtonType:"primary"},on:{onConfirm:function(a){return e.handleDel(t.$index,t.row)}}},[a("el-button",{attrs:{slot:"reference",size:"mini",type:"danger"},slot:"reference"},[e._v("删除")])],1)]}}])})],1),a("div",{staticClass:"block"},[a("el-pagination",{attrs:{"current-page":e.current,"page-sizes":[10,20,50,100,150,200,250,300],"page-size":e.size,layout:"sizes, prev, pager, next, jumper",total:e.total},on:{"current-change":e.currentChange,"update:currentPage":function(t){e.current=t},"update:current-page":function(t){e.current=t},"size-change":e.sizeChange,"prev-click":e.prevChange,"next-click":e.nextChange}})],1)],1)},i=[],r=a("365c"),o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"map"},[a("iframe",{attrs:{id:"mapPage",width:"100%",height:"800",frameborder:"0",src:e.getSrc}})])},s=[],c=(a("99af"),a("a9e3"),{data:function(){return{}},computed:{getSrc:function(){var e="https://apis.map.qq.com/tools/locpicker?search=1&type=1&key=3WRBZ-BCNKF-55SJF-NABK3-SUJKZ-73BWA&referer=myapp";return this.lat&&this.lng&&(e+="&coord=".concat(this.lat,",").concat(this.lng)),e}},props:{mapKey:{type:String,default:""},keyName:{type:String,default:""},lat:{type:[String,Number]},lng:{type:[String,Number]}},mounted:function(){var e=this;window.addEventListener("message",(function(t){var a=t.data;a&&"locationPicker"===a.module&&e.$emit("callback",a)}),!1)}}),l=c,u=(a("e2d3"),a("2877")),d=Object(u["a"])(l,o,s,!1,null,"618711cc",null),p=d.exports,f={components:{vMap:p},data:function(){return{loading:!0,dialogAddress:!1,projectList:[],typeList:[],form:{project_id:"",type:"",address:"",contact:"",face_groups:[],lng:"",lat:"",area_id:""},proList:[],pro_id:"",cityList:[],city_id:"",communityList:[],community_id:"",areaList:[],areas_id:"",showMap:!1,tableData:[],current:1,size:10,total:0}},mounted:function(){this.getAddress(),this.getProject(),this.getAddressType(),this.getPro()},methods:{getProject:function(){var e=this;r["a"].projects(1,100).then((function(t){e.projectList=t.data}))},getAddressType:function(){var e=this;r["a"].addressTypes(e.current).then((function(t){e.typeList=t}))},getAddress:function(){var e=this;r["a"].addresses(1,100).then((function(t){e.loading=!1,e.tableData=t.data,e.total=t.total})).catch((function(t){e.loading=!1}))},addAddress:function(){var e=this;e.dialogAddress=!0,e.pro_id="",e.city_id="",e.community_id="",e.form={project_id:"",type:"",address:"",contact:"",face_groups:[],lng:"",lat:"",area_id:""}},addFace:function(){var e=this;e.form.face_groups.push({})},delFace:function(){var e=this;e.form.face_groups.pop({})},getLoc:function(e){this.form.lng=e.latlng.lng,this.form.lat=e.latlng.lat,this.showMap=!1},newProject:function(){var e=this;r["a"].address(e.form).then((function(t){e.dialogAddress=!1,e.$message.success("提交成功"),e.getAddress(),e.current=1,e.form={}}))},handleEdit:function(e,t){var a=this;a.dialogAddress=!0,a.pro_id="",a.city_id="",a.community_id="",r["a"].getaddress(t.id).then((function(e){a.form={id:t.id,project_id:e.project_id,type:e.type,address:e.address,contact:e.contact,face_groups:e.face_groups,lng:e.lng,lat:e.lat}}))},handleDel:function(){},getPro:function(){var e=this;r["a"].areas(1,100,0).then((function(t){e.proList=t.data}))},proChange:function(e){this.getCity(e)},getCity:function(e){var t=this;r["a"].areas(1,100,e).then((function(e){t.cityList=e.data}))},cityChange:function(e){this.getAreas(e)},getAreas:function(e){var t=this;r["a"].areas(1,100,e).then((function(e){t.areaList=e.data}))},areasChange:function(e){this.getCommunity(e)},getCommunity:function(e){var t=this;r["a"].areas(1,100,e).then((function(e){t.communityList=e.data}))},communityChange:function(e){this.form.area_id=e},currentChange:function(e){var t=this;t.loading=!0,t.current=e,r["a"].addresses(e,t.size).then((function(e){t.loading=!1,t.tableData=e.data,t.total=e.total})).catch((function(e){t.loading=!1}))},sizeChange:function(e){var t=this;t.loading=!0,t.size=e,r["a"].addresses(t.current,e).then((function(e){t.loading=!1,t.tableData=e.data,t.total=e.total})).catch((function(e){t.loading=!1}))},prevChange:function(e){var t=this;t.loading=!0,t.current=e,r["a"].addresses(e,t.size).then((function(e){t.loading=!1,t.tableData=e.data,t.total=e.total})).catch((function(e){t.loading=!1}))},nextChange:function(e){var t=this;t.loading=!0,t.current=e,r["a"].addresses(e,t.size).then((function(e){t.loading=!1,t.tableData=e.data,t.total=e.total})).catch((function(e){t.loading=!1}))}}},g=f,m=(a("d977"),Object(u["a"])(g,n,i,!1,null,null,null));t["default"]=m.exports},a9e3:function(e,t,a){"use strict";var n=a("83ab"),i=a("da84"),r=a("94ca"),o=a("6eeb"),s=a("5135"),c=a("c6b6"),l=a("7156"),u=a("c04e"),d=a("d039"),p=a("7c73"),f=a("241c").f,g=a("06cf").f,m=a("9bf2").f,h=a("58a8").trim,v="Number",b=i[v],y=b.prototype,_=c(p(y))==v,k=function(e){var t,a,n,i,r,o,s,c,l=u(e,!1);if("string"==typeof l&&l.length>2)if(l=h(l),t=l.charCodeAt(0),43===t||45===t){if(a=l.charCodeAt(2),88===a||120===a)return NaN}else if(48===t){switch(l.charCodeAt(1)){case 66:case 98:n=2,i=49;break;case 79:case 111:n=8,i=55;break;default:return+l}for(r=l.slice(2),o=r.length,s=0;s<o;s++)if(c=r.charCodeAt(s),c<48||c>i)return NaN;return parseInt(r,n)}return+l};if(r(v,!b(" 0o1")||!b("0b1")||b("+0x1"))){for(var A,x=function(e){var t=arguments.length<1?0:e,a=this;return a instanceof x&&(_?d((function(){y.valueOf.call(a)})):c(a)!=v)?l(new b(k(t)),a,x):k(t)},C=n?f(b):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),L=0;C.length>L;L++)s(b,A=C[L])&&!s(x,A)&&m(x,A,g(b,A));x.prototype=y,y.constructor=x,o(i,v,x)}},d977:function(e,t,a){"use strict";var n=a("9ab3"),i=a.n(n);i.a},e2d3:function(e,t,a){"use strict";var n=a("3ac8"),i=a.n(n);i.a}}]);
//# sourceMappingURL=chunk-ce18a652.826a5fdb.js.map