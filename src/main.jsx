import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AuthProvider from './AuthProvider/AuthProvider.jsx';
import Root from './Routes/Root.jsx';
import Home from './Components/Home/Home.jsx';
import Login from './Components/LOGIN/LOGIN.jsx';
import Register from './Components/Resister/Register.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element:<Root></Root>,
    children:[
      {
        path:'/',
        element:<Home></Home>,
      },
      {
        path:'/login',
        element:<Login></Login>,
      },
      {
        path:'/register',
        element:<Register></Register>,
      },
      {
        path:'/',
        element:<Home></Home>,
      },{
        path:'/',
        element:<Home></Home>,
      },{
        path:'/',
        element:<Home></Home>,
      },{
        path:'/',
        element:<Home></Home>,
      }
    ]
  },
]);















ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
   
  </React.StrictMode>,
)
