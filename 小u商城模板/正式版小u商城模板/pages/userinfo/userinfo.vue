<template>
	<view class="wrap">
		<form @submit="submit">
			<view class="top">
				<view class="item">
					<view class="left">会员昵称</view>
					<input type="text" placeholder-class="line" placeholder="请填写会员昵称" name="nickname"
						v-model="nickname" />
				</view>
				<view class="item">
					<view class="left">会员头像</view>
					<u-upload ref="uUpload"  name="avatarurl" :fileList="oldAvatarUrl" max-count="1" :action="action"
						upload-text="上传头像" :auto-upload="false" @on-success="uploadsuccess" @on-error="uploaderror"
						@on-choose-complete="chooseimg" :form-data="formData" :header="header"></u-upload>
				</view>
				<view class="item">
					<view class="left">会员性别</view>
					<view class="right">
						<u-radio-group v-model="sex" @change="radioGroupChange" active-color="orange">
							<u-radio v-for="(item, index) in sexlist" :key="index" :name="item.value">
								{{item.name}}
							</u-radio>
						</u-radio-group>
					</view>
				</view>
				<view class="item" @click="showBirthdayPicker">
					<view class="left">会员生日</view>
					<input disabled type="text" placeholder-class="line" placeholder="2020-11-03" name="birthday"
						v-model="birthday" />
				</view>
				<view class="item" @click="regionVisible=true">
					<view class="left">所在地址</view>
					<input disabled type="text" placeholder-class="line" placeholder="省市区县、乡镇等" name="region"
						v-model="region" />
				</view>
			</view>
			<regionPicker :visible.sync="regionVisible" mode="region" default-type="value" :hide-area="false"
				@confirm="onConfirm($event,'region')" ref="region"></regionPicker>
			<u-picker mode="time" ref="uPicker" v-model="birthdayShow" @confirm="birthdayConfirm" />
			<button form-type="submit" type="warn">保存并使用</button>
			<button form-type="reset">重置</button>
		</form>
	</view>
</template>

<script>
	// 引入地区模块
	import regionPicker from "@/components/region/w-picker.vue";
	export default {
		components: {
			regionPicker
		},
		data() {
			return {
				id: '', //初始化修改数据id
				// 头像提交服务端地址
				action: this.$baseUrl + `/api/infoedit`,
				// 需要展示的图片列表比如展示需要编辑的用户头像
				oldAvatarUrl: [],
				// 表单数据(不含头像信息)
				formData: {},
				// 初始化header头
				header: {},
				oldImg: '', //初始化旧图片
				regionVisible: false, //初始化地区选择器开关
				nickname: '', //初始化收件人姓名
				region: '', //初始化地区默认值
				birthday: '',
				birthdayShow: false,
				sexlist: [{
						value: 1,
						name: '男'
					},
					{
						value: 2,
						name: '女'
					},
				],
				sex: 1, //初始化会员性别,
				
			}
		},
		onLoad() {
			// 获取用户信息
			this.getUserInfo(1);
		},

		methods: {

			// 获取用户信息
			getUserInfo(type) {
				let option = {
					url: "/api/getuserinfo",
					header: {
						authorization: uni.getStorageSync("userInfo").token,
						"content-Type": 'application/json'
					},
					data: {
						uid: uni.getStorageSync("userInfo").uid,
					}
				}
				// 请求接口数据
				this.$http(option).then(res => {
					// console.log(res);
					if (res.data.code == 200) {
						if(type==1){ //只有onload的时候 才会重新赋值
							this.id = res.data.list[0].id;
							this.nickname = res.data.list[0].nickname;
							this.birthday = res.data.list[0].birthday;
							this.sex = res.data.list[0].sex;
							this.region = res.data.list[0].region;
							this.oldAvatarUrl = [{url: this.$baseUrl + res.data.list[0].avatarurl}]
						}else{ //点击保存修改的修改的是  只要更新缓存就可以
							// 更新一下我们本地缓存
							let token=uni.getStorageSync("userInfo").token;
							uni.setStorageSync("userInfo",{
								...res.data.list[0],
								token
							})
						}
						
					}
				})
			},
			// 点击提交
			submit(e) {
				let option = e.detail.value;
				option.sex = this.sex;
				option.id = this.id;
				console.log(option);
				this.formData = {
					...option,
				}
				this.header = {
					authorization: uni.getStorageSync("userInfo").token
				}
				
				let file;
				// 捕获异常
				try{
					 file = this.$refs.uUpload.lists[0].file;
					
				}catch{
					this.$shotost.showTost('图片文件不能为空');
					return;
				}
			
				//证明更改过图片
				if (file) {
					setTimeout(() => {
					this.$refs.uUpload.upload();
					}, 1000)
					
					//异步，先让上面执行
					setTimeout(()=>{
						//跳转页面return
						
						uni.switchTab({
							url:"../user/user"
						})
					},1500)
					
				} else {
					//没有改过图片,直接发送请求，更改其他信息
					let options={
						url:"/api/infoedit",
						header:{
							authorization:uni.getStorageSync("userInfo").token
						},
						method:"POST",
						data:option
					}
					// console.log(options);
					this.$http(options).then(res=>{
						// console.log(res)
						if(res.data.code==200){
							// 上传成功
							//重新请求一下我们的数据
							this.getUserInfo(2);
							//跳转页面
							setTimeout(()=>{
								uni.switchTab({
									url:"../user/user"
								})
							},300)
						}
					})
				}


			},
			// 选择会员地区
			onConfirm(res) {
				// 选择确定触发
				console.log(res); //这个值是我们地区的值
				this.region = res.result;

			},
			// 监听本地选择图片
			chooseimg(lists, name) {
				// console.log(lists)

			},
			// 性别标签切换
			radioGroupChange(e) {
				// console.log(e);
				this.sex = e;
				console.log(this.sex)
			},


			// 开始生日选择器
			showBirthdayPicker(e) {
				this.birthdayShow = true;
				console.log(e)
			},
			// 监听时期选择器
			birthdayConfirm(e) {
				this.birthday = e.year + "-" + e.month + "-" + e.day
			},

			// 图片上传成功触发
			uploadsuccess(data, index, lists, name) {
				console.log("上传成功")
				// 重新请求数据
				this.getUserInfo(2);
			},
			// 图片上传失败触发
			uploaderror(res, index, lists, name) {
				console.log("上传失败")
			},

		}
	}
</script>

<style lang="scss" scoped>
	// 引入样式
	@import '@/static/css/userinfo.scss';
</style>
