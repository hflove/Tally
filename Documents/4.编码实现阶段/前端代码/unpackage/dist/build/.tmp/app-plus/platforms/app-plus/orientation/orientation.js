(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["platforms/app-plus/orientation/orientation"],{"3b78":function(t,n,a){"use strict";(function(t){a("1b86"),a("921b");e(a("66fd"));var n=e(a("bc7f"));function e(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,a("6e42")["createPage"])},7984:function(t,n,a){"use strict";a.r(n);var e=a("e35f"),o=a.n(e);for(var i in e)"default"!==i&&function(t){a.d(n,t,function(){return e[t]})}(i);n["default"]=o.a},bc7f:function(t,n,a){"use strict";a.r(n);var e=a("f00b"),o=a("7984");for(var i in o)"default"!==i&&function(t){a.d(n,t,function(){return o[t]})}(i);var u=a("2877"),r=Object(u["a"])(o["default"],e["a"],e["b"],!1,null,null,null);n["default"]=r.exports},e35f:function(t,n,a){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=null,e={data:function(){return{title:"orientation",value:""}},methods:{getOrient:function(){var n=this;plus.orientation.getCurrentOrientation(function(t){n.value="alpha："+t.alpha+"\nbeta："+t.beta+"\ngamma："+t.gamma},function(n){console.log(t("获取失败:"+n.message," at platforms/app-plus/orientation/orientation.vue:31"))})},watchOrient:function(){var n=this;a||(a=plus.orientation.watchOrientation(function(t){n.value="监听设备方向变化信息\nalpha："+t.alpha+"\nbeta："+t.beta+"\ngamma："+t.gamma},function(n){plus.orientation.clearWatch(a),a=null,console.log(t("监听失败:"+n.message," at platforms/app-plus/orientation/orientation.vue:44"))}))},watchStop:function(){a?(plus.orientation.clearWatch(a),a=null):console.log(t("没有监听设备方向变化"," at platforms/app-plus/orientation/orientation.vue:52"))}}};n.default=e}).call(this,a("0de9")["default"])},f00b:function(t,n,a){"use strict";var e=function(){var t=this,n=t.$createElement;t._self._c},o=[];a.d(n,"a",function(){return e}),a.d(n,"b",function(){return o})}},[["3b78","common/runtime","common/vendor"]]]);