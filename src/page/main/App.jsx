import "./App.css";
import PersistentDrawerLeft from "../../module/main/Drawer.jsx";
import AuthenticationService from "../../module/authentication/Authenticationservice.js";
import queryClient from "../../config/query-client.js";
import { redirect } from "react-router-dom";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@emotion/react";

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
      main: "#2196f3",
    },
  },
  typography: {
    h1: {
      fontSize: "3rem",
      fontWeight: 600,
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
