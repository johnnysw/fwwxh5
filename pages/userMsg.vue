<template>
	<view class="view">
		<view class="header">
			<image class="headerImg" :src="require('.././images/user_top_01_01.jpg')"></image>
			
				<u-navbar back-text="" back-icon-size="1.5rem" back-icon-color="#ffffff" title="个人资料" title-color="#ffffff" :title-size="42"  class="navbar" :background="background" :border-bottom="false">
					<view slot="right" class="slot-right">
						<navigator url="userMsg-re">
							<button class="headerBtn">修改</button>
						</navigator>
						
					</view>
					
				</u-navbar>
				
				<image class="headPrint" :src="require('.././images/185933-15315659731ac9.jpg')"></image>
		</view>
		<view class="content">
			<view class="conName">
				<p class="tag">姓名</p>
				<p class="tagCon">小福子</p>
			</view>
		</view>
		<view class="content">
			<view class="conTent">
				<p class="tag">手机号</p>
				<p class="tagCon">123456789</p>
			</view>
		</view>
		<view class="content">
			<view class="conTent">
				<p class="tag">区域</p>
				<p class="tagCon">南港区</p>
			</view>
		</view>
		<view class="content">
			<view class="conTent">
				<p class="tag">地址</p>
				<p class="tagCon">轴承区域建北小区20号楼4单元</p>
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
				
			};
		}
	}
</script>

<style lang="scss">
.view{
	width: 100%;
	height: 100%;
}

.headerImg{
	width: 100%;
	z-index: -1;
	position: fixed;
}
.slot-right{
	display: flex;
	align-items: center;
}
.headerBtn{
	border-radius: 90rpx;
	background: none;
	color: #FFFFFF;
	border: solid #FFFFFF 0.05rem;
	width: 4rem;
	height: 1.5rem;
	margin-right: 1rem;
	line-height: 1.5rem;
}
.headPrint{
	width: 6rem;
	height: 6rem;
	border-radius: 50%;
	margin-top: 2rem;
	margin-left: 6.5rem;
}
.content{
	display: flex;
	justify-content: center;
}
.conName{
	border-bottom: solid 0.05rem;
	height: 2rem;
	margin-top: 2rem;
	width: 90%;
	display: block;
}
.conTent{
	border-bottom: solid 0.05rem;
		height: 2rem;
		margin-top: 1rem;
		width: 90%;
		display: block;
	
}
.tag{
	float: left;
	font-size: 1rem;
	font-weight: 500;
	font: [SourceHanSansCN];
}
.tagCon{
	float: right;
	font-size: 1rem;
	font-weight: 500;
}
</style>
