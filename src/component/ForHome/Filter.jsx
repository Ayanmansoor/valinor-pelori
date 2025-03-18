import React from 'react'
import { HiChevronDown } from "react-icons/hi";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Mousewheel, Pagination } from "swiper/modules";
import { Link } from 'react-router-dom';
function Filter() {
    return (
        <section className=' w-full relative bg-secondary container  h-auto grid grid-cols-3 items-center justify-center md:grid-cols-4 gap-1 md:gap-5 px-2  md:px-10   xl:px-20 pt-3    '>

            {/* <Swiper
                slidesPerView={'auto'}
                spaceBetween={10}
                direction={"horizontal"}
                loop={true}
                autoplay={{
                  delay: 1000,
                  disableOnInteraction: false,
                }}
                speed={5000}
                modules={[Autoplay, Mousewheel, Pagination]}
                breakpoints={{
                    640: {
                        spaceBetween: 20,
                    },
                    768: {
                        spaceBetween:20,

                    },
                    1024: {
                        spaceBetween: 20,
                        
                    },
                }}
                className="mySwiper w-full relative pt-5 md:py-5 bg-secondary container mx-auto px-5  md:px-10   xl:px-20  "
            >
                <SwiperSlide  className=' cursor-pointer max-w-[65px] sm:max-w-[130px]  transition-all duration-500 group relative mr-0 py-1  w-fit md:w-[250px] h-[70px] sm:h-[100px] md:h-[130px]  '>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIL_DSkKWJVHx3nbNquHmoZe0f2HcQtp0gRQ&s" alt="category image" loading='lazy' className='  w-full h-full   rounded-full object-cover    ' />
                </SwiperSlide>
                <SwiperSlide  className=' cursor-pointer max-w-[65px] sm:max-w-[130px]  transition-all duration-500 group relative mr-0 py-1  w-fit md:w-[250px] h-[70px] sm:h-[100px] md:h-[130px]'>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIL_DSkKWJVHx3nbNquHmoZe0f2HcQtp0gRQ&s" alt="category image" loading='lazy' className='  w-full h-full  rounded-full object-cover    ' />
                </SwiperSlide>
            </Swiper>  */}
            <Link to="/category/women">
                <img src="/air-force.png" height={500} width={500} className='w-full border relative  max-h-[500px] object-cover' alt="category image" />
            </Link>
            <Link to="/category/men">
                <img src="/court-vision.png" height={500} width={500} className='w-full border relative max-h-[500px] object-cover' alt="category image" />
            </Link>
            <Link to={'category/kids'}>
                <img src="/sabrina-2-mirrored.png" height={500} width={500} className='w-full border relative max-h-[500px] object-cover' alt="category image" />
            </Link>


        </section>
    )
}

export default Filter