<template>
  <div class="logIn">
    <h2 class="title">登录</h2>
    <el-form :model="formData" class="log-in-form">
      <el-form-item label-position="top" label="用户名 / 手机号" required>
        <el-input
          v-model="formData.userName"
          size="large"
          placeholder="请输入用户名 / 手机号"
        ></el-input>
      </el-form-item>
      <el-form-item label-position="top" label="密码" required>
        <el-input
          v-model="formData.password"
          size="large"
          placeholder="请输入密码"
          type="password"
          show-password
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button
          size="large"
          style="width: 100%"
          type="primary"
          @click="logIn"
          >登录</el-button
        >
      </el-form-item>
      <el-form-item>
        <el-button size="large" style="width: 100%" @click="goRegister"
          >注册</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { ElMessage } from "element-plus";
export default {
  name: "LogIn",
  data() {
    return {
      logInData: {},
      formData: {
        userName: "",
        password: "",
      },
    };
  },
  methods: {
    // 登录
    logIn() {
      const that = this;
      const temp = JSON.parse(JSON.stringify(that.formData));
      if (that.checkForm()) {
        console.log(temp);
        localStorage.setItem("mySystem-token", "token");
        that.$router.push({ name: "courseList" });
      }
    },
    // 检查表单
    checkForm() {
      const that = this;
      if (that.formData.userName === "") {
        ElMessage.warning({ message: "请输入用户名 / 手机号" });
        return false;
      } else if (that.formData.password === "") {
        ElMessage.warning({ message: "请输入密码" });
        return false;
      }
      return true;
    },
    // 去注册
    goRegister() {
      const that = this;
      that.$router.push({ name: "register" });
    },
  },
};
</script>

<style scoped>
.logIn {
  height: 80vh;
  position: relative;
  top: 15vh;
}
</style>