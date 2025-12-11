import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Layout from "../components/layout/Layout";
import Clients from "../pages/Clients";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children: [
           {
             index: true,
            element: <Home/>
            }
        ]
    },
      {
        path: '/clients',
        element: <Clients />
        }
]);