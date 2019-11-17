<template>
  <div class="page">
    <van-nav-bar title="基本信息" 
    fixed 
    :zIndex="100" 
    left-arrow 
    @click-left="goBack"></van-nav-bar>

    <van-cell-group class="cell-group-list">
      <van-cell title="用户名" is-link value="王丽丽" />
      <van-cell title="手机号" is-link value="15523231111" />
      <van-cell title="邮箱" is-link value="178896554@qq.com" />
      <van-cell title="职务" is-link value="巡检人员" />
    </van-cell-group>



  </div>  
</template>

<script>
import Vue from 'vue'
import { NavBar,
 Cell, 
 CellGroup,  
 Icon, 
 Field,
 DatetimePicker,
 Picker,
 Popup,
 Toast,
 Button
} from 'vant'

Vue.use(NavBar)
.use(Cell)
.use(CellGroup)
.use(Icon)
.use(Field)
.use(DatetimePicker)
.use(Picker)
.use(Popup)
.use(Toast)
.use(Button)


export default {
  name: 'BasicUserPage',
  props: {
    zIndex: Number,
  },
  data() {
    return {
      
    }
  },
  methods: {
    goBack() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
    },
    
  }
}
</script>

<style lang="less">
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
    }
  }

}
</style>

