<template>
	<view>
		<view class="wrap">
			<view class="u-tabs-box">
				<u-tabs-swiper activeColor="#f29100" ref="tabs" :list="list" :show-bar="showBar" :current="current"
					@change="change" :is-scroll="false" swiperWidth="750">
				</u-tabs-swiper>
			</view>
			<swiper class="swiper-box" :current="swiperCurrent" @transition="transition"
				@animationfinish="animationfinish">
				<swiper-item class="swiper-item">
					<scroll-view scroll-y style="height: 100%;width: 100%;" @scrolltolower="reachBottom">
						<view class="page-box">
							<block v-if="dataBuffer ==false">
								<ordernull />
							</block>
							<block v-else>
								<view class="order" v-for="(res,index) in orderList" :key="index">
									<view class="top">
										<view class="left">
											<u-icon name="home" :size="30" color="rgb(94,94,94)"></u-icon>
											<view class="store">编号: {{ res.ordernumber }}</view>
											<u-icon name="arrow-right" color="rgb(203,203,203)" :size="26"></u-icon>
										</view>
										<view class="right">待付款</view>
									</view>
									<view class="item" v-for="(item, index) in res.child" :key="index">
										<view class="left">
											<image :src="item.img" mode="aspectFill"></image>
										</view>
										<view class="content">
											<view class="title u-line-2">{{ item.goodsname }}</view>
											<view class="type"></view>
											<view class="delivery-time">下单时间 {{res.addtime}}</view>
										</view>
										<view class="right">
											<view class="price">
												￥{{ priceInt(item.price) }}
												<text class="decimal">.{{ priceDecimal(item.price) }}</text>
											</view>
											<view class="number">x{{ item.num }}</view>
										</view>
									</view>
									<view class="total">
										共{{res.countnumber }}件商品 合计:
										<text class="total-price">
											￥{{ res.countmoney }}.
											<text class="decimal">{{priceDecimal(res.countmoney)}}</text>
										</text>
									</view>
									<view class="bottom">
										<view class="more">
											<u-icon name="more-dot-fill" color="rgb(203,203,203)"></u-icon>
										</view>
										<view class="exchange btn">继续购买</view>
										<view class="exchange btn">撤销订单</view>
										<view class="evaluate btn">立即支付</view>
									</view>
								</view>
								<u-loadmore :status="loadStatus" bgColor="#f2f2f2"></u-loadmore>
							</block>

						</view>
					</scroll-view>
				</swiper-item>
				<swiper-item class="swiper-item">
					<scroll-view scroll-y style="height: 100%;width: 100%;" @scrolltolower="reachBottom">
						<view class="page-box">
							<block v-if="dataBuffer ==false">
								<ordernull />
							</block>
							<block v-else>
								<view class="order" v-for="(res, index) in  orderList" :key="index">
									<view class="top">
										<view class="left">
											<u-icon name="home" :size="30" color="rgb(94,94,94)"></u-icon>
											<view class="store">编号: {{ res.ordernumber }}</view>
											<u-icon name="arrow-right" color="rgb(203,203,203)" :size="26"></u-icon>
										</view>
										<view class="right">待发货</view>
									</view>
									<view class="item" v-for="(item, index) in res.child" :key="index">
										<view class="left">
											<image :src="item.img" mode="aspectFill"></image>
										</view>
										<view class="content">
											<view class="title u-line-2">{{ item.goodsname }}</view>
											<view class="type"></view>
											<view class="delivery-time">下单时间 {{res.addtime}}</view>
										</view>
										<view class="right">
											<view class="price">
												￥{{ priceInt(item.price) }}
												<text class="decimal">.{{ priceDecimal(item.price) }}</text>
											</view>
											<view class="number">x{{ item.num }}</view>
										</view>
									</view>
									<view class="total">
										共{{ res.countnumber }}件商品 合计:
										<text class="total-price">
											￥{{ priceInt(res.countmoney) }}.
											<text class="decimal">{{ priceDecimal(res.countmoney) }}</text>
										</text>
									</view>
									<view class="bottom">
										<view class="more">
											<u-icon name="more-dot-fill" color="rgb(203,203,203)"></u-icon>
										</view>
										<view class="logistics btn">继续购买</view>
										<view class="exchange btn">撤销订单</view>
										<view class="evaluate btn">提醒发货</view>
									</view>
								</view>
								<u-loadmore :status="loadStatus" bgColor="#f2f2f2"></u-loadmore>
							</block>

						</view>
					</scroll-view>
				</swiper-item>
				<swiper-item class="swiper-item">
					<scroll-view scroll-y style="height: 100%;width: 100%;">
						<view class="page-box">
							<block v-if="dataBuffer == false">
								<ordernull />
							</block>
							<block v-else>
								<view class="order" v-for="(res,index) in orderList" :key="index">
									<view class="top">
										<view class="left">
											<u-icon name="home" :size="30" color="rgb(94,94,94)"></u-icon>
											<view class="store">编号: {{ res.ordernumber }}</view>
											<u-icon name="arrow-right" color="rgb(203,203,203)" :size="26"></u-icon>
										</view>
										<view class="right">待确认</view>
									</view>
									<view class="item" v-for="(item, index) in res.child" :key="index">
										<view class="left">
											<image :src="item.img" mode="aspectFill"></image>
										</view>
										<view class="content">
											<view class="title u-line-2">{{ item.goodsname }}</view>
											<view class="type"></view>
											<view class="delivery-time">下单时间 {{res.addtime}}</view>
										</view>
										<view class="right">
											<view class="price">
												￥{{ priceInt(item.price) }}
												<text class="decimal">.{{ priceDecimal(item.price) }}</text>
											</view>
											<view class="number">x{{ item.num }}</view>
										</view>
									</view>
									<view class="total">
										共{{res.countnumber }}件商品 合计:
										<text class="total-price">
											￥{{ res.countmoney }}.
											<text class="decimal">{{priceDecimal(res.countmoney)}}</text>
										</text>
									</view>
									<view class="bottom">
										<view class="more">
											<u-icon name="more-dot-fill" color="rgb(203,203,203)"></u-icon>
										</view>
										<view class="exchange btn">继续购买</view>
										<view class="exchange btn">撤销订单</view>
										<view class="evaluate btn">确认收货</view>
									</view>
								</view>
								<u-loadmore :status="loadStatus[2]" bgColor="#f2f2f2"></u-loadmore>
							</block>
						</view>
					</scroll-view>
				</swiper-item>
				<swiper-item class="swiper-item">
					<scroll-view scroll-y style="height: 100%;width: 100%;" @scrolltolower="toMoreData">
						<view class="page-box">
							<block v-if="dataBuffer ==false">
								<ordernull />
							</block>
							<block v-else>
								<view class="order" v-for="(res, index) in  orderList" :key="index">
									<view class="top">
										<view class="left">
											<u-icon name="home" :size="30" color="rgb(94,94,94)"></u-icon>
											<view class="store">编号: {{ res.ordernumber }}</view>
											<u-icon name="arrow-right" color="rgb(203,203,203)" :size="26"></u-icon>
										</view>
										<view class="right" v-if="res.status == 0">待支付</view>
										<view class="right" v-else-if="res.status == 1">待发货</view>
										<view class="right" v-else-if="res.status == 2">待收货</view>
									</view>
									<view class="item" v-for="(item, index) in res.child" :key="index">
										<view class="left">
											<image :src="item.img" mode="aspectFill"></image>
										</view>
										<view class="content">
											<view class="title u-line-2">{{ item.goodsname }}</view>
											<view class="type"></view>
											<view class="delivery-time">下单时间 {{res.addtime}}</view>
										</view>
										<view class="right">
											<view class="price">
												￥{{ priceInt(item.price) }}
												<text class="decimal">.{{ priceDecimal(item.price) }}</text>
											</view>
											<view class="number">x{{ item.num }}</view>
										</view>
									</view>
									<view class="total">
										共{{ res.countnumber }}件商品 合计:
										<text class="total-price">
											￥{{ priceInt(res.countmoney) }}.
											<text class="decimal">{{ priceDecimal(res.countmoney) }}</text>
										</text>
									</view>
									<view class="bottom">
										<view class="more">
											<u-icon name="more-dot-fill" color="rgb(203,203,203)"></u-icon>
										</view>
										<block v-if="res.status ==0">
											<view class="exchange btn">继续购买</view>
											<view class="exchange btn">撤销订单</view>
											<view class="evaluate btn">立即支付</view>
										</block>
										<block v-else-if="res.status ==1">
											<view class="logistics btn">继续购买</view>
											<view class="exchange btn">撤销订单</view>
											<view class="evaluate btn">提醒发货</view>
										</block>
										<block v-else-if="res.status ==2">
											<view class="logistics btn">查看物流</view>
											<view class="exchange btn">撤销订单</view>
											<view class="evaluate btn">确认收货</view>
										</block>
									</view>
								</view>
								<u-loadmore :status="loadStatus" :load-text="loadText" bgColor="#f2f2f2"></u-loadmore>
							</block>
						</view>
					</scroll-view>
				</swiper-item>
			</swiper>
		</view>
	</view>
</template>

<script>
	// 引入订单为空提示组件
	import ordernull from '@/components/ordernull/ordernull.vue';

	export default {
		components: {
			ordernull
		},
		data() {
			return {
				showBar: true, //初始化底部滑块开关
				orderList: [], //初始化订单列表数据
				isLoading: false,
				// 加载提示
				loadText: {
					loadmore: '下拉刷新',
					loading: '努力加载中',
					nomore: '我也是有底线的'
				},
				dataBuffer: true, //数据展示开关
				list: [{
						name: '待付款'
					},
					{
						name: '待发货'
					},
					{
						name: '待收货'
					},
					{
						name: '全部订单',
					}
				],
				current: 0,
				swiperCurrent: 0,
				tabsHeight: 0,
				dx: 0,
				loadStatus: "status",
				page: 1, // 保存我们的页码
				size: 3, // 每页的条数
				pageCount: 0 //总条数
			};
		},

		onLoad(option) {

			// 兼容百度小程序
			// #ifdef MP-BAIDU
			this.showBar = false;
			// #endif

			// 处理不同的订单状态 （默认请求状态是0的数据）
			let status = option.status || 0;
			// 给轮播图和current赋值
			this.swiperCurrent = status;
			this.current = status;


		},
		computed: {
			// 价格小数
			priceDecimal() {
				return val => {
					if (val !== parseInt(val)) return val.slice(-2);
					else return '00';
				};
			},
			// 价格整数
			priceInt() {
				return val => {
					if (val !== parseInt(val)) return val.split('.')[0];
					else return val;
				};
			}
		},

		methods: {
			toMoreData() {
				// console.log(1)
				// console.log(this.pageCount)
				this.page++;
				// 请求数据
				this.getOrderList();
			},
			// 获取数据
			getOrderList() {
				if (this.isLoading) { //来一个开关，避免多次下拉刷线，我上次数据还没请求玩呢
					return;
				}
				// 先关上
				this.isLoading=true;
				// this.isLoading=
				this.loadStatus = "loading";
				let options = {
					url: "/api/orderlist",
					header: {
						"content-Type": "application/json",
						authorization: uni.getStorageSync("userInfo").token
					},
					data: {
						uid: uni.getStorageSync("userInfo").uid,
						size: this.size,
						page: this.page,
						status: 1
					}
				}
				// 请求全部订单的数据
				this.$http(options).then(res => {
					this.isLoading = false; //数据请求到就放行
					console.log(res);
					if (res.data.code == 200) {
						if (res.data.list == null) {
							this.loadStatus = "nomore";
							if (this.orderList.length > 0) {
								return
							}
							this.dataBuffer = false //出现没有数据的框框
						} else {
							this.loadStatus = "loadmore";
							this.dataBuffer = true //隐藏没有数据的框框
							// 数据给我们上面
							res.data.list.data.map(item => {
								if (item.child) {
									// 处理图片格式
									item.child.map(item => {
										item.img = this.$baseUrl + item.img;
									})
								}
							})
							this.orderList = [...res.data.list.data, ...this.orderList];
							this.pageCount = res.data.list.totalPage;
							console.log(this.orderList, this.pageCount)
						}
					}

				})
				
			},
			// tab栏切换
			change(index) {
				this.swiperCurrent = index;
				// 当切换到我们全部订单的时候再去数据请求，后台只实现了全部订单的接口
				if (index != 3) {
					return; //只有index为3再请求数据
				}
				// 获取数据
				this.getOrderList();

				// 兼容支付宝小程序
				// #ifdef MP-ALIPAY
				this.current = index;
				// #endif

			},

			transition({
				detail: {
					dx
				}
			}) {
				this.$refs.tabs.setDx(dx);
			},
			animationfinish({
				detail: {
					current
				}
			}) {
				this.$refs.tabs.setFinishCurrent(current);
				this.swiperCurrent = current;
				this.current = current;
			}
		},
		//
	};
</script>

<style>
	/* #ifndef H5 */
	page {
		height: 100%;
		background-color: #f2f2f2;
	}

	/* #endif */
</style>
<style lang="scss" scoped>
	// 引入样式
	@import '@/static/css/order.scss';
</style>
