<template>
	<scroll-view scroll-y="true" class="index">
		<view style="height: 40rpx;"></view>
		<view class="info">
			<image src="" class="head"></image>
			<view class="right">
				<view class="name">{{name}}</view>
				<view class="tips">{{tips}}</view>
			</view>
		</view>
		<view class="model">
			<view class="title">
				<view class="text">寻宠启示</view>
				<view class="more">更多</view>
			</view>
			<scroll-view scroll-x="true" enable-flex="true" class="imgs">
				<view class="item" v-for="(item,index) in findPet" :key="index">
					<image :src="item.peturl" class="peturl" mode="aspectFill"></image>
					<view class="petName">{{item.name}}</view>
					<view class="value">{{item.content}}</view>
				</view>
			</scroll-view>
		</view>
		<view class="model">
			<view class="title">
				<view class="text">宠友圈</view>
			</view>
			<view class="content">
				<dynamic :list="list" />
			</view>
		</view>
		<view style="height: 130rpx;"></view>
		<tabbar page="index" />
	</scroll-view>
</template>

<script>
	import tabbar from "@/components/tabbar/index"
	import dynamic from "@/components/dynamic"
	export default {
		components: {
			tabbar,
			dynamic
		},
		data() {
			return {
				name: '立即绑定',
				tips: '您还没有绑定您的爱宠哦！',
				current: 0,
				list: [{
					share: {
						id: 0,
						content: '这是我家可爱的多多，看起来好像不太开心的样子呀，想出去玩，我不肯，被我教育了',
						urls: ['../static/img/1.jpg'],
						hearted:false,
						heart: 99,
						reply: 52,
						time: '2024/3/25 17:20:59',
						address: "四川省/成都市",
					},
					publisher: {
						id: 0,
						name: '橘子味的狸花猫',
						url: 'https://lianxiaomei-wx.oss-cn-chengdu.aliyuncs.com/1692463236949082112.png',
						petName: '多多',
						age: '3',
					}
				}], //动态
				findPet: [{
					id: 0,
					name: '小咪',
					peturl: '../../static/img/3.jpg',
					content: '寻猫启示寻猫启示寻猫启示寻猫启示',
				}, {
					id: 1,
					name: '旺财',
					peturl: '../../static/img/2.jpg',
					content: '寻猫启示,有偿！！',
				}, {
					id: 2,
					name: '多多',
					peturl: '../../static/img/1.jpg',
					content: '寻猫启示',
				}, {
					id: 3,
					name: '小咪',
					peturl: '../../static/img/3.jpg',
					content: '寻猫启示',
				}],
			}
		},
		methods: {
			swiperChange(e) {
				this.current = e.detail.current;
			},
		}
	}
</script>

<style lang="scss" scoped>
	.index {
		width: 100%;
		height: 100vh;

		.info {
			width: calc(100% - 40rpx);
			height: 200rpx;
			border-radius: 40rpx;
			margin-left: 50%;
			transform: translate(-50%);
			box-shadow: 5px 7px 16px -1px rgba(0, 0, 0, 0.2);
			display: flex;
			align-items: center;

			.head {
				flex-shrink: 0;
				width: 100rpx;
				height: 100rpx;
				border-radius: 20rpx;
				background-color: skyblue;
				margin: 0 20rpx;
			}

			.right {
				height: 100rpx;
				display: flex;
				flex-direction: column;
				justify-content: space-evenly;

				.name {
					font-weight: bold;
					font-size: 30rpx;
					color: #333333;
				}

				.tips {
					font-size: 24rpx;
					color: #515151;
				}
			}
		}

		.model {
			margin-top: 20rpx;
			width: calc(100% - 40rpx);
			margin-left: 50%;
			transform: translate(-50%);

			.title {
				display: flex;
				align-items: center;
				justify-content: space-between;

				.text {
					font-size: 40rpx;
					color: #171717;
				}

				.more {
					font-size: 30rpx;
					color: #B9BEC5;
				}
			}

			.imgs {
				width: 100%;
				height: 400rpx;
				position: relative;
				margin-top: 20rpx;
				display: flex;

				.item {
					flex-shrink: 0;
					width: 200rpx;
					height: 100%;
					margin-right: 20rpx;

					.peturl {
						width: 100%;
						height: 240rpx;
						border-radius: 20rpx;
					}

					.petName {
						width: 100%;
						margin: 10rpx 0;
						overflow: hidden; //超出一行文字自动隐藏 
						text-overflow: ellipsis; //文字隐藏后添加省略号
						white-space: nowrap; //强制不换行
					}

					.value {
						width: 100%;
						font-size: 30rpx;
						display: -webkit-box;
						overflow: hidden;
						text-overflow: ellipsis;
						word-wrap: break-word;
						white-space: normal !important;
						-webkit-line-clamp: 2;
						-webkit-box-orient: vertical;
					}
				}
			}

			.content {
				width: 100%;
				margin-top: 20rpx;
			}
		}
	}
</style>