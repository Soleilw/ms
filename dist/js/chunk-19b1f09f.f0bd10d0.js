(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-19b1f09f"],{"14c3":function(t,e,a){var s=a("c6b6"),r=a("9263");t.exports=function(t,e){var a=t.exec;if("function"===typeof a){var n=a.call(t,e);if("object"!==typeof n)throw TypeError("RegExp exec method returned something other than an Object or null");return n}if("RegExp"!==s(t))throw TypeError("RegExp#exec called on incompatible receiver");return r.call(t,e)}},"37c9":function(t,e,a){"use strict";var s=a("88e5"),r=a.n(s);r.a},5319:function(t,e,a){"use strict";var s=a("d784"),r=a("825a"),n=a("7b0b"),o=a("50c4"),i=a("a691"),l=a("1d80"),c=a("8aa5"),u=a("14c3"),d=Math.max,p=Math.min,f=Math.floor,m=/\$([$&'`]|\d\d?|<[^>]*>)/g,g=/\$([$&'`]|\d\d?)/g,h=function(t){return void 0===t?t:String(t)};s("replace",2,(function(t,e,a,s){var v=s.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,b=s.REPLACE_KEEPS_$0,w=v?"$":"$0";return[function(a,s){var r=l(this),n=void 0==a?void 0:a[t];return void 0!==n?n.call(a,r,s):e.call(String(r),a,s)},function(t,s){if(!v&&b||"string"===typeof s&&-1===s.indexOf(w)){var n=a(e,t,this,s);if(n.done)return n.value}var l=r(t),f=String(this),m="function"===typeof s;m||(s=String(s));var g=l.global;if(g){var x=l.unicode;l.lastIndex=0}var E=[];while(1){var $=u(l,f);if(null===$)break;if(E.push($),!g)break;var k=String($[0]);""===k&&(l.lastIndex=c(f,o(l.lastIndex),x))}for(var C="",P=0,R=0;R<E.length;R++){$=E[R];for(var L=String($[0]),y=d(p(i($.index),f.length),0),S=[],A=1;A<$.length;A++)S.push(h($[A]));var I=$.groups;if(m){var F=[L].concat(S,y,f);void 0!==I&&F.push(I);var T=String(s.apply(void 0,F))}else T=_(L,f,y,S,I,s);y>=P&&(C+=f.slice(P,y)+T,P=y+L.length)}return C+f.slice(P)}];function _(t,a,s,r,o,i){var l=s+t.length,c=r.length,u=g;return void 0!==o&&(o=n(o),u=m),e.call(i,u,(function(e,n){var i;switch(n.charAt(0)){case"$":return"$";case"&":return t;case"`":return a.slice(0,s);case"'":return a.slice(l);case"<":i=o[n.slice(1,-1)];break;default:var u=+n;if(0===u)return e;if(u>c){var d=f(u/10);return 0===d?e:d<=c?void 0===r[d-1]?n.charAt(1):r[d-1]+n.charAt(1):e}i=r[u-1]}return void 0===i?"":i}))}}))},"57da":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{class:{navCollapsed:t.collapse}},[a("v-header"),a("v-siderbar",{staticClass:"sidebar"}),a("div",{staticClass:"main"},[a("v-tags",{staticClass:"tags"}),a("div",{staticClass:"content"},[a("transition",{attrs:{name:"move",mode:"out-in"}},[a("keep-alive",{attrs:{include:t.tagsList}},[a("router-view")],1)],1),a("el-backtop",{attrs:{target:".content"}})],1)],1)],1)},r=[],n=(a("b0c0"),a("5530")),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"header"},[t._m(0),t._m(1),a("div",{staticClass:"collapse-btn",on:{click:t.collapseChage}},[t.collapse?a("i",{staticClass:"el-icon-s-fold icon"}):a("i",{staticClass:"el-icon-s-unfold icon"})]),a("div",{staticClass:"breadcrumb"},[a("el-breadcrumb",{attrs:{separator:"/"}},[a("transition-group",{attrs:{name:"breadcrumb"}},[t._l(t.crumbList,(function(e,s){return["home"!=e.name&&"首页"!=e.meta.title?a("el-breadcrumb-item",{key:e.name,class:{"is-last-link":s==t.crumbList.length-1},attrs:{to:{name:e.name}}},[t._v(" "+t._s(e.meta.title)+" ")]):t._e()]}))],2)],1)],1),a("div",{staticClass:"info"},[a("el-dropdown",{on:{command:t.handleCommand}},[a("span",{staticClass:"el-dropdown-link"},[t._v(" "+t._s(t.username)+" "),a("i",{staticClass:"el-icon-caret-bottom"})]),a("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[a("el-dropdown-item",{attrs:{divided:"",command:"loginout"}},[t._v("切换账号")]),a("el-dropdown-item",{attrs:{divided:"",command:"resetPassword"}},[t._v("修改密码")])],1)],1)],1),a("div",{staticClass:"logout"},[a("el-button",{attrs:{icon:"el-icon-circle-close",size:"mini",type:"infor"},on:{click:t.logout}},[t._v("退出")])],1)]),a("el-dialog",{attrs:{title:"修改密码",visible:t.dialogResetPassWord,width:"500px","close-on-click-modal":!1},on:{"update:visible":function(e){t.dialogResetPassWord=e}}},[a("div",{staticClass:"box"},[a("el-form",{attrs:{model:t.pwdForm,"label-width":"120px"}},[a("el-form-item",{attrs:{label:"旧密码"}},[a("el-input",{model:{value:t.pwdForm.old_password,callback:function(e){t.$set(t.pwdForm,"old_password",e)},expression:"pwdForm.old_password"}})],1),a("el-form-item",{attrs:{label:"新密码"}},[a("el-input",{model:{value:t.pwdForm.new_password,callback:function(e){t.$set(t.pwdForm,"new_password",e)},expression:"pwdForm.new_password"}})],1),a("el-form-item",{attrs:{label:"再次确认新密码"}},[a("el-input",{model:{value:t.pwdForm.confirm_password,callback:function(e){t.$set(t.pwdForm,"confirm_password",e)},expression:"pwdForm.confirm_password"}})],1),a("div",{staticClass:"submit"},[a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:t.ChangePassword}},[t._v("提交")])],1)],1)],1)],1)])],1)},i=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"logo"},[s("img",{attrs:{src:a("a1d8"),alt:""}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"title"},[a("span",[t._v("图巴诺总控")])])}],l=(a("ac1f"),a("5319"),a("2b0e")),c=new l["default"],u=c,d=a("7ded"),p=a("2f62"),f={data:function(){return{dialogResetPassWord:!1,pwdForm:{new_password:"",old_password:"",confirm_password:""},username:localStorage.getItem("username")}},computed:Object(n["a"])({},Object(p["b"])(["collapse","crumbList"])),methods:{handleCommand:function(t){var e=this;"loginout"==t&&d["a"].logout().then((function(t){localStorage.removeItem("username"),localStorage.removeItem("token"),localStorage.removeItem("role"),localStorage.removeItem("permissions"),window.location.reload(),e.$router.replace("/login")})),"resetPassword"==t&&(e.dialogResetPassWord=!0)},ChangePassword:function(){var t=this;t.pwdForm.new_password===t.pwdForm.confirm_password?d["a"].resetPassword(t.pwdForm).then((function(e){t.dialogResetPassWord=!1,t.$message.success("修改成功"),t.pwdForm={}})):t.$message.error("新密码与确认密码不一致")},collapseChage:function(){this.$store.commit("collapseChage")},logout:function(){var t=this;localStorage.removeItem("username"),localStorage.removeItem("token"),localStorage.removeItem("role"),localStorage.removeItem("permissions"),window.location.reload(),t.$router.replace("/login")}}},m=f,g=(a("948c"),a("2877")),h=Object(g["a"])(m,o,i,!1,null,"3fdb53e3",null),v=h.exports,b=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-menu",{staticClass:"sidebar-el-menu",attrs:{"default-active":t.onRoutes,collapse:t.collapse,"background-color":"#fff","text-color":"#000000","active-text-color":"#000","unique-opened":"",router:""}},[t._l(t.sidebarMenu,(function(e){return[e.children?[a("el-submenu",{key:e.path,attrs:{index:e.path}},[a("template",{slot:"title"},[a("i",{class:e.meta.icon}),a("span",{attrs:{slot:"title"},slot:"title"},[t._v(" "+t._s(e.meta.title)+" ")])]),t._l(e.children,(function(e){return[e.children?a("el-submenu",{key:e.path,attrs:{index:e.path}},[a("template",{slot:"title"},[t._v(" "+t._s(e.meta.title)+" ")]),t._l(e.children,(function(e){return a("el-menu-item",{key:e.path,attrs:{index:e.path}},[t._v(t._s(e.title))])}))],2):a("el-menu-item",{key:e.path,attrs:{index:e.path}},[t._v(t._s(e.meta.title))])]}))],2)]:[a("el-menu-item",{key:e.path,attrs:{index:e.path}},[a("i",{class:e.meta.icon}),a("span",{attrs:{slot:"title"},slot:"title"},[t._v(" "+t._s(e.meta.title)+" ")])])]]}))],2)],1)},w=[],_={data:function(){return{}},computed:Object(n["a"])(Object(n["a"])(Object(n["a"])({},Object(p["b"])("permission",["sidebarMenu"])),Object(p["b"])(["collapse"])),{},{onRoutes:function(){return this.$route.path}})},x=_,E=Object(g["a"])(x,b,w,!1,null,"43d043b4",null),$=E.exports,k=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.showTags?a("div",{staticClass:"tags"},[a("ul",t._l(t.tagsList,(function(e,s){return a("li",{key:s,staticClass:"tags-li",class:{active:t.isActive(e.path)}},[a("router-link",{staticClass:"tags-li-title",attrs:{to:e.path}},[t._v(" "+t._s(e.title)+" ")]),a("span",{staticClass:"tags-li-icon",on:{click:function(e){return t.closeTags(s)}}},[a("i",{staticClass:"el-icon-close"})])],1)})),0),a("div",{staticClass:"tags-close-box"},[a("el-dropdown",{on:{command:t.handleTags}},[a("el-button",{attrs:{size:"mini",type:"primary"}},[t._v(" 标签选项"),a("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),a("el-dropdown-menu",{attrs:{slot:"dropdown",size:"small"},slot:"dropdown"},[a("el-dropdown-item",{attrs:{command:"other"}},[t._v("关闭其他")])],1)],1)],1)]):t._e()},C=[],P=(a("4de4"),a("45fc"),a("a434"),{data:function(){return{tagsList:[]}},methods:{isActive:function(t){return t===this.$route.fullPath},closeTags:function(t){var e=this.tagsList.splice(t,1)[0],a=this.tagsList[t]?this.tagsList[t]:this.tagsList[t-1];a?e.path===this.$route.fullPath&&this.$router.push(a.path):this.$router.push("")},closeAll:function(){this.tagsList=[],this.$router.push("")},closeOther:function(){var t=this,e=this.tagsList.filter((function(e){return e.path===t.$route.fullPath}));this.tagsList=e},setTags:function(t){var e=this.tagsList.some((function(e){return console.log(" route.fullPath",t.fullPath),e.path===t.fullPath}));e||(this.tagsList.length>=16&&this.tagsList.shift(),this.tagsList.push({title:t.meta.title,path:t.fullPath})),u.$emit("tags",this.tagsList)},handleTags:function(t){"other"===t?this.closeOther():this.closeAll()}},computed:{showTags:function(){return this.tagsList.length>0}},watch:{$route:function(t,e){this.setTags(t)}},created:function(){var t=this;this.setTags(this.$route),u.$on("close_current_tags",(function(){for(var e=0,a=t.tagsList.length;e<a;e++){var s=t.tagsList[e];if(s.path===t.$route.fullPath){e<a-1?t.$router.push(t.tagsList[e+1].path):e>0?t.$router.push(t.tagsList[e-1].path):t.$router.push(""),t.tagsList.splice(e,1);break}}}))}}),R=P,L=(a("37c9"),Object(g["a"])(R,k,C,!1,null,"114239a8",null)),y=L.exports,S={components:{vHeader:v,vSiderbar:$,vTags:y},data:function(){return{tagsList:[]}},computed:Object(n["a"])({},Object(p["b"])(["collapse"])),created:function(){var t=this;u.$on("tags",(function(e){for(var a=[],s=0,r=e.length;s<r;s++)e[s].name&&a.push(e[s].name);t.tagsList=a}))}},A=S,I=Object(g["a"])(A,s,r,!1,null,null,null);e["default"]=I.exports},7975:function(t,e,a){},"7ded":function(t,e,a){"use strict";var s=a("be3b"),r=a("99b1"),n=a.n(r),o={login:function(t){return s["a"].post(n.a.Login,t)},logout:function(){return s["a"].get(n.a.Logout)}};e["a"]=o},"88e5":function(t,e,a){},"8aa5":function(t,e,a){"use strict";var s=a("6547").charAt;t.exports=function(t,e,a){return e+(a?s(t,e).length:1)}},9263:function(t,e,a){"use strict";var s=a("ad6d"),r=a("9f7f"),n=RegExp.prototype.exec,o=String.prototype.replace,i=n,l=function(){var t=/a/,e=/b*/g;return n.call(t,"a"),n.call(e,"a"),0!==t.lastIndex||0!==e.lastIndex}(),c=r.UNSUPPORTED_Y||r.BROKEN_CARET,u=void 0!==/()??/.exec("")[1],d=l||u||c;d&&(i=function(t){var e,a,r,i,d=this,p=c&&d.sticky,f=s.call(d),m=d.source,g=0,h=t;return p&&(f=f.replace("y",""),-1===f.indexOf("g")&&(f+="g"),h=String(t).slice(d.lastIndex),d.lastIndex>0&&(!d.multiline||d.multiline&&"\n"!==t[d.lastIndex-1])&&(m="(?: "+m+")",h=" "+h,g++),a=new RegExp("^(?:"+m+")",f)),u&&(a=new RegExp("^"+m+"$(?!\\s)",f)),l&&(e=d.lastIndex),r=n.call(p?a:d,h),p?r?(r.input=r.input.slice(g),r[0]=r[0].slice(g),r.index=d.lastIndex,d.lastIndex+=r[0].length):d.lastIndex=0:l&&r&&(d.lastIndex=d.global?r.index+r[0].length:e),u&&r&&r.length>1&&o.call(r[0],a,(function(){for(i=1;i<arguments.length-2;i++)void 0===arguments[i]&&(r[i]=void 0)})),r}),t.exports=i},"948c":function(t,e,a){"use strict";var s=a("7975"),r=a.n(s);r.a},9523:function(t,e){function a(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}t.exports=a},"99b1":function(t,e,a){var s,r=a("9523"),n=(s={Login:"/login",Password:"/password",Aip:"/aip",Aips:"/aips"},r(s,"Aip","/aip"),r(s,"RestoreAip","/restore/aip"),r(s,"Project","/project"),r(s,"Projects","/projects"),r(s,"Project","/project"),r(s,"RestoreProject","/restore/project"),r(s,"Address","/address"),r(s,"Addresses","/addresses"),r(s,"Address","/address"),r(s,"RestoreAddress","/restore/address"),r(s,"Face","/face"),r(s,"PassFace","/pass/face"),r(s,"Face","/face"),r(s,"Faces","/faces"),r(s,"Device","/device"),r(s,"Devices","/devices"),r(s,"Uuid","/unknown/devices"),r(s,"DeviceFaceGroup","/device/face/group"),r(s,"FaceGroup","/face/groups"),r(s,"DeviceLogs","/device/logs"),r(s,"DeviceRecord","/face/logs"),r(s,"DeviceTypes","/device/types"),r(s,"DeviceHeartbeat","/device/heartbeat"),r(s,"DeviceCommands","/device/commands"),r(s,"Apk","/apk"),r(s,"Apks","/apks"),r(s,"ApkVersion","/apk/version"),r(s,"ApkVersions","/apk/versions"),r(s,"PublishApk","/publish/apk"),r(s,"DangerFace","/danger/face"),r(s,"DangerFaces","/danger/faces"),r(s,"DelDangerFace","/danger/face"),r(s,"DangerLogs","/danger/logs"),r(s,"UploadFace","/upload/face"),r(s,"ApiToken","/api/token"),s);t.exports=n},"9f7f":function(t,e,a){"use strict";var s=a("d039");function r(t,e){return RegExp(t,e)}e.UNSUPPORTED_Y=s((function(){var t=r("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),e.BROKEN_CARET=s((function(){var t=r("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},a1d8:function(t,e,a){t.exports=a.p+"img/logo.71d6cbdc.png"},a434:function(t,e,a){"use strict";var s=a("23e7"),r=a("23cb"),n=a("a691"),o=a("50c4"),i=a("7b0b"),l=a("65f0"),c=a("8418"),u=a("1dde"),d=a("ae40"),p=u("splice"),f=d("splice",{ACCESSORS:!0,0:0,1:2}),m=Math.max,g=Math.min,h=9007199254740991,v="Maximum allowed length exceeded";s({target:"Array",proto:!0,forced:!p||!f},{splice:function(t,e){var a,s,u,d,p,f,b=i(this),w=o(b.length),_=r(t,w),x=arguments.length;if(0===x?a=s=0:1===x?(a=0,s=w-_):(a=x-2,s=g(m(n(e),0),w-_)),w+a-s>h)throw TypeError(v);for(u=l(b,s),d=0;d<s;d++)p=_+d,p in b&&c(u,d,b[p]);if(u.length=s,a<s){for(d=_;d<w-s;d++)p=d+s,f=d+a,p in b?b[f]=b[p]:delete b[f];for(d=w;d>w-s+a;d--)delete b[d-1]}else if(a>s)for(d=w-s;d>_;d--)p=d+s-1,f=d+a-1,p in b?b[f]=b[p]:delete b[f];for(d=0;d<a;d++)b[d+_]=arguments[d+2];return b.length=w-s+a,u}})},ac1f:function(t,e,a){"use strict";var s=a("23e7"),r=a("9263");s({target:"RegExp",proto:!0,forced:/./.exec!==r},{exec:r})},d784:function(t,e,a){"use strict";a("ac1f");var s=a("6eeb"),r=a("d039"),n=a("b622"),o=a("9263"),i=a("9112"),l=n("species"),c=!r((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),u=function(){return"$0"==="a".replace(/./,"$0")}(),d=n("replace"),p=function(){return!!/./[d]&&""===/./[d]("a","$0")}(),f=!r((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var a="ab".split(t);return 2!==a.length||"a"!==a[0]||"b"!==a[1]}));t.exports=function(t,e,a,d){var m=n(t),g=!r((function(){var e={};return e[m]=function(){return 7},7!=""[t](e)})),h=g&&!r((function(){var e=!1,a=/a/;return"split"===t&&(a={},a.constructor={},a.constructor[l]=function(){return a},a.flags="",a[m]=/./[m]),a.exec=function(){return e=!0,null},a[m](""),!e}));if(!g||!h||"replace"===t&&(!c||!u||p)||"split"===t&&!f){var v=/./[m],b=a(m,""[t],(function(t,e,a,s,r){return e.exec===o?g&&!r?{done:!0,value:v.call(e,a,s)}:{done:!0,value:t.call(a,e,s)}:{done:!1}}),{REPLACE_KEEPS_$0:u,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:p}),w=b[0],_=b[1];s(String.prototype,t,w),s(RegExp.prototype,m,2==e?function(t,e){return _.call(t,this,e)}:function(t){return _.call(t,this)})}d&&i(RegExp.prototype[m],"sham",!0)}}}]);
//# sourceMappingURL=chunk-19b1f09f.f0bd10d0.js.map