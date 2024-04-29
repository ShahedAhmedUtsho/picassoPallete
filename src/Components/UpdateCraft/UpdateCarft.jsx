import  { useContext, useEffect } from 'react';
import { Navigate, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

'use client'
import { 
     Image,
     AddressBook,
     AlignLeft,
     CurrencyCircleDollar,
     Star,
     ClockClockwise ,
     Pen,
     Ticket


 } from 'phosphor-react'
import { Button, Icon, Input, Label,Textarea  } from 'keep-react'


const UpdateCarft = () => {
  useEffect(() => {
    document.title ="PP - Update Craft"
   
   }, []) 
    
const {user, openErrorModal, setModelMessage,
    setModelHead,
    openSuccessModal,} = useContext(AuthContext)

    const craft = useLoaderData() ;

if(user.email !== craft.email) {
  
    return <Navigate to='/myartandcraftlist'></Navigate>
}





const handleCraft = event =>{
    event.preventDefault() ;
    const form = event.target ; 
    const photoURL = form.photoURL.value ;
    const item_name = form.item_name.value ;
    const subcategory_Name =form.subcategory_Name.value ;
    const short_description = form.short_description.value ;
    const price = form.price.value ;
    const rating = form.rating.value ;
    if ( rating > 5){
        setModelHead("Error") ;
        setModelMessage("Rating should Between ( 0-5 )")
        openErrorModal()

        return
    }
    const processing_time =form.processing_time.value ;

    const email = user.email;
    const username = user.displayName;
    const Customization = form.customization.value;
    if(  Customization.toLowerCase() !== "yes" &&  Customization.toLowerCase() !== "no" ) {
        setModelHead("Error") ;
        setModelMessage("stockStatus should  'Customization' / 'no' ")
        openErrorModal()

        return
    }
    
    const stockStatus = form.stockStatus.value ;
    console.log(stockStatus.toLowerCase())
    if( stockStatus.toLowerCase() !== "in stock" && stockStatus.toLowerCase() !== "made to order" ) {
        setModelHead("Error") ;
        setModelMessage("stockStatus should  'in Stock' / 'Made to Order' ")
        openErrorModal()

        return
    }
    const UpdateCraft = {
        email,username,
        photoURL,item_name,subcategory_Name,short_description,
        price,rating,processing_time,Customization,
        stockStatus

    }
    console.log(UpdateCraft)


//mongodb & server connection 
fetch(`https://assaiment10-backend.vercel.app/allartandcraftitems/${craft._id}`,{
method: 'PUT',
headers:{
    'content-type' : 'application/json'
},
body:JSON.stringify(UpdateCraft)

})
.then(res=>res.json()) 
.then(data=>{
console.log(data)
setModelHead("Craft Update successfully") ;
setModelMessage(" go to my craft to see added item  ")
openSuccessModal()
// form.reset()
})
.catch(error=>{
console.log(error,"from post server catch")
})




// mongodb & server connection 





}










    return (
        <div className='w-full min-h-[90vh] '>
        <h2 className='md:text-4xl text-center mt-[6%]'> Update Craft& Art </h2>
         <form  onSubmit={handleCraft} className="mx-auto mt-[2%] max-w-5xl space-y-2 my-20 rounded-lg border dark:bg-transparent dark:border-none p-8   shadow-md bg-[#00000034] md:dark:bg-slate-700">
            <div className='grid md:grid-cols-2 gap-4 md:p-3'>
    
    
            <fieldset className="space-y-1">
            <Label className=' dark:text-slate-200' htmlFor="photoURL">photoURL</Label>
            <div className="relative">
              <Input  required name='photoURL' placeholder={craft.photoURL} defaultValue={craft.photoURL} className="ps-11 rounded-sm" />
              <Icon>
                <Image size={19} color="#AFBACA" />
              </Icon>
            </div>
          </fieldset>
    
    
          <fieldset className="space-y-1">
            <Label className=' dark:text-slate-200' htmlFor="item_name">item name</Label>
            <div className="relative">
              <Input required id="item_name" name='item_name' defaultValue={craft.item_name} placeholder="Enter item name" type="text" className="ps-11 rounded-sm" />
              <Icon>
                <AddressBook size={19} color="#AFBACA" />
              </Icon>
            </div>
          </fieldset>
    
    
          <fieldset className="space-y-1">
            <Label  className=' dark:text-slate-200' htmlFor="subcategory_Name">subcategory Name</Label>
            <div className="relative">
              <Input required name='subcategory_Name'  defaultValue={craft.subcategory_Name} id="subcategory_Name" placeholder="Enter subcategory" type="text" className="ps-11 rounded-sm" />
              <Icon>
                <AlignLeft size={19} color="#AFBACA" />
              </Icon>
            </div>
          </fieldset>
    
    
         
    
    
          <fieldset className="space-y-1">
            <Label className=' dark:text-slate-200' htmlFor="price">Price ($) </Label>
            <div className="relative">
              <Input required name='price' id="price"  defaultValue={craft.price} placeholder="Enter price" type="number" className="ps-11 rounded-sm" />
              <Icon>
                <CurrencyCircleDollar size={19} color="#AFBACA" />
              </Icon>
            </div>
          </fieldset>
          <fieldset className="space-y-1">
            <Label className=' dark:text-slate-200' htmlFor="rating">rating (0-5) </Label>
            <div className="relative">
              <Input required name='rating' id="rating"  defaultValue={craft.rating} placeholder="Enter rating" type="number" className="ps-11 rounded-sm" />
              <Icon>
                <Star size={19} color="#AFBACA" />
              </Icon>
            </div>
          </fieldset>
    
    
          <fieldset className="space-y-1">
            <Label className=' dark:text-slate-200' htmlFor="processing_time">processing_time (Days)</Label>
            <div className="relative">
              <Input required name='processing_time'  defaultValue={craft.processing_time} id="processing_time" placeholder="Enter processing_time" type="number" className="ps-11 rounded-sm" />
              <Icon>
                <ClockClockwise size={19} color="#AFBACA" />
              </Icon>
            </div>
          </fieldset>
    
    
    
    
          
    
    
    
    
          <fieldset className="space-y-1">
            <Label  className=' dark:text-slate-200' htmlFor="customization">customization (yes/no)</Label>
            <div className="relative">
              <Input required name='customization'  defaultValue={craft.Customization} id="customization" placeholder="Customizable ? yes / no " type="text" className="ps-11 rounded-sm" />
              <Icon>
                <Pen size={19} color="#AFBACA" />
              </Icon>
            </div>
          </fieldset>
    
    
          <fieldset className="space-y-1">
            <Label className=' dark:text-slate-200' htmlFor="stockStatus">stockStatus ( In stock / Made to Order)</Label>
            <div className="relative">
              <Input name='stockStatus' id="stockStatus"   defaultValue={craft.stockStatus} placeholder="Enter stockStatus" type="text" className="ps-11 rounded-sm" />
              <Icon>
                <Ticket size={19} color="#AFBACA" />
              </Icon>
            </div>
          </fieldset>
    
      
    
    
    
    
    
    
            </div>
    
    
           
    
    
          <fieldset className="space-y-1.5 p-2">
          <Label className=' dark:text-slate-200' htmlFor="short_description">short description</Label>
          <Textarea className='rounded-sm' required defaultValue={craft.short_description}  name='short_description' id="short description" placeholder="Enter short description" />
         
        </fieldset>
          <Button size="sm" color="secondary" type="submit" className='px-8'>
         Update 
          </Button>
        </form>
       </div>
    );
};

export default UpdateCarft;