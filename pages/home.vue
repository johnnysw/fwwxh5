<template>
	<view class="view">

		<image class="bgimg" :src="require('.././images/homebg.png')"></image>

		<view class="header">
			<image class="headerImg" :src="require('.././images/userlogin_bgtop_01.jpg')"></image>

			<u-navbar back-text="" back-icon-size="1.5rem" back-icon-color="#ffffff" title="小斧子房屋维修"
				title-color="#ffffff" :title-bold="true" class="navbar" :background="background" :border-bottom="false">
				<view slot="right" class="slot-right">
					<u-icon name="list" color="#ffffff" size="1.5rem"></u-icon>
				</view>

			</u-navbar>
		</view>
	</view>
</template>

<script>
</script>

<style>
	<style lang="scss">
	/* @import url('../style/.css'); */
	
.bgimg{
	padding: 0rem;
	height: 1334rem;
	width: 750rem;
}
</style>
