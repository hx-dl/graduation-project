<template>
  <van-list>
    <van-cell class="cell" @click="toPublic">发布文章</van-cell>
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
    toPublic() {
      console.log('[发布文章]')
    },
    toManage() {
      console.log('[管理文章]')
    }
  }
}
</script>
<style lang="stylus" scoped>
.cell
  &:active
    background #eee
</style>


