<template>
  <v-container class="pa-0 ma-0 roomView--height">
    <div class="message__wrap pa-0">
      <div
        v-for="message in messagesObject"
        :key="message"
        class="message__list"
      >
        <v-avatar size="30">
          <v-img :src="message.AvatarUrl"></v-img>
        </v-avatar>
        <div class="message text">
          <div class="px-2 success--text overline">
            {{ message.displayName }}
          </div>
          <p class="px-2 caption">{{ message.messagesObject }}</p>
        </div>
      </div>
    </div>
  </v-container>
</template>

<script>
// import { client } from "~/assets/client.js";
export default {
  data() {
    return {
      messagesObject: [
        {
          AvatarUrl:
            "https://cdn4.iconfinder.com/data/icons/faces-10/96/sadness-512.png",
          displayName: "Plato",
          message: "Test"
        }
      ]
    };
  },
  mounted() {
    // this.loadClient();
  },
  methods: {
    loadClient() {
      // this.loader = "primary";
      const roomID = this.playerCurrentChatRoom;
      client.on(
        "Room.timeline",
        function(event, room, toStartOfTimeline, user) {
          if (event.getType() !== "m.room.message") {
            return;
          }
          if (event.getRoomId() === roomID) {
            var usr = client.getUser(event.getSender());
            var avtURLorig = usr.avatarUrl;
            var avtURL = avtURLorig.substring(6);
            var renderAvatarURL =
              "https://im.arbitrage.ph/_matrix/media/r0/thumbnail/" +
              avtURL +
              "?width=40;height=40;method=crop";
            this.messagesObject.unshift({
              AvatarUrl: renderAvatarURL,
              displayName: usr.displayName,
              messagesObject: event.event.content.body
            });
          }
        }.bind(this)
      );
    }
  }
};
</script>

<style>
.roomView--height {
  height: calc(100vh - 162px);
}
</style>
