import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'

Vue.use(Router) // 宣告引用，全域性使用

/* eslint-disable */
// routers是一個物件陣列 // 當有多個路由的時候預設使用第一個路由地址
export default new Router({
  routes: [
    {
      path: '/', // 路由的地址，此時表示根路徑
      name: 'Home',
      component: Home
    },
    {
      path: "/history", // 第二個路由地址這裡需要新增上元件名
      name: "History",
      component: () =>
        import("../views/History.vue")
    }
  ],
  // base: process.env.BASE_URL,
})
