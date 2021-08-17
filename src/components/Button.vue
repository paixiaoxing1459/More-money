<template>
  <button class="button"
          @click="$emit('click',$event)">
    <slot/>
  </button>
</template>

<script lang="ts">
export default {
  name: 'Button'
};
</script>

<style lang="scss" scoped>
.button {
  background: #767676;
  color: white;
  border-radius: 4px;
  border: none;
  height: 40px;
  padding: 0 16px;
  // 表示 createTag-wrapper
  &-wrapper {
    text-align: center;
    padding: 16px;
    margin-top: 28px;
  }
}
</style>