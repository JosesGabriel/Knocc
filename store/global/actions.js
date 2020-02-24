export default {
  async setLightSwitch({ commit }, data) {
    await commit("SET_LIGHTSWITCH", data);
  }
};
