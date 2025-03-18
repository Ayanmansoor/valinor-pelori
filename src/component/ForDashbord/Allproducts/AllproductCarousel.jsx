import React from 'react'
import 'swiper/css';
import 'swiper/css/pagination';

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
// import required modules
import { Autoplay, Mousewheel, Pagination } from "swiper/modules";

import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';
function AllproductCarousel() {

  const data = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  return (
    <section className='w-full relative h-auto '>
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={10}
        grabCursor={true}

        modules={[Pagination]}
        className="mySwiper  mx-auto relative h-auto py-5   "
      >
        <SwiperSlide className='h-full w-[200px] overflow-hidden relative bg-yellow-200'>

          <img src="https://baccabucci.com/cdn/shop/files/2_1_922d6e85-d886-4ad3-9f0a-b3a132cae198_500x.jpg?v=1709383430" height={100} width={100} alt="Product image" className='h-full w-full reltaive hover:scale-[1.02] duration-200 delay-75 transition-all' />
          <div className='absolute bottom-0 h-[50%] w-full bg-gradient-to-t from-slate-900 to-transparent flex items-end p-1 justify-between gap-2'>
            <h2 className='text-p18 font-third font-medium text-secondary'>
              Footwear
            </h2>
            <ResponsiveContainer width="100%" height="60%">
              <LineChart width={300} height={100} data={data}>
                <Line type="monotone" dataKey="pv" stroke="#8884d8" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </SwiperSlide>
        <SwiperSlide className='h-full w-[200px] overflow-hidden relative bg-yellow-200'>
          <img src="https://baccabucci.com/cdn/shop/files/2_1_922d6e85-d886-4ad3-9f0a-b3a132cae198_500x.jpg?v=1709383430" height={100} width={100} alt="Product image" className='h-full w-full reltaive hover:scale-[1.02] duration-200 delay-75 transition-all' />
          <div className='absolute bottom-0 h-[50%] w-full bg-gradient-to-t from-slate-900 to-transparent flex items-end p-1 justify-between gap-2'>
            <h2 className='text-p18 font-third font-medium text-secondary'>
              Footwear
            </h2>
            <ResponsiveContainer width="100%" height="60%">
              <LineChart width={300} height={100} data={data}>
                <Line type="monotone" dataKey="pv" stroke="#8884d8" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </SwiperSlide>
        <SwiperSlide className='h-full w-[200px] overflow-hidden relative bg-yellow-200'>
          <img src="https://baccabucci.com/cdn/shop/files/2_1_922d6e85-d886-4ad3-9f0a-b3a132cae198_500x.jpg?v=1709383430" height={100} width={100} alt="Product image" className='h-full w-full reltaive hover:scale-[1.02] duration-200 delay-75 transition-all' />
          <div className='absolute bottom-0 h-[50%] w-full bg-gradient-to-t from-slate-900 to-transparent flex items-end p-1 justify-between gap-2'>
            <h2 className='text-p18 font-third font-medium text-secondary'>
              Footwear
            </h2>
            <ResponsiveContainer width="100%" height="60%">
              <LineChart width={300} height={100} data={data}>
                <Line type="monotone" dataKey="pv" stroke="#8884d8" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </SwiperSlide>
        <SwiperSlide className='h-full w-[200px] overflow-hidden relative bg-yellow-200'>
          <img src="https://baccabucci.com/cdn/shop/files/2_1_922d6e85-d886-4ad3-9f0a-b3a132cae198_500x.jpg?v=1709383430" height={100} width={100} alt="Product image" className='h-full w-full reltaive hover:scale-[1.02] duration-200 delay-75 transition-all' />
          <div className='absolute bottom-0 h-[50%] w-full bg-gradient-to-t from-slate-900 to-transparent flex items-end p-1 justify-between gap-2'>
            <h2 className='text-p18 font-third font-medium text-secondary'>
              Footwear
            </h2>
            <ResponsiveContainer width="100%" height="60%">
              <LineChart width={300} height={100} data={data}>
                <Line type="monotone" dataKey="pv" stroke="#8884d8" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </SwiperSlide>
        <SwiperSlide className='h-full w-[200px] overflow-hidden relative bg-yellow-200'>
          <img src="https://baccabucci.com/cdn/shop/files/2_1_922d6e85-d886-4ad3-9f0a-b3a132cae198_500x.jpg?v=1709383430" height={100} width={100} alt="Product image" className='h-full w-full reltaive hover:scale-[1.02] duration-200 delay-75 transition-all' />
          <div className='absolute bottom-0 h-[50%] w-full bg-gradient-to-t from-slate-900 to-transparent flex items-end p-1 justify-between gap-2'>
            <h2 className='text-p18 font-third font-medium text-secondary'>
              Footwear
            </h2>
            <ResponsiveContainer width="100%" height="60%">
              <LineChart width={300} height={100} data={data}>
                <Line type="monotone" dataKey="pv" stroke="#8884d8" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </SwiperSlide>
        <SwiperSlide className='h-full w-[200px] overflow-hidden relative bg-yellow-200'>
          <img src="https://baccabucci.com/cdn/shop/files/2_1_922d6e85-d886-4ad3-9f0a-b3a132cae198_500x.jpg?v=1709383430" height={100} width={100} alt="Product image" className='h-full w-full reltaive hover:scale-[1.02] duration-200 delay-75 transition-all' />
          <div className='absolute bottom-0 h-[50%] w-full bg-gradient-to-t from-slate-900 to-transparent flex items-end p-1 justify-between gap-2'>
            <h2 className='text-p18 font-third font-medium text-secondary'>
              Footwear
            </h2>
            <ResponsiveContainer width="100%" height="60%">
              <LineChart width={300} height={100} data={data}>
                <Line type="monotone" dataKey="pv" stroke="#8884d8" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </SwiperSlide>


      </Swiper>
    </section>
  )
}

export default AllproductCarousel