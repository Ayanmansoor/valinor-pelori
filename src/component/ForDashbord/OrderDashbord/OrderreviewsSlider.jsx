import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';
import HomeReviewcard from '../Home/HomeReviewcard'


function OrderreviewsSlider() {
    const data = [
        {
          name: 'Page A',
          uv: 4000,
          pv: 100,
          amt: 2400,
        },
        {
          name: 'Page B',
          uv: 400,
          pv: 1398,
          amt: 210,
        },
        {
          name: 'Page C',
          uv: 200,
          pv: 900,
          amt: 220,
        },
        {
          name: 'Page D',
          uv: 280,
          pv: 398,
          amt: 200,
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
          pv: 5300,
          amt: 11100,
        },
      ];
  return (
    <div className='w-full relative h-auto  py-2 '>
        <Swiper
          slidesPerView={"auto"}
          spaceBetween={10}
          grabCursor={true}

          modules={[Pagination]}
          className="mySwiper  mx-auto relative h-full    "
        >
          <SwiperSlide className='h-auto max-w-[300px] overflow-hidden flex items-center relative bg-yellow-200'>
            <HomeReviewcard className={'bg-slate-300'} data={data} />
          </SwiperSlide>
          <SwiperSlide className='h-auto max-w-[300px] overflow-hidden flex items-center relative bg-yellow-200'>
            <HomeReviewcard className={'bg-slate-300'} data={data} />
          </SwiperSlide>
          <SwiperSlide className='h-auto max-w-[300px] overflow-hidden flex items-center relative bg-yellow-200'>
            <HomeReviewcard className={'bg-slate-300'} data={data} />

          </SwiperSlide>
          <SwiperSlide className='h-auto max-w-[300px] overflow-hidden flex items-center relative bg-yellow-200'>
            <HomeReviewcard className={'bg-slate-300'} data={data} />

          </SwiperSlide>
          <SwiperSlide className='h-auto max-w-[300px] overflow-hidden flex items-center relative bg-yellow-200'>
            <HomeReviewcard className={'bg-slate-300'} data={data} />

          </SwiperSlide>




        </Swiper>
      </div>
  )
}

export default OrderreviewsSlider