(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/API/upload-file/upload-file"],{"2c99":function(e,a,t){"use strict";var o=function(){var e=this,a=e.$createElement;e._self._c},u=[];t.d(a,"a",function(){return o}),t.d(a,"b",function(){return u})},"6be7":function(e,a,t){"use strict";t.r(a);var o=t("2c99"),u=t("7ee9");for(var n in u)"default"!==n&&function(e){t.d(a,e,function(){return u[e]})}(n);t("df1b");var l=t("2877"),c=Object(l["a"])(u["default"],o["a"],o["b"],!1,null,null,null);a["default"]=c.exports},"7a50":function(e,a,t){},"7ee9":function(e,a,t){"use strict";t.r(a);var o=t("c041"),u=t.n(o);for(var n in o)"default"!==n&&function(e){t.d(a,e,function(){return o[e]})}(n);a["default"]=u.a},c041:function(e,a,t){"use strict";(function(e,t){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var o={data:function(){return{title:"uploadFile",imageSrc:""}},onUnload:function(){this.imageSrc=""},methods:{chooseImage:function(){var a=this;e.chooseImage({count:1,sizeType:["compressed"],sourceType:["album"],success:function(o){console.log(t("chooseImage success, temp path is",o.tempFilePaths[0]," at pages/API/upload-file/upload-file.vue:34"));var u=o.tempFilePaths[0];e.uploadFile({url:"https://unidemo.dcloud.net.cn/upload",filePath:u,fileType:"image",name:"data",success:function(o){console.log(t("uploadImage success, res is:",o," at pages/API/upload-file/upload-file.vue:42")),e.showToast({title:"上传成功",icon:"success",duration:1e3}),a.imageSrc=u},fail:function(a){console.log(t("uploadImage fail",a," at pages/API/upload-file/upload-file.vue:51")),e.showModal({content:a.errMsg,showCancel:!1})}})},fail:function(e){console.log(t("chooseImage fail",e," at pages/API/upload-file/upload-file.vue:60"))}})}}};a.default=o}).call(this,t("6e42")["default"],t("0de9")["default"])},da7c:function(e,a,t){"use strict";(function(e){t("1b86"),t("921b");o(t("66fd"));var a=o(t("6be7"));function o(e){return e&&e.__esModule?e:{default:e}}e(a.default)}).call(this,t("6e42")["createPage"])},df1b:function(e,a,t){"use strict";var o=t("7a50"),u=t.n(o);u.a}},[["da7c","common/runtime","common/vendor"]]]);