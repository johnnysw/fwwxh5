<template>
	<view class="view">
		
		<image class="img" :src="require('.././images/tuceng 0.png')"></image>
		
		<view class="header">
			<image class="headerImg" :src="require('.././images/userregister_bgtop_01_01.jpg')"></image>
			
				<u-navbar back-text="" back-icon-size="1.5rem" back-icon-color="#000000" title="小斧子房屋维修" title-color="#000000" :title-bold="true" class="navbar" :background="background" :border-bottom="false">
					<view slot="right" class="slot-right">
						<u-icon name="list" color="#000000" size="1.5rem" ></u-icon>
					</view>
					
				</u-navbar>
		</view>
		<view class="regist">
			<image class="registImg" src="../images/userregisterbg_03.png"></image>
		</view>
		<view class="registMsg">
			<view class="registInput">
				<view class="tel">
					<image class="telImg" src="../images/mobile.png"></image>
					<view class="inputTel">
						<input type="text" placeholder="手机号" class="inputTel" />
					</view>
				</view>
				<view class="code">
					<image class="codeImg" src="../images/captcha.png"></image>
					<view class="inputCode">
						<input type="text" placeholder="验证码" class="inCode"/>
						<button type="default" class="codeBtn">获取验证码</button>
					</view>
				</view>
				<button class="btn">注 册</button>
				<navigator url="/pages/userLogin"  class="link">
					<p>已有账号？请登录</p>
					</navigator>
					
				
				
			</view>
			
		</view>
	</view>
	
</template>

<script>
	export default {
		data() {
			return {
				background:{
					background:'url(.././images/tabbar1.png)',
					
					
				}
			};
		}
	}
</script>

<style lang="scss">
@import url('../style/login_regist.css');




.slot-right{
	padding: 0 1rem;
}
.regist{
	display: flex;
	justify-content: center;
	margin-top: 6.5rem;
	
}
.registImg{
	height: 3.5rem;
	width: 16rem;
}
.registMsg{
	display: flex;
	justify-content: center;
	
}
.registInput{
	width: 15rem;
	background-color: #FFFFFF;
	justify-content: center;
	-moz-box-shadow:0 0 10px #c3e0e4;
	-webkit-box-shadow:0 0 10px #c3e0e4;
	box-shadow:0 0 10px #c3e0e4;
	height: 16rem;
	border-bottom-right-radius: 30rpx;
	border-bottom-left-radius: 30rpx;
}
.tel{
	border-radius: 90rpx;
	background-color: #f1f1f1;
	width: 80%;
	margin-left: 1.5rem;
	margin-top: 1rem;
}
.telImg{
	width: 0.8rem;
	height: 1.1rem;
	margin-left: 1rem;
	margin-top: 0.5rem;
	margin-bottom: 0.2rem;
	float: left;
}
.inputTel{
	display: inline-block;
	font-size: 0.8rem;
	margin-top: 0.2rem;
	margin-left: 0.1rem;
	margin-bottom: 0.1rem;
}
.code{
	border-radius: 90rpx;
	background-color: #f1f1f1;
	width: 80%;
	margin-left: 1.5rem;
	margin-top: 1rem;
}
.codeImg{
	width: 1.1rem;
	height: 1.1rem;
	margin-left: 0.9rem;
	margin-top: 0.5rem;
	margin-bottom: 0.2rem;
	float: left;
}
.inputCode{
	
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	font-size: 0.8rem;
	margin-top: 0.2rem;
	margin-left: 0.1rem;
	margin-bottom: 0.1rem;
	
}
.inCode{
	width: 40%;
	margin-top: 0.4rem;
	margin-left: 0.1rem;
	margin-bottom: 0.5rem;
}
.codeBtn{
	float: right;
	font-size: 0.8rem;
	margin-right: 0.1rem;
	border-top-right-radius: 90rpx;
	border-bottom-right-radius: 90rpx;
	border-left: none;
	background-color: #50bb04;
	color: #FFFFFF;
	
}

.btn{
	width: 80%;
	height: 2.5rem;
	margin-left: 1.5rem;
	margin-top: 2rem;
	border-radius: 90rpx;
	background:url(../images/btn.png);
	font-size: 1rem;
	font-weight: 700;
	color: #ffffff;
	-moz-box-shadow:0 0 10px #c3e0e4;
	-webkit-box-shadow:0 0 10px #c3e0e4;
}



</style>
