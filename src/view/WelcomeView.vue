<template>
  <div class="welcomeView all-w-h">
    <div class="pos-ab-center content jus-con-between">
      <img style="width: 40vw" src="../img/welcome.png" alt="欢迎" />
      <div class="welcome-form">
        <router-view
          style="width: 32vw; height: 80vh"
          class="form m-auto"
          id="form"
          name="form"
        ></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "WelcomeView",
};
</script>

<style scoped>
.welcomeView {
  background-color: #0f172a;
}
.content {
  height: 80vh;
  width: 75vw;
  background-color: #94a3b8;
  border-radius: 20px;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
}
.welcome-form {
  height: 80vh;
  width: 40vw;
  border-radius: 20px;
  background-color: white;
}
</style>