<template>
  <div class="manage">
    <van-nav-bar class="header" title="文章管理" left-arrow @click-left="goBack" />
    <van-list  class="list" v-model="loading" :finished="finished" @load="onLoad">
      <van-cell v-for="item in articleList" :key="item.id" >
        {{item.title}}
        <van-button type="info" class="edit-btn" @click="handleEditClick(item.id)">编辑</van-button>
      </van-cell>
    </van-list>
  </div>
</template>
<script>
export default {
  name: 'Manage',
  data() {
    return {
      show: false,
      loading: false,
      finished: true,
      articleList: []
    }
  },
  async mounted() {
    this.articleList = await API.getOwnArticle()
  },  
  methods: {
    goBack() {
      this.$router.go(-1)
    },
    onLoad() {
      this.loading = false
      this.finished = true
    },
    async handleEditClick(id) {
        this.show = !this.show
        this.$router.push({
          path: '/edit',
          query: {
            id
          }
        })
    }
  }
}
</script>
<style lang="stylus" scoped>
.header
  position fixed
  width 100%
.list
  padding-top .46rem
.edit-btn
  float right
  height .3rem
  line-height .3rem
.edit-content
  width 80%
  height 80%
  overflow-y auto
  border-radius .06rem
.input-area
  position relative
  padding-top .1rem
  .content
    min-height 3rem
    max-height 3.5rem
    margin .1rem
    border 1px solid
    border-radius .05rem
    width auto
  .save-btn
    position absolute
    display block
</style>


