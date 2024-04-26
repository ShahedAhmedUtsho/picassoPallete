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
import AllArtCraftItems from './Components/All Art & craft Items/All Art & craft Items.jsx';
import AddCraftItem from './Components/Add Craft Item/AddCraftItem.jsx';
import Myartandcraftlis from './Components/Myartandcraftlis/Myartandcraftlis.jsx';
import PrivetRoute from './PrivetRoute/PrivetRoute.jsx';



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
        path:'/allartandcraftitems',
        element:<AllArtCraftItems></AllArtCraftItems>,
      },{
        path:'/addcraftitem',
        element:<PrivetRoute><AddCraftItem></AddCraftItem></PrivetRoute>
      },{
        path:'/myartandcraftlist',
        element:<PrivetRoute><Myartandcraftlis></Myartandcraftlis></PrivetRoute>,
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
