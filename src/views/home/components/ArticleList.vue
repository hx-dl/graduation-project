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
          v-for="(item,index) in list"
          :key="item.id"
          @click="toArticle(item.id)"
        >
          <div class="content-wrapper" >
            <div class="content-left">
              <h1 class="title">{{item.title}}</h1>
              <div class="desc">{{item.description}}</div>
              <van-tag color="#f2826a" plain>{{item.tag}}</van-tag>
            </div>
            <div class="content-right">
              <img class="cover-img" v-lazy="item.coverImg" alt="文章配图" @click="preview(index)">
            </div>
          </div>
        </van-cell>
      </van-list>
    </van-pull-refresh>
  </div>
</template>
<script>
import { ImagePreview } from 'vant';
export default {
  name: '',
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
      console.log(1)
      this.loading = false
      this.finished = true
    },
    onRefresh() {
      console.log('正在刷新')
      setTimeout(() => {
        this.isLoading = false
      },1000)
    },
    preview(index) {
      let imgArr = []
      this.list.forEach(item => {
        if(item.coverImg) imgArr.push(item.coverImg)
      })
      ImagePreview({
        images: imgArr,
        startPosition: index
      })
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
.content-wrapper
  display flex
  flex-direction row
  justify-content space-between
  padding .1rem .05rem
  .content-left
    max-width 2.5rem
    .title
      line-height .24rem
      font-size .2rem
      font-weight 700
      ellipsis()
    .desc
      padding .1rem .05rem .1rem .05rem
      box-sizing border-box
      max-width 2rem
      max-height 1.3rem
      ellipsis()
  .content-right
    position relative
    width 1rem
    height .8rem
    border-radius .05rem
    overflow hidden
    .cover-img
      position absolute
      left 50%
      top 50%
      transform translate3d(-50%,-50%,0)
      height 100%
</style>


