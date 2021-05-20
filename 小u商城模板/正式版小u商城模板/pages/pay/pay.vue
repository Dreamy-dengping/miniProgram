<template>
	<view class="pay">
		<view class="payorder">
			<view class="payNumber">
				订单号:{{outTradeNo}}
			</view>
			<view class="payPrice">
				<text>¥</text>{{totalAmount}}
			</view>
			<view class="payTime">
				<!-- 最迟支付时间:{{payinfo.end_time}} -->
			</view>
		</view>
		<view class="payType">
			<view class="payTypeTitle">
				请选择支付方式
			</view>
				<radio-group @change="radioChange" >
				<view class="payTypeItem">
					<view class="payTypeItemLeft">
						<image src="../../static/pay/alipay.png" class="payicon"></image>支付宝支付
					</view>
					<radio color="#01c2fa" value="1" checked=""></radio>
				</view>
				<view class="payTypeItem">
					<view class="payTypeItemLeft">
						<image src="../../static/pay/wxpay.png"  class="payicon"></image>微信支付
					</view>
					<radio color="#01c2fa" value="2"></radio>
				</view>
			</radio-group>
		
		</view>
		<view class="payButton" @click="sureToPay">
			确定支付
		</view>
		
		<!-- 添加支付表单区域 -->
		<div id="divform" ref='aa'></div>
	</view>
	
</template>

<script>

	export default{
		data(){
			return{
				paytype:1,
				payForm:'',//初始化支付表单
				totalAmount:"",//初始化总支付金额
				outTradeNo:'',//初始化主订单号
			}
		},
		onLoad(option) {
			let outTradeNo=this.$mp.query.outTradeNo;
			let countmoney=this.$mp.query.countmoney;
			this.outTradeNo=outTradeNo;
			this.totalAmount=countmoney;
			console.log(this.$mp.query);
		},
		methods:{
			// 点击确认支付
			sureToPay(){
				let option={
					url:"/api/alipay",
					method:"POST",
					data:{
						outTradeNo:this.outTradeNo,
						totalAmount:this.totalAmount,
						type:1
					},
					header:{
						"content-Type":"application/json",
						authorization:uni.getStorageSync("userInfo").token
					}
				};
				// 清切支付接口
				this.$http(option).then(res=>{
					console.log(res)
					if(res.data.code==200){
						this.$refs.aa.innerHTML=res.data.list;
						document.forms[0].submit();
					}
				})
			},
			// 支付宝支付
			pay(){
				
				
			},
			// 切换支付方式
			radioChange(){}
		}
	}
</script>

<style>
	/* 引入样式 */
	@import '@/static/css/pay.css';
</style>
