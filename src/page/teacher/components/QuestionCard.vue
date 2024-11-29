<template>
  <div class="questionCard">
    <el-dialog
      v-model="open"
      :title="props.title"
      @open="getTableData"
      @closed="closeCard"
      width="50vw"
      style="height: 70vh"
      center
    >
      <el-form :model="question" label-width="auto" style="max-width: 600px">
        <el-form-item v-if="props.flag !== 'add'" label="题目ID">
          <el-input disabled v-model="question.questionId" />
        </el-form-item>
        <el-form-item label="题目描述" required>
          <el-input
            :disabled="props.flag === 'check' || props.flag === 'delete'"
            v-model="question.questionDescribe"
            :maxlength="500"
            :rows="12"
            resize="none"
            :show-word-limit="true"
            type="textarea"
          />
        </el-form-item>
        <el-form-item label="题目类型" required>
          <el-select
            :disabled="props.flag === 'check' || props.flag === 'delete'"
            v-model="question.questionType"
            placeholder="题目类型"
            clearable
            style="width: 150px"
          >
            <el-option
              v-for="item in typeOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="题目难度" required>
          <el-select
            :disabled="props.flag === 'check' || props.flag === 'delete'"
            v-model="question.questionDifficulty"
            placeholder="题目难度"
            clearable
            style="width: 150px"
          >
            <el-option
              v-for="item in difficultyOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </el-form-item>
      </el-form>
      <template #footer>
        <el-button v-if="props.flag === 'edit'" type="primary">保存</el-button>
        <el-button v-if="props.flag === 'add'" type="primary">提交</el-button>
        <el-button v-if="props.flag === 'delete'" type="danger">删除</el-button>
        <el-button>关闭</el-button>
      </template>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "QuestionCard",
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
      // 表单数据
      question: {},
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
    };
  },
  methods: {
    // 打开问题卡片
    openCard() {
      const that = this;
      const pre = JSON.parse(JSON.stringify(that.props.question));
      console.log(pre);
      that.question = pre;
      that.$nextTick(() => {
        that.open = true;
      });
    },
    // 关闭问题卡片
    closeCard() {
      const that = this;
      that.open = false;
    },
  },
};
</script>

<style>
</style>