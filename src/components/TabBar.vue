<template>
  <div class="tabbar" v-if="showTabBar">
    <van-tabbar v-model="active">
      <van-tabbar-item icon="home-o" @click="handleClick('fontend')">前端</van-tabbar-item>
      <van-tabbar-item icon="bookmark-o" info="" @click="handleClick('tags')">归档</van-tabbar-item>
      <van-tabbar-item icon="manager-o" info="" @click="handleClick('my')">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
export default {
  name: 'home',
  data() {
    return {
      active: 0
    }
  },
  computed: {
    showTabBar() {
      return this.$route.name !== 'login'
    }
  },
  methods: {
    handleClick(str) {
      switch(str) {
        case 'fontend': this.$router.push({
          path: '/home'
        });break
        case 'tags': this.$router.push({
          path: '/tags'
        });break
        case 'my': this.$router.push({
          path: '/user'
        });break
      }
    }
  }
}
</script>
<style lang="stylus" scoped>
.tabbar
  position fixed
  bottom 0
  width 100%
  height 0
  padding-top .5rem
</style>


