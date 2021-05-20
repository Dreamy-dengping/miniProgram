<template>
	<!-- 登录状态的 -->
	<block v-if="isLogin">
		<view class="cart_box" v-if="buffer">
			<view class="cart_head">
				<view class="cart_menu">
					<text>全部(20)</text>
					<text>降价(4)</text>
					<text>常卖(2)</text>
					<text>分类</text>
				</view>
				<view class="cart_ticket">
					<!-- 此处使用checkbox是因为支付宝switch没有checkbox类型 -->
					<!-- <switch type="checkbox" :checked="true" color="#ff6040"  /> -->
					<checkbox color="#FF6040" value="true" />
					<text class="cart_ticket_text1">小U自营</text>
					<text class="cart_ticket_text2">以免运费 |</text>
					<text class="cart_ticket_text3">领券</text>
				</view>
			</view>

			<view class="container">
				<view class="top">
					<scroll-view class="scroll-view_H" scroll-x="true" scroll-left="0" v-for="(item,index) in cartList"
						:key="index">
						<view class="cartInfo" id="demo1">
							<!-- 明日来写购物车基本信息 -->
							<view class="cartInfochild">
								<!-- 选择框 -->
								<view class="cartInfo_switch common">
									<!-- 点击当前商品 -->
									<checkbox-group @change="singleChange(index)">
										<checkbox color="#FF6040" :checked="item.status" value="1" />
									</checkbox-group>

									<!-- <switch type="checkbox" :checked="true"  color="#ff6040" /> -->
								</view>
								<!-- 图片 -->
								<view class="cartInfo_image common">
									<image :src="item.img" mode="widthFix"></image>
								</view>

								<!-- 信息 -->
								<view class="cartInfo_info">
									<label style="font-size: 32rpx;">{{item.goodsname}}</label>
									<label style="font-size: 24rpx; color: #ccc;">规格：不错的商品</label>
									<label style="font-size: 20rpx; color: #FF6040;">比加入降低￥100</label>
									<label style="color:#FF6040;">￥
										<text style="font-size: 40rpx;color:#FF6040;">{{item.price}}
										</text> <text>￥200</text>
									</label>
								</view>
								<!-- 加减数量 -->
								<view class="cartInfo_num">
									<view class="cartInfo_num_child">
										<label @click="des(index)">－</label>
										<label>{{item.num}}</label>
										<label @click="add(index)">＋</label>
									</view>
								</view>
							</view>

						</view>
						<view class="cartDel" id="demo2">
							<label for="" @click="del(index)">删除</label>
						</view>
					</scroll-view>
				</view>

				<!-- 底部 -->
				<view class="foot">
					<view class="footd1">
						<checkbox-group @change="changeAll">
							<checkbox color="#FF6040" value="1" :checked="checkAll" />
						</checkbox-group>
						<!-- <switch type="checkbox" :checked="true" color="#ff6040" /> -->
						<label>全选</label>
					</view>
					<view class="footd2">
						<view class="footd2sp1">合计：<label style="color: #FF6040;">￥ {{totalPrice}}</label></view>
						<label class="footd2sp2">不含运费，已优惠￥0.00</label>
					</view>
					<!-- 跳到提交订单，结算页面 -->
					<view class="footd3" hover-class="touchOpacity">
						<!-- 被选中的商品的个数 -->
						<label @click="toPay">去结算({{totalNum}}件)</label>
					</view>
				</view>
			</view>
		</view>
		<!-- 无数据提示，登录没有数据的 -->
		<view v-else>
			<cartnull />
		</view>
	</block>
	<button type="default" v-else @click="goLogin">去登录</button>
</template>

<script>
	// 引入数据为空提示组件
	import cartnull from '@/components/cartnull/cartnull.vue';
	export default {
		onLoad() {
			// 请求购物车数据
			this.getCarList();
		},
		components: {
			cartnull
		},
		data() {
			return {
				isLogin: true,
				checkAll:true,
				cartList: [], //初始化购物车数据
				buffer: true, //检测购物车是否有数据
			}
		},
		// 页面显示时
		onShow() {
			// 检测登录状态
			this.$checkToken(this).then(res => {
				this.isLogin = res;
			})
			//请求购物车数据
			this.getCarList();
		},
		computed: {
			// 总价格
			totalPrice() {
				let sum = 0;
				for (let parm of this.cartList) {
					if (parm.status == 1) {
						sum += parm.num * parm.price
					}
				}
				return sum;
			},
			// 总数量
			totalNum() {
				let sum = 0;
				for (let parm of this.cartList) {
					if (parm.status == 1) {
						sum += parm.num;
					}
				}
				return sum;
			}
		},
		methods: {
			// 去结算
			toPay(){
				//跳转到订单页面
				// 将总价和选中的订单传递过去
				let orderInfo={};
				orderInfo.totalPrice=this.totalPrice;//总价格传过去
				orderInfo.sureOrder=this.cartList.filter(item=>{
					return item.status;
				})
				// 判断：当我们结算商品长度为0的时候就不让去结算页面
				if(orderInfo.sureOrder.length==0){
					// 证明没选中商品提示一下
					this.$shotost.showTost("结算商品最少选中一件哦");	
					return;
				}
				// console.log(orderInfo);
				// 将用户的购物信息存到缓存
				uni.setStorageSync("carList",orderInfo);
				// 再跳转
				uni.navigateTo({
					url:"../order/order"
				})
			},
			// 修改购物车信息(只能加或者减)
			cartedit(id,type){
				let option={
					url:"/api/cartedit",
					header:{
						"content-Type":"application/json",
						authorization:uni.getStorageSync("userInfo").token
					},
					data:{
						id,
						type
					},
					method:"POST"
				}
				// 数据请求
				this.$http(option).then(res=>{
					// console.log(res)
					if(res.data.code==200){
						// 重新请求购物车数据
						this.getCarList();
					}
				})
			},
			
			// 点击删除
			del(index){
			let id=this.cartList[index].id;
			// 为了网络优化，先删除本地
			this.cartList.splice(index,1);
			// 调接口
			let option={
				url:"/api/cartdelete",
					header:{
						"content-Type":"application/json",
						authorization:uni.getStorageSync("userInfo").token
					},
					data:{
						id,
					},
					method:"POST"
			};
			this.$http(option).then(res=>{
				if(res.data.code==200){
					this.$shotost.showTost("删除成功");
					// 同时调用一下购物车数据
					this.getCarList();
				}
			})
			},
			// 点击加	
			add(index){
				let id=this.cartList[index].id;
				// console.log(id)
				// 先更新本地
				this.cartList[index].num++;
				// 调用更新数据库
				this.cartedit(id,2);
				
			},
			// 点击减
			des(index){
				let id=this.cartList[index].id;
				// console.log(id)
				// 先更新本地
				this.cartList[index].num--;
				if(this.cartList[index].num<=0){
					this.cartList[index].num=0;
					return;
				}
				// 调用更新数据库
				this.cartedit(id,1);
			},
			// 单个变化
			singleChange(index){
				// let 
				this.cartList[index].status=!this.cartList[index].status;
				this.checkAll=this.cartList.every(item=>{
					return item.status;
				})
				// console.log(this.cartList);
			},
			// 全选
			changeAll(e){
				this.checkAll=e.detail.value[0]=="1"?true:false;
				// console.log(isChecked);
				this.cartList.forEach(item=>{
					item.status=this.checkAll;
				})
			},
			// 获取购物车列表
			getCarList() {
				// 请求购物车数据
				let option = {
					url: "/api/cartlist",
					header: {
						"content-Type": "application/json",
						authorization: uni.getStorageSync("userInfo").token
					},
					data: {
						uid: uni.getStorageSync("userInfo").uid
					}
				}
				this.$http(option).then(res => {
					// console.log(res)
					if (res.data.list == null) {
						this.buffer = false
					} else {
						this.buffer = true
						res.data.list.forEach(item => {
							item.img = this.$baseUrl + item.img;
							// 处理下status
							if(item.status==1){
								item.status=true
							}else{
								item.status=false
							}
						})
						this.cartList = res.data.list
						// console.log(this.cartList)
					}
				})
			},
			// 去登录
			goLogin() {
				uni.navigateTo({
					url: "../textlogin/textlogin"
				})
			}
		}
	}
</script>

<style scoped>
	/* 引入样式文件 */
	@import url("@/static/css/cart.css");
</style>
