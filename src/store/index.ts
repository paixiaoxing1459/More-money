import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {  // 类似与 vue 的 data
    count: 0
  },
  mutations: { // 类似于 vue 的 methods
    increment(state, n:number) {
      state.count += n;
    }
  }
});

store.commit('increment', 10);


export default store;