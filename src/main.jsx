import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Layout/Main';
import Home from './Pages/Home/Home';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element:<Home></Home> ,
      },
    ],
  },
]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='max-w-6xl mx-auto'>
    <RouterProvider router={router} />
    </div>
    
  </StrictMode>,
)
