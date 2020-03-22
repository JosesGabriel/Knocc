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
        <v-btn :ripple="false" text @click="invitesToggle = !invitesToggle">
          <v-icon>{{
            invitesToggle ? "mdi-chevron-down" : "mdi-chevron-right"
          }}</v-icon>
          <span class="font-weight-black body-2">INVITES</span>
        </v-btn>
      </v-col>
    </v-row>
    <!-- Start list of invites -->
    <v-list v-show="invitesToggle" class="pa-0" dense color="transparent">
      <v-list-item-group v-model="invitesModel" color="success">
        <v-list-item
          v-for="room in invitesList"
          :key="room.roomId"
          class="roomList__list-item"
          :ripple="false"
          @click="
            selectRoom({
              roomId: room.roomId,
              displayName: room.name,
              avatarUrl: room.avatar_url
            })
          "
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
    <!-- end list of invites -->

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
      <v-list-item-group v-model="soloChatsModel" color="success">
        <v-list-item
          v-for="room in soloChatsList"
          :key="room.roomId"
          class="roomList__list-item"
          :ripple="false"
          @click="
            selectRoom({
              roomId: room.roomId,
              displayName: room.name,
              avatarUrl: room.avatar_url
            })
          "
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
      <v-list-item-group v-model="communitiesModel" color="success">
        <v-list-item
          v-for="(community, index) in communitiesList"
          :key="community.roomId"
          :ripple="false"
          class="roomList__list-item"
          @mouseenter="(hoverMode = true), (currentRoomHovered = index)"
          @mouseleave="hoverMode = false"
          @click="
            selectRoom({
              roomId: community.roomId,
              displayName: community.name,
              avatarUrl: community.avatar_url
            })
          "
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
          <v-spacer />
          <v-icon
            v-show="hoverMode && currentRoomHovered == index"
            small
            color="white"
            @click="(roomOptionsMode = true), (currentRoomHovered = index)"
            >mdi-dots-vertical</v-icon
          >
          <RoomOptions
            v-show="roomOptionsMode && currentRoomHovered == index"
            :id="community.roomId"
            class="roomOptions__card"
          />
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
import { mapGetters, mapActions } from "vuex";
import { client } from "~/assets/client.js";
import ExploreRooms from "~/components/modals/ExploreRooms";
import StartChat from "~/components/modals/StartChat";
import CreateChatroom from "~/components/modals/CreateChatroom";
import RoomOptions from "~/components/room_options/RoomOptions";
export default {
  components: {
    ExploreRooms,
    StartChat,
    CreateChatroom,
    RoomOptions
  },
  data() {
    return {
      invitesToggle: true,
      soloChatsToggle: true,
      communitiesListToggle: true,
      invitesList: [],
      soloChatsList: [],
      communitiesList: [],
      allRooms: [],
      invitesModel: [],
      soloChatsModel: [],
      communitiesModel: [],
      exploreRoomsModal: false,
      startChatModal: false,
      createChatroomModal: false,
      roomOptionsMode: false,
      hoverMode: false,
      currentRoomHovered: false
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
        this.getRoomList();
      }
    }
  },
  mounted() {
    if (this.clientIsPrepared) {
      this.getRoomList();
    }
    document.addEventListener("click", this.close);
  },
  beforeDestroy() {
    document.removeEventListener("click", this.close);
  },
  methods: {
    ...mapActions({
      setCurrentRoom: "global/setCurrentRoom"
    }),

    /**
     * trigger when user clicked outside the notification dropdown
     *
     * @param   {Event}  e  event
     *
     * @return  {Boolean}     returns boolean to all showed dropdown
     */
    close(e) {
      if (!this.$el.contains(e.target)) {
        this.roomOptionsMode = false;
      }
    },
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
     * Retrieval of invites to rooms works by getting all known rooms (including invites)
     * then getting a list of joined rooms. The difference between those two arrays will be the rooms
     * current user is invited to.
     * @return
     */
    async getRoomList() {
      this.soloChatsList = [];
      this.allRooms = [];
      this.communitiesList = [];
      this.invitesList = [];

      let allRoomsById = [];
      let joinedRooms = await client.getJoinedRooms();
      joinedRooms = joinedRooms.joined_rooms;
      client.getRooms().forEach(room => {
        allRoomsById.push(room.roomId);
      });
      let invitedRooms = allRoomsById.filter(x => !joinedRooms.includes(x));
      // console.log("List of rooms invited to [ " + invitedRooms + " ]");
      // console.log("List of all rooms [ " + allRoomsById + " ]");
      //Filter out invites from Rooms list
      joinedRooms = joinedRooms.filter(x => allRoomsById.includes(x));

      invitedRooms.forEach(room => {
        const invitedRoom = client.getRoom(room);
        invitedRoom.avatar_url = invitedRoom.getAvatarUrl(
          client.getHomeserverUrl(),
          40,
          40,
          "crop"
        );
        this.invitesList.push(invitedRoom);
      });

      joinedRooms.forEach((room, index) => {
        this.allRooms[index] = client.getRoom(room);
        let members = Object.entries(this.allRooms[index].currentState.members);

        //If members length is only 2, that means it's a Direct Message
        if (members.length == 2) {
          this.soloChatsList.push(this.allRooms[index]);
          members.forEach(member => {
            if (member[1].name == this.allRooms[index].name) {
              this.allRooms[index].avatar_url = client.getUser(
                member[1].userId
              ).avatarUrl;
              const avatar_url = client.mxcUrlToHttp(
                this.allRooms[index].avatar_url,
                40,
                40,
                "crop"
              );
              this.allRooms[index].avatar_url = avatar_url
                ? avatar_url
                : "/default.png";
            } else {
              this.allRooms[index].avatar_url = "/default.png";
            }
          });
        }
        //If members is only 1 that means it's most probably an 'empty room'
        else if (members.length == 1) {
          this.allRooms[index].avatar_url = "/default.png";
          this.communitiesList.push(this.allRooms[index]);
        }
        //If it reaches this condition then that means it's a group chat/community
        else {
          const avatarUrl = this.allRooms[index].getAvatarUrl(
            client.getHomeserverUrl(),
            40,
            40,
            "crop"
          );
          this.allRooms[index].avatar_url = avatarUrl.includes(
            "unstable/identicon"
          )
            ? "/default.png"
            : avatarUrl;
          this.communitiesList.push(this.allRooms[index]);
        }
      });
    },
    /**
     * Handles user clicks when selecting a room from room list.
     * Sets vuex 'currentRoom' value
     *
     * @param   {Object}  room  contains roomId, displayName and avatarUrl of room
     *
     * @return
     */
    selectRoom(room) {
      this.soloChatsModel = false;
      this.communitiesModel = false;
      this.invitesModel = false;
      this.setCurrentRoom({
        roomId: room.roomId,
        displayName: room.displayName,
        avatarUrl: room.avatarUrl
      });
      this.$router.push("/room/" + room.roomId);
      localStorage.setItem("last_room_id", room.roomId);
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
.roomOptions__card {
  position: absolute;
  left: 24vw;
  top: 0;
  z-index: 1;
}
</style>
