(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/tabBar/template/template"],{"1ea5":function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement;e._self._c},u=[];a.d(t,"a",function(){return n}),a.d(t,"b",function(){return u})},"77bf":function(e,t,a){"use strict";a.r(t);var n=a("a4c7"),u=a.n(n);for(var o in n)"default"!==o&&function(e){a.d(t,e,function(){return n[e]})}(o);t["default"]=u.a},"7c40":function(e,t,a){"use strict";a.r(t);var n=a("1ea5"),u=a("77bf");for(var o in u)"default"!==o&&function(e){a.d(t,e,function(){return u[e]})}(o);a("a2fc");var r=a("2877"),c=Object(r["a"])(u["default"],n["a"],n["b"],!1,null,null,null);t["default"]=c.exports},"958e":function(e,t,a){"use strict";(function(e){a("d105"),a("921b");n(a("66fd"));var t=n(a("7c40"));function n(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,a("6e42")["createPage"])},"9a78":function(e,t,a){},a2fc:function(e,t,a){"use strict";var n=a("9a78"),u=a.n(n);u.a},a4c7:function(e,t,a){"use strict";(function(e,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={data:function(){return{username:"",userId:""}},onLoad:function(){var t,n=this;e.getStorage({key:"userinfo",success:function(e){console.log(a("获取成功"," at pages/tabBar/template/template.vue:72")),n.username=e.data.username,t=e.data.userid,console.log(a("用户名为"+n.username," at pages/tabBar/template/template.vue:76"))},fail:function(e){console.log(a(e.data," at pages/tabBar/template/template.vue:80"))}}),this.userId="T"+this.PrefixInteger(t,8)},methods:{remove:function(){e.showModal({content:"确定要退出该账户吗",confirmText:"确定",cancelText:"取消",success:function(t){t.confirm?(e.removeStorage({key:"userinfo",success:function(e){console.log(a("清除本地缓存成功"," at pages/tabBar/template/template.vue:97"))}}),e.reLaunch({url:"./untemplate"})):t.cancel&&console.log(a("用户点击取消"," at pages/tabBar/template/template.vue:104"))}})},PrefixInteger:function(e,t){return("0000000000000000"+e).substr(-t)}}};t.default=n}).call(this,a("6e42")["default"],a("0de9")["default"])}},[["958e","common/runtime","common/vendor"]]]);