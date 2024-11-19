<template>
  <div class="studentList">
    <el-row :gutter="10">
      <el-col :span="5">
        <el-input v-model="name" placeholder="学生姓名"></el-input>
      </el-col>
      <el-col :span="5">
        <el-input v-model="studentId" placeholder="学生学号"></el-input>
      </el-col>
      <el-col :span="4">
        <el-select v-model="studentEva" placeholder="总评筛选">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </el-col>
      <el-col :span="4">
        <el-select v-model="studentEva" placeholder="课程筛选">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </el-col>
      <el-col :span="6">
        <div class="jus-con-between">
          <div class="jus-con-start">
            <el-button type="primary" class="button" :icon="Search"
              >搜索</el-button
            >
            <el-button type="primary" class="button" :icon="Refresh"
              >重置</el-button
            >
          </div>
          <div class="jus-con-end">
            <el-button class="button" :icon="Download">导出</el-button>
          </div>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <Table
        class="all-w-h"
        :total="total"
        :columns="columns"
        :tableData="tableData"
        :onPageChang="pageChang"
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
        },
        {
          index: 4,
          label: "学生总评",
          prop: "studentEva",
          key: "studentEva",
        },
      ],
      tableData: [
        {
          index: 0,
          name: "张三",
          studentId: "0000",
          selectCourse: "高等数学、高等物理",
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

      options: [
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
    };
  },
  methods: {
    // 请求表格有关数据
    getTableData(params) {
      console.log(params);
    },

    // 表格页码变化处理方法
    pageChang(pageSize, currentPage) {
      const that = this;
      const temp = {
        pageSize: pageSize,
        currentPage: currentPage,
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