import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'



import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './AllComponent/Root';
import ErrorPage from './AllComponent/ErrorPage/ErrorPage';
import Home from './AllComponent/HeaderComponent/Home';
import DashBoard from './AllComponent/HeaderComponent/DashBoard';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
     {
      path: '/',
      element: <Home></Home>,
     },
     {
      path: '/dashboard',
      element: <DashBoard></DashBoard>
     }
    ]
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
