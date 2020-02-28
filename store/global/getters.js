export default {
  getLoggedIn(state) {
    return state.loggedIn;
  },
  getClientIsPrepared(state) {
    return state.clientIsPrepared;
  },
  getCurrentRoom(state) {
    return state.currentRoom;
  },
  getUser(state) {
    return state.user;
  }
};
