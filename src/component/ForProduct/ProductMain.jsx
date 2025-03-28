import React, { useState, useEffect } from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';


// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';


function ProductMain({ product }) {
    const [thumbsSwiper, setThumbsSwiper] = useState({});
    const numberofcard = [1, 2, 3, 5, 6, 7, 8]

    const [Image, setImage] = useState([])

    useEffect(() => {
        const productImage = product?.image_url?.map((image) => JSON.parse(image))
        
        setImage(productImage)
    }, [product])


    return (
        <>
            {/* <div className='w-full mx-auto h-[80%] relative  rounded-md overflow-hidden'>
                <img src="https://images.unsplash.com/photo-1721332154373-17e78d19b4a4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D" alt='Product Image ' />

            </div> */}
            {/* <Carousel className="w-full h-[20%] relative mt-3 ">
                <CarouselContent className='h-full w-full relative '>
                  {props.children[0]}
                </CarouselContent>
            </Carousel> */}

            {/* <Swiper
                direction={"horizontal"}
                slidesPerView={1}
                spaceBetween={30}
                mousewheel={true}
                loop={true}
                autoplay={{
                    delay: 1500,
                    disableOnInteraction: false,
                }}

                modules={[Autoplay, Mousewheel, Pagination]}
                className="mySwiper h-full w-full rounded-sm  relative overflow-hidden sm:rounded-lg "
            >
                {numberofcard.map((item, index) => (
                    <SwiperSlide key={index} className='w-full relative h-full  overflow-hidden'>
                        <img src="https://images.unsplash.com/photo-1525904097878-94fb15835963?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Discount product" className='w-full h-full relative rounded-lg object-cover object-bottom' />

                    </SwiperSlide>
                ))}

            </Swiper> */}
            {
                product?.discounts?.discount_persent &&
                <p className='text-xs font-medium text-white bg-red-500 px-1 py-[3px] absolute top-5 left-5 z-40 '>-{product?.discounts?.discount_persent}%</p>
            }
            <section className='w-full relative h-fit grid grid-rows-[1fr_.2fr] gap-2'>

                <Swiper

                    loop={true}
                    spaceBetween={10}

                    grabCursor={true}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="mySwiper2  max-h-[300px] extrasmall:max-h-[400px] sm:max-h-[500px] relative w-full "
                >
                    {
                        Image?.map((item, index) => (
                            <SwiperSlide key={index} className='max-w-full   relative h-full border '>
                                <img src={`${item?.image_url}` || ""} alt={`${item.name}`} height={500} width={500} className='w-full relative h-full object-center ' />
                            </SwiperSlide>
                        ))

                    }
                </Swiper>
                <Swiper
                    onSwiper={setThumbsSwiper}
                    spaceBetween={20}
                    slidesPerView={"auto"}
                    // direction={'vertical'}
                    freeMode={true}
                    // grabCursor={true}
                    // watchSlidesProgress={true}
                    modules={[FreeMode, Navigation, Thumbs]}
                    breakpoints={{
                        499: {
                            slidesPerView: 3,
                            spaceBetweenSlides: 10
                        },
                        700: {
                            slidesPerView: 3,
                            spaceBetweenSlides: 0
                        },
                        899: {
                            slidesPerView: 4,
                            spaceBetweenSlides: 10
                        }
                    }}
                    className="mySwiper relative  h-[100px] md:h-auto  w-full  "
                >
                    {
                        Image?.map((item, index) => (
                            <SwiperSlide key={index} className='max-w-fit   relative h-full '>
                                <img src={`${item?.image_url}` || ""} height={500} width={500} className=' max-w-[100px] relative h-full  ' />
                            </SwiperSlide>
                        ))

                    }

                </Swiper>
            </section>


        </>
    )
}

export default ProductMain 