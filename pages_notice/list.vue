<template>
	<scroll-view scroll-y="true" class="index">
		<back />
		<image src="../static/img/noticeListBg.png" class="navBg" mode="widthFix"></image>
		<view class="navSel">
			<view :class="selFlag=='new'?'item sel':'item'" @tap="search('new')">最新</view>
			<view :class="selFlag=='hot'?'item sel':'item'" @tap="search('hot')">最热</view>
		</view>
		<view class="content">
			<view v-for="(item,index) in noticeArr" :key="index" class="item"
				@tap="$public.toUrl(`detail?id=${item.id}`,'2')">
				<image :src="item.url" class="peturl" mode="aspectFill"></image>
				<view class="petName">{{item.name}}</view>
				<view class="value">{{item.notice}}</view>
			</view>
		</view>
	</scroll-view>
</template>

<script>
	import back from "@/components/back.vue"
	export default {
		components: {
			back
		},
		data() {
			return {
				selFlag: 'new', //new新 hot热
				noticeArr: [{
					id: 0,
					name: '小咪',
					url: '../static/img/3.jpg',
					notice: '寻猫启示寻猫启示寻猫启示寻猫启示'
				}, {
					id: 1,
					name: '旺财',
					url: '../static/img/2.jpg',
					notice: '寻狗启示寻狗启示寻狗启示寻狗启示'
				}, {
					id: 2,
					name: '多多',
					url: '../static/img/1.jpg',
					notice: '寻狗启示寻狗启示寻狗启示寻狗启示'
				}, ],
			}
		},
		methods: {
			search(type) {
				if (type == this.selFlag) return
				this.selFlag = type
			}
		}
	}
</script>

<style lang="scss" scoped>
	.index {
		width: 100%;
		height: 100vh;

		.navBg {
			width: 100%;
			height: 700rpx;
		}

		.navSel {
			width: 100%;
			display: flex;
			align-items: center;
			justify-content: flex-end;
			margin: 20rpx 0;

			.item {
				width: 100rpx;
				height: 30rpx;
				line-height: 30rpx;
				text-align: center;
				color: #ccc;

				&:first-child {
					border-right: 1rpx solid #ccc;
				}
			}

			.sel {
				color: #000;
			}
		}

		.content {
			width: calc(100% - 40rpx);
			margin-left: 50%;
			transform: translate(-50%);
			display: flex;
			flex-wrap: wrap;
			justify-content: space-between;

			.item {
				flex-shrink: 0;
				width: 48%;
				height: 400rpx;
				margin-bottom: 20rpx;

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
	}
</style>