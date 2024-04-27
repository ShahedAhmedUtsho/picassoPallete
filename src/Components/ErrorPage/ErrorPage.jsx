import { NavLink } from "react-router-dom";
'use client'
import { Button } from 'keep-react'

const ErrorPage = () => {
    return (
        <div className=" bg-fuchsia-900 h-screen error flex flex-col justify-center gap-10 items-center ">

            <div className="text-[#ddd] absolute    scale-75 bottom-5  right-5 opacity-80">
                
            </div>
            <h2 className="md:text-4xl text-3xl text-center font-bold  text-[#c9c9c9]"> Nothing to see here</h2>
            <p className="md:max-w-[600px] max-w-[350px] text-sm md:text-lg text-[#828282] text-center">Page you are trying to open does not exist. You may have mistyped the address, or the page has been moved to another URL. If you think this is an error contact support.</p>
            <NavLink to='/'>
            <Button color="secondary" variant="outline" className="head-btn font-light  text-sm md:text-base text-white  bg-fuchsia-800">
        Go home
      </Button>
            
            </NavLink>
            
          
        </div>
    );
};

export default ErrorPage;