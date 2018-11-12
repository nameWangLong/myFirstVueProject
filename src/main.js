// 入口文件
import Vue from 'vue'
//导入app组件
import app from './App.vue'
//按需导入mint-ui
import { Header, Swipe, SwipeItem } from 'mint-ui';
Vue.component(Header.name, Header);
//2.2注册轮播组件
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);


//导入mui样式
import './lib/mui/css/mui.css'
//导入Mui扩展图标字体样式
import './lib/mui/css/icons-extra.css'

// 1.1导入路由模块
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//1.2 导入路由文件
import router from './router.js'
// 3.1导入vue-resource模块
import VueResource from 'vue-resource'
//3.2 安装模块
Vue.use(VueResource)

var vm = new Vue({
  el: '#app',
  data: {

  },
  render: c => c(app),
  router  // 将路由挂载到VM实例上
})