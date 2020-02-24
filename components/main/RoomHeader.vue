<template>
  <v-container class=" ma-0 d-flex justify-space-between">
    <div>
      <v-avatar color="success" size="30">
        <span class="white--text headline">J</span>
      </v-avatar>
      <span class="pl-3 font-weight-black">Lyduz Public Community</span>
    </div>
    <div>
      <v-btn
        icon
        small
        color="darkIcon"
        @click="settingsModal = !settingsModal"
      >
        <v-icon>mdi-settings-outline</v-icon>
      </v-btn>
      <v-btn icon small color="darkIcon">
        <v-icon>mdi-share-variant</v-icon>
      </v-btn>
      <v-btn icon small color="darkIcon">
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
      </v-btn>
    </div>
    <v-dialog v-model="settingsModal" persistent width="1060">
      <Settings type="room" @close="settingsModal = false"
    /></v-dialog>
  </v-container>
</template>
<script>
import Settings from "~/components/modals/Settings";
export default {
  components: {
    Settings
  },
  data() {
    return {
      settingsModal: false,
      roomMembers: ["Camus Sartre", "Plato"],
      invitedUsers: ["Friedrich Nietzsche", "Epicurus"]
    };
  }
};
</script>
