<template>
  <v-app>
    <v-content class="darkBG">
      <Header class="header__container" />
      <nuxt />
      <v-overlay :value="overlay">
        <v-progress-circular indeterminate size="64"></v-progress-circular>
      </v-overlay>
      <v-snackbar v-model="snackbar" :color="alert.state ? 'success' : 'error'">
        {{ alert.message }}
        <v-btn color="white" text @click="snackbar = false">Close</v-btn>
      </v-snackbar>
    </v-content>
  </v-app>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { client } from "~/assets/client.js";
import Header from "~/components/Header";
export default {
  components: {
    Header
  },
  data() {
    return {
      overlay: true,
      snackbar: false
    };
  },
  computed: {
    ...mapGetters({
      clientIsPrepared: "global/getClientIsPrepared",
      alert: "global/getAlert"
    })
  },
  watch: {
    /**
     * gets current users data and sets is to the 'user' vuex state
     *
     * @return
     */
    clientIsPrepared() {
      const user = client.getUser(client.getUserId());
      user.avatarUrl = client.mxcUrlToHttp(user.avatarUrl, 40, 40, "crop");
      this.setUser({
        userId: user.userId,
        displayName: user.rawDisplayName,
        avatarUrl: user.avatarUrl
      });
    },
    alert() {
      this.snackbar = this.alert.model;
    }
  },
  beforeMount() {
    this.prepareClient();
  },
  mounted() {},
  methods: {
    ...mapActions({
      setUser: "global/setUser",
      setClientIsPrepared: "global/setClientIsPrepared"
    }),
    prepareClient() {
      client.once("sync", state => {
        if (state === "PREPARED") {
          this.overlay = false;
          this.setClientIsPrepared(true);
        } else {
          console.log(state);
          process.exit(1);
        }
      });
    }
  }
};
</script>
