<template>
  <div id="app">
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
export default {
  components: { Navbar }
};
</script>

<style lang="scss">
</style>
