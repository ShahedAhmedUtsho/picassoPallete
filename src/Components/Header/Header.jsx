
"use client";

import { MagnifyingGlass,User } from "phosphor-react";
import { Navbar, Button,Tooltip,Toggle,Avatar } from "keep-react";
import { Link, NavLink } from "react-router-dom";
import { useContext, useState } from "react";
import DarkMode from "../Theme/Theme";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Header = () => {
  const {logOut,user} =useContext(AuthContext)
    const [toggle, setToggle] = useState(true)




    const link = <>
    <NavLink className={`navlink`} to="/">Home</NavLink>
    <NavLink className={`navlink`} to="/login">login</NavLink>
    <NavLink className={`navlink`} to="/register">register</NavLink>
    <NavLink className={`navlink`} to="/allartandcraftitems">All Art & craft Items</NavLink>
    <NavLink className={`navlink`} to="/addcraftitem">Add Craft Item</NavLink>
    {
      user? <NavLink className={`navlink`} to="/myartandcraftlist">My Art&Craft List</NavLink> : null
    }
    
    
    </>
  return (
    <Navbar className="header  bg-transparent my-2" fluid={true}>
      <Navbar.Container className="flex items-center justify-between">
        <Navbar.Container className="flex items-center">
          <Navbar.Brand>
           <p>LOGO</p>
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
      user? <img src={user.photoURL} className="w-10 object-cover rounded-lg border-[1px] border-blue-200 h-10 p-1" alt="" /> : 
      <User  className="text-red-500 px-2 py-1 w-10 h-10 border-[1px] border-black rounded-sm" />
     }
           
           
            
            
                
            

        </Tooltip.Action>

      <Tooltip.Content className=" bg-transparent border-[1px] rounded-[5px]" >
       
  


        
        <Link to="profile" className="text-xs  font-semibold rounded-full py-1 px-2 bg-[#ddd]  text-[#000000c8] ">Profile</Link>
        <div className="mt-2 capitalize">
        <div className="text-xs  font-semibold rounded-full py-1 px-2 bg-[#ddd]  text-[#000000c8] "> 

        
        <p className="text-xs underline btn" onClick={logOut}>logOut</p></div>
           
            

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