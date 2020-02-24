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
          <v-select :items="items" label="Lyduz" outlined dense></v-select>
        </v-col>
      </v-row>
      <v-row v-for="room in roomList" :key="room">
        <v-col cols="1" class="pt-1 pr-0">
          <v-avatar color="success" size="32">
            <span class="white--text headline">J</span>
          </v-avatar>
        </v-col>
        <v-col cols="7" class="py-0 pl-0">
          <div class="font-weight-bold">{{ room.name }}</div>
          <div class="caption secondary--text">{{ room.ID }}</div>
        </v-col>
        <v-col cols="3">
          <v-icon small>mdi-account-outline</v-icon>
          <span class="body-2">913</span>
        </v-col>
        <v-col cols="1" class="pa-0 mt-1">
          <v-btn text class="success--text no-transform">View</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      roomList: [
        {
          name: "Lyduz Public Community",
          ID: "#public:im.lyduz.com"
        },
        {
          name: "Bug Reports",
          ID: "#bugreports:im.lyduz.com"
        },
        {
          name: "Lyduz Public Community",
          ID: "#public:im.lyduz.com"
        },
        {
          name: "Bug Reports",
          ID: "#bugreports:im.lyduz.com"
        },
        {
          name: "Lyduz Public Community",
          ID: "#public:im.lyduz.com"
        },
        {
          name: "Bug Reports",
          ID: "#bugreports:im.lyduz.com"
        },
        {
          name: "Bug Reports",
          ID: "#bugreports:im.lyduz.com"
        },
        {
          name: "Lyduz Public Community",
          ID: "#public:im.lyduz.com"
        },
        {
          name: "Bug Reports",
          ID: "#bugreports:im.lyduz.com"
        },
        {
          name: "Lyduz Public Community",
          ID: "#public:im.lyduz.com"
        },
        {
          name: "Bug Reports",
          ID: "#bugreports:im.lyduz.com"
        }
      ]
    };
  }
};
</script>
