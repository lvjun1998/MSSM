import Vue from 'vue'
// 引入elementui的组件 和 样式
// 引入axios
import axios from 'axios'

import ElementUI from 'element-ui'; // 组件文件（js）
import 'element-ui/lib/theme-chalk/index.css'; // 样式文件
// 解构引入组件
import { Message } from 'element-ui';
import App from './App.vue'
import router from './router'

// 引入公用样式
import '@/styles/common.less';

// 注册（使用）elementui
Vue.use(ElementUI);
//把axios挂在vue原型上，所有的vue实例对象共享
Vue.prototype.axios = axios;
// 全局路由守卫 拦截所有路由
router.beforeEach((to, from, next) => {
  // 获取token
  const token = window.localStorage.getItem('token');
  // 有token
  if (token) {
    // 直接放行
    next();
  } else {  // 否则是没有
    // 如果去的是登录页
    if (to.path === '/login') {
      // 直接放行
      next();
    } else {
      // 如果去的是其他页,跳转到登录页
      Message.error('请登录以后再操作！')
      // 跳转到登录页
      return next({"path": "/login"})
    }
  }
})
//阻止生产提示
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
