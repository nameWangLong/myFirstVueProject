<template>
  <div>
    <!-- 制作轮播图 -->
    <swip :lunbotulist="lunbotulist" :isfull="true"></swip>
    <!-- 6宫格 -->
        <ul class="mui-table-view mui-grid-view mui-grid-9">
          <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
            <router-link to="/home/newsList">
                  <img src="../images/menu1.png" alt="">
                  <div class="mui-media-body">新闻资讯</div>
            </router-link></li>
          <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/photoList">
                    <img src="../images/menu2.png" alt="">
                  <div class="mui-media-body">图片分享</div></router-link></li>
          <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/goodsList">
                    <img src="../images/menu3.png" alt="">
                  <div class="mui-media-body">商品购买</div></router-link></li>
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
// 导入轮播图组件
import swip from "./subComponents/swip.vue";
export default {
  data() {
    return {
      lunbotulist: [
        {
          location:
            "//m.360buyimg.com/mobilecms/jfs/t27679/88/2027396411/96705/71532ba7/5bf61ddaNd6de5921.jpg!cr_1125x549_0_72"
        },
        {
          location:
            "//m.360buyimg.com/mobilecms/s1125x690_jfs/t28222/353/384389987/246164/1fcab992/5bf24abdN78c4fbb6.jpg!cr_1125x549_0_72!q70.jpg.dpg"
        },
        {
          location:
            "//m.360buyimg.com/mobilecms/jfs/t28498/110/396466340/105109/ae4dc5b2/5bf22146N0c83c836.jpg!cr_1125x549_0_72"
        },
        {
          location:
            "//m.360buyimg.com/mobilecms/jfs/t27679/88/2027396411/96705/71532ba7/5bf61ddaNd6de5921.jpg!cr_1125x549_0_72"
        },
        {
          location:
            "//m.360buyimg.com/mobilecms/s1125x690_jfs/t29128/141/466185370/189971/da7042ae/5bf3edb6N8ad8636a.jpg!cr_1125x549_0_72!q70.jpg.dpg"
        }
      ]
    };
  },
  methods: {},
  components: {
    swip
  }
};
</script>
<style lang="scss" scoped>
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

