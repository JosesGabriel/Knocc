<template>
  <!-- This component is used for both User Settings (from UserRow.vue) and Room Settings (from RoomHeader.vue)
  Conditional rendering to determine what specific Settings components to use -->
  <v-card color="darkcard" dark min-height="100">
    <v-card-title class="headline justify-space-between">
      <span></span>
      <span class="font-weight-black">{{
        type == "room" ? "Room Settings" : "Settings"
      }}</span>
      <v-btn icon small @click="$emit('close')">
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </v-card-title>
    <v-container class="modalContent__container">
      <v-row>
        <v-col cols="12">
          <v-tabs
            active-class="success black--text"
            background-color="transparent"
            vertical
            hide-slider
          >
            <v-tab
              v-for="(settings, index) in type == 'user'
                ? userSettingsNavigation
                : roomSettingsNavigation"
              :key="index"
              class="settings__tab"
            >
              <v-icon left small>{{ settings.icon }}</v-icon>
              <span class="caption no-transform py-0">{{
                settings.label
              }}</span>
            </v-tab>
            <v-tab-item class="ml-7">
              <GeneralUser v-if="type == 'user'" />
              <GeneralRoom v-else />
            </v-tab-item>
          </v-tabs>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
import GeneralUser from "~/components/user_settings/General";
import GeneralRoom from "~/components/room_settings/General";
export default {
  components: {
    GeneralUser,
    GeneralRoom
  },
  props: {
    type: {
      default: "",
      type: String
    }
  },
  data() {
    return {
      userSettingsNavigation: [
        {
          label: "General",
          icon: "mdi-settings"
        }
      ],
      roomSettingsNavigation: [
        {
          label: "General",
          icon: "mdi-settings"
        }
      ]
    };
  }
};
</script>

<style>
.settings__tab {
  margin-right: 40px;
  height: 30px !important;
  border-radius: 5px;
  justify-content: unset;
}
.v-navigation-drawer__border {
  display: none;
}
</style>
