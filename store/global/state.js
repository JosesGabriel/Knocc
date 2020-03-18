export default () => ({
  loggedIn: false,
  clientIsPrepared: false,
  user: {
    userId: "",
    displayName: "",
    avatarUrl: ""
  },
  currentRoom: {
    roomId: "",
    displayName: "",
    avatarUrl: ""
  },
  alert: {
    model: false,
    state: "",
    message: ""
  }
});
