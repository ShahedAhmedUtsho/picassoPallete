
"use client";

import { MagnifyingGlass,User } from "phosphor-react";
import { Navbar, Button,Tooltip,Toggle } from "keep-react";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

const Header = () => {
    const [toggle, setToggle] = useState(false)




    const link = <>
    <NavLink className={`navlink`} to="/">Home</NavLink>
    <NavLink className={`navlink`} to="/login">login</NavLink>
    <NavLink className={`navlink`} to="/register">register</NavLink>
    <NavLink className={`navlink`} to="/allartandcraftitems">All Art & craft Items</NavLink>
    <NavLink className={`navlink`} to="/addcraftitem">Add Craft Item</NavLink>
    <NavLink className={`navlink`} to="/myartandcraftlist">My Art&Craft List</NavLink>
    
    
    </>
  return (
    <Navbar className="header my-2" fluid={true}>
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
      <Tooltip.Action className=" bg-transparent p-0">
      <Button color="secondary" variant="outline" shape="icon">
            
            <User size={20} />
            
            
            </Button>
        </Tooltip.Action>
      <Tooltip.Content className=" bg-transparent border-[1px] rounded-[5px]" >
       
  


        
        <Link to="profile" className="text-xs  font-semibold rounded-full py-1 px-2 bg-[#ddd]  text-[#000000c8] ">Profile</Link>
        <div className="mt-2 capitalize">
            <p className="text-sm mb-1">theme </p>
            <div className="flex justify-between items-center text-sm gap-2 ">
                <p>light</p>
                <Toggle bgColor="slate" label="Slate" size="sm" onChange={setToggle} />
                <p>dark</p>

            </div>
            

        </div>
        
      </Tooltip.Content>
    </Tooltip>}
{/* Tooltip */}





          
        
          <Navbar.Toggle />
        </Navbar.Container>
      </Navbar.Container>
    </Navbar>
  );
}



export default Header