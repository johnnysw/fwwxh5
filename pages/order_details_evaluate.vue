<template>
    <view class="wrapper">
        <u-popup v-model="show" mode="center" border-radius="16" closeable close-icon="close-circle"
            close-icon-size="50" width="600rpx" height="700rpx">
            <view class="title">请您评价</view>
            <view class="rate">
                <text>请对本次服务进行评价吧</text>
                <uni-rate v-model="value" allow-half :value="0.5" :margin="10" size="25" />
            </view>
            <view class="optionOne">
                <u-tag text="着装整齐" shape="circle" type="success" @click="tagClick" />
                <u-tag text="服务态度好" shape="circle" type="success" @click="tagClick" />
                <u-tag text="负责任" shape="circle" type="success" @click="tagClick" />
            </view>
            <view class="optionTwo">
                <u-tag text="手法很专业" shape="circle" type="success" @click="tagClick" />
                <u-tag text="场地整洁" shape="circle" type="success" @click="tagClick" />
                <u-tag text="很耐心" shape="circle" type="success" @click="tagClick" />
            </view>
            <view class="submit">
                <button type="submit">点击评价</button>
            </view>
        </u-popup>
        <u-button @click="show = true">打开</u-button>

    </view>
</template>
<script>
    export default {
        data() {
            return {
                show: false,
                count: 4,
                value: 0,
            }
        },
        methods: {
            tagClick() {
				console.log(1)
            }
        },

    }

</script>
<style lang="scss" scoped>
	.wrapper {
		.title {
		    height: 90rpx;
		    line-height: 90rpx;
		    padding: 5rpx 0 0 30rpx;
		    font-weight: bold;
		    border-bottom: 1px solid #F1F1F1;
		}
		.rate {
		    height: 300rpx;
		    margin-top: 60rpx;
		    padding-left: 120rpx;
		
		    text {
		        margin-bottom: 40rpx;
		        display: block;
		    }
		}
		.optionOne {
		    width: 100%;
		    display: flex;
		    justify-content: space-around;
		    margin-top: -120rpx;
		}
		.optionTwo {
		    display: flex;
		    justify-content: space-around;
		    margin-top: 30rpx;
		}
		.submit {
		    button {
		        margin-top: 60rpx;
		        height: 80rpx;
		        width: 400rpx;
		        text-align: center;
		        line-height: 80rpx;
		        color: #FFFFFF;
		        border-radius: 35px;
		        font-weight: 700;
		        background-color: #4CD964;
		    }
		}
	}
    
</style>