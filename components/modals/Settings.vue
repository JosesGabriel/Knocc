<template>
  <v-card color="darkcard" dark>
    <v-card-title class="headline justify-space-between">
      <span></span>
      <span class="font-weight-black">Settings</span>
      <v-btn icon small @click="$emit('close')">
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </v-card-title>
    <v-container class="settingsContent__container">
      <v-row>
        <v-col cols="12">
          <v-tabs
            active-class="success black--text"
            background-color="transparent"
            vertical
            hide-slider
          >
            <v-tab
              v-for="settings in settingsNavigation"
              :key="settings"
              class="settings__tab"
            >
              <v-icon left small>{{ settings.icon }}</v-icon>
              <span class="caption no-transform py-0">{{
                settings.label
              }}</span>
            </v-tab>
            <v-tab-item class="ml-7">
              <General />
            </v-tab-item>
            <!-- TODO put back when implementing notifications -->
            <!-- <v-tab-item>
              <Notifications />
            </v-tab-item>
            <v-tab-item>
              <Preferences />
            </v-tab-item>
            <v-tab-item>
              <Labs />
            </v-tab-item> -->
          </v-tabs>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
import General from "~/components/user_settings/General";
import Labs from "~/components/user_settings/Labs";
import Notifications from "~/components/user_settings/Notifications";
import Preferences from "~/components/user_settings/Preferences";
export default {
  components: {
    General,
    Labs,
    Notifications,
    Preferences
  },
  data() {
    return {
      settingsNavigation: [
        {
          label: "General",
          icon: "mdi-settings"
        }
        // {
        //   label: "Notifications",
        //   icon: "mdi-bell-outline"
        // },
        // {
        //   label: "Preferences",
        //   icon: "mdi-tune-vertical"
        // },
        // {
        //   label: "Labs",
        //   icon: "mdi-flag-variant-outline"
        // }
      ]
    };
  }
};
</script>

<style>
.settingsContent__container {
  padding: 0 40px;
}
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
