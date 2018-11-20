<template>
 <div>
    <!-- 轮播图组件 -->
    <mt-swipe :auto="4000" :class="{'autoheight':isautoheight}">
      <mt-swipe-item v-for="item in lunbotulist" :key="item.location">
        <img :src="item.location" alt="" :class="{'full':isfull}">
        </mt-swipe-item>
     
    </mt-swipe>
   </div>  
</template>
<script>
export default {
  // 父组件向子组件传值
  props: ["lunbotulist", "isfull", "isautoheight"]
};
</script>
<style lang="scss" scoped>
.mint-swipe {
  height: 200px;
  text-align: center;
  img {
    height: 100%;
  }
}
.full {
  width: 100%;
}
.autoheight {
  height: 360px;
}
</style>


