<template>
  <div class="user">
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
  }
}
</script>
<style lang="stylus" scoped>
</style>


