<template>
	<view class="tab_bar" :style="{'background-color':backgroundColor}">
		<view class="tabbarBox">
			<view class="handleBox" v-for="(item,index) in tabBarList" :key="index">
				<view class="menuBox" @click="goPages(item.pageIndex)">
					<view class="unreadBox" v-if="index==3 && unreadMessageFlag"></view>
					<view class="menuIcon">
						<image class="img" :src="item.selectIndex!=page?item.iconPath:item.selectIconPath"
							:style="item.selectIndex=='pub'?'width: 120rpx;height: 120rpx;margin-top:-20rpx':''"></image>
					</view>
					<view class="menuName">
						<text class="Text"
							:style="item.selectIndex==page?'color:#1296db':'color:#515151'">{{item.tabbarName}}</text>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			page: {
				type: String,
				default: "index"
			},
			backgroundColor: String
		},
		watch: {
			page: {
				handler(value) {
					this.selectIndex = value;
				},
				immediate: true,
				deep: true
			}
		},
		data() {
			return {
				tabBarList: [{
						selectIndex: 'index',
						pageIndex: "../../pages/index/index",
						tabbarName: "首页",
						iconPath: "../../static/icon/index.png",
						selectIconPath: "../../static/icon/indexSel.png"
					}, {
						selectIndex: 'dynamic',
						pageIndex: "../../pages/dynamic/index",
						tabbarName: "动态",
						iconPath: "../../static/icon/dynamic.png",
						selectIconPath: "../../static/icon/dynamicSel.png"
					}, {
						selectIndex: 'pub',
						pageIndex: "../../pages/pub/index",
						iconPath: "../../static/icon/pub.png",
						selectIconPath: "../../static/icon/pubSel.png"
					}, {
						selectIndex: 'health',
						pageIndex: "../../pages/health/index",
						tabbarName: "健康",
						iconPath: "../../static/icon/health.png",
						selectIconPath: "../../static/icon/healthSel.png"
					},
					{
						selectIndex: 'user',
						pageIndex: "../../pages/user/index",
						tabbarName: "我的",
						iconPath: "../../static/icon/user.png",
						selectIconPath: "../../static/icon/userSel.png"
					}
				],
				unreadMessageFlag: false,
				path: '', //路由
			}
		},
		mounted() {
			uni.onAppRoute((res) => {
				this.path = res.path
			})
		},

		methods: {
			//进入tabble页
			goPages(pageIndex) {
				uni.switchTab({
					url: pageIndex
				})
			},
		},
	}
</script>
<style lang="scss" scoped>
	.tab_bar {
		width: 100vw;
		height: 130rpx;
		position: fixed;
		bottom: 0;
		box-shadow: 0rpx -5rpx 9rpx 0rpx rgba(0, 0, 0, 0.29);
		background-color: #ffffff;
		z-index: 99999;

		.tabbarBox {
			display: flex;
			margin-top: 10rpx;
			justify-content: space-evenly;


			.handleBox {
				width: 20vw;
				height: 110rpx;
				padding-top: 12rpx;

				.menuBox {
					text-align: center;
					position: relative;

					.img {
						width: 48rpx;
						height: 48rpx;
					}
				}
			}
		}
	}

	.Text {
		font-size: 24rpx;
		color: #000000;
	}
</style>