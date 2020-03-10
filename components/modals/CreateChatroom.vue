<template>
  <v-card color="darkcard" dark min-height="250">
    <v-card-title class="title justify-space-between">
      <span class="font-weight-black">Create a chat room</span>
      <v-btn icon small @click="$emit('close')">
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </v-card-title>
    <v-container class="modalContent__container">
      <v-row>
        <v-col cols="12" class="pr-1">
          <v-text-field
            v-model="roomName"
            hide-details
            outlined
            placeholder="Name"
            dense
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" class="pr-1 py-0">
          <v-text-field
            v-model="roomTopic"
            hide-details
            outlined
            placeholder="Topic (optional)"
            dense
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="10" class="pr-1 py-0">
          <div class="body-2 font-weight-bold mt-4">Make this room public</div>
          <div class="caption">
            This room is private, and can only be joined by invitation.
          </div>
        </v-col>
        <v-col cols="2">
          <v-switch v-model="roomIsPublic" color="success" inset></v-switch>
        </v-col>
      </v-row>
    </v-container>
    <v-card-actions>
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
        @click="createRoom()"
      >
        Create Room
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { mapGetters } from "vuex";
import { client } from "~/assets/client.js";
export default {
  components: {},
  data() {
    return {
      roomName: "",
      roomTopic: "",
      roomIsPublic: false
    };
  },
  computed: {
    ...mapGetters({
      clientIsPrepared: "global/getClientIsPrepared"
    })
  },
  methods: {
    createRoom() {
      if (this.clientIsPrepared) {
        const options = {
          name: this.roomName,
          visibility: this.roomIsPublic ? "public" : "private",
          room_alias_name: this.roomTopic
        };
        client.createRoom(options).then(response => {
          this.$emit("close");
        });
      }
    }
  }
};
</script>
