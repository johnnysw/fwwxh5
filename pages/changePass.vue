<template>
	<view class="content">
		<view class="header" style="background:url(https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg);">
			<view class="navigator">
				<view class="return" @click="back">
					‹
				</view>
				<view class="title">
					修改密码
				</view>
			</view>
			<view class="head">
				<u-avatar :src="src" size="150"></u-avatar>
				<view class="userName">
					小福子{{userName}}
				</view>
			</view>
		</view>
		<view class="pass">
			<u-cell-group>
				<u-cell-item title="密码" :arrow="false" >
					<input type="text" v-model="pass" placeholder="请输入密码" />
				</u-cell-item>
				<u-cell-item title="确认密码" :arrow="false" >
					<input type="text" v-model="repass" placeholder="请再次输入密码" />
				</u-cell-item>
				</u-cell-group>
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
				src:'https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg',
				pass:'',
				repass:'',
			}
		},
		methods: {
			back() {
				uni.navigateBack();
			},
			submit(){
				uni.navigateTo({
					url: ''
				});
			}
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
	.pass {
		margin-left: 30rpx;
		margin-right: 30rpx;
	}
	.submit{
		margin:200rpx 30rpx ;
		letter-spacing: 20px;
		text-align:center;
		text-indent : 20px; 
		}
</style>
