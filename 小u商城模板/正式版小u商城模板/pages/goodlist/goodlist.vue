<template>
	<view class="goodlist" v-if="dataBuffer">
		<!-- head区域 -->
		<view class="head">
			<view class="search">
				<u-search :disabled="true" @click="goSearch" shape="square" :show-action="true" action-text="搜索"
					:animation="true" margin="10rpx 0rpx">
				</u-search>
			</view>
			<view class="sortbox">
				<view class="sort">
					<view hover-class="touchOpacity">综合排序</view>
					<view hover-class="touchOpacity">销量</view>
					<view hover-class="touchOpacity" @click="pricesort">
						<text>价格</text>
						<image src="../../static/icon/sort.png"></image>
					</view>
					<view hover-class="touchOpacity">好评度</view>
					<view hover-class="touchOpacity">店铺</view>
				</view>
				<view class="filter" hover-class="touchOpacity">
					<image src="../../static/icon/filter.png"></image>
					<text>筛选</text>
				</view>
			</view>

		</view>

		<!-- 提示标语区域 -->
		<view class="biaoyu" hover-class="touchOpacity">
			<u-notice-bar mode="vertical" :list="list" :show="true" :close-icon="true"></u-notice-bar>
		</view>

		<!-- 商品列表区域 -->
		<view class="list">
			<view class="row" v-for="(item,index) in goodlist" :key="index" @click="toDetail(item.id)">
				<!-- 执行图片赖加载 此处注意百度小程序问题需要指定固定高度-->
				<view class="image">
					<u-lazy-load :key="index" :image="item.img" height="218"></u-lazy-load>
				</view>
				<view class="info" hover-class="touchOpacity">
					<text>{{item.goodsname}}</text>
					<view class="money">
						<text>￥ 200</text> <text>￥210</text>
					</view>
					<text>双11.11限制200起</text>
					<text space="ensp">3565评论 99%好评</text>
				</view>
			</view>
		</view>

		<!-- 底部悬浮球 -->
		<view v-if="topBuffer" @click="toTop" class="quick_top" hover-class="touchOpacity">
			<image src="../../static/icon/totop.png"></image>
		</view>
	</view>
	<view v-else>
		<!-- 无数据提示 -->
		<u-empty text="暂无数据~~去逛逛~~" mode="list" :show="!dataBuffer" color="orange" icon-color="orange"></u-empty>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				value2: '',
				list: [
					'筛选11.11大促商品,亲,请速速赶来',
					'筛选11.11大促商品,亲,请速速赶来',
				],
				show: false,
				mode: 'right',
				mask: true, // 是否显示遮罩
				closeable: true,
				closeIconPos: 'top-right',
				topBuffer: false, //控制悬浮球显示
				dataBuffer: true,
				goodlist: [],
				page:2,
				size:3,
				taotalPage:"",//总页码，用来做下拉判断是否还有更多数据
			}
		},
		onLoad(option) {
			// console.log(this.$mp.query);
			//页面一进来先加载我们的正在加载当中
			this.$shotost.showLoading("加载中");//下面方法里面已经有取消我们这个加载的动画了
			//调用获取我们列表页数据的方法
			this.getGoodsList();
		},
		// 监听页面滚动条下拉事件
		onReachBottom() {
			// 首先显示正在加载中
			this.$shotost.showLoading("加载中");
			// 在这里请求我们更多数据
			//首先页码自加
			this.page++;
			//判断页码数是否大于总的页码数，大于的话就不让往下面走了，显示没有更多数据了
			if(this.page>this.taotalPage){
				// 显示没有更多数据了
				this.$shotost.showTost("抱歉，没有更多数据了","none");
				return;
			}
			// 请求新的数据，拼接上原来的数据
			this.getGoodsList();
		},
		// 监听页面滚动
		onPageScroll(e) {
			// 判断
			if(e.scrollTop>=200){
				// 显示回到顶部
				this.topBuffer=true
			}else{
				this.topBuffer=false
			}
		},
		methods:{
			
			// 回到顶部
			toTop(){
				uni.pageScrollTo({
					scrollTop:0,
					duration:400
				})
			},
			//获取列表数据
			async getGoodsList() {
				// 刚开始就显示数据加载中
				this.$shotost.showLoading("数据加载中");
				let option={
					cateid:this.$mp.query.cateid*1,
					type:this.$mp.query.type*1,
					page:this.page,
					size:this.size
				}
				// console.log(option)	
			let res=await this.$http({url:"/api/getgoodlist",data:option});
			console.log(res)
				if(res.data.code==200){
					// 请求到数据直接就取消加载
					this.$shotost.hideLoading();
					if(res.data.list.goodData==null){
						this.dataBuffer=false;
					}else{
						this.dataBuffer=true;
						// 处理我们的图片前缀
						res.data.list.goodData.forEach(item=>{
							item.img=this.$baseUrl+item.img;
						})
						this.goodlist=[...this.goodlist,...res.data.list.goodData];
						// console.log(this.goodlist);
						// 取出总的页码数
						this.taotalPage=res.data.list.totalPage;
					}
				}else{
					
				}
			
			},
			// 跳转到详情页面
			toDetail(id){
				// console.log(id);
				uni.navigateTo({
					url:"../gooddesc/gooddesc?id="+id
				})
			},
			// 跳转到搜索页面
			goSearch() {},

			// 价格筛选事件
			pricesort() {
				uni.showActionSheet({
					itemList: ['升序', '降序']
				})
			},
		}


	}
</script>

<style>
	/* 引入样式 */
	@import url("@/static/css/goodlist.css");
</style>
