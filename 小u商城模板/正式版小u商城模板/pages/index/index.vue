<template>
	<view class="">
		<view class="content u-skeleton">
			<!-- head搜索区域 -->
			<view class="head">
				<view class="search ">
					<image src="../../static/icon/address2.png" class="u-skeleton-circle"></image>
					<image src="../../static/logo/white.png" class="u-skeleton-circle"></image>
					<view class="search_input u-skeleton-fillet">
						<u-search
							:disabled="true"
							@click="goSearch"
							shape="square"
							action-text=" " 
							bg-color='#fff'
							:input-style="{fontSize:'20rpx'}"
						>
						</u-search>
					</view>
					<image src="../../static/icon/dp.png"  class="dp u-skeleton-circle"></image>
				</view>
				<view class="cate">
					<view class="catenavtab u-skeleton-rect">
						<u-tabs ref="tabs"
							:list="catenav"
							name="catename"
							bar-width="30"
							bar-height="8"
							active-color="white"
							bg-color="111"
							font-size="28"
							:show-bar="showBar"
							inactive-color='white'
							:is-scroll="true" 
							:current="currentnav" 
							@change="changecurrent"></u-tabs>
					</view>
					<view class="category u-skeleton-rect" >
						<image src="../../static/icon/cate.png"></image>
						<text>分类</text>
					</view>
				</view>
			</view>
			
			<!-- swiper区域  使用插件实现-->
			<view class="u-skeleton-fillet swiper_banner">
				<u-swiper :list="bannerlist" name="img" :effect3d="true" height="390" @click="goActive"></u-swiper>
			</view>
			<!-- 快速导航区域 -->
			<view class="quicknav">
				<view class="row" v-for="(item,index) in quicknav" :key='index' hover-class="touchOpacity">
					<image :src="item.src" class="u-skeleton-circle"></image>
					<text class="u-skeleton-rect">{{item.text}}</text>
				</view>
			</view>

			<!-- 秒杀商品推荐区域 -->
			<view class="seckill">
				<!-- 秒杀左侧区域 -->
				<view class="leftseckill u-skeleton-rect">
					<view class="title " hover-class="touchOpacity">
						<text>限时秒杀</text>
						<text>查看更多 > </text>
					</view>
					<view class="left_seckill_info">
						<u-count-down bg-color="#5D7E37" 
							color="white" 
							ref="uCountDown" 
							:timestamp="seckillTime" 
							:autoplay="true" 
							font-size="20"
							height="30"></u-count-down>
					</view>
					<image :src="seckillImage" mode="widthFix" class="seckill_img"></image>
				</view>
				<!-- 秒杀右侧区域 -->
				<view class="rightseckill">
					<view class="top u-skeleton-rect">
						<view>品牌上新</view>
						<view>9点整，抢大牌</view>
						<view hover-class="touchOpacity">疯抢红包 > </view>
					</view>
					<view class="bottom u-skeleton-rect">
						<view>日用好物</view>
						<view>愿君多采撷</view>
						<view hover-class="touchOpacity">塞满奖券 > </view>
					</view>
				</view>
			</view>
			
			<!-- 推荐商品区域 -->
			<view class="tuijian  u-skeleton-rect">
				<!-- 标题区域 -->
				<view class="tuijian_title">
					<text :class="tjActiveIndex == 0 ? 'tuijian_active' : '' ">双十一尖货预购</text>
					<text :class="tjActiveIndex == 1 ? 'tuijian_active' : '' ">畅购全球</text>
				</view>
				<!-- 滚动商品区域 -->
				<scroll-view scroll-x  class="tuijian_scroll_x">
					<view class="tuijian_scroll_x_row" v-for="(item,index) in tuijianshop" :key="index" hover-class="touchOpacity">
						<image :src="item"></image>
					</view>
				</scroll-view>
			</view>
			
			<!-- 推荐商品区域 -->
			<view class="recommendgood">
				<!-- 推荐导航 -->
				<view class="recommendnav  u-skeleton-fillet">
					<u-subsection
						:bold="bold" 
						:active-color="activeColor" 
						:current="current"
						:mode="mode" 
						:list="['热门推荐', '上新推荐', '所有商品']"
						@change="currentChange"
					></u-subsection>
				</view>
				<view class="recommendlist">
					<view class="recommendrow u-skeleton-rect" 
						v-for="(item,index) in shoplist" :key="index"
						@click="toGoodsDetail(item.id)"
					>
						<!--赖加载显示图片  此处注意百度小程序问题需要指定固定高度-->
						<view class="image">
							<u-lazy-load :key="index" :image="item.img" height="200" duration="300"></u-lazy-load>		
						</view>
						
						<view class="recommendrowinfo" hover-class="touchOpacity">
							<text>{{item.goodsname}}</text>
							<text>现价格： ￥{{item.price}}</text>
							<text>原价格：￥{{item.market_price}}</text>
							<text>
								立即抢购
							</text>
						</view>
					</view>
				</view>
				<!-- #ifdef H5 -->
				<view class="topview"></view>
				<!-- #endif -->
			</view>
		</view>
		<!--引用组件  引入骨架屏组件-->
		<!--注意： 所以要求在请求数据尚未完成时，填写一些模拟数据，才能让对应的元素有对应的尺寸和位置，供uni.createSelectorQuery查询使用 -->
		<u-skeleton bg-color="rgb(250, 250, 250)" :loading="loading" :animation="animation" 
		:el-color="elColor" :border-radius="borderRadius"></u-skeleton>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				showBar:true,//初始化分类导航底部滑块开关
				currentnav:2,//初始化分类导航下标
				loading: true, // 是否显示骨架屏组件
				animation: true,
				elColor: '#FFC8B4',
				borderRadius: 10,
				mode: 'subsection',
				current: 0,//热推默认选项卡
				activeColor: 'orange',
				bold: true,
				change: true,
				activeIndex:0,//默认分类下标
				catenav:[],
				bannerlist: [],//初始化轮播图数据
				quicknav:[
					{src:'../../static/icon/seckill.png',text:'限时秒杀'},
					{src:'../../static/icon/top.png',text:'畅销商品'},
					{src:'../../static/icon/brand.png',text:'品质大牌'},
					{src:'../../static/icon/selfsupport.png',text:'小U自营'},
					{src:'../../static/icon/integral.png',text:'积分商城'}
				],
				seckill:{},//秒杀数据
				tuijianshop:[
					'../../static/img/pic/commodity/01.png',
					'../../static/img/pic/commodity/02.png',
					'../../static/img/pic/commodity/03.png',
					'../../static/img/pic/commodity/04.png',
					'../../static/img/pic/commodity/05.png',
				],
				hortgoods:[],//热推商品数据
				shoplist:[],
				tjActiveIndex:0,
				goodsIndex:0 ,
				seckillTime:0,//限时抢购事件
				seckillImage:"",//限时请购的对应图片
				
			}
		},
		onLoad() {
			// 1.请求一级分类导航部分数据
			this.$http({url:"/api/getcate"}).then(res=>{
				this.catenav=res.data.list;
			});
			// 2.请求轮播图数据
			this.$http({url:"/api/getbanner"}).then(res=>{
				console.log(res);
				res.data.list.forEach(item=>{
					item.img=this.$baseUrl+item.img;
				});
				this.bannerlist=res.data.list;
			})
			//3.限时抢购数据
			this.$http({url:"/api/getseckill"}).then(res=>{
				console.log(res)
				//取出结束时间
				let endTime=res.data.list[0].endtime;
				// 计算倒计时
				this.seckillTime=Math.floor((endTime-Date.now())/1000);
				// 取出限时请购对应的图片
				this.seckillImage=this.$baseUrl+res.data.list[0].img;
			}),
			// 点击轮播图跳转活动页面
			
			//.页面进来先加载热门推荐数据
			this.getGoods(this.current);
			// this.loading=true
			setTimeout(()=>{
			this.loading=false
			},2000)
			
			// // #ifdef MP-BAIDU
			// this.showBar = false;
			// // #endif
		},
		methods: {
			// 1.一级分类点击变化时候
			changecurrent(index){
				this.currentnav=index;
				console.log(this.catenav[index].id);
				//去到详情页面
				uni.navigateTo({
					url:"../goodlist/goodlist?cateid="+this.catenav[index].id+"&type=1"
				})
			},
			
			// 2.热门推荐商品
			//2._1.对应数据
			// 定义一个方法获取商品
			getGoods(index){
				this.$http({url:"/api/gethortgoods"}).then(res=>{
					console.log(res)
					res.data.list[index].content.forEach(item=>{
						item.img=this.$baseUrl+item.img;
					})
					this.shoplist=res.data.list[index].content;
				})
			},
			currentChange(index){
					// console.log(index)
				this.getGoods(index);//直接调用
			},
			toGoodsDetail(id){
				// 商品id传递过去
				// console.log(id);
				uni.navigateTo({
					url:"../gooddesc/gooddesc?id="+id
				})
			},
			goActive(index){
				//默认参数是对应的索引
				let activeGoods=this.bannerlist[index];
				// console.log(index);
				//去到活动页面
				uni.navigateTo({
					url:"../active/active?parm="+JSON.stringify(activeGoods)
				})
			},
			// 点击搜索去到详情页面
			goSearch(){
				uni.navigateTo({
					url:"../search/search"
				})
			}
		},
		
		
	}
</script>

<style>
	/* 引入样式 */
	@import url("@/static/css/index.css");
</style>
