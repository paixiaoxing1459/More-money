<template>
  <nav>
    <!--  active-class 是 router-link（vue3 路由的一个组件） 的一个属性，它用于设置 链接激活时使用的 CSS 类名 -->
    <router-link to="/money" class="item" active-class="selected">
      <Icon name="money" />
      记账
    </router-link>
    <router-link to="/labels" class="item" active-class="selected">
      <Icon name="label" />
      标签
    </router-link>
    <router-link to="/statistics" class="item" active-class="selected">
      <Icon name="statistics" />
      统计</router-link
    >
  </nav>
</template>

<script lang="ts">
let importAll = (requireContext: __WebpackModuleApi.RequireContext) =>
  requireContext.keys().forEach(requireContext);
try {
  importAll(require.context("../assets/icons/", true, /\.svg$/));
} catch (error) {
  console.log(error);
}

export default {
  name: "Nav",
};
</script>

<style lang="scss" scoped>
@import "../assets/style/helper.scss";
nav {
  @extend %outerShadow;
  display: flex;
  flex-direction: row;
  // CSS box-shadow 属性用于 在元素的框架上添加阴影效果
  font-size: 12px;

  // 这样写就是 scss 的语法（并没有了解）
  > .item {
    padding: 2px 0;
    width: 33.333333%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    .icon {
      width: 32px;
      height: 32px;
    }
  }

  > .item.selected {
    color: $color-highlight;
  }
}
</style>