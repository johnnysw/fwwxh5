<template>
  <view class="container" id="container">
    <view class="wrap">
      <view class="wrap-header">
        <u-row>
          <image :src="'/static/imgs/menu-l.png'" style="width: 30upx;height: 30upx;"></image>
          <u-col :span="1">
            <view class="logo-text">
              LOGO
            </view>
          </u-col>
          <u-col :span="4">
            <view class="logo-title">
              小斧子房屋维修
            </view>
          </u-col>
          <u-col :span="5" style="flex: 0 0 45.6667%;">
            <view class="header-right">
              <view class="right-box">
                <image :src="'/static/imgs/weixiu.png'" style="width: 30upx;height: 30upx;"></image>
                <text>我要修</text>
              </view>
              <view class="right-box">
                <image :src="'/static/imgs/weixiudan.png'" style="width: 30upx;height: 30upx;"></image>
                <text>我能修</text>
              </view>
              <view class="right-box">
                <image :src="'/static/imgs/wode.png'" style="width: 30upx;height: 30upx;"></image>
                <text>我的</text>
              </view>
            </view>
          </u-col>
        </u-row>
      </view>
      <u-swiper :list="list"></u-swiper>
    </view>
    <view class="menu-list">
      <view class="menu-content">
        <view class="menu-box" v-for="item in menuList" :key="item.id">
          <image :src="item.src" style="width: 50upx;height: 50upx;"></image>
          <text>{{item.text}}</text>
        </view>
      </view>
    </view>
    <view class="card-center">
      <scroll-view scroll-y="true" style="max-height: 600upx;">
        <view class="comment-list">
          <view class="list-title">
            <image src="/static/imgs/comment.png" style="width: 200upx; height: 40upx;"></image>
          </view>
        </view>
        <view class="list-content">
         <view class="list-box" v-for="item in list" :key="item.id">
           <image :src="item.image" style="width: 100%; height: 200upx;"></image>
           <view class="box-content">
             <text class="content-title">
               {{item.title}}
             </text>
             <view class="content-cost">
               <text>面积: 90㎡</text>
               <text>费用: 3万</text>
             </view>
           </view>
         </view>
        </view>
        <view class="loading-more">
          <view class="more-btn">
            <text>更多案例+</text>
          </view>
        </view>
      </scroll-view>
      <view class="bottom-btn">
        <u-row>
          <u-col span="4">
            <view class="btn-box">
              <image src="/static/imgs/can.png" style="width: 50upx;height: 50upx;"></image>
              <text>需要修</text>
            </view>
          </u-col>
          <u-col span="4">
            <view class="btn-box">
              <image src="/static/imgs/xiuli.png" style="width: 50upx;height: 50upx;"></image>
              <text>我能修</text>
            </view>
          </u-col>
          <u-col span="3">
            <view class="btn-box">
              <image src="/static/imgs/help.png" style="width: 50upx;height: 50upx;"></image>
              <text>帮助</text>
            </view>
          </u-col>
        </u-row>
      </view>
    </view>
  </view>
</template>

<script>
import { mapState } from 'vuex';

	export default {
		data() {
			return {
				title: '发现试题',
        subTitle: '点击按钮即可开始单词背诵',
				columns: ['男', '女'],
        showContent: false,
        showChinese: false,
				home: '',
				userMap: ['普通用户', '单位管理员', '超级管理员'],
        menuList: [{
				  id: 1,
          src: '/static/imgs/menu0.png',
          text: '电器维修'
        }, {
          id: 2,
          src: '/static/imgs/menu1.png',
          text: '水暖防水'
        }, {
          id: 3,
          src: '/static/imgs/menu2.png',
          text: '找木工'
        }, {
          id: 4,
          src: '/static/imgs/menu3.png',
          text: '找油工'
        }, {
          id: 5,
          src: '/static/imgs/menu4.png',
          text: '其他维修'
        }],
        noticeList: ['现在答题获得积分可以兑换物品哦'],
        list: [{
				  id: 1,
          image: '/static/imgs/pic1.png',
          title: '客厅卧室涂料刷新'
        },
          {id: 2,
            image: '/static/imgs/pic2.png',
            title: '客厅卧室全屋涂料刷新'
          },
          {id: 3,
            image: '/static/imgs/pic1.png',
            title: '客厅卧室涂料刷新'
          },
          { id: 4,
            image: '/static/imgs/pic2.png',
            title: '客厅卧室全屋涂料刷新'
          },
          {id: 5,
            image: '/static/imgs/pic1.png',
            title: '客厅卧室涂料刷新'
          },
          { id: 6,
            image: '/static/imgs/pic2.png',
            title: '客厅卧室全屋涂料刷新'
          }
        ]
			}
		},
    computed: {
		  ...mapState({
        userInfo: state => state.user.userInfo
      })
    },
    mounted () {
    },
		onLoad() {
		},
		methods: {
      toPrimary () {
        uni.navigateTo({
          url: '/pages/user/user'
        })
      },
      toFiles () {
        uni.navigateTo({
          url: '/pages/files/files'
        })
      },
      showPop (e) {
        const index = e.currentTarget.dataset.index;

        if (index === '1'){
          this.$refs.popup.open()
        } else {
          this.$refs['popup-home'].open()
        }
      },
      toMessage () {
        uni.navigateTo({
          url: '/pages/messageList/messageList'
        })
      },
      toCompany () {
        uni.navigateTo({
          url: '/pages/company/companyList'
        })
      }
		}
	}
</script>

<style lang="less">
/**index.wxss**/
#container {
  min-height: calc(100vh);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  overflow: hidden;
  .wrap{
    background: #ffffff;
    padding:0 40upx;
    background: url("/static/bg.jpg") no-repeat;
    background-size: 100% 100%;
    .wrap-header{
      margin: 20upx 0 40upx 0;
    }
    .logo-text{
      padding: 5upx 10upx;
      font-size: 20upx;
      color: #ffffff;
      border: 1px #ffffff solid;
      text-align: center;
      width: 100%;
      border-radius: 10upx;
    }
    .logo-title{
      color: #ffffff;
      font-size: 28upx;
      margin-left: 20upx;
    }
    .right-box{
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      font-size: 20upx;
      color: #ffffff;
      margin: 0 10upx;
      text{
        display: inline-block;
        margin-top: 10upx;
      }
    }
    .header-right{
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
    }
  }
  .menu-list{
    padding: 20upx;
    margin-top: 20upx;
    .menu-content{
      display: flex;
      flex-direction: row;
    }
    .menu-box{
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      font-size: 26upx;
      text{
        display: inline-block;
        margin-top: 10upx;
      }
    }
  }
  .comment-list{
    margin-top: 40upx;
    .list-title{
     display: flex;
      flex-direction: row;
      justify-content: center;
    }
  }
  .list-content{
    padding: 40upx;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    .list-box{
      width: 44%;
      margin: 20upx;
    }
    image{
      border-radius: 10upx;
    }
  }
  .box-content{
    .content-title{
      font-weight: bolder;
      margin-top: 15upx;
      display: inline-block;
    }
    .content-cost{
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      font-size: 28upx;
      margin-top: 8upx;
    }
  }
  .loading-more{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding-bottom: 20upx;
    .more-btn{
      width: 60%;
      padding: 20upx 0;
      border: 1px rgba(0,0,0,.2) solid;
      text-align: center;
      border-radius: 25upx;
      color: rgba(0,0,0,.2);
      font-weight: bolder;
    }
  }
  .bottom-btn{
    padding: 20upx;
    padding-right: 40upx;
    box-shadow: 2px 0 0 0 rgba(0,0,0);
    border-top: 1px solid rgba(0,0,0, .1);
  }
  .btn-box{
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text{
      font-size: 26upx;
      display: inline-block;
      margin-top: 10upx;
    }
  }
}
</style>
