<template>
  <div class="page">
    <van-nav-bar title="设备查询" 
    fixed 
    :zIndex="100" 
    left-arrow 
    @click-left="goBack"></van-nav-bar>

    <div class="page-wrapper">
      <van-cell-group>
        <van-field 
          readonly
          required
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
          required
          clickable
          label="分区"
          :value="zone"
          placeholder="请选择分区"
          @click="showZonePicker = true"
        />
        <van-popup v-model="showZonePicker" position="bottom">
          <van-picker 
            show-toolbar
            :columns="zoneColumns"
            @cancel="showZonePicker = false"
            @confirm="onConfirmZone"
          />
        </van-popup>

        <van-field 
          readonly
          required
          clickable
          label="舱室"
          :value="cabin"
          placeholder="请选择舱室"
          @click="showCabinPicker = true"
        />
        <van-popup v-model="showCabinPicker" position="bottom">
          <van-picker 
            show-toolbar
            :columns="cabinColumns"
            @cancel="showCabinPicker = false"
            @confirm="onConfirmCabin"
          />
        </van-popup>

        <van-field 
          readonly
          required
          clickable
          label="系统名称"
          :value="system"
          placeholder="请选择系统名称"
          @click="showSystemPicker = true"
        />
        <van-popup v-model="showSystemPicker" position="bottom">
          <van-picker 
            show-toolbar
            :columns="systemColumns"
            @cancel="showSystemPicker = false"
            @confirm="onConfirmSystem"
          />
        </van-popup>

        <van-field 
          readonly
          required
          clickable
          label="设备类型"
          :value="deviceType"
          placeholder="请选择设备类型"
          @click="showDeviceTypePicker = true"
        />
        <van-popup v-model="showDeviceTypePicker" position="bottom">
          <van-picker 
            show-toolbar
            :columns="deviceTypeColumns"
            @cancel="showDeviceTypePicker = false"
            @confirm="onConfirmDeviceType"
          />
        </van-popup>

        <van-field
          v-model="deviceCode"
          clearable
          label="设备编码"
          placeholder="请输入设备编码"
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
      pipe: '',
      showPipePicker: false,
      pipeColumns: ['黑龙江路综合管廊','习友路综合管廊','彩虹西路综合管廊','鸡鸣山路综合管廊'],
      zone: '',
      showZonePicker: false,
      zoneColumns: ['分区01','分区02','分区03'],
      cabin: '',
      showCabinPicker: false,
      cabinColumns: ['综合舱','燃气舱','电力舱','热力舱'],
      system: '',
      showSystemPicker: false,
      systemColumns: ['监测与环控系统','排水系统'],
      deviceType: '',
      showDeviceTypePicker: false,
      deviceTypeColumns: ['传感器','摄像头'],
      deviceCode: '',
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
    onConfirmZone(zone) {
      this.zone = zone;
      this.showZonePicker = false;
    },
    onConfirmCabin(cabin) {
      this.cabin = cabin;
      this.showCabinPicker = false;
    },
    onConfirmSystem(system) {
      this.system = system;
      this.showSystemPicker = false;
    },
    onConfirmDeviceType(deviceType) {
      this.deviceType = deviceType;
      this.showDeviceTypePicker = false;
    },
    onSubmit() {
      //console.log(this.$route); //通过 this.$route 访问当前路由
      //通过 this.$router 访问路由器
      this.$router.push('deviceQueryList');

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

