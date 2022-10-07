import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "capitalize",
          borderRadius: 10,
          boxShadow: "none",
        },
      },
    },
    MuiInputLabel: {
      defaultProps: {
        shrink: true,
      },
    },
    MuiTypography: {
      styleOverrides: {
        h6: {
          fontWeight: "700",
        },
      },
    },
  },
  palette: {
    primary: { main: "#FF2164" },
    secondary: { main: "#F93C00" },
  },
});

export default theme;
