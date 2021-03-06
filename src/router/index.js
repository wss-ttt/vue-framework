import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/test',
      name: 'test',
      component: resovle => require(['@/views/000-test.vue'], resovle)
    },
    {
      path: '/index',
      name: 'index',
      component: resovle => require(['@/views/index.vue'], resovle)
    },
    {
      path: '/tabSwitchPage',  // 测试tab切换组件的测试页面
      name: 'tabSwitchPage',
      component: resovle => require(['@/views/001-tabSwitchPage.vue'], resovle)
    },
    {
      path: '/tablePage',  // 测试table组件的测试页面
      name: 'tablePage',
      component: resovle => require(['@/views/002-tablePage.vue'], resovle)
    },
    {
      path:'/001-test',
      name:'001-test',
      component: resovle => require(['@/test/001-test.vue'], resovle)
    },
    {
      path:'/003-cardPage',
      name:'003-cardPage',
      component: resovle => require(['@/views/003-cardPage.vue'], resovle)
    },
    {
      path:'/004-drawerPage',
      name:'004-drawerPage',
      component: resovle => require(['@/views/004-drawerPage.vue'], resovle)
    },
    {
      path:'/005-dialogPage',
      name:'005-dialogPage',
      component: resovle => require(['@/views/005-dialogPage.vue'], resovle)
    },
  ]
})
