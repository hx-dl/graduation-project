<template>
  <div id="app">
      <router-view/>
  </div>
</template>
<script>
import tHeader from './components/tHeader.vue'
import TabBar from './components/TabBar.vue'
export default {
  name: 'App',
  components: {
    tHeader,
    TabBar
  }
}
</script>
<style lang="stylus">

</style>


