import {createBrowserRouter} from "react-router-dom";
import App from "../page/main/App.jsx";
import ProjectPage from "../page/project.jsx";
import BacklogPage from "../page/backlog.jsx";

const router = createBrowserRouter([
    {
        path: '/login',
        element: <h1>Login page</h1>,
    },
    {
        path: '/',
        element: <App/>,
        children: [
            {
                path: 'project',
                element: <ProjectPage />
            },
            {
                path: 'project/:key/backlog',
                element: <BacklogPage />
            },
        ]
    }
])

export default router