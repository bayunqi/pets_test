<template>
	<view class="toTop" @click="$emit('btn')">
		<image src="../static/img/back.png" class="logo"></image>
	</view>
</template>

<script>
</script>

<style lang="scss" scoped>
	.toTop {
		width: 100rpx;
		height: 100rpx;
		border-radius: 50%;
		position: fixed;
		right: 20rpx;
		bottom: 200rpx;
		z-index: 9999;
		background-color: #F9F9F9;
		display: flex;
		align-items: center;
		justify-content: center;

		.logo {
			width: 50rpx;
			height: 50rpx;
			transform: rotate(90deg);
			margin-top: -5rpx;
		}
	}
</style>