import ForgotPassword from "./components/auth/ForgotPassword";
import Login from "./components/auth/Login"
import ResetPassword from "./components/auth/ResetPassword";
import Signup from "./components/auth/Signup"
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import VerifyEmail from "./components/auth/VerifyEmail";
import Layout from "./components/layout/Layout";
import Hero from "./components/hero/Hero";
import Profile from "./components/profile/Profile";
import Search from "./components/search/Search";
import Cart from "./components/cart/Cart";
import Restaurant from "./components/restaurant/Restaurant";
import Restaurants from "./components/admin/Restaurants";
import AddMenu from "./components/admin/AddMenu";

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
      },
      {
        path: "/search/:text",
        element: <Search />,
      },
      {
        path: "/restaurant/:id",
        element: <Restaurant />,
      },
      {
        path: "/cart",
        element: <Cart />
      },
      {
        path: "/admin/restaurants",
        element: <Restaurants />
      },
      {
        path: "/admin/menu",
        element: <AddMenu />
      },
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
