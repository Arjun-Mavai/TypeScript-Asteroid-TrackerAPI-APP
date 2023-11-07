 
import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Link,
} from "react-router-dom";
import AsteroidForm from './components/AsteroidForm';
import AsteroidInfo from './components/AsteroidList';
import AsteroidList from './components/AsteroidList';

const Layout = ()=>{
  return(
    <>
    
   <div >
   <h2> <hr />TypeScript Application <hr /></h2>
   <header style={{display:'flex' , flexDirection:'column'}}>
    
     
      <button>
      <Link to="/">Back</Link>
      </button>
      <button>
      <Link to="/info">Info</Link>
      </button>
      <button>
      <Link to="/info1">check</Link>
      </button>
      <button>
      <Link to="/info3">check</Link>
      </button>
    </header>

    <main style={{outline:'2px solid red' , padding:'10px' , borderRadius:"15px"}}>
      <Outlet/>
      <button>
      <Link to="/form">click to get the asteroid Form</Link>

      </button>


    </main>
    <footer>
      <h1>Footer here</h1>
      <hr /><hr />

    </footer>
    
   </div>
    </>
  )
}

  const App:React.FC = ()=> {

  const router = createBrowserRouter([
    {
    path:'/',
    element : <Layout/>,
    children : [
      {
        path:'/form',
        element:<AsteroidForm/>,
      },
      {
        path:'/info',
        element: <AsteroidList />,
      },
      {
        path:'/info1',
        element:<h1>Use of Redux toolkit</h1>
      },
      {
        path:'/info3',
        element:<h1>Use of react router</h1>
      },
       
    ]
  },
  



])
  

  return (
    <>
     <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
