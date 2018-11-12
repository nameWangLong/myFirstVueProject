<template>
  <div>
   <!-- 顶部 -->
   <header>
     <mt-header fixed title="快乐之源"></mt-header>
   </header>
   <!-- 路由展示区 -->
	 <div class="main_container">
		 <router-view></router-view>
	 </div>
   <!-- 底部导航切换 -->
   <footer>
     <nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item " to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item" to="/member">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="mui-tab-item" to="/shopCar">
				<span class=" mui-icon mui-icon-extra mui-icon-extra-cart">
					<span class="mui-badge">0</span>
				</span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item" to="/search">
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
.main_container {
  margin-top: 40px;
}
</style>
