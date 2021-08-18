const localStorageKeyName = 'recordList';

const recordListModel = {
  data: [] as RecordItem[],
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  clone(data: RecordItem[] | RecordItem) {
    return JSON.parse(JSON.stringify(data));
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