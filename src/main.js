// 入口文件
import Vue from 'vue'
//导入app组件
import app from './App.vue'
//按需导入mint-ui
// import { Header, Swipe, SwipeItem, Button, Lazyload } from 'mint-ui';
// Vue.component(Header.name, Header);
// //2.2注册轮播组件
// Vue.component(Swipe.name, Swipe);
// Vue.component(SwipeItem.name, SwipeItem);
// Vue.component(Button.name, Button);
// Vue.use(Lazyload);
//全局导入mintui
import MintUI from 'mint-ui'
Vue.use(MintUI);
import 'mint-ui/lib/style.css'

//试用vue-preview插件
import vuePicturePreview from 'vue-picture-preview'
Vue.use(vuePicturePreview);
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
Vue.use(VueResource);
// Vue.http.options.root = 'http://www.escook.cn:3000/';


var vm = new Vue({
  el: '#app',
  data: {

  },
  render: c => c(app),
  router  // 将路由挂载到VM实例上
})