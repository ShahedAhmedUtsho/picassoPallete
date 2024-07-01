import axios from 'axios';

import React, { useEffect, useState } from 'react';

const Pagination = () => {
    const [data,setData] = useState([])
    const [currentPage,setCurrentPage] = useState(1) ;

useEffect(()=>{
axios.get('https://assaiment10-backend.vercel.app/allartandcraftitems')
.then(res=> setData(res.data) )
},[])

const itemPerPage = 3 ;
const totalpage = Math.ceil(data.length / itemPerPage) ;
const startIndex = (currentPage - 1)* itemPerPage ; 
const currentData = data.slice(startIndex,(startIndex+itemPerPage))


    return (
        <div className='bg-slate-800 text-slate-200 min-h-screen mb-10  rounded-xl p-10'>
           <p> this is pagination</p>
          <div className='grid grid-cols-3 gap-3 justify-center items-center p-4 border border-indigo-500'>
          {currentData.map((item,index)=> <div className='border p-3 border-slate-400 ' key={item._id}>
            <div className='w-full h-52 bg-slate-700'>
                <img src={item.photoURL} className=' w-full h-full object-cover' alt="" />

            </div>
            
            {item.item_name}</div>)}
          </div>
<div className="my-5 mx-auto">

{Array.from({length:totalpage},(_, index)=>(



<button key={index} onClick={()=>{setCurrentPage(index+1)}} className={`p-2 border px-5 mx-2 ${currentPage === index+1 ? 'bg-slate-300 text-slate-600' : 'bg-slate-600' } rounded-md`}>
{index+1}
</button>
)

    
    

)}
</div>




        </div>
    );
};

export default Pagination;