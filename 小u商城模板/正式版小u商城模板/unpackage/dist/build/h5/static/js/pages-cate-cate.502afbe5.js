(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-cate-cate"],{"0297":function(i,c,e){var n=e("24fb");c=n(!1),c.push([i.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.u-search[data-v-13f672b9]{\r\ndisplay:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;\r\n-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-flex:1;-webkit-flex:1;flex:1}.u-content[data-v-13f672b9]{\r\ndisplay:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;\r\n-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding:0 %?18?%;-webkit-box-flex:1;-webkit-flex:1;flex:1}.u-clear-icon[data-v-13f672b9]{\r\ndisplay:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;\r\n-webkit-box-align:center;-webkit-align-items:center;align-items:center}.u-input[data-v-13f672b9]{-webkit-box-flex:1;-webkit-flex:1;flex:1;font-size:%?28?%;line-height:1;margin:0 %?10?%;color:#909399}.u-close-wrap[data-v-13f672b9]{width:%?40?%;height:100%;\r\ndisplay:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;\r\n-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;border-radius:50%}.u-placeholder-class[data-v-13f672b9]{color:#909399}.u-action[data-v-13f672b9]{font-size:%?28?%;color:#303133;width:0;overflow:hidden;-webkit-transition:all .3s;transition:all .3s;white-space:nowrap;text-align:center}.u-action-active[data-v-13f672b9]{width:%?80?%;margin-left:%?10?%}',""]),i.exports=c},"039c":function(i,c,e){"use strict";var n=e("4ea4");e("4160"),e("d81d"),e("159b"),Object.defineProperty(c,"__esModule",{value:!0}),c.default=void 0,e("96cf");var t=n(e("1da1")),o=(n(e("3297")),{data:function(){return{id:"id3",activeIndex:0,cateHeight:"",catelist:[],keywords:"",isActive:!1}},onLoad:function(){this.cateHeight=uni.getSystemInfoSync().windowHeight,this.getCate()},methods:{getCate:function(){var i=this;return(0,t.default)(regeneratorRuntime.mark((function c(){var e;return regeneratorRuntime.wrap((function(c){while(1)switch(c.prev=c.next){case 0:return c.next=2,i.$http({url:"/api/getcates"});case 2:e=c.sent,console.log(e),e.data.list.forEach((function(c){c.children&&c.children.map((function(c){c.img=i.$baseUrl+c.img}))})),i.catelist=e.data.list;case 6:case"end":return c.stop()}}),c)})))()},toGoodsDetail:function(i){uni.navigateTo({url:"../goodlist/goodlist?cateid="+i+"&type=2"})},changeCate:function(i){this.id="id"+i,this.activeIndex=i}}});c.default=o},"096f":function(i,c,e){"use strict";e.d(c,"b",(function(){return t})),e.d(c,"c",(function(){return o})),e.d(c,"a",(function(){return n}));var n={uIcon:e("a321").default},t=function(){var i=this,c=i.$createElement,e=i._self._c||c;return e("v-uni-view",{staticClass:"u-search",style:{margin:i.margin},on:{click:function(c){arguments[0]=c=i.$handleEvent(c),i.clickHandler.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"u-content",style:{backgroundColor:i.bgColor,borderRadius:"round"==i.shape?"100rpx":"10rpx",border:i.borderStyle,height:i.height+"rpx"}},[e("v-uni-view",{staticClass:"u-icon-wrap"},[e("u-icon",{staticClass:"u-clear-icon",attrs:{size:30,name:i.searchIcon,color:i.searchIconColor?i.searchIconColor:i.color}})],1),e("v-uni-input",{staticClass:"u-input",style:[{textAlign:i.inputAlign,color:i.color,backgroundColor:i.bgColor},i.inputStyle],attrs:{"confirm-type":"search",value:i.value,disabled:i.disabled,focus:i.focus,maxlength:i.maxlength,"placeholder-class":"u-placeholder-class",placeholder:i.placeholder,"placeholder-style":"color: "+i.placeholderColor,type:"text"},on:{blur:function(c){arguments[0]=c=i.$handleEvent(c),i.blur.apply(void 0,arguments)},confirm:function(c){arguments[0]=c=i.$handleEvent(c),i.search.apply(void 0,arguments)},input:function(c){arguments[0]=c=i.$handleEvent(c),i.inputChange.apply(void 0,arguments)},focus:function(c){arguments[0]=c=i.$handleEvent(c),i.getFocus.apply(void 0,arguments)}}}),i.keyword&&i.clearabled&&i.focused?e("v-uni-view",{staticClass:"u-close-wrap",on:{click:function(c){arguments[0]=c=i.$handleEvent(c),i.clear.apply(void 0,arguments)}}},[e("u-icon",{staticClass:"u-clear-icon",attrs:{name:"close-circle-fill",size:"34",color:"#c0c4cc"}})],1):i._e()],1),e("v-uni-view",{staticClass:"u-action",class:[i.showActionBtn||i.show?"u-action-active":""],style:[i.actionStyle],on:{click:function(c){c.stopPropagation(),c.preventDefault(),arguments[0]=c=i.$handleEvent(c),i.custom.apply(void 0,arguments)}}},[i._v(i._s(i.actionText))])],1)},o=[]},"13ec":function(i,c,e){"use strict";e("a9e3"),Object.defineProperty(c,"__esModule",{value:!0}),c.default=void 0;var n={name:"u-search",props:{shape:{type:String,default:"round"},bgColor:{type:String,default:"#f2f2f2"},placeholder:{type:String,default:"请输入关键字"},clearabled:{type:Boolean,default:!0},focus:{type:Boolean,default:!1},showAction:{type:Boolean,default:!0},actionStyle:{type:Object,default:function(){return{}}},actionText:{type:String,default:"搜索"},inputAlign:{type:String,default:"left"},disabled:{type:Boolean,default:!1},animation:{type:Boolean,default:!1},borderColor:{type:String,default:"none"},value:{type:String,default:""},height:{type:[Number,String],default:64},inputStyle:{type:Object,default:function(){return{}}},maxlength:{type:[Number,String],default:"-1"},searchIconColor:{type:String,default:""},color:{type:String,default:"#606266"},placeholderColor:{type:String,default:"#909399"},margin:{type:String,default:"0"},searchIcon:{type:String,default:"search"}},data:function(){return{keyword:"",showClear:!1,show:!1,focused:this.focus}},watch:{keyword:function(i){this.$emit("input",i),this.$emit("change",i)},value:{immediate:!0,handler:function(i){this.keyword=i}}},computed:{showActionBtn:function(){return!(this.animation||!this.showAction)},borderStyle:function(){return this.borderColor?"1px solid ".concat(this.borderColor):"none"}},methods:{inputChange:function(i){this.keyword=i.detail.value},clear:function(){var i=this;this.keyword="",this.$nextTick((function(){i.$emit("clear")}))},search:function(i){this.$emit("search",i.detail.value);try{uni.hideKeyboard()}catch(i){}},custom:function(){this.$emit("custom",this.keyword);try{uni.hideKeyboard()}catch(i){}},getFocus:function(){this.focused=!0,this.animation&&this.showAction&&(this.show=!0),this.$emit("focus",this.keyword)},blur:function(){var i=this;setTimeout((function(){i.focused=!1}),100),this.show=!1,this.$emit("blur",this.keyword)},clickHandler:function(){this.disabled&&this.$emit("click")}}};c.default=n},"1abc":function(i,c,e){"use strict";var n=e("d2fe"),t=e.n(n);t.a},"25ab":function(i,c,e){"use strict";e.d(c,"b",(function(){return t})),e.d(c,"c",(function(){return o})),e.d(c,"a",(function(){return n}));var n={uSearch:e("efc4").default},t=function(){var i=this,c=i.$createElement,e=i._self._c||c;return e("v-uni-view",{staticClass:"u-wrap"},[e("v-uni-view",{staticClass:"u-search-box"},[e("u-search",{attrs:{shape:"square","show-action":!0,"action-text":"搜索",clearabled:!0,animation:!0,disabled:!0},on:{click:function(c){arguments[0]=c=i.$handleEvent(c),i.goSearch.apply(void 0,arguments)}},model:{value:i.keywords,callback:function(c){i.keywords=c},expression:"keywords"}})],1),e("v-uni-view",{staticClass:"container",style:{height:i.cateHeight+"px"}},[e("v-uni-scroll-view",{staticClass:"left",attrs:{"scroll-with-animation":!0,"scroll-y":!0}},i._l(i.catelist,(function(c,n){return e("v-uni-view",{key:n,staticClass:"left_list",on:{click:function(c){arguments[0]=c=i.$handleEvent(c),i.changeCate(n)}}},[e("v-uni-text",{staticClass:"activeIndex"},[i._v(i._s(c.catename))]),n==i.activeIndex?e("v-uni-text",{class:{active:!0}}):i._e()],1)})),1),e("v-uni-scroll-view",{staticClass:"right",attrs:{"scroll-y":!0,"scroll-into-view":i.id}},i._l(i.catelist,(function(c,n){return e("v-uni-view",{key:n,staticClass:"right_box",attrs:{id:"id"+n}},[e("v-uni-view",{staticClass:"row_title"},[i._v(i._s(c.catename))]),e("v-uni-view",{staticClass:"row"},i._l(c.children,(function(c,n){return e("v-uni-view",{key:n,staticClass:"row_list",on:{click:function(e){arguments[0]=e=i.$handleEvent(e),i.toGoodsDetail(c.id)}}},[e("v-uni-image",{attrs:{src:c.img,mode:"widthFix"}}),e("v-uni-text",[i._v(i._s(c.catename))])],1)})),1)],1)})),1)],1)],1)},o=[]},3297:function(i,c,e){"use strict";Object.defineProperty(c,"__esModule",{value:!0}),c.default=void 0;var n=[{id:1,name:"女装",chidren:[{name:"A字裙",key:"A字裙",icon:"https://cdn.uviewui.com/uview/common/classify/1/1.jpg",cat:10},{name:"T恤",key:"T恤",icon:"https://cdn.uviewui.com/uview/common/classify/1/2.jpg",cat:10},{name:"半身裙",key:"半身裙",icon:"https://cdn.uviewui.com/uview/common/classify/1/3.jpg",cat:10},{name:"衬衫",key:"衬衫",icon:"https://cdn.uviewui.com/uview/common/classify/1/4.jpg",cat:10},{name:"短裙",key:"短裙",icon:"https://cdn.uviewui.com/uview/common/classify/1/5.jpg",cat:10},{name:"阔腿裤",key:"阔腿裤",icon:"https://cdn.uviewui.com/uview/common/classify/1/6.jpg",cat:10},{name:"连衣裙",key:"连衣裙",icon:"https://cdn.uviewui.com/uview/common/classify/1/7.jpg",cat:10},{name:"妈妈装",key:"妈妈装",icon:"https://cdn.uviewui.com/uview/common/classify/1/8.jpg",cat:10},{name:"牛仔裤",key:"牛仔裤",icon:"https://cdn.uviewui.com/uview/common/classify/1/9.jpg",cat:10},{name:"情侣装",key:"情侣装",icon:"https://cdn.uviewui.com/uview/common/classify/1/10.jpg",cat:10},{name:"休闲裤",key:"休闲裤",icon:"https://cdn.uviewui.com/uview/common/classify/1/11.jpg",cat:10},{name:"雪纺衫",key:"雪纺衫",icon:"https://cdn.uviewui.com/uview/common/classify/1/12.jpg",cat:10},{name:"防晒衣",key:"防晒衣",icon:"https://cdn.uviewui.com/uview/common/classify/1/13.jpg",cat:10},{name:"礼服/婚纱",key:"礼服婚纱",icon:"https://cdn.uviewui.com/uview/common/classify/1/14.jpg",cat:10}]},{id:2,name:"美食",chidren:[{name:"火锅",key:"火锅",icon:"https://cdn.uviewui.com/uview/common/classify/2/1.jpg",cat:6},{name:"糕点饼干",key:"糕点饼干",icon:"https://cdn.uviewui.com/uview/common/classify/2/2.jpg",cat:6},{name:"坚果果干",key:"坚果果干",icon:"https://cdn.uviewui.com/uview/common/classify/2/3.jpg",cat:6},{name:"酒类",key:"酒类",icon:"https://cdn.uviewui.com/uview/common/classify/2/4.jpg",cat:6},{name:"辣条",key:"辣条",icon:"https://cdn.uviewui.com/uview/common/classify/2/5.jpg",cat:6},{name:"大礼包",key:"大礼包",icon:"https://cdn.uviewui.com/uview/common/classify/2/6.jpg",cat:6},{name:"精品茗茶",key:"茶",icon:"https://cdn.uviewui.com/uview/common/classify/2/7.jpg",cat:6},{name:"休闲食品",key:"休闲食品",icon:"https://cdn.uviewui.com/uview/common/classify/2/8.jpg",cat:6},{name:"糖果巧克力",key:"糖果巧克力",icon:"https://cdn.uviewui.com/uview/common/classify/2/9.jpg",cat:6},{name:"方便速食",key:"方便速食",icon:"https://cdn.uviewui.com/uview/common/classify/2/10.jpg",cat:6},{name:"营养代餐",key:"营养代餐",icon:"https://cdn.uviewui.com/uview/common/classify/2/11.jpg",cat:6},{name:"粮油副食",key:"粮油",icon:"https://cdn.uviewui.com/uview/common/classify/2/12.jpg",cat:6},{name:"生鲜水果",key:"水果",icon:"https://cdn.uviewui.com/uview/common/classify/2/13.jpg",cat:6},{name:"饮品",key:"饮品",icon:"https://cdn.uviewui.com/uview/common/classify/2/14.jpg",cat:6}]},{id:3,name:"美妆",chidren:[{name:"化妆刷",key:"化妆刷",icon:"https://cdn.uviewui.com/uview/common/classify/3/1.jpg",cat:3},{name:"粉底",key:"粉底",icon:"https://cdn.uviewui.com/uview/common/classify/3/2.jpg",cat:3},{name:"洗发护发",key:"洗发护发",icon:"https://cdn.uviewui.com/uview/common/classify/3/3.jpg",cat:3},{name:"美容工具",key:"美容工具",icon:"https://cdn.uviewui.com/uview/common/classify/3/4.jpg",cat:3},{name:"眼部护理",key:"眼部护理",icon:"https://cdn.uviewui.com/uview/common/classify/3/5.jpg",cat:3},{name:"眉妆",key:"眉妆",icon:"https://cdn.uviewui.com/uview/common/classify/3/6.jpg",cat:3},{name:"卸妆品",key:"卸妆品",icon:"https://cdn.uviewui.com/uview/common/classify/3/7.jpg",cat:3},{name:"基础护肤",key:"基础护肤",icon:"https://cdn.uviewui.com/uview/common/classify/3/8.jpg",cat:3},{name:"眼妆",key:"眼妆",icon:"https://cdn.uviewui.com/uview/common/classify/3/9.jpg",cat:3},{name:"唇妆",key:"唇妆",icon:"https://cdn.uviewui.com/uview/common/classify/3/10.jpg",cat:3},{name:"面膜",key:"面膜",icon:"https://cdn.uviewui.com/uview/common/classify/3/11.jpg",cat:3},{name:"沐浴用品",key:"沐浴用品",icon:"https://cdn.uviewui.com/uview/common/classify/3/12.jpg",cat:3},{name:"护肤套装",key:"护肤套装",icon:"https://cdn.uviewui.com/uview/common/classify/3/13.jpg",cat:3},{name:"防晒品",key:"防晒品",icon:"https://cdn.uviewui.com/uview/common/classify/3/14.jpg",cat:3},{name:"美甲",key:"美甲",icon:"https://cdn.uviewui.com/uview/common/classify/3/15.jpg",cat:3}]},{id:4,name:"居家日用",chidren:[{name:"垃圾袋",key:"垃圾袋",icon:"https://cdn.uviewui.com/uview/common/classify/4/1.jpg",cat:4},{name:"纸巾",key:"纸巾",icon:"https://cdn.uviewui.com/uview/common/classify/4/2.jpg",cat:4},{name:"驱蚊用品",key:"驱蚊用品",icon:"https://cdn.uviewui.com/uview/common/classify/4/3.jpg",cat:4},{name:"收纳神器",key:"收纳神器",icon:"https://cdn.uviewui.com/uview/common/classify/4/4.jpg",cat:4},{name:"厨房用品",key:"厨房用品",icon:"https://cdn.uviewui.com/uview/common/classify/4/5.jpg",cat:4},{name:"厨房烹饪",key:"烹饪",icon:"https://cdn.uviewui.com/uview/common/classify/4/6.jpg",cat:4},{name:"衣物晾晒",key:"衣物晾晒",icon:"https://cdn.uviewui.com/uview/common/classify/4/7.jpg",cat:4},{name:"衣物护理",key:"衣物护理",icon:"https://cdn.uviewui.com/uview/common/classify/4/8.jpg",cat:4},{name:"宠物用品",key:"宠物用品",icon:"https://cdn.uviewui.com/uview/common/classify/4/9.jpg",cat:4},{name:"医药保健",key:"医药",icon:"https://cdn.uviewui.com/uview/common/classify/4/10.jpg",cat:4},{name:"日用百货",key:"百货",icon:"https://cdn.uviewui.com/uview/common/classify/4/11.jpg",cat:4},{name:"清洁用品",key:"清洁",icon:"https://cdn.uviewui.com/uview/common/classify/4/12.jpg",cat:4},{name:"绿植园艺",key:"绿植",icon:"https://cdn.uviewui.com/uview/common/classify/4/13.jpg",cat:4}]},{id:5,name:"男装",chidren:[{name:"爸爸装",key:"爸爸装",icon:"https://cdn.uviewui.com/uview/common/classify/5/1.jpg",cat:12},{name:"牛仔裤",key:"牛仔裤",icon:"https://cdn.uviewui.com/uview/common/classify/5/2.jpg",cat:12},{name:"衬衫",key:"衬衫",icon:"https://cdn.uviewui.com/uview/common/classify/5/3.jpg",cat:12},{name:"休闲裤",key:"休闲裤",icon:"https://cdn.uviewui.com/uview/common/classify/5/4.jpg",cat:12},{name:"外套",key:"外套",icon:"https://cdn.uviewui.com/uview/common/classify/5/5.jpg",cat:12},{name:"T恤",key:"T恤",icon:"https://cdn.uviewui.com/uview/common/classify/5/6.jpg",cat:12},{name:"套装",key:"套装",icon:"https://cdn.uviewui.com/uview/common/classify/5/7.jpg",cat:12},{name:"运动裤",key:"运动裤",icon:"https://cdn.uviewui.com/uview/common/classify/5/8.jpg",cat:12},{name:"马甲/背心",key:"马甲背心",icon:"https://cdn.uviewui.com/uview/common/classify/5/9.jpg",cat:12},{name:"POLO衫",key:"POLO衫",icon:"https://cdn.uviewui.com/uview/common/classify/5/10.jpg",cat:12},{name:"商务装",key:"商务装",icon:"https://cdn.uviewui.com/uview/common/classify/5/11.jpg",cat:12}]},{id:6,name:"鞋品",chidren:[{name:"单鞋",key:"单鞋",icon:"https://cdn.uviewui.com/uview/common/classify/6/1.jpg",cat:5},{name:"皮鞋",key:"皮鞋",icon:"https://cdn.uviewui.com/uview/common/classify/6/2.jpg",cat:5},{name:"帆布鞋",key:"帆布鞋",icon:"https://cdn.uviewui.com/uview/common/classify/6/3.jpg",cat:5},{name:"北京老布鞋",key:"北京老布鞋",icon:"https://cdn.uviewui.com/uview/common/classify/6/4.jpg",cat:5},{name:"运动鞋",key:"运动鞋",icon:"https://cdn.uviewui.com/uview/common/classify/6/5.jpg",cat:5},{name:"拖鞋",key:"拖鞋",icon:"https://cdn.uviewui.com/uview/common/classify/6/6.jpg",cat:5},{name:"凉鞋",key:"凉鞋",icon:"https://cdn.uviewui.com/uview/common/classify/6/7.jpg",cat:5},{name:"休闲鞋",key:"休闲鞋",icon:"https://cdn.uviewui.com/uview/common/classify/6/8.jpg",cat:5},{name:"高跟鞋",key:"高跟鞋",icon:"https://cdn.uviewui.com/uview/common/classify/6/9.jpg",cat:5},{name:"老人鞋",key:"老人鞋",icon:"https://cdn.uviewui.com/uview/common/classify/6/10.jpg",cat:5},{name:"懒人鞋",key:"懒人鞋",icon:"https://cdn.uviewui.com/uview/common/classify/6/11.jpg",cat:5}]},{id:7,name:"数码家电",chidren:[{name:"数据线",key:"数据线",icon:"https://cdn.uviewui.com/uview/common/classify/7/1.jpg",cat:8},{name:"耳机",key:"耳机",icon:"https://cdn.uviewui.com/uview/common/classify/7/2.jpg",cat:8},{name:"生活家电",key:"家电",icon:"https://cdn.uviewui.com/uview/common/classify/7/3.jpg",cat:8},{name:"电风扇",key:"电风扇",icon:"https://cdn.uviewui.com/uview/common/classify/7/4.jpg",cat:8},{name:"电吹风",key:"电吹风",icon:"https://cdn.uviewui.com/uview/common/classify/7/5.jpg",cat:8},{name:"手机壳",key:"手机壳",icon:"https://cdn.uviewui.com/uview/common/classify/7/6.jpg",cat:8},{name:"榨汁机",key:"榨汁机",icon:"https://cdn.uviewui.com/uview/common/classify/7/7.jpg",cat:8},{name:"小家电",key:"小家电",icon:"https://cdn.uviewui.com/uview/common/classify/7/8.jpg",cat:8},{name:"数码电子",key:"数码",icon:"https://cdn.uviewui.com/uview/common/classify/7/9.jpg",cat:8},{name:"电饭锅",key:"电饭锅",icon:"https://cdn.uviewui.com/uview/common/classify/7/10.jpg",cat:8},{name:"手机支架",key:"手机支架",icon:"https://cdn.uviewui.com/uview/common/classify/7/11.jpg",cat:8},{name:"剃须刀",key:"剃须刀",icon:"https://cdn.uviewui.com/uview/common/classify/7/12.jpg",cat:8},{name:"充电宝",key:"充电宝",icon:"https://cdn.uviewui.com/uview/common/classify/7/13.jpg",cat:8},{name:"手机配件",key:"手机配件",icon:"https://cdn.uviewui.com/uview/common/classify/7/14.jpg",cat:8}]},{id:8,name:"母婴",chidren:[{name:"婴童服饰",key:"衣服",icon:"https://cdn.uviewui.com/uview/common/classify/8/1.jpg",cat:2},{name:"玩具乐器",key:"玩具乐器",icon:"https://cdn.uviewui.com/uview/common/classify/8/2.jpg",cat:2},{name:"尿不湿",key:"尿不湿",icon:"https://cdn.uviewui.com/uview/common/classify/8/3.jpg",cat:2},{name:"安抚牙胶",key:"安抚牙胶",icon:"https://cdn.uviewui.com/uview/common/classify/8/4.jpg",cat:2},{name:"奶瓶奶嘴",key:"奶瓶奶嘴",icon:"https://cdn.uviewui.com/uview/common/classify/8/5.jpg",cat:2},{name:"孕妈用品",key:"孕妈用品",icon:"https://cdn.uviewui.com/uview/common/classify/8/6.jpg",cat:2},{name:"宝宝用品",key:"宝宝用品",icon:"https://cdn.uviewui.com/uview/common/classify/8/7.jpg",cat:2},{name:"婴童湿巾",key:"湿巾",icon:"https://cdn.uviewui.com/uview/common/classify/8/8.jpg",cat:2},{name:"喂养洗护",key:"洗护",icon:"https://cdn.uviewui.com/uview/common/classify/8/9.jpg",cat:2},{name:"婴童鞋靴",key:"童鞋",icon:"https://cdn.uviewui.com/uview/common/classify/8/10.jpg",cat:2},{name:"口水巾",key:"口水巾",icon:"https://cdn.uviewui.com/uview/common/classify/8/11.jpg",cat:2},{name:"营养辅食",key:"营养",icon:"https://cdn.uviewui.com/uview/common/classify/8/12.jpg",cat:2},{name:"婴幼书籍",key:"书籍",icon:"https://cdn.uviewui.com/uview/common/classify/8/13.jpg",cat:2},{name:"婴儿车",key:"婴儿车",icon:"https://cdn.uviewui.com/uview/common/classify/8/14.jpg",cat:2}]},{id:9,name:"箱包",chidren:[{name:"单肩包",key:"单肩包",icon:"https://cdn.uviewui.com/uview/common/classify/9/1.jpg",cat:0},{name:"斜挎包",key:"斜挎包",icon:"https://cdn.uviewui.com/uview/common/classify/9/2.jpg",cat:0},{name:"女包",key:"女包",icon:"https://cdn.uviewui.com/uview/common/classify/9/3.jpg",cat:0},{name:"男包",key:"男包",icon:"https://cdn.uviewui.com/uview/common/classify/9/4.jpg",cat:0},{name:"双肩包",key:"双肩包",icon:"https://cdn.uviewui.com/uview/common/classify/9/5.jpg",cat:0},{name:"小方包",key:"小方包",icon:"https://cdn.uviewui.com/uview/common/classify/9/6.jpg",cat:0},{name:"钱包",key:"钱包",icon:"https://cdn.uviewui.com/uview/common/classify/9/7.jpg",cat:0},{name:"旅行箱包",key:"旅行箱包",icon:"https://cdn.uviewui.com/uview/common/classify/9/8.jpg",cat:0},{name:"零钱包",key:"零钱包",icon:"https://cdn.uviewui.com/uview/common/classify/9/9.jpg",cat:0},{name:"手提包",key:"手提包",icon:"https://cdn.uviewui.com/uview/common/classify/9/10.jpg",cat:0},{name:"胸包",key:"胸包",icon:"https://cdn.uviewui.com/uview/common/classify/9/11.jpg",cat:0}]},{id:10,name:"内衣",chidren:[{name:"袜子",key:"袜子",icon:"https://cdn.uviewui.com/uview/common/classify/10/1.jpg",cat:11},{name:"吊带背心",key:"吊带背心",icon:"https://cdn.uviewui.com/uview/common/classify/10/2.jpg",cat:11},{name:"抹胸",key:"抹胸",icon:"https://cdn.uviewui.com/uview/common/classify/10/3.jpg",cat:11},{name:"内裤",key:"内裤",icon:"https://cdn.uviewui.com/uview/common/classify/10/4.jpg",cat:11},{name:"文胸",key:"文胸",icon:"https://cdn.uviewui.com/uview/common/classify/10/5.jpg",cat:11},{name:"文胸套装",key:"文胸套装",icon:"https://cdn.uviewui.com/uview/common/classify/10/6.jpg",cat:11},{name:"打底塑身",key:"打底塑身",icon:"https://cdn.uviewui.com/uview/common/classify/10/7.jpg",cat:11},{name:"家居服",key:"家居服",icon:"https://cdn.uviewui.com/uview/common/classify/10/8.jpg",cat:11},{name:"船袜",key:"船袜",icon:"https://cdn.uviewui.com/uview/common/classify/10/9.jpg",cat:11},{name:"情侣睡衣",key:"情侣睡衣",icon:"https://cdn.uviewui.com/uview/common/classify/10/10.jpg",cat:11},{name:"丝袜",key:"丝袜",icon:"https://cdn.uviewui.com/uview/common/classify/10/11.jpg",cat:11}]},{id:11,name:"文娱车品",chidren:[{name:"车市车品",key:"车市车品",icon:"https://cdn.uviewui.com/uview/common/classify/11/1.jpg",cat:7},{name:"办公文具",key:"办公文具",icon:"https://cdn.uviewui.com/uview/common/classify/11/2.jpg",cat:7},{name:"考试必备",key:"考试必备",icon:"https://cdn.uviewui.com/uview/common/classify/11/3.jpg",cat:7},{name:"笔记本",key:"笔记本",icon:"https://cdn.uviewui.com/uview/common/classify/11/4.jpg",cat:7},{name:"艺术礼品",key:"礼品",icon:"https://cdn.uviewui.com/uview/common/classify/11/5.jpg",cat:7},{name:"书写工具",key:"书写工具",icon:"https://cdn.uviewui.com/uview/common/classify/11/6.jpg",cat:7},{name:"车载电器",key:"车载电器",icon:"https://cdn.uviewui.com/uview/common/classify/11/7.jpg",cat:7},{name:"图书音像",key:"图书音像",icon:"https://cdn.uviewui.com/uview/common/classify/11/8.jpg",cat:7},{name:"画具画材",key:"画具画材",icon:"https://cdn.uviewui.com/uview/common/classify/11/9.jpg",cat:7}]},{id:12,name:"配饰",chidren:[{name:"太阳镜",key:"太阳镜",icon:"https://cdn.uviewui.com/uview/common/classify/12/1.jpg",cat:0},{name:"皮带",key:"皮带",icon:"https://cdn.uviewui.com/uview/common/classify/12/2.jpg",cat:0},{name:"棒球帽",key:"棒球帽",icon:"https://cdn.uviewui.com/uview/common/classify/12/3.jpg",cat:0},{name:"手表",key:"手表",icon:"https://cdn.uviewui.com/uview/common/classify/12/4.jpg",cat:0},{name:"发饰",key:"发饰",icon:"https://cdn.uviewui.com/uview/common/classify/12/5.jpg",cat:0},{name:"项链",key:"项链",icon:"https://cdn.uviewui.com/uview/common/classify/12/6.jpg",cat:0},{name:"手饰",key:"手饰",icon:"https://cdn.uviewui.com/uview/common/classify/12/7.jpg",cat:0},{name:"耳环",key:"耳环",icon:"https://cdn.uviewui.com/uview/common/classify/12/8.jpg",cat:0},{name:"帽子丝巾",key:"帽子丝巾",icon:"https://cdn.uviewui.com/uview/common/classify/12/9.jpg",cat:0},{name:"眼镜墨镜",key:"眼镜墨镜",icon:"https://cdn.uviewui.com/uview/common/classify/12/10.jpg",cat:0},{name:"发带发箍",key:"发带发箍",icon:"https://cdn.uviewui.com/uview/common/classify/12/11.jpg",cat:0}]},{id:13,name:"家装家纺",chidren:[{name:"家居饰品",key:"家居饰品",icon:"https://cdn.uviewui.com/uview/common/classify/13/1.jpg",cat:0},{name:"凉席",key:"凉席",icon:"https://cdn.uviewui.com/uview/common/classify/13/2.jpg",cat:0},{name:"背枕靠枕",key:"靠枕",icon:"https://cdn.uviewui.com/uview/common/classify/13/3.jpg",cat:0},{name:"床上用品",key:"床上用品",icon:"https://cdn.uviewui.com/uview/common/classify/13/4.jpg",cat:0},{name:"摆件",key:"摆件",icon:"https://cdn.uviewui.com/uview/common/classify/13/5.jpg",cat:0},{name:"四件套",key:"四件套",icon:"https://cdn.uviewui.com/uview/common/classify/13/6.jpg",cat:0},{name:"装饰品",key:"装饰品",icon:"https://cdn.uviewui.com/uview/common/classify/13/7.jpg",cat:0},{name:"卫浴用品",key:"卫浴",icon:"https://cdn.uviewui.com/uview/common/classify/13/8.jpg",cat:0},{name:"家居家装",key:"家具",icon:"https://cdn.uviewui.com/uview/common/classify/13/9.jpg",cat:0},{name:"蚊帐",key:"蚊帐",icon:"https://cdn.uviewui.com/uview/common/classify/13/10.jpg",cat:0},{name:"墙纸贴纸",key:"墙纸",icon:"https://cdn.uviewui.com/uview/common/classify/13/11.jpg",cat:0},{name:"空调被",key:"空调被",icon:"https://cdn.uviewui.com/uview/common/classify/13/12.jpg",cat:0}]},{id:14,name:"户外运动",chidren:[{name:"游泳装备",key:"游泳",icon:"https://cdn.uviewui.com/uview/common/classify/14/1.jpg",cat:0},{name:"泳镜",key:"泳镜",icon:"https://cdn.uviewui.com/uview/common/classify/14/2.jpg",cat:0},{name:"户外装备",key:"户外",icon:"https://cdn.uviewui.com/uview/common/classify/14/3.jpg",cat:0},{name:"健身服饰",key:"健身",icon:"https://cdn.uviewui.com/uview/common/classify/14/4.jpg",cat:0},{name:"泳衣",key:"泳衣",icon:"https://cdn.uviewui.com/uview/common/classify/14/5.jpg",cat:0},{name:"瑜伽垫",key:"瑜伽垫",icon:"https://cdn.uviewui.com/uview/common/classify/14/6.jpg",cat:0},{name:"瑜伽用品",key:"瑜伽",icon:"https://cdn.uviewui.com/uview/common/classify/14/7.jpg",cat:0},{name:"健身装备",key:"健身",icon:"https://cdn.uviewui.com/uview/common/classify/14/8.jpg",cat:0},{name:"球迷用品",key:"球迷",icon:"https://cdn.uviewui.com/uview/common/classify/14/9.jpg",cat:0}]}];c.default=n},7220:function(i,c,e){var n=e("0297");"string"===typeof n&&(n=[[i.i,n,""]]),n.locals&&(i.exports=n.locals);var t=e("4f06").default;t("35ad285e",n,!0,{sourceMap:!1,shadowMode:!1})},9063:function(i,c,e){"use strict";e.r(c);var n=e("13ec"),t=e.n(n);for(var o in n)"default"!==o&&function(i){e.d(c,i,(function(){return n[i]}))}(o);c["default"]=t.a},"94ac":function(i,c,e){"use strict";e.r(c);var n=e("039c"),t=e.n(n);for(var o in n)"default"!==o&&function(i){e.d(c,i,(function(){return n[i]}))}(o);c["default"]=t.a},"9d1c":function(i,c,e){var n=e("24fb");c=n(!1),c.push([i.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */\r\n/* 引入样式 */.u-wrap[data-v-85ccf668]{height:calc(100vh);\r\nheight:calc(100vh - var(--window-top));\r\ndisplay:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.u-search-box[data-v-85ccf668]{\r\n\t\t/* padding: 18rpx 0rpx; */padding:0 5%;background-color:#ff6040;position:fixed;top:var(--window-top);left:0;z-index:2;width:100%;line-height:%?140?%}.container[data-v-85ccf668]{display:-webkit-box;display:-webkit-flex;display:flex;margin-top:%?140?%}.left[data-v-85ccf668]{-webkit-box-flex:1;-webkit-flex:1;flex:1;border-right:%?2?% solid #f0f0f0}.left .left_list[data-v-85ccf668]{width:100%;text-align:center;line-height:%?150?%;color:#999;font-size:%?28?%}.right[data-v-85ccf668]{-webkit-box-flex:2;-webkit-flex:2;flex:2;background-color:#f2f2f2}.right .right_box[data-v-85ccf668]{margin:%?25?% %?25?%;background-color:#fff;overflow:hidden}.right .right_box .row_title[data-v-85ccf668]{font-size:%?32?%;font-weight:700;margin:%?20?% 0 %?10?% %?20?%}.right .right_box .row[data-v-85ccf668]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap}.right .right_box .row .row_list[data-v-85ccf668]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-justify-content:space-around;justify-content:space-around;-webkit-box-align:center;-webkit-align-items:center;align-items:center;height:%?150?%;width:33%;align-items:center;font-size:%?24?%;color:#999;margin-bottom:%?20?%}.right .right_box .row .row_list uni-image[data-v-85ccf668]{width:%?120?%}\r\n/* 点击左侧导航，显示动态样式 */.activeList[data-v-85ccf668]{\r\n\t\t/* border-left: 6rpx solid #f26b11; */color:#ff6040;font-size:%?32?%;font-weight:700}.active[data-v-85ccf668]{width:60%;height:%?10?%;background-color:red;position:absolute;left:50%;-webkit-transform:translate(-50%);transform:translate(-50%);bottom:0}.left_list[data-v-85ccf668]{position:relative}',""]),i.exports=c},aff1:function(i,c,e){"use strict";e.r(c);var n=e("25ab"),t=e("94ac");for(var o in t)"default"!==o&&function(i){e.d(c,i,(function(){return t[i]}))}(o);e("1abc");var a,s=e("f0c5"),u=Object(s["a"])(t["default"],n["b"],n["c"],!1,null,"85ccf668",null,!1,n["a"],a);c["default"]=u.exports},d2fe:function(i,c,e){var n=e("9d1c");"string"===typeof n&&(n=[[i.i,n,""]]),n.locals&&(i.exports=n.locals);var t=e("4f06").default;t("0f11f3e0",n,!0,{sourceMap:!1,shadowMode:!1})},ef2c:function(i,c,e){"use strict";var n=e("7220"),t=e.n(n);t.a},efc4:function(i,c,e){"use strict";e.r(c);var n=e("096f"),t=e("9063");for(var o in t)"default"!==o&&function(i){e.d(c,i,(function(){return t[i]}))}(o);e("ef2c");var a,s=e("f0c5"),u=Object(s["a"])(t["default"],n["b"],n["c"],!1,null,"13f672b9",null,!1,n["a"],a);c["default"]=u.exports}}]);