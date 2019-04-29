<template>
  <van-list>
    <van-cell class="cell" @click="toManage">管理文章</van-cell>
    <van-cell class="cell" @click="logout">退出登录</van-cell>
  </van-list>
</template>
<script>
export default {
  name: 'List',
  methods: {
    logout() {
      AV.User.logOut()
      this.$router.push({path: '/home'})
    },
    toManage() {
      console.log('[管理文章]')
      this.$router.push({
        path: '/manage'
      })
    }
  }
}
</script>
<style lang="stylus" scoped>
.cell
  &:active
    background #eee
</style>


