<template>
  <div class="courseDetail">
    <el-descriptions
      title="课程详情"
      direction="vertical"
      border
      style="margin-top: 20px"
    >
      <template #extra>
        <el-button v-if="!isEdit" type="primary" @click="() => (isEdit = true)"
          >编辑</el-button
        >
        <el-button v-if="isEdit" type="primary">保存</el-button>
        <el-button v-if="isEdit" @click="() => (isEdit = false)"
          >取消</el-button
        >
      </template>
      <el-descriptions-item
        :rowspan="2"
        width="300px"
        label="课程封面"
        align="center"
      >
        <el-image
          style="width: 210px; height: 126px"
          src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
        />
      </el-descriptions-item>
      <el-descriptions-item :width="360" label="课程名称">
        <span v-if="!isEdit">{{ courseName }}</span>
        <el-input v-if="isEdit" v-model="courseName"></el-input>
      </el-descriptions-item>
      <el-descriptions-item :width="360" label="已选人数">{{
        selectNum
      }}</el-descriptions-item>
      <el-descriptions-item :width="360" label="课程教师">{{
        teacher
      }}</el-descriptions-item>
      <el-descriptions-item :width="360" label="测评总数">
        {{ evaNum }}
      </el-descriptions-item>
      <el-descriptions-item label="课程介绍">
        <p v-if="!isEdit">{{ description }}</p>
        <el-input
          v-if="isEdit"
          type="textarea"
          v-model="description"
        ></el-input>
      </el-descriptions-item>
    </el-descriptions>
  </div>
</template>

<script>
export default {
  name: "CourseDetail",
  data() {
    return {
      isEdit: false,
      courseName: "计算机课程",
      teacher: "王五",
      selectNum: 314,
      evaNum: 1002,
      description: "",
    };
  },
};
</script>

<style>
</style>