<template>
	<view class="view">
		
		<image class="img" :src="require('.././images/tuceng 1.png')"></image>
		
		<view class="header">
			<image class="headerImg" :src="require('.././images/workerregistertop_01.jpg')"></image>
			
				<u-navbar back-text="" back-icon-size="1.5rem" back-icon-color="#000000" title="小斧子房屋维修" title-color="#000000" :title-bold="true" class="navbar" :background="background" :border-bottom="false">
					
					
				</u-navbar>
		</view>
		<view class="regist">
			<image class="registImg" src="../images/workerregisterbg_03.png"></image>
		</view>
		<view class="registMsg">
			<view class="registInput">
				<p class="wordTel">手机号</p>
				<view class="tel">
					<view class="inputTel">
						<input type="text"  class="inputTel" />
					</view>
				</view>
				<p class="wordCode">验证码</p>
				<view class="code">
					
					<view class="inputCode">
						<input type="text"  class="inCode"/>
						<button type="default" class="codeBtn">获取验证码</button>
					</view>
				</view>
				<p class="word">真实姓名</p>
				<view class="code">
					
					<view class="inputCode">
						<input type="text"  class="inCode"/>
						
					</view>
				</view>
				<p class="word">身份证号</p>
				<view class="code">
					<view class="inputCode">
						<input type="text"  class="inCode"/>
					</view>
				</view>
				<p class="word">服务类型</p>
				<view class="code">
					<view class="inputCode">
						<input type="text"  class="inCode"/>
					</view>
				</view>
				<p class="word">技能证书</p>
				<view class="upload">
					<u-upload :action="action" :file-list="fileList"  upload-text=""  ></u-upload>
				</view>
				<button class="btn">注 册</button>
				<navigator url="/pages/workerLogin"  class="link">
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
				},
				action:'',
				
				
			};
		}
	}
</script>

<style lang="scss">
@import url('../style/login_regist.css');





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
	height: 28rem;
	border-bottom-right-radius: 30rpx;
	border-bottom-left-radius: 30rpx;
}
.tel{
	border-radius: 90rpx;
	background-color: #f1f1f1;
	width: 60%;
	margin-left: 4.5rem;
	margin-top: 1rem;
}

.inputTel{
	display: inline-block;
	width: 60%;
	font-size: 0.8rem;
	margin-top: 0.2rem;
	margin-left: 0.1rem;
	margin-bottom: 0.1rem;
}
.code{
	border-radius: 90rpx;
	background-color: #f1f1f1;
	width: 60%;
	margin-left: 4.5rem;
	margin-top: 0.5rem;
}
.wordTel{
	float: left;
	margin-top: 1.5rem;
	margin-left: 1.5rem;
}
.wordCode{
	float: left;
	margin-top: 1rem;
	margin-left: 1.5rem;
}
.word{
	float: left;
	margin-top: 1rem;
	margin-left: 1rem;
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
	font-size: 0.7rem;
	margin-right: 0.1rem;
	border-top-right-radius: 90rpx;
	border-bottom-right-radius: 90rpx;
	border-left: none;
	background-color: #50bb04;
	color: #FFFFFF;
	
}
.upload{
	margin-top: 0.4rem;
	margin-left: 4.5rem;
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
