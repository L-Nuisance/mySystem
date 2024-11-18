import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import ElementPlus from "element-plus";
import "element-plus/theme-chalk/index.css";
//引入全局CSS
import "./css/index.css";

const app = createApp(App);

app.use(router).use(ElementPlus).mount("#app");
