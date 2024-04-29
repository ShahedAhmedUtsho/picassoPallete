import React from 'react';
import { Link, useLoaderData,  } from "react-router-dom";
import { Trash,Cube} from 'phosphor-react'
import { Button } from 'keep-react'
import PropTypes from 'prop-types'
const CraftItemSection = ({jsonData}) => {

  
    const firstEightItems = jsonData.slice(0, 6);


    
    return (
        <div className="min-h-[90vh]">
        <h2 className="text-3xl text-center dark:text-slate-300  my-10 capitalize">
            your added craft Collection 
        </h2>
        <div className="grid md:grid-cols-2 gap-3 w-full  mt-2">
            {
              
              
              
              
              
              
           firstEightItems.map((carft,index)=> <div className=" bg-[#384c5a2b]  relative  rounded-lg p-3" key={carft._id ? carft._id : index }> 
            
              <div  className="grid lg:grid-cols-3 gap-3 capitalize lg:h-72 md:w-auto w-full  ">
              <div className=" lg:col-span-1  rounded-lg  h-72 ">
                <img src={carft.photoURL} className="h-full w-full rounded-lg    object-cover" alt="" />

              </div>

              <div className=" lg:col-span-2 ">
              <h2 className="text-2xl font-semibold dark:text-slate-300 md:text-base  capitalize">{carft.item_name}</h2>
              <h3 className="text-base mt-2 dark:text-slate-300 ">price : ${carft.price}</h3>
              <h3 className="text-base mt-2 dark:text-slate-300 ">rating : {carft.rating}</h3>
              <h3 className="text-base mt-2 dark:text-slate-300 ">customization : {carft.Customization}</h3>
              <h3 className="text-base mt-2 dark:text-slate-300 ">stockStatus : {carft.stockStatus}</h3>
              <h3 className="text-base mt-2 dark:text-slate-300 ">makeing time : {carft.processing_time}</h3>


              <div className="flex  lg:mt-10 py-3 gap-2 items-center">



              <Link className=" relative self-start" to={`/allartandcraftitems/${carft._id}`}><Button  variant="outline" size="sm" className=" bg-transparent  border-current  dark:text-slate-100 dark:border-slate-400 text-slate-100 px-8   bg-slate-600 hover:text-slate-100 hover:bg-slate-700 ">
              <span className="pr-2">
                <Cube size={24} />
              </span>
              Details
            </Button></Link>





              

              </div>
              </div>

              </div>
            
              
              </div>)




            }



      


    </div>
    </div>
    );
};


CraftItemSection.propTypes = {
jsonData:PropTypes.array
}

export default CraftItemSection;