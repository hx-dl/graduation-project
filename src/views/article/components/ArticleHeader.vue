<template>
  <van-nav-bar
    class="header"
    :title="title" 
    left-arrow
    right-text="分享"
    @click-left="goBack"
    @click-right="share"
  />
</template>
<script>
export default {
  name: 'ArticleHeader',
  props: {
    title: {
      type: String,
      default: ''
    }
  },
  methods: {
    goBack() {
      this.$router.go(-1)
    },
    share() {
      window.plugins.socialsharing.share('文章分享',this.title,null,`https://hackerhanxi.gitee.io/bsblog/#/article?id=${this.$route.query.id}`)
    }
  }
}
</script>
<style lang="stylus" scoped>
.header
  position fixed
  width 100%
</style>


