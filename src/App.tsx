import React from 'react';
 
import {
  createBrowserRouter,Outlet,RouterProvider
  
   
} from "react-router-dom";

import HomePage from './Pages/HomePage';
import AsteroidPage from './Pages/AsteroidPage';
import { Link } from 'react-router-dom';
// import AsteroidForm from './componnents/AsteroidForm';
// import AsteroidInfo from './componnents/AsteroidInfo';


const Layout= ()=>{
  return(
    <div>
      <header>
        
        
      </header>
      <main>
    <Outlet/>
     
      </main>

      <footer>
      
 
      </footer>
    </div>
  )
}


const router = createBrowserRouter([
  {
    path: "/",
    element:<Layout />,
    children:[{
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/form",
      element: <AsteroidPage />,
    }
  
  ]
  },
  
]);
 

const App: React.FC = () => {
  return (
    
       
    <RouterProvider router={router} />
  );
};

export default App;
