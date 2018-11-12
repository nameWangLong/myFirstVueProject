import VueRouter from 'vue-router'

//导入路由组件
import homeContainer from './components/homeContainer.vue'
import menberContainer from './components/memberContainer.vue'
import shopCarContainer from './components/shopCarContainer.vue'
import searchContainer from './components/searchContainer.vue'


// 3. 创建路由对象
var router = new VueRouter({
  routes: [
    // 设置默认路由
    { path: '/', redirect: '/home' },
    { path: '/home', component: homeContainer },
    { path: '/member', component: menberContainer },
    { path: '/shopCar', component: shopCarContainer },
    { path: '/search', component: searchContainer }
  ],
  linkActiveClass: 'mui-active'  //默认高亮的类是 router-link-active
})

// 把路由对象暴露出去
export default router