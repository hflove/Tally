!function(t){var e={};function n(o){if(e[o])return e[o].exports;var i=e[o]={i:o,l:!1,exports:{}};return t[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(o,i,function(e){return t[e]}.bind(null,i));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=117)}({0:function(t,e){t.exports={}},1:function(t,e,n){"use strict";var o;Object.defineProperty(e,"__esModule",{value:!0}),e.weexPlus=e.default=void 0,o="function"==typeof getUni?getUni:function(){var t=function(t){return"function"==typeof t},e=/^\$|^on|^create|Sync$|Manager$|^pause/,n=["os","getCurrentSubNVue","getSubNVueById","stopRecord","stopVoice","stopBackgroundAudio","stopPullDownRefresh","hideKeyboard","hideToast","hideLoading","showNavigationBarLoading","hideNavigationBarLoading","canIUse","navigateBack","closeSocket","pageScrollTo","drawCanvas"],o=function(t){return!(e.test(t)&&"createBLEConnection"!==t||~n.indexOf(t))},a=function(e){return function(){for(var n=arguments.length,o=Array(n>1?n-1:0),i=1;i<n;i++)o[i-1]=arguments[i];var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t(a.success)||t(a.fail)||t(a.complete)?e.apply(void 0,[a].concat(o)):new Promise(function(t,n){e.apply(void 0,[Object.assign({},a,{success:t,fail:n})].concat(o)),Promise.prototype.finally=function(t){var e=this.constructor;return this.then(function(n){return e.resolve(t()).then(function(){return n})},function(n){return e.resolve(t()).then(function(){throw n})})}}).then(function(t){return[null,t]}).catch(function(t){return[t]})}},r=[],s=void 0;function u(t){r.forEach(function(e){return e({origin:s,data:t})})}var c=i.webview.currentWebview().id,l=new BroadcastChannel("UNI-APP-SUBNVUE");function d(t){t.$processed=!0;var e=i.webview.currentWebview().id===t.id,n="uniNView"===t.__uniapp_origin_type&&t.__uniapp_origin_id,o=t.id;if(t.postMessage=function(t){n?l.postMessage({data:t,to:e?n:o}):b({type:"UniAppSubNVue",data:t})},t.onMessage=function(t){r.push(t)},t.__uniapp_mask_id){s=t.__uniapp_host;var a=t.__uniapp_mask,u=i.webview.getWebviewById(t.__uniapp_mask_id);u=u.parent()||u;var c=t.show,d=t.hide,p=t.close,f=function(){u.setStyle({mask:"none"})};t.show=function(){u.setStyle({mask:a});for(var e=arguments.length,n=Array(e),o=0;o<e;o++)n[o]=arguments[o];return c.apply(t,n)},t.hide=function(){f();for(var e=arguments.length,n=Array(e),o=0;o<e;o++)n[o]=arguments[o];return d.apply(t,n)},t.close=function(){f();for(var e=arguments.length,n=Array(e),o=0;o<e;o++)n[o]=arguments[o];return p.apply(t,n)}}}function p(t){var e=i.webview.getWebviewById(t);return e&&!e.$processed&&d(e),e}l.onmessage=function(t){t.data.to===c&&u(t.data.data)};var f=weex.requireModule("plus"),g=weex.requireModule("globalEvent"),h=0,v={},y="__uniapp__service";g.addEventListener("plusMessage",function(t){"UniAppJsApi"===t.data.type?_(t.data.id,t.data.data):"UniAppSubNVue"===t.data.type?u(t.data.data,t.data.options):"onNavigationBarButtonTap"===t.data.type?"function"==typeof w&&w(t.data.data):"onNavigationBarSearchInputChanged"===t.data.type?"function"==typeof k&&k(t.data.data):"onNavigationBarSearchInputConfirmed"===t.data.type?"function"==typeof C&&C(t.data.data):"onNavigationBarSearchInputClicked"===t.data.type&&"function"==typeof D&&D(t.data.data)});var _=function(t,e){var n=v[t];n?(n(e),n.keepAlive||delete v[t]):console.error("callback["+t+"] is undefined")},m=function(e){var n,o,i=e.id,a=e.type,r=e.params;v[i]=(o=function(e){t(n)?n(e):n&&(~e.errMsg.indexOf(":ok")?t(n.success)&&n.success(e):~e.errMsg.indexOf(":fail")&&t(n.fail)&&n.fail(e),t(n.complete)&&n.complete(e))},(t(n=r)||n&&t(n.callback))&&(o.keepAlive=!0),o),f.postMessage({id:i,type:a,params:r},y)};function b(t){f.postMessage(t,y)}var S=function(t){return function(e){m({id:h++,type:t,params:e})}},w=void 0,k=void 0,C=void 0,D=void 0;function T(t){w=t}function N(t){k=t}function O(t){C=t}function P(t){D=t}function I(t){return weex.requireModule(t)}var R=weex.requireModule("dom"),M=weex.requireModule("globalEvent"),x=[];function q(t){"function"==typeof t&&(this.isUniAppReady?t():x.push(t))}M.addEventListener("plusMessage",function(t){"UniAppReady"===t.data.type&&(q.isUniAppReady=!0,x.length&&(x.forEach(function(t){return t()}),x=[]))});var F="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},A=weex.requireModule("stream"),B="GET",E=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:B,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"application/x-www-form-urlencoded";return"object"===(void 0===t?"undefined":F(t))?"POST"===e.toUpperCase()&&"application/json"===n.toLowerCase()?JSON.stringify(t):Object.keys(t).map(function(e){return encodeURIComponent(e)+"="+encodeURIComponent(t[e])}).join("&"):t},$=weex.requireModule("plusstorage"),j="__TYPE",L=weex.requireModule("clipboard"),V=function(){if("function"==typeof getUniEmitter)return getUniEmitter;var t={$on:function(){console.warn("uni.$on failed")},$off:function(){console.warn("uni.$off failed")},$once:function(){console.warn("uni.$once failed")},$emit:function(){console.warn("uni.$emit failed")}};return function(){return t}}();function U(t,e,n){return t[e].apply(t,n)}var J=Object.freeze({loadFontFace:function(e){var n=e.family,o=e.source,i=(e.desc,e.success),a=(e.fail,e.complete);R.addRule("fontFace",{fontFamily:n,src:o.replace(/"/g,"'")});var r={errMsg:"loadFontFace:ok",status:"loaded"};t(i)&&i(r),t(a)&&a(r)},ready:q,request:function(e){var n=e.url,o=e.data,i=e.header,a=e.method,r=void 0===a?"GET":a,s=e.dataType,u=void 0===s?"json":s,c=(e.responseType,e.success),l=e.fail,d=e.complete,p=!1,f=!1,g={};if(i)for(var h in i)f||"content-type"!==h.toLowerCase()?g[h]=i[h]:(f=!0,g["Content-Type"]=i[h]);return r===B&&o&&(n=n+(~n.indexOf("?")?"&"===n.substr(-1)||"?"===n.substr(-1)?"":"&":"?")+E(o)),A.fetch({url:n,method:r,headers:g,type:"json"===u?"json":"text",body:r!==B?E(o,r,g["Content-Type"]):""},function(e){var n=e.status,o=(e.ok,e.statusText,e.data),i=e.headers,a={};!n||-1===n||p?(a.errMsg="request:fail",t(l)&&l(a)):(a.data=o,a.statusCode=n,a.header=i,t(c)&&c(a)),t(d)&&d(a)}),{abort:function(){p=!0}}},getStorage:function(e){var n=e.key,o=(e.data,e.success),i=e.fail,a=e.complete;$.getItem(n+j,function(e){if("success"===e.result){var r=e.data;$.getItem(n,function(e){if("success"===e.result){var n=e.data;r&&n?("String"!==r&&(n=JSON.parse(n)),t(o)&&o({errMsg:"getStorage:ok",data:n})):(e.errMsg="setStorage:fail",t(i)&&i(e))}else e.errMsg="setStorage:fail",t(i)&&i(e);t(a)&&a(e)})}else e.errMsg="setStorage:fail",t(i)&&i(e),t(a)&&a(e)})},setStorage:function(e){var n=e.key,o=e.data,i=e.success,a=e.fail,r=e.complete,s="String";"object"===(void 0===o?"undefined":F(o))&&(s="Object",o=JSON.stringify(o)),$.setItem(n,o,function(e){"success"===e.result?$.setItem(n+j,s,function(e){"success"===e.result?t(i)&&i({errMsg:"setStorage:ok"}):(e.errMsg="setStorage:fail",t(a)&&a(e))}):(e.errMsg="setStorage:fail",t(a)&&a(e)),t(r)&&r(e)})},removeStorage:function(e){var n=e.key,o=(e.data,e.success),i=e.fail,a=e.complete;$.removeItem(n,function(e){"success"===e.result?t(o)&&o({errMsg:"removeStorage:ok"}):(e.errMsg="removeStorage:fail",t(i)&&i(e)),t(a)&&a(e)}),$.removeItem(n+j)},clearStorage:function(t){t.key,t.data,t.success,t.fail,t.complete},getClipboardData:function(e){var n=e.success,o=(e.fail,e.complete);L.getString(function(e){var i={errMsg:"getClipboardData:ok",data:e.data};t(n)&&n(i),t(o)&&o(i)})},setClipboardData:function(e){var n=e.data,o=e.success,i=(e.fail,e.complete),a={errMsg:"setClipboardData:ok"};L.setString(n),t(o)&&o(a),t(i)&&i(a)},onSubNVueMessage:u,getSubNVueById:p,getCurrentSubNVue:function(){return p(i.webview.currentWebview().id)},$on:function(){return U(V(),"$on",[].concat(Array.prototype.slice.call(arguments)))},$off:function(){return U(V(),"$off",[].concat(Array.prototype.slice.call(arguments)))},$once:function(){return U(V(),"$once",[].concat(Array.prototype.slice.call(arguments)))},$emit:function(){return U(V(),"$emit",[].concat(Array.prototype.slice.call(arguments)))}}),W={os:{nvue:!0}},H={};return"undefined"!=typeof Proxy?H=new Proxy({},{get:function(t,e){if("os"===e)return{nvue:!0};if("postMessage"===e)return b;if("requireNativePlugin"===e)return I;if("onNavigationBarButtonTap"===e)return T;if("onNavigationBarSearchInputChanged"===e)return N;if("onNavigationBarSearchInputConfirmed"===e)return O;if("onNavigationBarSearchInputClicked"===e)return P;var n=J[e];return n||(n=S(e)),o(e)?a(n):n}}):(Object.keys(W).forEach(function(t){H[t]=W[t]}),H.postMessage=b,H.requireNativePlugin=I,H.onNavigationBarButtonTap=T,H.onNavigationBarSearchInputChanged=N,H.onNavigationBarSearchInputConfirmed=O,H.onNavigationBarSearchInputClicked=P,Object.keys({uploadFile:!0,downloadFile:!0,chooseImage:!0,previewImage:!0,getImageInfo:!0,saveImageToPhotosAlbum:!0,chooseVideo:!0,saveVideoToPhotosAlbum:!0,saveFile:!0,getSavedFileList:!0,getSavedFileInfo:!0,removeSavedFile:!0,openDocument:!0,setStorage:!0,getStorage:!0,getStorageInfo:!0,removeStorage:!0,clearStorage:!0,getLocation:!0,chooseLocation:!0,openLocation:!0,getSystemInfo:!0,getNetworkType:!0,makePhoneCall:!0,scanCode:!0,setScreenBrightness:!0,getScreenBrightness:!0,setKeepScreenOn:!0,vibrateLong:!0,vibrateShort:!0,addPhoneContact:!0,showToast:!0,showLoading:!0,hideToast:!0,hideLoading:!0,showModal:!0,showActionSheet:!0,setNavigationBarTitle:!0,setNavigationBarColor:!0,navigateTo:!0,redirectTo:!0,reLaunch:!0,switchTab:!0,navigateBack:!0,getProvider:!0,login:!0,getUserInfo:!0,share:!0,requestPayment:!0,subscribePush:!0,unsubscribePush:!0,onPush:!0,offPush:!0}).forEach(function(t){var e=J[t];e||(e=S(t)),o(t)?H[t]=a(e):H[t]=e})),H};var i=new WeexPlus(weex);e.weexPlus=i;var a=o(weex,i,BroadcastChannel);e.default=a},101:function(t,e,n){"use strict";n.r(e);var o=n(55),i=n.n(o);for(var a in o)"default"!==a&&function(t){n.d(e,t,function(){return o[t]})}(a);e.default=i.a},117:function(t,e,n){"use strict";n.r(e);n(4),n(8);var o=n(22);o.default.mpType="page",o.default.route="pages/API/map/map",o.default.el="#root",new Vue(o.default)},13:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];var o=e.map(function(t){var e=Object.prototype.toString.call(t);if("[object object]"===e.toLowerCase())try{t="---BEGIN:JSON---"+JSON.stringify(t)+"---END:JSON---"}catch(e){t="[object object]"}else if(null===t)t="---NULL---";else if(void 0===t)t="---UNDEFINED---";else{var n=function(t){var e=Object.prototype.toString.call(t);return e.substring(8,e.length-1)}(t).toUpperCase();t="NUMBER"===n||"BOOLEAN"===n?"---BEGIN:"+n+"---"+t+"---END:"+n+"---":String(t)}return t}),i="";if(o.length>1){var a=o.pop();i=o.join("---COMMA---"),0===a.indexOf(" at ")?i+=a:i+="---COMMA---"+a}else i=o[0];return i}},2:function(t,e,n){"use strict";function o(t,e,n,o,i,a,r,s){var u,c="function"==typeof t?t.options:t;if(e&&(c.render=e,c.staticRenderFns=n,c._compiled=!0),o&&(c.functional=!0),a&&(c._scopeId="data-v-"+a),r?(u=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(r)},c._ssrRegister=u):i&&(u=s?function(){i.call(this,this.$root.$options.shadowRoot)}:i),u)if(c.functional){c._injectStyles=u;var l=c.render;c.render=function(t,e){return u.call(e),l(t,e)}}else{var d=c.beforeCreate;c.beforeCreate=d?[].concat(d,u):[u]}return{exports:t,options:c}}n.d(e,"a",function(){return o})},22:function(t,e,n){"use strict";var o=n(84),i=n(53),a=n(2);var r=Object(a.a)(i.default,o.a,o.b,!1,null,null,"b20ab0d2");(function(){this.options.style||(this.options.style={}),Vue.prototype.__merge_style&&Vue.prototype.__$appStyle__&&Vue.prototype.__merge_style(Vue.prototype.__$appStyle__,this.options.style),Vue.prototype.__merge_style?Vue.prototype.__merge_style(n(101).default,this.options.style):Object.assign(this.options.style,n(101).default)}).call(r),e.default=r.exports},3:function(t,e,n){"use strict";n.r(e),e.default={appid:"__UNI__D366444"}},4:function(t,e,n){"use strict";(function(t,e){function o(t,e){return!e||"object"!=typeof e&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function i(t){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function a(t,e){return(a=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function u(t,e,n){return e&&s(t.prototype,e),n&&s(t,n),t}var c=n(5).version,l="__DC_STAT_UUID",d="__DC_UUID_VALUE";function p(){var n="";if("n"===h()){try{n=t.runtime.getDCloudId()}catch(t){n=""}return n}try{n=e.getStorageSync(l)}catch(t){n=d}if(!n){n=Date.now()+""+Math.floor(1e7*Math.random());try{e.setStorageSync(l,n)}catch(t){e.setStorageSync(l,d)}}return n}var f,g=function(){return parseInt((new Date).getTime()/1e3)},h=function(){return"n"},v=function(){var t="";return"wx"!==h()&&"qq"!==h()||e.canIUse("getAccountInfoSync")&&(t=e.getAccountInfoSync().miniProgram.appId||""),t},y=function(){return"n"===h()?t.runtime.version:""},_=function(){var e="";return"n"===h()&&(e=t.runtime.channel),e},m=0,b=0,S=function(){return m=g(),"n"===h()&&e.setStorageSync("__page__residence__time",g()),m},w=0,k=0,C=function(){var t=(new Date).getTime();return w=t,k=0,t},D=function(){var t=(new Date).getTime();return k=t,t},T=function(t){var e=0;return 0!==w&&(e=k-w),e=(e=parseInt(e/1e3))<1?1:e,"app"===t?{residenceTime:e,overtime:e>300}:"page"===t?{residenceTime:e,overtime:e>1800}:{residenceTime:e}},N=function(t){var e=getCurrentPages(),n=e[e.length-1].$vm,o=t._query,i=o&&"{}"!==JSON.stringify(o)?"?"+JSON.stringify(o):"";return t._query="","bd"===h()?n.$mp&&n.$mp.page.is+i:n.$scope&&n.$scope.route+i||n.$mp&&n.$mp.page.route+i},O=function(t){return!!("page"===t.mpType||t.$mp&&"page"===t.$mp.mpType||"page"===t.$options.mpType)},P=n(6).default,I=n(3).default||n(3),R=e.getSystemInfoSync(),M=function(){function n(){r(this,n),this.self="",this._retry=0,this._platform="",this._query={},this._navigationBarTitle={config:"",page:"",report:"",lt:""},this._operatingTime=0,this._reportingRequestData={1:[],11:[]},this.__prevent_triggering=!1,this.__licationHide=!1,this.__licationShow=!1,this._lastPageRoute="",this.statData={uuid:p(),ut:h(),mpn:v(),ak:I.appid,usv:c,v:y(),ch:_(),cn:"",pn:"",ct:"",t:g(),tt:"",p:"android"===R.platform?"a":"i",brand:R.brand||"",md:R.model,sv:R.system.replace(/(Android|iOS)\s/,""),mpsdk:R.SDKVersion||"",mpv:R.version||"",lang:R.language,pr:R.pixelRatio,ww:R.windowWidth,wh:R.windowHeight,sw:R.screenWidth,sh:R.screenHeight}}return u(n,[{key:"_applicationShow",value:function(){if(this.__licationHide){if(D(),T("app").overtime){var t={path:this._lastPageRoute,scene:this.statData.sc};this._sendReportRequest(t)}this.__licationHide=!1}}},{key:"_applicationHide",value:function(t,e){this.__licationHide=!0,D();var n=T();C();var o=N(this);this._sendHideRequest({urlref:o,urlref_ts:n.residenceTime},e)}},{key:"_pageShow",value:function(){var t,e,n=N(this),o=(t=getCurrentPages(),e=t[t.length-1].$vm,"bd"===h()?e.$mp&&e.$mp.page.is:e.$scope&&e.$scope.route||e.$mp&&e.$mp.page.route);if(this._navigationBarTitle.config=P&&P.pages[o]&&P.pages[o].titleNView&&P.pages[o].titleNView.titleText||P&&P.pages[o]&&P.pages[o].navigationBarTitleText||"",this.__licationShow)return C(),this.__licationShow=!1,void(this._lastPageRoute=n);if(D(),this._lastPageRoute=n,T("page").overtime){var i={path:this._lastPageRoute,scene:this.statData.sc};this._sendReportRequest(i)}C()}},{key:"_pageHide",value:function(){if(!this.__licationHide){D();var t=T("page");return this._sendPageRequest({url:this._lastPageRoute,urlref:this._lastPageRoute,urlref_ts:t.residenceTime}),void(this._navigationBarTitle={config:"",page:"",report:"",lt:""})}}},{key:"_login",value:function(){this._sendEventRequest({key:"login"},0)}},{key:"_share",value:function(){this._sendEventRequest({key:"share"},0)}},{key:"_payment",value:function(t){this._sendEventRequest({key:t},0)}},{key:"_sendReportRequest",value:function(t){this._navigationBarTitle.lt="1";var n,o,i=t.query&&"{}"!==JSON.stringify(t.query)?"?"+JSON.stringify(t.query):"";this.statData.lt="1",this.statData.url=t.path+i||"",this.statData.t=g(),this.statData.sc=function(t){var n=h(),o="";return t||("wx"===n&&(o=e.getLaunchOptionsSync().scene),o)}(t.scene),this.statData.fvts=(n=e.getStorageSync("First__Visit__Time"),o=0,n?o=n:(o=g(),e.setStorageSync("First__Visit__Time",o),e.removeStorageSync("Last__Visit__Time")),o),this.statData.lvts=function(){var t=e.getStorageSync("Last__Visit__Time"),n=0;return n=t||"",e.setStorageSync("Last__Visit__Time",g()),n}(),this.statData.tvc=function(){var t=e.getStorageSync("Total__Visit__Count"),n=1;return t&&(n=t,n++),e.setStorageSync("Total__Visit__Count",n),n}(),"n"===h()?this.getProperty():this.getNetworkInfo()}},{key:"_sendPageRequest",value:function(t){var e=t.url,n=t.urlref,o=t.urlref_ts;this._navigationBarTitle.lt="11";var i={ak:this.statData.ak,uuid:this.statData.uuid,lt:"11",ut:this.statData.ut,url:e,tt:this.statData.tt,urlref:n,urlref_ts:o,ch:this.statData.ch,usv:this.statData.usv,t:g(),p:this.statData.p};this.request(i)}},{key:"_sendHideRequest",value:function(t,e){var n=t.urlref,o=t.urlref_ts,i={ak:this.statData.ak,uuid:this.statData.uuid,lt:"3",ut:this.statData.ut,urlref:n,urlref_ts:o,ch:this.statData.ch,usv:this.statData.usv,t:g(),p:this.statData.p};this.request(i,e)}},{key:"_sendEventRequest",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.key,n=void 0===e?"":e,o=t.value,i=void 0===o?"":o,a=this._lastPageRoute,r={ak:this.statData.ak,uuid:this.statData.uuid,lt:"21",ut:this.statData.ut,url:a,ch:this.statData.ch,e_n:n,e_v:"object"==typeof i?JSON.stringify(i):i.toString(),usv:this.statData.usv,t:g(),p:this.statData.p};this.request(r)}},{key:"getNetworkInfo",value:function(){var t=this;e.getNetworkType({success:function(e){t.statData.net=e.networkType,t.getLocation()}})}},{key:"getProperty",value:function(){var e=this;t.runtime.getProperty(t.runtime.appid,function(t){e.statData.v=t.version||"",e.getNetworkInfo()})}},{key:"getLocation",value:function(){var t=this;I.getLocation?e.getLocation({type:"wgs84",geocode:!0,success:function(e){e.address&&(t.statData.cn=e.address.country,t.statData.pn=e.address.province,t.statData.ct=e.address.city),t.statData.lat=e.latitude,t.statData.lng=e.longitude,t.request(t.statData)}}):(this.statData.lat=0,this.statData.lng=0,this.request(this.statData))}},{key:"request",value:function(t,n){var o=this,i=g(),a=this._navigationBarTitle;t.ttn=a.page,t.ttpj=a.config,t.ttc=a.report;var r=this._reportingRequestData;if("n"===h()&&(r=e.getStorageSync("__UNI__STAT__DATA")||{}),r[t.lt]||(r[t.lt]=[]),r[t.lt].push(t),"n"===h()&&e.setStorageSync("__UNI__STAT__DATA",r),b=g(),"n"===h()&&(m=e.getStorageSync("__page__residence__time")),!(b-m<10)||n){var s=this._reportingRequestData;"n"===h()&&(s=e.getStorageSync("__UNI__STAT__DATA")),S();var u=[],l=[],d=[],p=function(t){s[t].forEach(function(e){var n=function(t){var e="";for(var n in t)e+=n+"="+t[n]+"&";return e.substr(0,e.length-1)}(e);0===t?u.push(n):3===t?d.push(n):l.push(n)})};for(var f in s)p(f);u.push.apply(u,l.concat(d));var v={usv:c,t:i,requests:JSON.stringify(u)};this._reportingRequestData={},"n"===h()&&e.removeStorageSync("__UNI__STAT__DATA"),"h5"!==t.ut?"n"!==h()||"a"!==this.statData.p?this._sendRequest(v):setTimeout(function(){o._sendRequest(v)},200):this.imageRequest(v)}}},{key:"_sendRequest",value:function(t){var n=this;e.request({url:"https://tongji.dcloud.io/uni/stat",method:"POST",data:t,success:function(){},fail:function(e){++n._retry<3&&setTimeout(function(){n._sendRequest(t)},1e3)}})}},{key:"imageRequest",value:function(t){var e=new Image,n=function(t){var e=Object.keys(t).sort(),n={},o="";for(var i in e)n[e[i]]=t[e[i]],o+=e[i]+"="+t[e[i]]+"&";return{sign:"",options:o.substr(0,o.length-1)}}(function(t){var e={};for(var n in t)e[n]=encodeURIComponent(t[n]);return e}(t)).options;e.src="https://tongji.dcloud.io/uni/stat.gif?"+n}},{key:"sendEvent",value:function(t,e){var n,o;(o=e,(n=t)?"string"!=typeof n?(console.error("uni.report [eventName] 参数类型错误,只能为 String 类型"),1):n.length>255?(console.error("uni.report [eventName] 参数长度不能大于 255"),1):"string"!=typeof o&&"object"!=typeof o?(console.error("uni.report [options] 参数类型错误,只能为 String 或 Object 类型"),1):"string"==typeof o&&o.length>255?(console.error("uni.report [options] 参数长度不能大于 255"),1):"title"===n&&"string"!=typeof o?(console.error("uni.report [eventName] 参数为 title 时，[options] 参数只能为 String 类型"),1):void 0:(console.error("uni.report 缺少 [eventName] 参数"),1))||("title"!==t?this._sendEventRequest({key:t,value:"object"==typeof e?JSON.stringify(e):e},1):this._navigationBarTitle.report=e)}}]),n}(),x=function(t){function n(){var t;return r(this,n),(t=o(this,i(n).call(this))).instance=null,"function"==typeof e.addInterceptor&&(t.addInterceptorInit(),t.interceptLogin(),t.interceptShare(!0),t.interceptRequestPayment()),t}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&a(t,e)}(n,M),u(n,null,[{key:"getInstance",value:function(){return this.instance||(this.instance=new n),this.instance}}]),u(n,[{key:"addInterceptorInit",value:function(){var t=this;e.addInterceptor("setNavigationBarTitle",{invoke:function(e){t._navigationBarTitle.page=e.title}})}},{key:"interceptLogin",value:function(){var t=this;e.addInterceptor("login",{complete:function(){t._login()}})}},{key:"interceptShare",value:function(t){var n=this;t?e.addInterceptor("share",{success:function(){n._share()},fail:function(){n._share()}}):n._share()}},{key:"interceptRequestPayment",value:function(){var t=this;e.addInterceptor("requestPayment",{success:function(){t._payment("pay_success")},fail:function(){t._payment("pay_fail")}})}},{key:"report",value:function(t,e){this.self=e,S(),this.__licationShow=!0,this._sendReportRequest(t,!0)}},{key:"load",value:function(t,e){if(!e.$scope&&!e.$mp){var n=getCurrentPages();e.$scope=n[n.length-1]}this.self=e,this._query=t}},{key:"show",value:function(t){this.self=t,O(t)?this._pageShow(t):this._applicationShow(t)}},{key:"ready",value:function(t){}},{key:"hide",value:function(t){this.self=t,O(t)?this._pageHide(t):this._applicationHide(t,!0)}},{key:"error",value:function(t){this._platform;var e="";e=t.message?t.stack:JSON.stringify(t);var n={ak:this.statData.ak,uuid:this.statData.uuid,lt:"31",ut:this.statData.ut,ch:this.statData.ch,mpsdk:this.statData.mpsdk,mpv:this.statData.mpv,v:this.statData.v,em:e,usv:this.statData.usv,t:g(),p:this.statData.p};this.request(n)}}]),n}().getInstance(),q=!1,F={onLaunch:function(t){x.report(t,this)},onReady:function(){x.ready(this)},onLoad:function(t){if(x.load(t,this),this.$scope&&this.$scope.onShareAppMessage){var e=this.$scope.onShareAppMessage;this.$scope.onShareAppMessage=function(t){return x.interceptShare(!1),e.call(this,t)}}},onShow:function(){q=!1,x.show(this)},onHide:function(){q=!0,x.hide(this)},onUnload:function(){q?q=!1:x.hide(this)},onError:function(t){x.error(t)}};((f=n(7)).default||f).mixin(F),e.report=function(t,e){x.sendEvent(t,e)}}).call(this,n(1).weexPlus,n(1).default)},5:function(t){t.exports={_from:"@dcloudio/uni-stat@next",_id:"@dcloudio/uni-stat@2.0.0-23720191024001",_inBundle:!1,_integrity:"sha512-vJEk493Vdb8KueNzR2otzDi23rfyRcQBo/t1R41MwNGPk+AUB94gh10+HVLo98DRcvMzkuVofz3KXTAfEx24iw==",_location:"/@dcloudio/uni-stat",_phantomChildren:{},_requested:{type:"tag",registry:!0,raw:"@dcloudio/uni-stat@next",name:"@dcloudio/uni-stat",escapedName:"@dcloudio%2funi-stat",scope:"@dcloudio",rawSpec:"next",saveSpec:null,fetchSpec:"next"},_requiredBy:["#USER","/","/@dcloudio/vue-cli-plugin-uni"],_resolved:"https://registry.npmjs.org/@dcloudio/uni-stat/-/uni-stat-2.0.0-23720191024001.tgz",_shasum:"18272814446a9bc6053bc92666ec7064a1767588",_spec:"@dcloudio/uni-stat@next",_where:"/Users/fxy/Documents/DCloud/HbuilderX-plugins/release/uniapp-cli",author:"",bugs:{url:"https://github.com/dcloudio/uni-app/issues"},bundleDependencies:!1,deprecated:!1,description:"",devDependencies:{"@babel/core":"^7.5.5","@babel/preset-env":"^7.5.5",eslint:"^6.1.0",rollup:"^1.19.3","rollup-plugin-babel":"^4.3.3","rollup-plugin-clear":"^2.0.7","rollup-plugin-commonjs":"^10.0.2","rollup-plugin-copy":"^3.1.0","rollup-plugin-eslint":"^7.0.0","rollup-plugin-json":"^4.0.0","rollup-plugin-node-resolve":"^5.2.0","rollup-plugin-replace":"^2.2.0","rollup-plugin-uglify":"^6.0.2"},files:["dist","package.json","LICENSE"],gitHead:"a725c04ef762e5df78a9a69d140c2666e0de05fc",homepage:"https://github.com/dcloudio/uni-app#readme",license:"Apache-2.0",main:"dist/index.js",name:"@dcloudio/uni-stat",repository:{type:"git",url:"git+https://github.com/dcloudio/uni-app.git",directory:"packages/uni-stat"},scripts:{build:"NODE_ENV=production rollup -c rollup.config.js",dev:"NODE_ENV=development rollup -w -c rollup.config.js"},version:"2.0.0-23720191024001"}},53:function(t,e,n){"use strict";var o=n(54),i=n.n(o);e.default=i.a},54:function(t,e,n){"use strict";(function(e,n){function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var i=[{id:0,latitude:39.989631,longitude:116.481018,title:"方恒国际 阜通东大街6号",zIndex:"1",rotate:0,width:20,height:20,anchor:{x:.5,y:1},callout:{content:"方恒国际 阜通东大街6号",color:"#00BFFF",fontSize:10,borderRadius:4,borderWidth:1,borderColor:"#333300",bgColor:"#CCFF99",padding:"5",display:"ALWAYS"}},{id:1,latitude:39.908692,longitude:116.397477,title:"天安门",zIndex:"1",iconPath:"/static/location.png",width:40,height:40,anchor:{x:.5,y:1},callout:{content:"首都北京\n天安门",color:"#00BFFF",fontSize:12,borderRadius:2,borderWidth:0,borderColor:"#333300",bgColor:"#CCFF11",padding:"1",display:"ALWAYS"}}],a=[{points:[{latitude:39.925539,longitude:116.279037},{latitude:39.925539,longitude:116.520285}],color:"#FFCCFF",width:7,dottedLine:!0,arrowLine:!0,borderColor:"#000000",borderWidth:2},{points:[{latitude:39.938698,longitude:116.275177},{latitude:39.966069,longitude:116.289253},{latitude:39.944226,longitude:116.306076},{latitude:39.966069,longitude:116.322899},{latitude:39.938698,longitude:116.336975}],color:"#CCFFFF",width:5,dottedLine:!0,arrowLine:!0,borderColor:"#CC0000",borderWidth:3}],r=[{points:[{latitude:39.781892,longitude:116.293413},{latitude:39.7876,longitude:116.391842},{latitude:39.733187,longitude:116.417932},{latitude:39.704653,longitude:116.338255}],fillColor:"#FFCCFF",strokeWidth:3,strokeColor:"#CC99CC",zIndex:11},{points:[{latitude:39.8876,longitude:116.518932},{latitude:39.781892,longitude:116.518932},{latitude:39.781892,longitude:116.428932},{latitude:39.8876,longitude:116.428932}],fillColor:"#CCFFFF",strokeWidth:5,strokeColor:"#CC0000",zIndex:3}],s=[{latitude:39.996441,longitude:116.411146,radius:15e3,strokeWidth:5,color:"#CCFFFF",fillColor:"#CC0000"},{latitude:40.096441,longitude:116.511146,radius:12e3,strokeWidth:3,color:"#CCFFFF",fillColor:"#FFCCFF"},{latitude:39.896441,longitude:116.311146,radius:9e3,strokeWidth:1,color:"#CCFFFF",fillColor:"#CC0000"}],u=[{latitude:39.989631,longitude:116.481018},{latitude:39.908692,longitude:116.397477}];t.exports={data:function(){var t;return o(t={location:{longitude:116.397477,latitude:39.908692},controls:[{id:1,position:{left:5,top:5,width:30,height:30},iconPath:"/static/logo.png",clickable:!0}],showLocation:!1,scale:13,showCompass:!0,enable3D:!0,enableOverlooking:!0},"enableOverlooking",!0),o(t,"enableZoom",!0),o(t,"enableScroll",!0),o(t,"enableRotate",!0),o(t,"enableSatellite",!1),o(t,"enableTraffic",!1),o(t,"polyline",[]),o(t,"markers",[]),o(t,"polygons",[]),o(t,"circles",[]),o(t,"includePoints",[]),o(t,"rotate",0),o(t,"skew",0),t},onLoad:function(){},onReady:function(){this.map=e.createMapContext("map1",this)},methods:{changeScale:function(){this.scale=9==this.scale?15:9},changeRotate:function(){this.rotate=90==this.rotate?0:90},changeSkew:function(){this.skew=30==this.skew?0:30},enableThreeD:function(t){this.enable3D=t.detail.value},changeShowCompass:function(t){this.showCompass=t.detail.value},changeEnableOverlooking:function(t){this.enableOverlooking=t.detail.value},changeEnableZoom:function(t){this.enableZoom=t.detail.value},changeEnableScroll:function(t){this.enableScroll=t.detail.value},changeEnableRotate:function(t){this.enableRotate=t.detail.value},changeEnableSatellite:function(t){this.enableSatellite=t.detail.value},changeEnableTraffic:function(t){this.enableTraffic=t.detail.value},addMarkers:function(){this.markers=i},addPolyline:function(){this.polyline=a},addPolygons:function(){this.polygons=r},addCircles:function(){this.circles=s},includePoint:function(){this.includePoints=u},getCenterLocation:function(){this.map.getCenterLocation(function(t){console.log(n(JSON.stringify(t)," at pages/API/map/map.nvue:329")),e.showModal({content:JSON.stringify(t)})})},getRegion:function(){this.map.getRegion(function(t){console.log(n(JSON.stringify(t)," at pages/API/map/map.nvue:337")),e.showModal({content:JSON.stringify(t)})})},translateMarker:function(){this.map.translateMarker({markerId:1,destination:{latitude:39.989631,longitude:116.481018},duration:2e3},function(t){console.log(n(JSON.stringify(t)," at pages/API/map/map.nvue:352")),e.showModal({content:JSON.stringify(t)})})},bindtap:function(t){e.showModal({content:JSON.stringify(t)})},bindmarkertap:function(t){e.showModal({content:JSON.stringify(t)})},bindcontroltap:function(t){e.showModal({content:JSON.stringify(t)})},bindcallouttap:function(t){e.showModal({content:JSON.stringify(t)})},bindupdated:function(t){e.showModal({content:JSON.stringify(t)})},bindregionchange:function(t){e.showModal({content:JSON.stringify(t)})},bindpoitap:function(t){e.showModal({content:JSON.stringify(t)})}}}}).call(this,n(1).default,n(13).default)},55:function(t,e){t.exports={content:{flex:1},map:{width:"750rpx",height:"500rpx",backgroundColor:"#666666"},scrollview:{flex:1,paddingTop:"10",paddingRight:"10",paddingBottom:"10",paddingLeft:"10"},"list-item":{flexDirection:"row",flexWrap:"nowrap",alignItems:"center",paddingTop:"5",paddingRight:"0",paddingBottom:"5",paddingLeft:"0"},"list-text":{flex:1},button:{marginTop:"5",marginBottom:"5"}}},6:function(t,e,n){"use strict";n.r(e),e.default={pages:{},globalStyle:{}}},7:function(t,e){t.exports=Vue},8:function(t,e,n){Vue.prototype.__$appStyle__={},Vue.prototype.__merge_style&&Vue.prototype.__merge_style(n(9).default,Vue.prototype.__$appStyle__)},84:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("scroll-view",{staticStyle:{flexDirection:"column"},attrs:{scrollY:!0,enableBackToTop:!0,bubble:"true"}},[n("view",{staticClass:["content"]},[n("map",{ref:"map1",staticClass:["map"],attrs:{id:"map1",controls:t.controls,scale:t.scale,longitude:t.location.longitude,latitude:t.location.latitude,showLocation:t.showLocation,enable3D:t.enable3D,rotate:t.rotate,skew:t.skew,showCompass:t.showCompass,enableOverlooking:t.enableOverlooking,enableZoom:t.enableZoom,enableScroll:t.enableScroll,enableRotate:t.enableRotate,enableSatellite:t.enableSatellite,enableTraffic:t.enableTraffic,markers:t.markers,polyline:t.polyline,circles:t.circles,polygons:t.polygons,includePoints:t.includePoints}}),n("scroll-view",{staticClass:["scrollview"],attrs:{scrollY:"true"}},[n("button",{staticClass:["button"],on:{click:t.changeScale}},[t._v("changeScale")]),n("button",{staticClass:["button"],on:{click:t.changeRotate}},[t._v("changeRotate")]),n("button",{staticClass:["button"],on:{click:t.changeSkew}},[t._v("skew")]),n("button",{staticClass:["button"],on:{click:t.addMarkers}},[t._v("addMarkers")]),n("button",{staticClass:["button"],on:{click:t.addPolyline}},[t._v("addPolyline")]),n("button",{staticClass:["button"],on:{click:t.addPolygons}},[t._v("addPolygons")]),n("button",{staticClass:["button"],on:{click:t.addCircles}},[t._v("addCircles")]),n("button",{staticClass:["button"],on:{click:t.includePoint}},[t._v("includePoints")]),n("button",{staticClass:["button"],on:{click:t.getCenterLocation}},[t._v("getCenterLocation")]),n("button",{staticClass:["button"],on:{click:t.getRegion}},[t._v("getRegion")]),n("button",{staticClass:["button"],on:{click:t.translateMarker}},[t._v("translateMarker")])],1)],1)])},i=[];n.d(e,"a",function(){return o}),n.d(e,"b",function(){return i})},9:function(t,e,n){"use strict";n.r(e);var o=n(0),i=n.n(o);for(var a in o)"default"!==a&&function(t){n.d(e,t,function(){return o[t]})}(a);e.default=i.a}});