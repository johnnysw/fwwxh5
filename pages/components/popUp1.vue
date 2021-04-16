<template>
	<view>
		<u-popup v-model="show" mode="bottom" length="90%">
			<view class="close" @click="show=false">
				<u-icon name="close-circle" color="#fff" size="100"></u-icon>
			</view>
			<view class="bg">
				<view class="tab-line">
					<view class="tab-title">
						<span>电器</span>
						<span class="tab-bnt">添加</span>
					</view>
					<u-table class="table-item" font-size="24">
						<u-tr>
							<u-th>类别</u-th>
							<u-th>品牌</u-th>
							<u-th>名称</u-th>
							<u-th>单价</u-th>
							<u-th>数量</u-th>
							<u-th>服务费</u-th>
						</u-tr>
						<u-tr>
							<u-td>插座</u-td>
							<u-td>插座</u-td>
							<u-td>五孔插座</u-td>
							<u-td>18.00</u-td>
							<u-td>1</u-td>
							<u-td>¥5</u-td>
						</u-tr>
						<u-tr>
							<u-td>插座</u-td>
							<u-td>-</u-td>
							<u-td>-</u-td>
							<u-td>-</u-td>
							<u-td>-</u-td>
							<u-td>¥3</u-td>
						</u-tr>
					
						<view class="cost-labor">
							人工费
						</view>
						<u-tr>
							<u-td>单价</u-td>
							<u-td>20</u-td>
							<u-td>单位（次）</u-td>
							<u-td>数量</u-td>
							<u-td>1</u-td>

						</u-tr>
					</u-table>
				</view>
			</view>
			<view class="bnt-list">
				<view class="box">水暖防水</view>
				<view class="box">木工</view>
				<view class="box">油工</view>
				<view class="box">其他</view>
			</view>
			<view class="button-item">
				<view class="ubtn t1">确定完工</view>
				<view class="ubtn t2">修改</view>
			</view>
		</u-popup>
		<u-button @click="show = true">工单详情页</u-button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				show: false,
				isShow: false,
				value: '',
				value1: '',
				value2: ''
			}
		}
	}
</script>
<style lang="scss" scoped>
	.close {
		text-align: center;
		background: rgba(0, 0, 0, .6);

	}

	.bg {
		background-color: #fff;

	}

	.tab-line {
		border: 1px solid #5db35d;
		margin: 20rpx;
		border-radius: 20rpx 20rpx 0 0;

	}

	.tab-title {
		background-color: #5db35d;
		text-align: center;
		color: #fff;
		padding: 20rpx 0;
		border-radius: 20rpx 20rpx 0 0;
		font-size: 30rpx;
		position: relative;

		.tab-bnt {
			position: absolute;
			right: 20rpx;
			background-color: #c6ff00;
			border-radius: 40rpx;
			padding: 6rpx 30rpx;
			color: #333;
			font-size: 28rpx;
		}

	}

	.table-item {
		font-size: 24rpx;
	}

	.cost-labor {
		padding: 15rpx 30rpx;
		background-color: #eaf5ea;
		color: #76a876;
	}

	.bnt-list {
		margin: 20rpx;
		text-align: center;
		padding-top: 30rpx;
		font-weight: bold;

		.box {
			border: 2rpx solid #b6b6b6;
			border-radius: 15rpx;
			margin: 20rpx 0;
			padding: 10rpx 0;
		}

	}

	.button-item {
		display: flex;
		margin: 20rpx;
		text-align: center;
		color: #fff;
		margin-top: 100rpx;

		.ubtn {
			background-color: #00bf00;
			padding: 30rpx 0;
			font-size: 34rpx;
			border-radius: 100rpx;

			&.t1 {
				width: 60%;
				margin-right: 20rpx;
			}

			&.t2 {
				width: 40%;
				background-color: #ff6600;
			}
		}
	}

	.select {
		border: none;
		color: rgb(96, 98, 102);
		font-size: 24rpx;
	}
</style>
