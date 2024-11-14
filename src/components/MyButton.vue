<template>
  <el-col :md="12" style="background-color: salmon; min-height: 36px"></el-col>
</template>

<script>
export default {
  name: "MyButton",
  inject: ["message"],
  data() {
    return {
      text: this.message,
    };
  },
  created() {
    console.log(this.$attrs);
    console.log(this.$slots);
  },
};
</script>

<style scoped>
p {
  color: aquamarine;
}
button {
  border: solid 1px red;
}
h3 {
  color: blue;
}
</style>