
import Bannar from "../BannarSection/Bannar";
import CraftItemSection from "../CraftItemsSection/CraftItemSection";
import DeliverySection from "../DelevarySection/DelevarySection";
import DiffSecion from "../Diff/DiffSecion";
import Catagory from "../Catagory/Catagory";
import { useEffect } from "react";




const Home = () => {

   useEffect
    useEffect(() => {
        document.title ="PicassoPallet"
       
       }, [])


    return (
        <div className="w-full min-h-[100vh] ">
           <Bannar></Bannar>
           <CraftItemSection ></CraftItemSection>
          
           <DeliverySection></DeliverySection>
           <DiffSecion></DiffSecion>
           <h2  className="md:text-2xl text-xl mb-5 dark:text-slate-300">Category : </h2>
           <Catagory></Catagory>
           
            
        </div>
    );
};

export default Home;