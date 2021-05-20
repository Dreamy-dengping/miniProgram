<script>
	// 项目的根组件
	export default {
		globalData:{
			userInfo:{}
		},
		onLaunch() {
		// 验证一下是否登录有效
		this.$checkToken(this);
		},
		methods: {
		
		}
	}
</script>

<style lang="scss">
	/* 注意要写在第一行，同时给style标签加入lang="scss"属性 */
	@import "uview-ui/index.scss";

	/* 触摸样式 */
	.touchOpacity {
		opacity: 0.3;
		color: #ff6040;
	}
</style>
