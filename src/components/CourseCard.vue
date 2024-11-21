<template>
  <div class="courseCard">
    <el-card
      style="height: 180px; width: 300px"
      :body-style="bodyStyle"
      shadow="hover"
      class="card"
    >
      <div class="m-l m-t m-b">
        <el-text>{{ title }}</el-text>
      </div>
      <img
        class="all-w-h"
        style="width: 300px; height: 150px"
        :src="imgUrl"
        :alt="title"
      />
    </el-card>
  </div>
</template>

<script>
export default {
  name: "courseCard",
  props: {
    title: {
      require: true,
      type: String,
      default: "标题",
    },
    imgUrl: {
      require: false,
      type: String,
      default: "../img/defaultCourse.png",
    },
  },
  data() {
    return {
      bodyStyle: {
        padding: 0,
      },
    };
  },
};
</script>

<style scoped>
</style>