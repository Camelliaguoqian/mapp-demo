<template>
  <div class="task-query-page page">
    <van-nav-bar title="任务查询" 
    fixed 
    :zIndex="100" 
    left-arrow 
    @click-left="goBack"></van-nav-bar>

    <div class="page-wrapper">
      <van-cell-group>
        <van-field 
          readonly
          clickable
          label="管廊"
          :value="pipe"
          placeholder="请选择管廊"
          @click="showPipePicker = true"
        />
        <van-popup v-model="showPipePicker" position="bottom">
          <van-picker 
            show-toolbar
            :columns="pipeColumns"
            @cancel="showPipePicker = false"
            @confirm="onConfirmPipe"
          />
        </van-popup>

        <van-field 
          readonly
          clickable
          label="起始时间"
          :value="startDate"
          placeholder="请选择起始时间"
          @click="showStartDatePicker = true"
        />
        <van-popup v-model="showStartDatePicker" position="bottom">
          <van-datetime-picker 
            v-model="startDate"
            type="datetime"
            @cancel="showStartDatePicker = false"
            @confirm="onConfirmStartDate"
          />
        </van-popup>

        <van-field 
          readonly
          clickable
          label="终止时间"
          :value="endDate"
          placeholder="请选择终止时间"
          @click="showEndDatePicker = true"
        />
        <van-popup v-model="showEndDatePicker" position="bottom">
          <van-datetime-picker 
            v-model="endDate"
            type="datetime"
            @cancel="showEndDatePicker = false"
            @confirm="onConfirmEndDate"
          />
        </van-popup>        

        <van-field 
          readonly
          clickable
          label="工单状态"
          :value="status"
          placeholder="请选择工单状态"
          @click="showStatusPicker = true"
        />
        <van-popup v-model="showStatusPicker" position="bottom">
          <van-picker 
            show-toolbar
            :columns="statusColumns"
            @cancel="showStatusPicker = false"
            @confirm="onConfirmStatus"
          />
        </van-popup>

        <van-field
          v-model="orderCode"
          clearable
          label="工单编码"
          right-icon="question-o"
          placeholder="请输入工单编码"
          @click-right-icon="$toast('包含巡检任务和维修任务的工单编码')"
        />
      </van-cell-group>
    </div>

    <div class="page-wrapper">
      <van-button type="info" size="large">提交查询</van-button>
    </div>
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
  props: {
    zIndex: Number,
  },
  data() {
    return {
      startDate: '',
      showStartDatePicker: false,
      endDate: '',
      showEndDatePicker: false,
      orderCode: '',
      pipe: '',
      showPipePicker: false,
      pipeColumns: ['黑龙江路综合管廊','习友路综合管廊','彩虹西路综合管廊','鸡鸣山路综合管廊'],
      status: '',
      showStatusPicker: false,
      statusColumns: ['已完成','进行中','未完成'],
    }
  },
  methods: {
    goBack() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
    },
    onConfirmPipe(pipe) {
      this.pipe = pipe;
      this.showPipePicker = false;
    },
    onConfirmStatus(status) {
      this.status = status;
      this.showStatusPicker = false;
    },
    onConfirmStartDate(startDate) {
      this.startDate = startDate;
      this.showStartDatePicker = false;
    },
    onConfirmEndDate(endDate) {
      this.endDate = endDate;
      this.showEndDatePicker = false;
    }
  }
}
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

}
</style>

