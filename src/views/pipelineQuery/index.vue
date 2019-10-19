<template>
  <div class="page">
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
          label="舱室类别"
          :value="cabinType"
          placeholder="请选择舱室类别"
          @click="showCabinTypePicker = true"
        />
        <van-popup v-model="showCabinTypePicker" position="bottom">
          <van-picker 
            show-toolbar
            :columns="cabinTypeColumns"
            @cancel="showCabinTypePicker = false"
            @confirm="onConfirmCabinType"
          />
        </van-popup>

        <van-field 
          readonly
          clickable
          label="管线类别"
          :value="pipelineType"
          placeholder="请选择管线类别"
          @click="showPipelineTypePicker = true"
        />
        <van-popup v-model="showPipelineTypePicker" position="bottom">
          <van-picker 
            show-toolbar
            :columns="pipelineTypeColumns"
            @cancel="showPipelineTypePicker = false"
            @confirm="onConfirmPipelineType"
          />
        </van-popup>

        <van-field
          v-model="unit"
          clearable
          label="权属单位"
          placeholder="请输入权属单位"
        />

        <van-field
          v-model="pipelineCode"
          clearable
          label="管线编码"
          placeholder="请输入管线编码"
        />
      </van-cell-group>
    </div>

    <div class="page-wrapper">
      <van-button 
      type="info" 
      size="large"
      @click="onSubmit"
      >提交查询</van-button>
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
      minDate: DateUtil.format(DateUtil.date(),'YYYY-MM-DD'),
      startDateVal: '',
      endDateVal: '',
      startDate: new Date(),
      endDate: new Date(),
      showStartDatePicker: false,
      showEndDatePicker: false,
      pipe: '',
      showPipePicker: false,
      pipeColumns: ['黑龙江路综合管廊','习友路综合管廊','彩虹西路综合管廊','鸡鸣山路综合管廊'],
      cabinType: '',
      showCabinTypePicker: false,
      cabinTypeColumns: ['1舱','2舱','4舱'],
      pipelineType: '',
      showPipelineTypePicker: false,
      pipelineTypeColumns: ['污水管','给水管'],
      unit: '',
      pipelineCode: ''
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
    onConfirmCabinType(cabinType) {
      this.cabinType = cabinType;
      this.showCabinTypePicker = false;
    },
    onConfirmPipelineType(pipelineType) {
      this.pipelineType = pipelineType;
      this.showPipelineTypePicker = false;
    },
    onSubmit() {
      //console.log(this.$route); //通过 this.$route 访问当前路由
      //通过 this.$router 访问路由器
      this.$router.push('pipelineQueryList');

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

