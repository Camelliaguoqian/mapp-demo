<template>
  <div class="home-page page">
    <van-nav-bar title="首页" fixed :zIndex="100">
      <!-- <van-icon name="search" slot="right" /> -->
    </van-nav-bar>

    <section class="page-wrapper">
      <van-grid clickable :column-num="2">
        <van-grid-item icon="scan" text="扫一扫" @click="scanTest" />
        <van-grid-item icon="friends-o" dot text="工作" to="/work" />
      </van-grid>
    </section>

    <section class="navs-wrapper">
      <van-grid clickable :gutter="10">
        <van-grid-item
          v-for="item in navs"
          :key="item.id"
          :icon="item.icon"
          :text="item.name"
          :to="item.url"
        />
        <van-grid-item
          icon="more-o"
          text="更多"
          @click="onClickNavLink"
        />
      </van-grid>
    </section>

    <section class="page-wrapper">
      <van-notice-bar left-icon="volume-o">{{ noticeMsg }}</van-notice-bar>
    </section>

    <van-panel class="page-panel" title="最近报警动态">
      <div class="page-panel-content">
        <van-steps direction="vertical" :active="0">
          <van-step v-for="item in alarms" :key="item.id">
            <h3>{{ item.title }}</h3>
            <p>{{ item.time }}</p>
          </van-step>
        </van-steps>
      </div>
    </van-panel>

    <van-panel class="page-panel" title="最近任务动态">
      <div class="page-panel-content">
        <van-steps direction="vertical" :active="0">
          <van-step v-for="item in tasks" :key="item.id">
            <h3>{{ item.title }}</h3>
            <p>{{ item.time }}</p>
          </van-step>
        </van-steps>
      </div>
    </van-panel>

    <section class="page-wrapper">
      <van-divider :style="{ color: '#969799', borderColor: '#969799', padding: '0 16px' }">
        我是有底线的
      </van-divider>
    </section>

    <!-- 底部tab栏组件 -->
    <v-footer></v-footer>
  </div>
</template>

<script>
import Vue from 'vue'
import { NavBar, 
Panel, 
Icon, 
Grid, 
GridItem, 
NoticeBar, 
Step, 
Steps, 
Divider,
Toast } from 'vant'
import Mplat from 'utils/Mplat'
import TheFooter from 'components/common/TheFooter'

Vue.use(NavBar)
.use(Panel)
.use(Icon)
.use(Grid)
.use(GridItem)
.use(NoticeBar)
.use(Step)
.use(Steps)
.use(Divider)
.use(Toast)

export default {
  name: 'HomeIndexPage',
  components: {
    'v-footer': TheFooter
    // [NavBar.name]: NavBar,
    // [Icon.name]: Icon,
    // [Grid.name]: Grid,
    // [GridItem.name]: GridItem,
    // [NoticeBar.name]: NoticeBar,
    // [Step.name]: Step,
    // [Steps.name]: Steps,
  },
  props: {
    zIndex: Number,
  },
  data () {
    return {
      noticeMsg: '2019年10月10日 黑龙江路综合管廊燃气舱温度过高发出告警，请相关人员及时进行处理',
      navs: [{
        id: 1,
        name: '任务查询',
        icon: 'notes-o',
        url: '/taskQuery',
      },{
        id: 2,
        name: '报警查询',
        icon: 'bulb-o',
        url: '/alarmQuery',
      },{
        id: 3,
        name: '管廊查询',
        icon: 'shop-o',
        url: '/pipeQuery',
      },{
        id: 4,
        name: '管线查询',
        icon: 'description',
        url: '/pipelineQuery',
      },{
        id: 5,
        name: '设备查询',
        icon: 'aim',
        url: '/deviceQuery',
      },{
        id: 6,
        name: '环境监测',
        icon: 'tv-o',
        url: '/environmentalMonitoring',
      },{
        id: 7,
        name: '统计分析',
        icon: 'chart-trending-o',
        url: '/statistic',
      }],
      alarms: [{
        id: 1,
        title:  '黑龙江路 08# 综合舱 湿度过高',
        time: '2019-07-12 12:40'
      },{
        id: 2,
        title:  '黑龙江路 02# 综合舱 入侵报警',
        time: '2019-06-12 12:40'
      },{
        id: 3,
        title:  '黑龙江路 11# 综合舱 湿度过高',
        time: '2019-05-12 12:40'
      },{
        id: 4,
        title:  '黑龙江路 14# 综合舱 湿度过高',
        time: '2019-04-12 12:40'
      },{
        id: 5,
        title:  '黑龙江路 06# 综合舱 湿度过高',
        time: '2019-03-12 12:40'
      }],
      tasks: [{
        id: 1,
        title:  '电力舱巡检完成',
        time: '2019-07-12 12:40'
      },{
        id: 2,
        title:  '热力舱巡检完成',
        time: '2019-06-12 12:40'
      },{
        id: 3,
        title:  '对管廊内消防设施、防护设施进行巡检，对逃生通道进行保养',
        time: '2019-05-12 12:40'
      },{
        id: 4,
        title:  '本周起，对消防器材进行重点巡检，请相关人员做好准备',
        time: '2019-04-12 12:40'
      },{
        id: 5,
        title:  '燃气舱巡检完成',
        time: '2019-03-12 12:40'
      }],
    }
  },
  methods: {
    onClickNavLink: function () {
      this.$toast("更多功能暂未开放，敬请期待");
    },
    //测试Mplat调用原生api的scan功能
    scanTest: function () {
      Toast('二维码扫描成功');
      this.$router.push('scan');

      //调用移动框架接口
      Mplat.init(function(){
        Toast('初始化');
        //Mplat.getUserInfos();
        Mplat.scanGetCode({
        params: {
          "width":"",
          "height":""
          },
          callback: function(data) {
            var result=eval("(" + data + ")");
            Toast(result);
          }
       })
      });
    }
  }
}
</script>

<style lang="less">
.page {
  padding: 46px 0 50px 0;
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

}
</style>