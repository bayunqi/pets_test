<template>
	<scroll-view scroll-y="true" class="index" :scroll-top='scrollTop' @scroll="scroll">
		<image src="../../static/img/merchant.png" class="navBg"></image>
		<scroll-view scroll-x="true" enable-flex="true" class="tabs">
			<view :class="tabSel==''?'sel item':'item'" @click="selTabs('')">
				<view>全部</view>
				<image src="../../static/img/tabSel.png" v-if="tabSel==''" class="tabSelLogo"></image>
			</view>
			<view v-for="(item,index) in tabsArr" :key="index" :class="tabSel==item.value?'sel item':'item'"
				@click="selTabs(item.value)">
				<view>{{item.name}}</view>
				<image src="../../static/img/tabSel.png" class="tabSelLogo" v-if="tabSel==item.value"></image>
			</view>
		</scroll-view>
		<view class="dynamic">
			<dynamic :list="dynamicArr" />
		</view>
		<toTop @btn="backTop" v-if="backTopFlag" />
		<tabbar page="dynamic" />
	</scroll-view>
</template>

<script>
	import tabbar from "@/components/tabbar/index"
	import dynamic from "@/components/dynamic"
	import toTop from "@/components/toTop"
	export default {
		components: {
			tabbar,
			dynamic,
			toTop
		},
		data() {
			return {
				dynamicArr: [{
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
				}],
				tabsArr: [{
					name: '猫',
					value: '1',
				}, {
					name: '狗',
					value: '2'
				}],
				tabSel: '',
				scrollTop: 0, //滚动条位置
				oldScrollTop: 0, //做临时储存
				backTopFlag: false,
			}
		},
		methods: {
			// 横向tabs
			selTabs(item) {
				this.tabSel = item
			},
			// 滚动条滚动
			scroll(e) {
				if (e.detail.scrollTop > 200) {
					this.backTopFlag = true
				} else {
					this.backTopFlag = false
				}
				this.oldScrollTop = e.detail.scrollTop
			},
			// 回顶部
			backTop() {
				this.scrollTop = this.oldScrollTop
				this.$nextTick(() => {
					this.scrollTop = 0
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.index {
		width: 100%;
		height: calc(100vh - 130rpx);

		.navBg {
			width: 100%;
			height: 500rpx;
		}

		.tabs {
			width: 100%;
			height: 80rpx;
			display: flex;

			.item {
				flex-shrink: 0;
				padding: 0 30rpx;
				height: 80rpx;
				line-height: 80rpx;
				text-align: center;
				color: #3C3F3E;
				font-size: 30rpx;
				position: relative;

				.tabSelLogo {
					width: 50rpx;
					height: 15rpx;
					position: absolute;
					left: 20rpx;
					bottom: 20rpx;
					z-index: -1;
				}
			}

			.sel {
				color: #000000;
				font-weight: bold;
			}
		}

		.dynamic {
			width: calc(100% - 40rpx);
			margin-left: 50%;
			transform: translate(-50%);
		}
	}
</style>