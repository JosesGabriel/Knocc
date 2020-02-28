export default {
  SET_LOGGEDIN(state, data) {
    state.loggedIn = data;
  },
  SET_CLIENTISPREPARED(state, data) {
    state.clientIsPrepared = data;
  },
  SET_CURRENTROOM(state, data) {
    state.currentRoom = data;
  },
  SET_USER(state, data) {
    state.user = data;
  }
};
