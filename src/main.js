// 入口文件
import Vue from 'vue'
//导入app组件
import app from './App.vue'
//按需导入mint-ui
import { Header } from 'mint-ui';
Vue.component(Header.name, Header);

//导入mui样式
import './lib/mui/css/mui.css'

var vm = new Vue({
  el: '#app',
  data: {

  },
  render: c => c(app)
})