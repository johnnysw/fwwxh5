<template>
	<view class="pag">
		<view class="bg">
			<view class="head">
				<u-icon name="arrow-left" style="padding-left:30rpx;" color="#fff" size="36"></u-icon>
				<view class="title">
					个人评价
				</view>
			</view>
			<view class="per">
				<u-avatar size='large' :src="src"></u-avatar>
				<view class="name">
					小福子
				</view>
			</view>
		</view>
		<view>
			<view class="point">
				客户评价{{value}}分
			</view>
			<u-rate size="64" gutter="45" active-color="#ffd700" inactive-color="#b2b2b2" :count="count" v-model="value" style="margin: 50rpx 100rpx;"></u-rate>
		</view>
		<view class="log" v-for="(item,index) in list" :key="item.content">
			<u-tag border-color="#fff" class="mini-log" @click="changeLog(index)" :bg-color="item.bgcolor" :color="item.color"
			 :text="item.content" shape="circle" type="success" mode="light" />
		</view>

	</view>
</template>
<script>
	export default {
		data() {
			return {
				src:'https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg',//头像
				count: 5,
				value: 2,
				list: [{
						content: '着装整齐',
						bgcolor: '',
						color: '#228d22',
						active: ''
					},
					{
						content: '服务态度好',
						bgcolor: '#1daa22',
						color: '#fff',
						active: 'true'
					},
					{
						content: '负责任很有耐心',
						bgcolor: '',
						color: '#228d22',
						active: ''
					},
					{
						content: '手法很专业',
						bgcolor: '',
						color: '#228d22',
						active: ''
					},
					{
						content: '场地整洁',
						bgcolor: '',
						color: '#228d22',
						active: ''
					},
					{
						content: '很耐心',
						bgcolor: '',
						color: '#228d22',
						active: ''
					},
					{
						content: '服务态度很好',
						bgcolor: '#1daa22',
						color: '#fff',
						active: 'true'
					},
					{
						content: '负责任有耐心',
						bgcolor: '',
						color: '#228d22',
						active: ''
					},
				]
			}
		},
		methods: {
			changeLog(index) {
				if (this.list[index].active == '') {
					this.list[index].bgcolor = '#1daa22';
					this.list[index].color = '#fff';
					this.list[index].active = '#true';

				} else {
					this.list[index].bgcolor = '';
					this.list[index].color = '#228d22';
					this.list[index].active = '';
				}

			}
		}
	}
</script>

<style>
	.pag {
		/* position: relative; */
		width: 100%;
		height: 1334rpx;
		background: #fff;
	}

	.bg {
		width: 100%;
		height: 430rpx;
		background: url(https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg);
	}

	.head {
		display: flex;
		padding-top: 65rpx;
	}

	.title {
		color: #fff;
		font-size: medium;
		padding-left: 250rpx;
	}

	.per {
		position: absolute;
		top: 140rpx;
		left: 310rpx;
	}

	.name {
		text-align: center;
		margin-top: 15rpx;
		color: #fff;
		font-size: small;
	}

	.info {
		margin: 20rpx 35rpx;
	}

	.point {
		font-size: medium;
		text-align: center;
		margin-top: 85rpx;
	}

	.log {
		margin: 20rpx 70rpx;
	}

	.mini-log {
		float: left;
		margin: 13rpx 10rpx;
	}
</style>
