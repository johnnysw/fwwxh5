<template>
    <view class="service">
		<view class="nav">
		<u-icon name="list" color="#00ff7f" size="60"></u-icon>
			<view class="logo">
				LOGO
			</view>
			<text style="font-size: 40rpx;">小斧子房屋维修 </text>
		<text class="icon-rightmy" style="float: right;"> </text>
<view style="text-align: right;">
	我的
</view>		
		</view>
		
        <view class="orderNum">
            订单编号 ：111
        </view>
        <view class="container">
            <view class="info">
                基础信息
            </view>
            <view class="header ">

                <view class="box">
                    <label>客户姓名: </label>
                </view>
                <view class="u-input">
                    <input type="text" v-model="name" placeholder="请输入姓名" maxlength="10"
                        placeholder-style="color: #B1B1B1" />
                </view>
            </view>
            <view class="header ">
                <view class="box">
                    <label>联系电话: </label>
                </view>
                <view class="u-input">
                    <input type="text" v-model="tel" placeholder="请输入电话号码 (必填)" maxlength="15"
                        placeholder-style="color: #B1B1B1" />
                </view>
            </view>
            <view class="header ">
                <view class="box">
                    <label>家庭住址: </label>
                </view>
                <view class="u-input">
                    <input type="text" v-model="homeAddress" placeholder="请填写" placeholder-style="color: #B1B1B1" />
                </view>
            </view>
            <view class="header ">
                <view class="box">
                    <label>所在区域: </label>
                </view>
                <view class="u-input" @click="regionShow = true">
                    <!-- 通过判断address里面是否有值来判定显示和隐藏-->
                    <text style="color: #B1B1B1" v-if="address===''?true:false">请选择</text>
                    <text class="row icon-right-1"></text>
                    <text>{{address}}</text>
                    <u-picker v-model="regionShow" mode="region" @confirm="regionConfirm"></u-picker>
                </view>
            </view>
            <view class="header ">
                <view class="box">
                    <label>上面时间: </label>
                </view>
                <view class="u-input" @click='timeShow = true'>
                    <text style="color: #B1B1B1" v-if="time===''?true:false">请选择</text>
                    <text class="row icon-right-1"></text>
                    <text>{{time}}</text>
                    <u-picker mode="time" v-model="timeShow" :params="params" @confirm='timeConfirm'>
                    </u-picker>
                </view>
            </view>
            <view class="header ">
                <view class="box" style="border: none;">
                    <label>问题类型: </label>
                </view>
                <view class="u-input" style="border: none;" @click="questionShow= true">
                    <!-- 通过判断address里面是否有值来判定显示和隐藏-->
                    <text style="color: #B1B1B1;" v-if="qesType===''?true:false">请选择</text>
                    <text class="row icon-right-1"></text>
                    <text>{{qesType}}</text>
                    <u-select v-model="questionShow" mode="single-column" :list="questionList" @confirm="qesConfirm">
                    </u-select>
                </view>
            </view>
            <view class="header ">
                <view class="box">
                    <label>问题描述: </label>
                </view>
                <view class="question">
                    <textarea v-model="qesDetail" value="" placeholder="请描述问题" />
                </view>
            </view>
        </view>
        <view class="info" style="margin-top: 90rpx;">
            上传图片
        </view>
        <view class="uploadImg">
            <u-upload ref="uUpload" :action="imgAction" :auto-upload="true"></u-upload>
        </view>
        <view class="submit">
            <button type="submit">点击提交</button>
        </view>
    </view>
</template>

<script>
    export default {
        data() {
            return {
                name: '',
                tel: '',
                homeAddress: "",
                address: '',
                time: '',
                qesType: '',
                qesDetail: '',
                regionShow: false,
                timeShow: false,
                questionShow: false,
                params: {
                    year: true,
                    month: true,
                    day: true,
                    hour: true,

                },
                questionList: [
                    {
                        value: '1',
                        label: '门坏了'
                    }
                ],
                imgAction: 'http://www.example.com/upload',
                filesArr: [],
            }
        },
        methods: {
            regionConfirm(e) {
                this.address = `${e.province.label + e.city.label + e.area.label}`
            },
            timeConfirm(e) {
                this.time = `${e.year + e.month + e.day + e.hour}`
            },
            qesConfirm(e) {
                this.qesType = `${e[0].label}`
            },
        }
    }
</script>
<style lang="scss" scoped>
	.nav{
		font-weight: bold;
	.logo{
		display: inline-block;
		margin-left: 15rpx;
		margin-right: 15rpx;
		border:solid 0.05rem #000000;
	}}
    .orderNum {
        box-shadow: 0px 5px 5px #eaeaea inset;
        height: 150rpx;
        width: 100%;
        font-size: 40rpx;
        font-weight: 400;
        padding-left: 150rpx;
        padding-top: 40rpx;
    }
	
    .info {
        padding-left: 40rpx;
        width: 100%;
        height: 60rpx;
        background-color: #e7e7e7;
        font-size: 30rpx;
        line-height: 60rpx;
    }
    .header {
        width: 100%;
        height: 100rpx;
        padding: 0 32rpx;
        display: flex;
        .city {
            flex: 1;
            height: 100%;
            line-height: 120rpx;
            text-align: right;
            color: #B1B1B1;
            border-bottom: 1rpx solid #E4E4E4;
        }
        .box {
            width: 180rpx;
            height: 100%;
            line-height: 120rpx;

            label {
                font-size: 30rpx;
                font-weight: 400;
                color: #333333;
                line-height: 42px;
            }
            .color {
                color: #FC5C56;
            }
        }
        .u-input {
            border-bottom: 1rpx solid #E4E4E4;
            color: #333333;
            flex: 1;
            line-height: 120rpx;
            text-align: left;
            position: relative;
            input {
                width: 100%;
                height: 100%;
            }
            .row {
                position: absolute;
                top: 50%;
                right: 0;
            }

        }
        .question {
            textarea {
                display: block;
                border: 1rpx solid #dcdcdc;
                color: #333333;
                flex: 1;
                background-color: #f1f1f1;
                border-radius: 5%;
                padding: 20rpx 0 0 10rpx;
                text-align: left;
                height: 130rpx;
                width: 500rpx;

            }
        }

    }
    .submit {
        button {
            height: 80rpx;
            width: 500rpx;
            text-align: center;
            line-height: 80rpx;
            color: #FFFFFF;
            border-radius: 35px;
            font-weight: 700;
            background: linear-gradient(268deg, #4de2d6, #29def5, #3bdff8, #1ce31c, #5fc363, #8af7bb);
        }
    }
</style>