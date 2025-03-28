import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaArrowRight } from "react-icons/fa";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Link } from 'react-router-dom';


// import required modules
import { Autoplay, Pagination } from 'swiper/modules';

function ModernCarousel({ apiData }) {


  return (
    <section className='relative w-full h-auto bg-third  '>
      <div className='container  mx-auto reltive h-fit w-full  text-secondary pt-5 pb-10 px-2  md:px-10   xl:px-20'>
        <h2 className='text-h1 font-medium text-white pt-5  uppercase'>Trending Products</h2>
        <Swiper
          slidesPerView={"auto"}
          spaceBetween={10}
          grabCursor={true}

          autoplay={{
            delay: 500,
            disableOnInteraction: false,
          }}
          loop={true}

          modules={[Pagination, Autoplay]}
          className="mySwiper w-full h-full relative py-5 "
        >
          {apiData?.trendingProducts?.map((item, index) => {
            const images = item?.products?.image_url?.map((image) => JSON.parse(image));
            return (
              <SwiperSlide className='h-[150px] sm:h-[250px] w-[150px] sm:w-[250px] bg-slate-50 overflow-hidden relative transition-all duration-500 text-third group' key={item.id}>
                <Link to={`product/${item?.products?.slug}`}>
                  {
                    images?.map((item, index) => (
                      <img src={`${item?.image_url} ` || ""} height={100} width={100} alt={item?.name} className='w-full h-full relative hover:scale-[1.02] transition-all duration-300 ' key={index} />
                    ))
                  }


                  <h2 className='w-full absolute bottom-1 text-sm md:text-base px-3  font-medium text-black line-clamp-2 md:line-clamp-2'>{item?.products?.name}</h2>
                </Link>
              </SwiperSlide>
            )
          })}
        </Swiper>

      </div>

    </section>
  )
}

export default ModernCarousel