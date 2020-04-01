<template>
  <div class="pa-3 ma-0 d-flex justify-space-between">
    <div>
      <v-avatar size="30">
        <v-img :src="currentRoom.avatarUrl"></v-img>
      </v-avatar>
      <span class="pl-3 font-weight-black">{{ currentRoom.displayName }}</span>
    </div>
    <div>
      <!-- <v-btn
        icon
        small
        color="darkIcon"
        @click="settingsModal = !settingsModal"
      >
        <v-icon>mdi-settings-outline</v-icon>
      </v-btn> -->
      <v-btn
        icon
        small
        color="darkIcon"
        @click="shareRoomModal = !shareRoomModal"
      >
        <v-icon>mdi-share-variant</v-icon>
      </v-btn>
      <!-- <v-btn icon small color="darkIcon">
        <v-icon>mdi-view-grid-outline</v-icon>
      </v-btn>
      <v-btn icon small color="darkIcon">
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      <v-divider class="mx-2" vertical />
      <v-btn icon small color="darkIcon">
        <v-icon>mdi-account-outline</v-icon>
      </v-btn>
      <v-btn icon small color="darkIcon">
        <v-icon>mdi-file-outline</v-icon>
      </v-btn>
      <v-btn icon small color="darkIcon">
        <v-icon>mdi-bell-outline</v-icon>
      </v-btn> -->
    </div>
    <v-dialog v-model="settingsModal" persistent width="1060">
      <Settings type="room" @close="settingsModal = false"
    /></v-dialog>
    <v-dialog v-model="shareRoomModal" persistent width="750">
      <ShareRoom @close="shareRoomModal = false"
    /></v-dialog>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import Settings from "~/components/modals/Settings";
import ShareRoom from "~/components/modals/ShareRoom";
export default {
  components: {
    Settings,
    ShareRoom
  },
  data() {
    return {
      settingsModal: false,
      shareRoomModal: false
    };
  },
  computed: {
    ...mapGetters({
      currentRoom: "global/getCurrentRoom"
    })
  }
};
</script>
