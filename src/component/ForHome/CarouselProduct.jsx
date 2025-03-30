import React from 'react'
// import {
//     Carousel,
//     CarouselContent,
//     CarouselItem,
//     CarouselNext,
//     CarouselPrevious,
// } from "@/components/ui/carousel"
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Autoplay, Mousewheel, Pagination } from "swiper/modules";

import ProductCard from './ProductCard'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';





function CarouselProduct({data,product}) {
    let num = [1, 2, 3, 4, 5, 6]


    return (
        <section className='w-full relative h-auto bg-secondary  '>


            <div className='  mx-auto h-auto  '>

                <Swiper
                    slidesPerView={"auto"}
                    direction={"horizontal"}
                   
                  
                    modules={[Autoplay, Mousewheel, Pagination]}
                    className="mySwiper h-full w-full  relative"
                >

                    {product?.map((product, index) => (
                        <SwiperSlide className=' w-[200px]  md:w-[300px] h-full relative bg-secondary px-2 md:px-3' key={index} >
                            <ProductCard value={{  product:product, ind: `${index}`, url: data.url }} />
                        </SwiperSlide>
                    ))}

                </Swiper>
            </div>
        </section>
    )
}

export default CarouselProduct