import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {RouterProvider} from "react-router-dom";
import router from "./config/router.jsx";
import {QueryClientProvider} from "@tanstack/react-query";
import queryClient from "./config/query-client.js";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <RouterProvider router={router} />
        </QueryClientProvider>
  </React.StrictMode>,
)
