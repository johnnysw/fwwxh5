<template>
 <view class="login-tip">
   <van-loading color="#1989fa" v-if="showLogin">授权登录验证中...</van-loading>
   <text v-if="!showLogin">授权登录验证失败!</text>
 </view>
</template>

<script>
export default {
name: "loginError",
props: {
  showLogin: {
    type: Boolean,
    default: true
  }
}
}
</script>

<style lang="less">
.login-tip{
  height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
</style>