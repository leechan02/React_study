import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Root from "./pages/Root";
import AboutDetail from "./pages/AboutDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <h1>404</h1>,
    children: [
      { index: true, element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/about/:aboutId", element: <AboutDetail /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
