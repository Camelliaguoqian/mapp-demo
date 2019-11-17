<template>
  <div class="page">
    <van-nav-bar title="任务查询" 
    fixed 
    :zIndex="100" 
    left-arrow 
    @click-left="goBack"></van-nav-bar>

    <!-- 任务list子组件调用 -->
    <status-list v-bind:listdata="querylistdata"></status-list>
    
  </div>
</template>

<script>
import Vue from 'vue'
import { NavBar,
 Panel,  
 Icon,
} from 'vant'
import StatusList from 'components/list/StatusList'

Vue.use(NavBar)
.use(Panel)
.use(Icon)

export default {
  name: 'PipeQueryListPage',
  components: {
    'status-list': StatusList
  },
  props: {
    zIndex: Number,
  },
  data() {
    return {
      querylistdata: [
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

</style>

