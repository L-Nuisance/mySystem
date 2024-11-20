<template>
  <div class="table">
    <el-row class="m-t">
      <el-col :span="24">
        <el-table
          v-loading="loading"
          :element-loading-svg="svg"
          element-loading-svg-view-box="-10, -10, 50, 50"
          element-loading-text="数据加载中..."
          :data="data"
          :max-height="height"
          stripe
          border
          style="width: 100%"
        >
          <el-table-column
            v-for="column in columns"
            :key="column.index"
            :prop="column.prop"
            :label="column.label"
            :column-key="column.key"
            :formatter="column.formatter"
            :width="column.width"
            :show-overflow-tooltip="column.showOverflowTooltip"
            :align="column.align"
            :header-align="column.headerAlign"
            :class-name="column.className"
            :fixed="column.fixed"
          />
          <template #empty>
            <el-empty description="啊哦，数据丢失辽..." image-size="100">
              <template #image>
                <img src="../img/空状态.png" alt="空" />
              </template>
            </el-empty>
          </template>
        </el-table>
      </el-col>
    </el-row>
    <el-row class="m-t" justify="end">
      <el-text class="m-r">共 {{ total }} 条</el-text>
      <el-pagination
        :disabled="loading"
        v-model:page-size="pageSize"
        v-model:current-page="currentPage"
        layout="sizes, prev, pager, next, ->"
        :total="total"
        :page-sizes="pageSizes"
      />
    </el-row>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Table",
  props: {
    loading: {
      require: false,
      type: Boolean,
      default: false,
    },
    // table有关属性
    columns: {
      require: true,
      type: [],
    },
    data: {
      require: true,
      type: [],
      default: [],
    },
    height: {
      require: false,
      type: [String, Number],
    },
    // page有关属性
    total: {
      require: true,
      type: Number,
      default: 0,
    },
    // pageSize与currentPage改变时的回调：(pageSize, currentPage) => void
    onPageChang: {
      require: false,
      type: Function,
    },
  },
  watch: {
    pageSize() {
      const that = this;
      if (that.onPageChang) {
        that.onPageChang(that.pageSize, that.currentPage);
      }
    },
    currentPage() {
      const that = this;
      if (that.onPageChang) {
        that.onPageChang(that.pageSize, that.currentPage);
      }
    },
    reset(value) {
      if (value === true) {
        const that = this;
        that.currentPage = 1;
        that.pageSize = 10;
      }
    },
  },
  data() {
    return {
      pageSize: 10,
      pageSizes: [10, 20, 50, 100],
      currentPage: 1,
      svg: `
        <path class="path" d="
          M 30 15
          L 28 17
          M 25.61 25.61
          A 15 15, 0, 0, 1, 15 30
          A 15 15, 0, 1, 1, 27.99 7.5
          L 15 15
        " style="stroke-width: 4px; fill: rgba(0, 0, 0, 0)"/>
      `,
    };
  },
  methods: {
    reset() {
      const that = this;
      that.pageSize = 10;
      that.currentPage = 1;
    },
  },
};
</script>

<style>
</style>