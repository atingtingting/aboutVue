import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Content from '../components/content'
import Test from '../components/test'
import first from '../components/first'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/helloworld',
      name: 'HelloWorld',
      component: HelloWorld
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
