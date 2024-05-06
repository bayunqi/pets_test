<template>
	<view class="detail">
		<view class="headSculpture" @click.stop="toInfo(item)">
			<image :src="list.publisher.url" class="head" mode="aspectFill"></image>
		</view>
		<view class="userInfo">
			<view class="userName">
				<view class="text">{{list.publisher.name}}</view>
				<view class="info">
					<view class="cityWide">{{list.publisher.petName}}</view>
					<view class="cityWide">{{list.publisher.age}}岁</view>
				</view>
			</view>
			<view class="contentText">
				{{list.share.content}}
			</view>
			<view class="contentImg" v-if="list.share.urls.length>0">
				<view v-for="(list1,index) in list.share.urls" :key="index">
					<video :src="list1" v-if="list1.substr(list1.lastIndexOf('.')+1)=='mp4'"></video>
					<image :src="list1" v-else mode="aspectFill"
						:style="list.share.urls.length==1?'width:100%;height:240rpx':''">
					</image>
				</view>
			</view>
			<view class="footer">
				<view class="left">
					<view class="time">{{$public.changeTime(list.share.time)}}</view>
					<view class="position" v-if="list.share.address&&list.share.address!=''">
						{{list.share.address}}
					</view>
				</view>
				<view class="right">
					<view class="love" @tap.stop="loveBtn(list)">
						<image :src="list.share.hearted?'../static/img/loveSel.png':'../static/img/love.png'" />
						<text>{{list.share.heart}}</text>
					</view>
					<view class="message">
						<image :src="'../static/img/message.png'" />
						<text>{{list.share.reply}}</text>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: {
					share: {
						id: 0,
						content: '这是我家可爱的多多，看起来好像不太开心的样子呀，想出去玩，我不肯，被我教育了',
						urls: ['../static/img/1.jpg'],
						hearted: false,
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
				}, //动态
			}
		},
		methods: {

		}
	}
</script>

<style lang="scss" scoped>
	.detail {
		width: calc(100% - 40rpx);
		margin-left: 50%;
		transform: translate(-50%);
		display: flex;
		justify-content: space-between;
		padding-top: 20px;

		.headSculpture {
			flex-shrink: 0;
			position: relative;
			width: 96rpx;
			height: 96rpx;
			border-radius: 50%;
			border: 1rpx solid #CDCDCD;

			.head {
				width: 100%;
				height: 100%;
				border-radius: 50%;
			}
		}

		.userInfo {
			flex-shrink: 0;
			width: calc(100% - 120rpx);

			.userName {
				height: 96rpx;
				display: flex;
				flex-direction: column;
				justify-content: space-evenly;

				.text {
					font-size: 28rpx;
					color: #46444A;
				}

				.info {
					display: flex;
					align-items: center;

					.cityWide {
						width: 64rpx;
						height: 30rpx;
						line-height: 30rpx;
						text-align: center;
						background: #FFC3D3;
						border-radius: 4rpx;
						font-size: 24rpx;
						color: #FF4172;
						margin-right: 20rpx;
					}
				}
			}

			.contentText {
				margin-top: 20rpx;
				margin-bottom: 20rpx;
				display: flex;
				align-items: center;
				flex-wrap: wrap;
				font-size: 28rpx;
				color: #3E4557;

				.topicsText {
					max-width: 100%;
					height: 50rpx;
					line-height: 50rpx;
					background: #CDF9EA;
					border-radius: 24rpx;
					font-size: 24rpx;
					color: #333333;
					display: flex;
					align-items: center;
					padding: 0 20rpx;
					display: inline-flex;
					margin-right: 10rpx;
					overflow: hidden; //超出一行文字自动隐藏 
					text-overflow: ellipsis; //文字隐藏后添加省略号
					white-space: nowrap; //强制不换行

					image {
						flex-shrink: 0;
						width: 36rpx;
						height: 36rpx;
						margin-right: 10rpx;
					}
				}
			}

			.contentImg {
				display: flex;
				flex-wrap: wrap;
				justify-content: flex-start;

				>view {
					width: 100%;
					height: 100%;
					margin-left: 15rpx;
					margin-bottom: 15rpx;

					&:first-child {
						margin-left: 0;
					}
				}

				>video {
					width: 32%;
					height: 13vh;
					flex-shrink: 0;
					border-radius: .4rem;
				}

				image {
					width: 180rpx;
					height: 180rpx;
					flex-shrink: 0;
					border-radius: .4rem;
				}
			}

			.footer {
				display: flex;
				align-items: center;
				justify-content: space-between;
				font-size: 24rpx;
				color: #9DA4AD;

				.left {
					width: 60%;
					display: flex;
					align-items: center;

					.time {
						flex-shrink: 0;
						margin-right: 10rpx;
					}

					.position {
						width: 80%;
						overflow: hidden; //超出一行文字自动隐藏 
						text-overflow: ellipsis; //文字隐藏后添加省略号
						white-space: nowrap; //强制不换行
					}
				}

				.right {
					flex-shrink: 0;
					width: 35%;
					display: flex;
					justify-content: space-between;
					align-items: center;

					.message,
					.love {
						display: flex;
						align-items: center;

						image {
							flex-shrink: 0;
							margin-right: 10rpx;
						}
					}

					.love {

						image {
							width: 34rpx;
							height: 28rpx;
						}
					}

					.message {

						image {
							width: 34rpx;
							height: 31rpx;
						}
					}
				}

			}

		}
	}
</style>