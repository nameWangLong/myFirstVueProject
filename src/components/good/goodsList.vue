<template>
<div>
  <div class="goodlist">
      <ul>
        <li v-for="item in goodlist" :key="item.id" @click="gogoodsInfo(item.id,item.price)"><a href="javascript:;"  >
          <img :src="item.src" alt="">
          <div class="title"> {{item.title}}</div>
           <div class="public">
                <div class="price"> <span>¥</span> {{item.price}}</div>
              <div class="coment"> {{item.coment}}条评论</div>
           </div>
          </a></li>
      </ul>
  </div>
</div>
  
</template>
<script>
export default {
  data() {
    return {
      goodlist: [
        {
          src:
            "//img12.360buyimg.com/n7/jfs/t26863/85/825234124/283356/5ab5b310/5bb9b8b0Ndf53dcdd.jpg!q70.dpg",
          title:
            "龙力电高压锅大容量商用电压力锅大号特大8-10-12升食堂18L饭煲 10L",
          id: 0,
          price: 499,
          coment: "4505"
        },
        {
          src:
            "//img13.360buyimg.com/n7/jfs/t27700/75/275166438/168785/80f7e96f/5b8cd5edN8eb5f2d6.jpg!q70.dpg",
          title:
            "美的（Midea）电水壶热水壶电热水壶双层防烫304不锈钢1.7L容量 烧水壶WHJ1705b",
          id: 1,
          price: 99,
          coment: "4505"
        },
        {
          src:
            "//img12.360buyimg.com/mobilecms/s308x396_jfs/t25108/210/446693062/412354/a25c7e11/5b6fefcbN344b9232.jpg!cc_308x396!q70.dpg.webp",
          title:
            "凯丹妮小西装女 职业装女装套装修身长袖工作女 蓝马甲+裤子+灰色衬衫 4XL（建议140-150斤穿）",
          id: 2,
          price: 218,
          coment: "4505"
        },
        {
          src:
            "//img12.360buyimg.com/mobilecms/s308x396_jfs/t1/3150/10/8256/371657/5ba8a128Eeeb67a75/fce6c2fc67298ad4.jpg!cc_308x396!q70.dpg.webp",
          title:
            "  森扮加绒衬衫女长袖条纹中长款2018新款春秋韩版秋冬职业OL上衣衬衣 红色 不加绒 XL  ",
          id: 3,
          price: 108,
          coment: "4505"
        },
        {
          src:
            "//img11.360buyimg.com/n2/s370x474_jfs/t1/4755/40/1298/285963/5b93ac6cE39324cde/c3d7cc12c0a7e10e.jpg!cc_370x474!q70.jpg",
          title:
            "南极人 针织衫女2018秋冬新品圆领时尚纯色毛衣女套头长袖加厚保暖宽松大码打底衫上衣 Z1501 深咖 M",
          id: 4,
          price: 228,
          coment: "4505"
        },

        {
          src:
            "//img13.360buyimg.com/mobilecms/s308x396_jfs/t1/2347/24/2317/139531/5b964dd1E65c8e838/21cd1317aa803729.jpg!cc_308x396!q70.dpg.webp",
          title:
            "  JS&KE 短外套女2018春秋新款韩版休闲时尚修身双面穿连帽棒球服大码风衣加绒加厚夹克外套女 红黑 XL  ",
          id: 5,
          price: 123,
          coment: "4505"
        },
        {
          src:
            "//img12.360buyimg.com/n7/jfs/t26863/85/825234124/283356/5ab5b310/5bb9b8b0Ndf53dcdd.jpg!q70.dpg",
          title:
            "龙力电高压锅大容量商用电压力锅大号特大8-10-12升食堂18L饭煲 10L",
          id: 6,
          price: 499,
          coment: "4505"
        },
        {
          src:
            "//img13.360buyimg.com/n7/jfs/t27700/75/275166438/168785/80f7e96f/5b8cd5edN8eb5f2d6.jpg!q70.dpg",
          title:
            "美的（Midea）电水壶热水壶电热水壶双层防烫304不锈钢1.7L容量 烧水壶WHJ1705b",
          id: 7,
          price: 99,
          coment: "4505"
        },
        {
          src:
            "//img12.360buyimg.com/mobilecms/s308x396_jfs/t25108/210/446693062/412354/a25c7e11/5b6fefcbN344b9232.jpg!cc_308x396!q70.dpg.webp",
          title:
            "凯丹妮小西装女 职业装女装套装修身长袖工作女 蓝马甲+裤子+灰色衬衫 4XL（建议140-150斤穿）",
          id: 8,
          price: 218,
          coment: "4505"
        },
        {
          src:
            "//img12.360buyimg.com/mobilecms/s308x396_jfs/t1/3150/10/8256/371657/5ba8a128Eeeb67a75/fce6c2fc67298ad4.jpg!cc_308x396!q70.dpg.webp",
          title:
            "  森扮加绒衬衫女长袖条纹中长款2018新款春秋韩版秋冬职业OL上衣衬衣 红色 不加绒 XL  ",
          id: 9,
          price: 108,
          coment: "4505"
        },
        {
          src:
            "//img11.360buyimg.com/n2/s370x474_jfs/t1/4755/40/1298/285963/5b93ac6cE39324cde/c3d7cc12c0a7e10e.jpg!cc_370x474!q70.jpg",
          title:
            "南极人 针织衫女2018秋冬新品圆领时尚纯色毛衣女套头长袖加厚保暖宽松大码打底衫上衣 Z1501 深咖 M",
          id: 10,
          price: 228,
          coment: "4505"
        },

        {
          src:
            "//img13.360buyimg.com/mobilecms/s308x396_jfs/t1/2347/24/2317/139531/5b964dd1E65c8e838/21cd1317aa803729.jpg!cc_308x396!q70.dpg.webp",
          title:
            "  JS&KE 短外套女2018春秋新款韩版休闲时尚修身双面穿连帽棒球服大码风衣加绒加厚夹克外套女 红黑 XL  ",
          id: 11,
          price: 123,
          coment: "4505"
        }
      ]
    };
  },
  methods: {
    gogoodsInfo(id, price) {
      // 跳转到商品详情页，并传递参数id
      this.$router.push({
        name: "goodsinfo",
        params: { id: id }
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.goodlist {
  padding: 5px 2px;
  ul {
    overflow: hidden;
    margin: 0;
    padding: 0;
    li {
      list-style: none;
      float: left;
      width: 48%;
      margin-left: 4px;
      a {
        width: 100%;
        height: 100%;
        display: block;
        cursor: pointer;
      }
      .public {
        display: flex;
        justify-content: space-between;
        margin: 8px 10px;
      }
      img {
        width: 100%;
      }
      .title {
        font-size: 16px;
        word-break: break-all;
        margin-top: 8px;
        color: #333;
        line-height: 1.36;
        overflow: hidden;
        white-space: nowrap;
        height: 1.36em;
        text-overflow: ellipsis;
      }
      .price {
        font-size: 18px;
        color: #e93b3d;
        span {
          margin: 0;
          padding: 0;
          font-size: 14px;
        }
      }
      .coment {
        font-size: 13px;
        color: #999;
      }
    }
  }
}
</style>


