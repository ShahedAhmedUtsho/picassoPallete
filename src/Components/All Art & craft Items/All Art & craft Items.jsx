import { useContext, useEffect, useState } from "react";
import AllCraftTable from "../Table/Table";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import axios from "axios";


const AllArtCraftItems = () => {
    
    const [allCraft,setAllCraft]=useState([])
    
    useEffect(() => {
        document.title ="PP - All art & Craft"
       
       
       }, [])
    
    useEffect(() => {
        
        axios.get('https://assaiment10-backend.vercel.app/allartandcraftitems',{withCredentials:true})
        .then(res=>{
            const data = res.data ;
            setAllCraft(data)
            console.log("success")
        })
      
    }, []); 

    return (
        <div>
            <AllCraftTable
              allCraft={allCraft}
              ></AllCraftTable>
        </div>
    );
};

export default AllArtCraftItems;