import { Outlet } from "react-router-dom";
import Header from "../Components/Header/Header";
import Success from "../Components/Model/Success";
import ErrorModel from "../Components/Model/ErrorModel";


const Root = () => {
    return (
        <div className=" dark:bg-[#212121] ">
            <br />
            <Success></Success>
            <ErrorModel></ErrorModel>
           
 <div className=" md:container mx-auto  ">

    <div className="navi -mt-5">
    <Header></Header>
    </div>
            
            <Outlet>

            </Outlet>
            
        </div>
        </div>
       
    );
};

export default Root;