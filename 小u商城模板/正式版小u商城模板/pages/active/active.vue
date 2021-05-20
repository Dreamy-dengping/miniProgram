<template>
	<view class="wrap">
		<block v-if="dataBuffer">
			<view class="top">
				<image :src="baner" mode="widthFix" class="topBanner"></image>
				<image src="../../static/active.png" mode="widthFix" class="bottomBanner"></image>
			</view>
			<u-waterfall v-model="flowList" ref="uWaterfall">
				<template v-slot:left="{leftList}">
					<view class="demo-warter" v-for="(item, index) in leftList" :key="index">
						<!-- 警告：微信小程序中需要hx2.8.11版本才支持在template中结合其他组件，比如下方的lazy-load组件 -->
						<!-- <u-lazy-load threshold="-450" border-radius="10" :image="item.image" :index="index"></u-lazy-load> -->
						<u-lazy-load threshold="-450" border-radius="10" :image="item.img" :index="index"></u-lazy-load>
						<view class="demo-title">
							{{item.goodsname}}
						</view>
						<view class="demo-price">
							{{item.price}}元
						</view>
						<view class="demo-tag">
							<view class="demo-tag-owner">
								自营
							</view>
							<view class="demo-tag-text">
								放心购
							</view>
						</view>
						<view class="demo-shop">
							{{item.shop}}
						</view>
						<u-icon name="close-circle-fill" color="#fa3534" size="34" class="u-close"
							@click="remove(item.id)"></u-icon>
					</view>
				</template>
				<template v-slot:right="{rightList}">
					<view class="demo-warter" v-for="(item, index) in rightList" :key="index">
						<!-- <u-lazy-load threshold="-450" border-radius="10" :image="item.image" :index="index"></u-lazy-load> -->
						<u-lazy-load threshold="-450" border-radius="10" :image="item.img" :index="index"></u-lazy-load>
						<view class="demo-title">
							{{item.goodsname}}
						</view>
						<view class="demo-price">
							{{item.price}}元
						</view>
						<view class="demo-tag">
							<view class="demo-tag-owner">
								自营
							</view>
							<view class="demo-tag-text">
								放心购
							</view>
						</view>
						<view class="demo-shop">
							{{item.shop}}
						</view>
						<u-icon name="close-circle-fill" color="#fa3534" size="34" class="u-close"
							@click="remove(item.id)"></u-icon>
					</view>
				</template>
			</u-waterfall>
			<u-loadmore bg-color="rgb(240, 240, 240)" :load-text="loadText" :status="loadStatus"
				@loadmore="addRandomData"></u-loadmore>
		</block>
		<!-- 无数据提示 -->
		<u-empty text="暂无数据~~去逛逛~~" mode="list" :show="!dataBuffer" color="orange" icon-color="orange"></u-empty>
	</view>
</template>

<script>
	// 引入测试数据 可以测试使用
	import list from '@/utils/active.data.js'
	export default {
		data() {
			return {
				activeData: {},
				loadStatus: 'loadmore',
				flowList: [],
				page: 1,
				size: 4,
				totalPage: 0,
				dataBuffer: true,
				baner: "",
				type: 2,
				page: 1,
				size: 3,
				cateid: "",
				totalPage: '',
				// 设置加载文本
				loadText: {
					loadmore: '上拉刷新吧',
					loading: '玩命加载中',
					nomore: '我也是有底线的'
				}
			}
		},
		onLoad(option) {
			// 进来就显示我们的加载数据
			this.$shotost.showLoading("活动数据加载中...");
			// console.log(this.$mp.query.parm	);
			let parm = JSON.parse(this.$mp.query.parm);
			console.log(parm);
			// 设置导航栏
			uni.setNavigationBarTitle({
				title: parm.title
			});
			// 设置上面的一张背景图
			this.baner = parm.img;
			// 拿到商品的id
			this.cateid = parm.second_cateid
			// 调用请求活动的数据
			this.getActiveGoods();
		},
		onReachBottom() {
			// 改变加载更多的状态
			this.loadStatus = "loading"
			//下拉触底
			this.page++;
			if (this.page > this.totalPage) {
				// 没有更多数据了
				this.loadStatus = "nomore"
				return;
			}
			this.getActiveGoods()
		},
		methods: {
			// 请求二级活动页数据
			async getActiveGoods() {
				let option = {
					cateid: this.cateid,
					type: this.type,
					page: this.page,
					size: this.size
				}
				console.log(option);
				let res = await this.$http({
					url: "/api/getgoodlist",
					data: option
				});
				console.log(res);
				// 判断
				if (res.data.code == 200) {
					// 先隐藏我们的加载框框
					this.$shotost.hideLoading();
					// 判断是否没有数据
					if (res.data.list.goodData == null) {
						this.dataBuffer = false; //显示我们的空页面
					} else {
						// 表示我们对应活动是有数据的
						// 先处理图片的前缀
						res.data.list.goodData.map(item => {
							item.img = this.$baseUrl + item.img;
						})
						// 总页码给上面
						this.totalPage = res.data.list.totalPage;
						// 把新请求的数据做拼接
						this.flowList = [...this.flowList, ...res.data.list.goodData];
					}
				}
			},
			remove(id) {
				this.$refs.uWaterfall.remove(id);
			},
			clear() {
				this.$refs.uWaterfall.clear();
			}
		}
	}
</script>

<style lang="scss" scoped>
	// 引入样式
	@import '@/static/css/active.scss'
</style>
