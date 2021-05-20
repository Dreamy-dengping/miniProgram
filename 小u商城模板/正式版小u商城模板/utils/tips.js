const showTost=(title,icon)=>{
		uni.showToast({
			title,
			icon
		})
}

const showLoading=(title)=>{
		uni.showLoading({
			title,
		})
}
const hideLoading=(title)=>{
		uni.hideLoading()
}


export default {
	showTost,
	showLoading,
	hideLoading
}