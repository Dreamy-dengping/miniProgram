export const checkToken = async (_this) => {
	let res = uni.getStorageSync("userInfo")||null;
	// console.log(res)
	if(res){
		// res=JSON.parse(res);
		res.avatarurl=_this.$baseUrl+res.avatarurl;
	}
	// console.log(res);
	// 用户信息存给app
	_this.userInfo = res;
	if (!res) { //未登录
		uni.setTabBarItem({
			index: 3,
			text: "未登录"
		});
	} else {
		//已经登录
		// 检测token有效性
		let options = {
			url: "/api/checktoken",
			header: {
				authorization: res.token
			}
		};
		let result = await _this.$http(options)
		if (result.data.code == 200) { //证明token未过期
			// console.log(result);
			uni.setTabBarItem({
				index: 3,
				text: "我的"
			})
			return true;
		} else { //token过期
			uni.setTabBarItem({
				index: 3,
				text: "未登录"
			})
			// 清除本地用户信息
			uni.removeStorageSync("userInfo")
			return false;
		}

	}

}
