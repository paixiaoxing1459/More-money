const localStorageKeyName = 'tagList';
type Tag = {
  id: string;
  name: string;
}
type TagListModel = {
  data: Tag[]
  fetch: () => Tag[]
  create: (name: string) => 'success' | 'duplicated'  // 联合类型， success => 成功 ， duplicated => name 重复 ，
  save: () => void
}

const tagListModel: TagListModel = {
  data: [],
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  fetch() {
    this.data = JSON.parse(window.localStorage.getItem(localStorageKeyName) || '[]');
    return this.data;
  },
  create(name) {
    const names = this.data.map(item => item.name);
    if (names.indexOf(name) >= 0) { return 'duplicated';}
    this.data.push({id: name, name: name});
    this.save();
    return 'success';
  },
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  save() {
    window.localStorage.setItem(localStorageKeyName, JSON.stringify(this.data));
  }
};

export default tagListModel;
