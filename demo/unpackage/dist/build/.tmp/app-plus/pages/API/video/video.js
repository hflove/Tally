(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/API/video/video"],{4130:function(e,t,n){"use strict";n.r(t);var a=n("5883"),u=n("46d9");for(var c in u)"default"!==c&&function(e){n.d(t,e,function(){return u[e]})}(c);n("4f66");var r=n("2877"),o=Object(r["a"])(u["default"],a["a"],a["b"],!1,null,null,null);t["default"]=o.exports},"46d9":function(e,t,n){"use strict";n.r(t);var a=n("f9bd"),u=n.n(a);for(var c in a)"default"!==c&&function(e){n.d(t,e,function(){return a[e]})}(c);t["default"]=u.a},"4f66":function(e,t,n){"use strict";var a=n("a78f"),u=n.n(a);u.a},5883:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement;e._self._c},u=[];n.d(t,"a",function(){return a}),n.d(t,"b",function(){return u})},5941:function(e,t,n){"use strict";(function(e){n("d105"),n("921b");a(n("66fd"));var t=a(n("4130"));function a(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])},a78f:function(e,t,n){},f9bd:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=[["camera"],["album"],["camera","album"]],a={data:function(){return{title:"chooseVideo",sourceTypeIndex:2,sourceType:["拍摄","相册","拍摄或相册"],src:"",cameraList:[{value:"back",name:"后置摄像头",checked:"true"},{value:"front",name:"前置摄像头"}],cameraIndex:0}},onUnload:function(){this.src="",this.sourceTypeIndex=2,this.sourceType=["拍摄","相册","拍摄或相册"]},methods:{radioChange:function(e){for(var t=0;t<this.cameraList.length;t++)if(this.cameraList[t].value===e.target.value){this.cameraIndex=t;break}},sourceTypeChange:function(e){this.sourceTypeIndex=parseInt(e.target.value)},chooseVideo:function(){var t=this;e.chooseVideo({camera:this.cameraList[this.cameraIndex].value,sourceType:n[this.sourceTypeIndex],success:function(e){t.src=e.tempFilePath},fail:function(e){}})}}};t.default=a}).call(this,n("6e42")["default"])}},[["5941","common/runtime","common/vendor"]]]);