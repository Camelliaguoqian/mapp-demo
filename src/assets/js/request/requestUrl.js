/**
 * url of request
 * 返回值格式：{
 * "retCode": "SUCCESS|FAIL",
 * "retMsg": "查询成功！|......",
 * "retData": {...} | [...]
 * }
 */
 
let url = {
  //==========================字典值查询================================================
  /**
   * 字典值查询
   * 任务状态
   * 参数：String dicCode
   */
  getDicListByCode: '/dic/getDicListByCode',

  /**
   * 字典值查询
   * 查询管廊接口
   * 参数：无
   */
  getPipe: '/dic/getPipe',

  /**
   * 字典值查询
   * 根据管廊ID查询分区接口
   * 参数：String pipeId
   */
  getZoneByPipe: '/dic/getZoneByPipe',

  /**
   * 字典值查询
   * 根据管廊ID、分区ID查询舱室接口
   * 参数：String pipeId,String zoneId
   */
  getCabinByPipeZone: '/dic/getCabinByPipeZone',

  //==========================页面功能=================================================

  /**
   * 登录
   * 参数：String userCode,String userPwd （md5加密）
   */
  userLogin: '/user/login',

  /**
   * 退出登录
   * 参数：无
   */
  userLoginOut: '/user/logout',

  /**
   * 工作任务
   * 参数：无
   */
  workTaskList: '/homePage/workTask',

  /**
   * 任务查询
   * 参数：String pipeId,String startTime,String endTime,String status,String code
   */
  taskSearch: '/homePage/taskSearch',

  /**
   * 报警查询
   * 参数：String pipeId,String zoneId,String cabinId,String systemId,String alarmLevel,String startTime,String endTime
   */
  alarmSearch: '/homePage/alarmSearch',

}
 
export default {
  url
}
