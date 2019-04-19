<template>
  <div class="list">
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <van-cell
          v-for="item in list"
          :key="item.id"
          @click="toArticle(item.id)"
        >
          <div class="content-cover">
            <img class="cover-img" :src="item.coverImg">
          </div>
          <div class="content-desc">
            <h1 class="title">{{item.title}}</h1>
            <div class="desc">{{item.description}}</div>
            <van-tag class="tag" color="#f2826a" plain>{{item.tag}}</van-tag>
          </div>
        </van-cell>
      </van-list>
    </van-pull-refresh>
  </div>
</template>
<script>
export default {
  name: 'ArticleList',
  props: {
    list: {
      type: Array,
      default: []
    }
  },
  data() {
    return {
      isLoading: false,
      loading: false,
      finished: false
    };
  },
  methods: {
    onLoad() {
      this.loading = false
      this.finished = true
    },
    onRefresh() {
      this.$root.$emit('refresh')
    },
    toArticle(id) {
      this.$router.push({ path: '/article',query: {
        id
      }})
    }
  }
}
</script>
<style lang="stylus" scoped>
@import '~@/assets/styles/mixins.styl'
.content-cover
  position relative
  width 90vw
  margin 0 auto
  height 1.75rem
  border-radius .05rem
  overflow hidden
  .cover-img
    position absolute
    width 100%
    left 50%
    top 50%
    transform translate3d(-50%,-50%,0)
    border-radius .05rem
.content-desc
  .title
    text-align center
    line-height .32rem
    font-size .16rem
    font-weight 700
  .desc
    padding .1rem
    max-height .8rem
    ellipsis()
  .tag
    position relative
    left .1rem
</style>


