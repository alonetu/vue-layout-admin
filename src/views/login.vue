<template>
  <div class="login-page">
    <el-form
      ref="loginForm"
      :model="loginForm"
      :hide-required-asterisk=true
      label-width="80px"
      class="login-page-container"
    >
      <el-form-item
        prop="username"
        :rules="[{ required: true, message: '请输入账号', trigger: 'blur' }]"
      >
        <el-input 
          v-model="loginForm.username" 
          placeholder="请输入账号"
          size="medium"
        >
          <i slot="prefix" class="el-icon-user "></i>
        </el-input>
      </el-form-item>
      <el-form-item
        prop="password"
        :rules="[{ required: true, message: '请输入密码', trigger: 'blur' }]"
      >
        <el-input 
          v-model="loginForm.password" 
          type="password" 
          placeholder="请输入密码"
          size="medium"
          @keyup.enter.native="submitForm()"
          show-password
        >
          <i slot="prefix" class="el-icon-lock"></i>
        </el-input>
      </el-form-item>
      <el-form-item style="margin-bottom: 0;">
        <el-button 
          type="primary" 
          size="small" 
          @click="submitForm()"
        >登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
 
<script>
export default {
  name: "login",
  data() {
    return {
      loginForm: {
        username: "admin",
        password: "123"
      }
    };
  },
  methods: {
    submitForm() {
      this.$refs['loginForm'].validate(valid => {
        if (valid) {
          this.$router.push({ path: '/home' })
        } else {
          return false;
        }
      })
    }
  }
}
</script>
 
<style lang="scss">
.login-page {
  position: absolute;
  display: flex;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(45deg, #9fbaa8, #57606f); // CSS3背景线性渐变
  transition: 0.4s;
  .login-page-container {
    width: 400px;
    padding: 24px;
    margin: auto;
    .el-button {
      width: 100%;
      height: 32px;
    }
  }
  .el-input--medium .el-input__inner {
    height: 42px;
  }
  .el-input--prefix .el-input__inner {
    padding-left: 36px;
  }
  .el-input__prefix {
    left: 10px;
  }
  .el-input__inner {
    background-color: #57606f;
    border: 1px solid #606266;
    color: #fff;
  }
}
</style>