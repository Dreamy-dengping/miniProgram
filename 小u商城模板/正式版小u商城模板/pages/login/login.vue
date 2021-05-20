<template>
	<view class="box">
		<!-- logo -->
		<view class="login_title">
			欢迎登录小U商城
		</view>
		<image class="login_logo"  src="../../static/logo/orange.png" alt="" />
		<button class="login_but" hover-class="touchOpacity" open-type="getPhoneNumber" @getphonenumber="wxlogin">
			微信用户一键登录
		</button>
		<view  class="login_text" hover-class="touchOpacity" @click="toTextLogin">手机号验证注册/登录</view>
	</view>
</template>

<script>

	export default {
		data() {
			return {
			}
		},
		onLoad() {},
		methods: {
			// 微信一键登录
			// #ifdef MP-WEIXIN
				wxlogin(e){
				console.log(e)
				// 
				let {encryptedData,iv}=e.detail;
				// 调用wx.login获取code
				wx.login({
					success:(res)=> {
						console.log(res);
						// 请求数据
						let option={
							url:"/api/wxlogin",
							method:"POST",
							data:{
								encryptedData,
								iv,
								code:res.code
							}
						}
						// console.log(option);
					this.$http(option).then(res=>{
						console.log(res)
						if(res.data.code==200){
							this.$shotost.showTost(res.data.msg);
							// 将信息存到缓存
							uni.setStorageSync("userInfo",res.data.list)
							setTimeout(()=>{
								uni.switchTab({
									url:"../user/user"
								})
							},1000)
						}
					})
					}
				})
			},
			// #endif
			toTextLogin(){
				uni.navigateTo({
					url:"../textlogin/textlogin"
				})
			}
		}
	}
</script>

<style>
	/* 导入外部的样式文件 */
	@import url("@/static/css/login.css");
</style>
