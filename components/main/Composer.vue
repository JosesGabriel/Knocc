<template>
  <div class="pa-0 ma-0">
    <v-row no-gutters>
      <v-col cols="1" class="pt-3">
        <v-avatar color="success" class="mx-auto d-block" size="26">
          <img :src="user.avatarUrl" />
        </v-avatar>
      </v-col>
      <v-col cols="11" class="py-0">
        <v-textarea
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
        ></v-textarea>
      </v-col>
    </v-row>
  </div>
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
      currentRoom: "global/getCurrentRoom",
      user: "global/getUser"
    })
  },
  methods: {
    sendMessage() {
      if (this.message.trim()) {
        console.log(this.message);
        const content = {
          body: this.$sanitize(this.message),
          msgtype: "m.text"
        };
        client.sendEvent(
          this.currentRoom.roomId,
          "m.room.message",
          content,
          ""
        );
      }
      this.message = "";
    }
  }
};
</script>
