<template>
  <div class="mainView">
    <el-row class="header">
      <Top :props="topProps"></Top>
    </el-row>
    <el-row>
      <el-col :span="4" class="side">
        <SideBar :props="sideBarProps"></SideBar>
      </el-col>
      <el-col :span="20" class="content">
        <router-view></router-view>
      </el-col>
    </el-row>
  </div>
</template>

<script>
// import MyButton from '@/components/MyButton.vue';
import Top from '@/components/Top.vue';
import SideBar from '@/components/SideBar.vue';

export default {
  name: 'MainView',
  components: {
    // MyButton
    Top,
    SideBar
  },
  created() {
    const that = this;
    let temp = {};

    // 初始化数据
    that.getSideBarData();
    that.getTopData();

    // 设置sideBarProps
    temp = {
      menuList: that.sideBarData,
    };
    that.sideBarProps = temp;

    // 设置topProps
    temp = {
      avatar: that.avatar,
      userName: that.userName,
      logo: that.logo,
    }
    that.topProps = temp;
  },
  data () {
    return {
      // 顶栏数据
      avatar: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
      userName: "昵称",
      logo: "https://th.bing.com/th?id=ODLS.0acfef95-5236-420f-8b5a-adb35f65106a&w=32&h=32&qlt=90&pcl=fffffa&o=6&pid=1.2",

      // 侧导航栏数据
      sideBarData: [
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
          ] 
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
          ] 
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
          ] 
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
          ] 
        },
      ],

      // 组件属性
      sideBarProps: {
        menuList: [] // 菜单数据
      },
      topProps: {
        avatar: "", // 头像url
        userName: "", // 用户昵称
        logo: "", // logo图标url
      }
    }
  },
  methods: {
    // 获取侧导航栏数据
    getSideBarData() {

    },
    // 获取顶栏数据
    getTopData() {

    }
  }
}
</script>

<style scoped>
  .test {
    background-color: aquamarine;
  }
  .mainView {
    
  }
  .header {
    background-color: #409EFF;
    border-radius: 5px 5px 0 0;
    border-bottom: 1px solid #ccc;
  }
  .side {
    /* background-color: rgb(154, 195, 246); */
  }
  .content {
    /* background-color: rgb(99, 124, 146); */
  }
</style>