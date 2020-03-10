<template>
  <v-card color="transparent" dark flat min-height="550">
    <v-card-title class="d-block pb-2">
      <div class="title font-weight-black mb-3">General</div>
    </v-card-title>
    <v-container class="py-0">
      <v-row class="mb-4">
        <v-col cols="10" class="py-0">
          <v-text-field
            color="success"
            label="Room Name"
            placeholder="Sesss"
            outlined
            dense
          ></v-text-field>
          <v-textarea color="success" outlined label="Room Topic"></v-textarea>
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
        <v-col cols="10" class="py-0">
          <div class="body-1 font-weight-black pb-2">Leave Room</div>
          <v-btn color="success black--text no-transform font-weight-black"
            >Leave Room</v-btn
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
