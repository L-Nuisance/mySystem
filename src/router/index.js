import { createWebHistory, createRouter } from "vue-router";

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
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
