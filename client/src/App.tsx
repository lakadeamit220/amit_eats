import ForgotPassword from "./components/auth/ForgotPassword";
import Login from "./components/auth/Login"
import ResetPassword from "./components/auth/ResetPassword";
import Signup from "./components/auth/Signup"
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import VerifyEmail from "./components/auth/VerifyEmail";
import Navbar from "./components/navbar/Navbar";

const appRouter = createBrowserRouter([
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
  {
    path: "/",
    element: <Navbar />
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
