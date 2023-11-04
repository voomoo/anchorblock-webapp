import { createBrowserRouter } from "react-router-dom";
import AppLayout from "./layouts/app_layout/AppLayout";
import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import Sales from "./pages/Sales";
import AuthLayout from "./layouts/auth_layout/AuthLayout";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import RootPage from "./pages/Root";
import NotFound from "./pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
    errorElement: <NotFound />,
  },
  {
    path: "/app",
    element: <AppLayout />,
    children: [
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "users",
        element: <Users />,
      },
      {
        path: "sales",
        element: <Sales />,
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "sign-up",
        element: <SignUp />,
      },
      {
        path: "sign-in",
        element: <SignIn />,
      },
    ],
  },
]);

export default router;
