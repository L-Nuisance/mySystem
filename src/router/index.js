import { createWebHistory, createRouter } from "vue-router";
import { getToken } from "@/api/user";
import { ElMessage } from "element-plus";

const routes = [
  {
    path: "/",
    redirect: "/welcome/logIn",
  },
  {
    path: "/welcome",
    name: "welcome",
    components: {
      main: () => import("@/view/WelcomeView"),
    },
    children: [
      {
        path: "logIn",
        name: "logIn",
        components: {
          form: () => import("@/page/welcome/LogIn"),
        },
      },
      {
        path: "register",
        name: "register",
        components: {
          form: () => import("@/page/welcome/Register"),
        },
      },
    ],
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

router.beforeEach((to) => {
  console.log(to);
  if (to.name === "logIn" || to.name === "register") {
    return true;
  }
  if (!getToken()) {
    ElMessage.warning({ message: "未登录或登陆已过期" });
    router.replace({ name: "logIn" });
  }
});

export default router;
