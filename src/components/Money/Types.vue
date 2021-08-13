<template>
  <div>
    <ul class="types">
      <li class="selected">支出</li>
      <li>收入</li>
    </ul>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Types'
};
</script>

<style lang="scss" scoped>
.types {
  background-color: #c4c4c4;
  display: flex;
  text-align: center;
  font-size: 24px;
  > li {
    width: 50%;
    line-height: 64px;
    display: flex;
    justify-content: center;
    align-items: center;
    //  相对定位
    position: relative;
    //  .selected 表示 li 后代被 selected
    //  &.selected 表示 当前 li 被选择
    //  伪元素 after
    &.selected::after {
      // 没有 content 就不会出现
      content: "";
      // 子绝父相，用绝对定位来设置被选中 li 的底部，父元素相对定位
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 4px;
      background: #333;
    }
  }
}
</style>