import clone from '@/lib/clone';

const localStorageKeyName = 'recordList';
const recordListModel = {
  data: [] as RecordItem[],
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types

  create(record: RecordItem) {
    // 深拷贝一下
    // eslint-disable-next-line no-undef
    const record2: RecordItem = clone(record);
    record2.createdAt = new Date();
    this.data.push(record2);
  },

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  fetch() {
    this.data = JSON.parse(window.localStorage.getItem(localStorageKeyName) || '[]') as RecordItem[];
    return this.data;
  },

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  save() {
    window.localStorage.setItem(localStorageKeyName,
      JSON.stringify(this.data));
  }
};

export default recordListModel;