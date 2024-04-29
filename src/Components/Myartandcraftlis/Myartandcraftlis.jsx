import { useContext, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Trash,Pen} from 'phosphor-react'
import { Button,Modal } from 'keep-react'
import {  Gear, SignIn } from 'phosphor-react'


const Myartandcraftlis = () => {
    
    useEffect(() => {
        document.title ="PP - My art & craft"
       
       }, [])

    const reloaded = () => {
        const reloaded =    window.location.reload();
    }



    //  const reloaded =    window.location.reload();
     



    const {user,handleDelete,handleTrash,} = useContext(AuthContext);
    const myEmail = user.email ;

    const allCrafts = useLoaderData() ;

    const myCraftCollection = allCrafts.filter(Craft =>Craft.email === myEmail) || [] ;
    console.log(myCraftCollection)
    const [myCollectionCraft,setMyCollectionCraft] =useState(myCraftCollection)
    
const handleYes = ()=>{
    const customYes = myCraftCollection.filter(craft => craft.Customization === "yes");
    setMyCollectionCraft(customYes)

}
const handleNo = () => {
    const customNo = myCraftCollection.filter(craft => craft.Customization === "no");
    setMyCollectionCraft(customNo)

}

const handleAll = () => {
    const customAll = myCraftCollection
    setMyCollectionCraft(customAll)

}


if( myCraftCollection.length === 0 ){
    return <div className="w-full h-[80vh] gap-7 flex justify-center flex-col items-center ">
 <h2 className="text-3xl  text-center capitalize ">
                you have not add any Art   </h2>


                <Link    to={`/addcraftitem`} >
        
                 <Button className="bg-[#4f4f4fa8] hover:bg-[#4f4f4fd6]">

                    <Pen size={20} className="mr-1.5" />
                    Add 
                    </Button>

                 </Link>
          

    </div>
   

}



    return (
        <div className="min-h-[90vh]">
            <h2 className="text-3xl text-center my-10 capitalize">
                your added craft Collection 
            </h2>

<div className="flex gap-2 justify-center items-center">
<button onClick={handleYes} className="bg-slate-300 p-5 rounded-full">yes</button> 
<button onClick={handleNo} className="bg-slate-300 p-5 rounded-full">no</button>
<button onClick={handleAll} className="bg-slate-300 p-5 rounded-full">all</button>
</div>


            <div className="grid md:grid-cols-2 gap-3 w-full   mt-2">
                {
                  
                  
                  
                  
                  
                  
                  myCollectionCraft.map((carft,index)=> <div className="border-[1px] bg-[#384c5a2b] relative  rounded-lg p-3" key={carft._id ? carft._id : index }> 
                
                  <div  className="grid md:grid-cols-3 gap-3 capitalize md:h-72 md:w-auto w-full  ">
                  <div className=" md:col-span-1  rounded-lg  h-72 ">
                    <img src={carft.photoURL} className="h-full w-full rounded-lg   object-cover" alt="" />

                  </div>

                  <div className=" md:col-span-2 ">
                  <h2 className="text-2xl font-semibold dark:text-slate-300   capitalize">{carft.item_name}</h2>
                  <h3 className="text-base mt-2 dark:text-slate-300">price : {carft.price}</h3>
                  <h3 className="text-base mt-2 dark:text-slate-300">rating : {carft.rating}</h3>
                  <h3 className="text-base mt-2 dark:text-slate-300">customization : {carft.Customization}</h3>
                  <h3 className="text-base mt-2 dark:text-slate-300">stockStatus : {carft.stockStatus}</h3>


                  <div className="flex  mt-10 py-3 gap-2 items-center">


                  <Link   to={`/myartandcraftlist/${carft._id}`} >
                 
        
                  <Button className="bg-[#4f4f4fa8] hover:bg-[#4f4f4fd6]">



<Pen size={20} className="mr-1.5" />
Update
</Button>

                  </Link>



                  





      <Button onClick={()=> handleTrash(carft._id,reloaded)} 
      
      
      className="bg-[#fe777752] dark:text-red-400 hover:bg-[#fe77778f] text-red-600">
        <Trash size={20} className="mr-1.5" />
       Delete
      </Button>
                  </div>
                  </div>

                  </div>
                
                  
                  </div>)




                }



          


        </div>
        </div>
    );
};

export default Myartandcraftlis;