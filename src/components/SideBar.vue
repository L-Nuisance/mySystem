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
            <el-icon v-if="subMenu.index === '1'"><House /></el-icon>
            <el-icon v-if="subMenu.index === '2'"><User /></el-icon>
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
import { House, User, Message, Setting } from "@element-plus/icons-vue";
export default {
  name: "SideBar",
  props: {
    props: Object,
  },
  components: {
    House,
    User,
    Message,
    Setting,
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
.el-menu--horizontal {
}
</style>