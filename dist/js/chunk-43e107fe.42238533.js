(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-43e107fe"],{"365c":function(e,t,n){"use strict";n("ac1f");var r=n("be3b"),i=n("99b1"),a=n.n(i),o={aip:function(e){return r["a"].post(a.a.Aip,e)},delAip:function(e){return r["a"].delete(a.a.Aip,{id:e})},aips:function(e,t){return r["a"].get(a.a.Aips,{page:e,limit:t})},apk:function(e){return r["a"].post(a.a.Apk,e)},apks:function(e,t){return r["a"].get(a.a.Apks,{page:e,limit:t})},apkVersion:function(e){return r["a"].post(a.a.ApkVersion,e)},apkVersions:function(e,t,n){return r["a"].get(a.a.ApkVersions,{page:e,limit:t,apk_id:n})},_apkVersions:function(e){return r["a"].get(a.a.ApkVersions,{id:e})},publishApk:function(e){return r["a"].post(a.a.PublishApk,e)},project:function(e){return r["a"].post(a.a.Project,e)},projects:function(e,t){return r["a"].get(a.a.Projects,{page:e,limit:t})},address:function(e){return r["a"].post(a.a.Address,e)},addresses:function(e,t){return r["a"].get(a.a.Addresses,{page:e,limit:t})},face:function(e){return r["a"].post(a.a.Face,e)},faces:function(e,t){return r["a"].get(a.a.Faces,{page:e,limit:t})},device:function(e){return r["a"].post(a.a.Device,e)},devices:function(e,t){return r["a"].get(a.a.Devices,{page:e,limit:t})},_devices:function(e,t,n){return r["a"].get(a.a.Devices,{direction:e,addresses:t,limit:n})},deviceLogs:function(e,t,n,i){return r["a"].get(a.a.DeviceLogs,{page:e,limit:t,uuid:n,type:i})},deviceFaceLogs:function(e,t,n,i){return r["a"].get(a.a.DeviceRecord,{page:e,limit:t,uuid:n,address_id:i})},search:function(e){return r["a"].get(a.a.Devices,{uuid:e})},faceGroup:function(e){return r["a"].get(a.a.FaceGroup,{address_id:e})},uuid:function(e,t){return r["a"].get(a.a.Uuid,{page:e,limit:t})}};t["a"]=o},"8d81":function(e,t,n){var r;(function(i){"use strict";function a(e,t){var n=(65535&e)+(65535&t),r=(e>>16)+(t>>16)+(n>>16);return r<<16|65535&n}function o(e,t){return e<<t|e>>>32-t}function s(e,t,n,r,i,s){return a(o(a(a(t,e),a(r,s)),i),n)}function l(e,t,n,r,i,a,o){return s(t&n|~t&r,e,t,i,a,o)}function c(e,t,n,r,i,a,o){return s(t&r|n&~r,e,t,i,a,o)}function u(e,t,n,r,i,a,o){return s(t^n^r,e,t,i,a,o)}function d(e,t,n,r,i,a,o){return s(n^(t|~r),e,t,i,a,o)}function f(e,t){var n,r,i,o,s;e[t>>5]|=128<<t%32,e[14+(t+64>>>9<<4)]=t;var f=1732584193,p=-271733879,h=-1732584194,m=271733878;for(n=0;n<e.length;n+=16)r=f,i=p,o=h,s=m,f=l(f,p,h,m,e[n],7,-680876936),m=l(m,f,p,h,e[n+1],12,-389564586),h=l(h,m,f,p,e[n+2],17,606105819),p=l(p,h,m,f,e[n+3],22,-1044525330),f=l(f,p,h,m,e[n+4],7,-176418897),m=l(m,f,p,h,e[n+5],12,1200080426),h=l(h,m,f,p,e[n+6],17,-1473231341),p=l(p,h,m,f,e[n+7],22,-45705983),f=l(f,p,h,m,e[n+8],7,1770035416),m=l(m,f,p,h,e[n+9],12,-1958414417),h=l(h,m,f,p,e[n+10],17,-42063),p=l(p,h,m,f,e[n+11],22,-1990404162),f=l(f,p,h,m,e[n+12],7,1804603682),m=l(m,f,p,h,e[n+13],12,-40341101),h=l(h,m,f,p,e[n+14],17,-1502002290),p=l(p,h,m,f,e[n+15],22,1236535329),f=c(f,p,h,m,e[n+1],5,-165796510),m=c(m,f,p,h,e[n+6],9,-1069501632),h=c(h,m,f,p,e[n+11],14,643717713),p=c(p,h,m,f,e[n],20,-373897302),f=c(f,p,h,m,e[n+5],5,-701558691),m=c(m,f,p,h,e[n+10],9,38016083),h=c(h,m,f,p,e[n+15],14,-660478335),p=c(p,h,m,f,e[n+4],20,-405537848),f=c(f,p,h,m,e[n+9],5,568446438),m=c(m,f,p,h,e[n+14],9,-1019803690),h=c(h,m,f,p,e[n+3],14,-187363961),p=c(p,h,m,f,e[n+8],20,1163531501),f=c(f,p,h,m,e[n+13],5,-1444681467),m=c(m,f,p,h,e[n+2],9,-51403784),h=c(h,m,f,p,e[n+7],14,1735328473),p=c(p,h,m,f,e[n+12],20,-1926607734),f=u(f,p,h,m,e[n+5],4,-378558),m=u(m,f,p,h,e[n+8],11,-2022574463),h=u(h,m,f,p,e[n+11],16,1839030562),p=u(p,h,m,f,e[n+14],23,-35309556),f=u(f,p,h,m,e[n+1],4,-1530992060),m=u(m,f,p,h,e[n+4],11,1272893353),h=u(h,m,f,p,e[n+7],16,-155497632),p=u(p,h,m,f,e[n+10],23,-1094730640),f=u(f,p,h,m,e[n+13],4,681279174),m=u(m,f,p,h,e[n],11,-358537222),h=u(h,m,f,p,e[n+3],16,-722521979),p=u(p,h,m,f,e[n+6],23,76029189),f=u(f,p,h,m,e[n+9],4,-640364487),m=u(m,f,p,h,e[n+12],11,-421815835),h=u(h,m,f,p,e[n+15],16,530742520),p=u(p,h,m,f,e[n+2],23,-995338651),f=d(f,p,h,m,e[n],6,-198630844),m=d(m,f,p,h,e[n+7],10,1126891415),h=d(h,m,f,p,e[n+14],15,-1416354905),p=d(p,h,m,f,e[n+5],21,-57434055),f=d(f,p,h,m,e[n+12],6,1700485571),m=d(m,f,p,h,e[n+3],10,-1894986606),h=d(h,m,f,p,e[n+10],15,-1051523),p=d(p,h,m,f,e[n+1],21,-2054922799),f=d(f,p,h,m,e[n+8],6,1873313359),m=d(m,f,p,h,e[n+15],10,-30611744),h=d(h,m,f,p,e[n+6],15,-1560198380),p=d(p,h,m,f,e[n+13],21,1309151649),f=d(f,p,h,m,e[n+4],6,-145523070),m=d(m,f,p,h,e[n+11],10,-1120210379),h=d(h,m,f,p,e[n+2],15,718787259),p=d(p,h,m,f,e[n+9],21,-343485551),f=a(f,r),p=a(p,i),h=a(h,o),m=a(m,s);return[f,p,h,m]}function p(e){var t,n="",r=32*e.length;for(t=0;t<r;t+=8)n+=String.fromCharCode(e[t>>5]>>>t%32&255);return n}function h(e){var t,n=[];for(n[(e.length>>2)-1]=void 0,t=0;t<n.length;t+=1)n[t]=0;var r=8*e.length;for(t=0;t<r;t+=8)n[t>>5]|=(255&e.charCodeAt(t/8))<<t%32;return n}function m(e){return p(f(h(e),8*e.length))}function v(e,t){var n,r,i=h(e),a=[],o=[];for(a[15]=o[15]=void 0,i.length>16&&(i=f(i,8*e.length)),n=0;n<16;n+=1)a[n]=909522486^i[n],o[n]=1549556828^i[n];return r=f(a.concat(h(t)),512+8*t.length),p(f(o.concat(r),640))}function g(e){var t,n,r="0123456789abcdef",i="";for(n=0;n<e.length;n+=1)t=e.charCodeAt(n),i+=r.charAt(t>>>4&15)+r.charAt(15&t);return i}function b(e){return unescape(encodeURIComponent(e))}function y(e){return m(b(e))}function k(e){return g(y(e))}function x(e,t){return v(b(e),b(t))}function A(e,t){return g(x(e,t))}function w(e,t,n){return t?n?x(t,e):A(t,e):n?y(e):k(e)}r=function(){return w}.call(t,n,t,e),void 0===r||(e.exports=r)})()},9263:function(e,t,n){"use strict";var r=n("ad6d"),i=n("9f7f"),a=RegExp.prototype.exec,o=String.prototype.replace,s=a,l=function(){var e=/a/,t=/b*/g;return a.call(e,"a"),a.call(t,"a"),0!==e.lastIndex||0!==t.lastIndex}(),c=i.UNSUPPORTED_Y||i.BROKEN_CARET,u=void 0!==/()??/.exec("")[1],d=l||u||c;d&&(s=function(e){var t,n,i,s,d=this,f=c&&d.sticky,p=r.call(d),h=d.source,m=0,v=e;return f&&(p=p.replace("y",""),-1===p.indexOf("g")&&(p+="g"),v=String(e).slice(d.lastIndex),d.lastIndex>0&&(!d.multiline||d.multiline&&"\n"!==e[d.lastIndex-1])&&(h="(?: "+h+")",v=" "+v,m++),n=new RegExp("^(?:"+h+")",p)),u&&(n=new RegExp("^"+h+"$(?!\\s)",p)),l&&(t=d.lastIndex),i=a.call(f?n:d,v),f?i?(i.input=i.input.slice(m),i[0]=i[0].slice(m),i.index=d.lastIndex,d.lastIndex+=i[0].length):d.lastIndex=0:l&&i&&(d.lastIndex=d.global?i.index+i[0].length:t),u&&i&&i.length>1&&o.call(i[0],n,(function(){for(s=1;s<arguments.length-2;s++)void 0===arguments[s]&&(i[s]=void 0)})),i}),e.exports=s},9523:function(e,t){function n(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}e.exports=n},"99b1":function(e,t,n){var r,i=n("9523"),a=(r={Login:"/login",Password:"/password",Aip:"/aip",Aips:"/aips"},i(r,"Aip","/aip"),i(r,"RestoreAip","/restore/aip"),i(r,"Project","/project"),i(r,"Projects","/projects"),i(r,"Project","/project"),i(r,"RestoreProject","/restore/project"),i(r,"Address","/address"),i(r,"Addresses","/addresses"),i(r,"Address","/address"),i(r,"RestoreAddress","/restore/address"),i(r,"Face","/face"),i(r,"PassFace","/pass/face"),i(r,"Face","/face"),i(r,"Faces","/faces"),i(r,"Device","/device"),i(r,"Devices","/devices"),i(r,"Uuid","/unknown/devices"),i(r,"DeviceFaceGroup","/device/face/group"),i(r,"FaceGroup","/face/groups"),i(r,"DeviceLogs","/device/logs"),i(r,"DeviceRecord","/face/logs"),i(r,"Apk","/apk"),i(r,"Apks","/apks"),i(r,"ApkVersion","/apk/version"),i(r,"ApkVersions","/apk/versions"),i(r,"PublishApk","/publish/apk"),i(r,"UploadFace","/upload/face"),i(r,"ApiToken","/api/token"),r);e.exports=a},"9f7f":function(e,t,n){"use strict";var r=n("d039");function i(e,t){return RegExp(e,t)}t.UNSUPPORTED_Y=r((function(){var e=i("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),t.BROKEN_CARET=r((function(){var e=i("^r","gy");return e.lastIndex=2,null!=e.exec("str")}))},ac1f:function(e,t,n){"use strict";var r=n("23e7"),i=n("9263");r({target:"RegExp",proto:!0,forced:/./.exec!==i},{exec:i})},b311:function(e,t,n){
/*!
 * clipboard.js v2.0.6
 * https://clipboardjs.com/
 * 
 * Licensed MIT © Zeno Rocha
 */
(function(t,n){e.exports=n()})(0,(function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=6)}([function(e,t){function n(e){var t;if("SELECT"===e.nodeName)e.focus(),t=e.value;else if("INPUT"===e.nodeName||"TEXTAREA"===e.nodeName){var n=e.hasAttribute("readonly");n||e.setAttribute("readonly",""),e.select(),e.setSelectionRange(0,e.value.length),n||e.removeAttribute("readonly"),t=e.value}else{e.hasAttribute("contenteditable")&&e.focus();var r=window.getSelection(),i=document.createRange();i.selectNodeContents(e),r.removeAllRanges(),r.addRange(i),t=r.toString()}return t}e.exports=n},function(e,t){function n(){}n.prototype={on:function(e,t,n){var r=this.e||(this.e={});return(r[e]||(r[e]=[])).push({fn:t,ctx:n}),this},once:function(e,t,n){var r=this;function i(){r.off(e,i),t.apply(n,arguments)}return i._=t,this.on(e,i,n)},emit:function(e){var t=[].slice.call(arguments,1),n=((this.e||(this.e={}))[e]||[]).slice(),r=0,i=n.length;for(r;r<i;r++)n[r].fn.apply(n[r].ctx,t);return this},off:function(e,t){var n=this.e||(this.e={}),r=n[e],i=[];if(r&&t)for(var a=0,o=r.length;a<o;a++)r[a].fn!==t&&r[a].fn._!==t&&i.push(r[a]);return i.length?n[e]=i:delete n[e],this}},e.exports=n,e.exports.TinyEmitter=n},function(e,t,n){var r=n(3),i=n(4);function a(e,t,n){if(!e&&!t&&!n)throw new Error("Missing required arguments");if(!r.string(t))throw new TypeError("Second argument must be a String");if(!r.fn(n))throw new TypeError("Third argument must be a Function");if(r.node(e))return o(e,t,n);if(r.nodeList(e))return s(e,t,n);if(r.string(e))return l(e,t,n);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}function o(e,t,n){return e.addEventListener(t,n),{destroy:function(){e.removeEventListener(t,n)}}}function s(e,t,n){return Array.prototype.forEach.call(e,(function(e){e.addEventListener(t,n)})),{destroy:function(){Array.prototype.forEach.call(e,(function(e){e.removeEventListener(t,n)}))}}}function l(e,t,n){return i(document.body,e,t,n)}e.exports=a},function(e,t){t.node=function(e){return void 0!==e&&e instanceof HTMLElement&&1===e.nodeType},t.nodeList=function(e){var n=Object.prototype.toString.call(e);return void 0!==e&&("[object NodeList]"===n||"[object HTMLCollection]"===n)&&"length"in e&&(0===e.length||t.node(e[0]))},t.string=function(e){return"string"===typeof e||e instanceof String},t.fn=function(e){var t=Object.prototype.toString.call(e);return"[object Function]"===t}},function(e,t,n){var r=n(5);function i(e,t,n,r,i){var a=o.apply(this,arguments);return e.addEventListener(n,a,i),{destroy:function(){e.removeEventListener(n,a,i)}}}function a(e,t,n,r,a){return"function"===typeof e.addEventListener?i.apply(null,arguments):"function"===typeof n?i.bind(null,document).apply(null,arguments):("string"===typeof e&&(e=document.querySelectorAll(e)),Array.prototype.map.call(e,(function(e){return i(e,t,n,r,a)})))}function o(e,t,n,i){return function(n){n.delegateTarget=r(n.target,t),n.delegateTarget&&i.call(e,n)}}e.exports=a},function(e,t){var n=9;if("undefined"!==typeof Element&&!Element.prototype.matches){var r=Element.prototype;r.matches=r.matchesSelector||r.mozMatchesSelector||r.msMatchesSelector||r.oMatchesSelector||r.webkitMatchesSelector}function i(e,t){while(e&&e.nodeType!==n){if("function"===typeof e.matches&&e.matches(t))return e;e=e.parentNode}}e.exports=i},function(e,t,n){"use strict";n.r(t);var r=n(0),i=n.n(r),a="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var l=function(){function e(t){s(this,e),this.resolveOptions(t),this.initSelection()}return o(e,[{key:"resolveOptions",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action=e.action,this.container=e.container,this.emitter=e.emitter,this.target=e.target,this.text=e.text,this.trigger=e.trigger,this.selectedText=""}},{key:"initSelection",value:function(){this.text?this.selectFake():this.target&&this.selectTarget()}},{key:"selectFake",value:function(){var e=this,t="rtl"==document.documentElement.getAttribute("dir");this.removeFake(),this.fakeHandlerCallback=function(){return e.removeFake()},this.fakeHandler=this.container.addEventListener("click",this.fakeHandlerCallback)||!0,this.fakeElem=document.createElement("textarea"),this.fakeElem.style.fontSize="12pt",this.fakeElem.style.border="0",this.fakeElem.style.padding="0",this.fakeElem.style.margin="0",this.fakeElem.style.position="absolute",this.fakeElem.style[t?"right":"left"]="-9999px";var n=window.pageYOffset||document.documentElement.scrollTop;this.fakeElem.style.top=n+"px",this.fakeElem.setAttribute("readonly",""),this.fakeElem.value=this.text,this.container.appendChild(this.fakeElem),this.selectedText=i()(this.fakeElem),this.copyText()}},{key:"removeFake",value:function(){this.fakeHandler&&(this.container.removeEventListener("click",this.fakeHandlerCallback),this.fakeHandler=null,this.fakeHandlerCallback=null),this.fakeElem&&(this.container.removeChild(this.fakeElem),this.fakeElem=null)}},{key:"selectTarget",value:function(){this.selectedText=i()(this.target),this.copyText()}},{key:"copyText",value:function(){var e=void 0;try{e=document.execCommand(this.action)}catch(t){e=!1}this.handleResult(e)}},{key:"handleResult",value:function(e){this.emitter.emit(e?"success":"error",{action:this.action,text:this.selectedText,trigger:this.trigger,clearSelection:this.clearSelection.bind(this)})}},{key:"clearSelection",value:function(){this.trigger&&this.trigger.focus(),document.activeElement.blur(),window.getSelection().removeAllRanges()}},{key:"destroy",value:function(){this.removeFake()}},{key:"action",set:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"copy";if(this._action=e,"copy"!==this._action&&"cut"!==this._action)throw new Error('Invalid "action" value, use either "copy" or "cut"')},get:function(){return this._action}},{key:"target",set:function(e){if(void 0!==e){if(!e||"object"!==("undefined"===typeof e?"undefined":a(e))||1!==e.nodeType)throw new Error('Invalid "target" value, use a valid Element');if("copy"===this.action&&e.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if("cut"===this.action&&(e.hasAttribute("readonly")||e.hasAttribute("disabled")))throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');this._target=e}},get:function(){return this._target}}]),e}(),c=l,u=n(1),d=n.n(u),f=n(2),p=n.n(f),h="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},m=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();function v(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function g(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function b(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var y=function(e){function t(e,n){v(this,t);var r=g(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return r.resolveOptions(n),r.listenClick(e),r}return b(t,e),m(t,[{key:"resolveOptions",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action="function"===typeof e.action?e.action:this.defaultAction,this.target="function"===typeof e.target?e.target:this.defaultTarget,this.text="function"===typeof e.text?e.text:this.defaultText,this.container="object"===h(e.container)?e.container:document.body}},{key:"listenClick",value:function(e){var t=this;this.listener=p()(e,"click",(function(e){return t.onClick(e)}))}},{key:"onClick",value:function(e){var t=e.delegateTarget||e.currentTarget;this.clipboardAction&&(this.clipboardAction=null),this.clipboardAction=new c({action:this.action(t),target:this.target(t),text:this.text(t),container:this.container,trigger:t,emitter:this})}},{key:"defaultAction",value:function(e){return k("action",e)}},{key:"defaultTarget",value:function(e){var t=k("target",e);if(t)return document.querySelector(t)}},{key:"defaultText",value:function(e){return k("text",e)}},{key:"destroy",value:function(){this.listener.destroy(),this.clipboardAction&&(this.clipboardAction.destroy(),this.clipboardAction=null)}}],[{key:"isSupported",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:["copy","cut"],t="string"===typeof e?[e]:e,n=!!document.queryCommandSupported;return t.forEach((function(e){n=n&&!!document.queryCommandSupported(e)})),n}}]),t}(d.a);function k(e,t){var n="data-clipboard-"+e;if(t.hasAttribute(n))return t.getAttribute(n)}t["default"]=y}])["default"]}))},baa5:function(e,t,n){var r=n("23e7"),i=n("e58c");r({target:"Array",proto:!0,forced:i!==[].lastIndexOf},{lastIndexOf:i})},e58c:function(e,t,n){"use strict";var r=n("fc6a"),i=n("a691"),a=n("50c4"),o=n("a640"),s=n("ae40"),l=Math.min,c=[].lastIndexOf,u=!!c&&1/[1].lastIndexOf(1,-0)<0,d=o("lastIndexOf"),f=s("indexOf",{ACCESSORS:!0,1:0}),p=u||!d||!f;e.exports=p?function(e){if(u)return c.apply(this,arguments)||0;var t=r(this),n=a(t.length),o=n-1;for(arguments.length>1&&(o=l(o,i(arguments[1]))),o<0&&(o=n+o);o>=0;o--)if(o in t&&t[o]===e)return o||0;return-1}:c},e766:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"btn"},[n("el-button",{attrs:{type:"primary"},on:{click:function(t){e.dialogAPK=!0}}},[e._v("添加APK")])],1),n("el-table",{ref:"multipleTable",attrs:{data:e.tableDate}},[n("el-table-column",{attrs:{label:"名称",type:"selection",align:"center"}}),n("el-table-column",{attrs:{prop:"id",label:"APKID",align:"center"}}),n("el-table-column",{attrs:{prop:"name",label:"名称",align:"center"}}),n("el-table-column",{attrs:{prop:"description",label:"描述",align:"center"}}),n("el-table-column",{attrs:{prop:"created_at",label:"创建日期",align:"center"}}),n("el-table-column",{attrs:{label:"操作",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(n){return e.handleDelete(t.$index,t.row)}}},[e._v("删除")]),n("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(n){return e.handleShowVersion(t.$index,t.row)}}},[e._v("查看版本")])]}}])})],1),n("el-dialog",{attrs:{title:"添加APK",visible:e.dialogAPK},on:{"update:visible":function(t){e.dialogAPK=t}}},[n("div",{staticClass:"box"},[n("el-form",{attrs:{model:e.form,"label-width":"100px"}},[n("el-form-item",{attrs:{label:"APK名字"}},[n("el-input",{model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),n("el-form-item",{attrs:{label:"APK描述"}},[n("el-input",{model:{value:e.form.description,callback:function(t){e.$set(e.form,"description",t)},expression:"form.description"}})],1),n("div",{staticClass:"submit"},[n("el-form-item",[n("el-button",{attrs:{type:"primary"},on:{click:e.newApk}},[e._v("添加")])],1)],1)],1)],1)]),n("el-dialog",{attrs:{title:"查看版本",visible:e.dialogShowVersion,modal:!1,width:"80% ","close-on-click-modal":!1},on:{"update:visible":function(t){e.dialogShowVersion=t}}},[n("div",[n("div",{staticClass:"btn"},[n("el-button",{attrs:{type:"primary"},on:{click:function(t){e.dialogVersion=!0}}},[e._v("添加版本")])],1),n("el-dialog",{attrs:{title:"添加版本",visible:e.dialogVersion,"close-on-click-modal":!1,modal:!1},on:{"update:visible":function(t){e.dialogVersion=t}}},[n("div",{staticClass:"box"},[n("el-form",{attrs:{model:e.versionForm,"label-width":"100px"}},[n("el-form-item",{attrs:{label:"版本名字"}},[n("el-input",{model:{value:e.versionForm.version,callback:function(t){e.$set(e.versionForm,"version",t)},expression:"versionForm.version"}})],1),n("el-form-item",{attrs:{label:"上传版本"}},[n("el-upload",{ref:"upload",attrs:{action:"https://upload-z2.qiniup.com",limit:1,"before-upload":e.beforeAvatarUpload,"on-success":e.handleAvatarSuccess,"on-remove":e.handleRemove,"on-exceed":e.handleExceed,"on-progress":e.uploadProcess,data:e.versionData}},[n("el-button",{attrs:{size:"small",type:"primary"}},[e._v("选择包")])],1),!0===e.hasFile?n("el-progress",{attrs:{"text-inside":!0,"stroke-width":15,percentage:e.percentage}}):e._e()],1),n("el-form-item",{attrs:{label:"版本链接"}},[n("el-input",{model:{value:e.versionForm.href,callback:function(t){e.$set(e.versionForm,"href",t)},expression:"versionForm.href"}})],1),n("div",{staticClass:"submit"},[n("el-form-item",[n("el-button",{attrs:{type:"primary"},on:{click:e.newApkVersion}},[e._v("添加")])],1)],1)],1)],1)]),n("el-table",{ref:"multipleTable",attrs:{data:e.versionTableData}},[n("el-table-column",{attrs:{label:"名称",type:"selection",align:"center"}}),n("el-table-column",{attrs:{prop:"id",label:"ID",align:"center"}}),n("el-table-column",{attrs:{prop:"apk_id",label:"APKID",align:"center"}}),n("el-table-column",{attrs:{prop:"version",label:"版本",align:"center"}}),n("el-table-column",{attrs:{prop:"created_at",label:"创建日期",align:"center"}}),n("el-table-column",{attrs:{label:"操作",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(n){return e.handleSend(t.$index,t.row)}}},[e._v("发布")]),n("el-button",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:t.row.href,expression:"scope.row.href",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:e.onCopy,expression:"onCopy",arg:"success"},{name:"clipboard",rawName:"v-clipboard:error",value:e.onError,expression:"onError",arg:"error"}],staticClass:"copy",attrs:{size:"mini",type:"primary"}},[e._v("复制链接")]),n("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(n){return e.handleDelete(t.$index,t.row)}}},[e._v("删除")])]}}])})],1),n("el-dialog",{attrs:{title:"发布",visible:e.dialogSend,modal:!1},on:{"update:visible":function(t){e.dialogSend=t}}},[n("div",{staticClass:"box"},[n("el-form",{attrs:{model:e.sendForm,"label-width":"100px"}},[n("el-form-item",{attrs:{label:"选择类型"}},[n("el-select",{on:{change:e.typeChange},model:{value:e.sendForm.type,callback:function(t){e.$set(e.sendForm,"type",t)},expression:"sendForm.type"}},e._l(e.typeList,(function(e,t){return n("el-option",{key:t,attrs:{label:e.label,value:e.value}})})),1)],1),2===e.sendForm.type?n("div",[n("el-form-item",{attrs:{label:"选择地址"}},[n("div",{staticClass:"facebox"},e._l(e.addressList,(function(t,r){return n("div",{key:r},[n("el-checkbox-group",{staticClass:"facebox-item",model:{value:e.sendForm.addresses,callback:function(t){e.$set(e.sendForm,"addresses",t)},expression:"sendForm.addresses"}},[n("el-checkbox",{attrs:{label:t.id},on:{change:e.handleCheckAllAddress}},[e._v(e._s(t.address))])],1)],1)})),0)])],1):e._e(),3===e.sendForm.type?n("div",[n("el-form-item",{attrs:{label:"选择地址"}},[n("div",{staticClass:"facebox"},e._l(e.addressList,(function(t,r){return n("div",{key:r},[n("el-checkbox-group",{staticClass:"facebox-item",model:{value:e.sendForm.addresses,callback:function(t){e.$set(e.sendForm,"addresses",t)},expression:"sendForm.addresses"}},[n("el-checkbox",{attrs:{label:t.id},on:{change:e.handleCheckAllAddress}},[e._v(e._s(t.address))])],1)],1)})),0)])],1):e._e(),e.hasType?n("div",[n("el-form-item",{attrs:{label:"选择方向"}},[n("el-select",{on:{change:e.handleCheckeddirection},model:{value:e.form.direction,callback:function(t){e.$set(e.form,"direction",t)},expression:"form.direction"}},e._l(e.directionList,(function(e,t){return n("el-option",{key:t,attrs:{label:e.name,value:e.value}})})),1)],1),n("el-form-item",{attrs:{label:"选择设备"}},[n("div",{staticClass:"facebox"},e._l(e.deviceList,(function(t,r){return n("div",{key:r},[n("el-checkbox-group",{staticClass:"facebox-item",model:{value:e.sendForm.devices,callback:function(t){e.$set(e.sendForm,"devices",t)},expression:"sendForm.devices"}},[n("el-checkbox",{attrs:{label:t.id}},[e._v(e._s(t.remark?t.remark:t.uuid))])],1)],1)})),0)])],1):e._e(),n("div",{staticClass:"submit"},[n("el-form-item",[n("el-button",{attrs:{type:"primary"},on:{click:e.newSend}},[e._v("提交")])],1)],1)],1)],1)]),n("div",{staticClass:"block"},[n("el-pagination",{attrs:{"current-page":e.currentVersionPage,"page-size":10,layout:"prev, pager, next, jumper",total:e.totalVersionPage},on:{"current-change":e.handleCurrentVersionChange,"update:currentPage":function(t){e.currentVersionPage=t},"update:current-page":function(t){e.currentVersionPage=t}}})],1)],1)]),n("div",{staticClass:"block"},[n("el-pagination",{attrs:{"current-page":e.currentPage,"page-size":10,layout:"prev, pager, next, jumper",total:e.totalPage},on:{"current-change":e.handleCurrentChange,"update:currentPage":function(t){e.currentPage=t},"update:current-page":function(t){e.currentPage=t}}})],1)],1)},i=[],a=(n("99af"),n("baa5"),n("b0c0"),n("365c")),o=n("bc3a"),s=n.n(o),l=n("8d81"),c=n.n(l),u=(n("b311"),{name:"gradems",data:function(){return{dialogAPK:!1,form:{name:"",description:""},dialogVersion:!1,tableDate:[],currentPage:1,totalPage:0,dialogShowVersion:!1,apkList:[],qiniuaddr:"https://tu.fengniaotuangou.cn",fileName:"",suffix:"",percentage:0,hasFile:"",versionData:{key:"",token:""},versionForm:{apk_id:"",version:"",href:""},dialogSend:!1,typeList:[{value:1,label:"全部设备"},{value:2,label:"按地址选择"},{value:3,label:"自定义"}],directionList:[{value:"out",name:"出"},{value:"in",name:"进"}],versionTableData:[],sendForm:{type:"",addresses:[],direction:"",devices:[],version_id:""},addressList:[],addresses:[],checkAll:!1,hasType:!1,deviceList:[],currentVersionPage:1,totalVersionPage:0}},mounted:function(){this.getApk(),this.getAddress(),this.getQiniuToken()},methods:{getAip:function(){var e=this;a["a"].aips(e.currentPage).then((function(t){e.apiList=t.data}))},getApk:function(){var e=this;a["a"].apks(e.currentPage).then((function(t){e.tableDate=t.data,e.totalPage=t.total}))},newApk:function(){var e=this,t=this;a["a"].apk(t.form).then((function(n){t.$message.success("提交成功"),e.getApk(),t.ApkForm=!1,t.currentPage=1,t.form={}}))},handleDel:function(){},handleShowVersion:function(e,t){var n=this;n.dialogShowVersion=!0,n.versionForm.apk_id=t.id,a["a"].apkVersions(n.currentPage,10,n.versionForm.apk_id).then((function(e){n.versionTableData=e.data,n.totalVersionPage=e.total}))},handleCurrentChange:function(e){var t=this;t.getApk()},getApkVersion:function(){var e=this;a["a"].apkVersions(e.currentPage,10,e.versionForm.apk_id).then((function(t){e.versionTableData=t.data,e.totalVersionPage=t.total}))},newApkVersion:function(){var e=this;a["a"].apkVersion(e.versionForm).then((function(t){e.$message.success("提交成功"),a["a"].apkVersions(e.currentPage,10,e.versionForm.apk_id).then((function(t){e.versionTableData=t.data,e.totalVersionPage=t.total})),e.dialogVersion=!1,e.currentPage=1,e.form={}}))},handleSend:function(e,t){this.dialogSend=!0,this.sendForm.version_id=t.id},getAddress:function(){var e=this;a["a"].addresses(e.currentPage).then((function(t){e.addressList=t.data})),console.log(e.addressList)},typeChange:function(e){var t=this;console.log(t.sendForm.addresses),3===t.sendForm.type&&(t.hasType=!0,t.sendForm.addresses=[]),2===t.sendForm.type&&(t.sendForm.addresses=[])},handleCheckeddirection:function(e){var t=this;t.getDevice(e)},getDevice:function(e){var t=this;a["a"]._devices(e,t.sendForm.addresses,100).then((function(e){t.deviceList=e.data}))},newSend:function(){var e=this,t=this,n=t.sendForm.type;switch(n){case 1:var r={type:1};a["a"].publishApk(r).then((function(n){t.$message.success("发布成功"),e.dialogSend=!1}));break;case 2:var i={type:2,addresses:t.sendForm.addresses};a["a"].publishApk(i).then((function(n){t.$message.success("发布成功"),e.dialogSend=!1}));break;case 3:a["a"].publishApk(t.sendForm).then((function(n){t.$message.success("发布成功"),e.dialogSend=!1}))}},onCopy:function(e){var t=this;t.$message.success("复制成功")},onError:function(e){var t=this;t.$message.warning("复制失败")},handleRemove:function(e,t){var n=this;n.hasFile=!1,n.percentage=0,n.versionForm.href=""},beforeAvatarUpload:function(e){var t=this;t.fileName=c()(e.name),t.suffix=e.name.substring(e.name.lastIndexOf(".")+1),t.versionData.key="".concat(t.fileName,".").concat(t.suffix)},handleAvatarSuccess:function(e,t){var n=this;n.versionForm.href="".concat(n.qiniuaddr,"/").concat(e.key),console.log(n.versionForm.href)},handleExceed:function(e,t){var n=this;n.$message.error("只能上传一个文件"),n.hasFile=!1,n.percentage=0,n.$refs.upload.clearFiles(),n.versionData.key="",n.versionForm.href=""},uploadProcess:function(e,t,n){var r=this;r.hasFile=!0,r.percentage=e.loaded/e.total*100|0},getQiniuToken:function(){var e=this;s.a.get("https://api.fengniaotuangou.cn/api/upload/token").then((function(t){e.versionData.token=t.data.uptoken}))},handleCurrentVersionChange:function(e){var t=this;a["a"].apkVersions(e,10,t.versionForm.apk_id).then((function(e){t.versionTableData=e.data,t.totalVersionPage=e.total}))}}}),d=u,f=n("2877"),p=Object(f["a"])(d,r,i,!1,null,null,null);t["default"]=p.exports}}]);
//# sourceMappingURL=chunk-43e107fe.42238533.js.map