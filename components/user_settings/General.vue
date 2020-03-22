<template>
  <v-card color="transparent" dark flat min-height="550">
    <v-card-title class="d-block pb-2">
      <div class="title font-weight-black mb-3">General</div>
      <div class="body-1 font-weight-black">Profile</div>
    </v-card-title>
    <v-container class="py-0">
      <v-row>
        <v-col cols="10" class="py-0">
          <div class="mb-2 body-1">@sesss:im.lyduz.com</div>
          <v-text-field
            color="success"
            label="Display Name"
            placeholder="Sesss"
            outlined
            dense
          ></v-text-field>

          <v-btn color="success black--text no-transform font-weight-black"
            >Save</v-btn
          >
        </v-col>
        <v-col cols="2" class="py-0">
          <div
            class="secondary black--text overline no-transform px-2 py-1 upload__btn"
          >
            Upload profile picture <br />
            <v-icon color="grey">mdi-upload-outline</v-icon>
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <div class="title mb-1 font-weight-black">Deactivate Account</div>
          <div class="mb-1 font-weight-black">Account Management</div>
          <div class="mb-2 body-2">
            Deactivating your account is a permanent action - be careful!
          </div>
          <v-btn color="success black--text no-transform"
            >Deactivate Account</v-btn
          >
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<style>
.upload__btn {
  border-radius: 5px;
  text-align: center;
  cursor: pointer;
}
</style>
