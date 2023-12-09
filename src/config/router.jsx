import {createBrowserRouter} from "react-router-dom";
import App from "../page/main/App.jsx";
import ProjectPage from "../page/project.jsx";

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
            }
        ]
    }
])

export default router