<template>
  <v-card class="darkBG" flat dark>
    <v-container dark class="ma-0 maxWidth">
      <v-row>
        <v-col cols="3">
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
          <v-container>
            <v-row>
              <v-col cols="12" class="pa-0">
                <RoomHeader class="roomHeader borderedRow"
              /></v-col>
            </v-row>
            <v-row>
              <v-col cols="7" class="pa-0">
                <RoomView class="roomView borderedRow" />
              </v-col>
              <v-col cols="5" class="pa-0">
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
export default {
  layout: "main",
  components: {
    UserRow,
    RoomHeader,
    RoomList,
    RoomView,
    RoomMembers
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
.roomMembers {
  border-left: 0;
  border-top: 0;
}
.maxWidth {
  max-width: 100%;
}
</style>
