<template>
  <div class="wrapper">
    <transition name="van-slide-down">
      <form action="/" class="search" v-if="search">
        <van-search v-model="searchStr" placeholder="请输入文章关键字" show-action  
          @search="handleSearch"
          @cancel="onCancel"
          @clear="handleClear"
          @input="handleInput"
        />
      </form>
    </transition>
    <v-touch @swipeleft="swipeLeft" @swiperight="swipeRight" class="touch">
      <div class="header">
        <van-icon name="manager-o" class="user" @click="handleIconClick" v-if="!search"/>
        <van-tabs v-model="active" animated>
          <van-tab title="前端技术">
            <article-list :list="articleList" ref="articleList"></article-list>
          </van-tab>
          <van-tab title="极客范" v-if="!search">
            <article-list :list="geekList" ref="geekList"></article-list>
          </van-tab>
        </van-tabs>
      </div>
      <van-popup v-model="show" position='right' class="popup">
        <div class="control" @click="handleSearch">
          <van-icon name="search" class="icon"/>
          快速查询
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
import getGeekList from '@/api/getGeekList.js'
import Search from '@/api/search.js'
export default {
  name: 'home',
  components: {
    ArticleList
  },
  created() {
    this.articleList = getArticleList()
    this.geekList = getGeekList()
  },
  mounted() {
    this.$on('refresh', this.toRefresh)
  },
  data() {
    return {
      active: 0,
      articleList: [],
      geekList: [],
      show: false,
      searchStr: '',
      search: false
    }
  },
  methods: {
    toRefresh() {
      if(this.active = 0) {
        this.articleList = getArticleList()
        this.$refs['articleList'].isLoading = false
      }else {
        this.geekList = getGeekList()
        this.$refs['geekList'].isLoading = false
      }
    },
    handleIconClick() {
      this.show = !this.show
    },
    swipeLeft() {
      if(!this.search) {
        this.active = 1
      }
    },
    swipeRight() {
      if(!this.search) {
        this.active = 0
      }
    },
    aboutAuthor() {
      this.$router.push({
        path: '/article',
        query: {
          type: 'about',
          id: '5cb60378c8959c0075b32be9'
        }
      })
    },
    manager() {
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
    handleSearch() {
      this.handleIconClick()
      this.search = true
    },
    onCancel() {
      this.search = false
    },
    handleInput() {
      if(this.searchStr) {
        this.articleList = Search(this.searchStr)
      }
    },
    handleClear() {
      this.articleList = getArticleList()
      this.geekList = getGeekList()
    }
  }
}
</script>
<style lang="stylus" scoped>
.wrapper
  position relative
  width 100%
  .search
    position fixed
    z-index 100
    width 100%
  .touch
    touch-action: pan-y !important
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


