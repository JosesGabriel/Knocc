<template>
  <v-container class="pa-0 ma-0">
    <v-row>
      <v-col cols="1" class="pa-0 pl-7 pt-3">
        <v-avatar color="success" size="26">
          <span class="white--text headline">J</span>
        </v-avatar>
      </v-col>
      <v-col cols="11" class="py-0"
        ><v-textarea
          v-model="textarea"
          solo
          dark
          flat
          label="Send a message..."
          rows="1"
          hide-details
          background-color="transparent"
          no-resize
          single-line
          @keyup.enter=""
        ></v-textarea
      ></v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      textarea: ""
    };
  }
};
</script>
