import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';




const Catagory = () => {

    

const [data,setData] = useState([])

useEffect(() => {
    const apiUrl = 'https://assaiment10-backend.vercel.app/subcategory';
    fetch(apiUrl)
    .then(res=>res.json())
    .then(data=>{
        console.log(data)
        setData(data)
    })
    .catch(error=>console.log(error.message))

  
}, [])





    
    return (
        <div>
           <div className='grid gap-2 mb-10   lg:grid-cols-3'>
{
    data.map((cat,index)=><Link to={`/subcategory/${cat.subcategory_Name}`} key={cat._id}>
    <div  className=' lg:h-44  md:h-52  grid  grid-cols-5   rounded-lg  w-full border-2'>
        <div className='h-full overflow-hidden  bg-white bg-center bg-cover url   col-span-2'>
            <img className='   object-cover bg-slate-400 w-[100%] h-[100%]' src={cat.image} alt="" />
        </div>
        <div className="info col-span-3 p-3 ">
            <h2 className=' dark:text-slate-300 font-semibold text-slate-700 capitalize text-xl mb-3 md:text-2xl'>
                {cat.subcategory_Name}
            </h2>
            <p className=' dark:text-slate-400 capitalize text-sm md:text-sm'>
                {cat.discription
}
            </p>
            
        </div>
        
        </div>
    
    </Link>)
}
           </div>
    
        </div>
    );
};

export default Catagory;