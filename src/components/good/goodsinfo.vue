<template>
  <div class="goodinfo-container">
    <!-- 购物车小球动画 -->
      <transition
       @before-enter="beforeEnter"
       @enter="enter"
       @after-enter="afterEnter">
        <div class="ballShopCar" v-show="ballFlag" ref="ball">
        
      </div>
      </transition>
      
    <!-- 图片轮播区 -->
    <div class="mui-card ">
				<div class="mui-card-content">
					<div class="mui-card-content-inner lunbo">
						 <swiper :lunbotulist="lunbotulist" :isfull="true" :isautoheight="true"></swiper>
					</div>
				</div>
			</div>
     
    <!-- 商品购买区 -->
    <div class="mui-card">
				<div class="mui-card-header">{{ purchase.title}}</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
					  <p>
              市场价：<del>￥{{ purchase.prePrice }}</del> &nbsp;&nbsp;
              销售价: <span class="now_price">￥{{ purchase.nowPrice}}</span>
            </p>
              <div class="buy-acount">
                购买数量:
              <div class="mui-numbox" data-numbox-min='1' data-numbox-max='100'>
                <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
                <input id="test" class="mui-input-numbox" type="number" value="1" ref="num" 
                 @change="getCount"  />
                <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
              </div>
              </div>
        
             <mt-button type="primary" size="small">立即购买</mt-button>
             <mt-button type="danger" size="small" @click="goShopCar">加入购物车</mt-button>
					</div>
				</div>
			
			</div>
    <!-- 详细参数区 -->
    <div class="mui-card">
				<div class="mui-card-header">商品参数</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<p>商品货号:&nbsp;&nbsp;&nbsp;{{ goodsParams.id }}</p>
						<p>库存情况:&nbsp;&nbsp;&nbsp;{{ goodsParams.num }}件</p>
						<p>上架时间:&nbsp;&nbsp;&nbsp;{{ goodsParams.time }}</p>
					</div>
				</div>
				<div class="mui-card-footer">
          <mt-button size="large" plain type="primary" @click="goIntroduce(goodsParams.id)">图文介绍</mt-button>
          <mt-button size="large" plain type="danger" @click="goComment(goodsParams.id)">商品评论</mt-button>
        </div>
			</div>
      
  </div>
</template>
<script>
import swiper from "../subComponents/swip.vue";
export default {
  data() {
    return {
      lunbotulist: [
        {
          src:
            "http://img.alicdn.com/imgextra/i4/1721183460/O1CN011bQiqlNUzaZWYKu_!!1721183460.jpg_760x760Q50s50.jpg_.webp"
        },
        {
          src:
            "//img.alicdn.com/imgextra/i4/1721183460/TB2PMlTnjihSKJjy0FfXXbGzFXa_!!1721183460.jpg_760x760Q50s50.jpg_.webp"
        },
        {
          src:
            "//img.alicdn.com/imgextra/i4/1721183460/O1CN011bQirUqQgbhWhIF_!!1721183460.jpg_760x760Q50s50.jpg_.webp"
        },
        {
          src:
            "//img.alicdn.com/imgextra/i4/1721183460/TB2PavCXmCt61JjSZFqXXbPqpXa_!!1721183460.jpg_760x760Q50s50.jpg_.webp"
        },
        {
          src:
            "//img.alicdn.com/imgextra/i2/1721183460/TB2jLDclPihSKJjy0FfXXbGzFXa_!!1721183460.jpg_760x760Q50s50.jpg_.webp"
        },
        {
          src:
            "//img.alicdn.com/imgextra/i4/1721183460/TB2p3FVbEF7MKJjSZFLXXcMBVXa_!!1721183460.jpg_760x760Q50s50.jpg_.webp"
        }
      ],
      purchase: {
        title: "mhk冬季长款羽绒服男中长款连帽大衣加厚外套男青年男装衣服新款",
        prePrice: 998,
        nowPrice: 668
      },
      goodsParams: {
        id: "456556895",
        num: 200,
        time: "2018-9-14"
      },
      ballFlag: false,
      selectedCount: 1
    };
  },
  created() {
    this.getlunbotu();
  },
  methods: {
    getlunbotu() {
      this.lunbotulist.forEach(item => {
        item.location = item.src;
      });
    },
    goIntroduce(id) {
      this.$router.push({
        name: "goodIntroduce",
        params: { id }
      });
    },
    goComment(id) {
      this.$router.push({
        name: "goodComent",
        params: { id }
      });
    },
    goShopCar() {
      this.ballFlag = !this.ballFlag;
    },
    beforeEnter(el) {
      el.style.transform = "translate(0,0)";
    },
    enter(el, done) {
      el.offsetWidth;
      // 计算出合适的距离，使用 getBoundingClientRect 这个方法
      const ballPosition = this.$refs.ball.getBoundingClientRect();
      const badgePosition = document
        .getElementById("badge")
        .getBoundingClientRect();
      const xDist = badgePosition.left - ballPosition.left;
      const yDist = badgePosition.top - ballPosition.top;
      el.style.transform = `translate(${xDist}px, ${yDist}px)`;
      el.style.transition = "all 0.5s cubic-bezier(.4,-0.3,1,.68) ";
      done();
    },
    afterEnter(el) {
      this.ballFlag = !this.ballFlag;
    },
    getCount() {
      this.selectedCount = this.$refs.num;
      console.log(this.selectedCount.value);
    }
  },
  components: {
    swiper
  }
};
</script>
<style lang="scss" scoped>
.goodinfo-container {
  background-color: #eee;
  overflow: hidden;
  .lunbo {
    padding: 0;
  }

  .mui-card {
    margin: 0;
  }
}
.now_price {
  color: red;
  font-size: 16px;
  font-weight: bold;
}
.buy-acount {
  // line-height: 50px;
  font-size: 16px;
  margin-bottom: 10px;
}
.mui-card-footer {
  display: block;
  button {
    margin-top: 15px;
  }
}
.ballShopCar {
  width: 15px;
  height: 15px;
  background-color: red;
  position: absolute;
  z-index: 99;
  top: 517px;
  left: 139px;
  border-radius: 50%;
}
</style>


