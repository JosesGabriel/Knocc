<template>
  <v-container></v-container>
</template>

<script>
import { mapGetters } from "vuex";
import { client } from "~/assets/client.js";
export default {
  layout: "main",
  computed: {
    ...mapGetters({
      clientIsPrepared: "global/getClientIsPrepared"
    })
  },
  watch: {
    async clientIsPrepared() {
      let joinedRooms = await client.getJoinedRooms();
      this.$router.push("/room/" + joinedRooms.joined_rooms[0]);
    }
  },
  mounted() {
    if (localStorage.getItem("last_room_id")) {
      this.$router.push("/room/" + localStorage.getItem("last_room_id"));
    }
  }
};
</script>
