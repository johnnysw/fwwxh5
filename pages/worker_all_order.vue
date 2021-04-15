<template>
	<view>
		<u-navbar :is-back="true" title="我的工单" :background="background">
			
		</u-navbar>
		<view class="content">
			<view class="title">
				<view @tap="tap(index)" v-for="(item,index) in list" :key="index" :class="[current==index?'active':'']">{{item.title}}</view>
			</view>
		
			
			<view class="">
				<swiper :current="current" class="tap-label">
				<swiper-item v-for="(item,index) in list" :key="index">
					<view class=""  v-for="index of 3" :class="[index==1?'first':'']" :key="index">
						
				     <view class="margin">
						
					</view>
					<view class="first">
						<view class="status1">
							正常
						</view>
						<view class="list-id">
							订单号：201705071077704
						</view>
						<view class="status2">
							进行中
						</view>
					</view>
					<view class="second">
						电 器
					</view>
					<u-table class="third">
						<view class="fixed">
							类别 品牌 名称 单价 数量
							<view class="unfixed">
								插座 公牛 五孔插座 18.00 1
							</view>
						</view>
						
					</u-table>
					<view class="forth">
						人工费
					</view>
					<view class="fifth">
						   单价 20 单位（次）数量 1
					</view>
					<view class="sixth">
						 
					</view>
					<view class="footer">
						<view class="status3">
							合计
						</view>
						<view class="status4">
							￥38.00
						</view>
						<u-button type="default"  shape="circle" class="details" size="mini">详 情</u-button>
					</view>
					<view class="separation">
						
					</view>
					</view>
				</swiper-item>
			    </swiper>
			</view>
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				current: 0,
				list: [{
						title: "全部订单",
						name: "第一个"
					},
					{
						title: "进行中",
						name: "第二个"
					},
					{
						title: "已完成",
						name: "第三个"
					},
					{
						title: "问题订单",
						name: "第四个"
					}
				]
			}
		},
		methods: {
			tap(index) {
				this.current = index
			}
		}
	}
</script>

<style scoped lang="scss">
	.first{
		position: relative !important;
		padding: 0;
	}
	.title {
		background-color: #FFFFFF;
		display: flex;
		border-bottom: 1px solid #DDDDDD;
		width: 100%;
		box-sizing: border-box;
		height: 80upx;
		font-size: 30upx;
		line-height: 80upx;
		text-align: center;
	
		view {
			height: 2rem;
			line-height: 2rem;
			padding: 0;
			display: block;
			width: 20%;
			border-radius: 20px;
			border: none;
			margin: 10px;
	
			&:after {
				border: none;
				border-radius: 0;
			}
		}
	}
	.active {
		background: rgb(0,191,0);
		color: #FFFFFF;
	}
	
	.tap-label {
		margin-top: 40upx;
		height: 100%;
		width: 100%;
	
		swiper-item {
			width: 100%;
			height: 100%;
	
			/*view {
				width: 100%;
				height: 100%;
			}*/
		}
	}
	
	swiper {
		display: flex;
		flex: 1 1 auto;
	}
	
	swiper :first-child {
		position: absolute;
	}
	.content{
		background-color: #ffffff;
	}
	.margin{
		height: 0.5rem;
		background-color: #f5f5f5;
	}
	.list{
		border: 1rem;
		border-color: #f5f5f5;
		margin-bottom: 2rem;	
		}
	.first{
        padding: 0.8rem;
		display: block;
	}
	.status1{
		color: rgb(163,225,163);
		font-size: 1rem;
		margin: 0.1rem;
		border-radius: 1rem;
		border:solid 0.1rem rgb(153,229,153);
	}
	.list-id{
		margin-left: 2.1rem;
		display: inline-block;
		float: left;
		font-size: 1.2rem;
	}
	.status2{
		display: inline-block;
		float: right;
		color: rgb(255,149,149);
		font-size: 1.1rem;
	}
	.secondt{
		width: 4rem;
	}
	.secondtt{
		width: 4rem;
		margin-left: 4rem;
	}
	.second{
		color: #FFFFFF;
		margin-top: 0.9rem;
		height: 1.7rem;
		background-color: rgb(93,179,93);
		margin-left: 0.7rem;
		margin-right: 0.7rem;
		text-align:center;
		line-height: 1.7rem;
		font-size: 1.15rem;		
	}
	.third{
		margin-top: 0.6rem;
		margin-left: 2rem;
		margin-right: 2rem;
		font-size: 1rem;
		margin-bottom: 3rem;
		border: none !important;
	}
	.fixed{
		word-spacing:2.05rem;
		
	}
	.unfixed{
		word-spacing:1.6rem;
	}
	.forth{
		color: #000000;
		margin-top: 0.9rem;
		height: 1.7rem;
		background-color: rgb(234,245,234);
		margin-left: 0.7rem;
		margin-right: 0.7rem;
		line-height: 1.7rem;	
	}
	.fifth{
		margin-top: 0.6rem;
		margin-left: 2rem;
		margin-right: 2rem;
		font-size: 1rem;
		word-spacing:2.4rem;
	}
	.sixth{
		margin-top: 0.9rem;
		height: 0.1rem;
		background-color: rgb(166,198,166);
		margin-left: 0.7rem;
		margin-right: 0.7rem;	
	}
	.footer{
		 padding: 0.8rem;
		 margin-bottom: 0.4rem;
	}
	.status3{
		margin-top: 0.3rem;
		display: inline-block;
		float: left;
	}
	.status4{
		color:#2DBC52  ;
		display: inline-block;
		float: left;
		font-size: 1.2rem;
		margin-left: 2.1rem;
	}
	.details{
		display: inline-block;
        float: right;
	}
	.u-table,u-table*{
		border: none !important;
	}
</style>
