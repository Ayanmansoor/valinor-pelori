import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { LiaUserSolid } from "react-icons/lia";

import AnalyticSliderCard from './AnalyticSliderCard';
// import required modules
import { Pagination } from 'swiper/modules';


function AnalyticsSlider() {

    const cartdata=[
        {
            icon:<LiaUserSolid className='text-[40px] p-1 font-thin rounded-xl ' />,
            className:'bg-slate-100',
            data:{
                url:"",
                ActiveUser:190,
                name:"Active users",
                id:""
            }

        },
        {
            icon:<LiaUserSolid className='text-[40px] p-1 font-thin rounded-xl ' />,
            className:'bg-slate-100',
            data:{
                url:"",
                ActiveUser:190,
                name:"Active users",
                id:""
            }

        }
        ,  {
            icon:<LiaUserSolid className='text-[40px] p-1 font-thin rounded-xl ' />,
            className:'bg-slate-100',
            data:{
                url:"",
                ActiveUser:190,
                name:"Active users",
                id:""
            }

        }
    ]

  return (
    <div className='w-full relative h-auto  py-2 '>
    <Swiper
      slidesPerView={"auto"}
      spaceBetween={10}
      grabCursor={true}

      modules={[Pagination]}
      className="mySwiper  mx-auto relative h-full    "
    >
        {
            cartdata.map((data,index)=>(
            <SwiperSlide className='h-auto max-w-fit overflow-hidden flex items-center  rounded-lg bg-secondary  border border-[#e7e7e7] relative ' key={index}>
                <AnalyticSliderCard data={data}/>
            </SwiperSlide>
            ))
        }
      

    </Swiper>
  </div>
  )
}

export default AnalyticsSlider