import {
    createBrowserRouter,
    RouterProvider,
     
  } from "react-router-dom";
 import AsteroidPage from "../Pages/AsteroidPage";
import HomePage from "../Pages/HomePage";
   


const router = createBrowserRouter([
    {
      path: "/",
      element:<HomePage />,
    },
    {
      path: "/asteroid",
      element: <AsteroidPage />,
    },
  ]);


const AppRoutes: React.FC = () => {
  return (
    <RouterProvider router={router} />
  );
};

export default AppRoutes;
