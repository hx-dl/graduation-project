<template>
  <div class="article">
    <article-header :title="currentArticle.title"/>
    <!-- 文章描述 -->
    <article-desc 
      :time="currentArticle.time" 
      :title="currentArticle.title" 
      :url="currentArticle.coverImg" 
      v-if="currentArticle.content"
    />
    <!-- 文章内容 -->
    <transition name="van-fade">
      <div class="content" v-html="currentArticle.content" v-if="currentArticle.content"></div>
    </transition>
    <!-- 评论内容 -->
    <ArticleComment :id="$route.query.id" v-if="currentArticle.content"/>
    <van-loading class="loading" color="#1989fa" size="20px" v-if="showLoading"/>
  </div>
</template>
<script>
import { ImagePreview } from 'vant'
import ArticleDesc from './components/ArticleDesc.vue'
import ArticleHeader from './components/ArticleHeader.vue'
import ArticleComment from './components/ArticleComment.vue'
export default {
  name: 'myArticle',
  components: {
    ArticleDesc,
    ArticleComment,
    ArticleHeader
  },
  watch:{
    currentArticle(val) {
      if(val.content) {
        setTimeout(() => this.initPreview(), 20)
      }
    }
  },
  data() {
    return {
      currentArticle: {},   //当前文章内容
      imgArr: [],   //文章中所有的图片
      showLoading: true
    }
  },
  created() {
    this.getArticleContent()
  },
  methods: {
    initPreview() {
      let imgNodes = document.querySelectorAll('.article img')
      imgNodes.forEach( (item,index) => { this.imgArr.push(item.src) })
      imgNodes.forEach((item, index) => {
        item.addEventListener('click', () => {
          ImagePreview({ images: this.imgArr, startPosition: index })
        })
      })
    },
    //获取文章内容
    async getArticleContent() {
      this.currentArticle = await API.getContent(this.$route.query.id)
      this.showLoading = false
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
    max-width 88vw
    display inline-block
    font-size .87em
    padding .065em .4em
    overflow-x auto
    -webkit-overflow-scrolling touch
.article >>> h2
  font-size .2rem
  code
    background-color #fff5f5
    color #ff502c
    display inline-block
    max-width 88vw
    font-size .87em
    padding .065em .4em
    overflow-x: auto
    -webkit-overflow-scrolling: touch
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
      display inline-block
      max-width 88vw
      font-size .87em
      padding .065em .4em
      overflow-x: auto
      -webkit-overflow-scrolling: touch
.article >>> li
    code
      background-color #fff5f5
      color #ff502c
      display inline-block
      max-width 88vw
      font-size .87em
      padding .065em .4em
      overflow-x: auto
      -webkit-overflow-scrolling: touch
.article >>> a
    color #0269c8
    border-bottom 1px solid #d1e9ff
.article >>> img
  width 100%
  margin .1rem 0
</style>


