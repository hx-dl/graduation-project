<template>
  <div class="article-desc">
    <div class="article-info">
      <div class="avatar"></div>
      <div class="info">
        <span class="author-name">{{author}}</span>
        <div class="release-time">{{time}}</div>
      </div>
    </div>
    <div class="title">{{title}}</div>
    <div class="cover-img" :style="coveImg"></div>
  </div>
</template>
<script>
export default {
  name: 'ArticleDesc',
  props: {
    author: {
      type: String,
      default: '行无忌'
    },
    time: {
      type: String
    },
    title: {
      type: String,
      default: '无题'
    },
    url: {
      type: String,
      default: 'https://user-gold-cdn.xitu.io/2018/5/31/163b22358bedfe0b?imageView2/1/w/100/h/100/q/85/format/webp/interlace/1'
    }
  },
  computed: {
    coveImg() {
      return {
        'background':  `url("${this.url}")`,
        'background-size': '100% 100%'
      }
    }
  }
}
</script>
<style lang="stylus" scoped>
.article-desc
  width: 88vw;
  margin: 0 auto;
  padding .6rem 0 .2rem 0
  .article-info
    display: flex;
    align-items center
    .info
      height 100%
      .author-name
        display inline-block
        font-size .13rem
        font-weight 700
        color #333
        padding-bottom .1rem
      .release-time
        letter-spacing 1px
        font-size .1rem
        color #909090
    .avatar
      margin-right .1rem
      width .4rem
      height .4rem
      border-radius 50%
      background url("../../../assets/imgs/avatar.jpg")
      background-size: 100% 100%
  .cover-img
    overflow hidden
    height 0
    margin-top .2rem
    padding-bottom 1.5rem
    width 100%
    border-radius .05rem
    background url("~@/assets/imgs/banner.jpg")
    background-size: 100% 100%
  .title
    display block
    padding-top .2rem
    font-weight 700
    text-align center
    font-size: 0.24rem;
    line-height: .24rem;
</style>


