import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex); // use 把 store 绑到 Vue.prototype 上

const store = new Vuex.Store({
  state: {  // 类似与 vue 的 data
    count: 0
  },
  mutations: { // 类似于 vue 的 methods
    increment(state, n:number) {
      state.count += n;
    }
  },
});

export default store;