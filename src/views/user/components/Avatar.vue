<template>
  <div class="avatar">
    <div class="card">
      <div class="userinfo van-hairline--bottom">
        <img src="@/assets/imgs/avatar.jpg">
        <span class="username">{{nickname}}</span>
        <span class="userathu">博客管理员</span>
      </div>
      
    </div>
  </div>
</template>
<script>
export default {
  name: 'UserInfo',
  computed: {
    nickname() {
      return AV.User.current().get('nickname')
    }
  }
}
</script>
<style lang="stylus" scoped>
.avatar
  position relative
  height 1.6rem
  background url('~@/assets/imgs/banner.jpg')
  background-size 100% 100%
  .card
    position absolute
    overflow hidden
    padding .1rem
    left 50%
    top 30%
    transform translateX(-50%)
    background #0000001a
    width 90vw
    height .6rem
    border-radius .08rem
    box-shadow 1px 1px 12px #BDBFFF
    .userinfo
      position relative
      padding-bottom .1rem
      font-size .2rem
      color #808080
      height .4rem
      line-height .4rem
      img
        box-sizing border-box 
        border 2px solid #FFE4A2
        border-radius 50%
        width .4rem
        height .4rem
      .username
        position relative
        left .1rem
      .userathu
        font-size .12rem
        position absolute
        right .2rem
</style>


