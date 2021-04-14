<template>
	<view class="">
	<view class=header>
			<u-icon name="list" class="icon-list" size="60" color="#2DBC52"></u-icon>
			<view class="logo">
				LOGO
			</view>
			<view class="header-word">
						小斧子维修中心
			</view>
			<view class="icon-right">
				<svg class="icon" aria-hidden="true">
				  <use xlink:href="#icon-wode"></use>
				</svg>
				<view class="icon-word">
					我的
				</view>
			</view>
	</view>
	<view class="listid">
		订单编号：201705071077704
	</view>
	<view class="first">
		订单信息
	</view>
	<view class="second">
		<view class="second">
			客户姓名：李先生/女士
		</view>
		<view class="second">
			联系电话：13892999299
		</view>
		<view class="flex">
			<view class="second-float">
				家庭住址：
			</view>
			<view class="question">
				哈尔滨市红旗大街199号轴承小区5栋7单元501室（南岗开发区）
			</view>

		</view>
		<view class="flex">
		<view class="second-float ">
			问题简述：
		</view>
		<view class="question">
			屋内有个开关坏了需要修理
		</view>
		</view>
	</view>
	<view class="first">
		维修人员
	</view>
	<view class="second">
	    <view class="second">
		师傅姓名：康师傅
		   <view class="position">
			级别:3星
		   </view>
	    </view>
		<view class="second">
			服务电话：13892999299
		</view>
		<view class="second">
			勘察时间：2021-1-10 09:20
		</view>
	</view>
	<view class="first">
		物料单：
	</view> 
	<view class="third">
		    <view class="fixed">
				类别 品牌 名称  单价 数量 
			</view>
			<view class="margin">
				
			</view>
			<view class="unfixed">
				插座 公牛 五孔插座 18.00 1
			</view>
			<view class="margin">
				
			</view>
			<view class="">
				
			</view>
	</view>
	<view class="forth">
		<view class="status4">
			<b>￥38.00</b>
		</view>
		<view class="status3">
			合计:
		</view>
	</view>
	<view class="first">
		订单信息
	</view>
	<view class="fifth">
		   单价 20 单位（次）数量 1
	</view>
	<view class="margin1">
		
	</view>
	<view class="forth">
		<view class="status4">
			<b>￥38.00</b>
		</view>
		<view class="status3">
			合计:
		</view>
	</view>
	<view class="footer">
		<view class="status1">
			共计：
		</view>
		<view class="status2">
			<b>￥38.00</b>
		</view>
		<button type="default" class="footer-button" @click="open">点击支付</button>
	</view>
	<u-popup v-model="show" mode="center" border-radius="14" width="70%" height="20%">
			<view class="slot-content">
				本次验收达到<br>
				验收标准
			</view>
			<view class="pop-flex">
				<view class="pop-left" @click="finish">
					确定支付费用
				</view>
				<view class="pop-middle">
					
				</view>
				<view class="pop-right" @click="close">
					取消
				</view>
			</view>
		</u-popup>
	</view>
	
</template>
<script src="../../icon/iconfont.js">
	
</script>
<script>
	export default {
		data() {
			return {
				show: false,
				confirm: false
			}
		},
		methods: {
					open() {
						this.show = true;
					},
					close(){
						this.show = false;
					},
					finish(){
						this.confirm=true;
						this.show=false;
					}
		}
	}
</script>

<style>
	.header{
		margin-top: 0.2rem;
		margin-right: 0.4rem;
		font-size: 1.2rem;
	}
	.icon-list{
		display: inline-block;
		float: left;
		border: 1.6rem;
		margin-top: 0.2rem;
		margin-left: 0.8rem;
	}
	.logo{
		border-radius: 0.3rem;
		border:solid 0.05rem #000000;
		margin-left: 0.6rem;
		margin-right: 0.8rem;
		margin-top: 0.4rem;
		display: inline-block;
		float: left;
		font-size: 1.2rem;
	}
	.header-word{
		display: inline-block;
		margin-top: 0.4rem;
	}
	.icon-right{
		float: right;
	}
	.icon {
	  width: 1em;
	  height: 1em;
	  vertical-align: -0.15em;
	  fill: currentColor;
	  overflow: hidden;
	  margin-left: 0.2rem;
	  padding: 0;
	  border: 0;
	}
	.icon-word{
		font-size: 0.4rem;
		margin: 0;
		padding: 0;
		border: 0;
	}
	.right{
		display: inline-block;
		float: right;
	}
	.listid{
		font-size: 1.2rem;
		margin-top: 1.4rem;
		margin-bottom: 1rem;
		text-align: center;
	}
	.first{
		height: 1.7rem;
		line-height: 1.7rem;
		background-color: rgb(235,235,235);
		text-indent:0.8rem;
		margin: 0.8rem;
	}
	.second{
		text-indent:0.8rem;
		font-size: 1.2rem;
		word-break:break-all;
		margin-top: 0.6rem;
		margin-bottom: 0.6rem;
	}
	.second-first{
		text-indent:7rem;
	}
	.position{
		margin-right: 2.4rem;
		display: inline-block;
		float: right;
	}
	.third{
		margin-top: 0.6rem;
		margin-left: 0.8rem;
		margin-right: 2rem;
		font-size: 1.2rem;
	}
	.fixed{
		word-spacing:1.8rem;
	}
	.unfixed{
		word-spacing:1.4rem;
	}
	.flex{
		display: flex;
		flex-direction: row;
	}
	.second-float{
		height: 0.5rem;
		white-space:nowrap;
	}
	.margin{
		background-color: rgb(179,179,179);
		height: 0.05rem;
		margin: 0.6rem;
		width: 100%;
	}
	.status3{
		margin-top: 0.2rem;
		display: inline-block;
		float: right;
		font-size: 1rem;
	}
	.status4{
		color:#2DBC52  ;
		display: inline-block;
		float: right;
		font-size: 1.2rem;
	}
	.forth{
		margin-bottom: 2.4rem;
		margin-left: 1rem;
		margin-right: 1rem;
	}
	.fifth{
		margin-top: 0.6rem;
		margin-left: 1rem;
		margin-right: 2rem;
		font-size: 1.1rem;
		word-spacing:2.4rem;
	}
	.margin1{
		background-color: rgb(179,179,179);
		height: 0.05rem;
		margin: 0.6rem;
		margin-right: 1.2rem;
		margin-left: 1.2rem;
	}
	.footer{
	    position: fixed;
        bottom: 0;
		width: 100%;
		height: 4rem;
		line-height: 4rem;
		background-color: rgb(249,249,249);
	    border-top: 0.2rem;
		border-top:solid 0.2rem #f5f5f5;
	}
	.status1{
		margin-top: 0.2rem;
		display: inline-block;
		float: left;
		font-size: 1rem;
	}
	.status2{
		color:#2DBC52  ;
		display: inline-block;
		float: left;
		font-size: 1.2rem;
	}
	.footer-button{
	background-color: #2DBC52;
	border-radius: 2rem;
	color: #FFFFFF;
	font-size: 1.2rem;
	width: 9rem;
	float: right;
	display: inline-block;
	height: 2.8rem;
	line-height: 2.8rem;
	margin-top: 0.4rem;
	}
	.slot-content {
		font-size: 1.2rem;
		text-align: center;
		margin-top: 1.6rem;
	}
	.pop-flex{
		margin-top: 2.5rem;
		display: flex;
		flex-direction: row;
		border-top: solid 0.1rem rgb(242,242,242);
		text-align: center;
	}
	.pop-left{
		color: rgb(80,187,4);
		font-size: 1rem;
		text-align: center;
		margin-right: 4rem;
	    margin-left: 2rem;
		margin-top: 0.6rem;
	}
	.pop-middle{
		width: 0.1rem;
		background-color: rgb(242,242,242);
		height: 2.9rem;
	}
	.pop-right{
		text-align: center;
		margin-left: 2rem;
		margin-top: 0.6rem;
	}
</style>
