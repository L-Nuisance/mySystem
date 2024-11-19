<template>
  <div class="table">
    <el-row class="m-t">
      <el-col :span="24">
        <el-table
          :data="tableData"
          height="100%"
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
          />
        </el-table>
      </el-col>
    </el-row>
    <el-row class="m-t" justify="end">
      <el-pagination
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
    // table有关属性
    columns: {
      require: true,
      type: [],
    },
    tableData: {
      require: true,
      type: [],
    },
    // page有关属性
    total: {
      require: true,
      type: Number,
      default: 0,
    },
    onPageChang: {
      require: false,
      type: Function,
    },
  },
  watch: {
    pageSize() {
      if (this.onPageChang) {
        this.onPageChang(this.pageSize, this.currentPage);
      }
    },
    currentPage() {
      if (this.onPageChang) {
        this.onPageChang(this.pageSize, this.currentPage);
      }
    },
  },
  data() {
    return {
      pageSize: 10,
      pageSizes: [10, 20, 50, 100],
      currentPage: 1,
    };
  },
};
</script>

<style>
</style>