import Vue from 'vue'
import Router from 'vue-router'
// 导入5组件
import home from '@/components/home/home'
import singer from '@/components/singer.vue'
import ranking from '@/components/ranking.vue'
import seek from '@/components/seek.vue'
import mine from '@/components/mine.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/singer',
      name: 'singer',
      component: singer
    },
    {
      path: '/ranking',
      name: 'ranking',
      component: ranking
    },
    {
      path: '/seek',
      name: 'seek',
      component: seek
    },
    {
      path: '/mine',
      name: 'mine',
      component: mine
    }
  ]
})
