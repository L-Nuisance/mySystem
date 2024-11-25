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
      <el-col :span="20"></el-col>
      <el-col class="cursor-pointer" :span="2">
        <el-row align="middle">
          <el-col :span="4"></el-col>
          <el-col :span="8">
            <div class="avatar ali-item-center">
              <el-avatar :size="30" :src="props.avatar" />
            </div>
          </el-col>
          <el-col :span="12">
            <div class="ali-item-center">
              <span class="nowrap-ellipsis">{{ props.userName }}</span>
              <el-icon><ArrowDown /></el-icon>
            </div>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { ArrowDown } from "@element-plus/icons-vue";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Top",
  props: {
    props: Object,
  },
  components: {
    ArrowDown,
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