import {createBrowserRouter} from "react-router-dom";
import App from "../App.jsx";

const router = createBrowserRouter([
    {
        path: '/',
        children: [
            {
                path: 'login',
                element: <h1>Login page</h1>
            },
            {
                path: 'project',
                element: <App />
            }
        ],

    }
])

export default router