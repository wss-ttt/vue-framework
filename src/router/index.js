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
      path:'/index',
      name:'index',
      component:resovle=>require(['@/views/index.vue'],resovle)
    },
    {
      path:'/tabSwitchPage',  // 测试tab切换组件的测试页面
      name:'tabSwitchPage',
      component:resovle=>require(['@/views/tabSwitchPage.vue'],resovle)
    }
  ]
})
