<template>
  <v-container class="pa-0 ma-0">
    <div class="d-block pa-3">
      <v-btn
        block
        color="success"
        class="black--text"
        @click="inviteToRoomsModal = !inviteToRoomsModal"
      >
        <v-icon>mdi-account-plus-outline</v-icon>
        <span class="no-transform font-weight-black">Invite to this room</span>
      </v-btn>
    </div>
    <div>
      <v-list class="pa-0" dense color="transparent">
        <template v-for="(member, index) in roomMembers">
          <v-hover v-slot:default="{ hover }">
            <v-list-item :key="member.userId" @click>
              <v-list-item-avatar size="30">
                <v-img :src="member.avatarUrl"></v-img>
              </v-list-item-avatar>

              <v-list-item-content>
                <v-list-item-title class="caption" v-text="member.displayName"></v-list-item-title>
              </v-list-item-content>

              <v-list-item-action>
                <v-btn icon x-small v-show="hover">
                  <v-icon>mdi-chevron-right</v-icon>
                </v-btn>
              </v-list-item-action>
            </v-list-item>
          </v-hover>
        </template>

        <v-list-item @click v-if="roomMembersLength > 30">
          <v-list-item-avatar color="white" size="30">
            <v-icon color="black">mdi-dots-horizontal</v-icon>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>and {{ roomMembersLength - 30 }} others...</v-list-item-title>
          </v-list-item-content>

          <v-list-item-action>
            <v-btn icon x-small>
              <v-icon>mdi-chevron-right</v-icon>
            </v-btn>
          </v-list-item-action>
        </v-list-item>
      </v-list>
    </div>

    <v-dialog v-model="inviteToRoomsModal" persistent max-width="740">
      <InviteToRoom @close="inviteToRoomsModal = false" />
    </v-dialog>
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
