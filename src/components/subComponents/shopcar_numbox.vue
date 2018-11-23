<template>
  <div class="mui-numbox" data-numbox-min='1' style="height:25px;">
    <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
    <input id="test" class="mui-input-numbox" type="number" :value="initcount" 
     ref="numbox"    @change="countChaged"      readonly/>
    <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
  </div>

  <!-- 分析： 子组件什么时候把 数据传递给父组件 -->
  <!--  -->
</template>

<script>
import mui from "../../lib/mui/js/mui.min.js";

export default {
  mounted() {
    // 初始化数字选择框组件
    mui(".mui-numbox").numbox();
  },
  methods: {
    countChaged() {
      this.$store.commit("updateCar", {
        id: this.goodId,
        count: this.$refs.numbox.value
      });
    }
  },
  props: ["initcount", "goodId"]
};
</script>

<style lang="scss" scoped>
</style>
