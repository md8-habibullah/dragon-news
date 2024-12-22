import { createBrowserRouter, Navigate } from "react-router-dom";
import HomeLayoutes from "../layouts/HomeLayoutes";
import CategoryPage from "../Pages/CategoryPage";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayoutes></HomeLayoutes>,
    children: [
      {
        path: "/",
        element: <Navigate to={`category/01`}></Navigate>,
      },
      {
        path: "category/:id",
        element: <CategoryPage></CategoryPage>,
        // loader: (params) =>
        //   fetch(
        //     `https://openapi.programming-hero.com/api/news/category/${params.id}`
        //   ),
      },
    ],
  },
  {
    path: "news",
    element: <div>I am news</div>,
  },
  {
    path: "auth",
    element: <div>I am login </div>,
  },
  {
    path: "*",
    element: <div>Error IG huh, path not foud</div>,
  },
]);

export default routes;
