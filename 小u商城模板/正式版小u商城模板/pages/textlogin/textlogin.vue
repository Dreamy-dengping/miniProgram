<template>
	<view class="login_box">
		<view class="text_login">
			<!-- logo -->
			<image class="login_logo"  src="../../static/logo/orange.png" alt="" />
			
			<!-- 表单区域 -->
			<view class="login_phone">
				<text>手机号</text>
				<input type="text" v-model="phone" placeholder="请输入手机号"  maxlength="11" />
			</view>
			<view class="login_code">
				<text>验证码</text>
				<input type="text" v-model="code" placeholder="请输入验证码"  maxlength="4"/>
				<view class="code" :class="{getCode:isShow}" hover-class="touchOpacity" @click="getCode">{{msg}}</view>
			</view>
			
			<!-- 登录按钮 -->
			<view class="login_but" @click="login" hover-class="touchOpacity" >
				<text space="ensp"  class="login">登    录</text> 
				{{codeTwo}}
			</view>
		</view>
	</view>
</template>

<script>

	export default {
		data() {
			return {
				msg:"点击获取验证码",
				isShow:false,
				// 定时器节流
				isTag:true,
				phone:"",
				code:"",
				codeTwo:""
				
			}
		},
		methods: {
			
			// 点击获取验证码
			async getCode(){
				// 确认电话格式是否正确
				let reg=/^1[3-9][0-9]{9}$/;
				if(!reg.test(this.phone)){
					this.$shotost.showTost("电话号码格式不正确");
					return;
				}
				
				if(!this.isTag){
					return;
				}	
				// 发送请求
				let res=await this.$http({url:"/api/sms",data:{phone:this.phone}});//少个参数
				if(res.data.code==200){
					uni.setStorageSync("code",res.data.list.code);
					this.codeTwo=uni.getStorageSync("code");
					uni.setStorageSync("phone",this.phone);
				}
				let num=60;
				// 将样式换掉
				this.isShow=true;
				let timer=setInterval(()=>{
					// 关掉开关
					this.isTag=false;
					num--;
					if(num<=0){
						// 打开开关
						this.isTag=true;
						clearInterval(timer);
						this.isShow=false;
						this.msg="重新发送验证码";
						// 清除本地保存的验证码
						uni.removeStorageSync("code");
						return;
					}
					this.msg=num+"秒后重新发送";
				},1000)
				
			},
			// 点击登录
			login(){
				console.log(15523819774);
				// 确认电话格式是否正确
				let reg=/^1[3-9][0-9]{9}$/;
				if(!reg.test(this.phone)){
					this.$shotost.showTost("电话号码格式不正确");
					return;
				}
				if(!this.code){
					console.log(1)
					this.$shotost.showTost("请输入验证码");
					return;
				}
				let code=uni.getStorageSync("code");
				let phone=(uni.getStorageSync("phone"))*1;
				console.log(code,phone);
				// 判断
				if(!code){
					this.$shotost.showTost("验证码过期，重新再试");
				}else if(this.code!==code+""){
					this.$shotost.showTost("验证码错误，重新获取");
				}else{
					// console.log("shuj")
					// 调接口
					this.$http({url:'/api/smslogin',method:"POST",data:{phone}}).then(res=>{
						this.$shotost.showTost(res.data.msg);
						// 将用户信息存储在本地
						// uni.setStorageSync("userInfo",JSON.stringify(res.data.list));
						uni.setStorageSync("userInfo",res.data.list);
						console.log(res.data.list)
						setTimeout(()=>{
							console.log(1)
							// 跳转我的页面
							uni.switchTab({
								url:"../user/user"
							})
						},2000)
					})
					
				}
			}
		}
}
</script>

<style>
	@import url("@/static/css/textlogin.css");
</style>
