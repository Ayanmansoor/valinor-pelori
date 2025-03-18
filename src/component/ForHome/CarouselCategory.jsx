import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';

function CarouselCategory() {
    return (
        <section className='w-full h-auto bg-secondary relative'>
            <Swiper
                slidesPerView={"auto"}
                spaceBetween={20}
                grabCursor={true}
                
                modules={[Pagination]}
                className="mySwiper container mx-auto relative h-auto py-5 bg-secondary px-5 md:px-10   xl:px-20"
            >
                <SwiperSlide className='h-[350px] w-[250px] overflow-hidden relative bg-yellow-200'>
                    <img src="https://baccabucci.com/cdn/shop/files/2_1_922d6e85-d886-4ad3-9f0a-b3a132cae198_500x.jpg?v=1709383430" height={100} width={100} alt="Product image"  className='h-full w-full reltaive hover:scale-[1.02] duration-200 delay-75 transition-all' />
                </SwiperSlide>
                <SwiperSlide className='h-[350px] w-[250px] overflow-hidden relative bg-yellow-200'>
                    <img src="https://baccabucci.com/cdn/shop/files/3_1_1c32e7dc-c2d8-438f-8d98-761236632626_500x.jpg?v=1709383484" height={100} width={100} alt="Product image"  className='h-full w-full reltaive hover:scale-[1.02] duration-200 delay-75 transition-all' />
                </SwiperSlide>
                <SwiperSlide className='h-[350px] w-[250px] overflow-hidden relative bg-yellow-200'>
                    <img src="https://baccabucci.com/cdn/shop/files/1_1_500x.jpg?v=1709383533" height={100} width={100} alt="Product image"  className='h-full w-full reltaive hover:scale-[1.02] duration-200 delay-75 transition-all' />
                </SwiperSlide>
                <SwiperSlide className='h-[350px] w-[250px] overflow-hidden relative bg-yellow-200'>
                    <img src="https://baccabucci.com/cdn/shop/files/6_028e6444-f1b7-4ddd-9427-bec6faa9e985_500x.jpg?v=1709534888" height={100} width={100} alt="Product image"  className='h-full w-full reltaive hover:scale-[1.02] duration-200 delay-75 transition-all' />
                </SwiperSlide>
                <SwiperSlide className='h-[350px] w-[250px] overflow-hidden relative bg-yellow-200'>
                    <img src="https://baccabucci.com/cdn/shop/files/4_f3fb115b-8ba3-48bf-b181-c96d201a99ac_500x.jpg?v=1709383588" height={100} width={100} alt="Product image"  className='h-full w-full reltaive hover:scale-[1.02] duration-200 delay-75 transition-all' />
                </SwiperSlide>
      
            </Swiper>
        </section>
    )
}

export default CarouselCategory