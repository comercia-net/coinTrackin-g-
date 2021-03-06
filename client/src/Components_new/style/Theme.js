import { colors, createMuiTheme } from "@material-ui/core";
import { THEMES } from "../services/constants";
const themesOptions = [
  {
    name: THEMES.LIGHT,
    palette: {
      type: "light",
      background: {
        default: "#ede7f6",
        dark: "#f4f6f8",
        paper: colors.common.white,
      },
      primary: {
        main: "#00695c",
      },
      secondary: {
        main: "#0000",
      },
      text: {
        primary: colors.blueGrey[900],
        secondary: colors.blueGrey[600],
      },
    },
  },
  {
    name: THEMES.DARK,
    palette: {
      type: "dark",
      background: {
        default: "#282C34",
        dark: "#1c2025",
        paper: "#005D73",
      },
      primary: {
        main: "#ede7f6",
      },
      secondary: {
        main: "#00609A",
      },
      text: {
        primary: "#e6e5e8",
        secondary: "#adb0bb",
      },
    },
  },
];
export const createTheme = (config = {}) => {
  const themeOptions = themesOptions.find(
    (theme) => theme.name === config.theme
  );
  const theme = createMuiTheme(themeOptions);
  return theme;
};
