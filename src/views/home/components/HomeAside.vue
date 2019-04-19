<template>
  <van-popup v-model="showAside" position='right' class="popup">
    <div class="control" @click="toSearch">
      <van-icon name="search" class="icon"/>
      快速查询
    </div>
    <div class="control" @click="toManager">
      <van-icon name="apps-o" class="icon"/>
      管理中心
    </div>
    <div class="control" @click="toAbout">
      <van-icon name="user-circle-o" class="icon"/>
      关于作者
    </div>
  </van-popup>
</template>
<script>
export default {
  name: 'HomeAside',
  data() {
    return {
      showAside: false
    }
  },
  methods: {
    //快速搜索
    toSearch() {
      this.showAside = false
      this.$root.$emit('showSearch')
    },
    //管理中心
    toManager() {
      if(AV.User.current()) {
        this.$router.push({
          path: '/user'
        })
      }else {
        this.$dialog.confirm({
          message: '需要管理员权限，是否去登录'
        }).then(() => {
          this.$router.push({path: '/login'})
        }).catch(() => {})
      }
    },
    //关于作者
    toAbout() {
      this.$router.push({
        path: '/article',
        query: {
          id: '5cb9d327a673f500686e3eba'
        }
      })
    }
  }
}
</script>
<style lang="stylus" scoped>
.popup
  width 24vw
  height 100%
  background linear-gradient(180deg, #050400, #03214E)
  .control
    margin .1rem
    padding .1rem
    display flex
    flex-direction column
    text-align center
    font-size .12rem
    color #c3c3c3
    border 1px solid transparent
    &:active
      border 1px solid #c3c3c3
  .icon
    color #c3c3c3
    font-size .25rem
    margin-bottom .1rem
</style>


