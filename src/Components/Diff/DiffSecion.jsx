import React from 'react';
'use client'
import { useState } from 'react'
import {  Badge, Button,  Table ,Tooltip ,Divider,Drawer,Label, Textarea,Icon, Input, } from "keep-react";
import {  Cube, ArrowRight ,Pen,ArrowUp } from "phosphor-react";
import { ImgComparisonSlider } from '@img-comparison-slider/react';
import { Envelope } from 'phosphor-react'


const DiffSecion = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className='w-full mb-20 rounded-xl'>
            <h2 className='mx-auto text-center dark:text-slate-300 text-lg mb-5 md:mb-10 md:text-2xl underline  '>Recreate Your Masterpiece</h2>

            <div className="grid  md:grid-cols-2 gap-6">
                <div className='bg order-2 px-5 md:px-0 flex flex-col gap-3   lg:gap-5'>
                    <h2 className='lg:text-6xl md:text-4xl text-3xl font-medium dark:text-gray-100 text-slate-800 leading-[40px]  md:leading-[50px] lg:leading-[70px]   '>Do  you have <br />  a favorite painting?</h2>
                    <p className='dark:text-slate-400 text-xs md:text-sm pr-7  md:pr-20 '>artwork that you'd love to have recreated? Our talented team of painters is here to bring your vision to life. Simply provide us with the details or a picture of the masterpiece, and we'll handle the rest.</p>

                   <Button  variant="outline" size="sm" onClick={() => setIsOpen(!isOpen)} className=" w-44  md:mt-10 mt-5 lg:mt-20 bg-transparent  border-current  dark:text-slate-100 dark:border-slate-400 text-slate-100 px-2   bg-slate-600 hover:text-slate-100 hover:bg-slate-700 ">
              <span className="pr-2">
                <ArrowUp size={24} />
              </span>
             Click to open
             </Button>
                </div>
                <div  className='w-full mx-auto rounded-xl order-1  relative'>
                <h2 className=' absolute z-50 right-0 mt-3 md:text-3xl   bg-[#bf4ad1b3] capitalize text-white px-5 rounded-sm'>re-created</h2>
                <h2 className='absolute z-50 left-0 mt-3 md:text-3xl  bg-[#bf4ad1b3] capitalize text-white px-5 rounded-sm'>  original </h2>
                <ImgComparisonSlider className='w-full mx-auto rounded-xl order-1  '>
                
                <img slot="first" src="https://i.ibb.co/4FXDWGd/7567073-2x-1.jpg" className='md:w-full   rounded-xl md:min-h-[400px] lg:min-h-[400px] min-h-[300px]  bg-center object-cover' />
                <img slot="second" src="https://i.ibb.co/Tq1LQJG/last-supper-photo-u1.jpg" className='md:w-full  bg-center rounded-xl md:min-h-[300px] lg:min-h-[500px] min-h-[300px] object-cover' />
              </ImgComparisonSlider>
                </div>
          
            </div>
            <>
     
      <Drawer isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <Drawer.Content className=" dark:bg-slate-900">
          <div className="mx-auto max-w-lg space-y-3 px-6 py-5 lg:px-0">
           
          <form className="mx-auto max-w-md space-y-3 rounded-md border bg-slate-200 border-metal-100 p-6">
      <fieldset className="space-y-1">
        <Label htmlFor="email">Email</Label>
        <div className="relative">
          <Input id="email" placeholder="Enter email" className="ps-11" />
          <Icon>
            <Envelope size={19} color="#AFBACA" />
          </Icon>
        </div>
      </fieldset>
      <fieldset className="space-y-1">
        <Label htmlFor="m1">Message</Label>
        <Textarea id="m1" placeholder="Write your message here" />
      </fieldset>
      <Button type="submit" onClick={() => {
        setIsOpen(false)
      }} className="bg-metal-900" color="secondary">
              Message
            </Button>
    </form>
           
          </div>
        </Drawer.Content>
      </Drawer>
    </>
        </div>
    ); 
};

export default DiffSecion;