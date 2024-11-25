<template>
  <div class="logIn">
    <h2 class="title">登录</h2>
    <el-form class="log-in-form">
      <el-form-item label-position="top" label="用户名 / 手机号">
        <el-input size="large" placeholder="请输入用户名 / 手机号"></el-input>
      </el-form-item>
      <el-form-item label-position="top" label="密码">
        <el-input size="large" placeholder="请输入密码"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "LogIn",
};
</script>

<style scoped>
.log-in-form {
  position: relative;
  transform: translate(0, 35%);
}
</style>