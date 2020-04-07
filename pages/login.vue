<template>
  <div>
    <Signin />

    <div class="login__footer--container d-block text-center pb-5" width="100%">
      <span class="white--text body-2">powered by Lyduz</span>
    </div>
  </div>
</template>

<script>
import Signin from "~/components/login/Signin";

export default {
  layout: "main",
  components: {
    Signin
  },
  middleware: "vyndueAuth",
};
</script>

<style>
.theme--dark.v-sheet {
  background-color: #00121e;
}
.login__footer--container {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
}
</style>