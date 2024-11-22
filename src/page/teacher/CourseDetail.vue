<template>
  <div class="courseDetail">
    <el-scrollbar height="90vh" class="m-t">
      <el-descriptions
        v-loading="isLoading"
        element-loading-text="课程详情加载中..."
        direction="vertical"
        border
        style="margin-top: 20px"
      >
        <template #title>
          <el-page-header title="返回" @back="goBack">
            <template #content>
              <span class="text-large font-600 mr-3"> 课程详情 </span>
            </template>
          </el-page-header>
        </template>
        <template #extra>
          <el-button v-if="!isEdit" type="primary" @click="edit"
            >编辑</el-button
          >
          <el-button v-if="isEdit" type="primary" @click="saveEdit"
            >保存</el-button
          >
          <el-button v-if="isEdit" @click="cancelEdit">取消</el-button>
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
          <el-input v-if="isEdit" v-model="preCourseName"></el-input>
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
          <p v-if="!isEdit" style="text-indent: 2em">{{ description }}</p>
          <el-input
            v-if="isEdit"
            type="textarea"
            autosize
            v-model="preDescription"
          ></el-input>
        </el-descriptions-item>
      </el-descriptions>
    </el-scrollbar>
  </div>
</template>

<script>
export default {
  name: "CourseDetail",
  created() {
    let index = 0;
    while (index < 8) {
      index++;
      this.description += this.description;
    }
  },
  data() {
    return {
      isEdit: false,
      isLoading: false,

      // 编辑内容
      preCourseName: "",
      preDescription: "",

      // 课程信息
      courseId: "0001",
      courseName: "计算机课程",
      teacher: "王五",
      selectNum: 314,
      evaNum: 1002,
      description: "这是一个描述",
    };
  },
  methods: {
    // 请求课程信息
    getCourseDetail() {
      const that = this;
      that.isLoading = true;
      // 获取课程信息
      that.isLoading = false;
    },
    // 编辑
    edit() {
      const that = this;
      that.preCourseName = that.courseName;
      that.preDescription = that.description;
      that.isEdit = true;
    },
    // 取消编辑
    cancelEdit() {
      const that = this;
      that.preCourseName = "";
      that.preDescription = "";
      that.isEdit = false;
    },
    // 保存信息
    saveEdit() {
      const that = this;
      const temp = {
        courseId: that.courseId,
        courseName: that.preCourseName,
        description: that.preDescription,
      };
      console.log(temp);
      // 保存请求
      that.getCourseDetail();
      that.isEdit = false;
    },
    // 返回
    goBack() {
      const that = this;
      that.$router.back();
    },
  },
};
</script>

<style>
</style>