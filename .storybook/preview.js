import { mantineTheme } from "storybook-addon-mantine";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [
  mantineTheme([
    {
      themeName: "Dark Theme",
      colorScheme: "dark",
    },
  ]),
];