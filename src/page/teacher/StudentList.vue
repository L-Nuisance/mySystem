<template>
  <div class="studentList">
    <el-row :gutter="10">
      <el-col :span="5">
        <el-input
          :disabled="searchLoading || resetLoading"
          v-model="name"
          placeholder="学生姓名"
        ></el-input>
      </el-col>
      <el-col :span="5">
        <el-input
          :disabled="searchLoading || resetLoading"
          v-model="studentId"
          placeholder="学生学号"
        ></el-input>
      </el-col>
      <el-col :span="4">
        <el-select
          :disabled="searchLoading || resetLoading"
          v-model="studentEva"
          placeholder="总评筛选"
        >
          <el-option
            v-for="item in evaOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </el-col>
      <el-col :span="4">
        <el-select
          :disabled="searchLoading || resetLoading"
          v-model="studentCourse"
          placeholder="课程筛选"
        >
          <el-option
            v-for="item in courseOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </el-col>
      <el-col :span="6">
        <div class="jus-con-between">
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
          <div class="jus-con-end">
            <el-button
              :disabled="searchLoading || resetLoading"
              class="button"
              :icon="Download"
              >导出</el-button
            >
          </div>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <Table
        ref="table"
        class="all-w-h"
        :total="total"
        :height="height"
        :data="tableData"
        :columns="columns"
        :onPageChang="pageChang"
        :loading="searchLoading || resetLoading"
      ></Table>
    </el-row>
  </div>
</template>

<script>
import Table from "@/components/Table.vue";
import { Search, Refresh, Download } from "@element-plus/icons-vue";
import { h } from "vue";

export default {
  name: "StudentList",
  components: {
    Table,
  },
  data() {
    return {
      // 按钮图标
      Search: Search,
      Refresh: Refresh,
      Download: Download,

      // 搜索条件
      name: "",
      studentId: "",
      studentEva: "",
      studentCourse: "",
      pageSize: 10,
      currentPage: 1,
      searchLoading: false, // 搜索加载
      resetLoading: false, // 重置加载

      // 表格有关
      columns: [
        {
          index: 0,
          label: "序号",
          formatter: (row, column, cellValue, index) => {
            const node = h("div", {
              innerHTML: index,
            });
            return node;
          },
          width: 70,
        },
        {
          index: 1,
          label: "姓名",
          prop: "name",
          key: "name",
          formatter: (row, column, cellValue) => {
            const node = h("a", {
              class: "click-data",
              innerHTML: cellValue,
              onClick: () => {
                console.log(cellValue);
              },
            });
            return node;
          },
        },
        {
          index: 2,
          label: "学号",
          prop: "studentId",
          key: "studentId",
        },
        {
          index: 3,
          label: "已选课程",
          prop: "selectCourse",
          key: "selectCourse",
          showOverflowTooltip: true,
        },
        {
          index: 4,
          label: "学生总评",
          prop: "studentEva",
          key: "studentEva",
        },
      ], // columns的设置基本同于el-table-column，多字段属性需使用小驼峰命名法
      tableData: [
        {
          index: 0,
          name: "张三",
          studentId: "0000",
          selectCourse:
            "高等数学、高等物理、高等数学、高等物理、高等数学、高等物理",
          studentEva: "良好",
        },
        {
          index: 1,
          name: "张三",
          studentId: "0001",
          selectCourse: "高等数学、高等物理",
          studentEva: "良好",
        },
        {
          index: 2,
          name: "张三",
          studentId: "0002",
          selectCourse: "高等数学、高等物理",
          studentEva: "良好",
        },
        {
          index: 3,
          name: "张三",
          studentId: "0003",
          selectCourse: "高等数学、高等物理",
          studentEva: "良好",
        },
        {
          index: 4,
          name: "张三",
          studentId: "0004",
          selectCourse: "高等数学、高等物理",
          studentEva: "良好",
        },
      ],
      total: 990,
      height: "75vh",

      evaOptions: [
        {
          value: 0,
          label: "优秀",
        },
        {
          value: 1,
          label: "良好",
        },
        {
          value: 2,
          label: "普通",
        },
        {
          value: 3,
          label: "较差",
        },
        {
          value: 4,
          label: "极差",
        },
      ],
      courseOptions: [
        {
          value: 0,
          label: "高等数学",
        },
        {
          value: 1,
          label: "高等物理",
        },
        {
          value: 2,
          label: "大学英语",
        },
      ],
    };
  },
  methods: {
    // 请求表格有关数据
    getTableData(params) {
      const that = this;
      console.log(params);
      //请求表格数据
      that.searchLoading = false;
      that.resetLoading = false;
    },
    // 搜索
    search() {
      const that = this;
      const temp = {
        pageSize: that.pageSize,
        currentPage: that.currentPage,
        name: that.name,
        studentId: that.studentId,
        studentCourse: that.studentCourse,
        studentEva: that.studentEva,
      };
      that.searchLoading = true;
      that.getTableData(temp);
    },
    // 重置
    reset() {
      const that = this;
      that.resetLoading = true;
      that.name = "";
      that.studentId = "";
      that.studentCourse = null;
      that.studentEva = null;
      const temp = {
        pageSize: that.pageSize,
        currentPage: that.currentPage,
        name: that.name,
        studentId: that.studentId,
        studentCourse: that.studentCourse,
        studentEva: that.studentEva,
      };
      this.$refs.table.reset();
      that.getTableData(temp);
    },

    // 表格页码变化处理方法
    pageChang(pageSize, currentPage) {
      const that = this;
      that.pageSize = pageSize;
      that.currentPage = currentPage;
      const temp = {
        pageSize: that.pageSize,
        currentPage: that.currentPage,
        name: that.name,
        studentId: that.studentId,
        studentCourse: that.studentCourse,
        studentEva: that.studentEva,
      };
      that.getTableData(temp);
    },
  },
};
</script>

<style scoped>
.test {
  background-color: red;
}
</style>