

"use client";
import {  Badge, Button,  Table ,Tooltip } from "keep-react";
import {  Cube, ArrowRight ,Pen } from "phosphor-react";
import { Link } from "react-router-dom";
const Bannar = () => {
    return (
        <div className="border-[1px]  border-black  bg-transparent grid md:grid-cols-7  w-full md:min-h-[550px] lg:min-h-[600px] mb-10">
            <div  className="py-10 mt-5 md:mt-0 md:py-0 border-2 px-4 h-full md:col-span-3 flex flex-col gap-6 md:gap-5 lg:gap-10   justify-center  ">
            <h2 className="lg:text-6xl md:text-4xl text-4xl font-medium dark:text-gray-100 text-slate-800 leading-[50px]  md:leading-[50px] lg:leading-[70px]">Unique <br />
            <Pen className=" mx-2 text-32 lg:inline-block  hidden" size={60} /> 
            <Pen className=" mx-1 text-32 md:inline-block hidden lg:hidden" size={40} />
            <Pen className=" mx-2 text-32 inline-block md:hidden" size={50} />
 Exhibition of <br />
Digital Arts</h2>
<p className="md:max-w-[400px] max-w-72 text-slate-500 text-xs md:text-xs">
Great platform to show your unique art. Register, send us your best arts, we will select. Just that simple...
</p>


<Link className=" self-start" to="/allartandcraftitems"><Button  variant="outline" size="sm" className=" bg-transparent  border-current  dark:text-slate-100 dark:border-slate-400 text-slate-100 px-8   bg-slate-600 hover:text-slate-100 hover:bg-slate-700 ">
              <span className="pr-2">
                <Cube size={24} />
              </span>
             Art List
            </Button></Link>

            </div>
            <div className="border-2 bg-red-200 h-full md:col-span-4 ">
                


            </div>

            
        </div>
    );
};

export default Bannar;