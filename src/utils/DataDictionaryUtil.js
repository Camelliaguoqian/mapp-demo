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
}


  export default DataDictionaryUtil


