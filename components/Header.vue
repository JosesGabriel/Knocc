<template>
  <v-toolbar class="darkBG" height="54" flat dense>
    <v-toolbar-title>
      <router-link to="/">
        <img
          class="pl-2 pt-1"
          src="logo-light.svg"
          alt
          width="125"
          height="auto"
        />
      </router-link>
    </v-toolbar-title>
    <!-- <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
    </v-btn>-->
  </v-toolbar>
</template>
<script>
export default {
  components: {},
  data() {
    return {};
  },
  mounted() {},
  beforeDestroy() {},
  methods: {}
};
</script>
<style>
.social__router {
  text-decoration: none;
  display: inline-flex;
  height: 0;
}
.header__toolbar {
  position: fixed !important;
  width: 100%;
  z-index: 100;
  background-color: #00121e;
  border-bottom: 1px white;
}
.headerMenu {
  position: relative;
  top: 40px;
  left: 35px;
  border: 1px solid rgba(255, 255, 255, 0.12);
}
.vyndue__badge .v-badge__wrapper .v-badge__badge {
  color: #f44336;
  font-size: 10px;
}
</style>
