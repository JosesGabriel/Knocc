<template>
  <v-card color="darkcard" dark>
    <v-card-title class="title justify-space-between">
      <span class="font-weight-black">Invite new room members</span>
      <v-btn icon small @click="$emit('close')">
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </v-card-title>
    <v-container class="modalContent__container">
      <v-row>
        <v-col cols="12" class="pr-1 pb-0">
          <v-autocomplete
            v-model="selected"
            :items="userSuggestions"
            item-text="display_name"
            item-value="user_id"
            :search-input.sync="search"
            chips
            outlined
            dense
            dark
          ></v-autocomplete>
        </v-col>
      </v-row>
    </v-container>

    <v-card-actions class="pb-5">
      <v-spacer></v-spacer>
      <v-btn
        outlined
        color="success"
        class="no-transform px-5"
        @click="$emit('close')"
      >
        Cancel
      </v-btn>
      <v-btn
        color="success"
        class="black--text no-transform px-7 font-weight-bold"
        @click="sendInvite()"
      >
        Send Invites
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { client } from "~/assets/client.js";
export default {
  components: {},
  data() {
    return {
      invitationField: "",
      userSuggestions: [],
      selected: [],
      search: null
    };
  },
  computed: {
    ...mapGetters({
      clientIsPrepared: "global/getClientIsPrepared",
      currentRoom: "global/getCurrentRoom"
    })
  },
  watch: {
    search(e) {
      const params = {
        search_term: e
      };
      this.$api.search.create(params).then(response => {
        this.userSuggestions = response.results;
      });
    }
  },
  methods: {
    ...mapActions({
      setAlert: "global/setAlert"
    }),
    sendInvite() {
      if (this.clientIsPrepared) {
        client
          .invite(this.currentRoom.roomId, this.selected)
          .then(response => {
            this.$emit("close");
            this.setAlert({
              model: true,
              state: true,
              message: "Successfully sent invite."
            });
          })
          .catch(e => {
            if (e.errcode == "M_FORBIDDEN") {
              this.setAlert({
                model: true,
                state: false,
                message: e.message
              });
            }
          });
      }
    }
  }
};
</script>

<style>
.suggestions__list {
  overflow: auto;
}
</style>
