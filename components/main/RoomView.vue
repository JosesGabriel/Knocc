<template>
  <v-container class="pa-0 ma-0 roomView--height">
    <div class="message__wrap" @scroll="scroll">
      <div
        v-for="(message, index) in messagesObject"
        :key="index"
        class="message__list"
      >
        <v-avatar size="30">
          <img :src="message.AvatarUrl" />
        </v-avatar>
        <div class="message text">
          <div class="px-2 success--text overline">
            {{ message.displayName }}
          </div>
          <p class="px-2 caption">
            {{
              message.messagesObject ? message.messagesObject : "[ redacted ]"
            }}
          </p>
        </div>
      </div>
    </div>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
import { client } from "~/assets/client.js";
export default {
  data() {
    return {
      messagesObject: [],
      lastFromToken: ""
    };
  },
  computed: {
    ...mapGetters({
      clientIsPrepared: "global/getClientIsPrepared",
      currentRoom: "global/getCurrentRoom"
    })
  },
  watch: {
    currentRoom() {
      this.switchRoom();
    }
  },
  mounted() {
    this.getMessages();
  },
  created() {
    document.body.addEventListener("scroll", this.scroll);
  },
  destroyed() {
    document.body.removeEventListener("scroll", this.scroll);
  },
  methods: {
    /**
     * Start listening to room events, run on mount
     *
     * @return  {[type]}
     */
    getMessages() {
      client.on(
        "Room.timeline",
        function(event, room, toStartOfTimeline) {
          if (event.getType() !== "m.room.message") {
            return; // only use messages
          }
          if (event.getRoomId() === this.currentRoom.roomId) {
            const sender = client.getUser(event.getSender());
            let modified_avatarUrl = "default.png";
            if (sender.avatarUrl && sender.avatarUrl.includes("mxc://")) {
              modified_avatarUrl = client.mxcUrlToHttp(
                sender.avatarUrl,
                40,
                40,
                "crop"
              );
            } else if (
              sender.avatarUrl &&
              sender.avatarUrl.includes("https://")
            ) {
              modified_avatarUrl = sender.avatarUrl;
            }
            this.messagesObject.unshift({
              AvatarUrl: modified_avatarUrl,
              displayName: sender.displayName,
              messagesObject: event.event.content.body
            });
          }
        }.bind(this)
      );
    },
    /**
     * This function fires when Vuex state 'currentRoom' changes
     * 'currentRoom' state changes based on user clicks on a new room on roomList.vue
     *
     * Only gets last 5 events or so.
     *
     * @return  {[type]}
     */
    switchRoom() {
      this.messagesObject = [];
      const params = {
        roomId: this.currentRoom.roomId
      };
      this.$api.rooms.messages(params).then(
        function(result) {
          this.getHistoricalMessages(result);
        }.bind(this)
      );
    },
    getHistoricalMessages(data) {
      const params = {
        limit: 30,
        from: data.start,
        dir: "b"
      };
      this.$api.rooms.history(this.currentRoom.roomId, params).then(
        function(result) {
          this.lastFromToken = result.end;
          result.chunk.forEach(event => {
            console.log(event);
            if (event.type == "m.room.message") {
              let sender = client.getUser(event.user_id);
              let modified_avatarUrl = "default.png";
              if (sender.avatarUrl && sender.avatarUrl.includes("mxc://")) {
                modified_avatarUrl = client.mxcUrlToHttp(
                  sender.avatarUrl,
                  40,
                  40,
                  "crop"
                );
              } else if (
                sender.avatarUrl &&
                sender.avatarUrl.includes("https://")
              ) {
                modified_avatarUrl = sender.avatarUrl;
              }
              this.messagesObject.push({
                AvatarUrl: modified_avatarUrl,
                displayName: sender.rawDisplayName,
                messagesObject: event.content.body
              });
            }
          });
        }.bind(this)
      );
    },
    scroll(event) {
      if (event.target.scrollTop == 0) {
        const params = {
          start: this.lastFromToken
        };
        this.getHistoricalMessages(params);
      }
    }
  }
};
</script>

<style>
.roomView--height {
  height: calc(100vh - 162px);
}
.container {
  color: white;
}
.chatClient__wrapper {
  border: 2px solid #03dac5;
}
.chatMembers__container {
  border-right: 1px solid #03dac5;
  border-left: 1px solid #03dac5;
}
.message {
  position: relative;
  width: 100%;
  overflow-y: hidden;
  bottom: 7px;
}
.message__wrap {
  flex: 1;
  display: flex;
  flex-direction: column-reverse;
  padding: 0 15px;
  overflow: auto;
  height: calc(100vh - 166px);
}
.message__list {
  align-self: flex-start;
  max-width: 70%;
  display: inline-flex;
}
.message__sender {
  color: orange;
}
</style>
