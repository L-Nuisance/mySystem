<template>
  <div class="studentAllTest">
    <el-dialog
      v-model="open"
      :title="props.title"
      @open="getTableData"
      @closed="closeAllTest"
      width="50vw"
    >
      <Table
        :columns="columns"
        :data="tableData"
        :loading="tableLoading"
        :total="total"
        :onPageChang="pageChang"
      ></Table>
      <template #footer>
        <div>
          <el-button
            @click="
              () => {
                open = false;
              }
            "
            >关闭</el-button
          >
        </div>
      </template>
    </el-dialog>
  </div>
</template>

<script>
import Table from "@/components/Table.vue";
import { h } from "vue";
export default {
  name: "StudentAllTest",
  components: {
    Table,
  },
  props: {
    props: {
      require: false,
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      open: false,

      // 请求数据
      studentId: "",
      currentPage: 1,
      pageSize: 20,
      tableLoading: false,

      // 表格数据
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
          label: "课程名称",
          prop: "course",
          key: "course",
        },
        {
          index: 2,
          label: "题目总数",
          prop: "questionNum",
          key: "questionNum",
        },
        {
          index: 3,
          label: "测评难度",
          prop: "difficulty",
          key: "difficulty",
        },
        {
          index: 4,
          label: "测评分数",
          prop: "score",
          key: "score",
        },
        {
          index: 5,
          label: "评价",
          prop: "eva",
          key: "eva",
        },
      ], // columns的设置基本同于el-table-column，多字段属性需使用小驼峰命名法
      tableData: [
        {
          index: 0,
          testId: "0000",
          course: "高等数学",
          questionNum: 60,
          difficulty: "困难",
          score: 80,
          eva: "良好",
        },
        {
          index: 1,
          testId: "0001",
          course: "大学物理",
          questionNum: 60,
          difficulty: "困难",
          score: 80,
          eva: "良好",
        },
        {
          index: 2,
          testId: "0002",
          course: "高等数学",
          questionNum: 60,
          difficulty: "困难",
          score: 80,
          eva: "良好",
        },
        {
          index: 3,
          testId: "0003",
          course: "高等数学",
          questionNum: 60,
          difficulty: "困难",
          score: 80,
          eva: "良好",
        },
        {
          index: 4,
          testId: "0004",
          course: "高等数学",
          questionNum: 60,
          difficulty: "困难",
          score: 80,
          eva: "良好",
        },
      ],
      total: 50,
    };
  },
  methods: {
    // 获取表格数据
    getTableData() {
      const that = this;
      const temp = {
        studentId: that.studentId,
      };
      console.log(temp);
      that.tableLoading = false;
    },
    // 打开对话框 请求表格数据
    openAllTest() {
      const that = this;
      that.studentId = that.props.studentId;
      that.tableLoading = true;
      that.open = true;
    },
    // 关闭对话框 初始化数据
    closeAllTest() {
      const that = this;
      that.open = false;
      that.studentId = "";
      that.pageSize = 20;
      that.currentPage = 1;
      //   that.tableData = [];
    },
    pageChang(pageSize, currentPage) {
      const that = this;
      that.pageSize = pageSize;
      that.currentPage = currentPage;
      that.getTableData();
    },
  },
};
</script>

<style>
</style>