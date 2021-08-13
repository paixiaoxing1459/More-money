<template>
  <div>
    <ul class="types">
      <li :class="type === '-' && 'selected' "
          @click="selectType('-')">支出
      </li>
      <li :class="type === '+' && 'selected' "
          @click="selectType('+')">收入
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';

@Component({
  props: {
    propMessage: String
  }
})
export default class Types extends Vue {
  type = '-'; // '-' 表支出，'+'表收入
  helloMsg = 'Hello,' + this.propMessage;

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  selectType(type: string) {
    if (type !== '-' && type !== '+') {
      throw new Error('type is unknown!!');
    }
    this.type = type;
  }
}


// export default {
//   name: 'Types',
//   data(){
//     return{
//       // - 表示支出。+ 表示收入
//       type:'-'
//     }
//   },
//   methods:{
//     selectType(type){ // type 只能是 + 和 - 中的一个
//       if(type !== "-" && type !== "+"){
//         // 抛出一个错误
//         throw new Error('type is unknown!!')
//       }
//
//       this.type=type
//     }
//   }
// };
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