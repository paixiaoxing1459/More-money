<template>
  <Layout class-prefix="layout">
    <NumberPad @update:value="onUpdateAmount" @submit="saveRecord" />
    <Tabs :data-source="recordTypeList"
          :value.sync="record.type"
    />
    <div class="notes">
      <FormItem
          field-name="备注"
          placeholder="在这里添加备注"
          :value.sync = "record.notes"
      />
    </div>
    <Tags @update:value="record.tags = $event" />

  </Layout>
</template>

<script lang="ts">
import Vue from "vue";
import { Component} from "vue-property-decorator";
import NumberPad from "@/components/Money/NumberPad.vue";
import Tags from "@/components/Money/Tags.vue";
import FormItem from "@/components/Money/FormItem.vue";
import Tabs from '@/components/Tabs.vue';
import recordTypeList from '@/constants/recordTypeList';

@Component({
  components: {Tabs, FormItem, Tags, NumberPad },
})
export default class Money extends Vue {
  get recordList(){
    return this.$store.state.recordList
  }

  recordTypeList= recordTypeList;

  // eslint-disable-next-line no-undef
  record: RecordItem = {
    tags: [],
    notes: "",
    type: "-",
    amount: 0,
  };

  created(){
    this.$store.commit('fetchRecords')
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
    if(this.record.tags.length===0 || !this.record.tags){
      return window.alert('至少选择一个标签吧~')
    }
   this.$store.commit('createRecord', this.record);
   if(this.$store.state.createRecordError === null){
     window.alert('已保存');
     this.record.notes = '';
   }
  }
}
</script>

<style lang="scss" scoped>
::v-deep .layout-content {
  display: flex;
  flex-direction: column-reverse;
}

.notes {
  padding: 12px 0;
}
</style>
