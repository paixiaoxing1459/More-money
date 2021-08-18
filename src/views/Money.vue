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
    <Tags :data-source.sync="tags" @update:value="onUpdateTags" />
  </Layout>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Watch } from "vue-property-decorator";
import NumberPad from "@/components/Money/NumberPad.vue";
import Types from "@/components/Money/Types.vue";
import Tags from "@/components/Money/Tags.vue";
import FormItem from "@/components/Money/FormItem.vue";
import recordListModel from "@/models/recordListModel";
import tagListModel from "@/models/tagListModel";

// eslint-disable-next-line no-undef
const recordList = recordListModel.fetch();
const tagList = tagListModel.fetch();

@Component({
  components: { FormItem, Tags, Types, NumberPad },
})
export default class Money extends Vue {
  tags = tagList;
  // eslint-disable-next-line no-undef
  recordList: RecordItem[] = recordList;
  // eslint-disable-next-line no-undef
  record: RecordItem = {
    tags: [],
    notes: "",
    type: "-",
    amount: 0,
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
   recordListModel.create(this.record);
  }

  @Watch("recordList")
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  onRecordListChange() {
    recordListModel.save();
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
