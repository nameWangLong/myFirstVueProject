<template>
  <div class="photolist">
    <!-- 顶部滑动导航 -->
    <div id="slider" class="mui-slider ">
				<div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
					<div class="mui-scroll">
						<a :class="['mui-control-item ',item.id==0?'mui-active':'']"  
						v-for="item in photoNav" :key="item.id">
							{{item.content}}
						</a>
					
					</div>
				</div>
			</div>
		<!-- 图片展示区 -->
			<ul class="picture">
				<router-link tag="li" v-for="item in list" :key="item.id" to="/home/photoinfo">
					<img v-lazy="item.src">
					<div class="info">
						  <h1 class="info-title">{{item.title}}</h1>
							<p>{{item.descript}}</p>
					</div>
				</router-link >
			</ul>
  </div>
</template>
<script>
//导入mui的js文件
import mui from "../../lib/mui/js/mui.min.js";

export default {
  data() {
    return {
      photoNav: [
        { id: 0, content: "	全部" },
        { id: 1, content: "	时尚摄影" },
        { id: 2, content: "	美女明星" },
        { id: 3, content: "	大好河山" },
        { id: 4, content: "	古典美女" },
        { id: 5, content: "	手机壁纸" },
        { id: 6, content: "	精美动图" }
      ],
      list: [
        {
          id: 0,
          src:
            "http://p0.meituan.net/deal/e6b6bcdd8be86db93fd034ec6bb729f2254314.jpg",
          title: "人间美味",
          descript:
            "11月13日，网友爆料称石家庄市桥西区教育局主编的新教育国学晨诵读本《我和诗词有个约》错漏百出。当日下午，桥西区教育局接受北京时间记者采访时表示，将全面校对教材，把确定的错误反馈给老师，但不会召回。当晚，网上舆情发酵后，该局改口称将全部收回、重新审定。"
        },
        {
          id: 1,
          src:
            "http://hiphotos.baidu.com/feed/pic/item/3c6d55fbb2fb43161d86f4fc2ca4462308f7d39f.jpg",
          title: "这是一个千古美女",
          descript:
            "11月13日，网友爆料称石家庄市桥西区教育局主编的新教育国学晨诵读本《我和诗词有个约》错漏百出。当日下午，桥西区教育局接受北京时间记者采访时表示，将全面校对教材，把确定的错误反馈给老师，但不会召回。当晚，网上舆情发酵后，该局改口称将全部收回、重新审定。"
        },
        {
          id: 2,
          src:
            "http://img3.imgtn.bdimg.com/it/u=3605510831,1014807710&fm=11&gp=0.jpg",
          title: "这是一个千古美女",
          descript:
            "11月13日，网友爆料称石家庄市桥西区教育局主编的新教育国学晨诵读本《我和诗词有个约》错漏百出。当日下午，桥西区教育局接受北京时间记者采访时表示，将全面校对教材，把确定的错误反馈给老师，但不会召回。当晚，网上舆情发酵后，该局改口称将全部收回、重新审定。"
        },
        {
          id: 3,
          src:
            "http://img3.imgtn.bdimg.com/it/u=2518542235,1115497982&fm=26&gp=0.jpg",
          title: "这是一个千古美女",
          descript:
            "11月13日，网友爆料称石家庄市桥西区教育局主编的新教育国学晨诵读本《我和诗词有个约》错漏百出。当日下午，桥西区教育局接受北京时间记者采访时表示，将全面校对教材，把确定的错误反馈给老师，但不会召回。当晚，网上舆情发酵后，该局改口称将全部收回、重新审定。"
        },
        {
          id: 4,
          src:
            "http://img0.imgtn.bdimg.com/it/u=2973394711,568498673&fm=11&gp=0.jpg",
          title: "这是一个千古美女",
          descript:
            "11月13日，网友爆料称石家庄市桥西区教育局主编的新教育国学晨诵读本《我和诗词有个约》错漏百出。当日下午，桥西区教育局接受北京时间记者采访时表示，将全面校对教材，把确定的错误反馈给老师，但不会召回。当晚，网上舆情发酵后，该局改口称将全部收回、重新审定。"
        },
        {
          id: 5,
          src:
            "http://img4.imgtn.bdimg.com/it/u=1702095912,2704455860&fm=26&gp=0.jpg://http://img5.imgtn.bdimg.com/it/u=1214925994,975231931&fm=11&gp=0.jpg.http://img2.imgtn.bdimg.com/it/u=679318873,3285627241&fm=200&gp=0.jpg.bdimg.com/it/u=2973394711,568498673&fm=11&gp=0.jpg",
          title: "这是一个千古美女",
          descript:
            "11月13日，网友爆料称石家庄市桥西区教育局主编的新教育国学晨诵读本《我和诗词有个约》错漏百出。当日下午，桥西区教育局接受北京时间记者采访时表示，将全面校对教材，把确定的错误反馈给老师，但不会召回。当晚，网上舆情发酵后，该局改口称将全部收回、重新审定。"
        },
        {
          id: 6,
          src:
            "http://img5.imgtn.bdimg.com/it/u=3808342533,4267537602&fm=200&gp=0.jpg",
          title: "这是一个千古美女",
          descript:
            "11月13日，网友爆料称石家庄市桥西区教育局主编的新教育国学晨诵读本《我和诗词有个约》错漏百出。当日下午，桥西区教育局接受北京时间记者采访时表示，将全面校对教材，把确定的错误反馈给老师，但不会召回。当晚，网上舆情发酵后，该局改口称将全部收回、重新审定。"
        },
        {
          id: 7,
          src:
            "http://img3.imgtn.bdimg.com/it/u=411073538,3998195033&fm=200&gp=0.jpg",
          title: "这是一个千古美女",
          descript:
            "11月13日，网友爆料称石家庄市桥西区教育局主编的新教育国学晨诵读本《我和诗词有个约》错漏百出。当日下午，桥西区教育局接受北京时间记者采访时表示，将全面校对教材，把确定的错误反馈给老师，但不会召回。当晚，网上舆情发酵后，该局改口称将全部收回、重新审定。"
        },
        {
          id: 8,
          src:
            "http://img3.imgtn.bdimg.com/it/u=127318914,46847523&fm=200&gp=0.jpg",
          title: "这是一个千古美女",
          descript:
            "11月13日，网友爆料称石家庄市桥西区教育局主编的新教育国学晨诵读本《我和诗词有个约》错漏百出。当日下午，桥西区教育局接受北京时间记者采访时表示，将全面校对教材，把确定的错误反馈给老师，但不会召回。当晚，网上舆情发酵后，该局改口称将全部收回、重新审定。"
        },
        {
          id: 9,
          src:
            "http://img1.imgtn.bdimg.com/it/u=4247791452,91384433&fm=200&gp=0.jpg",
          title: "这是一个千古美女",
          descript:
            "11月13日，网友爆料称石家庄市桥西区教育局主编的新教育国学晨诵读本《我和诗词有个约》错漏百出。当日下午，桥西区教育局接受北京时间记者采访时表示，将全面校对教材，把确定的错误反馈给老师，但不会召回。当晚，网上舆情发酵后，该局改口称将全部收回、重新审定。"
        }
      ]
    };
  },
  methods: {},
  mounted() {
    // 在页面组件挂载完毕，调用滚动初始化
    mui(".mui-scroll-wrapper").scroll({
      deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });
  }
};
</script>
<style lang="scss" scoped>
* {
  touch-action: pan-y;
}

.photolist {
  .picture {
    padding: 0 5px;
    margin: 0;
    li {
      list-style: none;
      margin-bottom: 10px;
      box-shadow: 0 0 9px #999999;
      position: relative;
      text-align: center;
      background-color: #cccccc;

      img[lazy="loading"] {
        width: 40px;
        height: 300px;
        margin: auto;
      }
    }

    img {
      width: 100%;
      vertical-align: middle;
    }
    padding-bottom: 0;
    .info {
      color: white;
      text-align: left;
      position: absolute;
      bottom: 0;
      background-color: rgba(0, 0, 0, 0.4);
      max-height: 105px;
      h1 {
        font-size: 14px;
      }
      p {
        font-size: 13px;
        color: white;
        text-overflow: ellipsis;
        overflow: hidden;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3;
      }
    }
  }
}
</style>


