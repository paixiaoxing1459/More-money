type RecordItem = {
  tags: string[]
  notes: string
  type: string
  amount: number
  createdAt?: Date // 类 ， 构造函数
}

type Tag = {
  id: string;
  name: string;
}
type TagListModel = {
  data: Tag[]
  fetch: () => Tag[]
  create: (name: string) => 'success' | 'duplicated'  // 联合类型， success => 成功 ， duplicated => name 重复 ，
  update: (id: string, name: string) => 'success' | 'not found' | 'duplicated'
  remove: (id: string) => boolean
  save: () => void
}

interface Window {
  tagList: Tag[];
  createTag: (name: string) => void;
  removeTag: (id: stirng) => boolean;
  updateTag: (id: string, name: string) => 'success' | 'not found' | 'duplicated';
  // 可以简写如下
  // updateTag: TagListModel['update']

  findTag: (id: string) => Tag | undefined;
  recordList: RecordItem[];
  createRecord: (record: RecordItem) => void;
}