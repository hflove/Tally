(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/component/canvas/canvas"],{"2db7":function(t,n,a){"use strict";a.r(n);var i=a("efe7"),e=a("8928");for(var s in e)"default"!==s&&function(t){a.d(n,t,function(){return e[t]})}(s);a("8851");var c=a("2877"),o=Object(c["a"])(e["default"],i["a"],i["b"],!1,null,null,null);n["default"]=o.exports},"70e9":function(t,n,a){},8851:function(t,n,a){"use strict";var i=a("70e9"),e=a.n(i);e.a},8928:function(t,n,a){"use strict";a.r(n);var i=a("d33a"),e=a.n(i);for(var s in i)"default"!==s&&function(t){a.d(n,t,function(){return i[t]})}(s);n["default"]=e.a},d33a:function(t,n,a){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=null,i=null,e={data:function(){return{title:"canvas",screenWidth:t.getSystemInfoSync().windowWidth,canvasWidth:0,position:{x:150,y:150,vx:2,vy:2}}},onReady:function(){a=t.createCanvasContext("canvas"),this.canvasWidth=this.screenWidth/750*610,this.position={x:this.canvasWidth/2,y:this.canvasWidth/2,vx:2,vy:2},this.drawBall(),i=setInterval(this.drawBall,17)},onUnload:function(){clearInterval(i),this.position={x:0,y:0,vx:0,vy:0}},methods:{drawBall:function(){var t=this.position;function n(t,n){a.beginPath(0),a.arc(t,n,5,0,2*Math.PI),a.setFillStyle("#1aad19"),a.setStrokeStyle("rgba(1,1,1,0)"),a.fill(),a.stroke()}t.x+=t.vx,t.y+=t.vy,t.x>=this.canvasWidth&&(t.vx=-2),t.x<=7&&(t.vx=2),t.y>=this.canvasWidth&&(t.vy=-2),t.y<=7&&(t.vy=2),n(t.x,this.canvasWidth/2),n(this.canvasWidth/2,t.y),n(this.canvasWidth-t.x,this.canvasWidth/2),n(this.canvasWidth/2,this.canvasWidth-t.y),n(t.x,t.y),n(this.canvasWidth-t.x,this.canvasWidth-t.y),n(t.x,this.canvasWidth-t.y),n(this.canvasWidth-t.x,t.y),a.draw()}}};n.default=e}).call(this,a("6e42")["default"])},efe7:function(t,n,a){"use strict";var i=function(){var t=this,n=t.$createElement;t._self._c},e=[];a.d(n,"a",function(){return i}),a.d(n,"b",function(){return e})},fca7:function(t,n,a){"use strict";(function(t){a("1b86"),a("921b");i(a("66fd"));var n=i(a("2db7"));function i(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,a("6e42")["createPage"])}},[["fca7","common/runtime","common/vendor"]]]);