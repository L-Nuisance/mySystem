import { createMemoryHistory, createRouter } from "vue-router";

const routes = [
  {
    path: "/",
    components: {
      main: () => import("@/view/MainView"),
    },
  },
  {
    path: "/index",
    name: "index",
    components: {
      main: () => import("@/view/MainView"),
    },
  },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router;
