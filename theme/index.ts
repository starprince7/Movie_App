import { createTheme } from "@mui/material";
import { grey } from "@mui/material/colors";

export const darkTheme = createTheme({
  palette: {
    primary: { ...grey },
    secondary: { ...grey, main: "#424242", dark: "#212121", light: "#616161", contrastText: "#9e9e9e" },
    mode: "dark",
    background: {
      default: "black",
      paper: "#212121",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
        },
      },
    },
    MuiFab: {
      styleOverrides: {
        root: {
          textTransform: "none",
        },
      },
    },
  },
});
