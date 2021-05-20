<template>
	<view>
		<!-- 搜索框 -->
		<view class="search_view">
			<u-search
				shape="square"
				:show-action="true" 
				action-text="搜索" 
				:clearabled="true"  
				:animation="true" 
				v-model="keywords"
				@search="search"
				@change="seachGoods"
				>
			</u-search>
		</view>
		<view class="list" v-if="buffer">
			<view class="row" v-for="(item,index) in goods" :key="index">
				<image :src="item.img" mode="widthFix"></image>
				<view class="info">
					<text>{{item.goodsname}}</text>	
					<text>￥{{item.market_price}}</text>	
					<text>3565评论</text>	 
				</view>
			</view>
		</view>
		<view class="api" v-else>
			没有数据亲！
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				buffer:true,//页面显示开关,
				keywords:'',//初始化搜索关键词
				goods:[]
				
			}
		},
		onLoad(options){
			
		},
	
		methods: {
			// 回车搜索
			search(){
				// 调用搜索
				this.seachGoods();
			},
			async seachGoods(){
				// console.log(this.keywords)
				// 请求数据吧
				// 先显示加载
				// 首先避免是空的什么都没有，因此我们先判断
				if(!this.keywords.trim()){
					// 提示不能为空
					this.$shotost.showTost("搜索内容不能为空哦~")
					return;
				}
				this.$shotost.showLoading('玩命加载中');
				let res=await this.$http({url:"/api/search",data:{keywords:this.keywords}});
				//判断
				if(res.data.code==200){
					// 隐藏提示框
					this.$shotost.hideLoading();
					// 判断没有数据的情况
					if(res.data.list==null){	
						this.buffer=false;
					}else{
						// 请求到了数据
						console.log(res);
						// 处理图片格式
						res.data.list.map(item=>{
							item.img=this.$baseUrl+item.img;
						})
						this.goods=res.data.list
					}
				}
			}
		},
		
	}
</script>

<style>
	/* 引入样式 */
	@import url("@/static/css/search.css");
</style>
