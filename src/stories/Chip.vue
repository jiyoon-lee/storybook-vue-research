<template>
  <div>
    <v-chip :color="color"> Closable </v-chip>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Chip",
  props: {
    color: String,
  },
  mounted() {
    console.log(this.color);
  },
};
</script>
