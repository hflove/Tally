!function(t){var e={};function n(a){if(e[a])return e[a].exports;var i=e[a]={i:a,l:!1,exports:{}};return t[a].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=e,n.d=function(t,e,a){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(a,i,function(e){return t[e]}.bind(null,i));return a},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=109)}({0:function(t,e){t.exports={}},1:function(t,e,n){"use strict";var a;Object.defineProperty(e,"__esModule",{value:!0}),e.weexPlus=e.default=void 0,a="function"==typeof getUni?getUni:function(){var t=function(t){return"function"==typeof t},e=/^\$|^on|^create|Sync$|Manager$|^pause/,n=["os","getCurrentSubNVue","getSubNVueById","stopRecord","stopVoice","stopBackgroundAudio","stopPullDownRefresh","hideKeyboard","hideToast","hideLoading","showNavigationBarLoading","hideNavigationBarLoading","canIUse","navigateBack","closeSocket","pageScrollTo","drawCanvas"],a=function(t){return!(e.test(t)&&"createBLEConnection"!==t||~n.indexOf(t))},o=function(e){return function(){for(var n=arguments.length,a=Array(n>1?n-1:0),i=1;i<n;i++)a[i-1]=arguments[i];var o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t(o.success)||t(o.fail)||t(o.complete)?e.apply(void 0,[o].concat(a)):new Promise(function(t,n){e.apply(void 0,[Object.assign({},o,{success:t,fail:n})].concat(a)),Promise.prototype.finally=function(t){var e=this.constructor;return this.then(function(n){return e.resolve(t()).then(function(){return n})},function(n){return e.resolve(t()).then(function(){throw n})})}}).then(function(t){return[null,t]}).catch(function(t){return[t]})}},r=[],s=void 0;function u(t){r.forEach(function(e){return e({origin:s,data:t})})}var c=i.webview.currentWebview().id,l=new BroadcastChannel("UNI-APP-SUBNVUE");function p(t){t.$processed=!0;var e=i.webview.currentWebview().id===t.id,n="uniNView"===t.__uniapp_origin_type&&t.__uniapp_origin_id,a=t.id;if(t.postMessage=function(t){n?l.postMessage({data:t,to:e?n:a}):b({type:"UniAppSubNVue",data:t})},t.onMessage=function(t){r.push(t)},t.__uniapp_mask_id){s=t.__uniapp_host;var o=t.__uniapp_mask,u=i.webview.getWebviewById(t.__uniapp_mask_id);u=u.parent()||u;var c=t.show,p=t.hide,f=t.close,d=function(){u.setStyle({mask:"none"})};t.show=function(){u.setStyle({mask:o});for(var e=arguments.length,n=Array(e),a=0;a<e;a++)n[a]=arguments[a];return c.apply(t,n)},t.hide=function(){d();for(var e=arguments.length,n=Array(e),a=0;a<e;a++)n[a]=arguments[a];return p.apply(t,n)},t.close=function(){d();for(var e=arguments.length,n=Array(e),a=0;a<e;a++)n[a]=arguments[a];return f.apply(t,n)}}}function f(t){var e=i.webview.getWebviewById(t);return e&&!e.$processed&&p(e),e}l.onmessage=function(t){t.data.to===c&&u(t.data.data)};var d=weex.requireModule("plus"),g=weex.requireModule("globalEvent"),h=0,v={},_="__uniapp__service";g.addEventListener("plusMessage",function(t){"UniAppJsApi"===t.data.type?y(t.data.id,t.data.data):"UniAppSubNVue"===t.data.type?u(t.data.data,t.data.options):"onNavigationBarButtonTap"===t.data.type?"function"==typeof w&&w(t.data.data):"onNavigationBarSearchInputChanged"===t.data.type?"function"==typeof k&&k(t.data.data):"onNavigationBarSearchInputConfirmed"===t.data.type?"function"==typeof T&&T(t.data.data):"onNavigationBarSearchInputClicked"===t.data.type&&"function"==typeof D&&D(t.data.data)});var y=function(t,e){var n=v[t];n?(n(e),n.keepAlive||delete v[t]):console.error("callback["+t+"] is undefined")},m=function(e){var n,a,i=e.id,o=e.type,r=e.params;v[i]=(a=function(e){t(n)?n(e):n&&(~e.errMsg.indexOf(":ok")?t(n.success)&&n.success(e):~e.errMsg.indexOf(":fail")&&t(n.fail)&&n.fail(e),t(n.complete)&&n.complete(e))},(t(n=r)||n&&t(n.callback))&&(a.keepAlive=!0),a),d.postMessage({id:i,type:o,params:r},_)};function b(t){d.postMessage(t,_)}var S=function(t){return function(e){m({id:h++,type:t,params:e})}},w=void 0,k=void 0,T=void 0,D=void 0;function C(t){w=t}function x(t){k=t}function R(t){T=t}function I(t){D=t}function N(t){return weex.requireModule(t)}var P=weex.requireModule("dom"),O=weex.requireModule("globalEvent"),q=[];function $(t){"function"==typeof t&&(this.isUniAppReady?t():q.push(t))}O.addEventListener("plusMessage",function(t){"UniAppReady"===t.data.type&&($.isUniAppReady=!0,q.length&&(q.forEach(function(t){return t()}),q=[]))});var E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},B=weex.requireModule("stream"),j="GET",M=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:j,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"application/x-www-form-urlencoded";return"object"===(void 0===t?"undefined":E(t))?"POST"===e.toUpperCase()&&"application/json"===n.toLowerCase()?JSON.stringify(t):Object.keys(t).map(function(e){return encodeURIComponent(e)+"="+encodeURIComponent(t[e])}).join("&"):t},A=weex.requireModule("plusstorage"),V="__TYPE",L=weex.requireModule("clipboard"),U=function(){if("function"==typeof getUniEmitter)return getUniEmitter;var t={$on:function(){console.warn("uni.$on failed")},$off:function(){console.warn("uni.$off failed")},$once:function(){console.warn("uni.$once failed")},$emit:function(){console.warn("uni.$emit failed")}};return function(){return t}}();function H(t,e,n){return t[e].apply(t,n)}var F=Object.freeze({loadFontFace:function(e){var n=e.family,a=e.source,i=(e.desc,e.success),o=(e.fail,e.complete);P.addRule("fontFace",{fontFamily:n,src:a.replace(/"/g,"'")});var r={errMsg:"loadFontFace:ok",status:"loaded"};t(i)&&i(r),t(o)&&o(r)},ready:$,request:function(e){var n=e.url,a=e.data,i=e.header,o=e.method,r=void 0===o?"GET":o,s=e.dataType,u=void 0===s?"json":s,c=(e.responseType,e.success),l=e.fail,p=e.complete,f=!1,d=!1,g={};if(i)for(var h in i)d||"content-type"!==h.toLowerCase()?g[h]=i[h]:(d=!0,g["Content-Type"]=i[h]);return r===j&&a&&(n=n+(~n.indexOf("?")?"&"===n.substr(-1)||"?"===n.substr(-1)?"":"&":"?")+M(a)),B.fetch({url:n,method:r,headers:g,type:"json"===u?"json":"text",body:r!==j?M(a,r,g["Content-Type"]):""},function(e){var n=e.status,a=(e.ok,e.statusText,e.data),i=e.headers,o={};!n||-1===n||f?(o.errMsg="request:fail",t(l)&&l(o)):(o.data=a,o.statusCode=n,o.header=i,t(c)&&c(o)),t(p)&&p(o)}),{abort:function(){f=!0}}},getStorage:function(e){var n=e.key,a=(e.data,e.success),i=e.fail,o=e.complete;A.getItem(n+V,function(e){if("success"===e.result){var r=e.data;A.getItem(n,function(e){if("success"===e.result){var n=e.data;r&&n?("String"!==r&&(n=JSON.parse(n)),t(a)&&a({errMsg:"getStorage:ok",data:n})):(e.errMsg="setStorage:fail",t(i)&&i(e))}else e.errMsg="setStorage:fail",t(i)&&i(e);t(o)&&o(e)})}else e.errMsg="setStorage:fail",t(i)&&i(e),t(o)&&o(e)})},setStorage:function(e){var n=e.key,a=e.data,i=e.success,o=e.fail,r=e.complete,s="String";"object"===(void 0===a?"undefined":E(a))&&(s="Object",a=JSON.stringify(a)),A.setItem(n,a,function(e){"success"===e.result?A.setItem(n+V,s,function(e){"success"===e.result?t(i)&&i({errMsg:"setStorage:ok"}):(e.errMsg="setStorage:fail",t(o)&&o(e))}):(e.errMsg="setStorage:fail",t(o)&&o(e)),t(r)&&r(e)})},removeStorage:function(e){var n=e.key,a=(e.data,e.success),i=e.fail,o=e.complete;A.removeItem(n,function(e){"success"===e.result?t(a)&&a({errMsg:"removeStorage:ok"}):(e.errMsg="removeStorage:fail",t(i)&&i(e)),t(o)&&o(e)}),A.removeItem(n+V)},clearStorage:function(t){t.key,t.data,t.success,t.fail,t.complete},getClipboardData:function(e){var n=e.success,a=(e.fail,e.complete);L.getString(function(e){var i={errMsg:"getClipboardData:ok",data:e.data};t(n)&&n(i),t(a)&&a(i)})},setClipboardData:function(e){var n=e.data,a=e.success,i=(e.fail,e.complete),o={errMsg:"setClipboardData:ok"};L.setString(n),t(a)&&a(o),t(i)&&i(o)},onSubNVueMessage:u,getSubNVueById:f,getCurrentSubNVue:function(){return f(i.webview.currentWebview().id)},$on:function(){return H(U(),"$on",[].concat(Array.prototype.slice.call(arguments)))},$off:function(){return H(U(),"$off",[].concat(Array.prototype.slice.call(arguments)))},$once:function(){return H(U(),"$once",[].concat(Array.prototype.slice.call(arguments)))},$emit:function(){return H(U(),"$emit",[].concat(Array.prototype.slice.call(arguments)))}}),J={os:{nvue:!0}},W={};return"undefined"!=typeof Proxy?W=new Proxy({},{get:function(t,e){if("os"===e)return{nvue:!0};if("postMessage"===e)return b;if("requireNativePlugin"===e)return N;if("onNavigationBarButtonTap"===e)return C;if("onNavigationBarSearchInputChanged"===e)return x;if("onNavigationBarSearchInputConfirmed"===e)return R;if("onNavigationBarSearchInputClicked"===e)return I;var n=F[e];return n||(n=S(e)),a(e)?o(n):n}}):(Object.keys(J).forEach(function(t){W[t]=J[t]}),W.postMessage=b,W.requireNativePlugin=N,W.onNavigationBarButtonTap=C,W.onNavigationBarSearchInputChanged=x,W.onNavigationBarSearchInputConfirmed=R,W.onNavigationBarSearchInputClicked=I,Object.keys({uploadFile:!0,downloadFile:!0,chooseImage:!0,previewImage:!0,getImageInfo:!0,saveImageToPhotosAlbum:!0,chooseVideo:!0,saveVideoToPhotosAlbum:!0,saveFile:!0,getSavedFileList:!0,getSavedFileInfo:!0,removeSavedFile:!0,openDocument:!0,setStorage:!0,getStorage:!0,getStorageInfo:!0,removeStorage:!0,clearStorage:!0,getLocation:!0,chooseLocation:!0,openLocation:!0,getSystemInfo:!0,getNetworkType:!0,makePhoneCall:!0,scanCode:!0,setScreenBrightness:!0,getScreenBrightness:!0,setKeepScreenOn:!0,vibrateLong:!0,vibrateShort:!0,addPhoneContact:!0,showToast:!0,showLoading:!0,hideToast:!0,hideLoading:!0,showModal:!0,showActionSheet:!0,setNavigationBarTitle:!0,setNavigationBarColor:!0,navigateTo:!0,redirectTo:!0,reLaunch:!0,switchTab:!0,navigateBack:!0,getProvider:!0,login:!0,getUserInfo:!0,share:!0,requestPayment:!0,subscribePush:!0,unsubscribePush:!0,onPush:!0,offPush:!0}).forEach(function(t){var e=F[t];e||(e=S(t)),a(t)?W[t]=o(e):W[t]=e})),W};var i=new WeexPlus(weex);e.weexPlus=i;var o=a(weex,i,BroadcastChannel);e.default=o},109:function(t,e,n){"use strict";n.r(e);n(4),n(8);var a=n(15);a.default.mpType="page",a.default.route="pages/component/map/map",a.default.el="#root",new Vue(a.default)},15:function(t,e,n){"use strict";var a=n(89),i=n(29),o=n(2);var r=Object(o.a)(i.default,a.a,a.b,!1,null,null,"24f9e398");(function(){this.options.style||(this.options.style={}),Vue.prototype.__merge_style&&Vue.prototype.__$appStyle__&&Vue.prototype.__merge_style(Vue.prototype.__$appStyle__,this.options.style),Vue.prototype.__merge_style?Vue.prototype.__merge_style(n(93).default,this.options.style):Object.assign(this.options.style,n(93).default)}).call(r),e.default=r.exports},2:function(t,e,n){"use strict";function a(t,e,n,a,i,o,r,s){var u,c="function"==typeof t?t.options:t;if(e&&(c.render=e,c.staticRenderFns=n,c._compiled=!0),a&&(c.functional=!0),o&&(c._scopeId="data-v-"+o),r?(u=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(r)},c._ssrRegister=u):i&&(u=s?function(){i.call(this,this.$root.$options.shadowRoot)}:i),u)if(c.functional){c._injectStyles=u;var l=c.render;c.render=function(t,e){return u.call(e),l(t,e)}}else{var p=c.beforeCreate;c.beforeCreate=p?[].concat(p,u):[u]}return{exports:t,options:c}}n.d(e,"a",function(){return a})},29:function(t,e,n){"use strict";var a=n(30),i=n.n(a);e.default=i.a},3:function(t,e,n){"use strict";n.r(e),e.default={appid:"__UNI__D366444"}},30:function(t,e,n){"use strict";function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}t.exports={data:function(){var t;return a(t={location:{longitude:116.397477,latitude:39.908692},controls:[{id:1,position:{left:5,top:5,width:30,height:30},iconPath:"/static/logo.png",clickable:!0}],showLocation:!1,scale:13,showCompass:!0,enable3D:!0,enableOverlooking:!0},"enableOverlooking",!0),a(t,"enableZoom",!0),a(t,"enableScroll",!0),a(t,"enableRotate",!0),a(t,"enableSatellite",!1),a(t,"enableTraffic",!1),a(t,"polyline",[]),a(t,"markers",[]),a(t,"polygons",[]),a(t,"circles",[]),a(t,"includePoints",[]),a(t,"rotate",0),a(t,"skew",0),t},onLoad:function(){},methods:{changeScale:function(){this.scale=9==this.scale?15:9},changeRotate:function(){this.rotate=90==this.rotate?0:90},changeSkew:function(){this.skew=30==this.skew?0:30},enableThreeD:function(t){this.enable3D=t.detail.value},changeShowCompass:function(t){this.showCompass=t.detail.value},changeEnableOverlooking:function(t){this.enableOverlooking=t.detail.value},changeEnableZoom:function(t){this.enableZoom=t.detail.value},changeEnableScroll:function(t){this.enableScroll=t.detail.value},changeEnableRotate:function(t){this.enableRotate=t.detail.value},changeEnableSatellite:function(t){this.enableSatellite=t.detail.value},changeEnableTraffic:function(t){this.enableTraffic=t.detail.value}}}},31:function(t,e){t.exports={content:{flex:1},map:{width:"750rpx",height:"500rpx",backgroundColor:"#666666"},scrollview:{flex:1,paddingTop:"10",paddingRight:"10",paddingBottom:"10",paddingLeft:"10"},"list-item":{flexDirection:"row",flexWrap:"nowrap",alignItems:"center",paddingTop:"5",paddingRight:"0",paddingBottom:"5",paddingLeft:"0"},"list-text":{flex:1},button:{marginTop:"5",marginBottom:"5"}}},4:function(t,e,n){"use strict";(function(t,e){function a(t,e){return!e||"object"!=typeof e&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function i(t){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function o(t,e){return(o=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function u(t,e,n){return e&&s(t.prototype,e),n&&s(t,n),t}var c=n(5).version,l="__DC_STAT_UUID",p="__DC_UUID_VALUE";function f(){var n="";if("n"===h()){try{n=t.runtime.getDCloudId()}catch(t){n=""}return n}try{n=e.getStorageSync(l)}catch(t){n=p}if(!n){n=Date.now()+""+Math.floor(1e7*Math.random());try{e.setStorageSync(l,n)}catch(t){e.setStorageSync(l,p)}}return n}var d,g=function(){return parseInt((new Date).getTime()/1e3)},h=function(){return"n"},v=function(){var t="";return"wx"!==h()&&"qq"!==h()||e.canIUse("getAccountInfoSync")&&(t=e.getAccountInfoSync().miniProgram.appId||""),t},_=function(){return"n"===h()?t.runtime.version:""},y=function(){var e="";return"n"===h()&&(e=t.runtime.channel),e},m=0,b=0,S=function(){return m=g(),"n"===h()&&e.setStorageSync("__page__residence__time",g()),m},w=0,k=0,T=function(){var t=(new Date).getTime();return w=t,k=0,t},D=function(){var t=(new Date).getTime();return k=t,t},C=function(t){var e=0;return 0!==w&&(e=k-w),e=(e=parseInt(e/1e3))<1?1:e,"app"===t?{residenceTime:e,overtime:e>300}:"page"===t?{residenceTime:e,overtime:e>1800}:{residenceTime:e}},x=function(t){var e=getCurrentPages(),n=e[e.length-1].$vm,a=t._query,i=a&&"{}"!==JSON.stringify(a)?"?"+JSON.stringify(a):"";return t._query="","bd"===h()?n.$mp&&n.$mp.page.is+i:n.$scope&&n.$scope.route+i||n.$mp&&n.$mp.page.route+i},R=function(t){return!!("page"===t.mpType||t.$mp&&"page"===t.$mp.mpType||"page"===t.$options.mpType)},I=n(6).default,N=n(3).default||n(3),P=e.getSystemInfoSync(),O=function(){function n(){r(this,n),this.self="",this._retry=0,this._platform="",this._query={},this._navigationBarTitle={config:"",page:"",report:"",lt:""},this._operatingTime=0,this._reportingRequestData={1:[],11:[]},this.__prevent_triggering=!1,this.__licationHide=!1,this.__licationShow=!1,this._lastPageRoute="",this.statData={uuid:f(),ut:h(),mpn:v(),ak:N.appid,usv:c,v:_(),ch:y(),cn:"",pn:"",ct:"",t:g(),tt:"",p:"android"===P.platform?"a":"i",brand:P.brand||"",md:P.model,sv:P.system.replace(/(Android|iOS)\s/,""),mpsdk:P.SDKVersion||"",mpv:P.version||"",lang:P.language,pr:P.pixelRatio,ww:P.windowWidth,wh:P.windowHeight,sw:P.screenWidth,sh:P.screenHeight}}return u(n,[{key:"_applicationShow",value:function(){if(this.__licationHide){if(D(),C("app").overtime){var t={path:this._lastPageRoute,scene:this.statData.sc};this._sendReportRequest(t)}this.__licationHide=!1}}},{key:"_applicationHide",value:function(t,e){this.__licationHide=!0,D();var n=C();T();var a=x(this);this._sendHideRequest({urlref:a,urlref_ts:n.residenceTime},e)}},{key:"_pageShow",value:function(){var t,e,n=x(this),a=(t=getCurrentPages(),e=t[t.length-1].$vm,"bd"===h()?e.$mp&&e.$mp.page.is:e.$scope&&e.$scope.route||e.$mp&&e.$mp.page.route);if(this._navigationBarTitle.config=I&&I.pages[a]&&I.pages[a].titleNView&&I.pages[a].titleNView.titleText||I&&I.pages[a]&&I.pages[a].navigationBarTitleText||"",this.__licationShow)return T(),this.__licationShow=!1,void(this._lastPageRoute=n);if(D(),this._lastPageRoute=n,C("page").overtime){var i={path:this._lastPageRoute,scene:this.statData.sc};this._sendReportRequest(i)}T()}},{key:"_pageHide",value:function(){if(!this.__licationHide){D();var t=C("page");return this._sendPageRequest({url:this._lastPageRoute,urlref:this._lastPageRoute,urlref_ts:t.residenceTime}),void(this._navigationBarTitle={config:"",page:"",report:"",lt:""})}}},{key:"_login",value:function(){this._sendEventRequest({key:"login"},0)}},{key:"_share",value:function(){this._sendEventRequest({key:"share"},0)}},{key:"_payment",value:function(t){this._sendEventRequest({key:t},0)}},{key:"_sendReportRequest",value:function(t){this._navigationBarTitle.lt="1";var n,a,i=t.query&&"{}"!==JSON.stringify(t.query)?"?"+JSON.stringify(t.query):"";this.statData.lt="1",this.statData.url=t.path+i||"",this.statData.t=g(),this.statData.sc=function(t){var n=h(),a="";return t||("wx"===n&&(a=e.getLaunchOptionsSync().scene),a)}(t.scene),this.statData.fvts=(n=e.getStorageSync("First__Visit__Time"),a=0,n?a=n:(a=g(),e.setStorageSync("First__Visit__Time",a),e.removeStorageSync("Last__Visit__Time")),a),this.statData.lvts=function(){var t=e.getStorageSync("Last__Visit__Time"),n=0;return n=t||"",e.setStorageSync("Last__Visit__Time",g()),n}(),this.statData.tvc=function(){var t=e.getStorageSync("Total__Visit__Count"),n=1;return t&&(n=t,n++),e.setStorageSync("Total__Visit__Count",n),n}(),"n"===h()?this.getProperty():this.getNetworkInfo()}},{key:"_sendPageRequest",value:function(t){var e=t.url,n=t.urlref,a=t.urlref_ts;this._navigationBarTitle.lt="11";var i={ak:this.statData.ak,uuid:this.statData.uuid,lt:"11",ut:this.statData.ut,url:e,tt:this.statData.tt,urlref:n,urlref_ts:a,ch:this.statData.ch,usv:this.statData.usv,t:g(),p:this.statData.p};this.request(i)}},{key:"_sendHideRequest",value:function(t,e){var n=t.urlref,a=t.urlref_ts,i={ak:this.statData.ak,uuid:this.statData.uuid,lt:"3",ut:this.statData.ut,urlref:n,urlref_ts:a,ch:this.statData.ch,usv:this.statData.usv,t:g(),p:this.statData.p};this.request(i,e)}},{key:"_sendEventRequest",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.key,n=void 0===e?"":e,a=t.value,i=void 0===a?"":a,o=this._lastPageRoute,r={ak:this.statData.ak,uuid:this.statData.uuid,lt:"21",ut:this.statData.ut,url:o,ch:this.statData.ch,e_n:n,e_v:"object"==typeof i?JSON.stringify(i):i.toString(),usv:this.statData.usv,t:g(),p:this.statData.p};this.request(r)}},{key:"getNetworkInfo",value:function(){var t=this;e.getNetworkType({success:function(e){t.statData.net=e.networkType,t.getLocation()}})}},{key:"getProperty",value:function(){var e=this;t.runtime.getProperty(t.runtime.appid,function(t){e.statData.v=t.version||"",e.getNetworkInfo()})}},{key:"getLocation",value:function(){var t=this;N.getLocation?e.getLocation({type:"wgs84",geocode:!0,success:function(e){e.address&&(t.statData.cn=e.address.country,t.statData.pn=e.address.province,t.statData.ct=e.address.city),t.statData.lat=e.latitude,t.statData.lng=e.longitude,t.request(t.statData)}}):(this.statData.lat=0,this.statData.lng=0,this.request(this.statData))}},{key:"request",value:function(t,n){var a=this,i=g(),o=this._navigationBarTitle;t.ttn=o.page,t.ttpj=o.config,t.ttc=o.report;var r=this._reportingRequestData;if("n"===h()&&(r=e.getStorageSync("__UNI__STAT__DATA")||{}),r[t.lt]||(r[t.lt]=[]),r[t.lt].push(t),"n"===h()&&e.setStorageSync("__UNI__STAT__DATA",r),b=g(),"n"===h()&&(m=e.getStorageSync("__page__residence__time")),!(b-m<10)||n){var s=this._reportingRequestData;"n"===h()&&(s=e.getStorageSync("__UNI__STAT__DATA")),S();var u=[],l=[],p=[],f=function(t){s[t].forEach(function(e){var n=function(t){var e="";for(var n in t)e+=n+"="+t[n]+"&";return e.substr(0,e.length-1)}(e);0===t?u.push(n):3===t?p.push(n):l.push(n)})};for(var d in s)f(d);u.push.apply(u,l.concat(p));var v={usv:c,t:i,requests:JSON.stringify(u)};this._reportingRequestData={},"n"===h()&&e.removeStorageSync("__UNI__STAT__DATA"),"h5"!==t.ut?"n"!==h()||"a"!==this.statData.p?this._sendRequest(v):setTimeout(function(){a._sendRequest(v)},200):this.imageRequest(v)}}},{key:"_sendRequest",value:function(t){var n=this;e.request({url:"https://tongji.dcloud.io/uni/stat",method:"POST",data:t,success:function(){},fail:function(e){++n._retry<3&&setTimeout(function(){n._sendRequest(t)},1e3)}})}},{key:"imageRequest",value:function(t){var e=new Image,n=function(t){var e=Object.keys(t).sort(),n={},a="";for(var i in e)n[e[i]]=t[e[i]],a+=e[i]+"="+t[e[i]]+"&";return{sign:"",options:a.substr(0,a.length-1)}}(function(t){var e={};for(var n in t)e[n]=encodeURIComponent(t[n]);return e}(t)).options;e.src="https://tongji.dcloud.io/uni/stat.gif?"+n}},{key:"sendEvent",value:function(t,e){var n,a;(a=e,(n=t)?"string"!=typeof n?(console.error("uni.report [eventName] 参数类型错误,只能为 String 类型"),1):n.length>255?(console.error("uni.report [eventName] 参数长度不能大于 255"),1):"string"!=typeof a&&"object"!=typeof a?(console.error("uni.report [options] 参数类型错误,只能为 String 或 Object 类型"),1):"string"==typeof a&&a.length>255?(console.error("uni.report [options] 参数长度不能大于 255"),1):"title"===n&&"string"!=typeof a?(console.error("uni.report [eventName] 参数为 title 时，[options] 参数只能为 String 类型"),1):void 0:(console.error("uni.report 缺少 [eventName] 参数"),1))||("title"!==t?this._sendEventRequest({key:t,value:"object"==typeof e?JSON.stringify(e):e},1):this._navigationBarTitle.report=e)}}]),n}(),q=function(t){function n(){var t;return r(this,n),(t=a(this,i(n).call(this))).instance=null,"function"==typeof e.addInterceptor&&(t.addInterceptorInit(),t.interceptLogin(),t.interceptShare(!0),t.interceptRequestPayment()),t}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&o(t,e)}(n,O),u(n,null,[{key:"getInstance",value:function(){return this.instance||(this.instance=new n),this.instance}}]),u(n,[{key:"addInterceptorInit",value:function(){var t=this;e.addInterceptor("setNavigationBarTitle",{invoke:function(e){t._navigationBarTitle.page=e.title}})}},{key:"interceptLogin",value:function(){var t=this;e.addInterceptor("login",{complete:function(){t._login()}})}},{key:"interceptShare",value:function(t){var n=this;t?e.addInterceptor("share",{success:function(){n._share()},fail:function(){n._share()}}):n._share()}},{key:"interceptRequestPayment",value:function(){var t=this;e.addInterceptor("requestPayment",{success:function(){t._payment("pay_success")},fail:function(){t._payment("pay_fail")}})}},{key:"report",value:function(t,e){this.self=e,S(),this.__licationShow=!0,this._sendReportRequest(t,!0)}},{key:"load",value:function(t,e){if(!e.$scope&&!e.$mp){var n=getCurrentPages();e.$scope=n[n.length-1]}this.self=e,this._query=t}},{key:"show",value:function(t){this.self=t,R(t)?this._pageShow(t):this._applicationShow(t)}},{key:"ready",value:function(t){}},{key:"hide",value:function(t){this.self=t,R(t)?this._pageHide(t):this._applicationHide(t,!0)}},{key:"error",value:function(t){this._platform;var e="";e=t.message?t.stack:JSON.stringify(t);var n={ak:this.statData.ak,uuid:this.statData.uuid,lt:"31",ut:this.statData.ut,ch:this.statData.ch,mpsdk:this.statData.mpsdk,mpv:this.statData.mpv,v:this.statData.v,em:e,usv:this.statData.usv,t:g(),p:this.statData.p};this.request(n)}}]),n}().getInstance(),$=!1,E={onLaunch:function(t){q.report(t,this)},onReady:function(){q.ready(this)},onLoad:function(t){if(q.load(t,this),this.$scope&&this.$scope.onShareAppMessage){var e=this.$scope.onShareAppMessage;this.$scope.onShareAppMessage=function(t){return q.interceptShare(!1),e.call(this,t)}}},onShow:function(){$=!1,q.show(this)},onHide:function(){$=!0,q.hide(this)},onUnload:function(){$?$=!1:q.hide(this)},onError:function(t){q.error(t)}};((d=n(7)).default||d).mixin(E),e.report=function(t,e){q.sendEvent(t,e)}}).call(this,n(1).weexPlus,n(1).default)},5:function(t){t.exports={_from:"@dcloudio/uni-stat@next",_id:"@dcloudio/uni-stat@2.0.0-23720191024001",_inBundle:!1,_integrity:"sha512-vJEk493Vdb8KueNzR2otzDi23rfyRcQBo/t1R41MwNGPk+AUB94gh10+HVLo98DRcvMzkuVofz3KXTAfEx24iw==",_location:"/@dcloudio/uni-stat",_phantomChildren:{},_requested:{type:"tag",registry:!0,raw:"@dcloudio/uni-stat@next",name:"@dcloudio/uni-stat",escapedName:"@dcloudio%2funi-stat",scope:"@dcloudio",rawSpec:"next",saveSpec:null,fetchSpec:"next"},_requiredBy:["#USER","/","/@dcloudio/vue-cli-plugin-uni"],_resolved:"https://registry.npmjs.org/@dcloudio/uni-stat/-/uni-stat-2.0.0-23720191024001.tgz",_shasum:"18272814446a9bc6053bc92666ec7064a1767588",_spec:"@dcloudio/uni-stat@next",_where:"/Users/fxy/Documents/DCloud/HbuilderX-plugins/release/uniapp-cli",author:"",bugs:{url:"https://github.com/dcloudio/uni-app/issues"},bundleDependencies:!1,deprecated:!1,description:"",devDependencies:{"@babel/core":"^7.5.5","@babel/preset-env":"^7.5.5",eslint:"^6.1.0",rollup:"^1.19.3","rollup-plugin-babel":"^4.3.3","rollup-plugin-clear":"^2.0.7","rollup-plugin-commonjs":"^10.0.2","rollup-plugin-copy":"^3.1.0","rollup-plugin-eslint":"^7.0.0","rollup-plugin-json":"^4.0.0","rollup-plugin-node-resolve":"^5.2.0","rollup-plugin-replace":"^2.2.0","rollup-plugin-uglify":"^6.0.2"},files:["dist","package.json","LICENSE"],gitHead:"a725c04ef762e5df78a9a69d140c2666e0de05fc",homepage:"https://github.com/dcloudio/uni-app#readme",license:"Apache-2.0",main:"dist/index.js",name:"@dcloudio/uni-stat",repository:{type:"git",url:"git+https://github.com/dcloudio/uni-app.git",directory:"packages/uni-stat"},scripts:{build:"NODE_ENV=production rollup -c rollup.config.js",dev:"NODE_ENV=development rollup -w -c rollup.config.js"},version:"2.0.0-23720191024001"}},6:function(t,e,n){"use strict";n.r(e),e.default={pages:{},globalStyle:{}}},7:function(t,e){t.exports=Vue},8:function(t,e,n){Vue.prototype.__$appStyle__={},Vue.prototype.__merge_style&&Vue.prototype.__merge_style(n(9).default,Vue.prototype.__$appStyle__)},89:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("scroll-view",{staticStyle:{flexDirection:"column"},attrs:{scrollY:!0,enableBackToTop:!0,bubble:"true"}},[n("view",{staticClass:["content"]},[n("map",{ref:"map1",staticClass:["map"],attrs:{controls:t.controls,scale:t.scale,longitude:t.location.longitude,latitude:t.location.latitude,showLocation:t.showLocation,enable3D:t.enable3D,rotate:t.rotate,skew:t.skew,showCompass:t.showCompass,enableOverlooking:t.enableOverlooking,enableZoom:t.enableZoom,enableScroll:t.enableScroll,enableRotate:t.enableRotate,enableSatellite:t.enableSatellite,enableTraffic:t.enableTraffic,markers:t.markers,polyline:t.polyline,circles:t.circles,polygons:t.polygons,includePoints:t.includePoints}}),n("scroll-view",{staticClass:["scrollview"],attrs:{scrollY:"true"}},[n("view",{staticClass:["list-item"]},[n("u-text",{staticClass:["list-text"]},[t._v("显示3D楼块")]),n("switch",{attrs:{checked:t.enable3D},on:{change:t.enableThreeD}})],1),n("view",{staticClass:["list-item"]},[n("u-text",{staticClass:["list-text"]},[t._v("显示指南针")]),n("switch",{attrs:{checked:t.showCompass},on:{change:t.changeShowCompass}})],1),n("view",{staticClass:["list-item"]},[n("u-text",{staticClass:["list-text"]},[t._v("开启俯视")]),n("switch",{attrs:{checked:t.enableOverlooking},on:{change:t.changeEnableOverlooking}})],1),n("view",{staticClass:["list-item"]},[n("u-text",{staticClass:["list-text"]},[t._v("是否支持缩放")]),n("switch",{attrs:{checked:t.enableZoom},on:{change:t.changeEnableZoom}})],1),n("view",{staticClass:["list-item"]},[n("u-text",{staticClass:["list-text"]},[t._v("是否支持拖动")]),n("switch",{attrs:{checked:t.enableScroll},on:{change:t.changeEnableScroll}})],1),n("view",{staticClass:["list-item"]},[n("u-text",{staticClass:["list-text"]},[t._v("是否支持旋转")]),n("switch",{attrs:{checked:t.enableRotate},on:{change:t.changeEnableRotate}})],1),n("view",{staticClass:["list-item"]},[n("u-text",{staticClass:["list-text"]},[t._v("是否开启卫星图")]),n("switch",{attrs:{checked:t.enableSatellite},on:{change:t.changeEnableSatellite}})],1),n("view",{staticClass:["list-item"]},[n("u-text",{staticClass:["list-text"]},[t._v("是否开启实时路况")]),n("switch",{attrs:{checked:t.enableTraffic},on:{change:t.changeEnableTraffic}})],1)])],1)])},i=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return i})},9:function(t,e,n){"use strict";n.r(e);var a=n(0),i=n.n(a);for(var o in a)"default"!==o&&function(t){n.d(e,t,function(){return a[t]})}(o);e.default=i.a},93:function(t,e,n){"use strict";n.r(e);var a=n(31),i=n.n(a);for(var o in a)"default"!==o&&function(t){n.d(e,t,function(){return a[t]})}(o);e.default=i.a}});