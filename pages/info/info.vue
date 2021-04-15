<template>
	<view>
		<view class="info">
			<view class="info-left">
				<image src="../../static/message_06.png" mode=""></image>
			</view>
			<view class="info-right">
				<view class="order">
					<view class="order-info">订单消息</view>
					<view class="time">12-11</view>
				</view>
				<view class="particular">你的编号为123456789的订单已配送</view>
			</view>
		</view>
		<view class="info">
			<view class="info-left">
				<image src="../../static/message_09.png" mode=""></image>
			</view>
			<view class="info-right">
				<view class="order">
					<view class="order-info">通知消息</view>
					<view class="time">12-11</view>
				</view>
				<view class="particular">喜从天降！澳洲芒果一箱60元</view>
			</view>
		</view>
	</view>
</template>

<script>
</script>

<style lang="scss" scoped>
	.info{
		display: flex;
		padding:40rpx;
		.info-left{
			margin-right: 40rpx;;
			image{
				width:160rpx;
				height: 160rpx;
			}
		}
		.info-right{
			padding-top:20rpx;
			width: 80%;
			font-size:38rpx;
			.order{
				display: flex;
				.order-info{
				width: 80%;
				}
				.time{
					font-size:28rpx;
				}
			}
			
		}
		.particular{
			font-size:28rpx;
			color:#999;
			padding-top:20rpx;
		}
	}

</style>
