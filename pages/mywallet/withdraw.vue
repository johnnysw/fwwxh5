<template>
	<view>
		<u-navbar  title="提现"  class="title"  title-size="40rpx" :titleBold="true"  title-color="black" :border-bottom="false" @custom-back="backToMyallet" ></u-navbar>
		<view class="goSubmit">
			提现到余款
		</view>
		<u-form  ref="uForm" class="siz" >
				<u-form-item label="￥" :label-style="{fontSize:'55rpx',textIndent:'10rpx',fontWeight:'bold'}" label-width="80rpx" label-align="center" :border-bottom="false" prop="value"><u-input class="ipt" :customStyle="{fontSize:'65rpx',marginRight:'60rpx',fontWeight:'bold'}" v-model="value" :type="type" :border="border" height="100" maxlength="7" placeholder="":autoHeight="true"  /></u-form-item>
			</u-form>
	<view class="now">
		当前零钱余额{{remaining}}元，<view class="link1" @click="changeMoney" >全部提现</view>
	</view>
	<u-button class="custom-style" size="medium"  border="none" :plain="true" @click="submmitWithdraw">提现</u-button>
<!-- 	<u-popup v-model="show" mode="center" width="400rpx" height="150rpx"  >
			<view class="content">
				提现成功
			</view>
		</u-popup> -->
		<u-keyboard ref="uKeyboard" mode="number" v-model="showKb"></u-keyboard>
		<u-popup v-model="fail" mode="center" width="400rpx" height="150rpx"  >
				<view class="content">
					请填写提现金额
				</view>
			</u-popup>
	</view>

</template>

<script>
	export default {
		data() {
			return {
				value: '',
				type: 'number',
				border: false,
				remaining:'5000.1',
				showKb:false,
				show:false,
				fail:false,

			}
		},
		methods: {
		changeMoney(){
			this.value=this.remaining
		},
		backToMyallet(){
			this.$u.back()
		},
		// showKeyboard(){
		// 	if(!this.showKb){
		// 		this.showKb=true;
		// 	}
		// },
		submmitWithdraw(){
			if(this.value>0){
				this.showKb=true;
			}
			else
				this.fail=true;
		}
	}
	}
</script>

<style>
.title{
	font-size: 40rpx;
	
	letter-spacing: 9rpx;
}
.goSubmit{
	height: 60rpx;
	font-size: 35rpx;
	color:#000000;
	margin-top: 55rpx;
	margin-left: 75rpx;
	
}
.siz{
	border-bottom: #CCCCCC 2rpx solid;
	width: 600rpx;
	margin: 0 auto;
}
.ipt{
	
	
	/* font-size: 80rpx; */
	/* color: #000000; */
}
.now{
	margin-top: 35rpx;
	/* text-align: left; */
	margin-left: 75rpx;
}
.link1{
	display: inline;
	text-decoration: underline;
	color: #01E511;
}
.custom-style{
	
	width: 600rpx;
	height: 100rpx;
	background:#00aa0c;
	letter-spacing: 25rpx;
	font-size: 45rpx;

	margin-left: 75rpx;
	/* border: solid transparent 1rpx; */
	color: white;
	margin-top: 300rpx;
	border-radius: 25rpx;
	box-shadow: 4rpx 4rpx 5rpx  #69aa24;
}
.content {
		height: 200rpx;
		padding: 24rpx;
		line-height: 100rpx;
		letter-spacing: 5rpx;
		font-size: 35rpx;
		text-align: center;
		
	}
</style>
