(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/extUI/title/title"],{"107d":function(t,n,e){"use strict";e.r(n);var i=e("fbc1"),u=e.n(i);for(var o in i)"default"!==o&&function(t){e.d(n,t,function(){return i[t]})}(o);n["default"]=u.a},"1eb2":function(t,n,e){"use strict";var i=function(){var t=this,n=t.$createElement;t._self._c},u=[];e.d(n,"a",function(){return i}),e.d(n,"b",function(){return u})},"37a5":function(t,n,e){},5552:function(t,n,e){"use strict";var i=e("37a5"),u=e.n(i);u.a},"7a67":function(t,n,e){"use strict";e.r(n);var i=e("1eb2"),u=e("107d");for(var o in u)"default"!==o&&function(t){e.d(n,t,function(){return u[t]})}(o);e("5552");var a=e("2877"),r=Object(a["a"])(u["default"],i["a"],i["b"],!1,null,null,null);n["default"]=r.exports},a631:function(t,n,e){"use strict";(function(t){e("d105"),e("921b");i(e("66fd"));var n=i(e("7a67"));function i(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("6e42")["createPage"])},fbc1:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=null,u=function(){return e.e("components/uni-title/uni-title").then(e.bind(null,"3e8d"))},o=function(){return e.e("components/uni-list/uni-list").then(e.bind(null,"c072"))},a=function(){return e.e("components/uni-list-item/uni-list-item").then(e.bind(null,"d7d3"))},r={components:{uniTitle:u,uniList:o,uniListItem:a},data:function(){return{appear:!1}},onReady:function(){var n=this,e=t.getSystemInfoSync();i=t.createIntersectionObserver(this),i.relativeTo(".scroll",{top:-e.windowTop}).observe(".uni-title",function(e){e.intersectionRatio>0&&!n.appear?t.setNavigationBarTitle({title:"Title 标题栏"}):t.setNavigationBarTitle({title:"修改后的标题"})})},onUnload:function(){i&&i.disconnect()},methods:{}};n.default=r}).call(this,e("6e42")["default"])}},[["a631","common/runtime","common/vendor"]]]);