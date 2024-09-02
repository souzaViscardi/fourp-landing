import Home from "../Pages/Home/Home.tsx"
import ErrorPage from "../Pages/Error.tsx"
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
    path: "/trabalhos",
    element: <ErrorPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/contato",
    element: <ErrorPage />,
    errorElement: <ErrorPage />,
  },
]);