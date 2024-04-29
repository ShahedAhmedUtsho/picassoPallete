import { useLoaderData } from "react-router-dom";
import Bannar from "../BannarSection/Bannar";
import CraftItemSection from "../CraftItemsSection/CraftItemSection";
import DeliverySection from "../DelevarySection/DelevarySection";




const Home = () => {
    const jsonData = useLoaderData() ;

   
  


    return (
        <div className="w-full min-h-[100vh] ">
           <Bannar></Bannar>
           <CraftItemSection jsonData={jsonData}></CraftItemSection>
          
           <DeliverySection></DeliverySection>
            
        </div>
    );
};

export default Home;