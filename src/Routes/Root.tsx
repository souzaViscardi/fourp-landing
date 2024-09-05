import Home from "../Pages/Home/Home.tsx"
import ErrorPage from "../Pages/Error.tsx"
import { Brands } from "../Pages/Works/Brands/Brands.tsx";

import {
  createBrowserRouter,
} from "react-router-dom";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/trabalhos/marcas/:id",
    element: <Brands></Brands>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/trabalhos/videos/:id",
    element: <ErrorPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/trabalhos/fotos/:id",
    element: <ErrorPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/contato",
    element: <ErrorPage />,
    errorElement: <ErrorPage />,
  },
]);