import { createBrowserRouter } from "react-router-dom";
import App from "../page/main/App.jsx";
import ProjectPage from "../page/project.jsx";
import BacklogPage from "../page/backlog.jsx";
import SprintPage from "../page/sprint.jsx";
import SprintDetailPage from "../page/sprint/detail.jsx";
import BoardPage from "../page/sprint/board.jsx";

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
      {
        path: "project/:key/board",
        element: <BoardPage />,
      },
    ],
  },
]);

export default router;
