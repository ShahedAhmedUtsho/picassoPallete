



'use client'
import { 
    Envelope,
     Image,
     AddressBook,
     AlignLeft,
     Cards,
     CurrencyCircleDollar,
     Star,
     ClockClockwise ,User, 
     Pen,
     Ticket


 } from 'phosphor-react'
import { Button, Icon, Input, Label, Radio } from 'keep-react'
import { useContext } from 'react'
import { AuthContext } from '../../AuthProvider/AuthProvider'

 const AddCraftItem = () => {
    const {user, openErrorModal, setModelMessage,
        setModelHead,
        openSuccessModal,} = useContext(AuthContext)
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
        const newCraft = {
            email,username,
            photoURL,item_name,subcategory_Name,short_description,
            price,rating,processing_time,Customization,
            stockStatus

        }
        console.log(newCraft)


//mongodb & server connection 
fetch('http://localhost:3000/allartandcraftitems',{
    method: 'Post',
    headers:{
        'content-type' : 'application/json'
    },
    body:JSON.stringify(newCraft)

})
.then(res=>res.json()) 
.then(data=>{
    console.log(data)
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
    <h2 className='md:text-4xl text-center mt-[6%]'> Add your Work </h2>
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
        <Label  className=' dark:text-slate-200' htmlFor="subcategory_Name">subcategory Name</Label>
        <div className="relative">
          <Input required name='subcategory_Name ' id="subcategory_Name" placeholder="Enter subcategory" type="text" className="ps-11 rounded-sm" />
          <Icon>
            <AlignLeft size={19} color="#AFBACA" />
          </Icon>
        </div>
      </fieldset>


      <fieldset className="space-y-1">
        <Label className=' dark:text-slate-200' htmlFor="short_description">short description</Label>
        <div className="relative">
          <Input required  name='short_description' id="short description" placeholder="Enter short description" type="text" className="ps-11 rounded-sm" />
          <Icon>
            <Cards size={19} color="#AFBACA" />
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
          <Input required name='customization' id="customization" placeholder="Enter User Email" type="text" className="ps-11 rounded-sm" />
          <Icon>
            <Pen size={19} color="#AFBACA" />
          </Icon>
        </div>
      </fieldset>


      <fieldset className="space-y-1">
        <Label className=' dark:text-slate-200' htmlFor="stockStatus">stockStatus ( In stock / Made to Order)</Label>
        <div className="relative">
          <Input name='stockStatus' id="stockStatus" placeholder="Enter UserName" type="text" className="ps-11 rounded-sm" />
          <Icon>
            <Ticket size={19} color="#AFBACA" />
          </Icon>
        </div>
      </fieldset>

  






        </div>
      
      <Button size="sm" color="secondary" type="submit" className='px-8'>
      Add
      </Button>
    </form>
   </div>
  )
}














export default AddCraftItem;