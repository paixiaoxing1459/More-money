<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">

@import "./assets/style/reset.scss";
@import "./assets/style/helper.scss";
body{
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // 如果页面
  color: #333;
  //  修改默认行高
  line-height: 1.5;
  font-family: $font-black;
  line-height: 16px;
  background: #f5f5f5;
}
</style>
