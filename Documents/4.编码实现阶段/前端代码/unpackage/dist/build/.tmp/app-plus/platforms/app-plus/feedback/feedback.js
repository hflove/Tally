(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["platforms/app-plus/feedback/feedback"],{"0348":function(e,t,n){"use strict";var s=n("e4ff"),i=n.n(s);i.a},"39f6":function(e,t,n){"use strict";var s=function(){var e=this,t=e.$createElement;e._self._c},i=[];n.d(t,"a",function(){return s}),n.d(t,"b",function(){return i})},"45ee":function(e,t,n){"use strict";n.r(t);var s=n("39f6"),i=n("77b6");for(var a in i)"default"!==a&&function(e){n.d(t,e,function(){return i[e]})}(a);n("0348");var o=n("2877"),u=Object(o["a"])(i["default"],s["a"],s["b"],!1,null,null,null);t["default"]=u.exports},"77b6":function(e,t,n){"use strict";n.r(t);var s=n("961b"),i=n.n(s);for(var a in s)"default"!==a&&function(e){n.d(t,e,function(){return s[e]})}(a);t["default"]=i.a},"961b":function(e,t,n){"use strict";(function(e,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s={data:function(){return{msgContents:["界面显示错乱","启动缓慢，卡出翔了","UI无法直视，丑哭了","偶发性崩溃"],stars:[1,2,3,4,5],imageList:[],sendDate:{score:0,content:"",contact:""}}},onLoad:function(){var e={appid:plus.runtime.appid,imei:plus.device.imei,p:"Android"===plus.os.name?"a":"i",md:plus.device.model,app_version:plus.runtime.version,plus_version:plus.runtime.innerVersion,os:plus.os.version,net:""+plus.networkinfo.getCurrentType()};this.sendDate=Object.assign(e,this.sendDate)},methods:{close:function(e){this.imageList.splice(e,1)},chooseMsg:function(){var t=this;e.showActionSheet({itemList:this.msgContents,success:function(e){t.sendDate.content=t.msgContents[e.tapIndex]}})},chooseImg:function(){var t=this;e.chooseImage({sourceType:["camera","album"],sizeType:"compressed",count:8-this.imageList.length,success:function(e){t.imageList=t.imageList.concat(e.tempFilePaths)}})},chooseStar:function(e){this.sendDate.score=e},previewImage:function(t){e.previewImage({urls:this.imageList,current:this.imageList[t]})},send:function(){var t=this;console.log(n(JSON.stringify(this.sendDate)," at platforms/app-plus/feedback/feedback.vue:112"));var s=this.imageList.map(function(e,t){return{name:"image"+t,uri:e}});e.uploadFile({url:"https://service.dcloud.net.cn/feedback",files:s,formData:this.sendDate,success:function(n){200===n.statusCode&&(e.showToast({title:"反馈成功!"}),t.imageList=[],t.sendDate={score:0,content:"",contact:""})},fail:function(e){console.log(n(e," at platforms/app-plus/feedback/feedback.vue:137"))}})}}};t.default=s}).call(this,n("6e42")["default"],n("0de9")["default"])},be35:function(e,t,n){"use strict";(function(e){n("1b86"),n("921b");s(n("66fd"));var t=s(n("45ee"));function s(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])},e4ff:function(e,t,n){}},[["be35","common/runtime","common/vendor"]]]);