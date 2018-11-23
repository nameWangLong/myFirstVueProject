## 1. 初始化项目
## 2. 制作首页app组件
## 3. 改造app组件tablebar 为router-link
## 4. 设置路由链接高亮显示
## 5. 配置路由组件
## homeCointainer组件的制作
  - 制作录播图
   + 安装vue-resource 

## 6.配置新闻资讯路由
## 7.制作图片分享区域
 1. 制作顶部滑动块
 + 使用 mui 中的tab-top-webview-main.html  去掉mui-fullscreen全屏属性  需要引入js文件
 +  并注册滑动区块  
   ```  
    mui('.mui-scroll-wrapper').scroll({
	deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });
   ```
  + 解决mui.js与bundle.js严格模式的报错：
    - 使用babel-plugin-transform-remove-strict-mode插件
    ```    $ npm install babel-plugin-transform-remove-strict-mode
          {
            "plugins": ["transform-remove-strict-mode"]
          }
    ```
   ```
  - 解决chrome浏览器的滑动警告，加上如下css样式：  
    ```* {
            touch-action: pan-y;
          }
   ```

- 当滑动条ok,发现tarbar无法正常工具，需要修改tarbar的类 mui-tab-item 的名字，因为它与mui产生冲突.
- vue-
- tag标签可以改变router-link标签的展示形式
- 使用npm i vue2-preview -S
- 插件可以完成缩略图


## 8.制作商品列表

- 分配路由

#### 9.项目在手机端测试

- 首先保证手机和pc处于同一局域网
- 在package.json中  dev脚本中添加 --host  ip地址
- 手机端即可访问

#### 10.vue中跳转路由的两种方式：

- 1.通过router-link标签跳转
- 2.通过编程式跳转 this.$router.push()跳转
- this.$route为参数对象  .query为?传参  .params为:传参

1. 分离轮播图组件


#### 11.购物车区域：

- js 获取元素距离浏览器窗口的距离   

` getBoundingClientRect `

#### 12. vuex:

- 相当于一个全局的数据共享区域.

```javascript
const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment (state) {
      state.count++
    }
  }
})

var vm =new Vue({
    data:{},
    store:store
})
```

1. 组件想使用store中state的数据通过 `$store.state.***`
2. vuex 中的Mutation相当于methods: 定义方法，第一个参数为state, 
   - 其他组件通过 `this.$store.commit('methodname',param1)`
3. 数组删除元素  .splice(i,1)  //从当前位置删除1位