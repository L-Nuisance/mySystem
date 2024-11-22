import { createWebHistory, createRouter } from "vue-router";
import NotFound from "@/view/NotFound.vue";

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
  {
    path: "/teacher",
    components: {
      main: () => import("@/view/MainView"),
    },
    children: [
      {
        path: "studentList",
        name: "studentList",
        components: {
          content: () => import("@/page/teacher/StudentList"),
        },
      },
      {
        path: "courseList",
        name: "courseList",
        components: {
          content: () => import("@/page/teacher/CourseList"),
        },
      },
      {
        path: "courseDetail",
        name: "courseDetail",
        components: {
          content: () => import("@/page/teacher/CourseDetail"),
        },
      },
    ],
  },
  {
    path: "/404",
    name: "NotFound",
    components: { main: () => import("@/view/NotFound") },
  },
  {
    path: "/:pathMatch(.*)",
    redirect: "/404",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
