(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/API/get-network-type/get-network-type"],{"09c8":function(t,e,n){"use strict";(function(t){n("1b86"),n("921b");o(n("66fd"));var e=o(n("afb1"));function o(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},1811:function(t,e,n){"use strict";(function(t,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o={data:function(){return{title:"getNetworkType",hasNetworkType:!1,networkType:""}},onUnload:function(){this.networkType="",this.hasNetworkType=!1},methods:{getNetworkType:function(){var e=this;t.getNetworkType({success:function(t){console.log(n(t," at pages/API/get-network-type/get-network-type.vue:38")),e.hasNetworkType=!0,e.networkType=t.subtype||t.networkType},fail:function(){t.showModal({content:"获取失败！",showCancel:!1})}})},clear:function(){this.hasNetworkType=!1,this.networkType=""}}};e.default=o}).call(this,n("6e42")["default"],n("0de9")["default"])},"5d74":function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement;t._self._c},r=[];n.d(e,"a",function(){return o}),n.d(e,"b",function(){return r})},7465:function(t,e,n){"use strict";n.r(e);var o=n("1811"),r=n.n(o);for(var u in o)"default"!==u&&function(t){n.d(e,t,function(){return o[t]})}(u);e["default"]=r.a},afb1:function(t,e,n){"use strict";n.r(e);var o=n("5d74"),r=n("7465");for(var u in r)"default"!==u&&function(t){n.d(e,t,function(){return r[t]})}(u);var a=n("2877"),c=Object(a["a"])(r["default"],o["a"],o["b"],!1,null,null,null);e["default"]=c.exports}},[["09c8","common/runtime","common/vendor"]]]);