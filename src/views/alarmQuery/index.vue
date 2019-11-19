<template>
  <div class="page">
    <van-nav-bar title="报警查询" 
    fixed 
    left-arrow 
    :zIndex="100" 
    @click-left="goBack"></van-nav-bar>

    <div class="page-wrapper">
      <van-cell-group>
        <van-field 
          readonly
          clickable
          label="所属管廊"
          :value="pipeName"
          placeholder="请选择所属管廊"
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
          label="所属分区"
          :value="zoneName"
          placeholder="请选择所属分区"
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
          clickable
          label="所属舱室"
          :value="cabinName"
          placeholder="请选择所属舱室"
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
          clickable
          label="告警级别"
          :value="level"
          placeholder="请选择告警级别"
          @click="showLevelPicker = true"
        />
        <van-popup v-model="showLevelPicker" position="bottom">
          <van-picker 
            show-toolbar
            :columns="levelColumns"
            @cancel="showLevelPicker = false"
            @confirm="onConfirmLevel"
          />
        </van-popup>

        <van-field 
          readonly
          clickable
          label="起始时间"
          :value="startDateVal"
          placeholder="请选择起始时间"
          @click="showStartDatePicker = true"
        />
        <van-popup v-model="showStartDatePicker" position="bottom">
          <van-datetime-picker 
            v-model="startDate"
            type="date"
            :min-date="minDate"
            @cancel="showStartDatePicker = false"
            @confirm="onConfirmStartDate"
          />
        </van-popup>

        <van-field 
          readonly
          clickable
          label="终止时间"
          :value="endDateVal"
          placeholder="请选择终止时间"
          @click="showEndDatePicker = true"
        />
        <van-popup v-model="showEndDatePicker" position="bottom">
          <van-datetime-picker 
            v-model="endDate"
            type="date"
            :min-date="minDate"
            @cancel="showEndDatePicker = false"
            @confirm="onConfirmEndDate"
          />
        </van-popup>        

    
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
import { NavBar,
 Cell, 
 CellGroup,  
 Field,
 DatetimePicker,
 Picker,
 Popup,
 Button
} from 'vant'
import DateUtil from 'utils/DateUtil'
import DataDictionaryUtil from 'utils/DataDictionaryUtil'

export default {
  name: 'AlarmQueryIndexPage',
  components: {
    [NavBar.name]: NavBar,
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup,
    [Field.name]: Field,
    [DatetimePicker.name]: DatetimePicker,
    [Picker.name]: Picker,
    [Popup.name]: Popup,
    [Button.name]: Button,
  },
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
      orderCode: '',
      pipeName: '',
      pipeId: '',
      showPipePicker: false,
      pipeColumns: ['黑龙江路综合管廊'],
      zoneName: '',
      zoneId: '',
      showZonePicker: false,
      zoneColumns: ['分区01','分区02','分区03'],
      cabinName: '',
      cabinId: '',
      showCabinPicker: false,
      cabinColumns: ['综合舱','燃气舱','电力舱','热力舱'],
      system: '',
      systemId: '',
      showSystemPicker: false,
      systemColumns: ['监测与环控系统','排水系统'],
      level: '',
      showLevelPicker: false,
      levelColumns: [],
    }
  },
  mounted: function() {
    this.getDicCode();
  },
  methods: {
    goBack: function() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
    },
    getDicCode: function() {
      //字典值-告警级别
      this.request.httpPost(this.requestUrl.getDicListByCode, {
        dicCode: 'POW_DEF_ALARM.ALARM_LEVEL'}
      ).then(data => {
        let result = data; 
        let resultRetCode = result.retCode; console.log(data);
        let resultRetMsg = result.retMsg; 
        let resultRetData = result.retData; 
        
        if(resultRetCode === "SUCCESS"){
          //this.$toast(resultRetMsg);
          for(let i=0; i<resultRetData.length; i++) {
            this.levelColumns.push(resultRetData[i].name);
          }
        }
        if(resultRetCode === "FAIL"){
          this.$toast(resultRetMsg);
        } 
      }).catch((error) => {
        this.$toast("请求失败"+error);
      });
    },
    onConfirmPipe: function(pipeName) {
      this.pipeName = pipeName;
      switch(pipeName) {
        case '黑龙江路综合管廊':
          this.pipeId = '26';
          break;
      }
      this.showPipePicker = false;
    },
    onConfirmZone: function(zoneName) {
      this.zoneName = zoneName;
      this.zoneId = '';
      this.showZonePicker = false;
    },
    onConfirmCabin: function(cabinName) {
      this.cabinName = cabinName;
      this.cabinId = '';
      this.showCabinPicker = false;
    },
    onConfirmSystem: function(system) {
      this.system = system;
      this.systemId = '';
      this.showSystemPicker = false;
    },
    onConfirmLevel: function(level) {
      this.level = level;
      this.showLevelPicker = false;
    },
    onConfirmStartDate: function(val) {
      console.log(val);
      let currentVal = DateUtil.format(val,'YYYY-MM-DD');
      this.startDateVal = currentVal;
      this.showStartDatePicker = false;
    },
    onConfirmEndDate: function(val) {
      console.log(val);
      let currentVal = DateUtil.format(val,'YYYY-MM-DD');
      this.endDateVal = currentVal;
      this.showEndDatePicker = false;
    },
    onSubmit: function (e) {
      e.preventDefault();
      //校验
      if(this.pipeId == '' 
      && this.zoneId == '' 
      && this.cabinId == '' 
      && this.startDateVal == '' 
      && this.endDateVal == '' 
      && this.systemId == '' 
      && this.level == ''){
        this.$toast("请至少选择一项查询条件");
        return false;
      }else {
        //带参数的跳转页面
        this.$router.push({
          path:"alarmQueryList",
          query: {
          pipeId: this.pipeId,
          zoneId: this.zoneId,
          cabinId: this.cabinId,
          startTime: this.startDateVal,
          endTime: this.endDateVal,
          systemId: this.systemId,
          alarmLevel: this.level
          }
        })
      }
    }
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
    }
  }

}
</style>

