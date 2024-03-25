<template>
	<view class="dynamic">
		<view v-for="(item,index) in list" :key="index" class="list"
			@tap.stop="this.$public.toUrl(`../../pages_dynamic/detail?id=${item.share.id}`,'2')">
			<view class="headSculpture" @click.stop="toInfo(item)">
				<image :src="item.publisher.url" class="head" mode="aspectFill"></image>
			</view>
			<view class="userInfo">
				<view class="userName">
					<view class="text">{{item.publisher.name}}</view>
					<view class="info">
						<view class="cityWide">{{item.publisher.petName}}</view>
						<view class="cityWide">{{item.publisher.age}}岁</view>
					</view>
				</view>
				<view class="contentText">
					{{item.share.content}}
				</view>
				<view class=" contentImg" v-if="item.share.urls.length>0">
					<view v-for="(item1,index) in item.share.urls" :key="index">
						<video :src="item1" v-if="item1.substr(item1.lastIndexOf('.')+1)=='mp4'"></video>
						<image :src="item1" v-else mode="aspectFill" :style="item.share.urls.length==1?'width:100%;height:240rpx':''">
						</image>
					</view>
				</view>
				<view class="footer">
					<view class="left">
						<view class="time">{{changeTime(item.share.time)}}</view>
						<view class="position" v-if="item.share.address&&item.share.address!=''">
							{{item.share.address}}
						</view>
					</view>
					<view class="right">
						<view class="love" @tap.stop="loveBtn(item)">
							<image
								:src="item.share.hearted?'../static/img/loveSel.png':'../static/img/love.png'" />
							<text>{{item.share.heart}}</text>
						</view>
						<view class="message">
							<image :src="'../static/img/message.png'" />
							<text>{{item.share.reply}}</text>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			list: Array
		},
		data() {
			return {}
		},
		methods: {

			// 转化时间
			changeTime(dateString) {
				// 创建一个Date对象  
				const inputDate = new Date(dateString);
				// 获取当前日期和年份  
				const today = new Date();
				const thisYear = new Date(today.getFullYear(), 0, 1);
				// 返回格式化后的日期或时间字符串  
				return this.formatDateWithoutLeadingZeros(inputDate);
			},
			// 格式化日期的辅助函数  
			formatDateWithoutLeadingZeros(date) {
				const year = date.getFullYear();
				const month = date.getMonth() + 1; // getMonth() 返回的是 0-11  
				const day = date.getDate();
				const hours = date.getHours();
				const minutes = date.getMinutes();
				// 根据需要返回格式化后的日期或时间字符串  
				if (this.isToday(date)) {
					return `${hours}:${minutes}`;
				} else if (this.isThisYear(date)) {
					return `${month}/${day}`;
				} else {
					return `${year}/${month}/${day}`;
				}
			},
			// 判断是否是今天的函数  
			isToday(date) {
				const today = new Date();
				return (
					date.getFullYear() === today.getFullYear() &&
					date.getMonth() === today.getMonth() &&
					date.getDate() === today.getDate()
				);
			},
			// 判断是否是今年的函数  
			isThisYear(date) {
				const today = new Date();
				return date.getFullYear() === today.getFullYear();
			},
		}
	}
</script>

<style lang="scss" scoped>
	.dynamic {
		width: 100%;
		height: 100%;

		.list {
			width: 100%;
			display: flex;
			justify-content: space-between;
			margin-bottom: 2rem;

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
	}
</style>