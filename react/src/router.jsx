import { createBrowserRouter } from "react-router-dom";

import HomePage from "./pages/HomePage";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

const router = createBrowserRouter([
    {
        path: "",
        element: <HomePage />,
    },
    {
        path: "about",
        element: <About />,
    },
    {
        path: "*",
        element: <NotFound />,
    },
]);

export default router;
