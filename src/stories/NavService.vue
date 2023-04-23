<template>
  <v-app>
    <v-btn
      @click="drawer = !drawer"
      :class="drawer && 'active__button'"
      :color="drawer ? '#4070F8' : '#404143'"
      class="rounded-0"
      min-width="48"
      height="48"
      depressed
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="2.5" y="2.5" width="3" height="3" fill="white" />
        <rect x="2.5" y="6.5" width="3" height="3" fill="white" />
        <rect x="2.5" y="10.5" width="3" height="3" fill="white" />
        <rect x="6.5" y="2.5" width="3" height="3" fill="white" />
        <rect x="6.5" y="6.5" width="3" height="3" fill="white" />
        <rect x="6.5" y="10.5" width="3" height="3" fill="white" />
        <rect x="10.5" y="2.5" width="3" height="3" fill="white" />
        <rect x="10.5" y="6.5" width="3" height="3" fill="white" />
        <rect x="10.5" y="10.5" width="3" height="3" fill="white" />
      </svg>
    </v-btn>
    <v-card v-if="drawer" position="absolute" id="serviceTransferCard">
      <ul>
        <li v-for="item in items" :key="item.id" @click="() => {}">
          <div class="list-info">
            <v-icon class="transfer-lnb" v-html="item.icon" />
            <span v-html="item.text[0]" />
          </div>
          <a class="list-action" v-show="!item.use"> 자세히 보기 > </a>
        </li>
      </ul>
    </v-card>
  </v-app>
</template>

<script>
export default {
  name: "NavService",
  props: {
    items: {
      type: Array,
    },
  },
  data() {
    return {
      drawer: false,
    };
  },
};
</script>

<style scoped>
.v-card {
  padding: 6px 0;
  box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.25) !important;
  border-radius: 0;
  position: absolute;
  top: 48px;
  left: 0;
  width: 280px;
  height: calc(100vh - 48px);
}
.v-application ul {
  padding-left: 0;
  margin: 10px 8px;
}
li {
  padding: 10px;
  border-radius: 4px;
  display: flex;
  column-gap: 2px;
  align-items: center;
  justify-content: space-between;
}
li:hover,
li:active {
  background-color: #f2f3f6;
}
.list-info {
  width: 65%;
  display: flex;
  align-items: center;
  column-gap: 5px;
}
.list-info .v-icon {
  flex-shrink: 0;
}
.list-info span {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.list-action {
  width: 30%;
}
a {
  text-align: end;
  font-size: 0.7rem;
  color: #0083e1;
}
</style>
