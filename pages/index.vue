<template>
  <v-card class="darkBG" flat dark>
    <v-container dark class="ma-0 py-0 maxWidth">
      <v-row>
        <v-col cols="3" class="py-0">
          <v-container class="pa-0">
            <v-row>
              <v-col cols="12" class="pa-0">
                <UserRow class="userMenu borderedRow" />
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" class="pa-0">
                <RoomList class="roomList borderedRow" />
              </v-col>
            </v-row>
          </v-container>
        </v-col>
        <v-col cols="9" class="pa-0">
          <v-container class="py-0">
            <v-row>
              <v-col cols="12" class="pa-0">
                <RoomHeader class="roomHeader borderedRow"
              /></v-col>
            </v-row>
            <v-row>
              <v-col cols="8" class="pa-0">
                <RoomView class="roomView borderedRow" />
                <Composer class="composer borderedRow" />
              </v-col>
              <v-col cols="4" class="pa-0">
                <RoomMembers class="roomMembers borderedRow" />
              </v-col>
            </v-row> </v-container
        ></v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
import UserRow from "~/components/main/UserRow";
import RoomHeader from "~/components/main/RoomHeader";
import RoomList from "~/components/main/RoomList";
import RoomView from "~/components/main/RoomView";
import RoomMembers from "~/components/main/RoomMembers";
import Composer from "~/components/main/Composer";
export default {
  layout: "main",
  components: {
    UserRow,
    RoomHeader,
    RoomList,
    RoomView,
    RoomMembers,
    Composer
  }
};
</script>

<style>
.borderedRow {
  border: 2px solid #172431;
}
.userMenu,
.roomHeader {
  border-left: 0;
}
.roomList,
.roomView,
.roomMembers,
.composer {
  border-left: 0;
  border-top: 0;
}
.maxWidth {
  max-width: 100%;
}
</style>
