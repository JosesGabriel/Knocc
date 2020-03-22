<template>
  <v-card color="darkcard" dark min-height="250">
    <v-card-title class="title justify-space-between">
      <span class="font-weight-black">Share Room</span>
      <v-btn icon small @click="$emit('close')">
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </v-card-title>
    <v-container class="modalContent__container">
      <v-row>
        <v-col cols="12" class="pr-1">
          <v-text-field v-model="roomURL" success outlined dense></v-text-field>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      roomURL: ""
    };
  },
  mounted() {
    this.roomURL = window.location;
  }
};
</script>
