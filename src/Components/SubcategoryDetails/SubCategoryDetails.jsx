"use client";
import { Spinner } from "keep-react";
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
'use client'
import {  Cube, ArrowRight ,Pen } from "phosphor-react";
import { Button } from 'keep-react'

const SubCategoryDetails = () => {
    const params = useParams()
    const [load,setLoad] = useState(true) ;


const [data,setData] = useState([]);



useEffect(() => {
    document.title =`PP - ${params.CategoryName}`
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
    return <div className="w-full flex justify-center items-center min-h-[80vh]">
        <Spinner color="info" size="lg" />
    </div>


}




const subItems = data.filter(item => item.subcategory_Name === params.CategoryName) ;


    
    return (
        <div className='mt-10 md:px-3 px-1 lg:px-5'>
           <h2 className="md:text-2xl text-xl mb-5 dark:text-slate-300"> {params.CategoryName}</h2>
            <div className=' min-h-20'>
                
            <div className='grid gap-2 mb-10 md:grid-cols-2   lg:grid-cols-4'>
{
    subItems.map((cat,index)=> 
    <div key={cat._id}  className='   grid  grid-cols-5 overflow-hidden  rounded-lg  w-full border-[1px]'>


        <div className='h-52 rounded-sm overflow-hidden  bg-center bg-cover url   col-span-5 '>
           <div className='h-full overflow-hidden w-full '>
           <img className='   object-cover bg-slate-400 w-[100%]  h-full ' src={cat.photoURL} alt="" />
           </div>
        </div>



        <div className="info flex gap-5 flex-col col-span-5 p-3 ">
            <h2 className=' dark:text-slate-300 font-semibold text-slate-700 capitalize text-xl md:text-2xl'>
                {cat.item_name}
            </h2>
            <p className=' dark:text-slate-400 capitalize text-sm md:text-sm'>
                {cat.short_description}

            </p>
            <p className=' dark:text-slate-400 capitalize text-sm md:text-sm'>
               Price : ${cat.price}

            </p>
           
            
            <Link className=" mt-auto relative self-start"  to={`/allartandcraftitems/${cat._id}`}><Button  variant="outline" size="sm" className=" bg-transparent  border-current  dark:text-slate-100 dark:border-slate-400 text-slate-100 px-8   bg-slate-600 hover:text-slate-100 hover:bg-slate-700 ">
              <span className="pr-2">
                <Cube size={24} />
              </span>
            Details
            </Button></Link>

          
        </div>
        
        </div>
    
    )
}
           </div>
            </div>
        </div>
    );
};

export default SubCategoryDetails;