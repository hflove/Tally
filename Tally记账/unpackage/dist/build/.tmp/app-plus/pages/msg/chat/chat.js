(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/msg/chat/chat"],{"0dc4":function(i,g,t){"use strict";var f=function(){var i=this,g=i.$createElement;i._self._c},l=[];t.d(g,"a",function(){return f}),t.d(g,"b",function(){return l})},"16cd":function(i,g,t){},"68f8":function(i,g,t){"use strict";(function(i){t("d249"),t("921b");f(t("66fd"));var g=f(t("a1c3"));function f(i){return i&&i.__esModule?i:{default:i}}i(g.default)}).call(this,t("6e42")["createPage"])},a1c3:function(i,g,t){"use strict";t.r(g);var f=t("0dc4"),l=t("ea09");for(var e in l)"default"!==e&&function(i){t.d(g,i,function(){return l[i]})}(e);t("b4a7");var a=t("2877"),s=Object(a["a"])(l["default"],f["a"],f["b"],!1,null,null,null);g["default"]=s.exports},b4a7:function(i,g,t){"use strict";var f=t("16cd"),l=t.n(f);l.a},c1d1:function(i,g,t){"use strict";(function(i,t){Object.defineProperty(g,"__esModule",{value:!0}),g.default=void 0;var f={data:function(){return{textMsg:"",scrollAnimation:!1,scrollTop:0,scrollToView:"",msgList:[],msgImgList:[],myuid:0,RECORDER:i.getRecorderManager(),isVoice:!1,voiceTis:"按住 说话",recordTis:"手指上滑 取消发送",recording:!1,willStop:!1,initPoint:{identifier:0,Y:0},recordTimer:null,recordLength:0,AUDIO:i.createInnerAudioContext(),playMsgid:null,VoiceTimer:null,showEmji:"",emojiList:[[{url:"100.gif",alt:"[微笑]"},{url:"101.gif",alt:"[伤心]"},{url:"102.gif",alt:"[美女]"},{url:"103.gif",alt:"[发呆]"},{url:"104.gif",alt:"[墨镜]"},{url:"105.gif",alt:"[哭]"},{url:"106.gif",alt:"[羞]"},{url:"107.gif",alt:"[哑]"},{url:"108.gif",alt:"[睡]"},{url:"109.gif",alt:"[哭]"},{url:"110.gif",alt:"[囧]"},{url:"111.gif",alt:"[怒]"},{url:"112.gif",alt:"[调皮]"},{url:"113.gif",alt:"[笑]"},{url:"114.gif",alt:"[惊讶]"},{url:"115.gif",alt:"[难过]"},{url:"116.gif",alt:"[酷]"},{url:"117.gif",alt:"[汗]"},{url:"118.gif",alt:"[抓狂]"},{url:"119.gif",alt:"[吐]"},{url:"120.gif",alt:"[笑]"},{url:"121.gif",alt:"[快乐]"},{url:"122.gif",alt:"[奇]"},{url:"123.gif",alt:"[傲]"}],[{url:"124.gif",alt:"[饿]"},{url:"125.gif",alt:"[累]"},{url:"126.gif",alt:"[吓]"},{url:"127.gif",alt:"[汗]"},{url:"128.gif",alt:"[高兴]"},{url:"129.gif",alt:"[闲]"},{url:"130.gif",alt:"[努力]"},{url:"131.gif",alt:"[骂]"},{url:"132.gif",alt:"[疑问]"},{url:"133.gif",alt:"[秘密]"},{url:"134.gif",alt:"[乱]"},{url:"135.gif",alt:"[疯]"},{url:"136.gif",alt:"[哀]"},{url:"137.gif",alt:"[鬼]"},{url:"138.gif",alt:"[打击]"},{url:"139.gif",alt:"[bye]"},{url:"140.gif",alt:"[汗]"},{url:"141.gif",alt:"[抠]"},{url:"142.gif",alt:"[鼓掌]"},{url:"143.gif",alt:"[糟糕]"},{url:"144.gif",alt:"[恶搞]"},{url:"145.gif",alt:"[什么]"},{url:"146.gif",alt:"[什么]"},{url:"147.gif",alt:"[累]"}],[{url:"148.gif",alt:"[看]"},{url:"149.gif",alt:"[难过]"},{url:"150.gif",alt:"[难过]"},{url:"151.gif",alt:"[坏]"},{url:"152.gif",alt:"[亲]"},{url:"153.gif",alt:"[吓]"},{url:"154.gif",alt:"[可怜]"},{url:"155.gif",alt:"[刀]"},{url:"156.gif",alt:"[水果]"},{url:"157.gif",alt:"[酒]"},{url:"158.gif",alt:"[篮球]"},{url:"159.gif",alt:"[乒乓]"},{url:"160.gif",alt:"[咖啡]"},{url:"161.gif",alt:"[美食]"},{url:"162.gif",alt:"[动物]"},{url:"163.gif",alt:"[鲜花]"},{url:"164.gif",alt:"[枯]"},{url:"165.gif",alt:"[唇]"},{url:"166.gif",alt:"[爱]"},{url:"167.gif",alt:"[分手]"},{url:"168.gif",alt:"[生日]"},{url:"169.gif",alt:"[电]"},{url:"170.gif",alt:"[炸弹]"},{url:"171.gif",alt:"[刀子]"}],[{url:"172.gif",alt:"[足球]"},{url:"173.gif",alt:"[瓢虫]"},{url:"174.gif",alt:"[翔]"},{url:"175.gif",alt:"[月亮]"},{url:"176.gif",alt:"[太阳]"},{url:"177.gif",alt:"[礼物]"},{url:"178.gif",alt:"[抱抱]"},{url:"179.gif",alt:"[拇指]"},{url:"180.gif",alt:"[贬低]"},{url:"181.gif",alt:"[握手]"},{url:"182.gif",alt:"[剪刀手]"},{url:"183.gif",alt:"[抱拳]"},{url:"184.gif",alt:"[勾引]"},{url:"185.gif",alt:"[拳头]"},{url:"186.gif",alt:"[小拇指]"},{url:"187.gif",alt:"[拇指八]"},{url:"188.gif",alt:"[食指]"},{url:"189.gif",alt:"[ok]"},{url:"190.gif",alt:"[情侣]"},{url:"191.gif",alt:"[爱心]"},{url:"192.gif",alt:"[蹦哒]"},{url:"193.gif",alt:"[颤抖]"},{url:"194.gif",alt:"[怄气]"},{url:"195.gif",alt:"[跳舞]"}],[{url:"196.gif",alt:"[发呆]"},{url:"197.gif",alt:"[背着]"},{url:"198.gif",alt:"[伸手]"},{url:"199.gif",alt:"[耍帅]"},{url:"200.png",alt:"[微笑]"},{url:"201.png",alt:"[生病]"},{url:"202.png",alt:"[哭泣]"},{url:"203.png",alt:"[吐舌]"},{url:"204.png",alt:"[迷糊]"},{url:"205.png",alt:"[瞪眼]"},{url:"206.png",alt:"[恐怖]"},{url:"207.png",alt:"[忧愁]"},{url:"208.png",alt:"[眨眉]"},{url:"209.png",alt:"[闭眼]"},{url:"210.png",alt:"[鄙视]"},{url:"211.png",alt:"[阴暗]"},{url:"212.png",alt:"[小鬼]"},{url:"213.png",alt:"[礼物]"},{url:"214.png",alt:"[拜佛]"},{url:"215.png",alt:"[力量]"},{url:"216.png",alt:"[金钱]"},{url:"217.png",alt:"[蛋糕]"},{url:"218.png",alt:"[彩带]"},{url:"219.png",alt:"[礼物]"}]],onlineEmoji:{"100.gif":"AbNQgA.gif","101.gif":"AbN3ut.gif","102.gif":"AbNM3d.gif","103.gif":"AbN8DP.gif","104.gif":"AbNljI.gif","105.gif":"AbNtUS.gif","106.gif":"AbNGHf.gif","107.gif":"AbNYE8.gif","108.gif":"AbNaCQ.gif","109.gif":"AbNN4g.gif","110.gif":"AbN0vn.gif","111.gif":"AbNd3j.gif","112.gif":"AbNsbV.gif","113.gif":"AbNwgs.gif","114.gif":"AbNrD0.gif","115.gif":"AbNDuq.gif","116.gif":"AbNg5F.gif","117.gif":"AbN6ET.gif","118.gif":"AbNcUU.gif","119.gif":"AbNRC4.gif","120.gif":"AbNhvR.gif","121.gif":"AbNf29.gif","122.gif":"AbNW8J.gif","123.gif":"AbNob6.gif","124.gif":"AbN5K1.gif","125.gif":"AbNHUO.gif","126.gif":"AbNIDx.gif","127.gif":"AbN7VK.gif","128.gif":"AbNb5D.gif","129.gif":"AbNX2d.gif","130.gif":"AbNLPe.gif","131.gif":"AbNjxA.gif","132.gif":"AbNO8H.gif","133.gif":"AbNxKI.gif","134.gif":"AbNzrt.gif","135.gif":"AbU9Vf.gif","136.gif":"AbUSqP.gif","137.gif":"AbUCa8.gif","138.gif":"AbUkGQ.gif","139.gif":"AbUFPg.gif","140.gif":"AbUPIS.gif","141.gif":"AbUZMn.gif","142.gif":"AbUExs.gif","143.gif":"AbUA2j.gif","144.gif":"AbUMIU.gif","145.gif":"AbUerq.gif","146.gif":"AbUKaT.gif","147.gif":"AbUmq0.gif","148.gif":"AbUuZV.gif","149.gif":"AbUliF.gif","150.gif":"AbU1G4.gif","151.gif":"AbU8z9.gif","152.gif":"AbU3RJ.gif","153.gif":"AbUYs1.gif","154.gif":"AbUJMR.gif","155.gif":"AbUadK.gif","156.gif":"AbUtqx.gif","157.gif":"AbUUZ6.gif","158.gif":"AbUBJe.gif","159.gif":"AbUdIO.gif","160.gif":"AbU0iD.gif","161.gif":"AbUrzd.gif","162.gif":"AbUDRH.gif","163.gif":"AbUyQA.gif","164.gif":"AbUWo8.gif","165.gif":"AbU6sI.gif","166.gif":"AbU2eP.gif","167.gif":"AbUcLt.gif","168.gif":"AbU4Jg.gif","169.gif":"AbURdf.gif","170.gif":"AbUhFS.gif","171.gif":"AbU5WQ.gif","172.gif":"AbULwV.gif","173.gif":"AbUIzj.gif","174.gif":"AbUTQs.gif","175.gif":"AbU7yn.gif","176.gif":"AbUqe0.gif","177.gif":"AbUHLq.gif","178.gif":"AbUOoT.gif","179.gif":"AbUvYF.gif","180.gif":"AbUjFU.gif","181.gif":"AbaSSJ.gif","182.gif":"AbUxW4.gif","183.gif":"AbaCO1.gif","184.gif":"Abapl9.gif","185.gif":"Aba9yR.gif","186.gif":"AbaFw6.gif","187.gif":"Abaiex.gif","188.gif":"AbakTK.gif","189.gif":"AbaZfe.png","190.gif":"AbaEFO.gif","191.gif":"AbaVYD.gif","192.gif":"AbamSH.gif","193.gif":"AbaKOI.gif","194.gif":"Abanld.gif","195.gif":"Abau6A.gif","196.gif":"AbaQmt.gif","197.gif":"Abal0P.gif","198.gif":"AbatpQ.gif","199.gif":"Aba1Tf.gif","200.png":"Aba8k8.png","201.png":"AbaGtS.png","202.png":"AbaJfg.png","203.png":"AbaNlj.png","204.png":"Abawmq.png","205.png":"AbaU6s.png","206.png":"AbaaXn.png","207.png":"Aba000.png","208.png":"AbarkT.png","209.png":"AbastU.png","210.png":"AbaB7V.png","211.png":"Abafn1.png","212.png":"Abacp4.png","213.png":"AbayhF.png","214.png":"Abag1J.png","215.png":"Aba2c9.png","216.png":"AbaRXR.png","217.png":"Aba476.png","218.png":"Abah0x.png","219.png":"Abdg58.png"}}},onLoad:function(g){var t=this;i.setNavigationBarTitle({title:g.name}),this.getMsgList(),this.AUDIO.onEnded(function(i){t.playMsgid=null}),this.RECORDER.onStart(function(i){t.recordBegin(i)}),this.RECORDER.onStop(function(i){t.recordEnd(i)})},methods:{getMsgList:function(){for(var i=[{id:0,uid:0,username:"大黑哥",face:"/static/img/face.jpg",time:"12:56",type:"text",msg:{content:"为什么温度会相差那么大？"}},{id:1,uid:1,username:"售后客服008",face:"/static/img/im/face/face_2.jpg",time:"12:57",type:"text",msg:{content:"这个是有偏差的，两个温度相差十几二十度是很正常的，如果相差五十度，那即是质量问题了。"}},{id:2,uid:1,username:"售后客服008",face:"/static/img/im/face/face_2.jpg",time:"12:59",type:"voice",msg:{url:"/static/voice/3.aac",length:"00:06"}},{id:3,uid:0,username:"大黑哥",face:"/static/img/face.jpg",time:"13:05",type:"voice",msg:{url:"/static/voice/2.mp3",length:"00:06"}},{id:4,uid:0,username:"大黑哥",face:"/static/img/face.jpg",time:"13:05",type:"img",msg:{url:"/static/img/goods/p10.jpg",w:200,h:200}},{id:5,uid:1,username:"售后客服008",face:"/static/img/im/face/face_2.jpg",time:"12:59",type:"img",msg:{url:"/static/img/q.jpg",w:1920,h:1080}}],g=0;g<i.length;g++)"img"==i[g].type&&(i[g]=this.setPicSize(i[g]),console.log(t("list[i]: "+JSON.stringify(i[g])," at pages/msg/chat/chat.vue:183")),this.msgImgList.push(i[g].msg.url));this.msgList=i,this.$nextTick(function(){this.scrollTop=9999,this.scrollAnimation=!0})},setPicSize:function(g){var t=i.upx2px(350),f=i.upx2px(350);if(g.msg.w>t||g.msg.h>f){var l=g.msg.w/g.msg.h;g.msg.w>g.msg.h?(g.msg.w=t,g.msg.h=g.msg.w/l):(g.msg.h=f,g.msg.w=g.msg.h*l)}return g},screenMsg:function(g){switch(g.uid!=this.myuid&&i.vibrateLong(),g.type){case"text":this.addTextMsg(g);break;case"voice":this.addVoiceMsg(g);break;case"img":this.addImgMsg(g);break}this.$nextTick(function(){this.scrollToView="msg"+g.id})},chooseEmoji:function(){this.showEmji="showEmoji"==this.showEmji?"hideEmoji":"showEmoji"},hideEmoji:function(){this.showEmji="showEmoji"==this.showEmji?"hideEmoji":""},addEmoji:function(i){this.textMsg+=i.alt},sendText:function(){if(this.hideEmoji(),this.textMsg){var i=this.replaceEmoji(this.textMsg),g={content:i};this.sendMsg(g,"text"),this.textMsg=""}},replaceEmoji:function(i){var g=this,f=i.replace(/\[([^(\]|\[)]*)\]/g,function(i,f){console.log(t("item: "+i," at pages/msg/chat/chat.vue:257"));for(var l=0;l<g.emojiList.length;l++)for(var e=g.emojiList[l],a=0;a<e.length;a++){var s=e[a];if(s.alt==i){var n="https://s2.ax1x.com/2019/04/12/",r='<img src="'+n+g.onlineEmoji[s.url]+'">';return console.log(t("imgstr: "+r," at pages/msg/chat/chat.vue:266")),r}}});return'<div style="display: flex;align-items: center;">'+f+"</div>"},chooseImage:function(){var g=this;this.hideEmoji(),i.chooseImage({sizeType:["original","compressed"],success:function(f){for(var l=function(l){i.getImageInfo({src:f.tempFilePaths[l],success:function(i){console.log(t(i.width," at pages/msg/chat/chat.vue:284")),console.log(t(i.height," at pages/msg/chat/chat.vue:285"));var e={url:f.tempFilePaths[l],w:i.width,h:i.height};g.sendMsg(e,"img")}})},e=0;e<f.tempFilePaths.length;e++)l(e)}})},sendMsg:function(i,g){var t=this,f=new Date,l=this.msgList[this.msgList.length-1].id;l++;var e={id:l,uid:0,username:"大黑哥",face:"/static/img/face.jpg",time:f.getHours()+":"+f.getMinutes(),type:g,msg:i};this.screenMsg(e),setTimeout(function(){l=t.msgList[t.msgList.length-1].id,l++,e={id:l,uid:1,username:"售后客服008",face:"/static/img/im/face/face_2.jpg",time:f.getHours()+":"+f.getMinutes(),type:g,msg:i},t.screenMsg(e)},3e3)},addTextMsg:function(i){this.msgList.push(i)},addVoiceMsg:function(i){this.msgList.push(i)},addImgMsg:function(i){i=this.setPicSize(i),this.msgImgList.push(i.msg.url),this.msgList.push(i)},showPic:function(g){i.previewImage({indicator:"none",current:g.msg.url,urls:this.msgImgList})},playVoice:function(i){this.playMsgid=i.id,this.AUDIO.src=i.msg.url,console.log(t("msg.msg.url: "+i.msg.url," at pages/msg/chat/chat.vue:337")),this.AUDIO.play()},voiceBegin:function(i){i.touches.length>1||(this.initPoint.Y=i.touches[0].clientY,this.initPoint.identifier=i.touches[0].identifier,this.RECORDER.start({format:"aac"}))},recordBegin:function(i){var g=this;this.recording=!0,this.voiceTis="松开 结束",this.recordLength=0,this.recordTimer=setInterval(function(){g.recordLength++},1e3)},voiceCancel:function(){this.recording=!1,this.voiceTis="按住 说话",this.recordTis="手指上滑 取消发送",this.willStop=!0,this.RECORDER.stop()},voiceIng:function(g){if(this.recording){var t=g.touches[0];this.initPoint.Y-t.clientY>=i.upx2px(100)?(this.willStop=!0,this.recordTis="松开手指 取消发送"):(this.willStop=!1,this.recordTis="手指上滑 取消发送")}},voiceEnd:function(i){this.recording&&(this.recording=!1,this.voiceTis="按住 说话",this.recordTis="手指上滑 取消发送",this.RECORDER.stop())},recordEnd:function(i){if(clearInterval(this.recordTimer),this.willStop)console.log(t("取消发送录音"," at pages/msg/chat/chat.vue:416"));else{plus.io.resolveLocalFileSystemURL(i.tempFilePath,function(i){i.file(function(i){console.log(t(i.size+"--"+i.name," at pages/msg/chat/chat.vue:399"))})},function(i){alert("Resolve file URL failed: "+i.message)}),console.log(t("e: "+JSON.stringify(i)," at pages/msg/chat/chat.vue:404"));var g={length:0,url:i.tempFilePath},f=parseInt(this.recordLength/60),l=this.recordLength%60;f=f<10?"0"+f:f,l=l<10?"0"+l:l,g.length=f+":"+l,this.sendMsg(g,"voice")}this.willStop=!1},switchVoice:function(){this.hideEmoji(),this.isVoice=!this.isVoice},discard:function(){}}};g.default=f}).call(this,t("6e42")["default"],t("0de9")["default"])},ea09:function(i,g,t){"use strict";t.r(g);var f=t("c1d1"),l=t.n(f);for(var e in f)"default"!==e&&function(i){t.d(g,i,function(){return f[i]})}(e);g["default"]=l.a}},[["68f8","common/runtime","common/vendor"]]]);