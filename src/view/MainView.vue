<template>
  <div class="mainView">
    <el-row class="header">
      <Top :props="topProps"></Top>
    </el-row>
    <el-row>
      <el-col :span="4" class="side">
        <SideBar :props="sideBarProps"></SideBar>
      </el-col>
      <el-col :span="20">
        <router-view
          name="content"
          id="content"
          class="content m-l m-t m-r"
        ></router-view>
      </el-col>
    </el-row>
  </div>
</template>

<script>
// import MyButton from '@/components/MyButton.vue';
import Top from "@/components/Top.vue";
import SideBar from "@/components/SideBar.vue";
import { testGet, testPost } from "@/api/requestList";

export default {
  name: "MainView",
  components: {
    // MyButton
    Top,
    SideBar,
  },
  created() {
    const that = this;
    that.sideBarProps = that.getSideBarData();
    that.topProps = that.getTopData();
  },
  data() {
    return {
      // 组件属性
      sideBarProps: {},
      topProps: {},
    };
  },
  methods: {
    // 获取侧导航栏数据
    getSideBarData() {
      let sideBarData = {
        menuList: [
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
      return sideBarData;
    },
    // 获取顶栏数据
    getTopData() {
      let topData = {
        avatar:
          "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
        userName: "昵称",
        logo: "https://www.hnu.edu.cn/images/logo.png",
      };
      return topData;
    },

    async testGet() {
      const res = await testGet({ id: "1025", name: "老刘" });
      console.log(res);
    },
    async testPost() {
      const res = await testPost({ id: "1025", name: "老刘" });
      console.log(res);
    },
  },
};
</script>

<style scoped>
.test {
  background-color: aquamarine;
}
</style>