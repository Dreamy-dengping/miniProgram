<template>
	<view class="u-wrap">
		<view class="u-search-box">
			<u-search 
				shape="square"
				:show-action="true" 
				action-text="搜索" 
				:clearabled="true"  
				:animation="true" 
				v-model="keywords"
				:disabled="true"
				@click="goSearch"
			></u-search>
		</view>
		<view class="container" :style="{'height':cateHeight+'px'}">
				<!-- left左侧一级分类列表 -->
				<scroll-view :scroll-with-animation="true" scroll-y class="left">
					<!-- 循环遍历的 -->
					<view class="left_list" 
						v-for="(item,index) in catelist" 
						:key="index" 
						@click="changeCate(index)"
					>
						<text class="activeIndex" >{{item.catename}}</text>
						<text :class="{active:true}" v-if="index==activeIndex"></text>
					</view>
				</scroll-view>
				<!-- right右侧二级分类详情 -->
				<scroll-view scroll-y  class="right" :scroll-into-view="id">
					<view class="right_box" :id="'id'+index" v-for="(item,index) in catelist" :key="index">
						<view class="row_title">{{item.catename}}</view>
						<view class="row">
							<view 
								class="row_list" 
								v-for="(m,i) in item.children" 
								:key="i"
									@click="toGoodsDetail(m.id)"
							>	
								<image :src="m.img" mode="widthFix"></image>
								<text>{{m.catename}}</text>
							</view>
						</view>
					</view>
				</scroll-view>
			</view>
		</view>
	</view>
</template>
<script>
	
	// 引入分类测试数据
	import cateData from '@/utils/classify.data.js'
	
	export default {
		data() {
			return {
				id:'id3',//设置右侧默认置顶分类id
				activeIndex:0,//默认左侧分类选中下标
				cateHeight:'',//初始化分类容器高度
				catelist:[],//初始化分类数据
				keywords:'',
				isActive:false
			}
		},
		onLoad() {
			// 动态获取当前设备的高度
			this.cateHeight = uni.getSystemInfoSync().windowHeight;
			// 请求一级分类的数据
			this.getCate();
		},
			
		methods:{
				//1.获取分类数据
				async getCate(){
					let res=await this.$http({url:"/api/getcates"});
					console.log(res);
					// 处理children的图片格式l
					res.data.list.forEach(item=>{
						if(item.children){
							item.children.map(item=>{
								item.img=this.$baseUrl+item.img;
							})
						}
					})
					this.catelist=res.data.list;
					
					
				},
				//去到我们的详情页
				toGoodsDetail(id){
					// console.log(id)
					uni.navigateTo({
						url:"../goodlist/goodlist?cateid="+id+"&type=2"
					})
				},
				// 左侧点击,切换右边的排行
				changeCate(index){
					this.id="id"+index;
					// 改变当前活跃项
					this.activeIndex=index;
		}
	}
	}
</script>

<style lang="scss" scoped>
/* 引入样式 */
	@import url("@/static/css/cate.css");
	.active{
		width: 60%;
		height: 10rpx;
		background-color: red;
		position: absolute;
		left: 50%;
		transform: translate(-50%);
		bottom: 0;
		
	}
	.left_list{
		position: relative;
	}
</style>
