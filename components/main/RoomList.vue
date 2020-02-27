<template>
  <v-container class="pa-0 ma-0 bottomPanel--height">
    <v-row>
      <v-col cols="12" class="pt-1">
        <v-btn
          text
          class="mr-6"
          @click="exploreRoomsModal = !exploreRoomsModal"
        >
          <v-icon>mdi-menu</v-icon>
          <span class="no-transform font-weight-black">Discover</span>
        </v-btn>
        <!-- <v-btn text class="ml-2">
          <v-icon color="success">mdi-magnify</v-icon>
          <span class="no-transform font-weight-black">Filter</span>
        </v-btn> -->
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" class="d-flex justify-space-between pr-7 pl-2 py-1">
        <v-btn :ripple="false" text @click="soloChatsToggle = !soloChatsToggle">
          <v-icon>{{
            soloChatsToggle ? "mdi-chevron-down" : "mdi-chevron-right"
          }}</v-icon>
          <span class="font-weight-black body-2">TRADERS</span>
        </v-btn>
        <v-btn
          icon
          x-small
          color="darkIcon"
          class="mt-2"
          @click="startChatModal = !startChatModal"
        >
          <v-icon>mdi-plus-circle</v-icon>
        </v-btn>
      </v-col>
    </v-row>

    <!-- Start list of 1 is to 1 rooms -->
    <v-list v-show="soloChatsToggle" class="pa-0" dense color="transparent">
      <v-list-item-group color="success">
        <v-list-item
          v-for="room in soloChatsList"
          :key="room.roomId"
          class="roomList__list-item"
        >
          <v-list-item-icon class="roomList__item-icon">
            <v-avatar size="30">
              <v-img :src="room.avatar_url"></v-img>
            </v-avatar>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title
              class="body-2"
              v-text="room.name"
            ></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
    <!-- end list of 1 is to 1 rooms -->

    <v-row>
      <v-col cols="12" class="d-flex justify-space-between pr-7 pl-2 py-1">
        <v-btn
          :ripple="false"
          text
          @click="communitiesListToggle = !communitiesListToggle"
        >
          <v-icon>{{
            communitiesListToggle ? "mdi-chevron-down" : "mdi-chevron-right"
          }}</v-icon>
          <span class="font-weight-black body-2">TRADING COMMUNITIES</span>
        </v-btn>
        <v-btn
          icon
          x-small
          color="darkIcon"
          class="mt-2"
          @click="createChatroomModal = !createChatroomModal"
        >
          <v-icon>mdi-plus-circle</v-icon>
        </v-btn>
      </v-col>
    </v-row>

    <!-- Start list of community chats -->
    <v-list
      v-show="communitiesListToggle"
      class="pa-0"
      dense
      color="transparent"
    >
      <v-list-item-group color="success">
        <v-list-item
          v-for="community in communitiesList"
          :key="community.roomId"
          class="roomList__list-item"
        >
          <v-list-item-icon class="roomList__item-icon">
            <v-avatar size="30">
              <v-img :src="community.avatar_url"></v-img>
            </v-avatar>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title
              class="body-2"
              v-text="community.name"
            ></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
    <!-- end list of community chats -->

    <v-dialog v-model="exploreRoomsModal" persistent max-width="740">
      <ExploreRooms @close="exploreRoomsModal = false"
    /></v-dialog>
    <v-dialog v-model="startChatModal" persistent max-width="740">
      <StartChat @close="startChatModal = false"
    /></v-dialog>
    <v-dialog v-model="createChatroomModal" persistent max-width="520">
      <CreateChatroom @close="createChatroomModal = false"
    /></v-dialog>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
import { client } from "~/assets/client.js";
import ExploreRooms from "~/components/modals/ExploreRooms";
import StartChat from "~/components/modals/StartChat";
import CreateChatroom from "~/components/modals/CreateChatroom";
export default {
  components: {
    ExploreRooms,
    StartChat,
    CreateChatroom
  },
  data() {
    return {
      soloChatsToggle: true,
      communitiesListToggle: true,
      soloChatsList: [],
      communitiesList: [],
      allRooms: [],
      exploreRoomsModal: false,
      startChatModal: false,
      createChatroomModal: false,
      image: false
    };
  },
  computed: {
    ...mapGetters({
      clientIsPrepared: "global/getClientIsPrepared"
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
        this.getRoomList();
      }
    }
  },
  methods: {
    /**
     * SDK implementation works by getting ALL joined rooms, whether it's a 'community' room or
     * a chatroom with only 2 users.
     *
     * getRooms() function only retrieves ID of all joined rooms.
     *
     * - Iterate through entire array of room ID's
     * - Construct a room class for each individual room
     * - If room only has 2 members, that means the avatar_url of the room should be the
     * profile image of the user you're chatting to.
     * - else use getAvatarUrl method to retrieve avatar_url of specific room
     *
     * @return
     */
    getRoomList() {
      const roomIDList = client.getRooms();
      roomIDList.forEach((room, index) => {
        this.allRooms[index] = client.getRoom(room.roomId);
        let members = Object.entries(this.allRooms[index].currentState.members);
        if (members.length == 2) {
          members.forEach(member => {
            if (member[1].name == this.allRooms[index].name) {
              this.allRooms[index].avatar_url = member[1].user.avatarUrl;
              this.allRooms[index].avatar_url = client.mxcUrlToHttp(
                this.allRooms[index].avatar_url,
                40,
                40,
                "crop"
              );
            }
          });
          this.soloChatsList.push(this.allRooms[index]);
        } else if (members.length == 1) {
          this.allRooms[index].avatar_url = "default.png";
          this.communitiesList.push(this.allRooms[index]);
        } else {
          this.allRooms[index].avatar_url = this.allRooms[index].getAvatarUrl(
            client.getHomeserverUrl(),
            40,
            40,
            "crop"
          );
          this.communitiesList.push(this.allRooms[index]);
        }
      });
    }
  }
};
</script>

<style scoped>
.roomList__item-icon {
  margin: 0;
  margin-right: 10px !important;
  margin-top: 3px !important;
}
.roomList__list-item {
  margin: 4px 10px;
}
.v-list-item-group .v-list-item--active {
  border: 1px solid;
  border-radius: 10px;
}
</style>
