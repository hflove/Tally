(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/uni-fav/uni-fav"],{"3dcd":function(e,t,n){},a17c:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=function(){return n.e("components/uni-icons/uni-icons").then(n.bind(null,"9904"))},o={name:"UniFav",components:{uniIcons:c},props:{star:{type:[Boolean,String],default:!0},bgColor:{type:String,default:"#eeeeee"},fgColor:{type:String,default:"#666666"},bgColorChecked:{type:String,default:"#007aff"},fgColorChecked:{type:String,default:"#FFFFFF"},circle:{type:[Boolean,String],default:!1},checked:{type:Boolean,default:!1},contentText:{type:Object,default:function(){return{contentDefault:"收藏",contentFav:"已收藏"}}}},watch:{checked:function(){e.report&&(this.checked?e.report("收藏","收藏"):e.report("取消收藏","取消收藏"))}},methods:{onClick:function(){this.$emit("click")}}};t.default=o}).call(this,n("6e42")["default"])},ce80:function(e,t,n){"use strict";n.r(t);var c=n("a17c"),o=n.n(c);for(var u in c)"default"!==u&&function(e){n.d(t,e,function(){return c[e]})}(u);t["default"]=o.a},de04:function(e,t,n){"use strict";n.r(t);var c=n("deb9"),o=n("ce80");for(var u in o)"default"!==u&&function(e){n.d(t,e,function(){return o[e]})}(u);n("f026");var r=n("2877"),a=Object(r["a"])(o["default"],c["a"],c["b"],!1,null,null,null);t["default"]=a.exports},deb9:function(e,t,n){"use strict";var c=function(){var e=this,t=e.$createElement;e._self._c},o=[];n.d(t,"a",function(){return c}),n.d(t,"b",function(){return o})},f026:function(e,t,n){"use strict";var c=n("3dcd"),o=n.n(c);o.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/uni-fav/uni-fav-create-component',
    {
        'components/uni-fav/uni-fav-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('6e42')['createComponent'](__webpack_require__("de04"))
        })
    },
    [['components/uni-fav/uni-fav-create-component']]
]);                
