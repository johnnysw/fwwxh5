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
				<view class="revise">
					<u-button size="mini" shape="circle" @click="revise">修改</u-button>
				</view>
			</view>
			<view class="head">
				<u-avatar :src="src" size="150"></u-avatar>
				<view class="userName">
					小福子{{userName}}
				</view>
			</view>
			
		</view>
		<view class="info">
			<u-cell-group>
				<u-cell-item title="姓名" :arrow="false" >
					<view class="data">
						小福子{{userName}}
					</view>
				</u-cell-item>
				<u-cell-item title="手机号" :arrow="false" >
					<view class="data">
						12345678910{{tel}}
					</view>
				</u-cell-item>
				<u-cell-item title="区域" :arrow="false" >
					<view class="data">
						南港区{{region}}
					</view>
				</u-cell-item>
				<u-cell-item title="地址" :arrow="false" >
					<view class="data">
						轴承区建北小区20号楼4单元{{address}}
					</view>
				</u-cell-item>
				<u-cell-item title="职能证书" :arrow="false" >
				</u-cell-item>
			</u-cell-group>
			<view class="picList">
			<view class="certificate" v-for="url in urls" :key="url" >
				<image :src="url" style="width: 320rpx;height: 200rpx;"></image>
				</view>
				</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				src:'https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg',//头像
				urls:[
						'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
						'https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg',
				],
			}
		},
		methods: {
			back() {
				uni.navigateBack();
			},
			revise(){
				
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
	.revise{
		position: absolute;
		top: 35rpx;
		right: 30rpx;
	}
	.head{
		position: absolute;
		top:120rpx;
		left:300rpx;
	}
	.userName{
		color: #FFFFFF;
		letter-spacing: 3px;
		text-align: center;
	}
	.info {
		margin-left: 30rpx;
		margin-right: 30rpx;
	}
	.data{
		font-size: 14px;
		color: #515151;
	}
	.picList{
		display: flex;
		justify-content: space-between;
	}
</style>
