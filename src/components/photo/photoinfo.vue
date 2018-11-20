<template>
  <div class="photoinfo">
      <h3>{{introduce.title}}</h3>
      <div class="subtitle">
        <span>{{introduce.subtitle}}</span>
        <span>{{introduce.time}}</span>
      </div>
      <hr>
      <!-- 缩略图 -->
      <div class="tupian">
          <img v-for="(img,index) in imgs"
          v-preview="img.url"
          :src="img.url"
          :alt="img.title"
          :key="index"
          preview-title-enable="true"
          preview-nav-enable="true">
      </div>
        

    <div class="photo-introduce" v-html="introduce.content">
      
    </div>

  </div>
</template>
<script>
export default {
  data() {
    return {
      introduce: {
        title: "奈良，鹿之物语",
        subtitle: "海的偶然与巧合",
        time: "2018-10-14 07:30",
        content:
          "<p>旅行是件非常偏个人感受的事情，这个地方是否好玩，只有去过了才知道。除了常规景点的打卡，依旧有很多不在计划内的惊喜。这，大概就是旅行的美妙之处。</p><p>东京是日本最大的城市，也是世界经济发展最高的都市之一。正是因为这样，它有着海纳百川的魅力，既有繁华如银座、新宿，二次元的世界秋叶原，童真童趣的迪斯尼。 当然了，也有很多适合慢慢走慢慢逛的宁静之处。</p>"
      },
      imgs: [
        {
          url:
            "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1871670444,2198423178&fm=26&gp=0.jpg",
          title: "1"
        },
        {
          url:
            "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3170195430,3332132885&fm=26&gp=0.jpg",
          title: "2"
        },
        {
          url:
            "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2452010230,712629891&fm=26&gp=0.jpg",
          title: "3"
        },
        {
          url:
            "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1910544257,4173916972&fm=26&gp=0.jpg",
          title: "4"
        },
        {
          url:
            "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=937361865,4142565763&fm=26&gp=0.jpg",
          title: "5"
        }
      ]
    };
  },
  methods: {
    handleClose() {
      console.log("close event");
    }
  }
};
</script>
<style lang="scss" >
.photoinfo {
  padding: 4px;
  h3 {
    font-size: 15px;
    text-align: center;
    margin: 10px 0;
    color: #226aff;
  }
  .subtitle {
    display: flex;
    justify-content: space-between;
    color: #8f8f94;

    font-size: 13px;
  }
  .photo-introduce {
    line-height: 2em;
  }
  p {
    color: #795548;
    font-size: 14px;
  }
  .tupian {
    margin: 5px 15px;
  }
  img {
    width: 100px;
    height: 150px;
    display: inline-block;
    vertical-align: middle;
    margin: 3px 6px;
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);
  }
}
</style>


