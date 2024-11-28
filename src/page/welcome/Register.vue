<template>
  <div class="register">
    <h2 class="title">注册</h2>
    <el-form :model="formData" class="log-in-form">
      <el-form-item label-position="top" label="手机号" required>
        <el-input
          v-model="formData.phone"
          size="large"
          placeholder="请输入手机号"
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
      <el-form-item label-position="top" label="确认密码" required>
        <el-input
          v-model="formData.rePassword"
          size="large"
          placeholder="请再次输入密码"
          type="password"
          show-password
        ></el-input>
      </el-form-item>
      <el-form-item label-position="top" label="手机验证码" required>
        <el-input
          v-model="formData.code"
          size="large"
          placeholder="请输入手机验证码"
          style="width: 35%"
        ></el-input>
        <el-button
          size="large"
          class="m-l"
          :disabled="getCodeStatus !== '获取验证码'"
          @click="sendCode"
        >
          {{ getCodeStatus }}
          <template v-if="getCodeStatus !== '获取验证码'">
            后再次获取
          </template></el-button
        >
      </el-form-item>
      <el-form-item>
        <el-button
          size="large"
          style="width: 100%"
          type="primary"
          @click="register"
          >注册</el-button
        >
      </el-form-item>
      <el-form-item>
        <el-button size="large" style="width: 100%" @click="back"
          >返回</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { ElMessage } from "element-plus";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Register",
  data() {
    return {
      formData: {
        phone: "",
        password: "",
        rePassword: "",
        code: "",
      },
      getCodeStatus: "获取验证码",
    };
  },
  methods: {
    // 注册
    register() {
      const that = this;
      if (that.checkForm()) {
        const temp = JSON.parse(JSON.stringify(this.formData));
        console.log(temp);
        that.back();
      }
    },
    // 检查表单数据
    checkForm() {
      const that = this;
      const telRule =
        /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/;
      const passwordRule = /^(?=.*\d)(?=.*[a-zA-Z])(?=.*[^\da-zA-Z\s]).{9,16}$/;
      if (that.formData.phone === "") {
        ElMessage.warning({ message: "请输入手机号" });
        return false;
      } else if (that.formData.password === "") {
        ElMessage.warning({ message: "请输入密码" });
        return false;
      } else if (!passwordRule.test(that.formData.password)) {
        ElMessage.warning({
          message: "密码应为9-16位包含数字、字母、特殊字符的字符组合",
        });
      } else if (that.formData.rePassword !== that.formData.password) {
        ElMessage.warning({ message: "两次输入密码应一致" });
        return false;
      } else if (that.formData.code === "") {
        ElMessage.warning({ message: "请输入手机验证码" });
        return false;
      } else if (!telRule.test(that.formData.phone)) {
        ElMessage.warning({ message: "请输入正确的手机号" });
      }
      return true;
    },
    // 发送验证码
    sendCode() {
      const that = this;
      that.getCodeStatus = 5;
      const count = setInterval(() => {
        that.getCodeStatus = that.getCodeStatus - 1;
        if (that.getCodeStatus === 0) {
          clearInterval(count);
          that.getCodeStatus = "获取验证码";
        }
      }, 1000);
      // 请求发送验证码
    },
    // 返回
    back() {
      const that = this;
      that.$router.back();
    },
  },
};
</script>

<style scoped>
.register {
  height: 80vh;
  position: relative;
  /* top: 5vh; */
}
</style>