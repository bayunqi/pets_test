<template>
	<view class="index">
		<view style="height: 20rpx;"></view>
		<view class="content">
			<textarea v-model="pubForm.content" placeholder="请输入您想要发布的文字..." placeholder-class="placeholder"
				class="input textarea" />
			<view class="upload">
				<template v-if="pubForm.urls&&pubForm.urls.length>0&&file_mediatype!='video'">
					<view class="imgItem" v-for="(item,index) in pubForm.urls" :key="index">
						<img :src="item" class="img" />
					</view>
				</template>
				<template v-if="pubForm.urls&&pubForm.urls.length>0&&file_mediatype=='video'">
					<view class="imgItem" v-for="(item,index) in pubForm.urls" :key="index">
						<video :src="item" :controls="false" :initial-time='1' :show-center-play-btn="false"></video>
					</view>
				</template>
				<uni-file-picker @select="selImg" ref="uploadImg" limit="9">
					<img src="@/static/img/pubLogo.png" />
				</uni-file-picker>
			</view>
		</view>
		<button type="primary" class="pubSty">发布</button>
		<tabbar page="pub" />
	</view>
</template>

<script>
	import tabbar from "@/components/tabbar/index"
	export default {
		components: {
			tabbar
		},
		data() {
			return {
				pubForm: {
					content: '',
					urls: [],
					file_mediatype: '', //上传文件类型
				}
			}
		},
		methods: {
			selImg(res) {
				// let filearr = res.tempFiles
				// let suffix = this.file_mediatype == 'video' ? 'mp4' : 'png'
				// // 支持多图片上传
				// for (var i = 0; i < filearr.length; i++) {
				// 	let file = filearr[i].path
				// 	uploadImage(file, `dynamic/${uni.getStorageSync('userId')}/`, '', suffix,
				// 		result => {
				// 			// 保存上传后的图片地址
				// 			this.publishFrom.urls.push(result)
				// 			this.$refs.uploadImg.clearFiles()
				// 		}, result => {
				// 			//这里写上传失败的代码 
				// 			uni.showToast({
				// 				title: '上传失败,请稍后重试',
				// 				icon: 'none'
				// 			})
				// 		})
				// }
			},
		}
	}
</script>

<style lang="scss" scoped>
	.index {
		width: 100%;
		height: calc(100vh - 130rpx);
		background-color: #F5F5F5;
		position: relative;

		.content {
			width: calc(100% - 40rpx);
			min-height: 500rpx;
			margin-left: 50%;
			transform: translate(-50%);
			border-radius: 20rpx;
			background-color: #fff;

			.textarea {
				width: 100%;
				padding: 20rpx;

				.input {
					width: 100%;
					max-height: 200rpx;
					font-size: 24rpx;
				}

				.placeholder {
					font-size: 24rpx;
					color: #999999;
				}
			}

			.upload {
				width: calc(100% - 40rpx);
				margin-left: 50%;
				transform: translate(-50%);
				min-height: 172rpx;
				margin-top: 14rpx;
				display: flex;
				flex-wrap: wrap;
				align-content: flex-start;
				margin-bottom: 20rpx;

				.imgItem {
					width: 175rpx;
					flex-shrink: 0;
					height: 175rpx;
					margin: 0 20rpx 20rpx 0;
					position: relative;

					img {
						width: 100%;
						height: 100%;
					}

					video {
						width: 100%;
						height: 100%;
					}
				}

				::v-deep .uni-file-picker {
					width: 175rpx !important;
					flex: none;
					flex-shrink: 0;
					height: 175rpx;

					.uni-file-picker__files,
					.file-picker__box-content,
					.file-picker__box,
					.uni-file-picker__container {
						display: block !important;
						border: none !important;
						width: 100% !important;
						height: 100% !important;

						img {
							flex-shrink: 0;
							width: 100%;
							height: 100%;
						}
					}
				}
			}
		}

		.pubSty {
			width: calc(100% - 40rpx);
			position: absolute;
			bottom: 50rpx;
			left: 50%;
			transform: translate(-50%);
			background-color: #1296db;
		}
	}
</style>