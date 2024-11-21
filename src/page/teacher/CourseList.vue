<template>
  <div class="courseList">
    <el-row :gutter="10">
      <el-col :span="6">
        <el-input
          :disabled="searchLoading || resetLoading"
          v-model="courseName"
          placeholder="课程名称"
          :prefix-icon="Search"
        ></el-input>
      </el-col>
      <el-col :span="18">
        <div class="jus-con-start">
          <el-button
            :loading="!resetLoading && searchLoading"
            :disabled="resetLoading"
            type="primary"
            class="button"
            :icon="Search"
            @click="search"
            >搜索</el-button
          >
          <el-button
            :loading="!searchLoading && resetLoading"
            :disabled="searchLoading"
            type="primary"
            class="button"
            :icon="Refresh"
            @click="reset"
            >重置</el-button
          >
        </div>
      </el-col>
    </el-row>
    <!-- <el-row class="m-t"> -->
    <el-scrollbar height="85vh" class="m-t">
      <el-row :gutter="30" justify="start" class="all-w-h">
        <el-col
          :xs="12"
          :sm="8"
          :md="8"
          :lg="6"
          :xl="6"
          v-for="item in [...courseList, ...courseList, ...courseList]"
          :key="item.key"
          class="m-b-far"
        >
          <CourseCard
            :title="item.title"
            :imgUrl="item.imgUrl"
            class="cursor-pointer"
          ></CourseCard>
        </el-col>
      </el-row>
    </el-scrollbar>
    <!-- </el-row> -->
  </div>
</template>

<script>
import CourseCard from "@/components/CourseCard.vue";
import { Search, Refresh } from "@element-plus/icons-vue";

export default {
  name: "CourseList",
  components: {
    CourseCard,
  },
  data() {
    return {
      Search,
      Refresh,

      courseName: "",
      searchLoading: false,
      resetLoading: false,
      courseList: [
        {
          key: 0,
          title: "课程",
          imgUrl:
            "https://th.bing.com/th/id/R.c7d767967e558a26022127fd0a9defb5?rik=9vn2mIuA6K%2f4Sw&riu=http%3a%2f%2fntzjyjs.zyk2.chaoxing.com%2fapi%2fdownload%2fa66613338be62110940011edef3d85ac&ehk=R0yLKw7ALtqfaa6OXET2RFQOXlTmEm6mJ9Z1Q6vwgVg%3d&risl=&pid=ImgRaw&r=0",
        },
        {
          key: 1,
          title: "小学课程",
          imgUrl:
            "https://th.bing.com/th/id/OIP.XUf-3lCCltajZEMpDfmGNgHaE7?w=269&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        },
        {
          key: 2,
          title: "计算机课程",
          imgUrl:
            "https://th.bing.com/th/id/OIP.Jr3VjdYkihZxXcrxRuFTmwHaEK?w=329&h=185&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        },
      ],
    };
  },
  methods: {
    // 请求课程列表
    getCourseList() {
      const that = this;
      const temp = {
        courseName: that.courseName,
      };
      console.log(temp);
    },
    // 搜索
    search() {
      const that = this;
      that.searchLoading = true;
      that.getCourseList();
    },
    // 重置
    reset() {
      const that = this;
      that.resetLoading = true;
      that.courseName = "";
      that.getCourseList();
    },
  },
};
</script>

<style scoped>
.test {
  background-color: red;
}
</style>