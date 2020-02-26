export const client = require("matrix-js-sdk").createClient(
  "https://im.lyduz.com"
);
export const access_token = client
  .login("m.login.password", {
    user: "sesss",
    password: "123123123"
  })
  .then(response => {
    client.startClient({
      accessToken: response.access_token
    });
  })
  .catch(error => {
    console.log(error.response);
  });
