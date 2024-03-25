<template>
	<view class="user">
		<view class="userHead">

		</view>
		<view class="option">

		</view>
		<tabbar page="user" />
	</view>
</template>

<script>
	import tabbar from "@/components/tabbar/index"
	export default {
		name: "user",
		components: {
			tabbar
		},
		data() {
			return {}
		},
	}
</script>

<style lang="scss" scoped>
	.user {
		background-color: #d1d1d1;

		.userHead {
			height: 10rem;
			margin: 0 1rem;
		}

		.option {
			height: 10rem;
			margin: 1rem;
			border-radius: .4rem;
			background-color: #fff;
		}
	}
</style>