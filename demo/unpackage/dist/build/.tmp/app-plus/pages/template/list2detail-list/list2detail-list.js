(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/template/list2detail-list/list2detail-list"],{"01d2":function(t,e,n){"use strict";(function(t){n("d105"),n("921b");i(n("66fd"));var e=i(n("e384"));function i(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},"0a10":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement;t._self._c},a=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return a})},"247b":function(t,e,n){"use strict";(function(t,i){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=function(){return n.e("components/uni-load-more/uni-load-more").then(n.bind(null,"6674"))},o=n("9a23").dateUtils,s={components:{uniLoadMore:a},data:function(){return{banner:{},listData:[],last_id:"",reload:!1,status:"more",contentText:{contentdown:"上拉加载更多",contentrefresh:"加载中",contentnomore:"没有更多"}}},onLoad:function(){this.getBanner(),this.getList()},onPullDownRefresh:function(){this.reload=!0,this.last_id="",this.getBanner(),this.getList()},onReachBottom:function(){this.status="more",this.getList()},methods:{getBanner:function(){var e=this,n={column:"id,post_id,title,author_name,cover,published_at"};t.request({url:"https://unidemo.dcloud.net.cn/api/banner/36kr",data:n,success:function(n){t.stopPullDownRefresh(),200==n.statusCode&&(e.banner=n.data)},fail:function(t,e){console.log(i("fail"+JSON.stringify(t)," at pages/template/list2detail-list/list2detail-list.vue:76"))}})},getList:function(){var e=this,n={column:"id,post_id,title,author_name,cover,published_at"};this.last_id&&(this.status="loading",n.minId=this.last_id,n.time=(new Date).getTime()+"",n.pageSize=10),t.request({url:"https://unidemo.dcloud.net.cn/api/news",data:n,success:function(t){if(200==t.statusCode){var n=e.setTime(t.data);e.listData=e.reload?n:e.listData.concat(n),e.last_id=n[n.length-1].id,e.reload=!1}},fail:function(t,e){console.log(i("fail"+JSON.stringify(t)," at pages/template/list2detail-list/list2detail-list.vue:103"))}})},goDetail:function(e){var n={author_name:e.author_name,cover:e.cover,id:e.id,post_id:e.post_id,published_at:e.published_at,title:e.title};t.navigateTo({url:"../list2detail-detail/list2detail-detail?detailDate="+encodeURIComponent(JSON.stringify(n))})},setTime:function(t){var e=[];return t.forEach(function(t){e.push({author_name:t.author_name,cover:t.cover,id:t.id,post_id:t.post_id,published_at:o.format(t.published_at),title:t.title})}),e}}};e.default=s}).call(this,n("6e42")["default"],n("0de9")["default"])},"578d":function(t,e,n){},d38d:function(t,e,n){"use strict";n.r(e);var i=n("247b"),a=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,function(){return i[t]})}(o);e["default"]=a.a},d5e8:function(t,e,n){"use strict";var i=n("578d"),a=n.n(i);a.a},e384:function(t,e,n){"use strict";n.r(e);var i=n("0a10"),a=n("d38d");for(var o in a)"default"!==o&&function(t){n.d(e,t,function(){return a[t]})}(o);n("d5e8");var s=n("2877"),l=Object(s["a"])(a["default"],i["a"],i["b"],!1,null,null,null);e["default"]=l.exports}},[["01d2","common/runtime","common/vendor"]]]);