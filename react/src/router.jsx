import { createBrowserRouter } from "react-router-dom";

import HomePage from "./pages/HomePage";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Pricing from "./pages/Pricing";

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
    {
        path: "pricing",
        element: <Pricing />,
    },
]);

export default router;
