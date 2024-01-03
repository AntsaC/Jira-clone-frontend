import {
  Cached,
  CalendarViewWeek,
  Dashboard,
  Folder,
  ListAlt,
} from "@mui/icons-material";

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
    icon: <Cached />,
  },
  {
    primary: "Board",
    path: createProjectChildrenPath(currentProject, "board"),
    icon: <CalendarViewWeek />,
  },
];

function createProjectChildrenPath(projectKey, path) {
  return `project/${projectKey}/${path}`;
}

export default createRoutes;
