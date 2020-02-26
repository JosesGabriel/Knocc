export default {
  async setLoggedIn({ commit }, data) {
    await commit("SET_LOGGEDIN", data);
  },
  async setClientIsPrepared({ commit }, data) {
    await commit("SET_CLIENTISPREPARED", data);
  }
};
