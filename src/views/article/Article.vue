<template>
  <div class="article">
    <article-header :title="currentArticle.title" />
    <article-desc :time="currentArticle.time" :title="currentArticle.title" v-if="currentArticle.content"/>
    <div class="content" v-html="currentArticle.content" v-if="currentArticle.content" v></div>
    <comment :id="$route.query.id" v-if="currentArticle.content"/>
    <van-loading class="loading" color="#1989fa" size="20px" v-if="showLoading"/>
  </div>
</template>
<script>
import { ImagePreview } from 'vant';
import getContent from '@/api/getContent.js'
import ArticleDesc from './components/ArticleDesc.vue'
import ArticleHeader from './components/ArticleHeader.vue'
import Comment from './components/Comment.vue'
export default {
  name: 'myArticle',
  components: {
    ArticleDesc,
    Comment,
    ArticleHeader
  },
  data() {
    return {
      currentArticle: {},
      imgArr: [],
      showLoading: true
    }
  },
  created() {
    getContent(this.$route.query.id, (res) => {
      this.currentArticle = res
      this.initPreview()
      this.showLoading = false
    })
  },
  methods: {
    initPreview() {
      this.$nextTick(() => {
        let imgNodes = document.querySelectorAll('.article img')
        console.log(this.imgNodes)
        imgNodes.forEach( (item,index) => {
          this.imgArr.push(item.src)
        })
        imgNodes.forEach((item, index) => {
          item.addEventListener('click', () => {
            ImagePreview({
              images: this.imgArr,
              startPosition: index
            })
          })
        })
      })
    }
  }
}
</script>
<style lang="stylus" scoped>
.article
  font-size .13rem
  .loading
    position fixed
    top .22rem
    left 50%
    z-index 1
    transform translate3d(-50%, -50%, 0)
  .content
    width 88vw
    margin 0 auto
    word-break: break-word
    line-height: 1.75
    font-weight: 400
    font-size: .15rem
.article >>> h1,h2,h3,h4,h5,h6,b,strong
  line-height: .5em;
  margin: 1.1em 0;
  padding-bottom 12px
  border-bottom 1px solid #ececec
.article >>> h1
  font-size .24rem
  code
    background-color #fff5f5
    color #ff502c
    display inline
    font-size .87em
    padding .065em .4em
.article >>> h2
  font-size .2rem
  code
    background-color #fff5f5
    color #ff502c
    display inline
    font-size .87em
    padding .065em .4em
.article >>> h3
  font-size .18rem
.article >>> h4
  font-size .16rem
  
.article >>> p
    display: block
    margin-block-start 1em
    margin-block-end 1em
    code
      background-color #fff5f5
      color #ff502c
      display inline
      font-size .87em
      padding .065em .4em
.article >>> a
    color #0269c8
    border-bottom 1px solid #d1e9ff
.article >>> img
  width 100%
  margin .1rem 0
</style>


