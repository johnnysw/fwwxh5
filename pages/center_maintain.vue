<template>
	<view class="pag">
		<view class="bg">
			<view class="head" style="padding-top:65rpx;">
				<u-icon name="arrow-left" style="padding-left:30rpx;" color="#fff" size="36"></u-icon>
				<view class="title" style="padding-left:240rpx;color:#fff;font-size:medium">
					个人中心
				</view>
			</view>
			<view class="per">
				<u-avatar size='large' :src="src"></u-avatar>
				<view class="info">
					<view style="margin-bottom: 13rpx;color:#fff; font-size:medium">186******5976</view>
					<view style="color:#fff; font-size:small">轴承区域建北小区20号楼4单元201室</view>
				</view>
			</view>
		</view>

		<view class="but-list">
			<view class="but">
				<u-image :src="require('images/centerorder.png')" style="margin-left: 15rpx;" height="60rpx" width="70rpx"></u-image>
				<view class="but-t">我的订单</view>
			</view>
			<view class="but">
				<u-image :src="require('images/centerwallet.png')" style="margin-left: 45rpx;padding-bottom: 5rpx;" height="65rpx" width="70rpx"></u-image>
				<u-button id="but-center" type="success" shape="circle" size="mini" style="margin-top: 15rpx;">我的钱包</u-button>
			</view>
			<view class="but">
				<u-image :src="require('images/centerdatum.png')" style="margin-left: 18rpx;" height="60rpx" width="80rpx"></u-image>
				<view class="but-t">个人资料</view>
			</view>
		</view>

		<view class="pass-list">
			<view class="appraise">
				<u-image :src="require('images/centerevaluate.png')" style="margin-right: 50rpx;" height="35rpx" width="40rpx"></u-image>
				<view class="but-text1" style="font-weight:540; padding-bottom: 10rpx; ">我的评价</view>
			</view>
			<view class="pass">
				<u-image :src="require('images/centerpass.png')" style="float: left; margin-right: 50rpx;" height="50rpx" width="44rpx"></u-image>
				<view class="but-text2" style="padding-bottom: 8rpx; ">修改密码</view>
			</view>
			<view class="message">
				<u-image :src="require('images/centerinfor.png')" style="margin-right: 50rpx;" height="35rpx" width="40rpx"></u-image>
				<view class="but-text3" style="padding-bottom: 8rpx; ">我的消息</view>
			</view>
			
		</view>

		<u-button type="success" style="margin:600rpx 20rpx;">退出登录</u-button>

	</view>
</template>
<script>
	export default {
		data() {
			return {
src:'https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg',//头像
			}
		},
		methods: {

		}
	}
</script>

<style>
	.pag {
		/* position: relative; */
		width: 100%;
		height: 1334rpx;
		background:#eee;
	}

	.bg {
		/* position: relative; */
		width: 100%;
		height: 430rpx;
		background: url(https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg);
	}

	.head {
		display: flex;
	}

	.per {
		display: flex;
		position: absolute;
		top: 190rpx;
		left: 60rpx;
	}

	.info {
		margin: 20rpx 35rpx;
	}

	.but-list {
		position: absolute;
		top: 350rpx;
		left: 20rpx;
		width: 710rpx;
		height: 250rpx;
		background-color: #fff;
		border-radius: 10px;
		display: flex;
		justify-content: space-around;
	}

	.but {
		margin-top: 60rpx;
	}

	#but-center {
		font-size: medium;
	}

	.but-t {
		margin-top: 19rpx;
		font-size: medium;
	}

	.but-text1 {
		position: absolute;
		top: 50rpx;
		left: 130rpx;
	}

	.but-text2 {
		position: absolute;
		top: 150rpx;
		left: 130rpx;
	}
	.but-text3 {
		position: absolute;
		top: 255rpx;
		left: 130rpx;
	}

	.pass-list {
		background: #fff;
		position: absolute;
		top: 625rpx;
		left: 20rpx;
		width: 710rpx;
		height: 350rpx;
		border-radius: 10px;
		padding: 0 50rpx;
		display: flex;
		flex-direction: column;

	}

	.pass {
		border-bottom: #ccc 1rpx solid;
		height: 33%;
		padding-top: 30rpx;
	}

	.message {
		padding-top: 30rpx;
		/* height: 33%; */
		/* display: flex; */
		/* height: 50%; */
	}
	.appraise{
		border-bottom: #ccc 1rpx solid;
		height: 33%;
		padding-top: 50rpx;
		}
</style>