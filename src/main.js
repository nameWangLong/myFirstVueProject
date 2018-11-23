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
// 导入vuex组件
import Vuex from 'vuex'
Vue.use(Vuex);

//  创建一个变量从本地存储中获取数据】
var car = JSON.parse(localStorage.getItem('car') || '[]');
// 创建vuex.store实例
var store = new Vuex.Store({
  state: {
    car: car
    // 存放购物车商品对象 {id:商品id,count ,price ,selected}
  },
  mutations: {
    addToCar(state, goodinfo) {
      //先判断之前购物车是否有该商品，如果有，将数量相加，没有则push进来
      var flag = false;
      state.car.some(item => {
        if (item.id == goodinfo.id) {
          item.count += parseInt(goodinfo.count)
          flag = true
          return true
        }
      })
      if (!flag) {
        state.car.push(goodinfo);
      }
      //将car中的数据存储在localStorage中
      localStorage.setItem('car', JSON.stringify(state.car));

    },
    updateCar(state, goodinfo) {
      state.car.some(item => {
        if (item.id == goodinfo.id) {
          item.count = parseInt(goodinfo.count);
          return;
        }
      })
      // 将最新的数据保存在本地存储中
      localStorage.setItem('car', JSON.stringify(state.car));

    },
    removeFromCar(state, id) {
      state.car.some((item, i) => {
        if (item.id == id) {
          state.car.splice(i, 1);
          return true;
        }
      })
      // 将最新的数据存在本地存储中.
      localStorage.setItem('car', JSON.stringify(state.car));

    },
    updateGoodSelected(state, goodinfo) {
      state.car.some(item => {
        if (item.id == goodinfo.id) {
          item.selected = goodinfo.selected;
        }
      })
      // 将最新的数据存在本地存储中.
      localStorage.setItem('car', JSON.stringify(state.car));

    }

  },
  getters: {
    // 相当于计算属性，也相当于filter
    getAllCount(state) {
      var c = 0;
      state.car.forEach(item => {
        c += parseInt(item.count);

      })
      return c

    },
    getGoodCount(state) {
      var o = {};
      state.car.forEach(iteme => {
        o[iteme.id] = iteme.count;
      })
      return o;
    },
    getGooodSelected(state) {
      var o = {};
      state.car.forEach(item => {
        o[item.id] = item.selected;
      })
      return o;
    },
    getGoodCountAndTotalprice(state) {
      var o = {
        count: 0,
        totalPrcie: 0
      }
      state.car.forEach(item => {
        if (item.selected) {
          o.count += parseInt(item.count);
          o.totalPrcie += item.count * item.price;
        }
      })
      return o;
    }
  }
})


var vm = new Vue({
  el: '#app',
  data: {

  },
  render: c => c(app),
  router,  // 将路由挂载到VM实例上
  store   //注册vuex.store
})