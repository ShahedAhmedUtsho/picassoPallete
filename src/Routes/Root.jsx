import { Outlet } from "react-router-dom";
import Header from "../Components/Header/Header";
import Success from "../Components/Model/Success";


const Root = () => {
    return (
        <div className=" dark:bg-[#212121]">
            <Success></Success>
 <div className=" md:container mx-auto">
    <div className="navi border-2">
    <Header></Header>
    </div>
            
            <Outlet>

            </Outlet>
            
        </div>
        </div>
       
    );
};

export default Root;