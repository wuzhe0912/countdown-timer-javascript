import { RootState } from './types';
import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';

Vue.use(Vuex);

const store: StoreOptions<RootState> = {
  state: {
    helloMessage: 'Hello this store state!',
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {},
};

export default new Vuex.Store<RootState>(store);
