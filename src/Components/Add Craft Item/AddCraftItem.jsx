



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
import { Button, Icon, Input, Label,Textarea,Radio  } from 'keep-react'
import { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../AuthProvider/AuthProvider'

import { Typewriter } from 'react-simple-typewriter'


 const AddCraftItem = () => {



  // 1 subcatagory thing
const [sub,setSub] = useState("none");

// subcatagory thing

  useEffect(() => {
    document.title ="PP - Add Art & Craft"
   
   }, [])
    const {user, openErrorModal, setModelMessage,
        setModelHead,
        openSuccessModal,} = useContext(AuthContext)

      
    const handleCraft = event =>{
        event.preventDefault() ;
        const form = event.target ; 
        const photoURL = form.photoURL.value ;
        const item_name = form.item_name.value ;
        const subcategory_Name = sub ;
        const uid = user.uid ;
        if(subcategory_Name ==="none"){
          setModelHead("Error") ;
          setModelMessage("you have to select sub category")
          openErrorModal()
          return
        }
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
        if( stockStatus.toLowerCase() !== "in stock" && stockStatus.toLowerCase() !== "made to order" ) {
            setModelHead("Error") ;
            setModelMessage("stockStatus should  'in Stock' / 'Made to Order' ")
            openErrorModal()

            return
        }
        const newCraft = {
            email,username,
            photoURL,item_name,subcategory_Name,short_description,
            price,rating,processing_time,Customization,
            stockStatus,
            uid

        }
        



        // https://assaiment10-backend.vercel.app/
//mongodb & server connection 






fetch('https://assaiment10-backend.vercel.app/allartandcraftitems',{
    method: 'Post',
    headers:{
        'content-type' : 'application/json'
    },
    body:JSON.stringify(newCraft)

})
.then(res=>res.json()) 
.then(data=>{
    
    setModelHead("Craft added successfully") ;
    setModelMessage(" go to all craft to see added item  ")
    openSuccessModal()
    form.reset()
})
.catch(error=>{
    console.log(error,"from post server catch")
})






//mongodb & server connection 





    }
  return (
   <div className='w-full min-h-[90vh] '>
    
    <h2 className='md:text-4xl dark:text-slate-300 text-center mt-[6%]'> Add your  <span style={{  fontWeight: 'bold' }}>
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={['Art', '&', 'Craft']}
            loop={5}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
            // onLoopDone={handleDone}
            // onType={handleType}
          />
        </span> </h2>
     <form  onSubmit={handleCraft} className="mx-auto mt-[2%] max-w-5xl space-y-2 my-20 rounded-lg border dark:bg-transparent dark:border-none p-8   shadow-md bg-[#00000034] md:dark:bg-slate-700">
        <div className='grid md:grid-cols-2 gap-4 md:p-3'>


        <fieldset className="space-y-1">
        <Label className=' dark:text-slate-200' htmlFor="photoURL">photoURL</Label>
        <div className="relative">
          <Input  required name='photoURL' placeholder="Enter photoURL" className="ps-11 rounded-sm" />
          <Icon>
            <Image size={19} color="#AFBACA" />
          </Icon>
        </div>
      </fieldset>


      <fieldset className="space-y-1">
        <Label className=' dark:text-slate-200' htmlFor="item_name">item name</Label>
        <div className="relative">
          <Input required id="item_name" name='item_name' placeholder="Enter item name" type="text" className="ps-11 rounded-sm" />
          <Icon>
            <AddressBook size={19} color="#AFBACA" />
          </Icon>
        </div>
      </fieldset>


      


     


      <fieldset className="space-y-1">
        <Label className=' dark:text-slate-200' htmlFor="price">Price ($) </Label>
        <div className="relative">
          <Input required name='price' id="price" placeholder="Enter price" type="number" className="ps-11 rounded-sm" />
          <Icon>
            <CurrencyCircleDollar size={19} color="#AFBACA" />
          </Icon>
        </div>
      </fieldset>

      
      <fieldset className="space-y-1">
        <Label className=' dark:text-slate-200' htmlFor="rating">rating (0-5) </Label>
        <div className="relative">
          <Input required name='rating' id="rating" placeholder="Enter rating" type="number" className="ps-11 rounded-sm" />
          <Icon>
            <Star size={19} color="#AFBACA" />
          </Icon>
        </div>
      </fieldset>


      <fieldset className="space-y-1">
        <Label className=' dark:text-slate-200' htmlFor="processing_time">processing_time (Days)</Label>
        <div className="relative">
          <Input required name='processing_time' id="processing_time" placeholder="Enter processing_time" type="number" className="ps-11 rounded-sm" />
          <Icon>
            <ClockClockwise size={19} color="#AFBACA" />
          </Icon>
        </div>
      </fieldset>



      




      <fieldset className="space-y-1">
        <Label  className=' dark:text-slate-200' htmlFor="customization">customization (yes/no)</Label>
        <div className="relative">
          <Input required name='customization' id="customization" placeholder="Customizable ? yes / no" type="text" className="ps-11 rounded-sm" />
          <Icon>
            <Pen size={19} color="#AFBACA" />
          </Icon>
        </div>
      </fieldset>


      <fieldset className="space-y-1">
        <Label className=' dark:text-slate-200' htmlFor="stockStatus">stockStatus ( In stock / Made to Order)</Label>
        <div className="relative">
          <Input name='stockStatus' id="stockStatus" placeholder="Enter stockStatus" type="text" className="ps-11 rounded-sm" />
          <Icon>
            <Ticket size={19} color="#AFBACA" />
          </Icon>
        </div>
      </fieldset>

  

<div>
<legend className="mb-1 text-body-3  text-metal-600">Subcategory Name</legend>

{/* subcatagory */}

<div className='flex gap-10 '>
<div className='grid gap-2 dark:text-slate-300'>


      <fieldset onClick={()=>setSub("Landscape Painting")}  className="flex items-center gap-2">
        <Radio id="LandscapePainting" name="country" className='  border-black dark:border-slate-300' />
        <Label htmlFor="LandscapePainting">Landscape Painting</Label>
      </fieldset>


      <fieldset onClick={()=>setSub("Portrait Drawing")} className="flex items-center gap-2">
        <Radio id="PortraitDrawing" className='  border-black dark:border-slate-300' name="country" />
        <Label htmlFor="PortraitDrawing">Portrait Drawing</Label>
      </fieldset>


      <fieldset onClick={()=>setSub("Watercolour Painting")} className="flex items-center gap-2">
        <Radio id="WatercolourPainting" name="country" className='  border-black dark:border-slate-300' />
        <Label htmlFor="WatercolourPainting">Watercolour Painting</Label>
      </fieldset>


</div>

    <div className='grid gap-2'>

    <fieldset onClick={()=>setSub("Oil Painting")} className="flex items-center gap-2">
        <Radio id="OilPainting" name="country" className='  border-black dark:border-slate-300' />
        <Label htmlFor="OilPainting">Oil Painting</Label>
      </fieldset>


      <fieldset onClick={()=>setSub("Charcoal Sketching")} className="flex items-center gap-2">
        <Radio id="CharcoalSketching" name="country" className='  border-black dark:border-slate-300' />
        <Label htmlFor="CharcoalSketching">Charcoal Sketching</Label>
      </fieldset>


      <fieldset onClick={()=>setSub("Cartoon Drawing")} className="flex items-center gap-2">
        <Radio id="CartoonDrawing" name="country" className='  border-black dark:border-slate-300' />
        <Label htmlFor="CartoonDrawing">Cartoon Drawing</Label>
      </fieldset>
    </div>
</div>

</div>




        </div>


       


      <fieldset className="space-y-1.5 p-2">
      <Label className=' dark:text-slate-200' htmlFor="short_description">short description</Label>
      <Textarea className='rounded-sm' required name='short_description' id="short description" placeholder="Enter short description" />
     
    </fieldset>


    
      <Button size="sm" color="secondary" type="submit" className='px-8'>
      Add
      </Button>
    </form>
   </div>
  )
}














export default AddCraftItem;