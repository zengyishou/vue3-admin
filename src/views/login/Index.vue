<script setup>
const loginForm = reactive({ username: '', password: '' })
</script>

<template>
  <div class="login">
    <div class="login-containe">
      <img src="@/assets/images/login-form-bg.png" class="login-bg">
      <el-form class="login-form" label-position="top">
        <h1 class="title">
          用户登录
        </h1>
        <div class="containe">
          <el-form-item label="账号">
            <el-input
              v-model="loginForm.username"
              type="text"
              placeholder="请输入账号"
            >
              <template #prefix>
                <el-icon><User /></el-icon>
              </template>
            </el-input>
          </el-form-item>
          <el-form-item label="密码">
            <el-input
              v-model="loginForm.password"
              type="password"
              placeholder="请输入密码"
              show-password
            >
              <template #prefix>
                <el-icon><Unlock /></el-icon>
              </template>
            </el-input>
          </el-form-item>
          <el-form-item>
            <el-button size="large" type="primary" style="width:100%">
              登录
            </el-button>
          </el-form-item>
        </div>
      </el-form>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.login{
  width: 100vw;
  height: 100vh;
  background: url('@/assets/images/login-bg.png')  no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  .login-containe{
    width: 960px;
    height: 490px;
    border-radius: 12px;
    background: #FFFFFF;
    box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.08),0px 2px 6px 0px rgba(0, 0, 0, 0.06),0px 4px 8px 2px rgba(0, 0, 0, 0.04);
    display: flex;
    justify-content: space-around;
    align-items: center;
    .login-bg{
      width: 380px;
    }
    .login-form{
      width: 300px;
      .title {
        text-align: center;
      }
    }
  }
}
</style>
