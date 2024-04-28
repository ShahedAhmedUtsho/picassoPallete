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
import ErrorPage from './Components/ErrorPage/ErrorPage.jsx';
import SingleCarft from './Components/SingleCarft/SingleCarft.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    errorElement:<ErrorPage></ErrorPage>,
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
        
        loader:()=>fetch('http://localhost:3000/allartandcraftitems')
        
      },{
        path:'/addcraftitem',
        element:<PrivetRoute><AddCraftItem></AddCraftItem></PrivetRoute>
      },{
        path:'/myartandcraftlist',
        element:<PrivetRoute><Myartandcraftlis></Myartandcraftlis></PrivetRoute>,
      },{
        path:'/',
        element:<Home></Home>,
      },
      {
        path: "/allartandcraftitems/:craftID",
        element:<SingleCarft></SingleCarft>,
        loader:({params})=>fetch(`http://localhost:3000/allartandcraftitems/${params.craftID}`)
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
