<template>
	<view class="order_box">
		<!-- head区域 -->
		<view class="head">
			<view class="useraddress">
				<view class="addressinfo" v-if="localBuffer" @click="toAddressDetail" hover-class="touchOpacity">
					<text space="ensp" class="addressinfo_top">{{address.username}} {{address.userphone}}</text>
					<view class="addressinfo_bottom">
						<!-- <uni-tag  size="small" type="error" :inverted="true" :circle="true" text="默认"></uni-tag>
						<uni-tag  size="small" type="error" :inverted="true" :circle="true" text="默认"></uni-tag> -->
						<text class="addressinfo_bottom_status" v-if="address.status ==1">默认</text>
						<text class="addressinfo_bottom_label" v-if="address.label != '' ">{{address.label}}</text>
						<text class="addressinfo_bottom_useraddress">{{address.location+address.useraddress}}</text>
					</view>
				</view>
				<view class="addressinfo" v-else>
					<u-button type="warning" :plain="true" @click="addressAdd">+点击完善收货地址</u-button>
				</view>
			</view>
		</view>

		<view class="order_ticket">
			<image src="../../static/icon/index/kingkong/selfsupport.png"></image>
			<text>品牌精选</text>
			<text>以免运费 |</text>
			<text>领券</text>
		</view>
		<!-- 商品信息区域 -->
		<view class="order_view">
			<!-- 明日来写购物车基本信息 -->
			<view class="cartInfochild" v-for="(item,index) in orders" :key="index">
				<!-- 图片 -->
				<image :src="item.img" class="cartInfo_image"></image>
				<!-- 信息 -->
				<view class="cartInfo_info">
					<text>{{item.goodsname}}</text>
					<text>￥
						<text style="font-size: 40rpx;color:#FF6040;">{{item.price}}</text>
					</text>
					<text>七天无理由退货</text>
				</view>
				<!-- 加减数量 -->
				<view class="cartInfo_num">
					<label> ×{{item.num}}</label>
				</view>
			</view>
		</view>

		<!-- 具体详细1 -->
		<view class="resDetail">
			<view hover-class="touchOpacity">
				<label for="" class="resDetail_title">发票类型</label>
				<label for="" style="margin-right:40rpx;color:#333333;font-size: 24rpx;">不开发票 ></label>
			</view>
			<view class="">
				<label for="" class="resDetail_title">售后免邮</label>
				<label for="" style="margin-right:40rpx;color:#666666;font-size: 24rpx;">部分商家赠送</label>
			</view>
			<view class="">
				<label for="" class="resDetail_title">卖家留言</label>
				<label for="" style="margin-right:40rpx;color:#666666;font-size: 24rpx;">填写内容需要与商家协商并确认，45字以内</label>
			</view>
		</view>

		<!-- 具体详细2 -->
		<view class="resDetail" style="margin:10rpx 0 98rpx;">
			<view class="">
				<label for="" class="resDetail_title">商品金额</label>
				<label for="" style="margin-right:40rpx;color:#333333;font-size: 24rpx;">￥{{totalPrice}}</label>
			</view>
			<view class="">
				<label for="" class="resDetail_title">优惠活动</label>
				<label for="" style="margin-right:40rpx;color:#FF6040;font-size: 24rpx;">-￥200</label>
			</view>
			<view hover-class="touchOpacity">
				<label for="" class="resDetail_title">优惠券</label>
				<label for="" style="margin-right:40rpx;color:#666666;font-size: 24rpx;">更多优惠券 ></label>
			</view>
		</view>
		<!-- 确认订单按钮 -->
		<view class="foot">
			<view class="foot_left">
				<text class="foot_left_count" space="ensp">合计<text>￥{{totalPrice}}</text></text>
				<text class="foot_left_ticket" space="ensp">已免运费<text>已优惠￥100</text></text>
			</view>
			<view class="foot_right" @click="toPay" hover-class="touchOpacity">确认订单</view>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				orders: [],
				countmoney: 0,
				countnumber: 0,
				totalPrice: "",
				address: {}, //初始化收货地址
				localBuffer: false, //初始化收货地址开关
			}
		},
		onLoad(option) {
			// 获取我们去地址详情选中过来的信息
			this.getOrder();
			// 获取收货地址展示
			this.getAddress();
		},
		onShow() {
			//展示我们收货地址
			this.showAddr()
		},
		// watch:{
		// 	address:{
		// 		handler(oldVal,newVal){
		// 			console.log(oldVal);
		// 			console.log(newVal);
		// 			// this.address=newVal;
		// 			console.log("改变了")
		// 		},
		// 		deep:true
		// 	}
		// },
		methods: {
			// 去支付
			toPay() {
				// 计算总数量
				let sum = 0;
				for (let prop of this.orders) {
					sum += prop.num
				}
				// 拼接购物车id
				let idstr = "";
				// console.log(this.orders);
				let re = this.orders.map(item => {
					return item.id
				})
				idstr = re.join(",");
				
				let option = {
					url: "/api/orderadd",
					method: "POST",
					header: {
						"content-Type": "application/json",
						authorization: uni.getStorageSync("userInfo").token
					},
					data: {
						uid: uni.getStorageSync("userInfo").uid,
						countmoney: this.totalPrice,
						countnumber: sum,
						// addressid这个参数有误，后端的字段写错了
						addressid: this.address.id,
						idstr,
					}
				}
				console.log(option);
				

				// 调接口
				this.$http(option).then(res => {
					console.log(res);
					if (res.data.code == 200) {
						//去到订单支付页面,拿到订单号传过去
						let idCar = res.data.list.outTradeNo;
						uni.navigateTo({
							url: "../pay/pay?outTradeNo=" + idCar+"&countmoney="+this.totalPrice
						})
					}

				})
			},
			// 去到地址详情页
			toAddressDetail() {
				uni.navigateTo({
					url: "../address/address"
				})
			},
			// 渲染收货地址
			showAddr() {
				let addr;
				try {
					addr = JSON.parse(this.$mp.query.checkAddr);

				} catch {
					addr = {};
				}
				// let addr=JSON.parse(this.$mp.query.checkAddr)||{};//空对象避免报错
				// console.log(addr)
				// 改我们的默认地址
				if (addr.id) { //随便检查有么有值，有值的换我们才改地址，不然不动
					// this.address=addr;//确实改掉了，但是页面没有变
					setTimeout(() => {
						this.address = addr; //来个异步定时器就OK了，避免后面我们的会改掉我们这里同步修改的地址
					}, 300)
				}
			},

			// 完善地址信息
			addressAdd() {
				uni.navigateTo({
					url: "../address/address"
				})
			},
			// 获取收获地址
			getAddress() {
				let option = {
					url: "/api/addresslist",
					method: "GET",
					header: {
						"content-Type": "application/json",
						authorization: uni.getStorageSync("userInfo").token
					},
					data: {
						uid: uni.getStorageSync("userInfo").uid,
						status: 1
					}
				}

				// 请求地址
				this.$http(option).then(res => {
					// console.log(res);
					if (res.data.code == 200) {
						if (res.data.list == null) {
							// 地址为空
							this.localBuffer = false
						} else {
							// 地址有数据
							this.localBuffer = true,
								this.address = res.data.list[0]
						}
					}
				})
			},
			getOrder() {
				// 缓存的方式
				let orderInfo = uni.getStorageSync("carList");
				this.orders = orderInfo.sureOrder;
				this.totalPrice = orderInfo.totalPrice

				// 这种做法会报错（购物车传递数据的话）
				// console.log(this.$mp.query.orderInfo)
				// let orderInfo=JSON.parse(this.$mp.query.orderInfo);
				// // console.log(orderInfo);	
				// this.orders=orderInfo.sureOrder;
				// this.totalPrice=orderInfo.totalPrice
			}
		}
	}
</script>

<style scoped>
	/* 引入样式 */
	@import url("@/static/css/order.css");
</style>
