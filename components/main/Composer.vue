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
          v-model="message"
          solo
          dark
          flat
          label="Send a message..."
          rows="1"
          hide-details
          background-color="transparent"
          no-resize
          single-line
          @keyup.enter="sendMessage"
        ></v-textarea
      ></v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
import { client } from "~/assets/client.js";
export default {
  data() {
    return {
      message: ""
    };
  },
  computed: {
    ...mapGetters({
      currentRoom: "global/getCurrentRoom"
    })
  },
  methods: {
    sendMessage() {
      const content = {
        body: this.message,
        msgtype: "m.text"
      };
      client
        .sendEvent(this.currentRoom.roomId, "m.room.message", content, "")
        .then(response => {})
        .catch(e => {
          // console.log(e);
        });
      this.message = "";
    }
  }
};
</script>
