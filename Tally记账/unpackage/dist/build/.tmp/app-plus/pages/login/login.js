(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/login/login"],{"22ff":function(e,n,o){"use strict";var t=function(){var e=this,n=e.$createElement;e._self._c},i=[];o.d(n,"a",function(){return t}),o.d(n,"b",function(){return i})},"3edb":function(e,n,o){"use strict";(function(e,t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=a(o("77e8"));function a(e){return e&&e.__esModule?e:{default:e}}var s={data:function(){return{phoneNumber:"",passwd:"",isShowOauth:!1,showProvider:{weixin:!1,qq:!1,sinaweibo:!1,xiaomi:!1}}},onShow:function(){},onLoad:function(){this.isShowOauth=!0,this.getProvider()},methods:{oauthLogin:function(n){e.showLoading(),e.login({provider:n,success:function(o){console.log(t("success: "+JSON.stringify(o)," at pages/login/login.vue:69")),e.getUserInfo({provider:n,success:function(n){console.log(t("用户信息："+JSON.stringify(n.userInfo)," at pages/login/login.vue:74")),e.setStorage({key:"UserInfo",data:{username:n.userInfo.nickName,face:n.userInfo.avatarUrl,signature:"个性签名",integral:0,balance:0,envelope:0},success:function(){e.hideLoading(),e.showToast({title:"登录成功",icon:"success"}),setTimeout(function(){e.navigateBack()},300)}})}})},fail:function(e){console.log(t("fail: "+JSON.stringify(e)," at pages/login/login.vue:97"))}})},getProvider:function(){var n=this;e.getProvider({service:"oauth",success:function(e){for(var o=e.provider.length,t=0;t<o;t++)n.showProvider[e.provider[t]]=!0;0==e.provider.length&&(n.isShowOauth=!1)}})},toPage:function(n){e.hideKeyboard(),e.navigateTo({url:n})},doLogin:function(){var n=this;if(e.hideKeyboard(),!/^1(3|4|5|6|7|8|9)\d{9}$/.test(this.phoneNumber))return e.showToast({title:"请填写正确手机号码",icon:"none"}),!1;e.showLoading({title:"提交中..."}),setTimeout(function(){var o=(0,i.default)(n.passwd);e.getStorage({key:"UserList",success:function(t){for(var i in t.data){var a=t.data[i];a.username==n.phoneNumber&&(e.hideLoading(),o==t.data[i].passwd?e.showToast({title:"登录成功",icon:"success"}):e.showToast({title:"账号或密码不正确",icon:"none"}))}},fail:function(n){e.hideLoading(),e.showToast({title:"手机号码未注册",icon:"none"})}})},1e3)}}};n.default=s}).call(this,o("6e42")["default"],o("0de9")["default"])},"3f34":function(e,n,o){"use strict";o.r(n);var t=o("3edb"),i=o.n(t);for(var a in t)"default"!==a&&function(e){o.d(n,e,function(){return t[e]})}(a);n["default"]=i.a},"445e":function(e,n,o){},"77ba":function(e,n,o){"use strict";o.r(n);var t=o("22ff"),i=o("3f34");for(var a in i)"default"!==a&&function(e){o.d(n,e,function(){return i[e]})}(a);o("81d9");var s=o("2877"),u=Object(s["a"])(i["default"],t["a"],t["b"],!1,null,null,null);n["default"]=u.exports},"81d9":function(e,n,o){"use strict";var t=o("445e"),i=o.n(t);i.a},c5eb:function(e,n,o){"use strict";(function(e){o("d249"),o("921b");t(o("66fd"));var n=t(o("77ba"));function t(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,o("6e42")["createPage"])}},[["c5eb","common/runtime","common/vendor"]]]);