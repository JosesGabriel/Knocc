<template>
  <v-app>
    <v-content class="darkBG">
      <Header class="header__container" />
      <nuxt />
      <v-overlay :value="overlay">
        <v-progress-circular indeterminate size="64"></v-progress-circular>
      </v-overlay>
    </v-content>
  </v-app>
</template>

<script>
import { mapActions } from "vuex";
import { client } from "~/assets/client.js";
import Header from "~/components/Header";
export default {
  components: {
    Header
  },
  data() {
    return {
      overlay: true
    };
  },
  watch: {},
  beforeMount() {
    this.prepareClient();
  },
  mounted() {},
  methods: {
    ...mapActions({
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
