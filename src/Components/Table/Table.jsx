
"use client";
import {  Badge, Button,  Table ,Tooltip } from "keep-react";
import {  Cube, ArrowRight  } from "phosphor-react";
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";
const AllCraftTable = ( {allCraft}) => {
  
  return (
    <div>
        <Table showCheckbox={false} showBorder={false} striped={true} className="  mb-10 hidden md:table">
      <Table.Caption>
        <div className="my-5 flex items-center justify-between px-6">
          <div className="flex items-center gap-5">
            <p className="text-body-1 font-semibold text-metal-600">Team member</p>
            <Badge size="xs" color="secondary" className="py-[0.2em] px-[0.8em]">
              {allCraft.length}
            </Badge>
          </div>
          <div  className="flex items-center gap-5">
            <Link to="/addcraftitem"><Button  variant="outline" size="sm" className=" bg-transparent  border-current text-fuchsia-700  hover:text-fuchsia-500 hover:bg-fuchsia-100 ">
              <span className="pr-2">
                <Cube size={24} />
              </span>
             Add New
            </Button></Link>
            <Link to="/myartandcraftlist">
            <Button variant="outline" size="sm" className=" bg-transparent  border-current text-fuchsia-700  hover:text-fuchsia-500 hover:bg-fuchsia-100 ">
              <span className="pr-2">
                <Cube size={24} />
              </span>
              Your Craft
            </Button>
           </Link>
            
          </div>
        </div>
      </Table.Caption>
      <Table.Head>
      <Table.HeadCell>Serial</Table.HeadCell>
        <Table.HeadCell>Craft Name</Table.HeadCell>
        <Table.HeadCell className="min-w-[152px]">Price</Table.HeadCell>
        <Table.HeadCell className="min-w-[100px]">Customization</Table.HeadCell>
        <Table.HeadCell className="min-w-[240px]">Provider Email</Table.HeadCell>
       
        <Table.HeadCell className="min-w-[100px]" />
      </Table.Head>



      <Table.Body className="divide-gray-25 divide-y">


        
         {
            allCraft.map((aCraft ,index)=>    <Table.Row key={aCraft._id} className="bg-white">
            <Table.Cell>
                <p>{index + 1}</p>
              </Table.Cell>
              <Table.Cell>
                <p>{aCraft.item_name}</p>
              </Table.Cell>
              <Table.Cell>
                <p>{aCraft.price} $ </p>
              </Table.Cell>
              <Table.Cell>
                <p>{aCraft.Customization}  </p>
              </Table.Cell>
              <Table.Cell> {aCraft.email}</Table.Cell>
              
             
              <Table.Cell>



              <Tooltip >
      <Tooltip.Action className=" bg-transparent  border-current text-fuchsia-700  hover:text-fuchsia-500 hover:bg-fuchsia-100  rounded-full h-8 w-8 border-[1px] flex justify-center items-center">
         
      <Link to={`/allartandcraftitems/${aCraft._id}`}>
                  <ArrowRight  size={15} />
               </Link>


        </Tooltip.Action>
      <Tooltip.Content>
        <p className="text-body-5 font-medium text-white"> View details</p>
      </Tooltip.Content>
    </Tooltip>
              
              </Table.Cell>
            </Table.Row>
     )
         }
      

      </Table.Body>





    </Table>









    <Table showCheckbox={false} showBorder={false} striped={true} className=" dark:!bg-transparent  md:hidden mt-10" >
      <Table.Caption className=" bg-transparent">
        <div className="my-5 flex items-center justify-between  pr-3">
          <div className="flex items-center ">
            <p className=" py-2 px-3  text-xl  font-semibold  dark:text-metal-100 text-metal-600">All Craft</p>
            <Badge  color="secondary" className="bg-red-200 dark:bg-transparent  dark:text-fuchsia-300 dark:border-[1px]  dark:border-fuchsia-300 text-[8px]  px-[1em]">
            {allCraft.length}
            </Badge>
          </div>

          <div className="flex items-center gap-5">
            
            <Button variant="outline" size="xs" className="text-sm border-fuchsia-700 hover:bg-fuchsia-100 hover:text-fuchsia-900  dark:bg-transparent dark:text-fuchsia-300  text-fuchsia-700  dark:border-fuchsia-300">
              <span className="pr-2">
                <Cube size={16} />
              </span>
             Add
            </Button>
            
          </div>
        </div>
      </Table.Caption>
</Table>


{
            allCraft.map((aCraft ,index)=>    <Table key={aCraft._id} showCheckbox={false} showBorder={false} striped={true} className=" dark:!bg-transparent  md:hidden  border-b-[1px] mb-4 border-slate-300" >

            <Table.Body className="divide-gray-25 divide-y bg-transparent " >
            <Table.Row className=" dark:!bg-transparent flex    w-screen items-center ">
               
               
               <Table.Cell className=" ">
                 <p className="font-semibold">Serial No :</p>
               </Table.Cell>
      
               <Table.Cell className=" text-right ">
               {index+1}
                 </Table.Cell>
               
               
               
              
             </Table.Row>
            </Table.Body>
      
            <Table.Body className="divide-gray-25 divide-y dark:!bg-transparent">
            <Table.Row className=" flex dark:!bg-transparent justify-between    w-screen items-center">
               <Table.Cell className="font-semibold">
                 <p>Craft Name :  </p>
               </Table.Cell>
      
               <Table.Cell className=" text-right ">
              {aCraft.item_name}
                 </Table.Cell>
             </Table.Row>
            </Table.Body>
           
            <Table.Body className="divide-gray-25 divide-y">
            <Table.Row className=" flex justify-between dark:!bg-transparent    w-screen items-center">
               <Table.Cell className="font-semibold">
                 <p>Provider Email :</p>
               </Table.Cell>
      
               <Table.Cell className=" text-right ">
               {aCraft.email}
                 </Table.Cell>
             </Table.Row>
            </Table.Body>
            <Table.Body className="divide-gray-25 divide-y dark:!bg-transparent">
            <Table.Row className=" flex dark:!bg-transparent justify-between    w-screen items-center">
               <Table.Cell className="font-semibold">
                 <p>Customization  :  </p>
               </Table.Cell>
      
               <Table.Cell className=" text-right ">
              {aCraft.Customization}
                 </Table.Cell>
             </Table.Row>
            </Table.Body>
            <Table.Body className="divide-gray-25 divide-y">
            <Table.Row className=" flex justify-between dark:!bg-transparent    w-screen items-center">
               <Table.Cell className="font-semibold">
                 <p>Price : </p>
               </Table.Cell>
      
               <Table.Cell className=" text-right ">
               <p>{aCraft.price} $ </p>
                 </Table.Cell>
             </Table.Row>
            </Table.Body>
      
      
      
            <Table.Body className="divide-gray-25 divide-y mt-5">
            <Table.Row className="bg-white flex  justify-end dark:!bg-transparent">
            <Table.Cell>
                      <Button variant="outline" size="sm"  className="dark:!bg-transparent  border-current text-[10px]  dark:text-fuchsia-300 text-fuchsia-700font-semibold">
                       Details
                      </Button>
           </Table.Cell>
              
             </Table.Row>
            </Table.Body>
      
      
      
      
            
          
      
      
          </Table>
     )
         }






    </div>
    
  )
}

AllCraftTable.propTypes = {
    allCraft : PropTypes.array
}
export default AllCraftTable