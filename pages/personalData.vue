<template>
	<view class="content">
		<view class="header" style="background:url(https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg);">
			<view class="navigator">
				<view class="return" @click="back">
					‹
				</view>
				<view class="title">
					个人资料
				</view>
			</view>
			<view class="head">
				<u-avatar :src="src" size="150"></u-avatar>
			</view>

		</view>
		<view class="info">
			<u-cell-item title="姓名" :arrow="false">
				<input type="text" v-model="name" placeholder="请输入" />
			</u-cell-item>
			<u-cell-item title="手机号" :arrow="false">
				<input type="text" v-model="tel" placeholder="请输入" />
			</u-cell-item>
			<u-cell-item title="区域" :arrow="true" @click="area= true">
				<view class="select">
					{{区域}}
				</view>
				<u-select v-model="area" :list="region"></u-select>
			</u-cell-item>
			<u-cell-item title="地址" :arrow="false">
				<input type="text" v-model="address" placeholder="请输入" />
			</u-cell-item>
			<u-cell-item title="职能证书" :arrow="false">
			</u-cell-item>
			</u-form>
			<u-upload :action="action" :custom-btn="true" width="320">
				<view slot="addBtn" class="slot-btn" hover-class="slot-btn__hover" hover-stay-time="150">
					<u-icon name="plus" size="100" :color="$u.color['lightColor']"></u-icon>
				</view>
			</u-upload>
		</view>
		<view class="submit">
			<u-button type="success" @click="submit">提交</u-button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				action: '', //参数为后端服务器地址
				src: 'https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg',//头像
				name: '',
				tel: '',
				area: false,
				address: '',
				region: [{
						value: '1',
						label: ''
					},
					{
						value: '2',
						label: ''
					}
				],
			}
		},
		methods: {
			back() {
				uni.navigateBack();
			},
			submit() {
				uni.navigateTo({
					url: ''
				});
			},
		}
	}
</script>

<style>
	.header {
		height: 350rpx;
	}

	.navigator {
		height: 100rpx;
		display: flex;
	}

	.return {
		position: absolute;
		left: 30rpx;
		font-size: 40px;
		color: #FFFFFF;
	}

	.title {
		position: absolute;
		top: 45rpx;
		left: 300rpx;
		font-size: 15px;
		color: #FFFFFF;
		letter-spacing: 3px;
		font-weight: 500;
	}

	.head {
		position: absolute;
		top: 120rpx;
		left: 300rpx;
	}

	.info {
		margin-left: 30rpx;
		margin-right: 30rpx;
	}

	input {
		font-size: 14px;
		margin-right: 37rpx;
	}

	.select {
		font-size: 14px;
		color: #808080;
	}

	.slot-btn {
		width: 320rpx;
		height: 200rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		background: rgb(255, 255, 255);
		border: 8rpx solid #e4e4e4;
	}

	.slot-btn__hover {
		background-color: rgb(229, 229, 229);
	}

	.submit {
		margin: 100rpx 50rpx;
		letter-spacing: 20px;
		text-align: center;
		text-indent: 20px;
	}
</style>
