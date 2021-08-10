<template>
  <div>
    <div>当前页面不存在，请检查网址是否正确！</div>
    <div>
      <router-link to="/">返回首页</router-link>
      <!--   还可以用 a 标签达到这个效果   -->
      <!--      <a href="#/">返回首页</a>-->
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'NotFound'
};
</script>

<style lang="scss" scoped>

</style>