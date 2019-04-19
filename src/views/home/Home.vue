<template>
  <div class="wrapper">
    <!-- 顶部搜索 -->
    <home-search :searchStatus="searchStatus"/>
    <!-- 主页主体 -->
    <v-touch @swipeleft="swipeLeft" @swiperight="swipeRight" class="touch">
      <div class="aside-switch" v-show="noSearch">
        <van-icon name="manager-o" class="user" @click="handleIconClick"/>
      </div>
      <van-tabs v-model="active" animated>
        <van-tab title="前端技术">
          <transition name="van-fade">
            <article-list :list="articleList" ref="fontend"/>
          </transition>
        </van-tab>
        <van-tab title="极客范" v-if="noSearch">
          <transition name="van-fade">
            <article-list :list="geekList" ref="geek"/>
          </transition>
        </van-tab>
      </van-tabs>
    </v-touch>
    <!-- 侧边栏 -->
    <home-aside ref="homeaside"/>
  </div>
</template>
<script>
import HomeSearch from  './components/HomeSearch.vue'
import HomeAside from './components/HomeAside.vue'
import ArticleList from './components/ArticleList.vue'
export default {
  name: 'home',
  components: {
    ArticleList,
    HomeSearch,
    HomeAside
  },
  computed: {
    noSearch() {
      return !this.searchStatus === true
    }
  },
  created() {
    this.getHomeInfo()
  },
  mounted() {
    this.$root.$on('refresh', this.toRefresh)
    this.$root.$on('showSearch', this.showSearch)
  },
  data() {
    return {
      active: 0,
      articleList: [],
      geekList: [],
      isLoading: false,
      searchStatus: false
    }
  },
  methods: {
    //获取首页数据
    async getHomeInfo() {
      this.articleList = await API.getArticleList('fontend')
      this.geekList = await API.getArticleList('geek')
    },
    //下拉刷新
    async toRefresh() {
      if(this.active === 0) {
        let articleList = await API.getArticleList('fontend')
        setTimeout(() => {
          this.articleList = articleList
          this.$refs.fontend.isLoading = false
        }, 500);
      }
      if(this.active === 1) {
        let geekList = await API.getArticleList('geek')
        setTimeout(() => {
          this.geekList = geekList
          this.$refs.geek.isLoading = false
        }, 500)
      }
    },
    showSearch() {
      this.searchStatus = true
    },
    //侧边栏开关
    handleIconClick() {
      this.$refs.homeaside.showAside = !this.$refs.homeaside.showAside
    },
    swipeLeft() {
      if(!this.searchStatus) {
        this.active = 1
      }
    },
    swipeRight() {
      if(!this.searchStatus) {
        this.active = 0
      }
    }
  }
}
</script>
<style lang="stylus" scoped>
.wrapper >>> .van-tabs__wrap
  position fixed
  background #fff
  .van-tabs__nav--line
    width 50vw
.wrapper
  position relative
  width 100%
  .touch
    touch-action: pan-y !important
  .aside-switch
    position fixed
    z-index 100
    top: 11px;
    right: 11px;
    width 22px
    height 22px
    border 1px solid
    border-radius 50%
    display flex
    justify-content center
    align-items center
    .user
      font-size: 22px;
</style>


