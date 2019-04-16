import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/home/Home.vue'
import MyArticle from './views/article/Article.vue'
import User from './views/user/index.vue'
import Login from './views/login/Index.vue'

Vue.use(Router)
var router = new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/user',
      name: 'user',
      component: User
    },
    {
      path: '/article',
      name: 'MyArticle',
      component: MyArticle
    }
  ]
})
router.beforeEach((to, from, next) => {
  if( to.path === '/user' && localStorage.loginedUser) {
    next()
  }else if( to.path === '/login' && localStorage.loginedUser) {
    router.push('/user')
  }else {
    router.push({path: '/login'})
  }
})

export default router
