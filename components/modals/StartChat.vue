<template>
  <v-card color="darkcard" dark min-height="250">
    <v-card-title class="title justify-space-between">
      <span class="font-weight-black">Start a chat</span>
      <v-btn icon small @click="$emit('close')">
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </v-card-title>
    <v-container class="settingsContent__container">
      <v-row>
        <v-col cols="12">
          <div>
            Who would you like to communicate with?
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" class="pr-1">
          <v-text-field
            outlined
            placeholder="Email, Name or Username"
            dense
          ></v-text-field>
        </v-col>
      </v-row>
    </v-container>

    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn
        outlined
        color="success"
        class="no-transform px-5"
        @click="$emit('close')"
      >
        Cancel
      </v-btn>
      <v-btn
        color="success"
        class="black--text no-transform px-7 font-weight-bold"
      >
        Start Chat
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  }
};
</script>
