//common方法-自定义数据字典值
let DataDictionaryUtil = {}

DataDictionaryUtil = {
  //字典值-任务状态
  commonJudgeStatusType(val) {
    let retData = {status: '',classNameType: ''};
    switch(val) {
      case '150':
        retData.status = '待处理';
        retData.classNameType = 'danger';
        break;
      case '151':
        retData.status = '处理中';
        retData.classNameType = 'warning';
        break;
      case '152':
        retData.status = '已完成';
        retData.classNameType = 'success';
        break;
    }
    return retData;
  },
  //反查任务状态的id
  commonJudgeStatusTypeId(val) {
    let typeId = '';
    switch(val) {
      case '待处理':
        typeId = '150';
        break;
      case '处理中':
        typeId = '151';
        break;
      case '已完成':
        typeId = '152';
        break;
    }
    return typeId;
  },
  //字典值-报警级别
  commonJudgeAlarmType(val) {
    let retData = {status: '',classNameType: ''};
    switch(val) {
      case '1':
        retData.status = '一级';
        retData.classNameType = 'danger';
        break;
      case '2':
        retData.status = '二级';
        retData.classNameType = 'warning';
        break;
      case '3':
        retData.status = '三级';
        retData.classNameType = 'primary';
        break;
      case '4':
        retData.status = '四级';
        retData.classNameType = 'success';
        break;
    }
    return retData;
  },


}


  export default DataDictionaryUtil


