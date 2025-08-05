import { createBrowserRouter } from "react-router";

import { Layout } from "../pages/Layout";
import { Home } from "pages/Home";
import { Cart } from "pages/Cart";
import { NotFound } from "pages/NotFound";
import { Shop } from "pages/Shop";

export const router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
    ],
  },
]);
