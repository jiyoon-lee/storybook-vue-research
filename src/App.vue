<template>
  <v-app>
    <NavService />
  </v-app>
</template>

<script>
import NavService from "./stories/NavService.vue";
export default {
  name: "App",
  components: {
    NavService,
  },
};
</script>
