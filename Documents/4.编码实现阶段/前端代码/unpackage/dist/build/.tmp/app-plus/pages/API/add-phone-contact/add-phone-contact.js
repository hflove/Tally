(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/API/add-phone-contact/add-phone-contact"],{"0e21":function(n,t,e){"use strict";var a=function(){var n=this,t=n.$createElement;n._self._c},o=[];e.d(t,"a",function(){return a}),e.d(t,"b",function(){return o})},"2a3c":function(n,t,e){"use strict";e.r(t);var a=e("7057"),o=e.n(a);for(var u in a)"default"!==u&&function(n){e.d(t,n,function(){return a[n]})}(u);t["default"]=o.a},7057:function(n,t,e){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=u(e("a34a")),o=u(e("2a23"));function u(n){return n&&n.__esModule?n:{default:n}}function r(n,t,e,a,o,u,r){try{var c=n[u](r),i=c.value}catch(s){return void e(s)}c.done?t(i):Promise.resolve(i).then(a,o)}function c(n){return function(){var t=this,e=arguments;return new Promise(function(a,o){var u=n.apply(t,e);function c(n){r(u,a,o,c,i,"next",n)}function i(n){r(u,a,o,c,i,"throw",n)}c(void 0)})}}var i={data:function(){return{title:"addPhoneContact",name:"",phone:""}},methods:{nameChange:function(n){this.name=n.detail.value},phoneChange:function(n){this.phone=n.detail.value},add:function(){1===this.checkPermission()&&n.addPhoneContact({firstName:this.name,mobilePhoneNumber:this.phone,success:function(){n.showModal({content:"已成功添加联系人！",showCancel:!1})},fail:function(){n.showModal({content:"添加联系人失败！",showCancel:!1})}})},checkPermission:function(){var t=c(a.default.mark(function t(){var e;return a.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(!o.default.isIOS){t.next=6;break}return t.next=3,o.default.requestIOS("contact");case 3:t.t0=t.sent,t.next=9;break;case 6:return t.next=8,o.default.requestAndroid("android.permission.WRITE_CONTACTS");case 8:t.t0=t.sent;case 9:return e=t.t0,null===e||1===e?e=1:n.showModal({content:"需要联系人权限",confirmText:"设置",success:function(n){n.confirm&&o.default.gotoAppSetting()}}),t.abrupt("return",e);case 12:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()}};t.default=i}).call(this,e("6e42")["default"])},7111:function(n,t,e){"use strict";(function(n){e("1b86"),e("921b");a(e("66fd"));var t=a(e("b7f4"));function a(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,e("6e42")["createPage"])},b7f4:function(n,t,e){"use strict";e.r(t);var a=e("0e21"),o=e("2a3c");for(var u in o)"default"!==u&&function(n){e.d(t,n,function(){return o[n]})}(u);var r=e("2877"),c=Object(r["a"])(o["default"],a["a"],a["b"],!1,null,null,null);t["default"]=c.exports}},[["7111","common/runtime","common/vendor"]]]);