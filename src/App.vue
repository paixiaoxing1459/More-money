<template>
  <div>
    <router-view/>
  </div>
</template>

<style lang="scss">
body{
//  修改默认行高
  line-height: 1.5;
}
a{
  // 去掉 a 标签的样式
  text-decoration: none;
  // 颜色是继承 只是：继承 icon 的颜色吗？
  color: inherit;
}
  *{
    margin: 0;padding: 0;
    box-sizing: border-box;
  }
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  #nav {
    padding: 30px;

    a {
      font-weight: bold;
      color: #2c3e50;

      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }
</style>
