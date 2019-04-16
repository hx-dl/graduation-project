import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/home/Home.vue'
import MyArticle from './views/article/Article.vue'
import User from './views/user/index.vue'
import Login from './views/login/Index.vue'

Vue.use(Router)
var router = new Router({
  mode: 'history',
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

export default router
