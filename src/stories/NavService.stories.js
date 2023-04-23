import NavService from "./NavService.vue";
import vuetifyConfig from "../plugins/vuetify";

export default {
  title: "NavService",
  component: NavService,
};

export const Primary = {
  render: (args, { argTypes }) => ({
    components: { NavService },
    props: Object.keys(argTypes),
    vuetify: vuetifyConfig,
    template: '<NavService v-bind="$props" />',
  }),
  args: {
    items: [
      {
        id: 1,
        icon: "transfer-lnb-shieldrive",
        text: ["SHIELDrive", "SHIELDrive_Professional"],
      },
      {
        id: 2,
        icon: "transfer-lnb-shieldgate",
        text: ["SHIELDGate"],
      },
      {
        id: 3,
        icon: "transfer-lnb-shieldrm",
        text: ["SHIELDRM"],
      },
      {
        id: 4,
        icon: "transfer-lnb-shieldexremotebrower",
        text: ["SHIELDEX Remote Browser "],
      },
      {
        id: 5,
        icon: "transfer-lnb-shieldexfile",
        text: ["SHIELDEX File"],
      },
      {
        id: 6,
        icon: "transfer-lnb-shieldexmail",
        text: ["SHIELDEX Mail"],
      },
    ],
  },
};
