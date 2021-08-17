<template>
  <svg class="icon" @click="$emit('click',$event)">
    <!--  这里的 v-bind 可以省略，但是我不想省略，怕自己看不到  -->
    <use :xlink:href="'#'+name"/>
  </svg>
</template>

<script lang="ts">
// 将 icons 目录里面所有的的 svg 文件引入
// eslint-disable-next-line no-undef
let importAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().forEach(requireContext);
try {
  importAll(require.context('../assets/icons', true, /\.svg$/));
} catch (error) {
  console.log(error);
}
export default {
  props: ['name'],
  name: 'Icon'
};
</script>

<style lang="scss" scoped>
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>