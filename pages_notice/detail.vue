<template>
	<view class="detail">
		<swiper class="swiper" autoplay circular indicator-dots="true">
			<swiper-item v-for="(item,index) in detail.urls" :key="index">
				<image :src="item" mode="widthFix" class="image"></image>
			</swiper-item>
		</swiper>
		<view class="name">姓名：{{detail.name}}</view>
		<view class="age">年龄：{{detail.age}}岁</view>
		<view class="characteristic">特征：{{detail.characteristic}}</view>
		<view class="linkman">联系人：{{detail.linkman}}</view>
		<view class="phone">联系人电话：{{detail.phone}}</view>
		<view class="notice">详细信息：{{detail.notice}}</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				id: '',
				detail: {
					id: 0,
					name: '小咪',
					age: '3',
					characteristic: '狸花猫',
					urls: ['../static/img/3.jpg', '../static/img/3.jpg', '../static/img/3.jpg', '../static/img/3.jpg', ],
					notice: '寻猫启示寻猫启示寻猫启示寻猫启示',
					phone: '13512345678',
					linkman: '杨先生'
				},
			}
		},
		onLoad(option) {
			this.id = option.id
		},
	}
</script>

<style lang="scss" scoped>
	.detail {
		width: 100%;

		.swiper {
			width: 100%;
			height: 500rpx;

			.image {
				width: 100%;
			}
		}

		.name,
		.age,
		.linkman,
		.phone,
		.notice,
		.characteristic {
			font-size: 30rpx;
			margin: 20rpx;
		}
	}
</style>