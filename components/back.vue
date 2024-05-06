<template>
	<image src="../static/img/back.png" class="back" @tap="back"></image>
</template>

<script>
	export default {
		methods: {
			back() {
				uni.navigateBack()
			}
		}
	}
</script>

<style lang="scss" scoped>
	.back {
		width: 40rpx;
		height: 40rpx;
		position: fixed;
		top: 110rpx;
		left: 30rpx;
		z-index: 9999;
	}
</style>