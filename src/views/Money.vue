<template>
  <Layout class-prefix="layout">
    <NumberPad @update:value="onUpdateAmount" @submit="saveRecord" />
    <Types :value.sync="record.type" />
    <div class="notes">
      <FormItem
        field-name="备注"
        placeholder="在这里添加备注"
        @update:value="onUpdateNotes"
      />
    </div>
    <Tags />
  </Layout>
</template>

<script lang="ts">
import Vue from "vue";
import { Component} from "vue-property-decorator";
import NumberPad from "@/components/Money/NumberPad.vue";
import Types from "@/components/Money/Types.vue";
import Tags from "@/components/Money/Tags.vue";
import FormItem from "@/components/Money/FormItem.vue";
import oldStore from '@/store/index2.ts';
import store from '@/store/index.ts';

@Component({
  components: { FormItem, Tags, Types, NumberPad },
  computed:{
    count(){
      return store.state.count
    }
  }
})
export default class Money extends Vue {
  recordList = oldStore.recordList;
  // eslint-disable-next-line no-undef
  record: RecordItem = {
    tags: [],
    notes: "",
    type: "-",
    amount: 0,
  };

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
   oldStore.createRecord(this.record);
  }

}
</script>

<style lang="scss">
.layout-content {
  display: flex;
  flex-direction: column-reverse;
}

.notes {
  padding: 12px 0;
}
</style>
