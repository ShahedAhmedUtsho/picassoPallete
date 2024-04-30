
import Bannar from "../BannarSection/Bannar";
import CraftItemSection from "../CraftItemsSection/CraftItemSection";
import DeliverySection from "../DelevarySection/DelevarySection";
import DiffSecion from "../Diff/DiffSecion";
import Catagory from "../Catagory/Catagory";




const Home = () => {

   
  


    return (
        <div className="w-full min-h-[100vh] ">
           <Bannar></Bannar>
           <CraftItemSection ></CraftItemSection>
          
           <DeliverySection></DeliverySection>
           <DiffSecion></DiffSecion>
           <Catagory></Catagory>
            
        </div>
    );
};

export default Home;