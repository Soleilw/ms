(function(e){function n(n){for(var c,r,u=n[0],i=n[1],s=n[2],f=0,l=[];f<u.length;f++)r=u[f],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&l.push(a[r][0]),a[r]=0;for(c in i)Object.prototype.hasOwnProperty.call(i,c)&&(e[c]=i[c]);d&&d(n);while(l.length)l.shift()();return o.push.apply(o,s||[]),t()}function t(){for(var e,n=0;n<o.length;n++){for(var t=o[n],c=!0,r=1;r<t.length;r++){var u=t[r];0!==a[u]&&(c=!1)}c&&(o.splice(n--,1),e=i(i.s=t[0]))}return e}var c={},r={app:0},a={app:0},o=[];function u(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-19b1f09f":"1c7223f1","chunk-1cee2ddd":"bfdf922c","chunk-2b46f910":"cb6160d0","chunk-33ab2225":"2c75c21d","chunk-45bf056f":"c723f369","chunk-5345027a":"1653191e","chunk-082bae28":"36cdf833","chunk-68c16def":"c013838f","chunk-ef0f60fa":"0b95e23f","chunk-54884d14":"9cacae3e","chunk-597895f7":"0da73578","chunk-6dc491ca":"6a8cc8de","chunk-8beca5ec":"1a0b1d59"}[e]+".js"}function i(n){if(c[n])return c[n].exports;var t=c[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.e=function(e){var n=[],t={"chunk-19b1f09f":1,"chunk-1cee2ddd":1,"chunk-45bf056f":1,"chunk-082bae28":1,"chunk-68c16def":1,"chunk-ef0f60fa":1,"chunk-6dc491ca":1};r[e]?n.push(r[e]):0!==r[e]&&t[e]&&n.push(r[e]=new Promise((function(n,t){for(var c="css/"+({}[e]||e)+"."+{"chunk-19b1f09f":"e953507c","chunk-1cee2ddd":"841b53c2","chunk-2b46f910":"31d6cfe0","chunk-33ab2225":"31d6cfe0","chunk-45bf056f":"89052b70","chunk-5345027a":"31d6cfe0","chunk-082bae28":"e3ddcaf8","chunk-68c16def":"834c3eac","chunk-ef0f60fa":"035893b6","chunk-54884d14":"31d6cfe0","chunk-597895f7":"31d6cfe0","chunk-6dc491ca":"dc4daf7b","chunk-8beca5ec":"31d6cfe0"}[e]+".css",a=i.p+c,o=document.getElementsByTagName("link"),u=0;u<o.length;u++){var s=o[u],f=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(f===c||f===a))return n()}var l=document.getElementsByTagName("style");for(u=0;u<l.length;u++){s=l[u],f=s.getAttribute("data-href");if(f===c||f===a)return n()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=n,d.onerror=function(n){var c=n&&n.target&&n.target.src||a,o=new Error("Loading CSS chunk "+e+" failed.\n("+c+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=c,delete r[e],d.parentNode.removeChild(d),t(o)},d.href=a;var h=document.getElementsByTagName("head")[0];h.appendChild(d)})).then((function(){r[e]=0})));var c=a[e];if(0!==c)if(c)n.push(c[2]);else{var o=new Promise((function(n,t){c=a[e]=[n,t]}));n.push(c[2]=o);var s,f=document.createElement("script");f.charset="utf-8",f.timeout=120,i.nc&&f.setAttribute("nonce",i.nc),f.src=u(e);var l=new Error;s=function(n){f.onerror=f.onload=null,clearTimeout(d);var t=a[e];if(0!==t){if(t){var c=n&&("load"===n.type?"missing":n.type),r=n&&n.target&&n.target.src;l.message="Loading chunk "+e+" failed.\n("+c+": "+r+")",l.name="ChunkLoadError",l.type=c,l.request=r,t[1](l)}a[e]=void 0}};var d=setTimeout((function(){s({type:"timeout",target:f})}),12e4);f.onerror=f.onload=s,document.head.appendChild(f)}return Promise.all(n)},i.m=e,i.c=c,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var c in e)i.d(t,c,function(n){return e[n]}.bind(null,c));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="/",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],f=s.push.bind(s);s.push=n,s=s.slice();for(var l=0;l<s.length;l++)n(s[l]);var d=f;o.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"56d7":function(e,n,t){"use strict";t.r(n);t("45fc"),t("e260"),t("e6cf"),t("cca6"),t("a79d");var c=t("2b0e"),r=(t("be3b"),function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("router-view")],1)}),a=[],o=(t("5c0b"),t("2877")),u={},i=Object(o["a"])(u,r,a,!1,null,null,null),s=i.exports,f=(t("d3b7"),t("8c4f")),l=[{path:"/baiduaip",name:"baiduaip",component:function(){return t.e("chunk-33ab2225").then(t.bind(null,"9035"))},meta:{title:"百度接口",icon:"el-icon-document"}},{path:"/project",name:"project",component:function(){return t.e("chunk-54884d14").then(t.bind(null,"616c"))},meta:{title:"项目管理",icon:"el-icon-folder"}},{path:"/address",name:"address",component:function(){return t.e("chunk-8beca5ec").then(t.bind(null,"7984"))},meta:{title:"地址管理",icon:"el-icon-location"}},{path:"/face",name:"face",component:function(){return Promise.all([t.e("chunk-5345027a"),t.e("chunk-082bae28")]).then(t.bind(null,"5faf"))},meta:{title:"人脸管理",icon:"el-icon-picture"}},{path:"/device",name:"device",component:function(){return t.e("chunk-1cee2ddd").then(t.bind(null,"f1b3"))},meta:{title:"设备管理",icon:"el-icon-video-camera"}},{path:"/package",name:"package",component:function(){return t.e("chunk-2b46f910").then(t.bind(null,"e766"))},meta:{title:"包管理",icon:"el-icon-shopping-bag-2"}},{path:"/danger",name:"danger",component:function(){return t.e("chunk-597895f7").then(t.bind(null,"7a46"))},meta:{title:"可疑管理",icon:"el-icon-picture-outline"},children:[{path:"/doubtable",name:"doubtable",component:function(){return Promise.all([t.e("chunk-5345027a"),t.e("chunk-68c16def")]).then(t.bind(null,"9a09"))},meta:{title:"可疑人脸管理",icon:"el-icon-warning"}},{path:"/dangerlogs",name:"dangerlogs",component:function(){return Promise.all([t.e("chunk-5345027a"),t.e("chunk-ef0f60fa")]).then(t.bind(null,"aafb"))},meta:{title:"可疑人脸日志",icon:"el-icon-s-release"}}]}],d=l;c["default"].use(f["a"]);var h=new f["a"]({mode:"history",routes:[{path:"/login",name:"login",component:function(){return t.e("chunk-6dc491ca").then(t.bind(null,"dd7b"))},meta:{title:"登录"}}]}),p=[{path:"",component:function(){return t.e("chunk-19b1f09f").then(t.bind(null,"57da"))},name:"container",redirect:"baiduaip",meta:{requiresAuth:!0,title:"首页"},children:[]},{path:"*",component:function(){return t.e("chunk-45bf056f").then(t.bind(null,"8cdb"))}}],m=t("2f62"),b=(t("99af"),t("7db0"),t("2909")),g=(t("96cf"),t("1da1")),k=(t("4de4"),t("4160"),t("caad"),t("d81d"),t("b0c0"),t("2532"),t("159b"),t("5530"));function v(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],t=n.filter((function(n){return e.includes(n.name)})).map((function(n){return Object(k["a"])(Object(k["a"])({},n),{},{children:n.children?v(e,n.children):null})}));return t}var S={namespaced:!0,state:{permissionList:null,sidebarMenu:[],currentMenu:"",control_list:[]},getters:{},mutations:{SET_PERMISSION:function(e,n){e.permissionList=n},CLEAR_PERMISSION:function(e){e.permissionList=null},SET_MENU:function(e,n){e.sidebarMenu=n},CLEAR_MENU:function(e){e.sidebarMenu=[]},SET_CURRENT_MENU:function(e,n){e.currentMenu=n},SET_CONTROL_LIST:function(e,n){e.control_list=n}},actions:{FETCH_PERMISSION:function(e){return Object(g["a"])(regeneratorRuntime.mark((function n(){var t,c,r,a,o,u;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:t=e.commit,e.state,c=localStorage.getItem("permissions"),r=v(c,d),a=p.find((function(e){return""===e.path})),o=a.children,t("SET_CONTROL_LIST",[].concat(Object(b["a"])(o),Object(b["a"])(d))),o.push.apply(o,Object(b["a"])(r)),t("SET_MENU",o),u=h.options.routes,h.addRoutes(p),t("SET_PERMISSION",[].concat(Object(b["a"])(u),Object(b["a"])(p)));case 11:case"end":return n.stop()}}),n)})))()}}},w={permission:S},y={collapse:!1,crumbList:[]},E={collapseChage:function(e){e.collapse=!e.collapse},setCrumbList:function(e,n){e.crumbList=n}};c["default"].use(m["a"]);var O=new m["a"].Store({state:y,modules:w,mutations:E}),_=t("5c96"),j=t.n(_),T=(t("0fae"),t("7371"),t("5aa7"),t("4eb5")),P=t.n(T),M=t("313e"),L=t.n(M);c["default"].use(j.a),c["default"].config.productionTip=!1,P.a.config.autoSetContainer=!0,c["default"].use(P.a),c["default"].prototype.$echarts=L.a,h.beforeEach((function(e,n,t){document.title="".concat(e.meta.title," - 图巴诺总控系统");var c=localStorage.getItem("token");c?O.state.permission.permissionList?"/login"!==e.path?t():t(n.fullPath):O.dispatch("permission/FETCH_PERMISSION").then((function(){t({path:e.path})})):e.matched.length>0&&!e.matched.some((function(e){return e.meta.requiresAuth}))?t():t({path:"/login"})})),h.afterEach((function(e,n,t){var c=e.matched;O.commit("setCrumbList",c)})),new c["default"]({router:h,store:O,render:function(e){return e(s)}}).$mount("#app")},"5aa7":function(e,n,t){},"5c0b":function(e,n,t){"use strict";var c=t("9c0c"),r=t.n(c);r.a},7371:function(e,n,t){},"9c0c":function(e,n,t){},be3b:function(e,n,t){"use strict";t("d3b7");var c=t("bc3a"),r=t.n(c),a=t("5c96"),o=t("4328"),u={},i=r.a.create({timeout:2e5,baseURL:"https://api.fengniaotuangou.cn",headers:{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"},validateStatus:function(e){switch(e){case 400:a["Message"].error("请求出错");break;case 401:return a["Message"].warning({message:"授权失败，请重新登录"}),void setTimeout((function(){localStorage.removeItem("role"),localStorage.removeItem("token")}),1e3);case 403:a["Message"].warning({message:"拒绝访问"});break;case 404:a["Message"].warning({message:"请求错误,未找到该资源"});break;case 500:a["Message"].warning({message:"请重新登录"});break}return e>=200&&e<300}});i.interceptors.request.use((function(e){return e}),(function(e){return Promise.reject(error)})),i.interceptors.response.use((function(e){if(200===e.status)return e.data}),(function(e){return Promise.reject(e)})),u.get=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new Promise((function(t,c){i.get(e,{params:n}).then((function(e){t(e.data)}))})).catch((function(e){reject(e)}))},u.del=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new Promise((function(t,c){i.delete(e,{params:n}).then((function(e){t(e.data)})).catch((function(e){c(e)}))}))},u.post=function(e,n){return new Promise((function(t,c){i.post(e,o.stringify(n)).then((function(e){t(e.data)}))})).catch((function(e){reject(e)}))},n["a"]=u}});
//# sourceMappingURL=app.b0c9a202.js.map