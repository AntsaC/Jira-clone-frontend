import {Dashboard} from "@mui/icons-material";

const createRoutes = (currentProject) => ([
    {
        primary: 'Dashboard',
        path: createProjectChildrenPath(currentProject, 'dashboard'),
        icon: <Dashboard />
    },
    {
        primary: 'Project',
        path: 'project',
        icon: <Dashboard />
    },
    {
        primary: 'Backlog',
        path: createProjectChildrenPath(currentProject, 'backlog'),
        icon: <Dashboard />
    },
]);


function createProjectChildrenPath(projectKey, path) {
    return `project/${projectKey}/${path}`;
}

export default createRoutes;

