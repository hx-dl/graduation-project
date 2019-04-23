<template>
  <div class="wrapper">
    <div class="background-img"></div>
    <img :src="require('@/assets/imgs/logo.png')" class="logo">
    <div class="input-area">
        <login v-if="loginPage"/>
        <register v-else/>
    </div>
  </div>
</template>
<script>
import Login from './components/Login.vue'
import Register from './components/Register.vue'
export default {
  components: {
    Login,
    Register
  },
  data() {
    return {
      loginPage: true
    }
  },
  mounted() {
    this.$on('checkType', this.checkType)
  },
  methods: {
    checkType() {
      this.loginPage = !this.loginPage
    }
  }
}
</script>
<style lang="stylus" scoped>
.wrapper >>> .van-hairline--top-bottom::after
  border-width: 0
.wrapper >>> .van-cell-group
  text-align center
  margin-top 20px
  .van-cell
    margin-bottom: .2rem;
    width: 98%;
    margin: 0 auto;
    border-radius: 5px;
    &:not(:last-child)::after
      right 15px
  .van-field__label
    max-width 60px
    text-align left
    padding-left .1rem
  .van-button
    margin-top .5rem
    line-height .4rem
    width 90%
    height .4rem
  .van-field__error-message
    position absolute
    top 0
    right .18rem
.wrapper
  position relative
  background #efefef
  .background-img
    height 3rem
    background-image: linear-gradient(-225deg, #0000001a, #032151);
  .logo
    position absolute
    left 50%
    top 20%
    margin-left -40px
    width 80px
    height 80px
  .input-area
    position absolute
    left 50%
    top 50%
    margin-top .2rem
    margin-left -1.6rem
    border-radius .05rem
    width 3.2rem
    height 4.4rem
    background #fff
    box-shadow 1px 1px 10px #BDBFFF
</style>


