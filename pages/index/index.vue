<template>
	<scroll-view scroll-y="true" class="index">
		<!-- 这一行代码的作用是让下面的立即绑定模块与页面顶部存在一定的距离 -->
		<view style="height: 40rpx;"></view>
		<view class="info" @tap="$refs.petsInfo.open()">
			<image src="" class="head"></image>
			<view class="right">
				<view class="name">{{name==''?'立即绑定':name}}</view>
				<view class="tips">{{tips}}</view>
			</view>
		</view>
		<view class="model">
			<view class="title">
				<view class="text">寻宠启示</view>
				<view class="more" @tap="$public.toUrl(`../../pages_notice/list`,'2')">更多</view>
			</view>
			<scroll-view scroll-x="true" enable-flex="true" class="imgs">
				<view class="item" v-for="(item,index) in findPet" :key="index" @tap="$public.toUrl(`../../pages_notice/detail?id=${item.id}`,'2')">
					<image :src="item.url" class="peturl" mode="aspectFill"></image>
					<view class="petName">{{item.name}}</view>
					<view class="value">{{item.notice}}</view>
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
		<uni-popup ref="petsInfo" background-color="#fff" type="center">
			<view class="popup-content">
				<view style="height:20rpx;"></view>
				<uni-file-picker disable-preview :del-icon="false" return-type="object">选择头像</uni-file-picker>
				<input type="text" placeholder="爱宠的名字" v-model="info.name" class="model"
					placeholder-class="placeholder" />
				<picker mode="date" :value="info.date" class="model" @change="changeAge">
					<view class="uni-input" v-if="info.age!=''">{{info.age}}岁</view>
					<view class="uni-input placeholder" v-else>爱宠的生日</view>
				</picker>
				<picker mode="selector" :range="petsArr" :value="info.type" class="model" @change="changeType">
					<view class="uni-input" v-if="info.type!=''">{{info.type}}</view>
					<view class="uni-input placeholder" v-else>爱宠的种类</view>
				</picker>
				<view class="option">
					<button type="primary" style="background-color: red;">稍后再说</button>
					<button type="primary">立即绑定</button>
				</view>
			</view>
		</uni-popup>
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
				info: {
					name: '',
					date: '',
					age: '',
					type: '',
				},
				name: '',
				tips: '您还没有绑定您的爱宠哦！',
				current: 0,
				list: [{
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
				}], //动态
				findPet: [{
					id: 0,
					name: '小咪',
					url: '../../static/img/3.jpg',
					notice: '寻猫启示寻猫启示寻猫启示寻猫启示',
				}, {
					id: 1,
					name: '旺财',
					url: '../../static/img/2.jpg',
					notice: '寻猫启示,有偿！！',
				}, {
					id: 2,
					name: '多多',
					url: '../../static/img/1.jpg',
					notice: '寻猫启示',
				}, {
					id: 3,
					name: '小咪',
					url: '../../static/img/3.jpg',
					notice: '寻猫启示',
				}],
				petsArr: [
					"狗狗",
					"猫猫",
					"金鱼",
					"乌龟",
					"兔子",
					"龙猫",
					"仓鼠",
					"刺猬",
					"八哥",
					"鹦鹉",
					"画眉",
					"锦鲤",
					"热带鱼",
					"蜜袋鼬",
					"仓鼠",
					"布偶猫",
					"暹罗猫",
					"美短",
					"英短",
					"加菲猫",
					"柴犬",
					"拉布拉多犬",
					"金毛犬",
					"哈士奇",
					"泰迪犬",
					"荷兰猪",
					"蜥蜴",
					"蛇",
					"蜘蛛",
					"蝎子",
					"其他"
				],
			}
		},
		methods: {
			swiperChange(e) {
				this.current = e.detail.current;
			},
			// 宠物年龄
			changeAge(e) {
				this.info.date = e.detail.value
				// 将选中的日期字符串转换为Date对象  
				const selectedDate = new Date(this.info.date);
				// 获取今天的日期  
				const today = new Date();
				// 确保选中的日期是有效的  
				if (isNaN(selectedDate.getTime())) {
					console.error('Invalid date');
					return null;
				}
				// 计算两个日期之间的毫秒差  
				const differenceInMilliseconds = Math.abs(today - selectedDate);
				// 将毫秒转换为年（假设一年有365天）  
				this.info.age = Math.round(differenceInMilliseconds / (1000 * 60 * 60 * 24 * 365));
			},
			// 宠物品种
			changeType(e) {
				this.info.type = this.petsArr[e.detail.value]
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

		.popup-content {
			width: 80vw;
			height: 600rpx;
			background-color: #fff;
			border-radius: 30rpx;

			/deep/.uni-file-picker {
				width: 200rpx !important;
				height: 200rpx !important;
				margin: 0 auto;
				margin-bottom: 30rpx;

				.uni-file-picker__container {
					width: 100% !important;
					height: 100% !important;
					margin: 0 !important;

					.file-picker__box {
						width: 100% !important;
						height: 100% !important;
						margin: 0 !important;
						padding-top: 0 !important;

						.is-add {
							width: 98% !important;
							height: 98% !important;
							margin: 0 !important;
							padding: 0 !important;
							border: 1rpx solid #ccc !important;
							border-radius: 50% !important;
						}
					}
				}
			}

			.model {
				width: calc(100% - 40rpx);
				margin-left: 50%;
				transform: translate(-50%);
				text-align: center;
				font-size: 35rpx;
				margin-bottom: 40rpx;
			}

			.placeholder {
				color: #717171;
			}

			.option {
				width: calc(100% - 40rpx);
				margin-left: 50%;
				transform: translate(-50%);
				display: flex;
				align-items: center;
				justify-content: space-between;
			}
		}
	}
</style>