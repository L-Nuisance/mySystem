<template>
  <div class="teacherCourse">
    <el-scrollbar height="90vh" class="m-t">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="课程详情" name="detail">
          <CourseDetail ref="detail" :isTeacher="true"></CourseDetail>
        </el-tab-pane>
        <el-tab-pane label="知识点管理" name="knowledge"> </el-tab-pane>
        <el-tab-pane label="题库管理" name="question">
          <QuestionManage ref="knowledge"></QuestionManage>
        </el-tab-pane>
      </el-tabs>
    </el-scrollbar>
  </div>
</template>

<script>
import CourseDetail from "@/components/CourseDetail.vue";
import QuestionManage from "./components/QuestionManage.vue";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "TeacherCourse",
  components: {
    CourseDetail,
    QuestionManage,
  },
  data() {
    return {
      activeName: "knowledge",
    };
  },
};
</script>

<style>
</style>