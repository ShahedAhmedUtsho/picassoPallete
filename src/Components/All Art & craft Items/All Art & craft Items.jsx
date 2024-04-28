import { useContext, useEffect, useState } from "react";
import AllCraftTable from "../Table/Table";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";


const AllArtCraftItems = () => {
    
    const [allCraft,setAllCraft]=useState([])
    const LoadedData = useLoaderData()
    
    
    useEffect(() => {
        
        setAllCraft(LoadedData);
      
    }, [LoadedData]); 

    return (
        <div>
            <AllCraftTable
              allCraft={allCraft}
              ></AllCraftTable>
        </div>
    );
};

export default AllArtCraftItems;