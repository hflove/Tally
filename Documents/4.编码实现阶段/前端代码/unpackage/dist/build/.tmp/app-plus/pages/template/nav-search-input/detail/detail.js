(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/template/nav-search-input/detail/detail"],{"151a":function(t,i,n){"use strict";var e=function(){var t=this,i=t.$createElement;t._self._c},a=[];n.d(i,"a",function(){return e}),n.d(i,"b",function(){return a})},4354:function(t,i,n){"use strict";var e=n("f415"),a=n.n(e);a.a},"43b2":function(t,i,n){"use strict";(function(t,e){Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a=s(n("4111"));function s(t){return t&&t.__esModule?t:{default:t}}var o={data:function(){return{historyList:[],isHistory:!0,list:[],flng:!0,timer:null}},onLoad:function(){this.amapPlugin=a.default.mapInit(),this.historyList=t.getStorageSync("search:history")},methods:{listTap:function(i){i=JSON.parse(JSON.stringify(i)),this.history||(this.isHistory=!0,a.default.setHistory(i),t.navigateBack())},clearSearch:function(){var i=this;t.showModal({title:"提示",content:"是否清理全部搜索历史？该操作不可逆。",success:function(t){t.confirm&&(i.historyList=a.default.removeHistory())}})},getInputtips:function(t){var i=this;this.amapPlugin.getInputtips({keywords:t,city:"北京",success:function(n){var e=n.tips;e.map(function(i){return a.default.dataHandle(i,t)}),i.historyList=e},fail:function(t){console.log(e(t," at pages/template/nav-search-input/detail/detail.vue:103"))}})}},onNavigationBarSearchInputChanged:function(i){var n=i.text;if(!n)return this.isHistory=!0,this.historyList=[],void(this.historyList=t.getStorageSync("search:history"));this.isHistory=!1,this.getInputtips(n)},onNavigationBarSearchInputConfirmed:function(i){var n=i.text;if(!n)return this.isHistory=!0,this.historyList=[],this.historyList=t.getStorageSync("search:history"),void t.showModal({title:"提示",content:"请输入内容。",success:function(t){t.confirm}});t.showModal({title:"提示",content:'您输入的内容为"'.concat(n,'",如果点击确定,将记录到历史搜索,并返回.如果取消不做操作'),success:function(i){i.confirm&&(a.default.setHistory(n),t.navigateBack())}})},onNavigationBarButtonTap:function(){var i=this;t.showModal({title:"提示",content:"点击确定，修改输入框的内容为abc",success:function(t){if(t.confirm){var n=i.$mp.page.$getAppWebview();n.setTitleNViewSearchInputText("abc")}}})}};i.default=o}).call(this,n("6e42")["default"],n("0de9")["default"])},5535:function(t,i,n){"use strict";(function(t){n("1b86"),n("921b");e(n("66fd"));var i=e(n("ca5e"));function e(t){return t&&t.__esModule?t:{default:t}}t(i.default)}).call(this,n("6e42")["createPage"])},ca5e:function(t,i,n){"use strict";n.r(i);var e=n("151a"),a=n("f3e90");for(var s in a)"default"!==s&&function(t){n.d(i,t,function(){return a[t]})}(s);n("4354");var o=n("2877"),r=Object(o["a"])(a["default"],e["a"],e["b"],!1,null,null,null);i["default"]=r.exports},f3e90:function(t,i,n){"use strict";n.r(i);var e=n("43b2"),a=n.n(e);for(var s in e)"default"!==s&&function(t){n.d(i,t,function(){return e[t]})}(s);i["default"]=a.a},f415:function(t,i,n){}},[["5535","common/runtime","common/vendor"]]]);