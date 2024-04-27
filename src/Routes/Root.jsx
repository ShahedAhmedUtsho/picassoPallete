import { Outlet } from "react-router-dom";
import Header from "../Components/Header/Header";
import ErrorModel from "../Components/Model/ErrorModel";
import Success from "../Components/Model/Success";
import Footer from "../Components/Footer/Footer";
import Line from "../assist/images/lines.svg"


const Root = () => {
    return (
        <div className= {`dark:bg-[#212121] flex flex-col   min-h-screen `}  >
            <br />
            <img  src={Line} alt="line" className="w-full -z-10 absolute right-0 top-0" />
            <Success></Success>
            <ErrorModel></ErrorModel>
           
 <div className=" md:container mx-auto  ">

    <div className="navi z-50 -mt-5">
    <Header></Header>
    </div>
   
            
            <Outlet>

            </Outlet>
            
        </div>


        <Footer></Footer>
        </div>
       
    );
};

export default Root;