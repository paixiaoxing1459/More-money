import clone from '@/lib/clone';

const localStorageKeyName = 'recordList';

const recordStore = {
  recordList: [] as RecordItem[],

  // record store
  fetchRecords() {
    this.recordList = JSON.parse(window.localStorage.getItem(localStorageKeyName) || '[]') as RecordItem[];
    return this.recordList;
  },
  saveRecords(){
    window.localStorage.setItem(localStorageKeyName, JSON.stringify(this.recordList));
  },
  createRecord (record: RecordItem) {
    // 深拷贝一下
    // eslint-disable-next-line no-undef
    const record2: RecordItem = clone(record);
    record2.createdAt = new Date().toISOString();
    this.recordList && this.recordList.push(record2);
    recordStore.saveRecords();
  },
};

recordStore.fetchRecords();

export default recordStore;