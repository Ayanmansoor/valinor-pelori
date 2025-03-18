import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';
function Uploadproductimage() {
    return (
        <section className='flex flex-col gap-2 '>
            <h2 className='text-p18 font-semibold text-third '>Select Category</h2>
            <div className='border border-[#d1d1d1] w-full p-3 rounded-md flex items-center '>
                <div className='h-[100px] w-[120px] border-2 cursor-pointer border-[#d1d1d1] border-dashed rounded-md relative bg-slate-200 flex items-center justify-center '>
                <label htmlFor='uploadimage' className='  text-[15px] font-medium text-center '>Upload images</label>
                <input type="file" id='uploadimage' className='hidden' multiple />
                </div>
                <Swiper
                    slidesPerView={"auto"}
                    spaceBetween={0}
                    grabCursor={true}

                    modules={[Pagination]}
                    className="mySwiper container mx-auto relative h-auto py-1  bg-secondary px-1 "
                >
                    <SwiperSlide className='h-[100px] w-[100px] border-2 cursor-pointer border-[#d1d1d1] border-dashed rounded-md relative bg-slate-200 flex items-center justify-center  '>
                      
                    </SwiperSlide>
                 

                </Swiper>
            </div>
        </section>

    )
}

export default Uploadproductimage