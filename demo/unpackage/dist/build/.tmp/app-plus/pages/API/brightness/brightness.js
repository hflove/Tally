(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/API/brightness/brightness"],{"2ad2":function(e,n,t){"use strict";var s=function(){var e=this,n=e.$createElement;e._self._c},r=[];t.d(n,"a",function(){return s}),t.d(n,"b",function(){return r})},"40a2":function(e,n,t){"use strict";t.r(n);var s=t("2ad2"),r=t("7436");for(var a in r)"default"!==a&&function(e){t.d(n,e,function(){return r[e]})}(a);t("4ad0");var i=t("2877"),u=Object(i["a"])(r["default"],s["a"],s["b"],!1,null,null,null);n["default"]=u.exports},"4ad0":function(e,n,t){"use strict";var s=t("924d"),r=t.n(s);r.a},7436:function(e,n,t){"use strict";t.r(n);var s=t("9934"),r=t.n(s);for(var a in s)"default"!==a&&function(e){t.d(n,e,function(){return s[e]})}(a);n["default"]=r.a},"924d":function(e,n,t){},9934:function(e,n,t){"use strict";(function(e,t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var s={data:function(){return{title:"brightness",screen:0,keepScreenOn:!0}},onLoad:function(){var n=this;e.getScreenBrightness({success:function(e){console.log(t(e," at pages/API/brightness/brightness.vue:30")),n.screen=(100*e.value).toFixed(),console.log(t("屏幕亮度值："+n.screen," at pages/API/brightness/brightness.vue:32"))},fail:function(e){console.log(t(e," at pages/API/brightness/brightness.vue:35"))}})},methods:{sliderChange:function(n){var s=n.detail.value;this.screen!==s&&(console.log(t("当前数值："+n.detail.value," at pages/API/brightness/brightness.vue:44")),e.setScreenBrightness({value:s/100,success:function(){console.log(t("success"," at pages/API/brightness/brightness.vue:48"))},fail:function(e){console.log(t(e," at pages/API/brightness/brightness.vue:51"))}}),this.screen=s)},keep:function(){e.setKeepScreenOn({keepScreenOn:this.keepScreenOn}),this.keepScreenOn=!this.keepScreenOn}}};n.default=s}).call(this,t("6e42")["default"],t("0de9")["default"])},ebf5:function(e,n,t){"use strict";(function(e){t("d105"),t("921b");s(t("66fd"));var n=s(t("40a2"));function s(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,t("6e42")["createPage"])}},[["ebf5","common/runtime","common/vendor"]]]);