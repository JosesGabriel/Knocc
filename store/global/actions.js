export default {
  async setLoggedIn({ commit }, data) {
    await commit("SET_LOGGEDIN", data);
  }
};
