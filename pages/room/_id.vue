<template>
  <v-card class="darkBG" flat dark>
    <v-container dark class="ma-0 py-0 maxWidth">
      <v-row>
        <v-col cols="3" class="py-0">
          <v-container class="pa-0">
            <v-row>
              <v-col cols="12" class="pa-0">
                <UserRow class="userMenu borderedRow" />
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" class="pa-0">
                <RoomList :key="roomListKey" class="roomList borderedRow" />
              </v-col>
            </v-row>
          </v-container>
        </v-col>
        <v-col cols="9" class="pa-0">
          <v-row no-gutters>
            <v-col cols="12" class="pa-0">
              <RoomHeader class="roomHeader borderedRow" />
            </v-col>
          </v-row>
          <v-row no-gutters>
            <v-col cols="8" class="pa-0">
              <RoomView class="roomView borderedRow" />
              <Composer class="composer borderedRow" />
            </v-col>
            <v-col cols="4" class="pa-0">
              <RoomMembers class="roomMembers borderedRow" />
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { client } from "~/assets/client.js";
import UserRow from "~/components/main/UserRow";
import RoomHeader from "~/components/main/RoomHeader";
import RoomList from "~/components/main/RoomList";
import RoomView from "~/components/main/RoomView";
import RoomMembers from "~/components/main/RoomMembers";
import Composer from "~/components/main/Composer";
export default {
  layout: "main",
  components: {
    UserRow,
    RoomHeader,
    RoomList,
    RoomView,
    RoomMembers,
    Composer
  },
  head() {
    return {
      title: this.currentRoom.displayName,
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { property: "og:title", content: this.currentRoom.displayName },
        {
          property: "og:description",
          content: this.currentRoom.displayName
        },
        { property: "og:type", content: "website" }
      ]
    };
  },
  data() {
    return {
      roomListKey: 0
    };
  },
  computed: {
    ...mapGetters({
      clientIsPrepared: "global/getClientIsPrepared",
      currentRoom: "global/getCurrentRoom",
      user: "global/getUser"
    })
  },
  watch: {
    /**
     * Check if client is prepared before executing getRoomList() method
     *
     * @return
     */
    clientIsPrepared() {
      if (this.clientIsPrepared) {
        this.getURLParameter();
        this.eventsWatcher();
      }
    }
  },
  mounted() {
    if (this.clientIsPrepared) {
      this.getURLParameter();
      this.eventsWatcher();
    }
    console.log(this.currentRoom);
  },
  methods: {
    ...mapActions({
      setCurrentRoom: "global/setCurrentRoom"
    }),
    getURLParameter() {
      const room = client.getRoom(this.$route.params.id);
      if (room) {
        this.setCurrentRoom({
          roomId: this.$route.params.id,
          displayName: room.name,
          avatarUrl: room.avatar_url
        });
      } else {
        const rooms = client.getRooms();
        this.$router.replace("/room/" + rooms[0].roomId);
      }
    },
    eventsWatcher() {
      //Event for receiving invites
      client.on(
        "RoomMember.membership",
        function(event, member) {
          if (
            member.membership === "invite" &&
            member.userId === this.user.userId
          ) {
            this.roomListKey++;
            // console.log("roommembership " + event);
          }
        }.bind(this)
      );
      client.on(
        "Room.timeline",
        function(event, room, toStartOfTimeline) {
          if (event.getType() == "m.room.member") {
            if (event.event.sender == this.user.userId) {
              this.roomListKey++;
            }
          }
        }.bind(this)
      );
    }
  }
};
</script>

<style>
.borderedRow {
  border: 2px solid #172431;
}
.userMenu,
.roomHeader {
  border-left: 0;
}
.roomList,
.roomView,
.roomMembers,
.composer {
  border-left: 0;
  border-top: 0;
}
.maxWidth {
  max-width: 100%;
}
</style>
