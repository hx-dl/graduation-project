<template>
  <div class="wrapper">
    <v-touch @swipeleft="swipeLeft" @swiperight="swipeRight" class="touch">
    <van-icon name="manager-o" class="user" @click="handleIconClick"/>
    <van-tabs v-model="active" animated>
      <van-tab title="前端技术">
        <article-list :list="articleList"></article-list>
      </van-tab>
      <van-tab title="极客范">
        <article-list :list="articleList"></article-list>
      </van-tab>
    </van-tabs>
      <van-popup v-model="show" position='right' class="popup" >
        <div class="control">
          <van-icon name="search" class="icon"/>
          快速搜索
        </div>
        <div class="control">
          <van-icon name="question-o" class="icon"/>
          交流问题
        </div>
        <div class="control" @click="manager">
          <van-icon name="apps-o" class="icon"/>
          管理中心
        </div>
        <div class="control" @click="aboutAuthor">
          <van-icon name="user-circle-o" class="icon"/>
          关于作者
        </div>
      </van-popup>
    </v-touch>
  </div>
</template>
<script>
import ArticleList from './components/ArticleList.vue'
import getArticleList from '@/api/getArticleList.js'
export default {
  name: 'home',
  components: {
    ArticleList
  },
  created() {
    this.articleList = getArticleList()
  },
  mounted() {
    
  },
  data() {
    return {
      active: 0,
      articleList: [],
      show: false
    }
  },
  methods: {
    transformData(data) {
      data.forEach(item => {
        item.image = item.image.url
      })
    },
    handleIconClick() {
      this.show = !this.show
    },
    swipeLeft() {
      this.active = 1
    },
    swipeRight() {
      this.active = 0
    },
    aboutAuthor() {
      this.$router.push({
        path: '/article',
        query: {
          id: '5cb5dce0a91c9300670355fe'
        }
      })
    },
    manager() {
      if(localStorage.loginedUser) {
        this.$router.push()
      }
    }
  }
}
</script>
<style lang="stylus" scoped>
.wrapper
  position relative
  width 100%
  .touch
    touch-action: pan-y !important
  .popup
    width 34vw
    height 100%
    background linear-gradient(180deg, #050400, #03214E)
    .control
      margin .1rem
      padding .1rem
      display flex
      flex-direction column
      text-align center
      font-size .16rem
      color #c3c3c3
      border 1px solid transparent
      &:active
        border 1px solid #c3c3c3
    .icon
      color #c3c3c3
      font-size .4rem
      margin-bottom .1rem
  .user
    position: fixed;
    z-index: 1000;
    right: .1rem;
    top: .1rem;
    font-size: .22rem;
.wrapper >>> .van-tabs__wrap
  position fixed
  background #fff
  .van-tabs__nav--line
    width 50vw
</style>


