import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from "react-router-dom";
import Article from "./Article.jsx";
import Edit from "./Edit.jsx";
import CreateRecipe from "./Create.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/article",
        element: <Article />,
    },
    {
        path: "/edit",
        element: <Edit />,
    },
    {
        path: "/create",
        element: <CreateRecipe />,
    },
]);

createRoot(document.getElementById('root')).render(
    <RouterProvider router={router}/>
)
