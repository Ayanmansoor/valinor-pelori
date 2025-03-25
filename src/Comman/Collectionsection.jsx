import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import CollectionCard from './CollectionCard';

import 'swiper/css';
import 'swiper/css/scrollbar';


import { Scrollbar } from 'swiper/modules';
function Collectionsection(props) {
    return (
        <Swiper
            slidesPerView={"auto"}
            direction={"horizontal"}

            scrollbar={{
                hide: true,
            }}
            modules={[Scrollbar]}
            className="mySwiper w-full reltive h-auto"
        >
            {
                props?.data?.collections?.map((item, index) => (
                    <SwiperSlide className=' w-[200px]  md:w-[230px] h-full relative bg-secondary' key={index} >
                        <CollectionCard value={{ imege: "url", Name: "Sony Head phone", url: props?.data?.url, data:item }} />
                    </SwiperSlide>
                ))
            }

            {/* <SwiperSlide className=' w-[200px]  md:w-[230px] h-full relative bg-secondary' >
                <CollectionCard value={{ imege: "url", Name: "Sony Head phone", url: props.data.url }} />
            </SwiperSlide><SwiperSlide className=' w-[200px]  md:w-[230px] h-full relative bg-secondary' >
                <CollectionCard value={{ imege: "url", Name: "Sony Head phone", url: props.data.url }} />
            </SwiperSlide> */}

        </Swiper>
    )
}

export default Collectionsection