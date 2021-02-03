(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-355b4cf6"],{2882:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],attrs:{"element-loading-text":"获取数据中"}},[a("div",{staticClass:"handle-box"},[a("div",{staticClass:"btn"},[a("el-button",{attrs:{type:"primary"},on:{click:e.addRole}},[e._v("添加角色")])],1)]),a("el-table",{attrs:{data:e.tableData,stripe:"",border:"","header-cell-style":{background:"#f0f0f0",color:"#003366"},"max-height":"620"}},[a("el-table-column",{attrs:{prop:"id",label:"ID"}}),a("el-table-column",{attrs:{prop:"name",label:"角色名"}}),a("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(a){return e.handleEdit(t.$index,t.row)}}},[e._v("编辑权限")]),a("el-button",{attrs:{type:"danger",size:"mini"},on:{click:function(a){return e.handleDel(t.$index,t.row)}}},[e._v("删除")])]}}])})],1),a("el-dialog",{attrs:{visible:e.dialogDel,title:"删除角色",width:"20%",align:"center","close-on-click-modal":!1},on:{"update:visible":function(t){e.dialogDel=t}}},[a("div",{staticStyle:{"font-size":"20px","margin-bottom":"30px"}},[e._v("是否删除该角色")]),a("span",[a("el-button",{attrs:{type:"primary"},on:{click:e.toDel}},[e._v("删除")]),a("el-button",{attrs:{type:"danger"},on:{click:function(t){e.dialogDel=!1}}},[e._v("取消")])],1)]),a("div",{staticClass:"block"},[a("el-pagination",{attrs:{"current-page":e.current,"page-sizes":[10,20,50,100,150,200,250,300],"page-size":e.size,layout:"sizes, prev, pager, next, jumper",total:e.total},on:{"current-change":e.currentChange,"update:currentPage":function(t){e.current=t},"update:current-page":function(t){e.current=t},"size-change":e.sizeChange}})],1),a("el-dialog",{attrs:{title:"添加角色",visible:e.dialogRole,width:"90%","close-on-click-modal":!1},on:{"update:visible":function(t){e.dialogRole=t}}},[a("div",{staticClass:"box"},[a("el-form",{attrs:{model:e.form,"label-width":"120px"}},[a("el-form-item",{attrs:{label:"角色名称"}},[a("el-input",{attrs:{placeholder:"请输入角色名",disabled:e.disabledRole},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),a("el-form-item",{attrs:{label:"选择权限"}},["admin"==e.username?a("div",[a("el-checkbox",{on:{change:e.AllChange},model:{value:e.checkAll,callback:function(t){e.checkAll=t},expression:"checkAll"}},[e._v("全选")]),a("div",{staticClass:"permission",staticStyle:{width:"1000px"}},[a("div",{staticClass:"table"},[a("div",{staticClass:"th",staticStyle:{width:"20%"}},[e._v("一级菜单")]),a("div",{staticClass:"th",staticStyle:{width:"20%"}},[e._v("二级菜单")]),a("div",{staticClass:"th",staticStyle:{width:"60%"}},[e._v("操作")])]),a("el-checkbox-group",{model:{value:e.form.permissions,callback:function(t){e.$set(e.form,"permissions",t)},expression:"form.permissions"}},[a("div",{staticClass:"table"},[a("div",{staticClass:"tb",staticStyle:{width:"20%"}},[a("div",{staticClass:"level1"},[a("el-checkbox",{attrs:{label:"overview"},on:{change:e.oneChange}},[a("span",{staticStyle:{"font-weight":"bold"}},[e._v("数据总览")])])],1)]),a("div",{staticClass:"tb tr",staticStyle:{width:"20%"}}),a("div",{staticClass:"tb tr",staticStyle:{width:"60%"}})]),a("div",{staticClass:"table"},[a("div",{staticClass:"tb",staticStyle:{width:"20%"}},[a("div",{staticClass:"level1"},[a("el-checkbox",{attrs:{label:"baiduaip"},on:{change:e.oneChange}},[a("span",{staticStyle:{"font-weight":"bold"}},[e._v("百度接口管理")])])],1)]),a("div",{staticClass:"tb tr",staticStyle:{width:"20%"}}),a("div",{staticClass:"tb set",staticStyle:{width:"60%"}},[a("div",{staticClass:"level2"},[a("el-checkbox",{staticClass:"permission-span",attrs:{label:"baiduaipAdd"},on:{change:e.oneChange}},[e._v("新增")]),a("el-checkbox",{staticClass:"permission-span",attrs:{label:"baiduaipDel"},on:{change:e.oneChange}},[e._v("删除")]),a("el-checkbox",{staticClass:"permission-span",attrs:{label:"baiduaipGet"},on:{change:e.oneChange}},[e._v("查看")])],1)])]),a("div",{staticClass:"table"},[a("div",{staticClass:"tb",staticStyle:{width:"20%"}},[a("div",{staticClass:"level1"},[a("el-checkbox",{attrs:{label:"project"},on:{change:e.oneChange}},[a("span",{staticStyle:{"font-weight":"bold"}},[e._v("项目管理")])])],1)]),a("div",{staticClass:"tb tr",staticStyle:{width:"20%"}}),a("div",{staticClass:"tb set",staticStyle:{width:"60%"}},[a("div",{staticClass:"level2"},[a("el-checkbox",{staticClass:"permission-span",attrs:{label:"projectAdd"},on:{change:e.oneChange}},[e._v("新增")]),a("el-checkbox",{staticClass:"permission-span",attrs:{label:"projectDel"},on:{change:e.oneChange}},[e._v("删除")]),a("el-checkbox",{staticClass:"permission-span",attrs:{label:"projectGet"},on:{change:e.oneChange}},[e._v("查看")])],1)])]),a("div",{staticClass:"table"},[a("div",{staticClass:"tb",staticStyle:{width:"20%"}},[a("div",{staticClass:"level1"},[a("el-checkbox",{attrs:{label:"address"},on:{change:e.oneChange}},[a("span",{staticStyle:{"font-weight":"bold"}},[e._v("地址管理")])])],1)]),a("div",{staticClass:"tb tr",staticStyle:{width:"20%"}},[a("div",{staticClass:"level2"},[a("el-checkbox",{attrs:{label:"addressList"},on:{change:e.oneChange}},[e._v("地址列表")])],1),a("div",{staticClass:"level2"},[a("el-checkbox",{attrs:{label:"areas"},on:{change:e.oneChange}},[e._v("地区管理")])],1)]),a("div",{staticClass:"tb set",staticStyle:{width:"60%"}},[a("div",{staticClass:"level2"},[a("el-checkbox",{staticClass:"permission-span",attrs:{label:"addressAdd"},on:{change:e.oneChange}},[e._v("新增")]),a("el-checkbox",{staticClass:"permission-span",attrs:{label:"addressDel"},on:{change:e.oneChange}},[e._v("删除")]),a("el-checkbox",{staticClass:"permission-span",attrs:{label:"addressGet"},on:{change:e.oneChange}},[e._v("查看所有")]),a("el-checkbox",{staticClass:"permission-span",attrs:{label:"addressGetStation"},on:{change:e.oneChange}},[e._v("查看辖区")])],1),a("div",{staticClass:"level2"},[e._v(" 暂无 ")])])]),a("div",{staticClass:"table"},[a("div",{staticClass:"tb",staticStyle:{width:"20%"}},[a("div",{staticClass:"level1"},[a("el-checkbox",{attrs:{label:"face"},on:{change:e.oneChange}},[a("span",{staticStyle:{"font-weight":"bold"}},[e._v("人脸管理")])])],1)]),a("div",{staticClass:"tb tr",staticStyle:{width:"20%"}},[a("div",{staticClass:"level2"},[a("el-checkbox",{attrs:{label:"faceList"},on:{change:e.oneChange}},[e._v("人脸列表")])],1),a("div",{staticClass:"level2"},[a("el-checkbox",{attrs:{label:"pushLogs"},on:{change:e.oneChange}},[e._v("推送记录")])],1)]),a("div",{staticClass:"tb set",staticStyle:{width:"60%"}},[a("div",{staticClass:"level2"},[a("el-checkbox",{staticClass:"permission-span",attrs:{label:"faceAdd"},on:{change:e.oneChange}},[e._v("新增")]),a("el-checkbox",{staticClass:"permission-span",attrs:{label:"faceDel"},on:{change:e.oneChange}},[e._v("删除")]),a("el-checkbox",{staticClass:"permission-span",attrs:{label:"faceGet"},on:{change:e.oneChange}},[e._v("查看")])],1),a("div",{staticClass:"level2"},[e._v(" 暂无 ")])])]),a("div",{staticClass:"table"},[a("div",{staticClass:"tb",staticStyle:{width:"20%"}},[a("div",{staticClass:"level1"},[a("el-checkbox",{attrs:{label:"device"},on:{change:e.oneChange}},[a("span",{staticStyle:{"font-weight":"bold"}},[e._v("设备管理")])])],1)]),a("div",{staticClass:"tb tr",staticStyle:{width:"20%"}},[a("div",{staticClass:"level2"},[a("el-checkbox",{attrs:{label:"deviceList"},on:{change:e.oneChange}},[e._v("设备列表")])],1),a("div",{staticClass:"level2"},[a("el-checkbox",{attrs:{label:"command"},on:{change:e.oneChange}},[e._v("指令管理")])],1)]),a("div",{staticClass:"tb set",staticStyle:{width:"60%"}},[a("div",{staticClass:"level2"},[a("el-checkbox",{staticClass:"permission-span",attrs:{label:"deviceAdd"},on:{change:e.oneChange}},[e._v("新增")]),a("el-checkbox",{staticClass:"permission-span",attrs:{label:"deviceDel"},on:{change:e.oneChange}},[e._v("删除")]),a("el-checkbox",{staticClass:"permission-span",attrs:{label:"deviceGet"},on:{change:e.oneChange}},[e._v("查看所有")]),a("el-checkbox",{staticClass:"permission-span",attrs:{label:"deviceGetStation"},on:{change:e.oneChange}},[e._v("查看辖区")])],1),a("div",{staticClass:"level2"},[e._v(" 暂无 ")])])]),a("div",{staticClass:"table"},[a("div",{staticClass:"tb",staticStyle:{width:"20%"}},[a("div",{staticClass:"level1"},[a("el-checkbox",{attrs:{label:"package"},on:{change:e.oneChange}},[a("span",{staticStyle:{"font-weight":"bold"}},[e._v("包管理")])])],1)]),a("div",{staticClass:"tb tr",staticStyle:{width:"20%"}}),a("div",{staticClass:"tb set",staticStyle:{width:"60%"}},[a("div",{staticClass:"level2"},[a("el-checkbox",{staticClass:"permission-span",attrs:{label:"apkAdd"},on:{change:e.oneChange}},[e._v("新增安装包")]),a("el-checkbox",{staticClass:"permission-span",attrs:{label:"apkDel"},on:{change:e.oneChange}},[e._v("删除安装包")]),a("el-checkbox",{staticClass:"permission-span",attrs:{label:"apkGet"},on:{change:e.oneChange}},[e._v("查看安装包")]),a("el-checkbox",{staticClass:"permission-span",attrs:{label:"apkVersionAdd"},on:{change:e.oneChange}},[e._v("新增版本")]),a("el-checkbox",{staticClass:"permission-span",attrs:{label:"apkVersionSend"},on:{change:e.oneChange}},[e._v("发布版本")]),a("el-checkbox",{staticClass:"permission-span",attrs:{label:"apkVersionDel"},on:{change:e.oneChange}},[e._v("删除版本")])],1)])]),a("div",{staticClass:"table"},[a("div",{staticClass:"tb",staticStyle:{width:"20%"}},[a("div",{staticClass:"level1"},[a("el-checkbox",{attrs:{label:"danger"},on:{change:e.oneChange}},[a("span",{staticStyle:{"font-weight":"bold"}},[e._v("可疑管理")])])],1)]),a("div",{staticClass:"tb tr",staticStyle:{width:"20%"}},[a("div",{staticClass:"level2"},[a("el-checkbox",{attrs:{label:"doubtable"},on:{change:e.oneChange}},[e._v("可疑人脸")])],1),a("div",{staticClass:"level2"},[a("el-checkbox",{attrs:{label:"dangerlogs"},on:{change:e.oneChange}},[e._v("可疑日志")])],1)]),a("div",{staticClass:"tb set",staticStyle:{width:"60%"}},[a("div",{staticClass:"level2"},[a("el-checkbox",{staticClass:"permission-span",attrs:{label:"dangerAdd"},on:{change:e.oneChange}},[e._v("新增")]),a("el-checkbox",{staticClass:"permission-span",attrs:{label:"dangerDel"},on:{change:e.oneChange}},[e._v("删除")]),a("el-checkbox",{staticClass:"permission-span",attrs:{label:"dangerGet"},on:{change:e.oneChange}},[e._v("查看")])],1),a("div",{staticClass:"level2"},[a("el-checkbox",{staticClass:"permission-span",attrs:{label:"dangerLogDel"},on:{change:e.oneChange}},[e._v("删除")]),a("el-checkbox",{staticClass:"permission-span",attrs:{label:"dangerLogGet"},on:{change:e.oneChange}},[e._v("查看")]),a("el-checkbox",{staticClass:"permission-span",attrs:{label:"dangerLogGetStation"},on:{change:e.oneChange}},[e._v("查看辖区")])],1)])]),a("div",{staticClass:"table"},[a("div",{staticClass:"tb",staticStyle:{width:"20%"}},[a("div",{staticClass:"level1"},[a("el-checkbox",{attrs:{label:"permission"},on:{change:e.oneChange}},[a("span",{staticStyle:{"font-weight":"bold"}},[e._v("权限管理")])])],1)]),a("div",{staticClass:"tb tr",staticStyle:{width:"20%"}},[a("div",{staticClass:"level2"},[a("el-checkbox",{attrs:{label:"roles"},on:{change:e.oneChange}},[e._v("角色管理")])],1),a("div",{staticClass:"level2"},[a("el-checkbox",{attrs:{label:"manage"},on:{change:e.oneChange}},[e._v("账号管理")])],1)]),a("div",{staticClass:"tb set",staticStyle:{width:"60%"}},[a("div",{staticClass:"level2"},[a("el-checkbox",{staticClass:"permission-span",attrs:{label:"roleAdd"},on:{change:e.oneChange}},[e._v("新增")]),a("el-checkbox",{staticClass:"permission-span",attrs:{label:"roleDel"},on:{change:e.oneChange}},[e._v("删除")]),a("el-checkbox",{staticClass:"permission-span",attrs:{label:"roleEdit"},on:{change:e.oneChange}},[e._v("编辑")]),a("el-checkbox",{staticClass:"permission-span",attrs:{label:"roleGet"},on:{change:e.oneChange}},[e._v("查看")])],1),a("div",{staticClass:"level2"},[a("el-checkbox",{staticClass:"permission-span",attrs:{label:"manageAdd"},on:{change:e.oneChange}},[e._v("新增")]),a("el-checkbox",{staticClass:"permission-span",attrs:{label:"manageDel"},on:{change:e.oneChange}},[e._v("删除")]),a("el-checkbox",{staticClass:"permission-span",attrs:{label:"manageEdit"},on:{change:e.oneChange}},[e._v("编辑")]),a("el-checkbox",{staticClass:"permission-span",attrs:{label:"manageGet"},on:{change:e.oneChange}},[e._v("查看")]),a("el-checkbox",{staticClass:"permission-span",attrs:{label:"manageResetPwd"},on:{change:e.oneChange}},[e._v("重置密码")])],1)])]),a("div",{staticClass:"table"},[a("div",{staticClass:"tb",staticStyle:{width:"20%"}},[a("el-checkbox",{attrs:{label:"outInLogs"},on:{change:e.oneChange}},[a("span",{staticStyle:{"font-weight":"bold"}},[e._v("进出记录管理")])])],1),a("div",{staticClass:"tb tr",staticStyle:{width:"20%"}}),a("div",{staticClass:"tb set",staticStyle:{width:"60%"}})]),a("div",{staticClass:"table"},[a("div",{staticClass:"tb",staticStyle:{width:"20%"}},[a("div",{staticClass:"level1"},[a("el-checkbox",{attrs:{label:"police"},on:{change:e.oneChange}},[a("span",{staticStyle:{"font-weight":"bold"}},[e._v("警务管理")])])],1)]),a("div",{staticClass:"tb tr",staticStyle:{width:"20%"}},[a("div",{staticClass:"level2"},[a("el-checkbox",{attrs:{label:"policeList"},on:{change:e.oneChange}},[e._v("警员管理")])],1),a("div",{staticClass:"level2"},[a("el-checkbox",{attrs:{label:"department"},on:{change:e.oneChange}},[e._v("部门管理")])],1),a("div",{staticClass:"level2"},[a("el-checkbox",{attrs:{label:"account"},on:{change:e.oneChange}},[e._v("账号管理")])],1),a("div",{staticClass:"level2"},[a("el-checkbox",{attrs:{label:"personVerifies"},on:{change:e.oneChange}},[e._v("证件核验")])],1),a("div",{staticClass:"level2"},[a("el-checkbox",{attrs:{label:"screenSaver"},on:{change:e.oneChange}},[e._v("屏保设置")])],1)]),a("div",{staticClass:"tb set",staticStyle:{width:"60%"}},[a("div",{staticClass:"level2"},[a("el-checkbox",{staticClass:"permission-span",attrs:{label:"policeListAdd"},on:{change:e.oneChange}},[e._v("新增")]),a("el-checkbox",{staticClass:"permission-span",attrs:{label:"policeListDel"},on:{change:e.oneChange}},[e._v("删除")]),a("el-checkbox",{staticClass:"permission-span",attrs:{label:"policeListEdit"},on:{change:e.oneChange}},[e._v("编辑")]),a("el-checkbox",{staticClass:"permission-span",attrs:{label:"policeListGet"},on:{change:e.oneChange}},[e._v("查看")])],1),a("div",{staticClass:"level2"},[a("el-checkbox",{staticClass:"permission-span",attrs:{label:"departmentGet"},on:{change:e.oneChange}},[e._v("新增")]),a("el-checkbox",{staticClass:"permission-span",attrs:{label:"departmentDel"},on:{change:e.oneChange}},[e._v("删除")]),a("el-checkbox",{staticClass:"permission-span",attrs:{label:"departmentEdit"},on:{change:e.oneChange}},[e._v("编辑")]),a("el-checkbox",{staticClass:"permission-span",attrs:{label:"departmentGet"},on:{change:e.oneChange}},[e._v("查看")])],1),a("div",{staticClass:"level2"},[e._v(" dd ")]),a("div",{staticClass:"level2"},[e._v(" dd ")]),a("div",{staticClass:"level2"},[e._v(" dd ")])])]),a("div",{staticClass:"table"},[a("div",{staticClass:"tb",staticStyle:{width:"20%"}},[a("div",{staticClass:"level1"},[a("el-checkbox",{attrs:{label:"security"},on:{change:e.oneChange}},[a("span",{staticStyle:{"font-weight":"bold"}},[e._v("安防布控")])])],1)]),a("div",{staticClass:"tb tr",staticStyle:{width:"20%"}},[a("div",{staticClass:"level2"},[a("el-checkbox",{attrs:{label:"upload"},on:{change:e.oneChange}},[e._v("上传可疑人脸")])],1),a("div",{staticClass:"level2"},[a("el-checkbox",{attrs:{label:"search"},on:{change:e.oneChange}},[e._v("搜索人脸")])],1)]),a("div",{staticClass:"tb set",staticStyle:{width:"60%"}})]),a("div",{staticClass:"table"},[a("div",{staticClass:"tb",staticStyle:{width:"20%"}},[a("div",{staticClass:"level1"},[a("el-checkbox",{attrs:{label:"statistical"},on:{change:e.oneChange}},[a("span",{staticStyle:{"font-weight":"bold"}},[e._v("统计")])])],1)]),a("div",{staticClass:"tb tr",staticStyle:{width:"20%"}},[a("div",{staticClass:"level2"},[a("el-checkbox",{attrs:{label:"data"},on:{change:e.oneChange}},[e._v("数据统计")])],1),a("div",{staticClass:"level2"},[a("el-checkbox",{attrs:{label:"generate"},on:{change:e.oneChange}},[e._v("导出数据表")])],1)]),a("div",{staticClass:"tb set",staticStyle:{width:"60%"}})]),a("div",{staticClass:"table"},[a("div",{staticClass:"tb",staticStyle:{width:"20%"}},[a("el-checkbox",{attrs:{label:"alert"},on:{change:e.oneChange}},[a("span",{staticStyle:{"font-weight":"bold"}},[e._v("告警处理")])])],1),a("div",{staticClass:"tb tr",staticStyle:{width:"20%"}}),a("div",{staticClass:"tb set",staticStyle:{width:"60%"}},[a("div",{staticClass:"level2"},[a("el-checkbox",{staticClass:"permission-span",attrs:{label:"alertGet"},on:{change:e.oneChange}},[e._v("查看所有")]),a("el-checkbox",{staticClass:"permission-span",attrs:{label:"alertGetStation"},on:{change:e.oneChange}},[e._v("查看辖区")])],1)])]),a("div",{staticClass:"table"},[a("div",{staticClass:"tb",staticStyle:{width:"20%"}},[a("div",{staticClass:"level1"},[a("el-checkbox",{attrs:{label:"area"},on:{change:e.oneChange}},[a("span",{staticStyle:{"font-weight":"bold"}},[e._v("辖区管理")])])],1)]),a("div",{staticClass:"tb tr",staticStyle:{width:"20%"}},[a("div",{staticClass:"level2"},[a("el-checkbox",{attrs:{label:"areaList"},on:{change:e.oneChange}},[e._v("辖区列表")])],1)]),a("div",{staticClass:"tb set",staticStyle:{width:"60%"}})]),a("div",{staticClass:"table"},[a("div",{staticClass:"tb",staticStyle:{width:"20%"}},[a("el-checkbox",{attrs:{label:"user"},on:{change:e.oneChange}},[a("span",{staticStyle:{"font-weight":"bold"}},[e._v("用户管理")])])],1),a("div",{staticClass:"tb tr",staticStyle:{width:"20%"}},[a("div",{staticClass:"level2"},[a("el-checkbox",{attrs:{label:"userList"},on:{change:e.oneChange}},[e._v("用户列表")])],1)]),a("div",{staticClass:"tb set",staticStyle:{width:"60%"}})]),a("div",{staticClass:"table"},[a("div",{staticClass:"tb",staticStyle:{width:"20%"}},[a("div",{staticClass:"level1"},[a("el-checkbox",{attrs:{label:"renter"},on:{change:e.oneChange}},[a("span",{staticStyle:{"font-weight":"bold"}},[e._v("住户管理")])])],1)]),a("div",{staticClass:"tb tr",staticStyle:{width:"20%"}},[a("div",{staticClass:"level2"},[a("el-checkbox",{attrs:{label:"renterList"},on:{change:e.oneChange}},[e._v("住户列表")])],1)]),a("div",{staticClass:"tb set",staticStyle:{width:"60%"}})]),a("div",{staticClass:"table"},[a("div",{staticClass:"tb",staticStyle:{width:"20%"}},[a("div",{staticClass:"level1"},[a("el-checkbox",{attrs:{label:"school"},on:{change:e.oneChange}},[a("span",{staticStyle:{"font-weight":"bold"}},[e._v("学校管理")])])],1)]),a("div",{staticClass:"tb tr",staticStyle:{width:"20%"}},[a("div",{staticClass:"level2"},[a("el-checkbox",{attrs:{label:"schoolList"},on:{change:e.oneChange}},[e._v("学校列表")])],1)]),a("div",{staticClass:"tb set",staticStyle:{width:"60%"}})]),a("div",{staticClass:"table"},[a("div",{staticClass:"tb",staticStyle:{width:"20%"}},[a("div",{staticClass:"level1"},[a("el-checkbox",{attrs:{label:"information"},on:{change:e.oneChange}},[a("span",{staticStyle:{"font-weight":"bold"}},[e._v("资讯管理")])])],1)]),a("div",{staticClass:"tb tr",staticStyle:{width:"20%"}},[a("div",{staticClass:"level2"},[a("el-checkbox",{attrs:{label:"infoList"},on:{change:e.oneChange}},[e._v("资讯列表")])],1)]),a("div",{staticClass:"tb set",staticStyle:{width:"60%"}})]),a("div",{staticClass:"table"},[a("div",{staticClass:"tb",staticStyle:{width:"20%"}},[a("div",{staticClass:"level1"},[a("el-checkbox",{attrs:{label:"switch"},on:{change:e.oneChange}},[a("span",{staticStyle:{"font-weight":"bold"}},[e._v("人脸开关管理")])])],1)]),a("div",{staticClass:"tb tr",staticStyle:{width:"20%"}},[a("div",{staticClass:"level2"},[a("el-checkbox",{attrs:{label:"faceSwitch"},on:{change:e.oneChange}},[e._v("开关列表")])],1)]),a("div",{staticClass:"tb set",staticStyle:{width:"60%"}})])])],1)],1):a("div",[a("el-checkbox",{on:{change:e.AllChange},model:{value:e.checkAll,callback:function(t){e.checkAll=t},expression:"checkAll"}},[e._v("全选")]),a("div",{staticClass:"permission",staticStyle:{width:"1000px"}},[a("div",{staticClass:"table"},[a("div",{staticClass:"th",staticStyle:{width:"20%"}},[e._v("一级菜单")]),a("div",{staticClass:"th",staticStyle:{width:"20%"}},[e._v("二级菜单")]),a("div",{staticClass:"th",staticStyle:{width:"60%"}},[e._v("操作")])]),a("el-checkbox-group",{model:{value:e.form.permissions,callback:function(t){e.$set(e.form,"permissions",t)},expression:"form.permissions"}},[a("div",{staticClass:"table"},[a("div",{staticClass:"tb",staticStyle:{width:"20%"}},[a("div",{staticClass:"level1"},[a("el-checkbox",{attrs:{label:"overview"},on:{change:e.oneChange}},[a("span",{staticStyle:{"font-weight":"bold"}},[e._v("数据总览")])])],1)]),a("div",{staticClass:"tb tr",staticStyle:{width:"20%"}}),a("div",{staticClass:"tb tr",staticStyle:{width:"60%"}})]),a("div",{staticClass:"table"},[a("div",{staticClass:"tb",staticStyle:{width:"20%"}},[a("div",{staticClass:"level1"},[a("el-checkbox",{attrs:{label:"address"},on:{change:e.oneChange}},[a("span",{staticStyle:{"font-weight":"bold"}},[e._v("地址管理")])])],1)]),a("div",{staticClass:"tb tr",staticStyle:{width:"20%"}},[a("div",{staticClass:"level2"},[a("el-checkbox",{attrs:{label:"addressList"},on:{change:e.oneChange}},[e._v("地址列表")])],1),a("div",{staticClass:"level2"},[a("el-checkbox",{attrs:{label:"areas"},on:{change:e.oneChange}},[e._v("地区管理")])],1)]),a("div",{staticClass:"tb set",staticStyle:{width:"60%"}},[a("div",{staticClass:"level2"},[a("el-checkbox",{staticClass:"permission-span",attrs:{label:"addressAdd"},on:{change:e.oneChange}},[e._v("新增")]),a("el-checkbox",{staticClass:"permission-span",attrs:{label:"addressDel"},on:{change:e.oneChange}},[e._v("删除")]),a("el-checkbox",{staticClass:"permission-span",attrs:{label:"addressGet"},on:{change:e.oneChange}},[e._v("查看")])],1),a("div",{staticClass:"level2"},[e._v(" 暂无 ")])])]),a("div",{staticClass:"table"},[a("div",{staticClass:"tb",staticStyle:{width:"20%"}},[a("div",{staticClass:"level1"},[a("el-checkbox",{attrs:{label:"face"},on:{change:e.oneChange}},[a("span",{staticStyle:{"font-weight":"bold"}},[e._v("人脸管理")])])],1)]),a("div",{staticClass:"tb tr",staticStyle:{width:"20%"}},[a("div",{staticClass:"level2"},[a("el-checkbox",{attrs:{label:"faceList"},on:{change:e.oneChange}},[e._v("人脸列表")])],1),a("div",{staticClass:"level2"},[a("el-checkbox",{attrs:{label:"pushLogs"},on:{change:e.oneChange}},[e._v("推送记录")])],1)]),a("div",{staticClass:"tb set",staticStyle:{width:"60%"}},[a("div",{staticClass:"level2"},[a("el-checkbox",{staticClass:"permission-span",attrs:{label:"faceAdd"},on:{change:e.oneChange}},[e._v("新增")]),a("el-checkbox",{staticClass:"permission-span",attrs:{label:"faceDel"},on:{change:e.oneChange}},[e._v("删除")]),a("el-checkbox",{staticClass:"permission-span",attrs:{label:"faceGet"},on:{change:e.oneChange}},[e._v("查看")])],1),a("div",{staticClass:"level2"},[e._v(" 暂无 ")])])]),a("div",{staticClass:"table"},[a("div",{staticClass:"tb",staticStyle:{width:"20%"}},[a("div",{staticClass:"level1"},[a("el-checkbox",{attrs:{label:"device"},on:{change:e.oneChange}},[a("span",{staticStyle:{"font-weight":"bold"}},[e._v("设备管理")])])],1)]),a("div",{staticClass:"tb tr",staticStyle:{width:"20%"}},[a("div",{staticClass:"level2"},[a("el-checkbox",{attrs:{label:"deviceList"},on:{change:e.oneChange}},[e._v("设备列表")])],1),a("div",{staticClass:"level2"},[a("el-checkbox",{attrs:{label:"command"},on:{change:e.oneChange}},[e._v("指令管理")])],1)]),a("div",{staticClass:"tb set",staticStyle:{width:"60%"}},[a("div",{staticClass:"level2"},[a("el-checkbox",{staticClass:"permission-span",attrs:{label:"deviceAdd"},on:{change:e.oneChange}},[e._v("新增")]),a("el-checkbox",{staticClass:"permission-span",attrs:{label:"deviceDel"},on:{change:e.oneChange}},[e._v("删除")]),a("el-checkbox",{staticClass:"permission-span",attrs:{label:"deviceGet"},on:{change:e.oneChange}},[e._v("查看")])],1),a("div",{staticClass:"level2"},[e._v(" 暂无 ")])])]),a("div",{staticClass:"table"},[a("div",{staticClass:"tb",staticStyle:{width:"20%"}},[a("div",{staticClass:"level1"},[a("el-checkbox",{attrs:{label:"danger"},on:{change:e.oneChange}},[a("span",{staticStyle:{"font-weight":"bold"}},[e._v("可疑管理")])])],1)]),a("div",{staticClass:"tb tr",staticStyle:{width:"20%"}},[a("div",{staticClass:"level2"},[a("el-checkbox",{attrs:{label:"doubtable"},on:{change:e.oneChange}},[e._v("可疑人脸")])],1),a("div",{staticClass:"level2"},[a("el-checkbox",{attrs:{label:"dangerlogs"},on:{change:e.oneChange}},[e._v("可疑日志")])],1)]),a("div",{staticClass:"tb set",staticStyle:{width:"60%"}},[a("div",{staticClass:"level2"},[a("el-checkbox",{staticClass:"permission-span",attrs:{label:"dangerAdd"},on:{change:e.oneChange}},[e._v("新增")]),a("el-checkbox",{staticClass:"permission-span",attrs:{label:"dangerDel"},on:{change:e.oneChange}},[e._v("删除")]),a("el-checkbox",{staticClass:"permission-span",attrs:{label:"dangerGet"},on:{change:e.oneChange}},[e._v("查看")])],1),a("div",{staticClass:"level2"},[a("el-checkbox",{staticClass:"permission-span",attrs:{label:"dangerLogGet"},on:{change:e.oneChange}},[e._v("新增")]),a("el-checkbox",{staticClass:"permission-span",attrs:{label:"dangerLogDel"},on:{change:e.oneChange}},[e._v("删除")])],1)])]),a("div",{staticClass:"table"},[a("div",{staticClass:"tb",staticStyle:{width:"20%"}},[a("div",{staticClass:"level1"},[a("el-checkbox",{attrs:{label:"permission"},on:{change:e.oneChange}},[a("span",{staticStyle:{"font-weight":"bold"}},[e._v("权限管理")])])],1)]),a("div",{staticClass:"tb tr",staticStyle:{width:"20%"}},[a("div",{staticClass:"level2"},[a("el-checkbox",{attrs:{label:"roles"},on:{change:e.oneChange}},[e._v("角色管理")])],1),a("div",{staticClass:"level2"},[a("el-checkbox",{attrs:{label:"manage"},on:{change:e.oneChange}},[e._v("账号管理")])],1)]),a("div",{staticClass:"tb set",staticStyle:{width:"60%"}},[a("div",{staticClass:"level2"},[a("el-checkbox",{staticClass:"permission-span",attrs:{label:"roleAdd"},on:{change:e.oneChange}},[e._v("新增")]),a("el-checkbox",{staticClass:"permission-span",attrs:{label:"roleDel"},on:{change:e.oneChange}},[e._v("删除")]),a("el-checkbox",{staticClass:"permission-span",attrs:{label:"roleEdit"},on:{change:e.oneChange}},[e._v("编辑")]),a("el-checkbox",{staticClass:"permission-span",attrs:{label:"roleGet"},on:{change:e.oneChange}},[e._v("查看")])],1),a("div",{staticClass:"level2"},[a("el-checkbox",{staticClass:"permission-span",attrs:{label:"manageAdd"},on:{change:e.oneChange}},[e._v("新增")]),a("el-checkbox",{staticClass:"permission-span",attrs:{label:"manageDel"},on:{change:e.oneChange}},[e._v("删除")]),a("el-checkbox",{staticClass:"permission-span",attrs:{label:"manageEdit"},on:{change:e.oneChange}},[e._v("编辑")]),a("el-checkbox",{staticClass:"permission-span",attrs:{label:"manageGet"},on:{change:e.oneChange}},[e._v("查看")]),a("el-checkbox",{staticClass:"permission-span",attrs:{label:"manageResetPwd"},on:{change:e.oneChange}},[e._v("重置密码")])],1)])]),a("div",{staticClass:"table"},[a("div",{staticClass:"tb",staticStyle:{width:"20%"}},[a("el-checkbox",{attrs:{label:"outInLogs"},on:{change:e.oneChange}},[a("span",{staticStyle:{"font-weight":"bold"}},[e._v("进出记录管理")])])],1),a("div",{staticClass:"tb tr",staticStyle:{width:"20%"}}),a("div",{staticClass:"tb set",staticStyle:{width:"60%"}})]),a("div",{staticClass:"table"},[a("div",{staticClass:"tb",staticStyle:{width:"20%"}},[a("el-checkbox",{attrs:{label:"policeList"},on:{change:e.oneChange}},[a("span",{staticStyle:{"font-weight":"bold"}},[e._v("警员管理")])])],1),a("div",{staticClass:"tb tr",staticStyle:{width:"20%"}}),a("div",{staticClass:"tb set",staticStyle:{width:"60%"}})]),a("div",{staticClass:"table"},[a("div",{staticClass:"tb",staticStyle:{width:"20%"}},[a("el-checkbox",{attrs:{label:"department"},on:{change:e.oneChange}},[a("span",{staticStyle:{"font-weight":"bold"}},[e._v("部门管理")])])],1),a("div",{staticClass:"tb tr",staticStyle:{width:"20%"}}),a("div",{staticClass:"tb set",staticStyle:{width:"60%"}})]),a("div",{staticClass:"table"},[a("div",{staticClass:"tb",staticStyle:{width:"20%"}},[a("div",{staticClass:"level1"},[a("el-checkbox",{attrs:{label:"area"},on:{change:e.oneChange}},[a("span",{staticStyle:{"font-weight":"bold"}},[e._v("辖区管理")])])],1)]),a("div",{staticClass:"tb tr",staticStyle:{width:"20%"}},[a("div",{staticClass:"level2"},[a("el-checkbox",{attrs:{label:"areaList"},on:{change:e.oneChange}},[e._v("辖区列表")])],1)]),a("div",{staticClass:"tb set",staticStyle:{width:"60%"}})]),a("div",{staticClass:"table"},[a("div",{staticClass:"tb",staticStyle:{width:"20%"}},[a("el-checkbox",{attrs:{label:"user"},on:{change:e.oneChange}},[a("span",{staticStyle:{"font-weight":"bold"}},[e._v("用户管理")])])],1),a("div",{staticClass:"tb tr",staticStyle:{width:"20%"}},[a("div",{staticClass:"level2"},[a("el-checkbox",{attrs:{label:"userList"},on:{change:e.oneChange}},[e._v("用户列表")])],1)]),a("div",{staticClass:"tb set",staticStyle:{width:"60%"}})]),a("div",{staticClass:"table"},[a("div",{staticClass:"tb",staticStyle:{width:"20%"}},[a("div",{staticClass:"level1"},[a("el-checkbox",{attrs:{label:"renter"},on:{change:e.oneChange}},[a("span",{staticStyle:{"font-weight":"bold"}},[e._v("住户管理")])])],1)]),a("div",{staticClass:"tb tr",staticStyle:{width:"20%"}},[a("div",{staticClass:"level2"},[a("el-checkbox",{attrs:{label:"renterList"},on:{change:e.oneChange}},[e._v("住户列表")])],1)]),a("div",{staticClass:"tb set",staticStyle:{width:"60%"}})]),a("div",{staticClass:"table"},[a("div",{staticClass:"tb",staticStyle:{width:"20%"}},[a("div",{staticClass:"level1"},[a("el-checkbox",{attrs:{label:"school"},on:{change:e.oneChange}},[a("span",{staticStyle:{"font-weight":"bold"}},[e._v("学校管理")])])],1)]),a("div",{staticClass:"tb tr",staticStyle:{width:"20%"}},[a("div",{staticClass:"level2"},[a("el-checkbox",{attrs:{label:"schoolList"},on:{change:e.oneChange}},[e._v("学校列表")])],1)]),a("div",{staticClass:"tb set",staticStyle:{width:"60%"}})])])],1)],1)]),a("div",{staticClass:"submit"},[a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:e.newRole}},[e._v("提交")])],1)],1)],1)],1)])],1)},i=[],l=(a("b0c0"),a("365c")),n={data:function(){return{username:localStorage.getItem("username"),loading:!0,dialogRole:!1,form:{name:"",permissions:[]},stateList:[{label:"启用",value:1},{label:"禁用",value:0}],tableData:[],checkAll:!1,adminPermissionList:["overview","baiduaip","baiduaipAdd","baiduaipGet","baiduaipDel","project","projectAdd","projectGet","projectDel","address","addressList","areas","addressAdd","addressGet","addressDel","addressGetStation","face","faceList","pushLogs","faceAdd","faceGet","faceDel","device","deviceList","command","deviceAdd","deviceGet","deviceDel","deviceGetStation","package","apkAdd","apkDel","apkGet","apkVersionAdd","apkVersionDel","apkVersionSend","danger","doubtable","dangerlogs","dangerAdd","dangerDel","dangerGet","dangerLogGet","dangerLogDel","personVerifies","dangerLogGetStation","permission","roles","manage","roleGet","roleAdd","roleEdit","roleDel","manageGet","manageAdd","manageEdit","manageDel","manageResetPwd","outInLogs","police","policeList","department","account","policeListAdd","policeListGet","policeListEdit","policeListDel","departmentAdd","departmentGet","departmentEdit","departmentDel","screenSaver","security","upload","search","statistical","data","generate","alert","alertGet","alertGetStation","area","areaList","user","userList","renter","renterList","school","schoolList","information","infoList","switch","faceSwitch"],permissionList:["overview","address","addressList","areas","addressAdd","addressGet","addressDel","face","faceList","pushLogs","faceAdd","faceGet","faceDel","device","deviceList","command","deviceAdd","deviceGet","deviceDel","danger","doubtable","dangerlogs","dangerAdd","dangerDel","dangerGet","dangerLogGet","dangerLogDel","permission","roles","manage","roleGet","roleAdd","roleEdit","roleDel","manageGet","manageAdd","manageEdit","manageDel","manageResetPwd","outInLogs","area","areaList","user","userList","renter","renterList","school","schoolList"],dialogDel:!1,id:"",disabledRole:!1,current:1,size:10,total:0}},mounted:function(){this.getRoles()},methods:{addRole:function(){var e=this;e.dialogRole=!0,e.form={name:"",permissions:[]},e.disabledRole=!1,e.checkAll=!0,!0===e.checkAll&&("admin"==localStorage.getItem("username")?(e.form.permissions=e.checkAll?e.adminPermissionList:[],console.log(e.form.permissions)):(e.form.permissions=e.checkAll?e.permissionList:[],console.log(e.form.permissions)))},getRoles:function(){var e=this;l["a"].roles(e.current).then((function(t){e.loading=!1,e.tableData=t.data,e.total=t.total})).catch((function(t){e.loading=!1}))},newRole:function(){var e=this;l["a"].role(e.form).then((function(t){e.dialogRole=!1,e.$message.success("提交成功"),e.getRoles(),e.currentPage=1,e.form={},e.form.permissions=[]}))},handleEdit:function(e,t){var a=this;a.dialogRole=!0,a.disabledRole=!0,l["a"].oneRole(t.name).then((function(e){a.form=e,"admin"==localStorage.getItem("username")?a.checkAll=e.permissions.length>=a.adminPermissionList.length:a.checkAll=e.permissions.length>=a.permissionList.length}))},AllChange:function(e){var t=this;"admin"==localStorage.getItem("username")?t.form.permissions=e?t.adminPermissionList:[]:t.form.permissions=e?t.permissionList:[]},oneChange:function(e){var t=this;console.log(t.form.permissions),"admin"==localStorage.getItem("username")?t.checkAll=t.form.permissions.length>=t.adminPermissionList.length:t.checkAll=t.form.permissions.length>=t.permissionList.length},handleDel:function(e,t){var a=this;a.dialogDel=!0,a.id=t.id},toDel:function(){var e=this;l["a"].delRole(e.id).then((function(t){e.$message.success("删除成功"),e.dialogDel=!1,e.getRoles(),e.currentPage=1}))},currentChange:function(e){var t=this;t.loading=!0,t.current=e,l["a"].roles(e,t.size).then((function(e){t.loading=!1,t.tableData=e.data,t.total=e.total})).catch((function(e){t.loading=!1}))},sizeChange:function(e){var t=this;t.loading=!0,t.size=e,l["a"].roles(t.current,e).then((function(e){t.loading=!1,t.tableData=e.data,t.total=e.total})).catch((function(e){t.loading=!1}))}}},c=n,o=(a("5f1a"),a("2877")),r=Object(o["a"])(c,s,i,!1,null,"32bcdbb2",null);t["default"]=r.exports},"365c":function(e,t,a){"use strict";var s=a("ade3"),i=a("be3b"),l=a("99b1"),n=a.n(l),c={aip:function(e){return i["a"].post(n.a.Aip,e)},delAip:function(e){return i["a"].del(n.a.Aip,{id:e})},aips:function(e,t){return i["a"].get(n.a.Aips,{page:e,limit:t})},apk:function(e){return i["a"].post(n.a.Apk,e)},apks:function(e,t){return i["a"].get(n.a.Apks,{page:e,limit:t})},apkVersion:function(e){return i["a"].post(n.a.ApkVersion,e)},apkVersions:function(e,t,a){return i["a"].get(n.a.ApkVersions,{page:e,limit:t,apk_id:a})},_apkVersions:function(e){return i["a"].get(n.a.ApkVersions,{id:e})},publishApk:function(e){return i["a"].post(n.a.PublishApk,e)},project:function(e){return i["a"].post(n.a.Project,e)},projects:function(e,t){return i["a"].get(n.a.Projects,{page:e,limit:t})},address:function(e){return i["a"].post(n.a.Address,e)},getaddress:function(e){return i["a"].get(n.a.Address,{id:e})},addresses:function(e,t,a,s,l){return i["a"].get(n.a.Addresses,{page:e,limit:t,project_id:a,area_id:s,address:l})},addressTypes:function(e,t){return i["a"].get(n.a.AddressTypes,{page:e,limit:t})},addressesMap:function(e,t,a){return i["a"].get(n.a.Addresses,{page:e,limit:t,type:a})},face:function(e){return i["a"].post(n.a.Face,e)},faces:function(e,t,a){return i["a"].get(n.a.Faces,{page:e,limit:t,name:a})},searchFace:function(e){return i["a"].post(n.a.SearchImageFace,e)},pushRecords:function(e,t,a,s){return i["a"].get(n.a.PushRecords,{page:e,limit:t,name:a,address:s})},pushRecordCommands:function(e){return i["a"].get(n.a.PushRecordCommands,{id:e})},againPush:function(e){return i["a"].post(n.a.PushRecord,e)},areas:function(e,t,a){return i["a"].get(n.a.Areas,{page:e,limit:t,parent_id:a})},area:function(e){return i["a"].post(n.a.Area,e)},device:function(e){return i["a"].post(n.a.Device,e)},_device:function(e){return i["a"].get(n.a.Device,{uuid:e})},devices:function(e,t,a,s,l,c,o,r){return i["a"].get(n.a.Devices,{page:e,limit:t,type:a,uuid:s,area_id:l,address_id:c,online:o,address:r})},_devices:function(e,t,a){return i["a"].get(n.a.Devices,{direction:e,addresses:t,limit:a})},deviceLogs:function(e,t,a,s){return i["a"].get(n.a.DeviceLogs,{page:e,limit:t,uuid:a,type:s})},deviceFaceLogs:function(e,t,a,s,l,c){return i["a"].get(n.a.DeviceRecord,{page:e,limit:t,uuid:a,search:s,area_id:l,address_id:c})},searchFaceLogs:function(e,t,a){return i["a"].get(n.a.DeviceRecord,{page:e,limit:t,faces:a})},deviceTypes:function(){return i["a"].get(n.a.DeviceTypes)},deviceHeart:function(e){return i["a"].get(n.a.DeviceHeartbeat,{uuid:e})},deviceCommands:function(e,t,a){return i["a"].get(n.a.DeviceCommands,{page:e,limit:t,uuid:a})},commandsType:function(e){return i["a"].get(n.a.Commands,{type:e})},sendDeviceCommand:function(e){return i["a"].post(n.a.SendDeviceCommand,e)},resetCommand:function(e){return i["a"].get(n.a.RestartDeviceCommands,{uuid:e})},catchFace:function(e){return i["a"].get(n.a.CatchFaces,{id:e})},deviceUserList:function(e,t,a){return i["a"].get(n.a.DeviceUserList,{page:e,limit:t,uuid:a})},faceGroup:function(e){return i["a"].get(n.a.FaceGroup,{address_id:e})},uuid:function(e,t){return i["a"].get(n.a.Uuid,{page:e,limit:t})},dangerFace:function(e){return i["a"].post(n.a.DangerFace,e)},importHistory:function(e,t,a){return i["a"].get(n.a.ImportTasks,{page:e,limit:t,state:a})},delDangerFace:function(e){return i["a"].del(n.a.DelDangerFace,{id:e})},dangerFaces:function(e,t){return i["a"].get(n.a.DangerFaces,{page:e,limit:t})},personVerifies:function(e,t,a,s){return i["a"].get(n.a.PersonVerifies,{page:e,limit:t,search:a,state:s})},dangerLogs:function(e,t,a,s){return i["a"].get(n.a.DangerLogs,{page:e,limit:t,danger_id:a,address:s})},alert:function(e,t,a,s,l,c,o,r,d){return i["a"].get(n.a.DangerAlerts,{page:e,limit:t,state:a,search:s,dangers:l,alert_type:c,start:o,end:r,danger_type:d})},handleAlerts:function(e){return i["a"].post(n.a.HandleAlerts,{results:e})},dangerTypes:function(){return i["a"].get(n.a.DangerTypes,{})},notifyChange:function(e){return i["a"].post(n.a.ChangeDangerFace,e)},roles:function(e,t){return i["a"].get(n.a.Roles,{page:e,limit:t})},oneRole:function(e){return i["a"].get(n.a.Role,{name:e})},role:function(e){return i["a"].post(n.a.Role,e)},users:function(e,t){return i["a"].get(n.a.Users,{page:e,limit:t})},user:function(e){return i["a"].post(n.a.User,e)},policeLevel:function(e){return i["a"].post(n.a.PoliceLevel,e)},policeLevels:function(e,t,a,s){return i["a"].get(n.a.PoliceLevels,{page:e,limit:t,level:a,parent_id:s})},policeman:function(e){return i["a"].post(n.a.Policeman,e)},policemen:function(e,t,a,s,l,c){return i["a"].get(n.a.Policemen,{page:e,limit:t,station_id:a,department_id:s,state:l,search:c})},audit:function(e){return i["a"].post(n.a.PassPoliceman,e)},delPolice:function(e){return i["a"].del(n.a.Policeman,{id:e})},screenSaver:function(e){return i["a"].post(n.a.screenSaver,e)},screenSavers:function(e,t){return i["a"].get(n.a.screenSavers,{page:e,limit:t})},delScreenSaver:function(e){return i["a"].del(n.a.screenSaver,Object(s["a"])({id:e},"id",e))},issueScreenSaver:function(e){return i["a"].post(n.a.publishScreenSavers,e)},policeStation:function(e){return i["a"].post(n.a.PoliceStation,e)},policeStations:function(e,t,a){return i["a"].get(n.a.PoliceStations,{page:e,limit:t,name:a})},information:function(e){return i["a"].post(n.a.Information,e)},informations:function(e,t,a,s){return i["a"].get(n.a.Information,{page:e,limit:t,id:a,title:s})},faceSwitch:function(e){return i["a"].post(n.a.FaceSwicth,e)},delFaceSwitch:function(e){return i["a"].del(n.a.FaceSwicth,{id:e})},faceSwitches:function(e,t){return i["a"].get(n.a.FaceSwicthes,{page:e,limit:t})},statistical:function(){return i["a"].get(n.a.Count)},currentDay:function(){return i["a"].get(n.a.CountOpenRecord)},strangerRecord:function(){return i["a"].get(n.a.CountStrangerRecord)},addressStrangerRecord:function(e){return i["a"].get(n.a.CountAddressStrangerRecord,{id:e})},searchStrangerRecord:function(e){return i["a"].get(n.a.CountStrangerRecord,{address:e})},getTransmits:function(){return i["a"].get(n.a.Transmits)}};t["a"]=c},3686:function(e,t,a){},"5f1a":function(e,t,a){"use strict";var s=a("3686"),i=a.n(s);i.a}}]);
//# sourceMappingURL=chunk-355b4cf6.1612344760356.js.map