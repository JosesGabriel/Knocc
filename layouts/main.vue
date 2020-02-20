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
  }
};
</script>
