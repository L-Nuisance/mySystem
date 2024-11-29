<template>
  <div class="questionManage">
    <el-row :gutter="10">
      <el-col :span="5">
        <el-input
          :disabled="searchLoading || resetLoading"
          v-model="questionId"
          placeholder="题目ID"
        ></el-input>
      </el-col>
      <el-col :span="5">
        <el-input
          :disabled="searchLoading || resetLoading"
          v-model="questionDescribe"
          placeholder="题目描述"
        ></el-input>
      </el-col>
      <el-col :span="3">
        <el-select
          :disabled="searchLoading || resetLoading"
          v-model="questionType"
          placeholder="题目类型"
          clearable
        >
          <el-option
            v-for="item in typeOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </el-col>
      <el-col :span="3">
        <el-select
          :disabled="searchLoading || resetLoading"
          v-model="questionDifficulty"
          placeholder="题目难度"
          clearable
        >
          <el-option
            v-for="item in difficultyOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </el-col>
      <el-col :span="8">
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
            <el-button type="default" :disabled="resetLoading || searchLoading"
              >添加题目</el-button
            >
            <el-button type="danger" :disabled="deleteList.length === 0"
              >批量删除</el-button
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
        height="70vh"
        :data="[...tableData]"
        :columns="columns"
        :onPageChang="pageChang"
        :loading="searchLoading || resetLoading"
        @SelectionChange="selectionChange"
      ></Table>
    </el-row>
    <QuestionCard ref="questionCard" :props="cardProps"></QuestionCard>
  </div>
</template>

<script>
import Table from "@/components/Table.vue";
import QuestionCard from "./QuestionCard.vue";
import { ElButton } from "element-plus";
import { Search, Refresh } from "@element-plus/icons-vue";
import { h } from "vue";

export default {
  name: "QuestionManage",
  components: {
    Table,
    QuestionCard,
  },
  data() {
    return {
      /* 图标 */
      Refresh,
      Search,

      /* 搜索条件 */
      pageSize: 10, // 每页大小
      currentPage: 1, // 当前页
      questionId: "", // 题目Id
      questionDescribe: "", // 题目描述
      questionType: null, // 题目类型
      questionDifficulty: null, // 题目难度

      /* 筛选配置*/
      // 类型
      typeOptions: [
        {
          label: "选择题",
          value: 0,
        },
        {
          label: "判断题",
          value: 1,
        },
        {
          label: "填空题",
          value: 2,
        },
      ],
      // 难度
      difficultyOptions: [
        {
          label: "简单",
          value: 0,
        },
        {
          label: "普通",
          value: 1,
        },
        {
          label: "困难",
          value: 2,
        },
      ],

      /* loading */
      searchLoading: false,
      resetLoading: false,

      /* Table */
      columns: [
        {
          type: "selection",
        },
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
          label: "题目ID",
          prop: "questionId",
          key: "questionId",
          width: 130,
        },
        {
          index: 2,
          label: "题目描述",
          prop: "questionDescribe",
          key: "questionDescribe",
        },
        {
          index: 3,
          label: "题目类型",
          prop: "questionType",
          key: "questionType",
          width: 130,
          formatter: (row, column, cellValue) => {
            const text =
              cellValue === 0
                ? "选择题"
                : cellValue === 1
                ? "判断题"
                : "填空题";
            return text;
          },
        },
        {
          index: 4,
          label: "题目难度",
          prop: "questionDifficulty",
          key: "questionDifficulty",
          width: 130,
          formatter: (row, column, cellValue) => {
            const text =
              cellValue === 0 ? "简单" : cellValue === 1 ? "普通" : "困难";
            const className =
              cellValue === 0
                ? "easy"
                : cellValue === 1
                ? "normal"
                : "difficult";
            const node = h(
              "div",
              {
                class: className,
              },
              text
            );
            return node;
          },
        },
        {
          index: 5,
          label: "操作",
          formatter: (row) => {
            const node = h("div", [
              h(
                ElButton,
                {
                  link: true,
                  type: "default",
                  onClick: () => {
                    const that = this;
                    that.openQuestionCard(row, "check");
                  },
                },
                "查看"
              ),
              h(
                ElButton,
                {
                  link: true,
                  type: "primary",
                  onClick: () => {
                    const that = this;
                    that.openQuestionCard(row, "edit");
                  },
                },
                "编辑"
              ),
              h(
                ElButton,
                {
                  link: true,
                  type: "danger",
                  onClick: () => {
                    const that = this;
                    that.openQuestionCard(row, "delete");
                  },
                },
                "删除"
              ),
            ]);
            return node;
          },
          width: 150,
        },
      ],
      tableData: [
        {
          index: "1",
          questionId: "00001",
          questionDescribe: "这是一个题目描述",
          questionType: 0,
          questionDifficulty: 2,
        },
        {
          index: "2",
          questionId: "00001",
          questionDescribe: "这是一个题目描述",
          questionType: 0,
          questionDifficulty: 2,
        },
      ],
      total: 880,

      /* 批量删除列表 */
      deleteList: [],

      /* 题目卡片 */
      cardProps: {},
    };
  },
  methods: {
    // 获取表格数据
    async getTableData() {
      const that = this;
      that.deleteList = [];
      const temp = {
        questionId: that.questionId,
        questionDescribe: that.questionDescribe,
        questionType: that.questionType,
        questionDifficulty: that.questionDifficulty,
        pageSize: that.pageSize,
        currentPage: that.currentPage,
      };
      console.log(temp);
      await setTimeout(() => {
        that.searchLoading = false;
        that.resetLoading = false;
      }, 3000);
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
      that.questionId = "";
      that.questionDescribe = "";
      that.questionType = null;
      that.questionDifficulty = null;
      that.currentPage = 1;
      that.pageSize = 10;
      that.$refs.table.reset();
      that.$nextTick(this.getTableData);
    },
    pageChang(pageSize, currentPage) {
      const that = this;
      that.pageSize = pageSize;
      that.currentPage = currentPage;
      that.resetLoading = true;
      that.searchLoading = true;
      that.getTableData();
    },
    // 选择变化时
    selectionChange(selections) {
      const that = this;
      const selectList = selections.map((item) => {
        return item.questionId;
      });
      that.deleteList = selectList;
    },
    // 删除
    delete() {
      const that = this;
      console.log(that.deleteList);
    },
    // 打开题目卡片
    openQuestionCard(row, flag) {
      const that = this;
      const title =
        flag === "check"
          ? "查看题目"
          : flag === "edit"
          ? "编辑题目"
          : "删除题目";
      that.cardProps = { question: row, title: title, flag: flag };
      that.$nextTick(that.$refs.questionCard.openCard);
    },
  },
};
</script>

<style>
</style>