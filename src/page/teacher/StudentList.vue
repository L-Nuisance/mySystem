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
    <StudentAllTest ref="allTest" :props="allTestProps"></StudentAllTest>
  </div>
</template>

<script>
import Table from "@/components/Table.vue";
import StudentAllTest from "./components/StudentAllTest.vue";
import { Search, Refresh, Download } from "@element-plus/icons-vue";
import { ElText } from "element-plus";
import { h } from "vue";

export default {
  name: "StudentList",
  components: {
    Table,
    StudentAllTest,
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
          width: 90,
          formatter: (row, column, cellValue) => {
            const node = h("a", {
              class: "click-data",
              innerHTML: cellValue,
              onClick: () => {
                const that = this;
                that.allTestProps = {
                  title: row.name + "的全部测评",
                  studentId: row.studentId,
                };
                that.$nextTick(that.openAllTest);
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
          label: "年级",
          prop: "grade",
          key: "grade",
        },
        {
          index: 4,
          label: "学校",
          prop: "school",
          key: "school",
        },
        {
          index: 5,
          label: "已选课程",
          prop: "selectCourse",
          key: "selectCourse",
          showOverflowTooltip: true,
        },
        {
          index: 6,
          label: "学生总评",
          prop: "studentEva",
          key: "studentEva",
          sortable: true,
          formatter: (row, column, value) => {
            let type = "";
            let text = "";
            if (value === 0) {
              type = "success";
              text = "优秀";
            } else if (value === 1) {
              type = "primary";
              text = "良好";
            } else if (value === 2) {
              type = "default";
              text = "普通";
            } else if (value === 3) {
              type = "warning";
              text = "较差";
            } else if (value === 4) {
              type = "error";
              text = "极差";
            }
            const node = h(
              ElText,
              {
                type: type,
              },
              text
            );
            return node;
          },
        },
      ], // columns的设置基本同于el-table-column，多字段属性需使用小驼峰命名法
      tableData: [
        {
          index: 0,
          name: "李四",
          studentId: "0000",
          grade: "大二",
          school: "湖南大学",
          selectCourse:
            "高等数学、高等物理、高等数学、高等物理、高等数学、高等物理",
          studentEva: 0,
        },
        {
          index: 1,
          name: "张三",
          studentId: "0001",
          grade: "大二",
          school: "湖南大学",
          selectCourse: "高等数学、高等物理",
          studentEva: 1,
        },
        {
          index: 2,
          name: "张三",
          studentId: "0002",
          grade: "大二",
          school: "湖南大学",
          selectCourse: "高等数学、高等物理",
          studentEva: 4,
        },
        {
          index: 3,
          name: "张三",
          studentId: "0003",
          grade: "大二",
          school: "湖南大学",
          selectCourse: "高等数学、高等物理",
          studentEva: 3,
        },
        {
          index: 4,
          name: "张三",
          studentId: "0004",
          grade: "大二",
          school: "湖南大学",
          selectCourse: "高等数学、高等物理",
          studentEva: 2,
        },
      ],
      total: 990,
      height: "75vh",

      // 数据穿透
      allTestProps: {},

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
    getTableData() {
      const that = this;
      // 请求参数设置
      const params = {
        pageSize: that.pageSize,
        currentPage: that.currentPage,
        name: that.name,
        studentId: that.studentId,
        studentCourse: that.studentCourse,
        studentEva: that.studentEva,
      };
      console.log(params);
      // 请求表格数据
      that.searchLoading = false;
      that.resetLoading = false;
    },
    // 搜索
    search() {
      const that = this;
      that.searchLoading = true;
      that.getTableData();
    },
    // 重置
    reset() {
      const that = this;
      that.resetLoading = true;
      that.name = "";
      that.studentId = "";
      that.studentCourse = null;
      that.studentEva = null;
      that.$refs.table.reset();
      that.getTableData();
    },
    // 表格页码变化处理方法
    pageChang(pageSize, currentPage) {
      const that = this;
      that.pageSize = pageSize;
      that.currentPage = currentPage;
      that.getTableData();
    },
    // 打开学生全测试穿透
    openAllTest() {
      const that = this;
      console.log("openAllTest");
      that.$refs.allTest.openAllTest();
    },
    // 关闭学生全测试穿透
    closeAllTest() {
      console.log("closeAllTest");
      const that = this;
      that.$refs.allTest.closeAllTest();
    },
  },
};
</script>

<style scoped>
.test {
  background-color: red;
}
</style>