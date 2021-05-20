<template>
	<view>
		<block v-if="dataBuffer">
			<view class="item" v-for="(res, index) in siteList" :key="res.id" @click="toOrder(index)">
				<u-icon name="close-circle-fill" :size="40" color="#ff5500" :index="res.id"></u-icon>
				<view class="top">
					<view class="name">{{ res.username }}</view>
					<view class="phone">{{ res.userphone }}</view>
					<view class="tag">
						<text class="red" v-if="res.status == 1">默认</text>
					</view>
				</view>
				<view class="bottom">
					{{res.location+res.useraddress}}
					<!-- incon没有无法获取事件对象，我们自己写一个覆盖在上面 -->
					<view class="edit" @click.stop="edit($event,res.id)">

					</view>
					<u-icon  name="edit-pen" :size="40" color="#999999" :index="res.id"></u-icon>
				</view>
			</view>
		</block>
		<view v-else>
			暂无收货地址信息!
		</view>
		<view class="addSite" @tap="toAddSite">
			<view class="add">
				<u-icon name="plus" color="#ffffff" class="icon" :size="30"></u-icon>新建收货地址
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				siteList: [], //初始化地址数据
				dataBuffer: true
			};
		},
		onShow() {
			// 这里渲染地址数据
			this.getAddreeList()
		},
		methods: {
			// 点击编辑单个地址信息
			edit(event,id) {
				console.log(id);
				// 跳转到地址修改页面
				uni.navigateTo({
					url:"./addEdit?id="+id
				})
			},
			// 去订单页面
			toOrder(index) {
				// console.log(index)
				// 找到选中的那条地址信息传过去渲染
				let checkAddr = this.siteList[index];
				// console.log(checkAddr);
				uni.navigateTo({
					url: "../order/order?checkAddr=" + JSON.stringify(checkAddr)
				})
			},
			// 获取地址信息数据
			getAddreeList() {
				let option = {
					url: "/api/addresslist",
					header: {
						"content-Type": "application/json",
						authorization: uni.getStorageSync("userInfo").token
					},
					data: {
						uid: uni.getStorageSync("userInfo").uid,
					}
				}
				// 请求数据
				this.$http(option).then(res => {
					console.log(res);
					if (res.data.code == 200) {
						if (res.data.list == null) {
							// 没有地址信息
							this.dataBuffer = false
						} else {
							this.dataBuffer = true
							this.siteList = res.data.list
						}
					}
				})
			},
			// 跳转到新增地址页面
			toAddSite() {
				uni.navigateTo({
					url: './addSite'
				})
			}
		}
	};
</script>

<style lang="scss" scoped>
	// 引入样式
	@import '@/static/css/address.scss';

	.edit {
		width: 100rpx;
		height: 100rpx;
		background-color:green;
		z-index: 10;
		opacity: 0;
		position: absolute;
		right: 0;
		bottom: 10rpx;
	}

	.item {
		position: relative;

	}
</style>
