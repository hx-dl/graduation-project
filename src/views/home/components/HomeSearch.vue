<template>
  <transition name="van-slide-down">
    <form action="/" class="search" v-if="searchStatus">
      <van-search v-model="searchStr" placeholder="请输入文章关键字" show-action  
        @search="handleInput"
        @cancel="onCancel"
        @clear="handleClear"
        @input="handleInput"
      />
    </form>
  </transition>
</template>
<script>
export default {
  name: 'HomeSearch',
  props: {
    searchStatus: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      searchStr: ''
    }
  },
  methods: {
    onCancel() {
      this.$parent.searchStatus = false
      this.$parent.getHomeInfo()
    },
    //处理搜索
    handleInput() {
      if(this.searchStr) {
        if(this.timer) clearTimeout(this.timer)
        this.timer = setTimeout(async () => {
          this.$parent.articleList = await API.getArticleList('all',this.searchStr,true)
        }, 500)
      }
    },
    handleClear() {
      this.$parent.getHomeInfo()
    }
  }
}
</script>
<style lang="stylus" scoped>
.search
  position fixed
  z-index 100
  width 100%
</style>


