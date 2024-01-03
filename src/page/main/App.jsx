import "./App.css";
import PersistentDrawerLeft from "../../module/main/Drawer.jsx";
import AuthenticationService from "../../module/authentication/Authenticationservice.js";
import queryClient from "../../config/query-client.js";
import { redirect } from "react-router-dom";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import { blue, blueGrey } from "@mui/material/colors";

export async function loader() {
  try {
    await queryClient.fetchQuery(AuthenticationService.getCurrentUserQuery);
    return null;
  } catch (error) {
    if (error.response.status == 401) return redirect("/login");
  }
}

const theme = createTheme({
  palette: {
    primary: {
      main: blue[800],
    },
    secondary: {
      main: blueGrey[50],
    },
  },
  typography: {
    allVariants: {
      color: "#102F5C",
    },
    h1: {
      fontSize: "2.2rem",
      fontWeight: 600,
    },
    h6: {
      fontSize: "1rem",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          fontSize: "0.875rem",
          height: "35px",
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <PersistentDrawerLeft />
    </ThemeProvider>
  );
}

export default App;
