(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/API/share/share"],{"0862":function(e,t,a){"use strict";(function(e){a("d105"),a("921b");n(a("66fd"));var t=n(a("9d66"));function n(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,a("6e42")["createPage"])},"35f1":function(e,t,a){"use strict";(function(e,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=r(a("a34a"));function r(e){return e&&e.__esModule?e:{default:e}}function i(e,t,a,n,s,r,i){try{var o=e[r](i),u=o.value}catch(c){return void a(c)}o.done?t(u):Promise.resolve(u).then(n,s)}function o(e){return function(){var t=this,a=arguments;return new Promise(function(n,s){var r=e.apply(t,a);function o(e){i(r,n,s,o,u,"next",e)}function u(e){i(r,n,s,o,u,"throw",e)}o(void 0)})}}var u={data:function(){return{title:"share",shareText:"uni-app可以同时发布成原生App、小程序、H5，邀请你一起体验！",href:"https://uniapp.dcloud.io",image:"",shareType:1,providerList:[]}},computed:{isDisableButton:function(){return function(e){return 0===this.shareType&&"qq"===e.id||5===this.shareType&&"分享到微信好友"!==e.name}}},onShareAppMessage:function(){return{title:this.shareText?this.shareText:"欢迎体验uni-app",path:"/pages/tabBar/component/component",imageUrl:this.image?this.image:"https://img-cdn-qiniu.dcloud.net.cn/uniapp/app/share-logo@3.png"}},onUnload:function(){this.shareText="uni-app可以同时发布成原生App、小程序、H5，邀请你一起体验！",this.href="https://uniapp.dcloud.io",this.image=""},onLoad:function(){var t=this;e.getProvider({service:"share",success:function(e){console.log(n("success",e," at pages/API/share/share.vue:87"));for(var a=[],s=0;s<e.provider.length;s++)switch(e.provider[s]){case"weixin":a.push({name:"分享到微信好友",id:"weixin",sort:0}),a.push({name:"分享到微信朋友圈",id:"weixin",type:"WXSenceTimeline",sort:1});break;case"sinaweibo":a.push({name:"分享到新浪微博",id:"sinaweibo",sort:2});break;case"qq":a.push({name:"分享到QQ",id:"qq",sort:3});break;default:break}t.providerList=a.sort(function(e,t){return e.sort-t.sort})},fail:function(t){console.log(n("获取分享通道失败",t," at pages/API/share/share.vue:127")),e.showModal({content:"获取分享通道失败",showCancel:!1})}})},methods:{share:function(){var t=o(s.default.mark(function t(a){var r;return s.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(console.log(n("分享通道:"+a.id+"； 分享类型:"+this.shareType," at pages/API/share/share.vue:137")),this.shareText||1!==this.shareType&&0!==this.shareType){t.next=4;break}return e.showModal({content:"分享内容不能为空",showCancel:!1}),t.abrupt("return");case 4:if(this.image||2!==this.shareType&&0!==this.shareType){t.next=7;break}return e.showModal({content:"分享图片不能为空",showCancel:!1}),t.abrupt("return");case 7:r={provider:a.id,scene:a.type&&"WXSenceTimeline"===a.type?"WXSenceTimeline":"WXSceneSession",type:this.shareType,success:function(t){console.log(n("success",t," at pages/API/share/share.vue:160")),e.showModal({content:"分享成功",showCancel:!1})},fail:function(t){console.log(n("fail",t," at pages/API/share/share.vue:167")),e.showModal({content:t.errMsg,showCancel:!1})},complete:function(){console.log(n("分享操作结束!"," at pages/API/share/share.vue:174"))}},t.t0=this.shareType,t.next=0===t.t0?11:1===t.t0?16:2===t.t0?18:5===t.t0?20:24;break;case 11:return r.summary=this.shareText,r.imageUrl=this.image,r.title="欢迎体验uniapp",r.href="https://uniapp.dcloud.io",t.abrupt("break",25);case 16:return r.summary=this.shareText,t.abrupt("break",25);case 18:return r.imageUrl=this.image,t.abrupt("break",25);case 20:return r.imageUrl=this.image?this.image:"https://img-cdn-qiniu.dcloud.net.cn/uniapp/app/share-logo@3.png",r.title="欢迎体验uniapp",r.miniProgram={id:"gh_33446d7f7a26",path:"/pages/tabBar/component/component",webUrl:"https://uniapp.dcloud.io",type:0},t.abrupt("break",25);case 24:return t.abrupt("break",25);case 25:if(0!==r.type||"iOS"!==plus.os.name){t.next=29;break}return t.next=28,this.compress();case 28:r.imageUrl=t.sent;case 29:1===r.type&&"qq"===r.provider&&(r.href="https://uniapp.dcloud.io",r.title="欢迎体验uniapp"),e.share(r);case 31:case"end":return t.stop()}},t,this)}));function a(e){return t.apply(this,arguments)}return a}(),radioChange:function(e){console.log(n("type:"+e.detail.value," at pages/API/share/share.vue:215")),this.shareType=parseInt(e.detail.value)},chooseImage:function(){var t=this;e.chooseImage({count:1,sourceType:["album","camera"],sizeType:["compressed","original"],success:function(e){t.image=e.tempFilePaths[0]},fail:function(e){}})},compress:function(){console.log(n("开始压缩"," at pages/API/share/share.vue:249"));var t=this.image;return new Promise(function(a){var s=plus.io.convertAbsoluteFileSystem(t.replace("file://",""));console.log(n("after"+s," at pages/API/share/share.vue:253")),plus.io.resolveLocalFileSystemURL(s,function(s){s.file(function(s){console.log(n("getFile:"+JSON.stringify(s)," at pages/API/share/share.vue:257")),s.size>20480&&plus.zip.compressImage({src:t,dst:t.replace(".jpg","2222.jpg").replace(".JPG","2222.JPG"),width:"10%",height:"10%",quality:1,overwrite:!0},function(e){console.log(n("success zip****"+e.size," at pages/API/share/share.vue:267"));var s=t.replace(".jpg","2222.jpg").replace(".JPG","2222.JPG");a(s)},function(t){e.showModal({content:"分享图片太大,需要请重新选择图片!",showCancel:!1})})})},function(t){console.log(n("Resolve file URL failed: "+t.message," at pages/API/share/share.vue:279")),e.showModal({content:"分享图片太大,需要请重新选择图片!",showCancel:!1})})})}}};t.default=u}).call(this,a("6e42")["default"],a("0de9")["default"])},7503:function(e,t,a){"use strict";a.r(t);var n=a("35f1"),s=a.n(n);for(var r in n)"default"!==r&&function(e){a.d(t,e,function(){return n[e]})}(r);t["default"]=s.a},"9d66":function(e,t,a){"use strict";a.r(t);var n=a("c9fc"),s=a("7503");for(var r in s)"default"!==r&&function(e){a.d(t,e,function(){return s[e]})}(r);var i=a("2877"),o=Object(i["a"])(s["default"],n["a"],n["b"],!1,null,null,null);t["default"]=o.exports},c9fc:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=(e._self._c,e.__map(e.providerList,function(t,a){var n=e.isDisableButton(t);return{$orig:e.__get_orig(t),m0:n}}));e.$mp.data=Object.assign({},{$root:{l0:a}})},s=[];a.d(t,"a",function(){return n}),a.d(t,"b",function(){return s})}},[["0862","common/runtime","common/vendor"]]]);