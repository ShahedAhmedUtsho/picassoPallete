
import React, { useRef, useState } from 'react';
"use client";
import {  Badge, Button,  Table ,Tooltip ,Divider } from "keep-react";
import {  Cube, ArrowRight ,Pen } from "phosphor-react";
import { Link } from "react-router-dom";
import SwiperCom from "../Swiper/Swiper";





import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import { Mousewheel, Pagination ,Autoplay, } from 'swiper/modules';
const Bannar = () => {
    return (
        <div className="border-[1px] mt-10 border-black  bg-transparent grid md:grid-cols-7 md:pt-10  w-full md:min-h-[550px] lg:min-h-[600px] mb-10">
            <div  className="py-10 mt-5 md:mt-0 md:py-0  px-4 h-full md:col-span-3 flex flex-col gap-6 md:gap-5 lg:gap-10   justify-center  ">
            <h2 className="lg:text-6xl md:text-4xl text-4xl font-medium dark:text-gray-100 text-slate-800 leading-[50px]  md:leading-[50px] lg:leading-[70px]">Unique <br />
            <Pen className=" mx-2 text-32 lg:inline-block  hidden" size={60} /> 
            <Pen className=" mx-1 text-32 md:inline-block hidden lg:hidden" size={40} />
            <Pen className=" mx-2 text-32 inline-block md:hidden" size={50} />
 Exhibition of <br />
Digital Arts</h2>
<p className="md:max-w-[400px] max-w-72 text-slate-500 text-xs md:text-xs">
Great platform to show your unique art. Register, send us your best arts, we will select. Just that simple...
</p>


<Link className=" relative self-start" to="/allartandcraftitems"><Button  variant="outline" size="sm" className=" bg-transparent  border-current  dark:text-slate-100 dark:border-slate-400 text-slate-100 px-8   bg-slate-600 hover:text-slate-100 hover:bg-slate-700 ">
              <span className="pr-2">
                <Cube size={24} />
              </span>
             Art List
            </Button></Link>

            </div>








            <div className="  h-full md:col-span-4 ">
                <div className=" box md:w-[400px] w-full shadow-sm mx-auto  h-[400px]  md:h-[500px] mt-10">



     <>
    <Swiper
        direction={'vertical'}
        slidesPerView={1}
        spaceBetween={30}
        mousewheel={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        modules={[Autoplay,Mousewheel, Pagination]}
        className="mySwiper z-20"

      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>




                </>

                </div>
               


            </div>

            
        </div>
    );
};

export default Bannar;