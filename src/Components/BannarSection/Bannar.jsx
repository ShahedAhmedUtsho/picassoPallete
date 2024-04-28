
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
        <div className=" mt-10 border-black  bg-transparent grid md:grid-cols-7 md:pt-10  w-full md:min-h-[550px] lg:min-h-[600px] mb-10">
            <div  className="py-10 mt-5 md:mt-0 md:py-0  px-4 h-full md:col-span-3 flex flex-col gap-6 md:gap-5 lg:gap-10   justify-center  ">
            <h2 className="lg:text-6xl md:text-4xl text-4xl font-medium dark:text-gray-100 text-slate-800 leading-[50px]  md:leading-[50px] lg:leading-[70px]">Unique <br />
            <Pen className=" mx-2 text-32 lg:inline-block  hidden" size={60} /> 
            <Pen className=" mx-1 text-32 md:inline-block hidden lg:hidden" size={40} />
            <Pen className=" mx-2 text-32 inline-block md:hidden" size={50} />
 Exhibition of <br />
Creative Arts</h2>
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
                <div className=" box  w-full shadow-sm mx-auto  h-[400px]  md:h-[500px] mt-10">



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
        <SwiperSlide className=' flex flex-col relative'>
            <img className=' absolute w-full min-h-full object-cover -z-20' src="https://i.ibb.co/fQv4czb/impasto-acrylic-painting-fd4bd315-32ad-4fc2-b22f-96f10130deac-1600x.webp" alt="" />

<h2 className='text-3xl mt-20  text-white px-2  py-5 bg-[#0000007b]'>Discover the Beauty of Original Art</h2>
<p className='text-base   px-2 py-4 bg-[#ffffffbd] absolute right-0 left-0   bottom-0'>Immerse yourself in the world of art with our handpicked collection of exquisite paintings. Each piece tells a unique story, waiting for you to explore. From vibrant landscapes to thought-provoking abstracts, find the perfect piece to adorn your space</p>
        </SwiperSlide>
        <SwiperSlide className=' flex flex-col relative'>
            <img className=' absolute w-full min-h-full object-cover -z-20' src="https://i.ibb.co/wp2ryMX/malen-kunstkurs.webp" alt="" />

<h2 className='text-3xl mt-20  text-white px-2  py-5 bg-[#0000007b]'>Meet the Artist Behind the Brush</h2>
<p className='text-base   px-2 py-4 bg-[#ffffffbd] absolute right-0 left-0   bottom-0'>Get to know the creative genius behind the stunning artworks you love. Our featured artist, brings passion and inspiration to every stroke. Explore their portfolio and delve into the mind of a true master</p>
        </SwiperSlide>
        <SwiperSlide className=' flex flex-col relative'>
            <img className=' absolute w-full min-h-full object-cover -z-20' src="https://i.ibb.co/g9p1Frw/ASF-how-many-images-launch-e1506448264641.jpg" alt="" />

<h2 className='text-3xl mt-20  text-white px-2  py-5 bg-[#0000007b]'>Let Art Transform Your Space</h2>
<p className='text-base   px-2 py-4 bg-[#ffffffbd] absolute right-0 left-0   bottom-0'>Elevate your surroundings with the timeless allure of fine art. Whether youre seeking a statement piece for your home or office, our curated collection offers endless possibilities. Experience the transformative power of art and turn your space into a masterpiece.</p>
        </SwiperSlide>
        <SwiperSlide className=' flex flex-col relative'>
            <img className=' absolute w-full min-h-full object-cover -z-20' src="https://i.ibb.co/r4GSyBg/7567073-2x.jpg" alt="" />

<h2 className='text-3xl mt-20  text-white px-2  py-5 bg-[#0000007b]'>Journey Through Time: Unveiling Historical Masterpieces</h2>
<p className='text-base   px-2 py-4 bg-[#ffffffbd] absolute right-0 left-0   bottom-0'>Embark on a fascinating exploration of the past through the lens of art. Our collection features timeless masterpieces that capture pivotal moments in history with unparalleled depth and emotion. From majestic portraits of monarchs to vivid depictions of bygone civilizations, each painting tells a rich and captivating story waiting to be discovered</p>
        </SwiperSlide>
       
      </Swiper>




                </>

                </div>
               


            </div>

            
        </div>
    );
};

export default Bannar;