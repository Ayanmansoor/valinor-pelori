import React from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Autoplay, Pagination } from 'swiper/modules';

function Hero({ bannerImages ,css }) {
    return (
        <section className={`w-full relative ${css ? css : " h-[40vh] sm:h-[90vh]"}  `}>

            <>
                <Swiper pagination={true}
                    modules={[Pagination, Autoplay]}
                    loop={true}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }} className="mySwiper h-full w-full relative bg-secondary ">
                    {bannerImages?.map((images, index) => (

                        <SwiperSlide className='h-full w-full relative ' key={index}>
                            <Link to={`${images?.url}`}>
                                <img src={images?.image_url} alt={images?.name} height={100} width={200} className='w-full h-full object-cover relative ' />
                            </Link>
                        </SwiperSlide>

                    ))}



                </Swiper>
            </>
        </section>

    )
}

export default Hero