import { useEffect, useState } from "react";
import AllCraftTable from "../Table/Table";
import { useLoaderData } from "react-router-dom";


const AllArtCraftItems = () => {
    const [allCraft,setAllCraft]=useState([])
    const LoadedData = useLoaderData()
    // setAllCraft(LoadedData)
    
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