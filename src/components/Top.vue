<template>
  <div class="top">
    <el-row align="middle">
      <el-col :span="2">
        <div class="ali-item-center jus-con-center">
          <img
            class="cursor-pointer"
            :src="props.logo"
            alt="logo"
            height="30vh"
          />
        </div>
      </el-col>
      <el-col :span="18"></el-col>
      <el-col class="cursor-pointer" :span="4">
        <el-row align="middle">
          <el-col :span="4"></el-col>
          <el-col :span="5">
            <div class="avatar ali-item-center">
              <el-avatar :size="30" :src="props.avatar" />
            </div>
          </el-col>
          <el-col :span="5">
            <div class="ali-item-center">
              <span class="nowrap-ellipsis">{{ props.userName }}</span>
            </div>
          </el-col>
          <el-col :span="5">
            <div class="ali-item-center">
              <el-button type="primary" color="#30f172a" @click="logOut">
                退出登录</el-button
              >
            </div>
          </el-col>
          <el-col :span="5"></el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { ElMessage, ElMessageBox } from "element-plus";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Top",
  props: {
    props: Object,
  },
  methods: {
    // 退出登录
    logOut() {
      const that = this;
      ElMessageBox.confirm("确认退出登录？", {
        distinguishCancelAndClose: true,
        confirmButtonText: "确认",
        cancelButtonText: "取消",
      })
        .then(() => {
          console.log("LogOut");
          // 退出登录请求
          localStorage.removeItem("mySystem-token");
          that.$router.replace({ name: "logIn" });
          ElMessage.success({ message: "已退出登录" });
        })
        .catch((action) => {
          console.log(action);
        });
    },
  },
};
</script>

<style scoped>
.top {
  width: 100vw;
  height: 5vh;
  color: white;
  background-color: #0f172a;
}
.avatar {
  height: 5vh;
}
</style>