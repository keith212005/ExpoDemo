/* eslint-disable camelcase */
import { DefaultTheme, DarkTheme } from "@react-navigation/native";
const tintColorLight = "#2f95dc";
const tintColorDark = "#fff";
export const color: any = {};

export const Dark = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    ...color,
    card: "#273143",
    text: "#fff",
    background: "#000",
    tint: tintColorDark,
    tabIconDefault: "#ccc",
    tabIconSelected: tintColorDark,
  },
};

export const Light = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    ...color,
    text: "#000",
    background: "#fff",
    tint: tintColorLight,
    tabIconDefault: "#ccc",
    tabIconSelected: tintColorLight,
  },
};

// export const light = {
//   text: "#000",
//   background: "#fff",
//   tint: tintColorLight,
//   tabIconDefault: "#ccc",
//   tabIconSelected: tintColorLight,
// };

// export const dark = {
//   text: "#fff",
//   background: "#000",
//   tint: tintColorDark,
//   tabIconDefault: "#ccc",
//   tabIconSelected: tintColorDark,
// };

// export default {
//   light: {
//     text: "#000",
//     background: "#fff",
//     tint: tintColorLight,
//     tabIconDefault: "#ccc",
//     tabIconSelected: tintColorLight,
//   },
//   dark: {
//     text: "#fff",
//     background: "#000",
//     tint: tintColorDark,
//     tabIconDefault: "#ccc",
//     tabIconSelected: tintColorDark,
//   },
// };
