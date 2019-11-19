<template>
  <div class="page">
    <van-nav-bar title="管廊查询"  
    :zIndex="100" 
    fixed
    left-arrow 
    @click-left="goBack"></van-nav-bar>

    <van-panel class="page-panel page-icon-panel">
      <div class="panel-title van-hairline--bottom" slot="header">
        <van-icon class="panel-title-icon" name="diamond" />
        管廊基本信息
      </div>
      <div class="page-panel-content">
        <!-- 简单信息列表组件 -->
        <simple-list :listdata="pipeinfolist"></simple-list>
      </div>
    </van-panel>

    <van-panel class="page-panel page-icon-panel">
      <div class="panel-title van-hairline--bottom" slot="header">
        <van-icon class="panel-title-icon" name="diamond" />
        设备信息统计
      </div>
      <div class="page-panel-content">
        
      </div>
    </van-panel>

    <van-panel class="page-panel page-icon-panel">
      <div class="panel-title van-hairline--bottom" slot="header">
        <van-icon class="panel-title-icon" name="diamond" />
        历史报警分析
      </div>
      <div class="page-panel-content">
        
      </div>
    </van-panel>
    
  </div>
</template>

<script>
import { NavBar,
 Panel,
} from 'vant'
import SimpleList from 'components/list/SimpleList'


export default {
  name: 'PipeQueryListPage',
  components: {
    [NavBar.name]: NavBar,
    [Panel.name]: Panel,
    "simple-list": SimpleList
  },
  props: {
    zIndex: Number,
  },
  data() {
    return {
      pipeinfolist: [
        {
          label: "管廊编码",
          value: "GL-107901-1003",
        },
        {
          label: "管廊段编码",
          value: "K0+120-k12+120",
        },
        {
          label: "管廊段名称",
          value: "黑龙江路综合管廊",
        },
        {
          label: "安全结构等级",
          value: "2级",
        },
        {
          label: "断面形式",
          value: "单舱",
        },
        {
          label: "长度",
          value: "368.95米",
        },
        {
          label: "宽度",
          value: "10米",
        },
        {
          label: "高度",
          value: "5米",
        },
        {
          label: "建设时间",
          value: "2018-05-14",
        },
        {
          label: "竣工时间",
          value: "2018-10-14",
        },
        {
          label: "设计单位",
          value: "合肥市市政设计院",
        },
        {
          label: "建设单位",
          value: "合肥市滨湖新区开发区管委会",
        },
        {
          label: "监理单位",
          value: "上海新光工程咨询有限公司",
        },
        {
          label: "权属单位",
          value: "黑龙江路管廊投资建设有限公司",
        },
        {
          label: "施工单位",
          value: "中国能源建设集团安徽电力建设第一工程有限公司",
        },
        {
          label: "建设费用",
          value: "383.11万元",
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
  padding: 46px 0 0 0;
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
        margin-left: 10px;
      }
    }
  }

}
</style>

