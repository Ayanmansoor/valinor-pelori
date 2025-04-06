import React, { useState, useReducer } from 'react'
import { PiHeartThin } from "react-icons/pi";
// import { FiArrowUpRight } from "react-icons/fi";
// import { Link } from 'react-router-dom';
// import { Router } from 'react-router-dom';
// import { useRoutes } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
// import { useCart } from '@/Contexts/Cart.context';

import { useWishlists } from '@/Contexts/wishlist';
import { Swiper, SwiperSlide } from 'swiper/react';
import AddToCardPopver from '@/Comman/AddToCardPopver';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Link } from 'react-router-dom';


// import required modules
import { Scrollbar } from 'swiper/modules';



function ProductCard({ value }) {
  const [isWishlists, setWishlist] = useState(false)
  const { wishlist, addToWishlist, removeFromWishlist, isProductInWishlist } = useWishlists()
  useState(() => {
    const isAvailble = isProductInWishlist(value?.product?.id)
    setWishlist(isAvailble)
  }, [wishlist.length])

  const colors = value?.product?.colors?.map((color) => JSON.parse(color))
  const sizes = value?.product?.sizes?.map((size) => JSON.parse(size))
  const productImage = value?.product?.image_url?.map((image) => JSON.parse(image))

  const size = [1, 2, 4, 5, 6, 7, 8, 8]
  const color = ["red", 'pink', 'yellow', 'green',]

  const route = useNavigate()
  return (

    <section className='w-full relative h-full border justify-between flex items-start border-none flex-col  group '>
      <Link to={`/${value.url}/${value?.product?.slug}`} className=' h-auto relative w-full bg-[#ebeeef] group transition-all duration-500 ease-in cursor-pointer  '>
        <Swiper
          scrollbar={{
            hide: true,
          }}

          modules={[Scrollbar]}
          className="mySwiper w-full relative h-full "
        >

          {
            productImage?.map((image, index) => (
              <SwiperSlide className='w-full realtive h-full relative border'>
                <img src={`${image?.image_url}` || ''} alt={`${image.name} - markline `} className='w-full   transition-all duration-500 ease-in-out h-[180px] sm:h-[200px] md:h-[250px]  object-cover' height={200} width={300} />
              </SwiperSlide>
            ))
          }
        </Swiper>
        {
          value?.product?.discounts &&
          <p className='  text-[10px] md:text-[12px] font-medium text-white bg-red-500 w-fit  h-fit px-1  py-[2px] z-20  absolute top-2 left:top-3 left-2 md:left-3 '>-{value?.product?.discounts?.discount_persent}%</p>
        }

      </Link>
      <Link to={`/${value.url}/${value?.product?.slug}`} className='flex w-full items-center pt-2 justify-between  px-2 gap-0' >
        <h2 className=' text-xs sm:text-sm md:text-[16px] font-medium  leading-[1.2] flex items-center gap-1 uppercase'>{value?.product?.name}</h2>

      </Link>
      <section className='w-full relative h-auto pb-3 py-2 px-2 md:flex-row  flex-col flex  items-start lg:items-center justify-between gap-2'>
        <div className='w-fit relative flex self-star  items-center  justify-end px-2   gap-2'>
          {
            value?.product?.discounts &&
            <>
              <p className='text-base md:text-lg font-normal text-red-400 line-through text-nowrap '>$ {value?.product?.price}</p>
              <p className=' text-lg md:text-xl  font-medium text-nowrap text-black'>${
                Math.floor(value?.product?.price - (value?.product?.price * (value?.product?.discounts?.discount_persent / 100)))}</p>
            </>
          }
          {
            !value?.product?.discounts &&
            <p className=' text-lg md:text-xl  font-medium text-nowrap text-black'>$ {value?.product?.price}</p>

          }

        </div>

      </section>
      <div className='w-full relative grid grid-cols-[1fr_auto] py-1 border-t border-gray-300 items-center justify-center '>
        <AddToCardPopver currentProduct={value?.product} colors={colors} sizes={sizes} >
          <button className='w-full relative h-auto flex items-center justify-center text-sm  font-medium text-black   border-r border-gray-300'>Add to Cart</button>
        </AddToCardPopver>

        <button className='flex items-center justify-center px-2' onClick={() => addToWishlist(value?.product)} >
          <PiHeartThin className={`text-[20px] flex items-center justify-center cursor-pointer hover:text-red-500 ${isWishlists ? "text-red-500" : ""}   `} />
        </button>

      </div>

    </section >
  )
}

export default ProductCard