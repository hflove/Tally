(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/API/get-user-info/get-user-info"],{"03ae4":function(e,n,t){"use strict";var o=function(){var e=this,n=e.$createElement;e._self._c},r=[];t.d(n,"a",function(){return o}),t.d(n,"b",function(){return r})},"04a1":function(e,n,t){},"10ff":function(e,n,t){"use strict";t.r(n);var o=t("03ae4"),r=t("7146");for(var u in r)"default"!==u&&function(e){t.d(n,e,function(){return r[e]})}(u);t("e058");var s=t("2877"),f=Object(s["a"])(r["default"],o["a"],o["b"],!1,null,null,null);n["default"]=f.exports},7146:function(e,n,t){"use strict";t.r(n);var o=t("dc2d"),r=t.n(o);for(var u in o)"default"!==u&&function(e){t.d(n,e,function(){return o[e]})}(u);n["default"]=r.a},"9bf4":function(e,n,t){"use strict";(function(e){t("d105"),t("921b");o(t("66fd"));var n=o(t("10ff"));function o(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,t("6e42")["createPage"])},dc2d:function(e,n,t){"use strict";(function(e,o){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=t("2f62");function u(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},o=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.forEach(function(n){s(e,n,t[n])})}return e}function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var f={data:function(){return{title:"getUserInfo",hasUserInfo:!1,userInfo:{}}},computed:u({},(0,r.mapState)({loginProvider:function(e){return e.loginProvider}})),methods:{getUserInfo:function(){var n=this;e.getUserInfo({provider:this.loginProvider,success:function(e){console.log(o("getUserInfo success",e," at pages/API/get-user-info/get-user-info.vue:55")),n.hasUserInfo=!0,n.userInfo=e.userInfo},fail:function(n){console.log(o("getUserInfo fail",n," at pages/API/get-user-info/get-user-info.vue:60"));var t=n.errMsg;~t.indexOf("uni.login")&&(t="请在登录页面完成登录操作"),e.getSetting({success:function(n){var o=n.authSetting["scope.userInfo"];o?e.showModal({title:"获取用户信息失败",content:"错误原因"+t,showCancel:!1}):e.showModal({title:"授权失败",content:"Hello uni-app需要获取您的用户信息，请在设置界面打开相关权限",success:function(n){n.confirm&&e.openSetting()}})}})}})},mpGetUserInfo:function(n){console.log(o("mpGetUserInfo",n," at pages/API/get-user-info/get-user-info.vue:91")),"getUserInfo:ok"===n.detail.errMsg?(this.hasUserInfo=!0,this.userInfo=n.detail.userInfo):e.showModal({title:"获取用户信息失败",content:"错误原因"+n.detail.errMsg,showCancel:!1})},clear:function(){this.hasUserInfo=!1,this.userInfo={}}}};n.default=f}).call(this,t("6e42")["default"],t("0de9")["default"])},e058:function(e,n,t){"use strict";var o=t("04a1"),r=t.n(o);r.a}},[["9bf4","common/runtime","common/vendor"]]]);