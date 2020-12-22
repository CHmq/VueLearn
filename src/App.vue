<template>
  <div id="app">
    <!-- 不让路由销毁当前路径 -->
    <keep-alive exclude="detail">
      <router-view></router-view>
    </keep-alive>

    <MainTabbar />
  </div>
</template>

<script>
import MainTabbar from "components/content/MainTabbar";

export default {
  name: "app",
  components: {
    MainTabbar
  }
};
</script>

<style>
</style>
