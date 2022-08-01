import { RootState } from './types';
import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import { user } from '@/store/user';

Vue.use(Vuex);

const store: StoreOptions<RootState> = {
  state: {
    helloMessage: 'Hello this store state!',
  },
  modules: {
    user,
  },
  getters: {},
  mutations: {},
  actions: {},
};

export default new Vuex.Store<RootState>(store);
