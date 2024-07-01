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
import UpdateCarft from './Components/UpdateCraft/UpdateCarft.jsx';
import SubCategoryDetails from './Components/SubcategoryDetails/SubCategoryDetails.jsx';
import Pagination from './Components/pagination/Pagination.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    errorElement:<ErrorPage></ErrorPage>,
    element:<Root></Root>,
    children:[
      {
        path:'/',
        element:<Home></Home>
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
        element:<PrivetRoute><AllArtCraftItems></AllArtCraftItems></PrivetRoute>
        
      },{
        path:'/addcraftitem',
        element:<PrivetRoute><AddCraftItem></AddCraftItem></PrivetRoute>,
        
      },{
        path:'/myartandcraftlist',
        element:<PrivetRoute><Myartandcraftlis></Myartandcraftlis></PrivetRoute>,
        loader:()=>fetch('https://assaiment10-backend.vercel.app/allartandcraftitems')
      },
      {
        path: "/allartandcraftitems/:craftID",
        element:<PrivetRoute><SingleCarft></SingleCarft></PrivetRoute>
      },
      {
        path: "/myartandcraftlist/:craftID",
        element:<PrivetRoute><UpdateCarft></UpdateCarft></PrivetRoute>,
        loader:({params})=>fetch(`https://assaiment10-backend.vercel.app/allartandcraftitems/${params.craftID}`)
      } ,
      {
        path: "/subcategory/:CategoryName",
        element:<SubCategoryDetails></SubCategoryDetails>,
        
      } ,
      {
        path: "/page",
        element:<Pagination/>,
        
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
