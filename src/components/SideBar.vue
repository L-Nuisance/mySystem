// eslint-disable-next-line vue/valid-template-root
<template>
  <div class="sideBar">
    <el-scrollbar class="menu">
      <el-menu
        active-text-color="#172554"
        background-color="#545c64"
        text-color="#f1f5f9"
      >
        <el-sub-menu
          v-for="subMenu in props.menuList"
          :key="subMenu.index"
          :index="subMenu.index"
        >
          <template #title>
            <!-- 根据菜单index设置图标 -->
            <el-icon v-if="subMenu.index === '1'">
              <svg
                t="1732240061994"
                class="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="4305"
                width="200"
                height="200"
              >
                <path
                  d="M523.52 598.4C593.28 552.32 640 473.6 640 384c0-141.44-114.56-256-256-256C242.56 128 128 242.56 128 384c0 89.6 46.72 168.32 116.48 214.4C101.76 645.12 0 765.44 0 928 0 945.92 14.08 960 32 960S64 945.92 64 928C64 751.36 207.36 640 384 640c176.64 0 320 111.36 320 288 0 17.92 14.08 32 32 32 17.92 0 32-14.08 32-32C768 765.44 666.24 645.12 523.52 598.4zM384 576C278.4 576 192 489.6 192 384s86.4-192 192-192c105.6 0 192 86.4 192 192S489.6 576 384 576zM804.48 602.24C878.08 556.8 928 476.8 928 384c0-141.44-114.56-256-256-256C654.08 128 640 142.08 640 160 640 177.92 654.08 192 672 192c105.6 0 192 86.4 192 192 0 71.04-38.4 132.48-96 165.76-56.32 34.56-71.68 83.2 0 109.44 111.36 39.68 192 144 192 269.44 0 17.92 14.08 32 32 32 17.92 0 32-14.08 32-32C1024 780.8 933.12 654.72 804.48 602.24z"
                  p-id="4306"
                ></path>
              </svg>
            </el-icon>
            <el-icon v-if="subMenu.index === '2'"><Reading /></el-icon>
            <el-icon v-if="subMenu.index === '3'"><Message /></el-icon>
            <el-icon v-if="subMenu.index === '4'"><Setting /></el-icon>
            <span>{{ subMenu.title }}</span>
          </template>
          <el-menu-item-group>
            <el-menu-item
              v-for="item in subMenu.children"
              :key="item.index"
              :index="item.index"
              @click="props.testPost"
            >
              {{ item.title }}
            </el-menu-item>
          </el-menu-item-group>
        </el-sub-menu>
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>
import { Message, Setting, Reading } from "@element-plus/icons-vue";
export default {
  name: "SideBar",
  props: {
    props: Object,
  },
  components: {
    Message,
    Setting,
    Reading,
  },
  data() {
    return {
      menuData: [
        {
          index: "1",
          title: "栏目一",
          children: [
            {
              index: "1-1",
              title: "项目一",
            },
            {
              index: "1-2",
              title: "项目二",
            },
            {
              index: "1-3",
              title: "项目三",
            },
          ],
        },
        {
          index: "2",
          title: "栏目二",
          children: [
            {
              index: "2-1",
              title: "项目一",
            },
            {
              index: "2-2",
              title: "项目二",
            },
            {
              index: "2-3",
              title: "项目三",
            },
          ],
        },
        {
          index: "3",
          title: "栏目三",
          children: [
            {
              index: "3-1",
              title: "项目一",
            },
            {
              index: "3-2",
              title: "项目二",
            },
            {
              index: "3-3",
              title: "项目三",
            },
          ],
        },
        {
          index: "4",
          title: "栏目四",
          children: [
            {
              index: "4-1",
              title: "项目一",
            },
            {
              index: "4-2",
              title: "项目二",
            },
            {
              index: "4-3",
              title: "项目三",
            },
          ],
        },
      ],
      svg: `<svg
          t="1732240061994"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="4305"
          width="200"
          height="200"
        >
          <path
            d="M523.52 598.4C593.28 552.32 640 473.6 640 384c0-141.44-114.56-256-256-256C242.56 128 128 242.56 128 384c0 89.6 46.72 168.32 116.48 214.4C101.76 645.12 0 765.44 0 928 0 945.92 14.08 960 32 960S64 945.92 64 928C64 751.36 207.36 640 384 640c176.64 0 320 111.36 320 288 0 17.92 14.08 32 32 32 17.92 0 32-14.08 32-32C768 765.44 666.24 645.12 523.52 598.4zM384 576C278.4 576 192 489.6 192 384s86.4-192 192-192c105.6 0 192 86.4 192 192S489.6 576 384 576zM804.48 602.24C878.08 556.8 928 476.8 928 384c0-141.44-114.56-256-256-256C654.08 128 640 142.08 640 160 640 177.92 654.08 192 672 192c105.6 0 192 86.4 192 192 0 71.04-38.4 132.48-96 165.76-56.32 34.56-71.68 83.2 0 109.44 111.36 39.68 192 144 192 269.44 0 17.92 14.08 32 32 32 17.92 0 32-14.08 32-32C1024 780.8 933.12 654.72 804.48 602.24z"
            p-id="4306"
          ></path>
        </svg>`,
    };
  },
  methods: {
    getBarList() {
      return [];
    },
  },
};
</script>

<style scoped>
.sideBar {
  height: 95vh;
}
.menu {
  height: 100%;
  background-color: #545c64;
}
</style>