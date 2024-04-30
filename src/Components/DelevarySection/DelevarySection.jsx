
"use client";
import { Steps } from "keep-react";
import { Palette,ShoppingBagOpen ,Truck} from "phosphor-react";
import { Fade } from "react-awesome-reveal";
const DeliverySection = () => {
  return (
    <div className="mb-10">
       <Fade>
       <p className="text-center py-10 md:pt-20 md:text-2xl dark:text-slate-300  capitalize underline"> how we deliver our product</p>
   <div className="w-full min-h-96 flex justify-center items-center ">
   
     <Steps stepType="icon" borderType="dashed" className="w-full hidden md:flex gap-2  justify-center items-center mx-auto">
      <Steps.Item
        completed
        icon={<ShoppingBagOpen size={20} />}
        title="Place Your Order"
        description="Explore our collection, add your favorite art to your cart, and proceed to checkout"
      />
      <Steps.Item
        active
        icon={<Palette size={20} />}
        title="Artwork Preparation"
        description=" Our skilled artisans prepare your chosen artwork with meticulous care and attention to detail."
      />
      <Steps.Item
        icon={<Truck size={20} />}
        title="VSecure Delivery"
        description="We securely package your artwork and ensure prompt and safe delivery to your doorstep."
      />
    </Steps>

    <Steps stepType="icon" borderType="dashed" className="w-full  grid gap-8 md:hidden   justify-center items-center mx-auto">
     <div>
     <Steps.Item
        completed
        icon={<ShoppingBagOpen size={20} />}
        title="Place Your Order"
        description="Explore our collection, add your favorite art to your cart, and proceed to checkout"
      />
     </div>
     <div>
     <Steps.Item
        active
        icon={<Palette size={20} />}
        title="Artwork Preparation"
        description=" Our skilled artisans prepare your chosen artwork with meticulous care and attention to detail."
      />
     </div>
      <div>
      <Steps.Item
        icon={<Truck size={20} />}
        title="VSecure Delivery"
        description="We securely package your artwork and ensure prompt and safe delivery to your doorstep."
      />
      </div>
    </Steps>
   </div>
    </Fade>
        
    </div>
  );
}

export default  DeliverySection 




