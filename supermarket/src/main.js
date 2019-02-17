import Vue from 'vue'
// 引入elementui的组件 和 样式
// 引入axios
import axios from 'axios'

import ElementUI from 'element-ui'; // 组件文件（js）
import 'element-ui/lib/theme-chalk/index.css'; // 样式文件
import App from './App.vue'
import router from './router'

// 引入公用样式
import '@/styles/common.less';

// 注册（使用）elementui
Vue.use(ElementUI);
//把axios挂在vue原型上，所有的vue实例对象共享
Vue.prototype.axios = axios;
//阻止生产提示
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
