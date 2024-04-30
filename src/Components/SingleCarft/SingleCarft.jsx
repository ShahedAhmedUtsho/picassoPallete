import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";


const SingleCarft = () => {
  useEffect(() => {
    document.title ="PP - craft Details"
   
   }, [])
    const carft = useLoaderData();
    return (
        <div className="max-w-2xl mx-auto px-3">
            <div className=" lg:h-[500px] my-10  mx-auto flex justify-center items-center"> 
              <img className=" object-cover   rounded-md  h-full" src={carft.photoURL} alt="" />
            </div>
            <div className="info  border-red-50">
        <div className="md:col-span-1 lg:col-span-1">
          <h2 className="text-3xl font-bold mb-4">{carft.item_name}</h2>

             <p className="text-lg text-gray-600 mb-4"> {carft.short_description} </p>

              <p className=" text-gray-800 mb-4 text-2xl">Price: ${carft.price} </p>

          <p className="text-lg text-gray-800 mb-4">Processing Time:  {carft.processing_time} Days</p>
             <p className="text-gray-800 text-lg  mb-4"> Rating: {carft.rating}</p>


          <p className="text-lg  mb-4"> Stock Status: {carft.stockStatus}</p>
                  <p className=" text-gray-800 text-lg mb-4">Category: {carft.subcategory_Name}</p>
              <p className=" text-gray-800 mb-4 text-2xl">Provider :{carft.username} </p>

             <p className="text-lg text-gray-800 mb-4"> Provider Email: {carft.email}</p>
        </div>
      </div>

            </div>
           
            
       
    );
};

export default SingleCarft;