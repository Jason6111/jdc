(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-96e3162a"],{5304:function(e,t,n){"use strict";n("9613")},9613:function(e,t,n){},b0c0:function(e,t,n){var r=n("83ab"),o=n("5e77").EXISTS,c=n("9bf2").f,a=Function.prototype,i=a.toString,u=/^\s*function ([^ (]*)/,l="name";r&&!o&&c(a,l,{configurable:!0,get:function(){try{return i.call(this).match(u)[1]}catch(e){return""}}})},b311:function(e,t,n){
/*!
 * clipboard.js v2.0.8
 * https://clipboardjs.com/
 *
 * Licensed MIT © Zeno Rocha
 */
(function(t,n){e.exports=n()})(0,(function(){return function(){var e={134:function(e,t,n){"use strict";n.d(t,{default:function(){return N}});var r=n(279),o=n.n(r),c=n(370),a=n.n(c),i=n(817),u=n.n(i);function l(e){return l="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function d(e,t,n){return t&&f(e.prototype,t),n&&f(e,n),e}var p=function(){function e(t){s(this,e),this.resolveOptions(t),this.initSelection()}return d(e,[{key:"resolveOptions",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action=e.action,this.container=e.container,this.emitter=e.emitter,this.target=e.target,this.text=e.text,this.trigger=e.trigger,this.selectedText=""}},{key:"initSelection",value:function(){this.text?this.selectFake():this.target&&this.selectTarget()}},{key:"createFakeElement",value:function(){var e="rtl"===document.documentElement.getAttribute("dir");this.fakeElem=document.createElement("textarea"),this.fakeElem.style.fontSize="12pt",this.fakeElem.style.border="0",this.fakeElem.style.padding="0",this.fakeElem.style.margin="0",this.fakeElem.style.position="absolute",this.fakeElem.style[e?"right":"left"]="-9999px";var t=window.pageYOffset||document.documentElement.scrollTop;return this.fakeElem.style.top="".concat(t,"px"),this.fakeElem.setAttribute("readonly",""),this.fakeElem.value=this.text,this.fakeElem}},{key:"selectFake",value:function(){var e=this,t=this.createFakeElement();this.fakeHandlerCallback=function(){return e.removeFake()},this.fakeHandler=this.container.addEventListener("click",this.fakeHandlerCallback)||!0,this.container.appendChild(t),this.selectedText=u()(t),this.copyText(),this.removeFake()}},{key:"removeFake",value:function(){this.fakeHandler&&(this.container.removeEventListener("click",this.fakeHandlerCallback),this.fakeHandler=null,this.fakeHandlerCallback=null),this.fakeElem&&(this.container.removeChild(this.fakeElem),this.fakeElem=null)}},{key:"selectTarget",value:function(){this.selectedText=u()(this.target),this.copyText()}},{key:"copyText",value:function(){var e;try{e=document.execCommand(this.action)}catch(t){e=!1}this.handleResult(e)}},{key:"handleResult",value:function(e){this.emitter.emit(e?"success":"error",{action:this.action,text:this.selectedText,trigger:this.trigger,clearSelection:this.clearSelection.bind(this)})}},{key:"clearSelection",value:function(){this.trigger&&this.trigger.focus(),document.activeElement.blur(),window.getSelection().removeAllRanges()}},{key:"destroy",value:function(){this.removeFake()}},{key:"action",set:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"copy";if(this._action=e,"copy"!==this._action&&"cut"!==this._action)throw new Error('Invalid "action" value, use either "copy" or "cut"')},get:function(){return this._action}},{key:"target",set:function(e){if(void 0!==e){if(!e||"object"!==l(e)||1!==e.nodeType)throw new Error('Invalid "target" value, use a valid Element');if("copy"===this.action&&e.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if("cut"===this.action&&(e.hasAttribute("readonly")||e.hasAttribute("disabled")))throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');this._target=e}},get:function(){return this._target}}]),e}(),h=p;function m(e){return m="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},m(e)}function b(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function v(e,t,n){return t&&y(e.prototype,t),n&&y(e,n),e}function g(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&k(e,t)}function k(e,t){return k=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},k(e,t)}function O(e){var t=E();return function(){var n,r=x(e);if(t){var o=x(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return j(this,n)}}function j(e,t){return!t||"object"!==m(t)&&"function"!==typeof t?w(e):t}function w(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function E(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function x(e){return x=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},x(e)}function C(e,t){var n="data-clipboard-".concat(e);if(t.hasAttribute(n))return t.getAttribute(n)}var S=function(e){g(n,e);var t=O(n);function n(e,r){var o;return b(this,n),o=t.call(this),o.resolveOptions(r),o.listenClick(e),o}return v(n,[{key:"resolveOptions",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action="function"===typeof e.action?e.action:this.defaultAction,this.target="function"===typeof e.target?e.target:this.defaultTarget,this.text="function"===typeof e.text?e.text:this.defaultText,this.container="object"===m(e.container)?e.container:document.body}},{key:"listenClick",value:function(e){var t=this;this.listener=a()(e,"click",(function(e){return t.onClick(e)}))}},{key:"onClick",value:function(e){var t=e.delegateTarget||e.currentTarget;this.clipboardAction&&(this.clipboardAction=null),this.clipboardAction=new h({action:this.action(t),target:this.target(t),text:this.text(t),container:this.container,trigger:t,emitter:this})}},{key:"defaultAction",value:function(e){return C("action",e)}},{key:"defaultTarget",value:function(e){var t=C("target",e);if(t)return document.querySelector(t)}},{key:"defaultText",value:function(e){return C("text",e)}},{key:"destroy",value:function(){this.listener.destroy(),this.clipboardAction&&(this.clipboardAction.destroy(),this.clipboardAction=null)}}],[{key:"isSupported",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:["copy","cut"],t="string"===typeof e?[e]:e,n=!!document.queryCommandSupported;return t.forEach((function(e){n=n&&!!document.queryCommandSupported(e)})),n}}]),n}(o()),N=S},828:function(e){var t=9;if("undefined"!==typeof Element&&!Element.prototype.matches){var n=Element.prototype;n.matches=n.matchesSelector||n.mozMatchesSelector||n.msMatchesSelector||n.oMatchesSelector||n.webkitMatchesSelector}function r(e,n){while(e&&e.nodeType!==t){if("function"===typeof e.matches&&e.matches(n))return e;e=e.parentNode}}e.exports=r},438:function(e,t,n){var r=n(828);function o(e,t,n,r,o){var c=a.apply(this,arguments);return e.addEventListener(n,c,o),{destroy:function(){e.removeEventListener(n,c,o)}}}function c(e,t,n,r,c){return"function"===typeof e.addEventListener?o.apply(null,arguments):"function"===typeof n?o.bind(null,document).apply(null,arguments):("string"===typeof e&&(e=document.querySelectorAll(e)),Array.prototype.map.call(e,(function(e){return o(e,t,n,r,c)})))}function a(e,t,n,o){return function(n){n.delegateTarget=r(n.target,t),n.delegateTarget&&o.call(e,n)}}e.exports=c},879:function(e,t){t.node=function(e){return void 0!==e&&e instanceof HTMLElement&&1===e.nodeType},t.nodeList=function(e){var n=Object.prototype.toString.call(e);return void 0!==e&&("[object NodeList]"===n||"[object HTMLCollection]"===n)&&"length"in e&&(0===e.length||t.node(e[0]))},t.string=function(e){return"string"===typeof e||e instanceof String},t.fn=function(e){var t=Object.prototype.toString.call(e);return"[object Function]"===t}},370:function(e,t,n){var r=n(879),o=n(438);function c(e,t,n){if(!e&&!t&&!n)throw new Error("Missing required arguments");if(!r.string(t))throw new TypeError("Second argument must be a String");if(!r.fn(n))throw new TypeError("Third argument must be a Function");if(r.node(e))return a(e,t,n);if(r.nodeList(e))return i(e,t,n);if(r.string(e))return u(e,t,n);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}function a(e,t,n){return e.addEventListener(t,n),{destroy:function(){e.removeEventListener(t,n)}}}function i(e,t,n){return Array.prototype.forEach.call(e,(function(e){e.addEventListener(t,n)})),{destroy:function(){Array.prototype.forEach.call(e,(function(e){e.removeEventListener(t,n)}))}}}function u(e,t,n){return o(document.body,e,t,n)}e.exports=c},817:function(e){function t(e){var t;if("SELECT"===e.nodeName)e.focus(),t=e.value;else if("INPUT"===e.nodeName||"TEXTAREA"===e.nodeName){var n=e.hasAttribute("readonly");n||e.setAttribute("readonly",""),e.select(),e.setSelectionRange(0,e.value.length),n||e.removeAttribute("readonly"),t=e.value}else{e.hasAttribute("contenteditable")&&e.focus();var r=window.getSelection(),o=document.createRange();o.selectNodeContents(e),r.removeAllRanges(),r.addRange(o),t=r.toString()}return t}e.exports=t},279:function(e){function t(){}t.prototype={on:function(e,t,n){var r=this.e||(this.e={});return(r[e]||(r[e]=[])).push({fn:t,ctx:n}),this},once:function(e,t,n){var r=this;function o(){r.off(e,o),t.apply(n,arguments)}return o._=t,this.on(e,o,n)},emit:function(e){var t=[].slice.call(arguments,1),n=((this.e||(this.e={}))[e]||[]).slice(),r=0,o=n.length;for(r;r<o;r++)n[r].fn.apply(n[r].ctx,t);return this},off:function(e,t){var n=this.e||(this.e={}),r=n[e],o=[];if(r&&t)for(var c=0,a=r.length;c<a;c++)r[c].fn!==t&&r[c].fn._!==t&&o.push(r[c]);return o.length?n[e]=o:delete n[e],this}},e.exports=t,e.exports.TinyEmitter=t}},t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={exports:{}};return e[r](o,o.exports,n),o.exports}return function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),n(134)}().default}))},d504:function(e,t,n){"use strict";n.r(t);n("b0c0");var r=n("8bbf"),o=Object(r["createElementVNode"])("div",{class:"card-header"},[Object(r["createElementVNode"])("span",null,"个人中心")],-1),c={class:"card-body"},a={class:"card-footer"},i=Object(r["createTextVNode"])("复制CK"),u=Object(r["createTextVNode"])("退出登录"),l=Object(r["createTextVNode"])("删除账号"),s=Object(r["createElementVNode"])("div",{class:"card-header"},[Object(r["createElementVNode"])("span",null,"修改备注")],-1),f={class:"card-body"},d={class:"card-footer"},p=Object(r["createTextVNode"])("修改"),h=Object(r["createElementVNode"])("div",{class:"card-header"},[Object(r["createElementVNode"])("span",null,"消息推送二维码")],-1),m={class:"card-body"},b=Object(r["createElementVNode"])("div",{class:"card-header"},[Object(r["createElementVNode"])("span",null,"常见活动位置")],-1),y={class:"card-body"},v={class:"ulc"},g={class:"pr-2"},k=["onClick"];function O(e,t,n,O,j,w){var E=Object(r["resolveComponent"])("el-button"),x=Object(r["resolveComponent"])("el-card"),C=Object(r["resolveComponent"])("el-col"),S=Object(r["resolveComponent"])("el-row"),N=Object(r["resolveComponent"])("el-input"),V=Object(r["resolveComponent"])("el-image");return Object(r["openBlock"])(),Object(r["createElementBlock"])(r["Fragment"],null,[Object(r["createVNode"])(S,{span:24},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(C,{span:24},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(x,null,{header:Object(r["withCtx"])((function(){return[o]})),default:Object(r["withCtx"])((function(){return[Object(r["createElementVNode"])("div",c,[Object(r["createElementVNode"])("p",null,"昵称："+Object(r["toDisplayString"])(e.nickname),1),Object(r["createElementVNode"])("p",null,"更新时间："+Object(r["toDisplayString"])(e.timestamp),1)]),Object(r["createElementVNode"])("div",a,[Object(r["createVNode"])(E,{id:"btncopy",type:"primary",size:"small","data-clipboard-text":e.ck,auto:"",onClick:O.CopyCK},{default:Object(r["withCtx"])((function(){return[i]})),_:1},8,["data-clipboard-text","onClick"]),Object(r["createVNode"])(E,{size:"small",auto:"",onClick:O.logout},{default:Object(r["withCtx"])((function(){return[u]})),_:1},8,["onClick"]),Object(r["createVNode"])(E,{type:"danger",size:"small",auto:"",onClick:O.delAccount},{default:Object(r["withCtx"])((function(){return[l]})),_:1},8,["onClick"])])]})),_:1})]})),_:1})]})),_:1}),Object(r["createVNode"])(S,{span:24},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(C,{span:24},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(x,null,{header:Object(r["withCtx"])((function(){return[s]})),default:Object(r["withCtx"])((function(){return[Object(r["createElementVNode"])("div",f,[Object(r["createVNode"])(N,{style:{"max-width":"260px"},modelValue:e.remarks,"onUpdate:modelValue":t[0]||(t[0]=function(t){return e.remarks=t}),placeholder:"备注","prefix-icon":"el-icon-edit"},null,8,["modelValue"])]),Object(r["createElementVNode"])("div",d,[Object(r["createVNode"])(E,{type:"success",size:"small",auto:"",onClick:O.upAccount},{default:Object(r["withCtx"])((function(){return[p]})),_:1},8,["onClick"])])]})),_:1})]})),_:1})]})),_:1}),Object(r["withDirectives"])(Object(r["createVNode"])(S,{span:24},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(C,{span:24},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(x,null,{header:Object(r["withCtx"])((function(){return[h]})),default:Object(r["withCtx"])((function(){return[Object(r["createElementVNode"])("div",m,[Object(r["createVNode"])(V,{style:{width:"200px"},src:e.qrurl},null,8,["src"])])]})),_:1})]})),_:1})]})),_:1},512),[[r["vShow"],e.qrshow]]),Object(r["createVNode"])(S,{span:24},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(C,{span:24},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(x,null,{header:Object(r["withCtx"])((function(){return[b]})),default:Object(r["withCtx"])((function(){return[Object(r["createElementVNode"])("div",y,[Object(r["createElementVNode"])("ul",v,[(Object(r["openBlock"])(!0),Object(r["createElementBlock"])(r["Fragment"],null,Object(r["renderList"])(O.activity,(function(e,t){return Object(r["openBlock"])(),Object(r["createElementBlock"])("li",{key:t,class:"leading-normal"},[Object(r["createElementVNode"])("span",null,Object(r["toDisplayString"])(e.name)+"：",1),Object(r["createElementVNode"])("span",g,Object(r["toDisplayString"])(e.address),1),e.href?(Object(r["openBlock"])(),Object(r["createElementBlock"])("a",{key:0,class:"text-blue-400",href:"#",onClick:function(t){return O.openUrlWithJD(e.href)}},"直达链接",8,k)):Object(r["createCommentVNode"])("",!0)])})),128))])])]})),_:1})]})),_:1})]})),_:1})],64)}var j=n("5530"),w=n("1da1"),E=(n("96cf"),n("6389")),x=n("365c"),C=n("be66"),S=n("b311"),N=n.n(S),V={setup:function(){var e=Object(E["useRouter"])(),t=Object(r["reactive"])({nickname:void 0,timestamp:void 0,remarks:"",qrurl:"",ck:"",qrshow:!1}),n=function(){var n=Object(w["a"])(regeneratorRuntime.mark((function n(){var r,c,a,i;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(r=localStorage.getItem("qlid"),c=localStorage.getItem("qlkey"),a=e.currentRoute.value.query.id,r){n.next=9;break}if(!a){n.next=7;break}return e.push("/Captcha/"+a),n.abrupt("return");case 7:return o(),n.abrupt("return");case 9:return n.next=11,Object(x["m"])(r,c);case 11:if(i=n.sent,i&&i.success){n.next=16;break}return C["ElMessage"].error("获取用户信息失败，请重重新登录"),o(),n.abrupt("return");case 16:localStorage.setItem("qlid",i.data.qlid),localStorage.setItem("qlky",i.data.qlky),t.nickname=i.data.nickname,t.qrurl=i.data.qrurl,t.ck=i.data.ck,""!=t.qrurl&&(t.qrshow=!0),t.timestamp=new Date(i.data.timestamp).toLocaleString(),t.remarks=i.data.remarks;case 24:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();Object(r["onMounted"])(n);var o=function(){console.log("我没找到"),localStorage.removeItem("qlid"),localStorage.removeItem("qlky"),e.push("/login")},c=function(){var e=Object(w["a"])(regeneratorRuntime.mark((function e(){var n,r,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=localStorage.getItem("qlid"),r=localStorage.getItem("qlkey"),e.next=4,Object(x["e"])({qlid:n,qlkey:r,remarks:t.remarks});case 4:o=e.sent,o.success?C["ElMessage"].success(o.message):C["ElMessage"].error(o.message);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),a=function(){var e=Object(w["a"])(regeneratorRuntime.mark((function e(){var t,n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=localStorage.getItem("qlid"),n=localStorage.getItem("qlkey"),e.next=4,Object(x["i"])({qlid:t,qlkey:n});case 4:r=e.sent,r.success?(C["ElMessage"].success(r.message),setTimeout((function(){o()}),1e3)):C["ElMessage"].error(r.message);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),i=function(){var e=Object(w["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t=new N.a("#btncopy"),t.on("success",(function(){console.log("复制成功"),C["ElMessage"].success("复制成功"),t.destroy()})),t.on("error",(function(){console.log("复制失败"),C["ElMessage"].error("复制失败"),t.destroy()}));case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),u=function(e){var t=encodeURIComponent('{"category":"jump","des":"m","action":"to","url":"'.concat(e,'"}'));window.location.href="openapp.jdmobile://virtual?params=".concat(t),console.log(window.location.href)},l=[{name:"玩一玩（可找到大多数活动）",address:"京东 APP 首页-频道-边玩边赚",href:"https://funearth.m.jd.com/babelDiy/Zeus/3BB1rymVZUo4XmicATEUSDUgHZND/index.html"},{name:"宠汪汪",address:"京东APP-首页/玩一玩/我的-宠汪汪"},{name:"东东萌宠",address:"京东APP-首页/玩一玩/我的-东东萌宠"},{name:"东东农场",address:"京东APP-首页/玩一玩/我的-东东农场"},{name:"东东工厂",address:"京东APP-首页/玩一玩/我的-东东工厂"},{name:"东东超市",address:"京东APP-首页/玩一玩/我的-东东超市"},{name:"领现金",address:"京东APP-首页/玩一玩/我的-领现金"},{name:"东东健康社区",address:"京东APP-首页/玩一玩/我的-东东健康社区"},{name:"京喜农场",address:"京喜APP-我的-京喜农场"},{name:"京喜牧场",address:"京喜APP-我的-京喜牧场"},{name:"京喜工厂",address:"京喜APP-我的-京喜工厂"},{name:"京喜财富岛",address:"京喜APP-我的-京喜财富岛"},{name:"京东极速版红包",address:"京东极速版APP-我的-红包"}];return Object(j["a"])(Object(j["a"])({},Object(r["toRefs"])(t)),{},{activity:l,getInfo:n,CopyCK:i,logout:o,delAccount:a,upAccount:c,openUrlWithJD:u})}},A=(n("5304"),n("6b0d")),T=n.n(A);const P=T()(V,[["render",O]]);t["default"]=P}}]);