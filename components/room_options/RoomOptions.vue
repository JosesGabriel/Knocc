<template>
  <v-card>
    <v-list class="pa-0" dense>
      <v-list-item :ripple="false" @click="leaveRoom()">
        <v-list-item-icon class="mr-0">
          <v-icon small color="error">mdi-close</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>Leave</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-card>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { client } from "~/assets/client.js";
export default {
  props: {
    id: {
      default() {
        return 0;
      },
      type: String
    }
  },
  data() {
    return {
      soloChatsToggle: true
    };
  },
  computed: {
    ...mapGetters({
      clientIsPrepared: "global/getClientIsPrepared"
    })
  },
  methods: {
    leaveRoom() {
      if (this.clientIsPrepared) {
        client.leave(this.id).then(response => {
          console.log("Successfully left room");
        });
      }
    }
  }
};
</script>
