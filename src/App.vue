<template>
  <div id="app">
    <txTabBar />
    <navbar />
    <b-container>
      <router-view />
    </b-container>
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
       <router-link to="/register">register</router-link> |
      <router-link to="/login">login</router-link>
    </div> -->
  </div>
</template>

<script>
import Navbar from "./views/layout/Navbar.vue";
import TxTabBar from "./views/txtabBar/TxTabBar.vue";
export default {
  components: { Navbar, TxTabBar },
  name: "App",
  // img :  this.$refs.dom,
  data() {
    return {
      bgImg: bgImg
    };
    // },
    // beforeCreate: function () {
    //   console.group("beforeCreate 创建前状态===============》");
    //   console.log("%c%s", "color:red", "el     : " + this.$el); //undefined
    //   console.log("%c%s", "color:red", "data   : " + this.$data); //undefined
    //   console.log("%c%s", "color:red", "message: " + this.message); //undefined
    // },
    // created: function () {
    //   console.group("created 创建完毕状态===============》");
    //   console.log("%c%s", "color:red", "el     : " + this.$el); //undefined
    //   console.log("%c%s", "color:green", "data   : " + this.$data); //[object Object]  =>  已被初始化
    //   console.log("%c%s", "color:green", "message: " + this.message); //Welcome Vue  =>  已被初始化
    // },
    // beforeMount: function () {
    //   console.group("beforeMount 挂载前状态===============》");
    //   console.log("%c%s", "color:green", "el     : " + this.$el); //已被初始化
    //   console.log(this.$el); // 当前挂在的元素
    //   console.log("%c%s", "color:green", "data   : " + this.$data); //已被初始化
    //   console.log("%c%s", "color:green", "message: " + this.message); //已被初始化
    // },
    // mounted: function () {
    //   console.group("mounted 挂载结束状态===============》");
    //   console.log("%c%s", "color:green", "el     : " + this.$el); //已被初始化
    //   console.log(this.$el);
    //   console.log("%c%s", "color:green", "data   : " + this.$data); //已被初始化
    //   console.log("%c%s", "color:green", "message: " + this.message); //已被初始化
    // },
    // beforeUpdate: function () {
    //   alert("更新前状态");
    //   console.group("beforeUpdate 更新前状态===============》"); //这里指的是页面渲染新数据之前
    //   console.log("%c%s", "color:green", "el     : " + this.$el);
    //   console.log(this.$el);
    //   console.log("%c%s", "color:green", "data   : " + this.$data);
    //   console.log("%c%s", "color:green", "message: " + this.message);
    //   alert("更新前状态2");
    // },
    // updated: function () {
    //   console.group("updated 更新完成状态===============》");
    //   console.log("%c%s", "color:green", "el     : " + this.$el);
    //   console.log(this.$el);
    //   console.log("%c%s", "color:green", "data   : " + this.$data);
    //   console.log("%c%s", "color:green", "message: " + this.message);
    // },
    // beforeDestroy: function () {
    //   console.group("beforeDestroy 销毁前状态===============》");
    //   console.log("%c%s", "color:red", "el     : " + this.$el);
    //   console.log(this.$el);
    //   console.log("%c%s", "color:red", "data   : " + this.$data);
    //   console.log("%c%s", "color:red", "message: " + this.message);
    // },
    // destroyed: function () {
    //   console.group("destroyed 销毁完成状态===============》");
    //   console.log("%c%s", "color:red", "el     : " + this.$el);
    //   console.log(this.$el);
    //   console.log("%c%s", "color:red", "data   : " + this.$data);
    //   console.log("%c%s", "color:red", "message: " + this.message);
    // },
    // };
  }
};
</script>

<style scoped lang="scss">
</style>
