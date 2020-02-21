export const client = require("matrix-js-sdk").createClient(
  `${process.env.VYNDUE_API_URL}`
);
export let myToken = "";
client
  .login("m.login.password", {
    user: "@lerroux:im.arbitrage.ph",
    password: "angelus69"
  })
  .then(response => {
    console.log("joses");
    console.log(response);
    myToken = response.access_token;
  });
client.startClient();
