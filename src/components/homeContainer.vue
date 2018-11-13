<template>
  <div>
    <!-- 制作轮播图 -->
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="item in lunbotulist" :key="item.location">
        <img :src="item.location" alt="">
        </mt-swipe-item>
     
    </mt-swipe>
    <!-- 6宫格 -->
        <ul class="mui-table-view mui-grid-view mui-grid-9">
          <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                  <img src="../images/menu1.png" alt="">
                  <div class="mui-media-body">新闻资讯</div></a></li>
          <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <img src="../images/menu2.png" alt="">
                  <div class="mui-media-body">图片分享</div></a></li>
          <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <img src="../images/menu3.png" alt="">
                  <div class="mui-media-body">商品购买</div></a></li>
          <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <img src="../images/menu4.png" alt="">
                  <div class="mui-media-body">留言反馈</div></a></li>
          <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <img src="../images/menu5.png" alt="">
                  <div class="mui-media-body">视频专区</div></a></li>
          <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <img src="../images/menu6.png" alt="">
                  <div class="mui-media-body">联系我们</div></a></li>
          
      </ul> 
   
  </div>
</template>
<script>
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      lunbotulist: [
        { location: "../../src/images/h01.jpg" },
        { location: "../../src/images/h02.jpg" },
        { location: "../../src/images/h03.jpg" },
        { location: "../../src/images/h04.jpg" },
        { location: "../../src/images/h05.jpg" }
      ]
    };
  },
  methods: {}
};
</script>
<style lang="scss" scoped>
.mint-swipe {
  height: 200px;
  img {
    width: 100%;
    height: 100%;
  }
}
//六宫格样式
.mui-grid-view.mui-grid-9 {
  background-color: #fff;
  border: 0;
  img {
    width: 60px;
  }
}
.mui-grid-view.mui-grid-9 .mui-table-view-cell {
  border: 0;
  font-size: 13px;
}
</style>

