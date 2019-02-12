import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Login',
      name: 'Login',
      component: () => import('./views/Login/Login.vue')
    },
    {
      path: '/',  // 路径
      component: () => import('./views/Index/Index.vue'),  // 引入后端首页组件
    }
  ]
})
