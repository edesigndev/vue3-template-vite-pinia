import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
  state: () => ({
    userData: 'edesigndev',
  }),
  getters: {
    userUpperCase(state) {
      return state.userData.toUpperCase();
    },
  },
  actions: {
    registerUser(name) {
      this.userData = name;
    },
  },
});
