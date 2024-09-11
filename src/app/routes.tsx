import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/MainLayout";
import Index from "../modules/core/pages/Index";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/core",
        element: <Index />,
      },
    ],
  },
]);

export default router;