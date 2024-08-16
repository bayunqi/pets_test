<template>
	<view class="current_detail">
		<swiper class="swiper" autoplay circular indicator-dots="true">
			<swiper-item v-for="(item,index) in current_detail.urls" :key="index">
				<image :src="item" mode="widthFix" class="image"></image>
			</swiper-item>
		</swiper>
		<view class="name">姓名：{{current_detail.name}}</view>
		<view class="age">年龄：{{current_detail.age}}岁</view>
		<view class="characteristic">特征：{{current_detail.characteristic}}</view>
		<view class="linkman">联系人：{{current_detail.linkman}}</view>
		<view class="phone">联系人电话：{{current_detail.phone}}</view>
		<view class="notice">详细信息：{{current_detail.notice}}</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				id: '',
				current_detail: null,  // 初始化 current_detail
				details: [{
					id: 0,
					name: '小咪',
					age: '3',
					characteristic: '狸花猫',
					urls: ['../static/img/3.jpg', '../static/img/3.jpg', '../static/img/3.jpg', '../static/img/3.jpg', ],
					notice: '寻猫启示寻猫启示寻猫启示寻猫启示',
					phone: '13512345678',
					linkman: '杨先生'
				},
				{
					id: 1,
					name: '旺财',
					age: '2',
					characteristic: '土狗',
					urls: ['../static/img/1.jpg', '../static/img/1.jpg', '../static/img/1.jpg', '../static/img/1.jpg', ],
					notice: '寻狗',
					phone: '13512345678',
					linkman: '杨先生'
				}],
			}
		},
		onLoad(option) {
			this.id = option.id;
			this.current_detail = this.details.find(detail => detail.id === parseInt(this.id))
			console.log(this.current_detail)
		},
	}
</script>

<style lang="scss" scoped>
	.current_detail {
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