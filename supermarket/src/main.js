import Vue from 'vue'
// 引入elementui的组件 和 样式
import ElementUI from 'element-ui'; // 组件文件（js）
import 'element-ui/lib/theme-chalk/index.css'; // 样式文件
import App from './App.vue'
import router from './router'

// 引入公用样式
import '@/styles/common.less';

// 注册（使用）elementui
Vue.use(ElementUI);
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
