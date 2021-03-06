import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/page/HomePage'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/CatePage',
      name: 'CatePage',
      component: () => import(/* webpackChunkName: "CatePage" */ '@/page/CatePage.vue')
    }
  ]
})
