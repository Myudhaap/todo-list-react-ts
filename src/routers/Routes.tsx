import { RouteObject, createBrowserRouter } from "react-router-dom";
import Layout from "../shared/components/Layout/Layout.component";
import { NotFound } from "../pages/NotFound";

const routes: RouteObject[] = [
    {
        path: '',
        Component: Layout,
        children: [
            {
                index: true,
                
            }
        ],
    },
    {
        path: "*",
        Component: NotFound,
    }
]

export const router = createBrowserRouter(routes)