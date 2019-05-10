<template>
  <div class="user">
    <van-icon name="arrow-left" class="back-icon" @click="handleBackClick"/>
    <user-info/>
    <list/>
  </div>
</template>
<script>
import UserInfo from './components/UserInfo.vue'
import List from './components/List.vue'
export default {
  name: 'user',
  components: {
    UserInfo, List
  },
  methods: {
    handleBackClick() {
      this.$router.go(-1)
    }
  }
}
</script>
<style lang="stylus" scoped>
.back-icon
  position fixed
  top .1rem
  left .1rem
  color #999999c2
  z-index 1111
</style>


