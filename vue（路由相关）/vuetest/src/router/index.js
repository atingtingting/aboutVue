import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Content from '../components/content'
import Test from '../components/test'
import first from '../components/first'
import world1 from '../components/world/world1'
import world2 from '../components/world/world2'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/helloworld',
      name: 'HelloWorld',
      component: HelloWorld,
      children: [
        {
          path: 'world1',
          name: 'world1',
          component: world1
        },
        {
          path: 'world2',
          name: 'world2',
          component: world2
        }
      ]
    },
    {
      path: '/content/:aid', // 动态路由
      name: 'content',
      component: Content
    },
    {
      path: '/test',
      name: 'test',
      component: Test
    },
    {
      path: '/first',
      name: 'first',
      component: first
    },
    {
      path: '*',
      name: 'first',
      component: first
    }
  ]
})
