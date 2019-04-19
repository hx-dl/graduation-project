<template>
  <div class="user">
    <avatar/>
    <list/>
  </div>
</template>
<script>
import Avatar from './components/Avatar.vue'
import List from './components/List.vue'
export default {
  name: 'user',
  components: {
    Avatar, List
  }
}
</script>
<style lang="stylus" scoped>
</style>


