
"use client";

import { MagnifyingGlass,User } from "phosphor-react";
import { Navbar, Button,Tooltip,Toggle,Avatar } from "keep-react";
import { Link, NavLink } from "react-router-dom";
import { useContext, useState } from "react";
import DarkMode from "../Theme/Theme";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import logo from '../../assist/images/light.svg' ;
import logoSM from "../../assist/images/pp-high-resolution-logo-transparent.png"
const Header = () => {
  const {logOut,user} =useContext(AuthContext)
    // const [toggle, setToggle] = useState(true)
   
   


    const link = <>
    <NavLink className={`navlink text-black dark:text-[#ddd]`} to="/">Home</NavLink>
  {
    !user ?  <><NavLink className={`navlink text-black dark:text-[#ddd]`} to="/login">login</NavLink>
    <NavLink className={`navlink text-black dark:text-[#ddd]`} to="/register">register</NavLink></> : null
  }
    <NavLink className={`navlink text-black dark:text-[#ddd]`} to="/allartandcraftitems">All Art & craft Items</NavLink>
    <NavLink className={`navlink text-black dark:text-[#ddd]`} to="/addcraftitem">Add Craft Item</NavLink>
    {
      user? <NavLink className={`navlink text-black dark:text-[#ddd]`} to="/myartandcraftlist">My Art&Craft List</NavLink> : null
    }
    
    
    </>
  return (
    <Navbar className="header  bg-transparent my-2" fluid={true}>
      <Navbar.Container className="flex items-center justify-between">
        <Navbar.Container className="flex items-center">
          <Navbar.Brand>
           <img className="md:max-w-40 md:block hidden max-w-29 " src={logo} alt="" /> 
           <img className="md:max-w-40 md:hidden max-w-29 w-16 " src={logoSM} alt="" /> 



          </Navbar.Brand>
          <Navbar.Divider></Navbar.Divider>
          <Navbar.Container
            tag="ul"
            className="lg:flex hidden items-center justify-between gap-8"
          >
            {link}
          </Navbar.Container>
          <Navbar.Collapse collapseType="sidebar">
            <Navbar.Container tag="ul" className="flex flex-col gap-5">
             {link}
            </Navbar.Container>
          </Navbar.Collapse>
        </Navbar.Container>

        <Navbar.Container className="flex gap-2">
{/* Tooltip */}
{  <Tooltip placement="bottom" trigger="click" showArrow={false}>
      <Tooltip.Action  className=" bg-transparent p-0">
     

     {
      user? <img src={user.photoURL} className="w-10 object-cover rounded-lg border-[1px] border-blue-200  dark:border-[#fff0] h-10 p-1" alt="" /> : 
      <User  className="dark:text-fuchsia-400   text-fuchsia-500 px-2 py-1 w-10 h-10  " />
     }
           
           
            
            
                
            

        </Tooltip.Action>

      <Tooltip.Content className=" bg-transparent border-[1px] rounded-[5px]" >
       
  


        
        <Link to="profile" className="text-xs  font-semibold rounded-full py-1 px-2 bg-[#ddd]  text-[#000000c8] ">Profile</Link>
        <div className="mt-2 capitalize">
        <div className="text-xs  font-semibold rounded-full py-1 px-2 bg-[#ddd]  text-[#000000c8] "> 

        
       {
        user ?  <p className="text-xs underline btn" onClick={logOut}>logOut</p> :  <Link className="text-xs underline btn" to="/login" >Login</Link>
       }
        
        
        </div>
           
            

        </div>
        
      </Tooltip.Content>
    </Tooltip>}
{/* Tooltip */}



<DarkMode></DarkMode>

          
        
          <Navbar.Toggle />
        </Navbar.Container>
      </Navbar.Container>
    </Navbar>
  );
}



export default Header