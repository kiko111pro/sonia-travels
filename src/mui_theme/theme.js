import { createTheme, responsiveFontSizes } from "@mui/material/styles";

export const colors = {
  primary: "#171773",
  background: "#F5F5F5",
  grey: "#444444",
  secondary: "#058076",
  //solid colors
  white: "#fff",
  black: "#000",
};

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      // small
      sm: 600,
      // medium
      md: 900,
      // large
      lg: 1200,
      // extra-large
      xl: 1500,
    },
  },

  typography: {
    fontFamily: ["Mukta Mahee", "serif"].join(","),

    caption: {
      color: colors.secondary,
      fontSize: 18,
      textDecoration: "underline",
      fontWeight: 600,
      cursor: "pointer",
    },
  },

  components: {
    MuiToggleButton: {
      styleOverrides: {
        selected: {
          backgroundColor: colors.primary,
          color: "white",
        },
      },
    },
    MuiContainer: {
      defaultProps: {
        maxWidth: "xl",
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          // backgroundColor: "red",
          height: 40,
        },
      },
    },
  },

  palette: {
    primary: {
      main: colors.primary,
    },
    secondary: {
      main: colors.secondary,
    },
    info: {
      main: colors.grey,
    },
    action: {
      main: "#fff",
    },
  },
});

export default responsiveFontSizes(theme);
