
//初始化leancloud
export default function initLeanCloud() {
  window.AV = require('leancloud-storage')    // 存储服务
  window.Valine = require('valine')   //评论插件
  const { Realtime, TextMessage } = require('leancloud-realtime')   // 即时通讯服务
  const APP_ID = 'E510CCV8Jizd7VDQoR8XXna1-gzGzoHsz'
  const APP_KEY = 'bSR1P7PL4TpcXz97UqlMRIci'
  AV.init({
    appId: APP_ID,
    appKey: APP_KEY
  })
}