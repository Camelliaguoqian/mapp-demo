<template>
  <div class="page">
    <van-nav-bar title="设备" 
    fixed 
    :zIndex="100" 
    left-arrow 
    @click-left="goBack"></van-nav-bar>

    <section class="page-cover">
      <img class="device-img" src="@/assets/image/camera.jpg" alt="" />
    </section>

    <section class="page-wrapper">
      <control-card v-bind:listdata="deviceControl"></control-card>
      <info-card v-bind:listdata="devicelist"></info-card>
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
import ControlCard from '@/components/list/ControlCard'
import InfoCard from '@/components/list/InfoCard'

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
    "control-card": ControlCard,
    "info-card": InfoCard
  },
  data() {
    return {
      deviceControl: {
        isControled: "已开启",
        valueData: [
          {
            label: "当前状态",
            value: "打开",
          },
          {
            label: "当前转速",
            value: "1200RPM",
          },
          {
            label: "当前风量",
            value: "20M³/S",
          },
        ],
      },
      devicelist: [
        {
          label: "设备名称",
          value: "管廊摄像头",
        },
        {
          label: "设备类型",
          value: "摄像头",
        },
        {
          label: "设备编码",
          value: "D345345",
        },
        {
          label: "安装位置",
          value: "彩虹西路综合管廊 电力舱 08分区",
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

  &-cover {
    width: 100%;
    height: 100%;
    background-color: #fff;
    .device-img {
      display: block;
      margin: 0 auto;
      width: 300px;
      height: 240px;
    }
  }
  

}
</style>