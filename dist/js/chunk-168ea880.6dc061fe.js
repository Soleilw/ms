(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-168ea880"],{bb87:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],attrs:{"element-loading-text":"获取数据中"}},[a("div",{staticClass:"handle-box"},[a("div",{staticClass:"btn"},[a("el-button",{attrs:{type:"primary"},on:{click:e.addFace}},[e._v("添加人脸")])],1),a("div",{staticClass:"btn"},[a("el-input",{staticClass:"input-with-select",attrs:{placeholder:"请输入姓名"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.search(e.name)}},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}},[a("el-button",{attrs:{slot:"append",icon:"el-icon-search"},on:{click:function(t){return e.search(e.name)}},slot:"append"})],1)],1)]),a("el-dialog",{attrs:{title:"添加人脸",visible:e.dialogFace},on:{"update:visible":function(t){e.dialogFace=t}}},[a("div",{staticClass:"box"},[a("el-form",{attrs:{model:e.form,"label-width":"100px"}},[a("el-form-item",{attrs:{label:"选择地址"}},[a("el-select",{attrs:{filterable:""},on:{change:e.addressChange},model:{value:e.form.address_id,callback:function(t){e.$set(e.form,"address_id",t)},expression:"form.address_id"}},e._l(e.addressList,(function(e,t){return a("el-option",{key:t,attrs:{label:e.address,value:e.id}})})),1)],1),a("el-form-item",{attrs:{label:"选择人脸组"}},[a("el-select",{model:{value:e.form.group_id,callback:function(t){e.$set(e.form,"group_id",t)},expression:"form.group_id"}},e._l(e.faceGroupList,(function(e,t){return a("el-option",{key:t,attrs:{label:e.group_name,value:e.id}})})),1)],1),a("el-form-item",{attrs:{label:"姓名"}},[a("el-input",{model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),a("el-form-item",{attrs:{label:"学号"}},[a("el-input",{model:{value:e.form.number,callback:function(t){e.$set(e.form,"number",t)},expression:"form.number"}})],1),a("el-form-item",{attrs:{label:"上传人脸"}},[a("el-upload",{ref:"upload",attrs:{action:"https://api.fengniaotuangou.cn/api/upload","list-type":"picture-card","auto-upload":!1,limit:1,"on-success":e.handleAvatarSuccess,"on-exceed":e.handleExceed},scopedSlots:e._u([{key:"file",fn:function(t){var n=t.file;return a("div",{},[a("img",{staticClass:"el-upload-list__item-thumbnail",attrs:{src:n.url,alt:""}}),a("span",{staticClass:"el-upload-list__item-actions"},[e.disabled?e._e():a("span",{staticClass:"el-upload-list__item-delete",on:{click:function(t){return e.handleRemove(n)}}},[a("i",{staticClass:"el-icon-delete"})])])])}}])},[a("i",{staticClass:"el-icon-plus",attrs:{slot:"default"},slot:"default"})])],1),a("div",{staticClass:"submit"},[a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:e.newFace}},[e._v("提交")])],1)],1)],1)],1)]),a("el-table",{attrs:{data:e.tableData,border:"","header-cell-style":{background:"#f0f0f0",color:"#2a9f93"},"max-height":"620"}},[a("el-table-column",{attrs:{prop:"id",label:"ID"}}),a("el-table-column",{attrs:{prop:"name",label:"名字"}}),a("el-table-column",{attrs:{prop:"face_id",label:"人脸ID"}}),a("el-table-column",{attrs:{prop:"group",label:"人脸组",width:"200px"}}),a("el-table-column",{attrs:{prop:"number",label:"学号/身份证号"}}),a("el-table-column",{attrs:{prop:"href",label:"人脸图片"},scopedSlots:e._u([{key:"default",fn:function(e){return[a("el-popover",{attrs:{placement:"top-start",title:"",trigger:"click"}},[a("img",{staticStyle:{"max-width":"800px","max-height":"800px"},attrs:{src:e.row.href}}),a("img",{staticStyle:{"max-width":"180px","max-height":"80px"},attrs:{slot:"reference",src:e.row.href},slot:"reference"})])]}}])}),a("el-table-column",{attrs:{prop:"type",label:"类型"}})],1),a("div",{staticClass:"block"},[a("el-pagination",{attrs:{"current-page":e.current,"page-sizes":[10,20,50,100,300,500,700,900],"page-size":e.size,layout:"sizes, prev, pager, next, jumper",total:e.total},on:{"current-change":e.currentChange,"update:currentPage":function(t){e.current=t},"update:current-page":function(t){e.current=t},"size-change":e.sizeChange}})],1)],1)},l=[],r=(a("b0c0"),a("d3b7"),a("3ca3"),a("ddb0"),a("2b3d"),a("365c")),s={name:"gradems",data:function(){return{loading:!0,dialogFace:!1,name:"",addressList:[],faceGroupList:[],disabled:!1,form:{address_id:"",group_id:"",name:"",number:"",href:""},tableData:[],current:1,size:10,total:0}},mounted:function(){this.getAddress(),this.getFace()},methods:{search:function(){var e=this;r["a"].faces(e.current,e.size,e.name).then((function(t){e.loading=!1,e.tableData=t.data,e.total=t.total})).catch((function(t){e.loading=!1}))},getFace:function(){var e=this;r["a"].faces(e.current).then((function(t){e.loading=!1,e.tableData=t.data,e.total=t.total})).catch((function(t){e.loading=!1}))},getAddress:function(){var e=this;r["a"].addresses(1,1e4).then((function(t){e.addressList=t.data}))},addressChange:function(e){this.getFaceGroup(e)},getFaceGroup:function(e){var t=this;r["a"].faceGroup(e).then((function(e){t.faceGroupList=e.data}))},addFace:function(){var e=this;e.dialogFace=!0,e.form={address_id:"",group_id:"",name:"",number:"",href:""}},newFace:function(){var e=this;e.$refs.upload.submit(),r["a"].face(e.form).then((function(t){e.dialogFace=!1,e.$message.success("提交成功"),e.getAddress(),e.current=1,e.form={}}))},handleDel:function(){},handleRemove:function(e,t){},beforeAvatarUpload:function(e){var t=e.size/1024/1024<2;return t||this.$message.error("上传图片大小不能超过 2MB!"),t},handleAvatarSuccess:function(e,t){this.imageUrl=URL.createObjectURL(t.raw),this.$message.success("上传成功"),this.dialogBanner=!1,this.form.href=t.url},handleExceed:function(e,t){this.$message.error("上传图片不能超过1张!")},currentChange:function(e){var t=this;t.loading=!0,t.current=e,r["a"].faces(e,t.size).then((function(e){t.loading=!1,t.tableData=e.data,t.total=e.total})).catch((function(e){t.loading=!1}))},sizeChange:function(e){var t=this;t.loading=!0,t.size=e,r["a"].faces(t.current,e).then((function(e){t.loading=!1,t.tableData=e.data,t.total=e.total})).catch((function(e){t.loading=!1}))}}},i=s,o=(a("f2c4"),a("2877")),c=Object(o["a"])(i,n,l,!1,null,"7fe56ecd",null);t["default"]=c.exports},e569:function(e,t,a){},f2c4:function(e,t,a){"use strict";var n=a("e569"),l=a.n(n);l.a}}]);
//# sourceMappingURL=chunk-168ea880.6dc061fe.js.map