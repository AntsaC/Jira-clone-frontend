import "./App.css";
import PersistentDrawerLeft from "../../module/main/Drawer.jsx";
import AuthenticationService from "../../module/authentication/Authenticationservice.js";
import queryClient from "../../config/query-client.js";
import { redirect } from "react-router-dom";

export async function loader() {
  try {
    return await queryClient.fetchQuery(
      AuthenticationService.getCurrentUserQuery
    );
  } catch (error) {
    if (error.response.status == 401) return redirect("/login");
  }
}

function App() {
  return (
    <>
      <PersistentDrawerLeft />
    </>
  );
}

export default App;
