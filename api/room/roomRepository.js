const baseURL = process.env.API_URL + "/rooms";

export default $axios => ({
  messages(params, payload) {
    return $axios.$get(`${baseURL}/` + params.roomId + `/messages`);
  },
  history(roomId, params) {
    let query = buildParams(params);
    return $axios.$get(
      `${baseURL}/` +
        roomId +
        `/messages` +
        `${query.length > 0 ? "?" + query : ""}`
    );
  }
});

function buildParams(args) {
  let bld = [];
  let params = "";
  if (args != undefined) {
    for (const [key, value] of Object.entries(args)) {
      bld.push(`${key}=${value}`);
    }
    params = bld.join("&");
  }
  return params;
}
