(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/API/canvas/canvas"],{"0b19":function(e,t,n){"use strict";var o=n("7c74"),i=n.n(o);i.a},"2d46":function(e,t,n){"use strict";(function(e){n("d105"),n("921b");o(n("66fd"));var t=o(n("3b35"));function o(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])},"3b35":function(e,t,n){"use strict";n.r(t);var o=n("6d5e"),i=n("eff6");for(var a in i)"default"!==a&&function(e){n.d(t,e,function(){return i[e]})}(a);n("0b19");var r=n("2877"),l=Object(r["a"])(i["default"],o["a"],o["b"],!1,null,null,null);t["default"]=l.exports},"6d5e":function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement;e._self._c},i=[];n.d(t,"a",function(){return o}),n.d(t,"b",function(){return i})},"6fbc":function(e,t,n){"use strict";(function(e,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=null,i={data:function(){return{title:"createContext",names:["rotate","scale","reset","translate","save","restore","drawImage","fillText","fill","stroke","clearRect","beginPath","closePath","moveTo","lineTo","rect","arc","quadraticCurveTo","bezierCurveTo","setFillStyle","setStrokeStyle","setGlobalAlpha","setShadow","setFontSize","setLineCap","setLineJoin","setLineWidth","setMiterLimit"]}},onReady:function(){o=e.createCanvasContext("canvas",this)},methods:{toTempFilePath:function(){e.canvasToTempFilePath({canvasId:"canvas",success:function(e){console.log(n(e.tempFilePath," at pages/API/canvas/canvas.vue:36"))},fail:function(e){console.error(n(JSON.stringify(e)," at pages/API/canvas/canvas.vue:39"))}})},handleCanvasButton:function(e){this[e]&&this[e]()},rotate:function(){o.beginPath(),o.rotate(10*Math.PI/180),o.rect(225,75,20,10),o.fill(),o.draw()},scale:function(){o.beginPath(),o.rect(25,25,50,50),o.stroke(),o.scale(2,2),o.beginPath(),o.rect(25,25,50,50),o.stroke(),o.draw()},reset:function(){o.beginPath(),o.setFillStyle("#000000"),o.setStrokeStyle("#000000"),o.setFontSize(10),o.setGlobalAlpha(1),o.setShadow(0,0,0,"rgba(0, 0, 0, 0)"),o.setLineCap("butt"),o.setLineJoin("miter"),o.setLineWidth(1),o.setMiterLimit(10),o.draw()},translate:function(){o.beginPath(),o.rect(10,10,100,50),o.fill(),o.translate(70,70),o.beginPath(),o.fill(),o.draw()},save:function(){o.beginPath(),o.setStrokeStyle("#00ff00"),o.save(),o.scale(2,2),o.setStrokeStyle("#ff0000"),o.rect(0,0,100,100),o.stroke(),o.restore(),o.rect(0,0,50,50),o.stroke(),o.draw()},restore:function(){[3,2,1].forEach(function(e){o.beginPath(),o.save(),o.scale(e,e),o.rect(10,10,100,100),o.stroke(),o.restore()}),o.draw()},drawImage:function(){o.drawImage("../../../static/app-plus/uni@2x.png",0,0),o.draw()},fillText:function(){o.setStrokeStyle("#ff0000"),o.beginPath(),o.moveTo(0,10),o.lineTo(300,10),o.stroke(),o.setFontSize(10),o.fillText("Hello World",0,30),o.setFontSize(20),o.fillText("Hello World",100,30),o.beginPath(),o.moveTo(0,30),o.lineTo(300,30),o.stroke(),o.draw()},fill:function(){o.beginPath(),o.rect(20,20,150,100),o.setStrokeStyle("#00ff00"),o.fill(),o.draw()},stroke:function(){o.beginPath(),o.moveTo(20,20),o.lineTo(20,100),o.lineTo(70,100),o.setStrokeStyle("#00ff00"),o.stroke(),o.draw()},clearRect:function(){o.setFillStyle("#ff0000"),o.beginPath(),o.rect(0,0,300,150),o.fill(),o.clearRect(20,20,100,50),o.draw()},beginPath:function(){o.beginPath(),o.setLineWidth(5),o.setStrokeStyle("#ff0000"),o.moveTo(0,75),o.lineTo(250,75),o.stroke(),o.beginPath(),o.setStrokeStyle("#0000ff"),o.moveTo(50,0),o.lineTo(150,130),o.stroke(),o.draw()},closePath:function(){o.beginPath(),o.setLineWidth(1),o.moveTo(20,20),o.lineTo(20,100),o.lineTo(70,100),o.closePath(),o.stroke(),o.draw()},moveTo:function(){o.beginPath(),o.moveTo(0,0),o.lineTo(300,150),o.stroke(),o.draw()},lineTo:function(){o.beginPath(),o.moveTo(20,20),o.lineTo(20,100),o.lineTo(70,100),o.stroke(),o.draw()},rect:function(){o.beginPath(),o.rect(20,20,150,100),o.stroke(),o.draw()},arc:function(){o.beginPath(),o.setLineWidth(2),o.arc(75,75,50,0,2*Math.PI,!0),o.moveTo(110,75),o.arc(75,75,35,0,Math.PI,!1),o.moveTo(65,65),o.arc(60,65,5,0,2*Math.PI,!0),o.moveTo(95,65),o.arc(90,65,5,0,2*Math.PI,!0),o.stroke(),o.draw()},quadraticCurveTo:function(){o.beginPath(),o.moveTo(20,20),o.quadraticCurveTo(20,100,200,20),o.stroke(),o.draw()},bezierCurveTo:function(){o.beginPath(),o.moveTo(20,20),o.bezierCurveTo(20,100,200,100,200,20),o.stroke(),o.draw()},setFillStyle:function(){["#fef957","rgb(242,159,63)","rgb(242,117,63)","#e87e51"].forEach(function(e,t){o.setFillStyle(e),o.beginPath(),o.rect(0+75*t,0,50,50),o.fill()}),o.draw()},setStrokeStyle:function(){["#fef957","rgb(242,159,63)","rgb(242,117,63)","#e87e51"].forEach(function(e,t){o.setStrokeStyle(e),o.beginPath(),o.rect(0+75*t,0,50,50),o.stroke()}),o.draw()},setGlobalAlpha:function(){o.setFillStyle("#000000"),[1,.5,.1].forEach(function(e,t){o.setGlobalAlpha(e),o.beginPath(),o.rect(0+75*t,0,50,50),o.fill()}),o.draw(),o.setGlobalAlpha(1)},setShadow:function(){o.beginPath(),o.setShadow(10,10,10,"rgba(0, 0, 0, 199)"),o.rect(10,10,100,100),o.fill(),o.draw()},setFontSize:function(){[10,20,30,40].forEach(function(e,t){o.setFontSize(e),o.fillText("Hello, world",20,20+40*t)}),o.draw()},setLineCap:function(){o.setLineWidth(10),["butt","round","square"].forEach(function(e,t){o.beginPath(),o.setLineCap(e),o.moveTo(20,20+20*t),o.lineTo(100,20+20*t),o.stroke()}),o.draw()},setLineJoin:function(){o.setLineWidth(10),["bevel","round","miter"].forEach(function(e,t){o.beginPath(),o.setLineJoin(e),o.moveTo(20+80*t,20),o.lineTo(100+80*t,50),o.lineTo(20+80*t,100),o.stroke()}),o.draw()},setLineWidth:function(){[2,4,6,8,10].forEach(function(e,t){o.beginPath(),o.setLineWidth(e),o.moveTo(20,20+20*t),o.lineTo(100,20+20*t),o.stroke()}),o.draw()},setMiterLimit:function(){o.setLineWidth(4),[2,4,6,8,10].forEach(function(e,t){o.beginPath(),o.setMiterLimit(e),o.moveTo(20+80*t,20),o.lineTo(100+80*t,50),o.lineTo(20+80*t,100),o.stroke()}),o.draw()}}};t.default=i}).call(this,n("6e42")["default"],n("0de9")["default"])},"7c74":function(e,t,n){},eff6:function(e,t,n){"use strict";n.r(t);var o=n("6fbc"),i=n.n(o);for(var a in o)"default"!==a&&function(e){n.d(t,e,function(){return o[e]})}(a);t["default"]=i.a}},[["2d46","common/runtime","common/vendor"]]]);