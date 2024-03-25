<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	/* scroll-view组件隐藏滚动条 */
	.scroll-view-class ::-webkit-scrollbar {
		display: none !important;
	}

	::-webkit-scrollbar {
		display: none !important;
	}
</style>