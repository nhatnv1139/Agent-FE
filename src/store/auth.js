import { defineStore } from "pinia";

const useAuth = defineStore("authenticate", {
  state: () => ({
    isAuthenticated: false,
  }),
  getters: {
    getAuthInfo: (state) => state.isAuthenticated,
  },
  actions: {},
});
export default useAuth;
