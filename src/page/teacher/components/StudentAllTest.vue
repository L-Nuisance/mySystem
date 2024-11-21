<template>
  <div class="studentAllTest">
    <el-dialog
      v-model="open"
      :title="props.title"
      @open="getTableData"
      @closed="closeAllTest"
      width="50vw"
      style="height: 70vh"
    >
      <Table
        height="48vh"
        :columns="columns"
        :data="[...tableData, ...tableData, ...tableData]"
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
import { ElText } from "element-plus";
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
          sortable: true,
        },
        {
          index: 3,
          label: "测评难度",
          prop: "difficulty",
          key: "difficulty",
          sortable: true,
          formatter: (row, column, cellValue) => {
            const text =
              cellValue === 0 ? "简单" : cellValue === 1 ? "普通" : "困难";
            const className =
              cellValue === 0
                ? "easy"
                : cellValue === 1
                ? "normal"
                : "difficult";
            const node = h("div", {
              class: className,
              innerHTML: text,
            });
            return node;
          },
        },
        {
          index: 4,
          label: "测评分数",
          prop: "score",
          key: "score",
          sortable: true,
        },
        {
          index: 5,
          label: "评价",
          prop: "eva",
          key: "eva",
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
          testId: "0000",
          course: "高等数学",
          questionNum: 60,
          difficulty: 2,
          score: 80,
          eva: 1,
        },
        {
          index: 1,
          testId: "0001",
          course: "大学物理",
          questionNum: 60,
          difficulty: 1,
          score: 80,
          eva: 0,
        },
        {
          index: 2,
          testId: "0002",
          course: "高等数学",
          questionNum: 60,
          difficulty: 0,
          score: 80,
          eva: 4,
        },
        {
          index: 3,
          testId: "0003",
          course: "高等数学",
          questionNum: 60,
          difficulty: 1,
          score: 80,
          eva: 3,
        },
        {
          index: 4,
          testId: "0004",
          course: "高等数学",
          questionNum: 60,
          difficulty: 0,
          score: 80,
          eva: 2,
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