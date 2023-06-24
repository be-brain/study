import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./routes/root";
import ErrorPage from "./error-page";
import Brother from "./components/Brother";
import Sister from "./components/Sister";
import Home from "./pages/Home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "home",
                element: <Home />,
            },
            {
                path: "brother",
                element: <Brother />,
            },
            {
                path: "sister",
                element: <Sister />,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
