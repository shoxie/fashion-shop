import type { StorybookConfig } from "@storybook/core-common";

const config: StorybookConfig = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  staticDirs: ["../public"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app",
    "@storybook/addon-interactions",
    "@chakra-ui/storybook-addon",
  ],
  typescript: {
    check: false,
    checkOptions: {},
    reactDocgen: "react-docgen-typescript",
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) =>
        prop.parent ? !/node_modules/.test(prop.parent.fileName) : true,
    },
  },
  framework: "@storybook/react",
  core: {
    builder: "webpack5",
  },
  features: {
    postcss: false,
    emotionAlias: false,
  },
  refs: {
    "design-system": {
      title: "Storybook Design System",
      url: "https://5ccbc373887ca40020446347-yldsqjoxzb.chromatic.com",
    },
  },
};
module.exports = config;
