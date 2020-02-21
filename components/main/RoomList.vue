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
        <v-btn
          :ripple="false"
          text
          @click="tradersListToggle = !tradersListToggle"
        >
          <v-icon>{{
            tradersListToggle ? "mdi-chevron-down" : "mdi-chevron-right"
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
    <!-- List of traders start -->
    <div v-if="tradersListToggle">
      <v-row v-for="traders in tradersList" :key="traders">
        <v-col cols="2" class="pa-0 pl-7">
          <v-avatar color="success" size="30">
            <span class="white--text headline">J</span>
          </v-avatar>
        </v-col>
        <v-col cols="10" class="pa-0 pt-1 py-3 pl-2">
          <span>{{ traders }}</span>
        </v-col>
      </v-row>
    </div>
    <!-- end list of traders -->

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
    <!-- List of communities start -->
    <div v-if="communitiesListToggle">
      <v-row v-for="communities in communitiesList" :key="communities">
        <v-col cols="2" class="pa-0 pl-7">
          <v-avatar color="success" size="30">
            <span class="white--text headline">J</span>
          </v-avatar>
        </v-col>
        <v-col cols="10" class="pa-0 pt-1 py-3 pl-2">
          <span>{{ communities }}</span>
        </v-col>
      </v-row>
    </div>
    <!-- end list of commnities -->
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
      tradersListToggle: false,
      communitiesListToggle: false,
      tradersList: ["Friedrich Nietzsche", "Samus Cartre", "Epicurus"],
      communitiesList: ["Lyduz Community", "Philosopher's Guild"],
      exploreRoomsModal: false,
      startChatModal: false,
      createChatroomModal: false
    };
  }
};
</script>
