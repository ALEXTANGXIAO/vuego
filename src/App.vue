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
// #app {
//   font-family: Avenir, Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
// }

// #nav {
//   padding: 30px;

//   a {
//     font-weight: bold;
//     color: #2c3e50;

//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }
</style>
