<template>
  <form class="login-form" @submit="doSubmit">
    <h1>
      <span>黑龙江路综合管控平台</span>
    </h1>
    
    <van-cell-group>
      <van-field
        placeholder="请输入用户名"
        v-model="username"
        clearable
        label="用户名"
        class="login-input"
        :error-message="errorUserMsg"
      />

      <van-field
        placeholder="请输入密码"
        v-model="password"
        type="password"
        label="密码"
        class="login-input"
        :error-message="errorPsdMsg"
      />
    </van-cell-group>

    <van-button type="info" size="large" class="login-btn">登录</van-button>
  </form>
</template>

<script>
import Vue from 'vue'
import { Field, Cell, CellGroup, Button} from 'vant'

Vue.use(Field)
.use(Cell)
.use(CellGroup)
.use(Button)

export default {
  metaInfo: {
    title: 'Login Page'
  },
  data () {
    return {
      username: '',
      password: '',
      errorUserMsg: '',
      errorPsdMsg: ''
    }
  },
  methods: {
    doSubmit (e) {
      e.preventDefault();
      if (this.validate()) {
        // 调用接口
        this.login({
          username: this.username,
          password: this.password
        })
        .then(() => {
          this.$router.replace('/home');
        });
      }
    },
    validate () {
      if (!this.username.trim()) {
        this.errorUserMsg = '姓名不能为空';
        return false;
      }
      else if (!this.password.trim()) {
        this.errorPsdMsg = '密码不能为空';
        return false;
      }
      this.errorUserMsg = '';
      this.errorPsdMsg = '';
      return true;
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