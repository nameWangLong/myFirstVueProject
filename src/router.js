import VueRouter from 'vue-router'

//导入路由组件
import homeContainer from './components/homeContainer.vue'
import menberContainer from './components/memberContainer.vue'
import shopCarContainer from './components/shopCarContainer.vue'
import searchContainer from './components/searchContainer.vue'
import newsList from './components/news/newsList.vue'
import newsinfo from './components/news/newsinfo.vue'
import photolist from './components/photo/photoList.vue'
import photoinfo from './components/photo/photoinfo.vue'
import goodsList from './components/good/goodsList.vue'
import goodsinfo from './components/good/goodsinfo.vue'
import goodIntroduce from './components/good/goodIntroduce.vue'
import goodComent from './components/good/goodComent.vue'


// 3. 创建路由对象
var router = new VueRouter({
  routes: [
    // 设置默认路由
    { path: '/', redirect: '/home' },
    { path: '/home', component: homeContainer },
    { path: '/member', component: menberContainer },
    { path: '/shopCar', component: shopCarContainer },
    { path: '/search', component: searchContainer },
    { path: '/home/newsList', component: newsList },
    { path: '/home/newsinfo', component: newsinfo },
    { path: '/home/photoList', component: photolist },
    { path: '/home/photoinfo', component: photoinfo },
    { path: '/home/goodsList', component: goodsList },
    { path: '/home/goodsinfo/:id', component: goodsinfo },
    { path: '/home/goodIntroduce/:id', component: goodIntroduce, name: 'goodIntroduce' },
    { path: '/home/goodComent/:id', component: goodComent, name: 'goodComent' }



  ],
  linkActiveClass: 'mui-active'  //默认高亮的类是 router-link-active
})

// 把路由对象暴露出去
export default router