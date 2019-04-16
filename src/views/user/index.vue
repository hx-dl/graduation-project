<template>
  <div class="user">
    <avatar/>
  </div>
</template>
<script>
import Avatar from './components/Avatar.vue'
export default {
  name: 'user',
  components: {
    Avatar
  },
  data() {
    
  }
}
</script>
<style lang="stylus" scoped>
.user
  .userinfo
    width 100%
    height 1rem
    background url('~../../assets/imgs/banner.jpg') center no-repeat
    background-size cover
</style>


