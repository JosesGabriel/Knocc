<template>
  <v-container class=" ma-0">
    <div class="userRow" @click="dropdownToggle = !dropdownToggle">
      <v-avatar color="success" size="30">
        <span class="white--text headline">J</span>
      </v-avatar>
      <span class="pl-3 font-weight-bold">Sesss</span>
      <v-btn icon small>
        <v-icon>mdi-chevron-down</v-icon>
      </v-btn>
    </div>

    <!-- start userrow dropdown -->
    <v-card v-if="dropdownToggle" class="dropdown__card mt-1" flat>
      <v-list class="pa-0" color="darkcard" dense>
        <v-list-item-group>
          <v-list-item disabled>
            <v-list-item-content>
              <v-list-item-title class="white--text">Sessss</v-list-item-title>
              <v-list-item-subtitle>@sesss:im.lyduz.com</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-list-item
            @click.stop="
              (settingsModal = !settingsModal), (dropdownToggle = false)
            "
          >
            <v-list-item-content>
              <v-list-item-title class="body-2">
                <v-icon small>mdi-settings-outline</v-icon>
                <span>Settings</span>
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <!-- <v-list-item
            @click.stop="
              (signoutModal = !signoutModal), (dropdownToggle = false)
            "
          >
            <v-list-item-content>
              <v-list-item-title class="body-2">
                <v-icon small> mdi-logout-variant</v-icon>
                <span>Sign out</span>
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item> -->
        </v-list-item-group>
      </v-list>
    </v-card>
    <v-dialog v-model="settingsModal" persistent width="1060">
      <Settings type="user" @close="settingsModal = false"
    /></v-dialog>
    <!-- end userrow dropdown -->
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
      dropdownToggle: false,
      settingsModal: false,
      signoutModal: false
    };
  },
  mounted() {
    document.addEventListener("click", this.close);
  },
  beforeDestroy() {
    document.removeEventListener("click", this.close);
  },
  methods: {
    close(e) {
      if (!this.$el.contains(e.target)) {
        this.dropdownToggle = false;
      }
    }
  }
};
</script>

<style>
.dropdown__card {
  position: absolute;
  z-index: 1;
}
.userRow {
  cursor: pointer;
}
</style>
