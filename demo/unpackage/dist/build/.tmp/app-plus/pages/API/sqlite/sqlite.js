(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/API/sqlite/sqlite"],{"067c":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{title:"SQLite"}},methods:{openDB:function(){plus.sqlite.openDatabase({name:"first",path:"_doc/test.db",success:function(t){plus.nativeUI.alert("打开数据库test.db成功 ")},fail:function(t){plus.nativeUI.alert("打开数据库test.db失败: "+JSON.stringify(t))}})},executeSQL:function(){plus.sqlite.executeSql({name:"first",sql:'create table if not exists database("name" CHAR(110),"sex" CHAR(10),"age" INT(11))',success:function(t){plus.sqlite.executeSql({name:"first",sql:"insert into database values('彦','女','7000')",success:function(t){plus.nativeUI.alert("创建表table和插入数据成功")},fail:function(t){plus.nativeUI.alert("创建表table成功但插入数据失败: "+JSON.stringify(t))}})},fail:function(t){plus.nativeUI.alert("创建表table失败: "+JSON.stringify(t))}})},selectSQL:function(){plus.sqlite.selectSql({name:"first",sql:"select * from database",success:function(t){plus.nativeUI.alert("查询SQL语句成功: "+JSON.stringify(t))},fail:function(t){plus.nativeUI.alert("查询SQL语句失败: "+JSON.stringify(t))}})},droptable:function(){plus.sqlite.executeSql({name:"first",sql:"drop table database",success:function(t){plus.nativeUI.alert("删除表database成功")},fail:function(t){plus.nativeUI.alert("删除表database失败: "+JSON.stringify(t))}})},closeDB:function(){plus.sqlite.closeDatabase({name:"first",success:function(t){plus.nativeUI.alert("关闭数据库成功")},fail:function(t){plus.nativeUI.alert("关闭数据库失败: "+JSON.stringify(t))}})},isOpenDB:function(){plus.sqlite.isOpenDatabase({name:"first",path:"_doc/test.db"})?plus.nativeUI.alert("Opened!"):plus.nativeUI.alert("Unopened!")}}};e.default=a},3942:function(t,e,n){},"409f":function(t,e,n){"use strict";var a=n("3942"),s=n.n(a);s.a},"436a":function(t,e,n){"use strict";n.r(e);var a=n("b88b"),s=n("56ef");for(var i in s)"default"!==i&&function(t){n.d(e,t,function(){return s[t]})}(i);n("409f");var l=n("2877"),u=Object(l["a"])(s["default"],a["a"],a["b"],!1,null,null,null);e["default"]=u.exports},"56ef":function(t,e,n){"use strict";n.r(e);var a=n("067c"),s=n.n(a);for(var i in a)"default"!==i&&function(t){n.d(e,t,function(){return a[t]})}(i);e["default"]=s.a},b88b:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c},s=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return s})},fa70:function(t,e,n){"use strict";(function(t){n("d105"),n("921b");a(n("66fd"));var e=a(n("436a"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])}},[["fa70","common/runtime","common/vendor"]]]);