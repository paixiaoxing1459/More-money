<template>
  <ul class="tabs">
    <li v-for="item in dataSource" :key="item.value"
        :class="liClass(item)" @click="select(item)">{{ item.text }}
    </li>
  </ul>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';

type DataSourceItem = { text: string, value: string }

@Component
export default class Tabs extends Vue {
  @Prop({required: true, type: Array})
  dataSource!: DataSourceItem[];
  @Prop(String)
  readonly value!: string;
  @Prop(String)
  classPrefix ?: string;

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  liClass(item: DataSourceItem){
    return {
      [this.classPrefix + '-tabs-item']: this.classPrefix,
      selected: item.value === this.value
    }
  }

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  select(item: DataSourceItem) {
    this.$emit('update:value', item.value);
  }
}
</script>

<style lang="scss" scoped>
.tabs {
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