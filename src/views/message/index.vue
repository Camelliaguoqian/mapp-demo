<template>
  <div class="message-page page">
    <van-nav-bar title="消息中心" fixed :zIndex="100"></van-nav-bar>

    <van-panel class="page-panel page-icon-panel">
      <div class="panel-title van-hairline--bottom" slot="header">
        <van-icon class="panel-title-icon" name="diamond" />
        告警分析
      </div>
      <div class="page-panel-content page-icon-panel-content">
        <van-tag mark type="primary">今日告警</van-tag>
        <van-row class="infomation-list">
          <van-col class="infomation-list-item van-hairline--surround" span="6">
            <div class="item-label">总数</div>
            <div class="item-value">48</div>
          </van-col>
          <van-col class="infomation-list-item van-hairline--surround" span="6">
            <div class="item-label">已解除</div>
            <div class="item-value">32</div>
          </van-col>
          <van-col class="infomation-list-item van-hairline--surround" span="6">
            <div class="item-label">未解除</div>
            <div class="item-value">16</div>
          </van-col>
          <van-col class="infomation-list-item van-hairline--surround" span="6">
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
          </van-col>
        </van-row>

        <!-- 系统列表 -->
        <van-row class="infomation-list">
          <van-col class="infomation-list-item van-hairline--surround" span="12">
            <div class="item-label">监控与报警系统</div>
            <div class="item-value">38</div>
          </van-col>
          <van-col class="infomation-list-item van-hairline--surround" span="12">
            <div class="item-label">消防系统</div>
            <div class="item-value">0</div>
          </van-col>
          <van-col class="infomation-list-item van-hairline--surround" span="8">
            <div class="item-label">通风系统</div>
            <div class="item-value">2</div>
          </van-col>
          <van-col class="infomation-list-item van-hairline--surround" span="8">
            <div class="item-label">排水系统</div>
            <div class="item-value">8</div>
          </van-col>
          <van-col class="infomation-list-item van-hairline--surround" span="8">
            <div class="item-label">照明系统</div>
            <div class="item-value">0</div>
          </van-col>
        </van-row>

        <van-tag mark type="warning">历史告警</van-tag>
        <van-row class="infomation-list">
          <van-col class="infomation-list-item van-hairline--surround" span="8">
            <div class="item-label">总数</div>
            <div class="item-value">1208</div>
          </van-col>
          <van-col class="infomation-list-item van-hairline--surround" span="4">
            <div class="item-label">一级</div>
            <div class="item-value">108</div>
          </van-col>
          <van-col class="infomation-list-item van-hairline--surround" span="4">
            <div class="item-label">二级</div>
            <div class="item-value">350</div>
          </van-col>
          <van-col class="infomation-list-item van-hairline--surround" span="4">
            <div class="item-label">三级</div>
            <div class="item-value">350</div>
          </van-col>
          <van-col class="infomation-list-item van-hairline--surround" span="4">
            <div class="item-label">四级</div>
            <div class="item-value">400</div>
          </van-col>
        </van-row>

        <!-- 系统列表 -->
        <van-row class="infomation-list">
          <van-col class="infomation-list-item van-hairline--surround" span="12">
            <div class="item-label">监控与报警系统</div>
            <div class="item-value">604</div>
          </van-col>
          <van-col class="infomation-list-item van-hairline--surround" span="12">
            <div class="item-label">消防系统</div>
            <div class="item-value">151</div>
          </van-col>
          <van-col class="infomation-list-item van-hairline--surround" span="8">
            <div class="item-label">通风系统</div>
            <div class="item-value">302</div>
          </van-col>
          <van-col class="infomation-list-item van-hairline--surround" span="8">
            <div class="item-label">排水系统</div>
            <div class="item-value">151</div>
          </van-col>
          <van-col class="infomation-list-item van-hairline--surround" span="8">
            <div class="item-label">照明系统</div>
            <div class="item-value">151</div>
          </van-col>
        </van-row>

      </div>
    </van-panel>

    <van-panel class="page-panel page-icon-panel">
      <div class="panel-title van-hairline--bottom" slot="header">
        <van-icon class="panel-title-icon" name="diamond" />
        通知统计
      </div>
      <div class="page-panel-content page-icon-panel-content">
        <van-tag mark type="primary">今日通知</van-tag>
        <van-row class="infomation-list">
          <van-col class="infomation-list-item van-hairline--surround" span="12">
            <div class="item-label">总数</div>
            <div class="item-value">8</div>
          </van-col>
          <van-col class="infomation-list-item van-hairline--surround" span="6">
            <div class="item-label">一般</div>
            <div class="item-value">6</div>
          </van-col>
          <van-col class="infomation-list-item van-hairline--surround" span="6">
            <div class="item-label">紧急</div>
            <div class="item-value">2</div>
          </van-col>
        </van-row>

        

        <van-tag mark type="warning">历史通知</van-tag>
        <van-row class="infomation-list">
          <van-col class="infomation-list-item van-hairline--surround" span="12">
            <div class="item-label">总数</div>
            <div class="item-value">18</div>
          </van-col>
          <van-col class="infomation-list-item van-hairline--surround" span="6">
            <div class="item-label">一般</div>
            <div class="item-value">16</div>
          </van-col>
          <van-col class="infomation-list-item van-hairline--surround" span="6">
            <div class="item-label">紧急</div>
            <div class="item-value">2</div>
          </van-col>
        </van-row>

      </div>
    </van-panel>
    
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
 Circle } from 'vant'

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

export default {
  props: {
    zIndex: Number,
  },
  components: {
    
  },
  data () {
    return {
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

}
</style>

