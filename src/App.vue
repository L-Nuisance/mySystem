<template>
  <MainView class="main"></MainView>
</template>

<script>
import MainView from "./view/MainView.vue";

export default {
  name: "App",
  provide: {
    message: "hello",
  },
  components: {
    MainView,
  },
  mounted() {
    const a = 1;
    const type = typeof a;
    if (type === "number") {
      console.log("x");
    }
  },
};
</script>

<style>
:root {
  overflow: hidden;
}
.main {
  width: 100%;
  height: 100%;
}
</style>

