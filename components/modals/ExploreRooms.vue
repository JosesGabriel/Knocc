<template>
  <v-card color="darkcard" dark min-height="667">
    <v-card-title class="title justify-space-between">
      <span class="font-weight-black">Explore Rooms</span>
      <v-btn icon small @click="$emit('close')">
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </v-card-title>
    <v-container class="modalContent__container">
      <v-row>
        <v-col cols="12">
          <div>
            If you can't find the room you're looking for, ask for an invite or
            Create a new room.
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="8" class="pr-1">
          <v-text-field
            outlined
            placeholder="Find a room... (e.g. #example:im.lyduz.com)"
            prepend-inner-icon="mdi-magnify"
            append-icon="mdi-close"
            dense
          ></v-text-field>
        </v-col>
        <v-col cols="4" class="pl-0">
          <v-select label="Lyduz" outlined dense></v-select>
        </v-col>
      </v-row>
      <v-row v-for="room in publicRooms" :key="room.room_id">
        <v-col cols="1" class="pt-1 pr-0">
          <v-avatar size="30"><v-img :src="room.avatar_url"></v-img> </v-avatar>
        </v-col>
        <v-col cols="7" class="py-0 pl-0">
          <div class="font-weight-bold">{{ room.name }}</div>
          <div class="caption secondary--text">{{ room.canonical_alias }}</div>
        </v-col>
        <v-col cols="3">
          <v-icon small>mdi-account-outline</v-icon>
          <span class="body-2">{{ room.num_joined_members }}</span>
        </v-col>
        <v-col cols="1" class="pa-0 mt-1">
          <v-btn
            v-if="room.joined"
            text
            class="success--text no-transform"
            @click="viewRoom(room)"
            >View</v-btn
          >
          <v-btn
            v-else
            text
            class="success--text no-transform"
            @click="joinRoom(room)"
          >
            Join
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { client } from "~/assets/client.js";
export default {
  components: {},
  data() {
    return {
      publicRooms: []
    };
  },
  computed: {
    ...mapGetters({
      clientIsPrepared: "global/getClientIsPrepared"
    })
  },
  watch: {
    clientIsPrepared() {
      if (this.getPublicRooms) {
        this.getRoomList();
      }
    }
  },
  mounted() {
    this.getRoomList();
  },
  methods: {
    ...mapActions({
      setCurrentRoom: "global/setCurrentRoom"
    }),
    async getRoomList() {
      let joinedRooms = await client.getJoinedRooms();
      joinedRooms = joinedRooms.joined_rooms;
      client.publicRooms(
        function(err, data) {
          this.publicRooms = data.chunk;
          this.publicRooms.forEach((community, i) => {
            community.joined = false;
            joinedRooms.forEach(joinedRoom => {
              if (community.room_id === joinedRooms) {
                community.joined = true;
              }
            });

            const room = client.getRoom(community.room_id);
            const avatarUrl = room.getAvatarUrl(
              client.getHomeserverUrl(),
              40,
              40,
              "crop"
            );
            community.avatar_url = avatarUrl.includes("unstable/identicon")
              ? "/default.png"
              : avatarUrl;
          });
        }.bind(this)
      );
    },
    viewRoom(room) {
      this.setCurrentRoom({
        roomId: room.room_id,
        displayName: room.name,
        avatarUrl: room.avatar_url
      });
      this.$router.push("/room/" + room.room_id);
      localStorage.setItem("last_room_id", room.room_id);
    },
    joinRoom(room) {
      client.joinRoom(room.room_id).then(e => {});
      this.viewRoom(room);
    }
  }
};
</script>
