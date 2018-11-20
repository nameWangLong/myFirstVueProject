<template>
  <div>
   <!-- 顶部 -->
   <header>
     <mt-header fixed title="欢乐之家"></mt-header>
   </header>
   <!-- 路由展示区 -->
	 <div class="main_container">
		  <transition >
				 <router-view></router-view>
         
			</transition>
      <lg-preview></lg-preview>
		
	 </div>
   <!-- 底部导航切换 -->
   <footer>
     <nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item-wlong " to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item-wlong" to="/member">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="mui-tab-item-wlong" to="/shopCar">
				<span class=" mui-icon mui-icon-extra mui-icon-extra-cart">
					<span class="mui-badge" id="badge">0</span>
				</span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item-wlong" to="/search">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		</nav>
   </footer>
  </div>
</template>

<script>
</script>


<style lang="scss" scoped>
* {
  touch-action: pan-y;
}
.main_container {
  margin-top: 40px;
  // 设置动画左右切换组件不会显示滚动条
  margin-bottom: 50px;
  overflow-x: hidden;
}

// 定义动画
.v-enter {
  opacity: 0;
  transform: translateX(100%);
}
.v-leave-to {
  opacity: 0;
  transform: translateX(-100%);
  position: absolute;
}
.v-enter-active,
.v-leave-active {
  transition: all 0.5s ease;
}
//修改mui-tat-bar的样式
.mui-bar-tab .mui-tab-item-wlong.mui-active {
  color: #007aff;
}
.mui-bar-tab .mui-tab-item-wlong {
  display: table-cell;
  overflow: hidden;
  width: 1%;
  height: 50px;
  text-align: center;
  vertical-align: middle;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: #929292;
}
.mui-bar-tab .mui-tab-item-wlong .mui-icon {
  top: 3px;
  width: 24px;
  height: 24px;
  padding-top: 0;
  padding-bottom: 0;
}
.mui-bar-tab .mui-tab-item-wlong .mui-icon ~ .mui-tab-label {
  font-size: 11px;
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
