<template>
  <div>
    <!-- 制作轮播图 -->
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="item in lunbotulist" :key="item.location">
        <img :src="item.location" alt="">
        </mt-swipe-item>
     
    </mt-swipe>
  </div>
</template>
<script>
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      lunbotulist: [
        { location: "../src/lib/images/h01.jpg" },
        { location: "../src/lib/images/h02.jpg" },
        { location: "../src/lib/images/h03.jpg" },
        { location: "../src/lib/images/h04.jpg" },
        { location: "../src/lib/images/h05.jpg" }
      ]
    };
  },
  methods: {}
};
</script>
<style lang="scss" scoped>
.mint-swipe {
  height: 200px;
  .mint-swipe-item {
    background-color: red;
    &:nth-child(1) {
      background-color: rgb(172, 66, 66);
    }
    &:nth-child(2) {
      background-color: rgb(100, 172, 66);
    }
    &:nth-child(3) {
      background-color: rgb(98, 66, 172);
    }
    &:nth-child(4) {
      background-color: rgb(172, 66, 172);
    }
    &:nth-child(5) {
      background-color: rgba(201, 228, 51, 0.863);
    }
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>

