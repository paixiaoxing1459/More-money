<template>
  <div class="nav-wrapper" >
    <div class="content" :class=" classPrefix && `${classPrefix}-content` ">
      <!--   插槽，外面传进来东西就放到 <slot/> 中   -->
      <slot/>
    </div>
    <Nav/>
  </div>
</template>

<script lang="ts">
export default {
  props:['classPrefix'],
  name: 'Layout'
};
</script>


<style lang="scss" scoped>
.nav-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.content {
  // 尽量将所有高度给 content
  flex-grow: 1;
  // overflow 定义当一个元素的内容太大而无法适应 块级格式化上下文 时候该做什么
  // auto 是指 由浏览器定夺，如果内容被修剪，就会显示滚动条
  overflow: auto;
}
</style>