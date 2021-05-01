<template>
  <el-container id="app">
    <el-header id="navbar" style="height: 100px;">
      <router-link to="/" class="link">個人資訊</router-link>
      <router-link to="/history" class="link">BMI 紀錄</router-link>
    </el-header>
    <el-main id="main">
      <router-view></router-view>
    </el-main>
  </el-container>
</template>

<script>
/* eslint-disable */
export default {
  name: "App"
};
</script>

<style lang="sass">
@import './assets/main.sass'
#navbar
  // border: 1px solid red
  width: $width
  background-color: #C0C0C0
  .link
    // border: 1px solid red
    text-decoration: none
    margin: 0 50px
    color: black
    font-weight: 700
    font-size: 24px
    line-height: 100px
    &:hover
      color: #4682B4
      transition: $transition

#main
  // border: 1px solid red
  width: $width
</style>
