<template>
  <div class="edit-wrapp">
    <van-nav-bar title="修改文章" left-arrow @click-left="goBack" />
    <van-field v-model="article.title" label="标题"/>
    <van-field v-model="article.tag" label="标签"/>
    <van-field v-model="article.time" label="日期"/>
    <van-field v-model="article.content" type="textarea" placeholder="请输入文章内容" class="content"/>
    <div class="footer">
      <van-button size="small" type="danger" @click="handleSaveClick">删除文章</van-button>
      <van-button size="small" type="primary" @click="handleSaveClick">保存修改</van-button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Manage',
  data() {
    return {
      article: {
        title: '',
        tag: '',
        time: '',
        content: ''
      }
    }
  },
  async mounted() {
    this.article = await API.getContent(this.$route.query.id,'edit')
  },
  async activated () {
    this.article = await API.getContent(this.$route.query.id,'edit')
  }, 
  methods: {
    goBack() {
      this.$router.go(-1)
    },
    handleDeleteClick() {
      let article = AV.Object.createWithoutData('Article', this.$route.query.id)
      article.destroy().then( success => { // 删除成功
        this.$toast.success({ duration: 1000, message: '删除成功' })
        this.$router.go(-1)
      }, error => { // 删除失败
        this.$toast.success({ duration: 1000, message: '删除失败' })
      })
    },
    handleSaveClick() {
      let article = AV.Object.createWithoutData('Article', this.$route.query.id)
      article.set('title', this.article.title)
      article.set('tag', this.article.tag)
      article.set('time', this.article.time)
      article.set('content', this.article.content)
      article.save().then( todo => {  // 修改成功
        this.$toast.success({ duration: 1000, message: '修改成功' })
      })
    }
  }
}
</script>
<style lang="stylus" scoped>
.edit-wrapp >>> .van-cell
  line-height 1.5
  color #1989fa
  .van-field__label
    max-width .45rem
.edit-wrapp
  position relative
  .content >>> .van-field__control
    min-height 4rem
  .content
    width: 100%
    box-sizing: border-box
    height: 4rem
    font-size: .16rem
  .footer
    display flex
    width 100%
    justify-content space-around
    position fixed
    bottom .3rem
</style>


