webpackJsonp([4],{"1ZeE":function(t,e){},"2jaJ":function(t,e){},DXjD:function(t,e){},JXTs:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s("fZjL"),n=s.n(i),o=s("Dd8w"),a=s.n(o),r=s("NYxO"),c={props:{host:{type:Object,required:!0}},data:function(){return{pathMap:{resource:"/resource",hosts:"/hosts"}}},computed:a()({},Object(r.c)("objectBiz",["privilegeBusiness"])),methods:{handleHostClick:function(){var t=1===this.host.biz[0].default?this.pathMap.resource:this.pathMap.hosts;if(t===this.pathMap.hosts){var e=this.host.biz[0].bk_biz_id;if(!this.checkoutBizAuth(e))return void this.$error(this.$t('Hosts["权限不足"]'));this.$store.commit("setBkBizId",e)}this.$store.commit("setHostSearch",{ip:this.host.host.bk_host_innerip,outerip:!1,exact:1}),this.$router.push(t)},checkoutBizAuth:function(t){return this.privilegeBusiness.some(function(e){return e.bk_biz_id===t})},getHostTitle:function(t){return t.host.bk_host_innerip+"—"+t.biz[0].bk_biz_name}}},l={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"search-item-host clearfix",attrs:{title:t.getHostTitle(t.host)},on:{click:t.handleHostClick}},[s("div",{staticClass:"host-ip fl"},[t._v(t._s(t.host.host.bk_host_innerip))]),t._v(" "),s("div",{staticClass:"host-biz fr"},[t._v(t._s(t.host.biz[0].bk_biz_name))])])},staticRenderFns:[]};var u={components:{vSearchItemHost:s("VU/8")(c,l,!1,function(t){s("1ZeE")},"data-v-6916df66",null).exports},props:{model:{type:String,required:!0},list:{type:Array,required:!0}},data:function(){return{itemPerCol:5}},computed:{columns:function(){var t=Math.ceil(this.list.length/this.itemPerCol);return t>3?3:t}},methods:{getCellIndex:function(t,e){return(t-1)*this.itemPerCol+e-1}}},d={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"search-item-layout"},[s("div",{staticClass:"clearfix"},t._l(t.columns,function(e){return s("ul",{key:e,staticClass:"search-list fl"},t._l(t.itemPerCol,function(i){return t.getCellIndex(e,i)<t.list.length?s("li",{staticClass:"search-item"},["host"===t.model?s("v-search-item-host",{attrs:{host:t.list[t.getCellIndex(e,i)]}}):t._e()],1):t._e()}))}))])},staticRenderFns:[]};var h={components:{vSearchItem:s("VU/8")(u,d,!1,function(t){s("DXjD")},"data-v-ecd6e910",null).exports},data:function(){return{focus:!1,keyword:"",searchParams:{page:{start:0,limit:15,sort:"bk_host_id"},pattern:"",ip:{flag:"bk_host_innerip|bk_host_outerip",exact:0,data:[]},condition:[{bk_obj_id:"host",fields:[],condition:[]},{bk_obj_id:"module",fields:[],condition:[]},{bk_obj_id:"set",fields:[],condition:[]},{bk_obj_id:"biz",fields:[],condition:[]}]},resultTab:{active:"host",headStyle:{height:"40px",color:"#3c96ff"},list:{},count:{}},requestId:"indexHostSearch"}},computed:a()({},Object(r.c)("objectModelClassify",["classifications"]),{allModels:function(){var t=[];return this.classifications.forEach(function(e){e.bk_objects.forEach(function(e){t.push(e)})}),t},resultTabpanels:function(){return n()(this.resultTab.list)},loading:function(){return this.$loading(this.requestId)}}),watch:{keyword:function(t){t.length>2?(this.searchParams.ip.data=[t],this.handleSearch(t)):(this.searchParams.ip.data=[],this.resultTab.list={},this.resultTab.count={})}},methods:{handleSearch:function(){var t=this;this.$store.dispatch("hostSearch/searchHost",{params:this.searchParams,config:{requestId:this.requestId,cancelPrevious:!0}}).then(function(e){t.addResultList("host",t.initSearchList(e.info)),t.addResultCount("host",e.count)})},addResultList:function(t,e){e.length?this.$set(this.resultTab.list,t,e):this.$delete(this.resultTab.list,t)},addResultCount:function(t,e){e?this.$set(this.resultTab.count,t,e):this.$delete(this.resultTab.count,t)},getPanelTitle:function(t){var e=this.allModels.find(function(e){return e.bk_obj_id===t});return console.log(e.bk_obj_name+"("+this.resultTab.count[t]+")"),e?e.bk_obj_name+"("+this.resultTab.count[t]+")":null},initSearchList:function(t){var e=[];return t.forEach(function(t){t.biz.forEach(function(s){var i=a()({},t);i.biz=[s],e.push(i)})}),e},hasMore:function(){return this.resultTabpanels.length&&this.resultTab.count[this.resultTab.active]>15},showMore:function(){var t={host:this.showMoreHost},e=this.resultTab.active;t.hasOwnProperty(e)&&t[e](),this.handleClickOutside()},showMoreHost:function(){this.$store.commit("setHostSearch",{ip:this.keyword,exact:0,innerip:!0,outerip:!0,assigned:!0}),this.$router.push("/resource")},handleClickOutside:function(){this.focus=!1},handleEnter:function(){if(this.highlightIndex>=0){var t=this.searchList[this.highlightIndex],e=t.host.bk_host_innerip,s=t.biz[0].default;this.$store.commit("setQuickSearchParams",{text:e,type:"ip"}),1===s?this.$router.push("/resource"):(this.$store.commit("setBkBizId",t.biz[0].bk_biz_id),this.$router.push("/hosts"))}}}},f={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"search-layout"},[s("div",{directives:[{name:"click-outside",rawName:"v-click-outside",value:t.handleClickOutside,expression:"handleClickOutside"}],staticClass:"search-box"},[s("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.keyword,expression:"keyword",modifiers:{trim:!0}}],staticClass:"search-keyword",attrs:{id:"indexSearch",type:"text",maxlength:"40",placeholder:t.$t("Index['开始查询']")},domProps:{value:t.keyword},on:{focus:function(e){t.focus=!0},input:function(e){e.target.composing||(t.keyword=e.target.value.trim())},blur:function(e){t.$forceUpdate()}}}),t._v(" "),s("label",{staticClass:"bk-icon icon-search",attrs:{for:"indexSearch"}}),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.focus&&t.keyword.length>2,expression:"focus && keyword.length > 2"}],staticClass:"search-result"},[t.loading?s("div",{directives:[{name:"bkloading",rawName:"v-bkloading",value:{isLoading:t.loading},expression:"{isLoading: loading}"}],staticClass:"search-loading"}):t._e(),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:!t.loading,expression:"!loading"}],class:["result-layout",{"result-layout-empty":!t.resultTabpanels.length}]},[t.resultTabpanels.length?s("bk-tab",{staticClass:"result-tab",attrs:{"active-name":t.resultTab.active,size:"small",headStyle:t.resultTab.headStyle},on:{"update:activeName":function(e){t.$set(t.resultTab,"active",e)}}},t._l(t.resultTabpanels,function(e,i){return s("bk-tabpanel",{key:i,attrs:{name:e,title:t.getPanelTitle(e)}},[s("v-search-item",{attrs:{list:t.resultTab.list[e],model:e}})],1)})):s("div",{staticClass:"result-empty"},[t._v(t._s(t.$t('Common["暂时没有数据"]')))]),t._v(" "),t.hasMore()?s("div",{staticClass:"result-more",on:{click:t.showMore}},[t._v(t._s(t.$t('Index["查看更多结果"]')))]):t._e()],1)])])])},staticRenderFns:[]};var b=s("VU/8")(h,f,!1,function(t){s("dbb8")},"data-v-eca84294",null).exports,_=s("Gu7T"),m=s.n(_),v=s("bOdI"),p=s.n(v),y={data:function(){return{modelInstCount:{}}},computed:a()({},Object(r.c)("userCustom",["usercustom","recentlyKey"]),Object(r.c)("objectModelClassify",["authorizedNavigation"]),{recently:function(){return this.usercustom[this.recentlyKey]||[]},recentlyModels:function(){var t=this,e=[];return this.recently.forEach(function(s){var i=t.getRouteModel(s);i&&e.push(i)}),e},recentlyModelsPath:function(){return this.recentlyModels.map(function(t){return t.path})},visibleRecentlyModels:function(){return this.recentlyModels.slice(0,8)},recentlyCount:function(){return this.visibleRecentlyModels.length>4?8:4}}),watch:{visibleRecentlyModels:function(t){var e=this;t.forEach(function(t){e.modelInstCount.hasOwnProperty(t.id)||e.loadInst(t.id)})}},created:function(){var t=this;this.visibleRecentlyModels.forEach(function(e){t.modelInstCount.hasOwnProperty(e.id)||t.loadInst(e.id)})},methods:{getRouteModel:function(t){for(var e=void 0,s=0;s<this.authorizedNavigation.length;s++){if(e=(this.authorizedNavigation[s].children||[]).find(function(e){return e.path===t}))break}return e},getRecentlyName:function(t){return t.i18n?this.$t(t.i18n):t.name},getRecentlyCount:function(t){return this.modelInstCount.hasOwnProperty(t.id)?this.modelInstCount[t.id]:"--"},gotoRecently:function(t){t&&(this.$store.commit("setHeaderStatus",{back:!0}),this.$router.push(t.path))},deleteRecently:function(t){var e=this.recentlyModelsPath.filter(function(e){return e!==t.path});this.$store.dispatch("userCustom/saveUsercustom",p()({},this.recentlyKey,e))},updateRecently:function(t){var e=this.recently.filter(function(e){return e!==t}),s=this.getRouteModel(t);s&&!["bk_host_manage","bk_back_config"].includes(s.classificationId)&&this.$store.dispatch("userCustom/saveUsercustom",p()({},this.recentlyKey,[t].concat(m()(e))))},loadInst:function(t){var e=this,s={biz:this.loadBizInst,default:this.loadCommonInst};(s.hasOwnProperty(t)?s[t]:s.default)(t).then(function(s){e.$set(e.modelInstCount,t,s.count)})},loadBizInst:function(){return this.$store.dispatch("objectBiz/searchBusiness",{params:{condition:{bk_data_status:{$ne:"disabled"}},fields:[],page:{start:0,limit:1}}})},loadCommonInst:function(t){return this.$store.dispatch("objectCommonInst/searchInst",{params:{condition:{},fields:{},page:{start:0,limit:1}},objId:t})}}},g={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"recently-layout clearfix"},[t.visibleRecentlyModels.length?t._l(t.recentlyCount,function(e){return s("div",{key:e,staticClass:"recently-browse fl",class:{"recently-browse-model":!!t.recentlyModels[e-1]},on:{click:function(s){t.gotoRecently(t.recentlyModels[e-1])}}},[t.recentlyModels[e-1]?[s("i",{class:["recently-icon",t.recentlyModels[e-1].icon]}),t._v(" "),s("div",{staticClass:"recently-info"},[s("strong",{staticClass:"recently-name"},[t._v(t._s(t.getRecentlyName(t.recentlyModels[e-1])))]),t._v(" "),s("span",{staticClass:"recently-inst"},[t._v("数量："+t._s(t.getRecentlyCount(t.recentlyModels[e-1])))])]),t._v(" "),s("i",{staticClass:"recently-delete bk-icon icon-close",on:{click:function(s){s.stopPropagation(),t.deleteRecently(t.recentlyModels[e-1])}}})]:t._e()],2)}):s("div",{staticClass:"recently-empty"},[t._v(t._s(t.$t("Index['暂无使用记录']")))])],2)},staticRenderFns:[]};var k=s("VU/8")(y,g,!1,function(t){s("zLSR")},"data-v-b173cebc",null).exports,C=s("0ReW"),$=(s("R3sX"),{props:{classify:{type:Object,required:!0}},data:function(){return{notCollectable:["bk_host_manage","bk_organization"],notModelClassify:["bk_host_manage","bk_back_config"]}},computed:a()({},Object(r.c)("userCustom",["usercustom","classifyNavigationKey"]),{customNavigation:function(){return this.usercustom[this.classifyNavigationKey]||[]}}),methods:{redirect:function(t){var e=this.getModelLink(t);this.$store.commit("setHeaderStatus",{back:!0}),this.$router.push(e)},getModelLink:function(t){return this.notModelClassify.includes(t.bk_classification_id)?t.path:"biz"===t.bk_obj_id?"/business":"/general-model/"+t.bk_obj_id},toggleCustomNavigation:function(t){var e=this,s=void 0,i=this.customNavigation,n=!1;i.includes(t.bk_obj_id)?s=i.filter(function(e){return e!==t.bk_obj_id}):(n=!0,s=[].concat(m()(i),[t.bk_obj_id])),this.$store.dispatch("userCustom/saveUsercustom",p()({},this.classifyNavigationKey,s)).then(function(t){t.result?e.$success(n?e.$t('Index["添加导航成功"]'):e.$t('Index["取消导航成功"]')):e.$error(t.bk_error_msg)})}}}),j={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"classify"},[s("h4",{staticClass:"classify-name"},[t._v(t._s(t.classify.bk_classification_name+"("+t.classify.bk_objects.length+")"))]),t._v(" "),s("div",{staticClass:"models-layout"},t._l(t.classify.bk_objects,function(e,i){return s("div",{key:i,staticClass:"models-link",attrs:{title:e.bk_obj_name},on:{click:function(s){t.redirect(e)}}},[s("i",{class:["model-icon","icon",e.bk_obj_icon]}),t._v(" "),s("span",{staticClass:"model-name"},[t._v(t._s(e.bk_obj_name))]),t._v(" "),t.notCollectable.includes(t.classify.bk_classification_id)?t._e():s("i",{staticClass:"model-star bk-icon",class:[t.customNavigation.includes(e.bk_obj_id)?"icon-star-shape":"icon-star"],on:{click:function(s){s.preventDefault(),s.stopPropagation(),t.toggleCustomNavigation(e)}}})])}))])},staticRenderFns:[]};var M={components:{vClassifyItem:s("VU/8")($,j,!1,function(t){s("Wwu7")},"data-v-5092e912",null).exports},computed:a()({},Object(r.c)("objectModelClassify",["authorizedClassifications","authorizedNavigation"]),{hostManageClassification:function(){var t=this,e={bk_classification_icon:C.bk_host_manage.icon,bk_classification_id:C.bk_host_manage.id,bk_classification_name:this.$t(C.bk_host_manage.i18n),bk_classification_type:"inner"},s=this.authorizedNavigation.find(function(t){return t.id===C.bk_host_manage.id}),i=C.bk_host_manage.children.filter(function(t){return s.children.some(function(e){return e.id===t.id})});return e.bk_objects=i.map(function(e){return{bk_obj_name:t.$t(e.i18n),bk_obj_id:e.id,bk_obj_icon:e.icon,path:e.path,bk_classification_id:C.bk_host_manage.id}}),e},classifyColumns:function(){var t=this,e=[0,0,0,0],s=[[],[],[],[]];return[this.hostManageClassification].concat(m()(this.authorizedClassifications)).forEach(function(i){var n=Math.min.apply(Math,e),o=e.indexOf(n);s[o].push(i),e[o]=e[o]+t.calcWaterfallHeight(i)}),s}}),methods:{calcWaterfallHeight:function(t){return 62+36*t.bk_objects.length}}},x={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"classify-layout clearfix"},t._l(t.classifyColumns.length,function(e){return s("div",{key:e,staticClass:"classify-waterfall fl"},t._l(t.classifyColumns[e-1],function(t){return s("v-classify-item",{key:t.bk_classification_id,attrs:{classify:t}})}))}))},staticRenderFns:[]};var w=s("VU/8")(M,x,!1,function(t){s("dReS")},"data-v-0d7d6cf0",null).exports,R=void 0,z=function(){if(void 0!==R)return R;var t=document.createElement("div");t.style.visibility="hidden",t.style.width="100px",t.style.position="absolute",t.style.top="-9999px",document.body.appendChild(t);var e=t.offsetWidth;t.style.overflow="scroll";var s=document.createElement("div");s.style.width="100%",t.appendChild(s);var i=s.offsetWidth;return t.parentNode.removeChild(t),R=e-i},I=s("RH6W"),T={components:{vSearch:b,vRecently:k,vClassify:w},data:function(){return{year:(new Date).getFullYear(),scrollHandler:null,resizeHandler:null}},beforeRouteLeave:function(t,e,s){this.$refs.recently.updateRecently(t.path),s()},created:function(){var t=this,e=function(e){var s=e.getBoundingClientRect(),i=s.height,n=s.width,o=e.scrollTop,a=t.$refs.copyright.getBoundingClientRect().height,r=n===e.scrollWidth+z()?0:z();t.$refs.copyright.style.top=o+i-a-r+"px"};this.scrollHandler=function(t){e(t.target)},this.resizeHandler=function(){e(document.querySelector(".main-scroller"))},Object(I.b)(this.scrollHandler),Object(I.a)(this.resizeHandler)},mounted:function(){this.resizeHandler()},beforeDestroy:function(){Object(I.f)(this.scrollHandler),Object(I.e)(this.resizeHandler)}},H={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"index-wrapper"},[e("v-search",{staticClass:"index-search"}),this._v(" "),e("v-recently",{ref:"recently"}),this._v(" "),e("v-classify"),this._v(" "),e("p",{ref:"copyright",staticClass:"copyright"},[this._v("\n        Copyright © 2012-"+this._s(this.year)+" Tencent BlueKing. All Rights Reserved. 腾讯蓝鲸 版权所有\n    ")])],1)},staticRenderFns:[]};var O=s("VU/8")(T,H,!1,function(t){s("2jaJ")},"data-v-44a86994",null);e.default=O.exports},Wwu7:function(t,e){},dReS:function(t,e){},dbb8:function(t,e){},zLSR:function(t,e){}});
//# sourceMappingURL=4.e7d8ebfc262a8deec2e0.js.map