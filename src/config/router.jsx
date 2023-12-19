import { createBrowserRouter } from "react-router-dom";
import App from "../page/main/App.jsx";
import ProjectPage from "../page/project.jsx";
import BacklogPage from "../page/backlog.jsx";
import SprintPage from "../page/sprint.jsx";
import SprintDetailPage from "../page/sprint/detail.jsx";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <h1>Login page</h1>,
  },
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "projects",
        element: <ProjectPage />,
      },
      {
        path: "project/:key/backlog",
        element: <BacklogPage />,
      },
      {
        path: "project/:key/sprint",
        element: <SprintPage />,
      },
      {
        path: "project/:key/sprint/:id",
        element: <SprintDetailPage />,
      },
    ],
  },
]);

export default router;
