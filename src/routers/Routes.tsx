import { RouteObject, createBrowserRouter } from "react-router-dom";
import Layout from "../shared/components/Layout/Layout.component";
import { NotFound } from "../pages/NotFound";
import { Dashboard } from "../pages/Dashboard";
import { Todos } from "../pages/Todos";

const routes: RouteObject[] = [
    {
        path: '',
        Component: Layout,
        children: [
            {
                index: true,
                Component: Dashboard
            },
            {
                path: "todos",
                Component: Todos
            }
        ],
    },
    {
        path: "*",
        Component: NotFound,
    }
]

export const router = createBrowserRouter(routes)