import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import NotFound from "../pages/NotFound";
import Home from "../pages/Home";
import AllProducts from "../pages/AllProducts";
import NewProduct from "../pages/NewProduct";
import ProductDetail from "../pages/ProductDetail";
import MyCart from "../pages/MyCart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { index: true, path: "/", element: <Home /> },
      { path: "/products", element: <AllProducts /> },
      { path: "/products/new", element: <NewProduct /> },
      { path: "/products/:id", element: <ProductDetail /> },
      { path: "/carts", element: <MyCart /> },
    ],
  },
]);

export default router;