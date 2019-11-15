<template>
  <!-- 开启 safe-area-inset-bottom 属性 -->
  <van-tabbar v-model="active" :zIndex="100" route safe-area-inset-bottom>
    <van-tabbar-item name="home" replace to="/home">
      <van-icon
        slot="icon"
        class-prefix="iconfont"
        name="bar-home" />首页
    </van-tabbar-item>
    <van-tabbar-item name="task" replace to="/task" dot>
      <van-icon
        slot="icon"
        class-prefix="iconfont"
        name="bar-task" />任务
    </van-tabbar-item>
    <van-tabbar-item name="message" replace to="/message" info="5">
      <van-icon
        slot="icon"
        class-prefix="iconfont"
        name="bar-msg" />消息
    </van-tabbar-item>
    <van-tabbar-item name="user" replace to="/user" dot>
      <van-icon
        slot="icon"
        class-prefix="iconfont"
        name="bar-user" />我的
    </van-tabbar-item>
  </van-tabbar>
</template>

<script>
import Vue from 'vue'
import { Tabbar, TabbarItem } from 'vant'

Vue.use(Tabbar).use(TabbarItem)

export default {
  name: 'TheFooter',
  props: {
    zIndex: Number,
  },
  data() {
    return {
      active: 'home'
    }
  }
}
</script>
