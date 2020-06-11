import Vue from 'vue'
import Router from 'vue-router'
import IndexApp from '@/components/indexApp'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'IndexApp',
      component: IndexApp
    },
    {
      path: '/:title',
      name: 'IndexApp',
      component: IndexApp
    },
    {
      path: '/:title/:author',
      name: 'IndexApp',
      component: IndexApp
    }
  ]
})
