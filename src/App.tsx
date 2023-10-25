import Users from "./pages/users/Users";
import Home from "./pages/home/Home";
import Products from "./pages/products/Products";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import "./styles/global.scss";
const router = createBrowserRouter([
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
        path: "products",
        element: <Products />,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
