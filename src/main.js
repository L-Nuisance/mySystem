import { createApp } from "vue";
import App from "./App.vue";
import ElementPlus from "element-plus";
import "@/css/index.css";
import "element-plus/theme-chalk/index.css";

const app = createApp(App);

app.use(ElementPlus).mount("#app");
