import Vue from 'vue'
import App from './App.vue'
import router from './router'
import initLeanCloud from './initLeanCloud.js'
import marked from 'marked'
import Prism from 'prismjs'
import 'prismjs/themes/prism.css'
window.renderMD = new marked.Renderer()
window.marked = marked
window.Prism = Prism
marked.setOptions({
  renderer: window.renderMD,
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: false,
  smartLists: true,
  smartypants: false,
  highlight: (code) => Prism.highlight(code, Prism.languages.javascript)
})
import './assets/styles/reset.css'
import './assets/styles/vant-modify.styl'
import VueTouch from 'vue-touch'
Vue.use(VueTouch, {name: 'v-touch'})
VueTouch.config.swipe = {
  threshold: 100 //手指左右滑动距离
}
//局部引用vant-ui
import { 
  Search, Tabbar, TabbarItem, NavBar, List, Cell, CellGroup, Tab, Tabs, PullRefresh,
  Field, Button, Notify, Toast, Icon, Lazyload, Tag, Popup, Loading, Dialog 
} from 'vant'

Vue.use(Search)
Vue.use(Field)
Vue.use(Popup)
Vue.use(Button)
Vue.use(Notify)
Vue.use(Loading)
Vue.use(Toast)
Vue.use(Icon)
Vue.use(Tag)
Vue.use(Dialog)
Vue.use(List)
Vue.use(NavBar)
Vue.use(Tabbar).use(TabbarItem)
Vue.use(Cell).use(CellGroup)
Vue.use(Tab).use(Tabs)
Vue.use(PullRefresh)
Vue.use(Lazyload, {})

initLeanCloud()

Vue.config.productionTip = false
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
