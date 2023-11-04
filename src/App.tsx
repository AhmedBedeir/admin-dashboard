import Users from "./pages/users/Users";
import Home from "./pages/home/Home";
import Products from "./pages/products/Products";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import "./styles/global.scss";
import Product from "./pages/product/Product";
import User from "./pages/user/User";
const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "users",
          element: <Users />,
        },
        {
          path: "user/:id",
          element: <User />,
        },
        {
          path: "products",
          element: <Products />,
        },
        {
          path: "product/:id",
          element: <Product />,
        },
        {
          path: "*",
          element: <h1>Coming Soon ...</h1>,
        },
      ],
    },
  ],
  {
    basename: import.meta.env.DEV ? "/" : "/admin-dashboard/",
  }
);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
