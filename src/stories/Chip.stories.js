import vuetifyConfig from "../plugins/vuetify";
import Chip from "./Chip.vue";

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
export default {
  title: "Chip",
  component: Chip,
  tags: ["autodocs"],
  render: (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { Chip },
    vuetify: vuetifyConfig,
    template: '<v-app><chip v-bind="$props" /></v-app>',
  }),
  argTypes: {
    color: "red",
  },
};

// More on writing stories with args: https://storybook.js.org/docs/vue/writing-stories/args
export const Primary = {
  args: {
    color: "#0606f2",
  },
};

export const Secondary = {
  args: {
    color: "green",
  },
};

export const Large = {
  args: {
    color: "yellow",
  },
};

export const Small = {
  args: {
    color: "white",
  },
};
