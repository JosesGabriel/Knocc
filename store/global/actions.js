export default {
  async setLoggedIn({ commit }, data) {
    await commit("SET_LOGGEDIN", data);
  },
  async setClientIsPrepared({ commit }, data) {
    await commit("SET_CLIENTISPREPARED", data);
  },
  async setCurrentRoom({ commit }, data) {
    await commit("SET_CURRENTROOM", data);
  },
  async setUser({ commit }, data) {
    await commit("SET_USER", data);
  },
  async setAlert({ commit }, data) {
    await commit("SET_ALERT", data);
  }
};
