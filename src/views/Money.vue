<template>
  <Layout class-prefix="layout">
    <NumberPad @update:value="onUpdateAmount" @submit="saveRecord"/>
    <Types :value.sync="record.type"/>
    <Notes @update:value="onUpdateNotes"/>
    <Tags :data-source.sync="tags" @update:value="onUpdateTags"/>

  </Layout>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Watch} from 'vue-property-decorator';
import NumberPad from '@/components/Money/NumberPad.vue';
import Types from '@/components/Money/Types.vue';
import Tags from '@/components/Money/Tags.vue';
import Notes from '@/components/Money/Notes.vue';

const recordList: Record[] = JSON.parse(window.localStorage.getItem('recordList') || '[]');

type Record = {
  tags: string[]
  notes: string
  type: string
  amount: number
  createdAt?: Date // 类 ， 构造函数
}

@Component({
  components: {Notes, Tags, Types, NumberPad}
})
export default class Money extends Vue {
  tags = ['衣', '食', '住', '行', '彩票'];
  recordList: Record[] = recordList;
  record: Record = {
    tags: [],
    notes: '',
    type: '-',
    amount: 0
  };

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  onUpdateTags(value: string[]) {
    this.record.tags = value;
  }

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  onUpdateNotes(value: string) {
    this.record.notes = value;
  }


  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  onUpdateAmount(value: string) {
    this.record.amount = parseFloat(value);
  }

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  saveRecord() {
    // 深拷贝一下
    const record2: Record = JSON.parse(JSON.stringify(this.record));
    record2.createdAt = new Date();
    this.recordList.push(record2);
    console.log(this.recordList);
  }

  @Watch('recordList')
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  onRecordListChange() {
    window.localStorage.setItem('recordList', JSON.stringify(this.recordList));
  }
}
</script>

<style lang="scss">
.layout-content {
  display: flex;
  flex-direction: column-reverse;
}
</style>
