<template>
  <div class="page-inner">
    <van-nav-bar title="消息中心" fixed :zIndex="100"></van-nav-bar>

    <van-panel class="page-panel page-icon-panel">
      <div class="panel-title van-hairline--bottom" slot="header">
        <van-icon class="panel-title-icon" name="diamond" />
        告警分析
      </div>
      <div class="page-panel-content page-icon-panel-content">
        <van-tabs v-model="activeName">
          <van-tab name="todayAlarm">
            <div slot="title">
              <van-icon name="bulb-o" />今日告警
            </div>
            <!-- 内容 -->
            <div class="pd-top-10">
              <!-- <van-tag mark type="primary">今日告警</van-tag> -->
              <van-grid class="infomation-list" :column-num="4">
                <van-grid-item class="infomation-list-item" to="/message/messageAlarm">
                  <div class="item-label">总数</div>
                  <div class="item-value">48</div>
                </van-grid-item>
                <van-grid-item class="infomation-list-item" to="/message/messageAlarm">
                  <div class="item-label">已解除</div>
                  <div class="item-value">32</div>
                </van-grid-item>
                <van-grid-item class="infomation-list-item" to="/message/messageAlarm">
                  <div class="item-label">未解除</div>
                  <div class="item-value">16</div>
                </van-grid-item>
                <van-grid-item class="infomation-list-item" to="/message/messageAlarm">
                  <div class="item-label">解除率</div>
                  <div class="item-value">
                    <van-circle
                      v-model="currentRate"
                      size="50px"
                      :color="gradientColor"
                      layer-color="#f8f8f8"
                      :rate="66.7"
                      :speed="100"         
                      :text="text"
                    />
                  </div>
                </van-grid-item>
              </van-grid>

              <!-- 系统列表 -->
              <van-grid class="infomation-list" :column-num="2">
                <van-grid-item class="infomation-list-item" to="/message/messageAlarm">
                  <div class="item-label">监控与报警系统</div>
                  <div class="item-value">38</div>
                </van-grid-item>
                <van-grid-item class="infomation-list-item" to="/message/messageAlarm">
                  <div class="item-label">消防系统</div>
                  <div class="item-value">0</div>
                </van-grid-item>
              </van-grid>
            </div>
          </van-tab>
          <van-tab name="historyAlarm">
            <div slot="title">
              <van-icon name="bulb-o" />历史告警
            </div>
            <!-- 内容 -->
            <div class="pd-top-10">
              <!-- <van-tag mark type="warning">历史告警</van-tag> -->
              <van-grid class="infomation-list" :column-num="5">
                <van-grid-item class="infomation-list-item" to="/message/messageAlarm">
                  <div class="item-label">总数</div>
                  <div class="item-value">1208</div>
                </van-grid-item>
                <van-grid-item class="infomation-list-item" to="/message/messageAlarm">
                  <div class="item-label">一级</div>
                  <div class="item-value">108</div>
                </van-grid-item>
                <van-grid-item class="infomation-list-item" to="/message/messageAlarm">
                  <div class="item-label">二级</div>
                  <div class="item-value">350</div>
                </van-grid-item>
                <van-grid-item class="infomation-list-item" to="/message/messageAlarm">
                  <div class="item-label">三级</div>
                  <div class="item-value">350</div>
                </van-grid-item>
                <van-grid-item class="infomation-list-item" to="/message/messageAlarm">
                  <div class="item-label">四级</div>
                  <div class="item-value">400</div>
                </van-grid-item>
              </van-grid>

              <!-- 系统列表 -->
              <van-grid class="infomation-list" :column-num="2">
                <van-grid-item class="infomation-list-item" to="/message/messageAlarm">
                  <div class="item-label">监控与报警系统</div>
                  <div class="item-value">604</div>
                </van-grid-item>
                <van-grid-item class="infomation-list-item" to="/message/messageAlarm">
                  <div class="item-label">消防系统</div>
                  <div class="item-value">151</div>
                </van-grid-item>
              </van-grid>   
            </div>        
          </van-tab>
        </van-tabs>
      </div>
    </van-panel>

    <van-panel class="page-panel page-icon-panel">
      <div class="panel-title van-hairline--bottom" slot="header">
        <van-icon class="panel-title-icon" name="diamond" />
        通知统计
      </div>
      <div class="page-panel-content page-icon-panel-content">
        <van-tag mark type="primary">未读</van-tag>
        <van-grid class="infomation-list" :column-num="3">
          <van-grid-item class="infomation-list-item" to="/message/messageNotice">
            <div class="item-label">总数</div>
            <div class="item-value">8</div>
          </van-grid-item>
          <van-grid-item class="infomation-list-item" to="/message/messageNotice">
            <div class="item-label">一般</div>
            <div class="item-value">6</div>
          </van-grid-item>
          <van-grid-item class="infomation-list-item" to="/message/messageNotice">
            <div class="item-label">紧急</div>
            <div class="item-value">2</div>
          </van-grid-item>
        </van-grid>

        

        <van-tag mark type="warning">已读</van-tag>
        <van-grid class="infomation-list" :column-num="3">
          <van-grid-item class="infomation-list-item">
            <div class="item-label">总数</div>
            <div class="item-value">18</div>
          </van-grid-item>
          <van-grid-item class="infomation-list-item">
            <div class="item-label">一般</div>
            <div class="item-value">16</div>
          </van-grid-item>
          <van-grid-item class="infomation-list-item">
            <div class="item-label">紧急</div>
            <div class="item-value">2</div>
          </van-grid-item>
        </van-grid>

      </div>
    </van-panel>

    <!-- 底部tab栏组件 -->
    <v-footer></v-footer>
  </div>
</template>

<script>
import Vue from 'vue'
import { NavBar,
 Panel, 
 Grid, 
 GridItem, 
 Row, 
 Col, 
 Icon, 
 Cell, 
 CellGroup, 
 Image, 
 Tag, 
 Step, 
 Steps, 
 Circle,
 Button,
 Tab,
 Tabs } from 'vant'
 import TheFooter from '@/components/common/TheFooter'

Vue.use(NavBar)
.use(Panel)
.use(Grid)
.use(GridItem)
.use(Row)
.use(Col)
.use(Icon)
.use(Cell)
.use(CellGroup)
.use(Image)
.use(Tag)
.use(Step)
.use(Steps)
.use(Circle)
.use(Button)
.use(Tab)
.use(Tabs)

export default {
  props: {
    zIndex: Number,
  },
  components: {
    'v-footer': TheFooter
  },
  data () {
    return {
      activeName: 'todayAlarm',
      currentRate: 0,
      gradientColor: {
        '0%': '#3fecff',
        '100%': '#6149f6'
      },
    }
  },
  computed: {
    text() {
      return this.currentRate.toFixed(0) + '%';
    }
  }
};
</script>

<style lang="less">
.page {
  padding: 46px 0 50px 0 !important;
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
      &-link {
        margin-left: 14px;
      }
    }
  }

  .infomation-list {
    margin: 10px auto;
    &-item {
      padding: 6px;
      text-align: center;
      .item-label {
        margin-bottom: 5px;
      }

      .item-value {
        height: 50px;
        line-height: 50px;
        font-size: 16px;
        font-weight: bolder;
      }
    }
  }

  .pd-top-10 {
    padding-top: 10px;
  }

}
</style>

