(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ce18a652"],{"365c":function(t,e,a){"use strict";var n=a("be3b"),i=a("99b1"),r=a.n(i),o={aip:function(t){return n["a"].post(r.a.Aip,t)},delAip:function(t){return n["a"].del(r.a.Aip,{id:t})},aips:function(t,e){return n["a"].get(r.a.Aips,{page:t,limit:e})},apk:function(t){return n["a"].post(r.a.Apk,t)},apks:function(t,e){return n["a"].get(r.a.Apks,{page:t,limit:e})},apkVersion:function(t){return n["a"].post(r.a.ApkVersion,t)},apkVersions:function(t,e,a){return n["a"].get(r.a.ApkVersions,{page:t,limit:e,apk_id:a})},_apkVersions:function(t){return n["a"].get(r.a.ApkVersions,{id:t})},publishApk:function(t){return n["a"].post(r.a.PublishApk,t)},project:function(t){return n["a"].post(r.a.Project,t)},projects:function(t,e){return n["a"].get(r.a.Projects,{page:t,limit:e})},address:function(t){return n["a"].post(r.a.Address,t)},getaddress:function(t){return n["a"].get(r.a.Address,{id:t})},addresses:function(t,e,a,i,o){return n["a"].get(r.a.Addresses,{page:t,limit:e,project_id:a,area_id:i,address:o})},addressTypes:function(t,e){return n["a"].get(r.a.AddressTypes,{page:t,limit:e})},face:function(t){return n["a"].post(r.a.Face,t)},faces:function(t,e,a){return n["a"].get(r.a.Faces,{page:t,limit:e,name:a})},pushRecords:function(t,e,a){return n["a"].get(r.a.PushRecords,{page:t,limit:e,name:a})},pushRecordCommands:function(t){return n["a"].get(r.a.PushRecordCommands,{id:t})},againPush:function(t){return n["a"].post(r.a.PushRecord,t)},areas:function(t,e,a){return n["a"].get(r.a.Areas,{page:t,limit:e,parent_id:a})},area:function(t){return n["a"].post(r.a.Area,t)},device:function(t){return n["a"].post(r.a.Device,t)},_device:function(t){return n["a"].get(r.a.Device,{uuid:t})},devices:function(t,e,a,i,o,s){return n["a"].get(r.a.Devices,{page:t,limit:e,type:a,uuid:i,area_id:o,address_id:s})},_devices:function(t,e,a){return n["a"].get(r.a.Devices,{direction:t,addresses:e,limit:a})},deviceLogs:function(t,e,a,i){return n["a"].get(r.a.DeviceLogs,{page:t,limit:e,uuid:a,type:i})},deviceFaceLogs:function(t,e,a,i,o,s){return n["a"].get(r.a.DeviceRecord,{page:t,limit:e,uuid:a,name:i,area_id:o,address_id:s})},deviceTypes:function(){return n["a"].get(r.a.DeviceTypes)},deviceHeart:function(t){return n["a"].get(r.a.DeviceHeartbeat,{uuid:t})},deviceCommands:function(t,e,a){return n["a"].get(r.a.DeviceCommands,{page:t,limit:e,uuid:a})},commandsType:function(t){return n["a"].get(r.a.Commands,{type:t})},sendDeviceCommand:function(t){return n["a"].post(r.a.SendDeviceCommand,t)},deviceUserList:function(t,e,a){return n["a"].get(r.a.DeviceUserList,{page:t,limit:e,uuid:a})},faceGroup:function(t){return n["a"].get(r.a.FaceGroup,{address_id:t})},uuid:function(t,e){return n["a"].get(r.a.Uuid,{page:t,limit:e})},dangerFace:function(t){return n["a"].post(r.a.DangerFace,t)},delDangerFace:function(t){return n["a"].del(r.a.DelDangerFace,{id:t})},dangerFaces:function(t,e){return n["a"].get(r.a.DangerFaces,{page:t,limit:e})},dangerLogs:function(t,e){return n["a"].get(r.a.DangerLogs,{page:t,limit:e})},roles:function(t,e){return n["a"].get(r.a.Roles,{page:t,limit:e})},oneRole:function(t){return n["a"].get(r.a.Role,{name:t})},role:function(t){return n["a"].post(r.a.Role,t)},users:function(t,e){return n["a"].get(r.a.Users,{page:t,limit:e})},user:function(t){return n["a"].post(r.a.User,t)},policeStation:function(t){return n["a"].post(r.a.PoliceStation,t)},policeStations:function(t,e,a){return n["a"].get(r.a.PoliceStations,{page:t,limit:e,name:a})},information:function(t){return n["a"].post(r.a.Information,t)},informations:function(t,e,a,i){return n["a"].get(r.a.Information,{page:t,limit:e,id:a,title:i})},faceSwitch:function(t){return n["a"].post(r.a.FaceSwicth,t)},delFaceSwitch:function(t){return n["a"].del(r.a.FaceSwicth,{id:t})},faceSwitches:function(t,e){return n["a"].get(r.a.FaceSwicthes,{page:t,limit:e})}};e["a"]=o},"3ac8":function(t,e,a){},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,a){var n=a("1d80"),i=a("5899"),r="["+i+"]",o=RegExp("^"+r+r+"*"),s=RegExp(r+r+"*$"),c=function(t){return function(e){var a=String(n(e));return 1&t&&(a=a.replace(o,"")),2&t&&(a=a.replace(s,"")),a}};t.exports={start:c(1),end:c(2),trim:c(3)}},"9ab3":function(t,e,a){},"9d5f":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],attrs:{"element-loading-text":"获取数据中"}},[a("div",{staticClass:"handle-box"},[a("div",{staticClass:"btn"},[a("el-button",{attrs:{type:"primary"},on:{click:t.addAddress}},[t._v("添加地址")])],1),a("div",{staticClass:"btn"},[a("el-input",{staticClass:"input-with-select",attrs:{placeholder:"输入地址名称"},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.search(t.name)}},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}},[a("el-button",{attrs:{slot:"append",icon:"el-icon-search"},on:{click:function(e){return t.search(t.name)}},slot:"append"})],1)],1),a("div",{staticClass:"btn"},[a("el-cascader",{attrs:{placeholder:"请选择省市区",options:t.cascaderData,props:t.props},on:{change:t.areaProChange},model:{value:t.pro_city_area,callback:function(e){t.pro_city_area=e},expression:"pro_city_area"}})],1)]),a("el-dialog",{attrs:{title:"添加地址",visible:t.dialogAddress,"close-on-click-modal":!1,width:"80%"},on:{"update:visible":function(e){t.dialogAddress=e}}},[a("div",{staticClass:"box"},[a("el-form",{attrs:{model:t.form,"label-width":"120px"}},[a("el-form-item",{attrs:{label:"选择项目"}},[a("el-select",{model:{value:t.form.project_id,callback:function(e){t.$set(t.form,"project_id",e)},expression:"form.project_id"}},t._l(t.projectList,(function(t,e){return a("el-option",{key:e,attrs:{label:t.name,value:t.id}})})),1)],1),a("el-form-item",{attrs:{label:"选择类型"}},[a("el-select",{model:{value:t.form.type,callback:function(e){t.$set(t.form,"type",e)},expression:"form.type"}},t._l(t.typeList,(function(t,e){return a("el-option",{key:e,attrs:{label:t,value:e}})})),1)],1),a("el-form-item",{attrs:{label:"选择社区"}},[a("el-select",{staticStyle:{"margin-right":"10px"},attrs:{placeholder:"请选择省份"},on:{change:t.proChange},model:{value:t.pro_id,callback:function(e){t.pro_id=e},expression:"pro_id"}},t._l(t.proList,(function(t){return a("el-option",{key:t.id,attrs:{label:t.title,value:t.id}})})),1),a("el-select",{staticStyle:{"margin-right":"10px"},attrs:{placeholder:"请选择市级"},on:{change:t.cityChange},model:{value:t.city_id,callback:function(e){t.city_id=e},expression:"city_id"}},t._l(t.cityList,(function(t){return a("el-option",{key:t.id,attrs:{label:t.title,value:t.id}})})),1),a("el-select",{staticStyle:{"margin-right":"10px"},attrs:{placeholder:"请选择区级"},on:{change:t.areasChange},model:{value:t.community_id,callback:function(e){t.community_id=e},expression:"community_id"}},t._l(t.areaList,(function(t){return a("el-option",{key:t.id,attrs:{label:t.title,value:t.id}})})),1),a("el-select",{staticStyle:{"margin-right":"10px"},attrs:{placeholder:"请选择社区"},on:{change:t.communityChange},model:{value:t.areas_id,callback:function(e){t.areas_id=e},expression:"areas_id"}},t._l(t.communityList,(function(t){return a("el-option",{key:t.id,attrs:{label:t.title,value:t.id}})})),1)],1),a("el-form-item",{attrs:{label:"地址"}},[a("div",{staticClass:"address-info"},[a("el-input",{staticStyle:{"margin-right":"10px"},attrs:{placeholder:"地址显示"},model:{value:t.form.address,callback:function(e){t.$set(t.form,"address",e)},expression:"form.address"}}),a("el-input",{staticStyle:{"margin-right":"10px"},attrs:{placeholder:"经度显示"},model:{value:t.form.lng,callback:function(e){t.$set(t.form,"lng",e)},expression:"form.lng"}}),a("el-input",{staticStyle:{"margin-right":"10px"},attrs:{placeholder:"纬度显示"},model:{value:t.form.lat,callback:function(e){t.$set(t.form,"lat",e)},expression:"form.lat"}})],1)]),a("el-form-item",{attrs:{label:"地图显示"}},[a("el-switch",{attrs:{"active-color":"#2a9f93"},model:{value:t.showMap,callback:function(e){t.showMap=e},expression:"showMap"}}),t.showMap?a("div",[a("v-map",{on:{callback:t.getLoc}})],1):t._e()],1),a("el-form-item",{attrs:{label:"联系方式"}},[a("el-input",{model:{value:t.form.contact,callback:function(e){t.$set(t.form,"contact",e)},expression:"form.contact"}})],1),t._l(t.form.face_groups,(function(e,n){return a("div",{key:n},[a("el-form-item",{attrs:{label:"人脸分组姓名"}},[a("el-input",{model:{value:e.name,callback:function(a){t.$set(e,"name",a)},expression:"item.name"}})],1),a("el-form-item",{attrs:{label:"是否默认分组"}},[a("el-radio-group",{model:{value:e.is_default,callback:function(a){t.$set(e,"is_default",a)},expression:"item.is_default"}},[a("el-radio",{attrs:{label:1}},[t._v("是")]),a("el-radio",{attrs:{label:2}},[t._v("否")])],1)],1),a("el-form-item",{attrs:{label:"是否为在线分组"}},[a("el-radio-group",{model:{value:e.online,callback:function(a){t.$set(e,"online",a)},expression:"item.online"}},[a("el-radio",{attrs:{label:1}},[t._v("是")]),a("el-radio",{attrs:{label:2}},[t._v("否")])],1)],1)],1)})),a("el-form-item",{attrs:{label:"操作"}},[a("el-button",{attrs:{size:"mini",type:"primary"},on:{click:t.addFace}},[t._v("添加人脸姓名")]),a("el-button",{attrs:{size:"mini",type:"danger"},on:{click:t.delFace}},[t._v("删除人脸姓名")])],1),a("el-form-item",{attrs:{label:"选择公安辖区"}},[a("el-checkbox",{on:{change:t.handleCheckAllChange},model:{value:t.checkAll,callback:function(e){t.checkAll=e},expression:"checkAll"}},[t._v("全选")]),a("div",{staticClass:"facebox"},[a("el-checkbox-group",{staticClass:"facebox-item",model:{value:t.form.stations,callback:function(e){t.$set(t.form,"stations",e)},expression:"form.stations"}},t._l(t.stationList,(function(e,n){return a("div",{key:n},[a("el-checkbox",{attrs:{label:e.id}},[t._v(t._s(e.name))])],1)})),0)],1)],1),a("div",{staticClass:"submit"},[a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:t.newProject}},[t._v("提交")])],1)],1)],2)],1)]),a("el-table",{attrs:{data:t.tableData,border:"","header-cell-style":{background:"#f0f0f0",color:"#2a9f93"},"max-height":"620"}},[a("el-table-column",{attrs:{prop:"id",label:"ID"}}),a("el-table-column",{attrs:{prop:"project_id",label:"项目ID"}}),a("el-table-column",{attrs:{prop:"address",label:"地址"}}),a("el-table-column",{attrs:{prop:"stations",label:"所在辖区"}}),a("el-table-column",{attrs:{prop:"contact",label:"联系方式"}}),a("el-table-column",{attrs:{prop:"address_uuid",label:"address_uuid"}}),a("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(a){return t.handleEdit(e.$index,e.row)}}},[t._v("编辑")]),a("el-popconfirm",{staticStyle:{"margin-left":"10px"},attrs:{title:"是否要删除该条数据",cancelButtonType:"primary"},on:{onConfirm:function(a){return t.handleDel(e.$index,e.row)}}},[a("el-button",{attrs:{slot:"reference",size:"mini",type:"danger"},slot:"reference"},[t._v("删除")])],1)]}}])})],1),a("div",{staticClass:"block"},[a("el-pagination",{attrs:{"current-page":t.current,"page-sizes":[10,20,50,100,150,200,250,300],"page-size":t.size,layout:"sizes, prev, pager, next, jumper",total:t.total},on:{"current-change":t.currentChange,"update:currentPage":function(e){t.current=e},"update:current-page":function(e){t.current=e},"size-change":t.sizeChange}})],1)],1)},i=[],r=(a("4160"),a("b0c0"),a("159b"),a("365c")),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"map"},[a("iframe",{attrs:{id:"mapPage",width:"100%",height:"800",frameborder:"0",src:t.getSrc}})])},s=[],c=(a("99af"),a("a9e3"),{data:function(){return{}},computed:{getSrc:function(){var t="https://apis.map.qq.com/tools/locpicker?search=1&type=1&key=3WRBZ-BCNKF-55SJF-NABK3-SUJKZ-73BWA&referer=myapp";return this.lat&&this.lng&&(t+="&coord=".concat(this.lat,",").concat(this.lng)),t}},props:{mapKey:{type:String,default:""},keyName:{type:String,default:""},lat:{type:[String,Number]},lng:{type:[String,Number]}},mounted:function(){var t=this;window.addEventListener("message",(function(e){var a=e.data;a&&"locationPicker"===a.module&&t.$emit("callback",a)}),!1)}}),l=c,u=(a("e2d3"),a("2877")),d=Object(u["a"])(l,o,s,!1,null,"618711cc",null),p=d.exports,f=[],m={components:{vMap:p},data:function(){return{loading:!0,dialogAddress:!1,projectList:[],typeList:[],form:{project_id:"",type:"",address:"",contact:"",face_groups:[],lng:"",lat:"",area_id:"",stations:[]},name:"",proList:[],pro_id:"",cityList:[],city_id:"",communityList:[],community_id:"",areaList:[],areas_id:"",showMap:!1,checkAll:!1,stationList:[],tableData:[],current:1,size:10,total:0,pro_city_area:[],pro_city_area_id:"",cascaderData:[],props:{label:"title",value:"id",lazy:!0,lazyLoad:function(t,e){var a=t.level;if(1==a){var n=t.data.id;r["a"].areas(1,100,n).then((function(t){var n=t.data;n.forEach((function(t){t.leaf=a>=3})),e(n)}))}if(2==a){var i=t.data.id;r["a"].areas(1,100,i).then((function(t){var n=t.data;n.forEach((function(t){t.leaf=a>=3})),e(n)}))}if(3==a){var o=t.data.id;r["a"].areas(1,100,o).then((function(t){var n=t.data;n.forEach((function(t){t.leaf=a>=3})),e(n)}))}}}}},mounted:function(){this.getAddress(),this.getProject(),this.getAddressType(),this.getPro(),this.getProArae()},methods:{getProArae:function(){var t=this;r["a"].areas(1,100,0).then((function(e){t.cascaderData=e.data}))},areaProChange:function(t){var e=this;e.pro_city_area_id=t[3],console.log(e.pro_city_area_id),e.loading=!0,r["a"].addresses(1,e.size,"",e.pro_city_area_id,e.name).then((function(t){e.loading=!1,e.tableData=t.data,e.total=t.total,e.$message.success("搜索成功!")})).catch((function(t){e.loading=!1}))},search:function(){var t=this;t.loading=!0,r["a"].addresses(1,t.size,"",t.pro_city_area_id,t.name).then((function(e){t.loading=!1,t.tableData=e.data,t.total=e.total,t.$message.success("搜索成功!")})).catch((function(e){t.loading=!1}))},getProject:function(){var t=this;r["a"].projects(1,100).then((function(e){t.projectList=e.data}))},getAddressType:function(){var t=this;r["a"].addressTypes(t.current).then((function(e){t.typeList=e}))},getAddress:function(){var t=this;r["a"].addresses(1,10).then((function(e){t.loading=!1,t.tableData=e.data,t.total=e.total})).catch((function(e){t.loading=!1}))},addAddress:function(){var t=this;t.getPoliceStation(),t.dialogAddress=!0,t.pro_id="",t.city_id="",t.community_id="",t.form={project_id:"",type:"",address:"",contact:"",face_groups:[],lng:"",lat:"",area_id:"",stations:[]}},addFace:function(){var t=this;t.form.face_groups.push({})},delFace:function(){var t=this;t.form.face_groups.pop({})},getLoc:function(t){this.form.lng=t.latlng.lng,this.form.lat=t.latlng.lat,this.showMap=!1},getPoliceStation:function(){var t=this;r["a"].policeStations(1,1e3).then((function(e){t.stationList=e.data}))},handleCheckAllChange:function(t){!0===t?(f=[],this.stationList.forEach((function(t){f.push(t.id)})),this.form.stations=f):!1===t&&(f=[],this.form.stations=[])},newProject:function(){var t=this;r["a"].address(t.form).then((function(e){t.dialogAddress=!1,t.$message.success("提交成功"),t.getAddress(),t.current=1,t.form={}}))},handleEdit:function(t,e){var a=this;a.getPoliceStation(),a.dialogAddress=!0,a.checkAll=!1,a.pro_id="",a.city_id="",a.community_id="",r["a"].getaddress(e.id).then((function(t){a.form={id:e.id,project_id:t.project_id,area_id:t.area_id,type:t.type,address:t.address,contact:t.contact,face_groups:t.face_groups,stations:t.stations,lng:t.lng,lat:t.lat},a.form.stations.length==a.stationList.length&&(a.checkAll=!0)}))},handleDel:function(){},getPro:function(){var t=this;r["a"].areas(1,100,0).then((function(e){t.proList=e.data}))},proChange:function(t){this.getCity(t)},getCity:function(t){var e=this;r["a"].areas(1,100,t).then((function(t){e.cityList=t.data}))},cityChange:function(t){this.getAreas(t)},getAreas:function(t){var e=this;r["a"].areas(1,100,t).then((function(t){e.areaList=t.data}))},areasChange:function(t){this.getCommunity(t)},getCommunity:function(t){var e=this;r["a"].areas(1,100,t).then((function(t){e.communityList=t.data}))},communityChange:function(t){this.form.area_id=t},currentChange:function(t){var e=this;e.loading=!0,e.current=t,r["a"].addresses(t,e.size,"",e.pro_city_area_id,e.name).then((function(t){e.loading=!1,e.tableData=t.data,e.total=t.total})).catch((function(t){e.loading=!1}))},sizeChange:function(t){var e=this;e.loading=!0,e.size=t,r["a"].addresses(e.current,t,"",e.pro_city_area_id,e.name).then((function(t){e.loading=!1,e.tableData=t.data,e.total=t.total})).catch((function(t){e.loading=!1}))}}},g=m,h=(a("d977"),Object(u["a"])(g,n,i,!1,null,null,null));e["default"]=h.exports},a9e3:function(t,e,a){"use strict";var n=a("83ab"),i=a("da84"),r=a("94ca"),o=a("6eeb"),s=a("5135"),c=a("c6b6"),l=a("7156"),u=a("c04e"),d=a("d039"),p=a("7c73"),f=a("241c").f,m=a("06cf").f,g=a("9bf2").f,h=a("58a8").trim,v="Number",_=i[v],b=_.prototype,y=c(p(b))==v,k=function(t){var e,a,n,i,r,o,s,c,l=u(t,!1);if("string"==typeof l&&l.length>2)if(l=h(l),e=l.charCodeAt(0),43===e||45===e){if(a=l.charCodeAt(2),88===a||120===a)return NaN}else if(48===e){switch(l.charCodeAt(1)){case 66:case 98:n=2,i=49;break;case 79:case 111:n=8,i=55;break;default:return+l}for(r=l.slice(2),o=r.length,s=0;s<o;s++)if(c=r.charCodeAt(s),c<48||c>i)return NaN;return parseInt(r,n)}return+l};if(r(v,!_(" 0o1")||!_("0b1")||_("+0x1"))){for(var A,x=function(t){var e=arguments.length<1?0:t,a=this;return a instanceof x&&(y?d((function(){b.valueOf.call(a)})):c(a)!=v)?l(new _(k(e)),a,x):k(e)},C=n?f(_):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),S=0;C.length>S;S++)s(_,A=C[S])&&!s(x,A)&&g(x,A,m(_,A));x.prototype=b,b.constructor=x,o(i,v,x)}},d977:function(t,e,a){"use strict";var n=a("9ab3"),i=a.n(n);i.a},e2d3:function(t,e,a){"use strict";var n=a("3ac8"),i=a.n(n);i.a}}]);
//# sourceMappingURL=chunk-ce18a652.3e5e6a16.js.map