<template>
  <v-container>
    <div class="d-flex justify-center">
      <v-card class="px-10 pt-10 pb-5 subcontainer__card" width="450px" dark>
        <span class="display-1">Sign in</span>

        <div class="mt-3">
          <span class="white--text body-2">Sign in to your Vyndue account on Lyduz.com</span>
        </div>

        <div class="mt-10">
          <v-btn
            block
            class="success no-transform black--text d-block mx-auto"
          >Sign in with single sign-on</v-btn>
          <v-btn text class="no-transform success--text d-block mx-auto mt-2">New user? Sign up</v-btn>
        </div>
      </v-card>
    </div>
  </v-container>
</template>

<script>
export default {};
</script>

<style scoped>
.subcontainer__card {
  border: thin solid #172431;
}
</style>