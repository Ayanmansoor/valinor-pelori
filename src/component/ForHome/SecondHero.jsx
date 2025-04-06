import React from 'react'
import { Link } from 'react-router-dom'

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination } from 'swiper/modules';



function SecondHero({ categoryName, data }) {
    const firstdata = data[0]
    const firstsection = data[0]?.image_url?.map((image) => JSON.parse(image))

    const seconddata = data[1]
    const secondsection = data[1]?.image_url?.map((image) => JSON.parse(image))

    const thirddata = data[2]
    const thirdsection = data[2]?.image_url?.map((image) => JSON.parse(image))


    const fourthdata = data[3]
    const fourthsection = data[3]?.image_url?.map((image) => JSON.parse(image))

    const fivthdata = data[4]
    const fivthsection = data[4]?.image_url?.map((image) => JSON.parse(image))



    return (
        <section className='w-full h-auto bg-secondary relative'>
            <div className=' grid-cols-3 lg:grid-cols-4 md:grid hidden h-[300px] w-full  relative    sm:h-[350px] md:h-[500px]  '>
                {
                    firstdata && firstsection &&

                    <Link to={`product/${firstdata?.slug}`} className='col-start-1  col-end-3 row-start-1 border border-[#ebeeef] row-end-3 relative   overflow-hidden'>
                        <Swiper
                            pagination={{
                                dynamicBullets: true,
                            }}
                            modules={[Pagination]}
                            className="mySwiper w-full h-auto "
                        >
                            {
                                firstsection.map((item, index) => (
                                    <SwiperSlide key={index} className='w-full relative h-auto'>
                                        <img src={` ${item.image_url} `} alt={`${item.name}`} className='h-full relative w-full object-cover ' />
                                    </SwiperSlide>
                                ))
                            }

                        </Swiper>
                    </Link>

                }

                {
                    seconddata && secondsection &&
                    <Link to={`product/${seconddata?.slug}`} className=' relative border  border-[#ebeeef] overflow-hidden bg-pink-200' >
                        <img src={` ${secondsection[0]?.image_url} `} alt={`${secondsection[0]?.name}`} className=' h-full relative w-full object-cover   overflow-hidden' />
                    </Link>
                }

                {
                    thirddata && thirddata &&
                    <Link to={`product/${thirddata?.slug}`} className=' relative border  border-[#ebeeef] overflow-hidden bg-pink-200' >
                        <img src={` ${thirdsection[0]?.image_url} `} alt={`${secondsection[0]?.name}`} className=' h-full relative w-full object-cover   overflow-hidden' />
                    </Link >
                }


                {
                    fourthdata && fourthsection &&
                    <Link to={`product/${fourthsection?.slug}`} className=' hidden lg:block relative border  border-[#ebeeef] overflow-hidden bg-pink-200' >
                        <img src={` ${fourthsection[0]?.image_url} `} alt={`${fourthsection[0]?.name}`} className=' h-full relative w-full object-cover   overflow-hidden' />
                    </Link>
                }

                {
                    fivthdata && fivthsection &&
                    <Link to={`product/${fivthsection?.slug}`} className=' hidden lg:block relative border  border-[#ebeeef] overflow-hidden bg-pink-200' >
                        <img src={` ${fivthsection[0]?.image_url} `} alt={`${fivthsection[0]?.name}`} className=' h-full relative w-full object-cover   overflow-hidden' />
                    </Link >
                }


            </div>

            <section className='w-full relative h-auto md:hidden block '>
                <Swiper
                    slidesPerView={'auto'}
                    spaceBetween={10}
                    className="mySwiper w-full relative "
                >
                    {
                        data?.map((item, index) => (

                            <SwiperSlide className='max-w-fit h-auto relative  ' key={index}>
                                <section className=' max-w-[200px] md:max-w-[270px]  border  relative max-h-fit md:max-h-[450px] group flex flex-col  '>
                                    <img src={`${JSON.parse(item.image_url[0]).image_url}`} alt={`${JSON.parse(item.image_url[0]).name}`} height={400} width={400} className='h-[200px] relative w-[200px] md:w-[270px] object-cover ' />
                                    <div className='w-full relative h-auto bg-white flex flex-col gap-1 py-3 px-2'>
                                        <h2 className='text-base font-semibold font-primary line-clamp-2  '>{item?.name}</h2>
                                        <p className='text-sm text-primary font-medium line-clamp-1 ' >{item.description}</p>
                                        <Link to={`product/${item.slug}`} className='w-fit relative h-auto px-5 py-1 text-white mt-1 bg-primary border-white'>Buy Now</Link>
                                    </div>
                                </section>
                            </SwiperSlide>
                        ))
                    }


                </Swiper>
            </section>

        </section>
    )
}

export default SecondHero