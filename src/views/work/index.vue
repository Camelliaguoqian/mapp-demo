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
      daylist: [],
      weeklist: [],
    }
  },
  mounted: function() {
    this.initData();
  },
  methods: {
    initData() {
      //工作任务- 今日任务 、 本周任务
      this.request.httpPost(this.requestUrl.workTaskList).then(data => {
          let result = data; 
          let resultRetCode = result.retCode; 
          let resultRetMsg = result.retMsg; 
          let resultRetData = result.retData; 
          let todayTaskData = resultRetData.todayTask;
          let weekTaskData = resultRetData.sevenDaysTask;
          console.log(result);
          console.log(resultRetCode);
          console.log(resultRetMsg);
          console.log(resultRetData);

          //实体
          let taskStatusType = [{'150':'待处理'},{'151':'处理中'},{'152':'已完成'}];

          if(resultRetCode === "SUCCESS"){
            //今日任务 、 本周任务
            for(let i=0; i<todayTaskData.length; i++) {
              let node = {};
              node.id = todayTaskData[i].resId;
              node.title = todayTaskData[i].name;
              node.time = '开始时间：' + todayTaskData[i].planStartTime;
              node.content = '结束时间：' + todayTaskData[i].planEndTime;
              node.status = taskStatusType[0];

              this.daylist.push(node);
            }

          }
          if(resultRetCode === "FAIL"){
            this.$toast(resultRetMsg);
          }  

        }).catch((error) => {
          this.$toast("请求失败"+error);
        });
    },
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

