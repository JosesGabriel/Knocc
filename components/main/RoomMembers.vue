<template>
  <v-container class="pa-0 ma-0 bottomPanel--height">
    <v-row>
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
    <v-row v-for="member in roomMembers" :key="member">
      <v-col cols="2" class="pa-0 pl-7">
        <v-avatar color="success" size="30">
          <span class="white--text headline">J</span>
        </v-avatar>
      </v-col>
      <v-col cols="8" class="pa-0 pt-1">
        <span>{{ member }}</span>
      </v-col>
      <v-col cols="2" class="pt-1">
        <v-btn icon x-small class="">
          <v-icon>
            mdi-chevron-right
          </v-icon>
        </v-btn>
      </v-col>
    </v-row>
    <v-row>
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
    </v-row>
    <v-dialog v-model="inviteToRoomsModal" persistent max-width="740">
      <InviteToRoom @close="inviteToRoomsModal = false"
    /></v-dialog>
  </v-container>
</template>
<script>
import InviteToRoom from "~/components/modals/InviteToRoom";
export default {
  components: {
    InviteToRoom
  },
  data() {
    return {
      inviteToRoomsModal: false,
      roomMembers: ["Camus Sartre", "Plato"],
      invitedUsers: ["Friedrich Nietzsche", "Epicurus"]
    };
  }
};
</script>
