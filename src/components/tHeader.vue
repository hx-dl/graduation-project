<template>
  <div class="header">
    <van-nav-bar 
      :title="title" 
      left-arrow 
      left-text="返回"
      right-text="分享"
      @click-left="goBack"
      @click-right="share"
    >
      <div name="none" slot="left" v-if="homePage" />
      <div name="none" slot="right" v-if="homePage" />
    </van-nav-bar>
  </div>
</template>
<script>
export default {
  name: 'Header',
  data() {
    return {
      title: '晨风的博客',
      homePage: true
    }
  },
  watch: {
    '$route.path': {
      handler(route) {
        if(route === '/home') {
          this.homePage = true
          this.title = '晨风的博客'
        }else {
          this.homePage = false
          this.title = '文章标题'
        }
      },
      immediate: true
    }
  },
  methods: {
    goBack() {
      this.$router.go(-1)
    },
    share() {
      console.log('点击分享')
    }
  }
}
</script>
<style lang="stylus" scoped>

</style>


