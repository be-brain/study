import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Root from "./shared/Router";

const router = createBrowserRouter([
    { path: "/", Component: Home },
    { path: "*", Component: Root },
]);

export default function App() {
    return (
        <div>
            <RouterProvider router={router} />
        </div>
    );
}
