<template>
  <div class="login-form">
    <h1>
      <span>黑龙江路综合管控平台</span>
    </h1>
    
    <!-- 登录页 用户表单 -->
    <van-cell-group>
      <van-field
        v-model="userCode"
        clearable
        label="用户名"
        right-icon="question-o"
        placeholder="请输入用户名"
        left-icon="contact"
        @click-right-icon="$toast('用户名必须是手机号')"
      />
      
      <van-field
        v-model="userPwd"
        clearable
        type="password"
        label="密码"
        right-icon="question-o"
        placeholder="请输入密码"
        left-icon="closed-eye"
        @click-right-icon="$toast('密码必须是数字、字母、下划线')"
      />
      <!--登录按钮-->
      <div class="login-btn"><van-button type="info" size="large" @click="onSubmit">登录</van-button></div>
    </van-cell-group>

  </div>
</template>

<script>
import Vue from 'vue'
import { Field, Cell, CellGroup, Button, Toast} from 'vant'


Vue.use(Field)
.use(Cell)
.use(CellGroup)
.use(Button)
.use(Toast)


export default {
  name: 'loginPage',
  data () {
    return {
      errors: [],
      userCode: '',
      userPwd: ''
    }
  },
  methods: {
    // 表单提交
    onSubmit: function (e,userCode,userPwd) {
      if(this.userCode == ''){
        this.$toast("用户名不能为空");
        return false;
      }else if(this.userPwd == ''){
        this.$toast("密码不能为空");
        return false;
      }else{
        let that=this; // 放置指针，便于then操作的获取
        let md5UserPwd = this.$md5(this.userPwd);

        this.request.httpPost(this.requestUrl.userLogin, {
          userCode: this.userCode,
          userPwd: md5UserPwd}
        ).then(data => {
          let result = data; 
          let resultRetCode = result.retCode; 
          let resultRetMsg = result.retMsg; 
          let resultRetData = result.retData; 
          // console.log(result);
          // console.log(resultRetCode);
          // console.log(resultRetMsg);
          // console.log(resultRetData);

          if(resultRetCode === "SUCCESS"){
            this.$toast(resultRetMsg);
            //登录成功到首页
            this.$router.replace('/home');
          }
          if(resultRetCode === "FAIL"){
            this.$toast(resultRetMsg);
          }  

        }).catch((error) => {
          this.$toast("请求失败"+error);
        });
        
        e.preventDefault();
      }
    }
  }
}
</script>

<style lang="less" scoped>
.login-form {
  margin: 0 auto;
  padding: 16px;
  background-color: #fff;
  h1 {
    display: block;
    margin: 20px auto;
    text-align: center;
    font-weight: 100;
    color: #3d3d3d;
  }

  .error-msg {
    font-size: 12px;
    color: red;
  }

  .login-btn {
    margin-top: 20px;
  }
}
</style>