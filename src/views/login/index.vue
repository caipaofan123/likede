<template>
  <div class="loginContainer">
    <div class="logindiv">
      <img src="../../assets/images/logo.png" alt="" class="logo">

      <el-form ref="form" :model="form" label-width="80px" class="formbody">
        <el-input v-model="username" placeholder="请输入用户名" class="formitem" />
        <el-input v-model="password" placeholder="请输入密码" show-password class="formitem" />
        <el-input v-model="code" placeholder="请输入验证码" class="formitem" />
        <el-button type="primary" class="formitem">登录</el-button>
      </el-form>

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {

      },
      username: '',
      password: '',
      code: ''
    }
  },

  created() {

  },

  methods: {

  }
}
</script>

<style scoped lang='scss'>
.loginContainer{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background:url('../../assets/images/bg.png');
  background-size: cover;
  .logindiv{
    position: relative;
    height: 388px;
    width:518px;
    background-color: #fff;
    border-radius: 18px;
    .logo{
      position: absolute;
      left: 210px;
      top: -50px;
      width: 96px;
    }

      .formbody{
        margin-top:70px ;
      width: 100%;
      height: 200px;
      // background-color: hotpink;
        display: flex;
        width: 100%;
        height: 300px;
        flex-direction: column;
        justify-content:space-around;
        align-items: center;
        .formitem{
        width: 446px;
        height: 52px;

        .el-form{
          background-color: red;
        }
      }

    }
  }
}
</style>
