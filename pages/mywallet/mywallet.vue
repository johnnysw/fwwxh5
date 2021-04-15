<template>
	<view>  
		<u-navbar  title="我的钱包"  class="title" title-size="40rpx" :titleBold="true"  title-color="black" :border-bottom="false" @custom-back="backToHome"></u-navbar>


		<view class="rem-sum" >
			<view class="yue">
				余额
			</view>
			<view class="money" >
				￥{{money}}
			</view>
			<view class="sum">
				累计提现：{{sum}}
				<u-button class="custom-style" size="medium" shape="circle" border="white" :plain="true" @click="goWithdraw(money)">马上提现</u-button>
			</view>

		</view>
			<u-tabs ref="tabs" active-color="#01e511"  :list="list" :is-scroll="false" bar-width="200rpx" :current="current" class="tabStyle" @change="changeTab"></u-tabs>
			<u-cell-group  v-if="current" >
				<u-cell-item  :arrow="false" class="card">
					<view class="www1" >提现<view class="www3">{{date}}</view>
					</view>
					<view class="www2">{{withdraw}}<view class="www3">
						 余额：{{remaining}}</view>
					 </view>
				</u-cell-item>				
				<u-cell-item  :arrow="false" class="card">
					<view class="www1" >提现<view class="www3">{{date}}</view>
					</view>
					<view class="www2">{{withdraw}}<view class="www3">
						 余额：{{remaining}}</view>
					 </view>
				</u-cell-item>
			</u-cell-group>
			
			<u-cell-group  v-else>
				<u-cell-item  :arrow="false" class="card">
					<view class="www1" >入账<view class="www3">{{date}}</view>
					</view>
					<view class="www2">{{earning}}<view class="www3">
						 余额：{{remaining}}</view>
					 </view>
				</u-cell-item>
				<u-cell-item  :arrow="false" class="card">
					<view class="www1" >入账<view class="www3">{{date}}</view>
					</view>
					<view class="www2">{{earning}}<view class="www3">
						 余额：{{remaining}}</view>
					 </view>
				</u-cell-item>
			</u-cell-group>

	</view>
</template>

<script>
	
	
	export default {
		data() {
			return {
				money:"5,000.00",
				sum:'6,789.00',
				list: [{name: '入帐单'
						}, {
							name: '提现单'
						}],
				current: 0,
				date:"2021-4-3 14:30",
				earning:"+100",
				withdraw:"-200",
				remaining:"1800.00"
			}
		},
		methods: {
			backToHome(){
				this.$u.route('pages/home/index');
			},
			changeTab(index) {
							this.current = index;
						},
			goWithdraw(money){
				this.$u.route('pages/mywallet/withdraw');
			}
		}
	}
</script>

<style>
.title{
	font-size: 40rpx;
	
	letter-spacing: 9rpx;
}
.rem-sum{
	/* background: 'url(https://cdn.uviewui.com/uview/swiper/1.jpg) no-repeat'; */
	background-image: linear-gradient(to bottom right, #a5e6a7, #01e511);
	/* background-image: linear-gradient(to left, #32e609, #6de564); */
	height: 350rpx;
	width: 650rpx;
	margin: 0 auto;
	color: white;
	position: relative;
	border-radius: 10rpx;
	box-shadow: 4rpx 4rpx 5rpx  #959595;
}
.yue{
	text-align: center;
	font-size: 40rpx;
	height: 60rpx;
	margin-top: 20rpx;
	line-height: 60rpx;
	padding: 20rpx;
	
}
.money{
	text-align: center;
	font-size: 70rpx;
	font-weight: 600;
	padding: 20rpx;
	
}
.sum{
	border-image: linear-gradient(#aaff7f,  #01e511) 20 20;
	border-top:#26ff17 solid 2rpx;
	margin-left: 25rpx;
	margin-top: 50rpx;
	font-size: 35rpx;
	color: white;
}
.custom-style{
	margin-top: 10rpx;
	width: 200rpx;
	background-image: linear-gradient(to bottom right, #78e65f, #01e511);
	border-style: solid;
	border-color: #ffffff;
	border-width: 2rpx;
	color: white;
	right: -100rpx;
	border-radius: 100rpx;
	/* box-shadow: 4rpx 4rpx 5rpx  #cfcfcf; */
}
.tabStyle{
	border: #01E511 3rpx solid;
	margin-top: 50rpx;
}

.www1{
	text-align: left;
	float: left;
	font-size: 35rpx;
	color: #000000;
}
.www2{
	float: right;
	font-size: 35rpx;
	color: #000000;
	
}
.www3{
	font-size: 25rpx;
	color: #a5a5a5;
}
.card{
	color: #000000;
	height: 150rpx;
}
	.u-card-wrap { 
		background-color: $u-bg-color;
		padding: 1px;
	}
	
	.u-body-item {
		font-size: 32rpx;
		color: #333;
		padding: 20rpx 10rpx;
	}
		

</style>
