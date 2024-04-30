'use client'
import { Skeleton } from 'keep-react'
import React, { useEffect, useState } from 'react';
import { Link, useLoaderData,  } from "react-router-dom";
import { Trash,Cube} from 'phosphor-react'
import { Button } from 'keep-react'
import PropTypes from 'prop-types'
import { Fade } from "react-awesome-reveal";
const CraftItemSection = () => {
  const [data,setData] = useState([])
  const [load,setLoad] = useState(true) ;


  // sppiner 

  

  useEffect(() => {
      const apiUrl = 'https://assaiment10-backend.vercel.app/allartandcraftitems';
      fetch(apiUrl)
      .then(res=>res.json())
      .then(data=>{
         
          setData(data)
          setLoad(false)
         
      })
      .catch(error=>console.log(error.message))
  
    
  }, [])

  if (load === true) {
    return <div className="grid md:grid-cols-2 gap-10 w-full   mt-2">
    <Skeleton className="w-full  space-y-2.5 mx-auto grid  grid-cols-3 gap-3 ">
      <div>
      <Skeleton.Line className="h-full  col-span-1 " />
      </div>
      <div className='flex flex-col gap-3 col-span-2'>

      <Skeleton.Line className="h-4 w-full" />
      
      <Skeleton.Line className="h-4 w-3/5" />
      <Skeleton.Line className="h-4 w-4/5" />
      <Skeleton.Line className="h-4 w-3/5" />
      <Skeleton.Line className="h-4 w-4/5" />
      
      <Skeleton.Line className="h-10 w-2/5 mt-10" />
      </div>
    </Skeleton>
    <Skeleton className="w-full  space-y-2.5 mx-auto grid  grid-cols-3 gap-3 ">
      <div>
      <Skeleton.Line className="h-full  col-span-1 " />
      </div>
      <div className='flex flex-col gap-3 col-span-2'>

      <Skeleton.Line className="h-4 w-full" />
      
      <Skeleton.Line className="h-4 w-3/5" />
      <Skeleton.Line className="h-4 w-4/5" />
      <Skeleton.Line className="h-4 w-3/5" />
      <Skeleton.Line className="h-4 w-4/5" />
      
      <Skeleton.Line className="h-10 w-2/5 mt-10" />
      </div>
    </Skeleton>
    <Skeleton className="w-full  space-y-2.5 mx-auto grid  grid-cols-3 gap-3 ">
      <div>
      <Skeleton.Line className="h-full  col-span-1 " />
      </div>
      <div className='flex flex-col gap-3 col-span-2'>

      <Skeleton.Line className="h-4 w-full" />
      
      <Skeleton.Line className="h-4 w-3/5" />
      <Skeleton.Line className="h-4 w-4/5" />
      <Skeleton.Line className="h-4 w-3/5" />
      <Skeleton.Line className="h-4 w-4/5" />
      
      <Skeleton.Line className="h-10 w-2/5 mt-10" />
      </div>
    </Skeleton>
    <Skeleton className="w-full  space-y-2.5 mx-auto grid  grid-cols-3 gap-3 ">
      <div>
      <Skeleton.Line className="h-full  col-span-1 " />
      </div>
      <div className='flex flex-col gap-3 col-span-2'>

      <Skeleton.Line className="h-4 w-full" />
      
      <Skeleton.Line className="h-4 w-3/5" />
      <Skeleton.Line className="h-4 w-4/5" />
      <Skeleton.Line className="h-4 w-3/5" />
      <Skeleton.Line className="h-4 w-4/5" />
      
      <Skeleton.Line className="h-10 w-2/5 mt-10" />
      </div>
    </Skeleton>
    <Skeleton className="w-full  space-y-2.5 mx-auto grid  grid-cols-3 gap-3 ">
      <div>
      <Skeleton.Line className="h-full  col-span-1 " />
      </div>
      <div className='flex flex-col gap-3 col-span-2'>

      <Skeleton.Line className="h-4 w-full" />
      
      <Skeleton.Line className="h-4 w-3/5" />
      <Skeleton.Line className="h-4 w-4/5" />
      <Skeleton.Line className="h-4 w-3/5" />
      <Skeleton.Line className="h-4 w-4/5" />
      
      <Skeleton.Line className="h-10 w-2/5 mt-10" />
      </div>
    </Skeleton>
    <Skeleton className="w-full  space-y-2.5 mx-auto grid  grid-cols-3 gap-3 ">
      <div>
      <Skeleton.Line className="h-full  col-span-1 " />
      </div>
      <div className='flex flex-col gap-3 col-span-2'>

      <Skeleton.Line className="h-4 w-full" />
      
      <Skeleton.Line className="h-4 w-3/5" />
      <Skeleton.Line className="h-4 w-4/5" />
      <Skeleton.Line className="h-4 w-3/5" />
      <Skeleton.Line className="h-4 w-4/5" />
      
      <Skeleton.Line className="h-10 w-1/5 mt-10" />
      </div>
    </Skeleton>
  </div>
  }
    const firstEightItems = data.slice(0, 6);


    
    return (
      
        <div className="">
         
          <h2 className="lg:text-3xl text-xl text-center dark:text-slate-300  my-10 capitalize">
            your added craft Collection 
        </h2>
        <div className="grid md:grid-cols-2 gap-3 w-full  mt-2">
            {
              
              
              
              
              
              
           firstEightItems.map((carft,index)=> <div className=" bg-[#384c5a2b]  relative  rounded-lg p-3" key={carft._id ? carft._id : index }> 
            <Fade>
      
    
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
              </Fade>
              
              </div>
              
              )




            }



      


    </div>
    
       
    </div>
    );
};


CraftItemSection.propTypes = {
jsonData:PropTypes.array
}

export default CraftItemSection;