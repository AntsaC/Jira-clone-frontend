import { createBrowserRouter } from "react-router-dom";
import App, { loader as mainLoader } from "../page/main/App.jsx";
import ProjectPage from "../page/project.jsx";
import BacklogPage from "../page/backlog.jsx";
import SprintPage from "../page/sprint.jsx";
import SprintDetailPage from "../page/sprint/detail.jsx";
import BoardPage from "../page/sprint/board.jsx";
import EditStoryPage from "../page/story/edit.jsx";
import LoginPage from "../page/login.jsx";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/",
    element: <App />,
    loader: mainLoader,
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
        path: "project/:key/board/:id",
        element: <BoardPage />,
      },
      {
        path: "project/:key/story/:id",
        element: <EditStoryPage />,
      },
    ],
  },
]);

export default router;
