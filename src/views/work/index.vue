<template>
  <div class="page">
    <van-nav-bar title="工作任务" 
    fixed 
    :zIndex="100" 
    left-arrow 
    @click-left="goBack"></van-nav-bar>

    <section class="page-wrapper">
      <van-tabs v-model="activeTab">
          <van-tab title="今日任务" name="dayTab">
            <!-- 任务list子组件调用 -->
            <status-list v-bind:listdata="daylist"></status-list>
          </van-tab>
          <van-tab title="本周任务" name="weekTab">
            <!-- 任务list子组件调用 -->
            <status-list v-bind:listdata="weeklist"></status-list>
          </van-tab>
        </van-tabs>
    </section>

  </div>
</template>

<script>
import Vue from 'vue'
import { NavBar,
 Panel, 
 Icon,
 Tab,
 Tabs,
} from 'vant'
import StatusList from '@/components/list/StatusList'

Vue.use(NavBar)
.use(Panel)
.use(Icon)
.use(Tab)
.use(Tabs)

export default {
  props: {
    zIndex: Number,
  },
  components: {
    'status-list': StatusList
  },
  data() {
    return {
      activeTab: 'dayTab',
      daylist: [
        {
          id: '1',
          title: '黑龙江路综合舱巡检任务',
          time: '2019-10-08 09：00：00',
          status: '已完成',
          type: 0,
          content: '综合舱风机水泵开关检查',
        },
        {
          id: '2',
          title: '黑龙江路电力舱巡检任务',
          time: '2019-10-09 09：00：00',
          status: '待处理',
          type: 1,
          content: '电力舱电缆常规检查',
        },
        {
          id: '2',
          title: '黑龙江路燃气舱巡检任务',
          time: '2019-10-11 09：00：00',
          status: '处理中',
          type: 2,
          content: '燃气舱燃气浓度检查',
        },
      ],
      weeklist: [
        {
          id: '1',
          title: '黑龙江路综合舱巡检任务',
          time: '2019-07-08 09：00：00',
          status: '已完成',
          type: 0,
          content: '综合舱风机水泵开关检查',
        },
        {
          id: '2',
          title: '黑龙江路电力舱巡检任务',
          time: '2019-08-09 09：00：00',
          status: '待处理',
          type: 1,
          content: '电力舱电缆常规检查',
        },
        {
          id: '2',
          title: '黑龙江路燃气舱巡检任务',
          time: '2019-09-11 09：00：00',
          status: '处理中',
          type: 2,
          content: '燃气舱燃气浓度检查',
        },
      ],
    }
  },
  methods: {
    goBack() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
    },
  }
}
</script>

<style lang="less" scoped>
.page {
  &-wrapper {
    padding: 0 10px;
    margin: 10px auto;
  }

  &-wrapper:last-child {
    margin-bottom: 0;
  }

  &-panel {
    margin: 10px auto;
  }

  &-panel:last-child {
    margin-bottom: 0;
  }

  &-icon-panel {
    &-content {
      padding: 10px 16px;
    }

    .panel-title {
      position: relative;
      display: flex;
      box-sizing: border-box;
      width: 100%;
      padding: 10px 16px;
      overflow: hidden;
      color: #323233;
      font-size: 14px;
      line-height: 24px;
      background-color: #fff;
      &-icon {
        margin-right: 2px;
        margin-top: 4px;
      }
    }
  }

}
</style>

