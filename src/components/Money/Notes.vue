<template>
  <div>
    <label class="notes">
      <span class="name">{{ this.fieldName }}</span>
      <!--   placeholder 是 input 的一个占位符     -->
      <input type="text"
             v-model="value"
             :placeholder="this.placeholder"/>
    </label>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Prop, Watch} from 'vue-property-decorator';

@Component
export default class Notes extends Vue {
  value = '';

  @Prop({required: true}) fieldName!: string;
  @Prop() placeholder?: string;

  @Watch('value')
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  onValueChanged(value: string) {
    this.$emit('update:value', value);
  }
}
</script>

<style lang="scss" scoped>
.notes {
  font-size: 14px;
  background: #f5f5f5;
  padding-left: 16px;
  display: flex;
  align-items: center;

  .name {
    padding-right: 16px;
  }

  input {
    height: 64px;
    flex-grow: 1;
    background: transparent;
    border: none;
    padding-right: 16px;
  }
}
</style>