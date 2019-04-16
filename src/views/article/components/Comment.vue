<template>
  <div id="comment"></div>
</template>
<script>
export default {
  name: 'comment',
  props: {
    id: {
      type: String
    }
  },
  mounted() {
    new Valine({
      el: '#comment' ,
      appId: 'E510CCV8Jizd7VDQoR8XXna1-gzGzoHsz',
      appKey: 'bSR1P7PL4TpcXz97UqlMRIci',
      avatar:'monsterid', 
      path: this.id,
      placeholder: '支持markdown语法哦,给条评论吧~' 
    });
  },
}
</script>
<style lang="stylus" scoped>
#comment >>> input,textarea
  font-size .14rem !important
#comment >>> *
  line-height 1.4 !important
  font-size .14rem !important
#comment >>> .veditor
  font-size .12rem
  min-height 1rem
#comment >>> .vheader
  display flex
#comment >>> .info
  display none
#comment >>> .vbtn
  padding .05rem .12rem
  font-size .2rem
  border-radius .05rem
#comment >>> .col
  font-size 0
#comment >>> .vempty
  padding .1rem
#comment >>> .vcontrol
  padding 0
#comment >>> .vpreview
  font-size .12rem
#comment >>> .vimg
  position: relative;
  top: .02rem;
  width: 0.32rem;
  height: 0.32rem;
  padding: 0;
  margin: 0 0.1rem 0 0.1rem;
#comment >>> .vcard
  padding .1rem 0 0 0
#comment >>> .vlink
  display none
#comment >>> .vcontent
  margin-bottom: .1rem
  padding 0 0.2rem 0 0
#comment >>> .vat
  position relative
  right 0.2rem
#comment >>> .vh
  padding-bottom  0
#comment >>> .vquote
  margin-top .1rem
  padding 0
#comment >>> .vinfo
  padding .1rem
#comment >>> .vtime
  margin-right 0
#comment >>> .vnick
  margin-right 0
</style>


