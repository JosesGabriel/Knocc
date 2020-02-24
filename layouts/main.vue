<template>
  <v-app>
    <v-content class="darkBG">
      <Header class="header__container" />
      <nuxt />
    </v-content>
  </v-app>
</template>

<script>
import Header from "~/components/Header";
export default {
  components: {
    Header
  },
  data() {
    return {};
  },
  beforeMount() {
    this.login();
  },
  methods: {
    login() {
      const params = {
        type: "m.login.password",
        user: "sesss",
        password: "123123123"
      };
      this.$api.authentication.login
        .create(params)
        .then(response => {
          this.$auth
            .setUserToken(response.access_token)
            .then(response => {
              console.log("Success nuxt auth set token");
              // console.log(response);
            })
            .catch(error => {
              console.log("Error nuxt auth set token");
              // console.log(error.response);
            });
        })
        .catch(error => {});
    }
  }
};
</script>
