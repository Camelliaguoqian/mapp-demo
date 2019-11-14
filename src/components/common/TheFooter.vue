<template>
  <!-- 开启 safe-area-inset-bottom 属性 -->
  <van-tabbar v-model="active" :zIndex="100" route safe-area-inset-bottom>
    <van-tabbar-item name="home" replace to="/home" icon="wap-home-o">首页</van-tabbar-item>
    <van-tabbar-item name="task" replace to="/task" icon="todo-list-o" dot>任务</van-tabbar-item>
    <van-tabbar-item name="message" replace to="/message" icon="chat-o" info="5">消息</van-tabbar-item>
    <van-tabbar-item name="user" replace to="/user" icon="user-circle-o" dot>我的</van-tabbar-item>
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
