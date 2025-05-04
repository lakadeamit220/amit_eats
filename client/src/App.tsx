import ForgotPassword from "./components/auth/ForgotPassword";
import Login from "./components/auth/Login"
import ResetPassword from "./components/auth/ResetPassword";
import Signup from "./components/auth/Signup"
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import VerifyEmail from "./components/auth/VerifyEmail";
import Layout from "./components/layout/Layout";
import Hero from "./components/hero/Hero";
import Profile from "./components/profile/Profile";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Hero />,
      },
      {
        path: "/profile",
        element: <Profile />,
      }
    ]
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/signup",
    element: <Signup />
  },
  {
    path: "/forgot-password",
    element: <ForgotPassword />
  },
  {
    path: "/reset-password",
    element: <ResetPassword />
  },
  {
    path: "/verify-email",
    element: <VerifyEmail />
  },
])

function App() {
  return (
    <>
      <RouterProvider router={appRouter}>
      </RouterProvider>
    </>
  )
}

export default App
