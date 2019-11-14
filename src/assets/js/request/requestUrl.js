/**
 * url of request
 * 返回值格式：{
 * "retCode": "SUCCESS|FAIL",
 * "retMsg": "查询成功！|......",
 * "retData": {...} | [...]
 * }
 */
 
let url = {
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
  taskSearch: '/homePage/taskSearch'

}
 
export default {
  url
}
