import { Dashboard, Folder, ListAlt, QueryBuilder } from "@mui/icons-material";

const createRoutes = (currentProject) => [
  {
    primary: "Dashboard",
    path: createProjectChildrenPath(currentProject, "dashboard"),
    icon: <Dashboard />,
  },
  {
    primary: "Project",
    path: "projects",
    icon: <Folder />,
  },
  {
    primary: "Backlog",
    path: createProjectChildrenPath(currentProject, "backlog"),
    icon: <ListAlt />,
  },
  {
    primary: "Sprint",
    path: createProjectChildrenPath(currentProject, "sprint"),
    icon: <QueryBuilder />,
  },
];

function createProjectChildrenPath(projectKey, path) {
  return `project/${projectKey}/${path}`;
}

export default createRoutes;
