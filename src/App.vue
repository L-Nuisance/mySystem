<template>
  <router-view name="main" id="main" class="all-w-h pos-ab-l-t"></router-view>
</template>

<script>
// 解决ERROR ResizeObserver loop completed with undelivered notifications.
// 重写ResizeObserver的构造函数，并在其中定义并调用防抖函数
window.ResizeObserver = class ResizeObserver extends window.ResizeObserver {
  constructor(callback) {
    let timer = null;
    const debouncedCallback = function () {
      let context = this;
      let args = arguments;
      clearTimeout(timer);
      timer = setTimeout(function () {
        callback.apply(context, args);
      }, 16);
    };
    super(debouncedCallback);
  }
};
export default {
  name: "App",
};
</script>

<style>
:root {
  overflow: hidden;
}
</style>

