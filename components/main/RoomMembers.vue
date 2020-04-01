<template>
  <v-container class="pa-0 ma-0">
    <v-row no-gutters>
      <v-col cols="12" class="px-6">
        <v-btn
          block
          color="success"
          class="black--text"
          @click="inviteToRoomsModal = !inviteToRoomsModal"
        >
          <v-icon>mdi-account-plus-outline</v-icon>
          <span class="no-transform font-weight-black"
            >Invite to this room</span
          >
        </v-btn>
      </v-col>
    </v-row>
    <div>
      <v-row
        v-for="member in roomMembers"
        :key="member.userId"
        class="roomMember__item"
        no-gutters
      >
        <v-col cols="2" class="pa-0">
          <v-avatar class="mx-auto d-block" size="30">
            <v-img :src="member.avatarUrl"></v-img>
          </v-avatar>
        </v-col>
        <v-col cols="8" class="pa-0 pt-1 pl-2">
          <span>{{ member.displayName }}</span>
        </v-col>
        <v-col cols="2" class="pt-1">
          <v-btn icon x-small class="">
            <v-icon>
              mdi-chevron-right
            </v-icon>
          </v-btn>
        </v-col>
      </v-row>
      <v-row v-if="roomMembersLength > 30" class="roomMember__item">
        <v-col cols="2" class="pa-0 pl-7">
          <v-avatar size="30" color="white">
            <v-icon color="black">mdi-dots-horizontal</v-icon>
          </v-avatar>
        </v-col>
        <v-col cols="8" class="pa-0 pt-1 pl-2">
          <i>and {{ roomMembersLength - 30 }} others...</i>
        </v-col>
      </v-row>
    </div>
    <!-- <v-row>
      <v-col cols="12" class="pt-0">
        <span class="pl-4">INVITED</span>
      </v-col>
    </v-row>
    <v-row v-for="invitedUser in invitedUsers" :key="invitedUser">
      <v-col cols="2" class="pa-0 pl-7">
        <v-avatar color="success" size="30">
          <span class="white--text headline">J</span>
        </v-avatar>
      </v-col>
      <v-col cols="8" class="pa-0 pt-1">
        <span>{{ invitedUser }}</span>
      </v-col>
      <v-col cols="2" class="pt-1">
        <v-btn icon x-small class="">
          <v-icon>
            mdi-chevron-right
          </v-icon>
        </v-btn>
      </v-col>
    </v-row> -->
    <v-dialog v-model="inviteToRoomsModal" persistent max-width="740">
      <InviteToRoom @close="inviteToRoomsModal = false"
    /></v-dialog>
  </v-container>
</template>
<script>
import { mapGetters } from "vuex";
import { client } from "~/assets/client.js";
import InviteToRoom from "~/components/modals/InviteToRoom";
export default {
  components: {
    InviteToRoom
  },
  data() {
    return {
      inviteToRoomsModal: false,
      roomMembers: [],
      roomMembersLength: 0,
      invitedUsers: []
    };
  },
  computed: {
    ...mapGetters({
      currentRoom: "global/getCurrentRoom"
    })
  },
  watch: {
    currentRoom() {
      this.getRoomMembers();
    }
  },
  mounted() {},
  methods: {
    getRoomMembers() {
      this.roomMembers = [];
      const room = client.getRoom(this.currentRoom.roomId);
      const roomMembers = room.getJoinedMembers();
      this.roomMembersLength = roomMembers.length;
      if (roomMembers.length > 30) {
        roomMembers.length = 30;
      }
      roomMembers.forEach(member => {
        member.avatarUrl = member.getAvatarUrl(
          client.getHomeserverUrl(),
          40,
          40,
          "crop"
        );
        if (member.avatarUrl.includes("_matrix/media/unstable"))
          member.avatarUrl = "/default.png";
        this.roomMembers.push({
          displayName: member.rawDisplayName,
          avatarUrl: member.avatarUrl,
          userId: member.userId
        });
      });
    }
  }
};
</script>

<style>
.roomMembers {
  height: calc(100vh - 162px);
  overflow-x: hidden;
}
.roomMember__item {
  cursor: pointer;
}
</style>
