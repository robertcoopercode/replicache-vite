import {
    createBrowserRouter,
} from "react-router-dom";
import App from "./app";

export const router = createBrowserRouter([
    {
        path: "*",
        element: <App />,
    },
    {
        path: "/test",
        element: <div>Test page</div>,
    },
]);
