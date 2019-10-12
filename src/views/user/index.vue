<template>
  <div class="user-page page">
    <van-nav-bar title="个人中心" fixed :zIndex="100"></van-nav-bar>

    <div class="user-poster">
      <van-row>
        <van-col class="user-poster-image" span=6>
          <van-image round src="https://img.yzcdn.cn/vant/cat.jpeg" />
        </van-col>
        <van-col class="user-poster-info" span=16>
          <ul>
            <li class="account-item">
              <span class="account-item-name">王丽丽</span>
            </li>
            <li class="account-item">
              <van-icon class="account-item-icon" name="contact" />
              <span class="account-item-phone">15523231111</span>
              <van-tag class="account-item-status" type="warning">审核中</van-tag>
            </li>
          </ul>
        </van-col>
        <van-col class="user-poster-operate" span=2>
          <van-icon name="arrow" />
        </van-col>
      </van-row>
    </div>
    
    <van-grid :column-num="3">
      <van-grid-item icon="manager-o" text="基本信息" />
      <van-grid-item icon="bar-chart-o" text="工作统计" />
      <van-grid-item icon="tosend" text="我的提醒" />
    </van-grid>

    <van-cell-group class="user-group">
      <van-cell icon="chat-o" title="我的消息" is-link />
    </van-cell-group>

    <van-cell-group>
      <van-cell icon="service-o" title="咨询帮助" is-link />
      <van-cell icon="comment-o" title="问题反馈" is-link />
      <van-cell icon="desktop-o" title="关于" is-link />
    </van-cell-group>
  </div>
</template>

<script>
import Vue from 'vue'
import { NavBar, Grid, GridItem, Row, Col, Icon, Cell, CellGroup, Image, Tag } from 'vant'

Vue.use(NavBar).use(Grid).use(GridItem).use(Row).use(Col).use(Icon).use(Cell).use(CellGroup).use(Image).use(Tag)

export default {
  props: {
    zIndex: Number,
  },
  components: {
    // [NavBar.name]: NavBar,
    // [Row.name]: Row,
    // [Col.name]: Col,
    // [Icon.name]: Icon,
    // [Cell.name]: Cell,
    // [CellGroup.name]: CellGroup
  }
};
</script>

<style lang="less">
.user {
  &-poster {
    padding: 10px 16px;
    display: block;
    height: 100px;
    background-color: rgba(91, 193, 211, 0.9);
    &-image img{
      margin: 10px auto;
      width: 80px;
      height: 80px;
    }

    &-info ul{
      margin: 25px 10px;
      .account-item {
        line-height: 24px;
        color: #fff;
        &-name {
          font-size: 14px;
        }
        &-icon {
          margin-right: 2px;
          vertical-align: middle;
          font-size: 12px;
        }
        &-phone {
          font-size: 12px;
        }
        &-status {
          font-size: 12px;
          margin-left: 8px;
        }
      }
    }

    &-operate {
      text-align: right;
      line-height: 100px;
      color: #fff;
    }
  }

  &-group {
    margin-bottom: 15px;
  }

  &-links {
    padding: 15px 0;
    font-size: 12px;
    text-align: center;
    background-color: #fff;

    .van-icon {
      display: block;
      font-size: 24px;
    }
  }
}
</style>
