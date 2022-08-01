import { Module } from 'vuex';
import { RootState } from '@/store/types';
import { UserState } from './types';

const state: UserState = {
  username: 'PittWu',
  email: 'PittWu@gmail.com',
  lastLogin: new Date(),
};

export const user: Module<UserState, RootState> = {
  state,
};
