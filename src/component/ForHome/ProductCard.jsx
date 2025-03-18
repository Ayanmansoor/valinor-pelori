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

// brand_key
// :
// "ba6308ea-a7b7-41fd-946a-85757fab0016"
// collection_key
// :
// 1
// colors
// :
// (10)['{"name":"Gold","hex":"#FFD700"}', '{"name":"Silver","hex":"#C0C0C0"}', '{"name":"Rose Gold","hex":"#B76E79"}', '{"name":"Emerald","hex":"#50C878"}', '{"name":"Champagne","hex":"#F7E7CE"}', '{"name":"Midnight Blue","hex":"#191970"}', '{"name":"Ivory","hex":"#FFFFF0"}', '{"name":"Mocha","hex":"#B67D5B"}', '{"name":"Burgundy","hex":"#800020"}', '{"name":"Pastel Pink","hex":"#FFD1DC"}']
// created_at
// :
// "2025-02-23T13:29:02+00:00"
// description
// :
// "Step into a world of timeless elegance with Valinor & Pelóri’s Wedding Special Collection—a curated selection of luxurious shoes, bags, and sandals designed to complement the beauty of your most cherished moments.\n\nCrafted with exquisite materials, delicate embellishments, and intricate artistry, each piece is designed to make you feel radiant, confident, and effortlessly graceful. Whether you're the bride, bridesmaid, or a guest, our collection embodies the perfect blend of tradition and modern sophistication."
// discount_key
// :
// "f849b0e8-e797-4b2e-bdbc-0c0ef5dd0dac"
// gender
// :
// "WOMEN"
// id
// :
// 1
// image_url
// :
// null
// name
// :
// "wedding ready casual sandal"
// price
// :
// 1999
// sizes
// :
// (7)['{"size":"35","unit":"EU"}', '{"size":"36","unit":"EU"}', '{"size":"37","unit":"EU"}', '{"size":"38","unit":"EU"}', '{"size":"39","unit":"EU"}', '{"size":"40","unit":"EU"}', '{"size":"41","unit":"EU"}']
// stock
// :
// 20
// discounts
// : 
// created_at
// : 
// "2025-02-23T12:18:58+00:00"
// discount_end
// : 
// "2025-02-28"
// discount_id
// : 
// "f849b0e8-e797-4b2e-bdbc-0c0ef5dd0dac"
// discount_persent
// : 
// 10.5
// discount_start
// : 
// "2025-02-23"
// name
// : 
// "Ramdan Special "
// updated_at
// : 
// "2025-02-23T12:19:53.828537+00:00"

function ProductCard({ value }) {
  // const [Numberrating, setNumberrating] = useState(value.rating)
  // const [activeIndex, setActiveIndex] = useState(0);
  // const [isLiked, setisliked] = useState(false)
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
    // <section className='w-full relative flex items-start border-none flex-col gap-1 bg-[#ebeeef] group '>
    //   <div className=' h-auto relative w-full bg-[#ebeeef] group transition-all duration-500 ease-in cursor-pointer  '>
    //     <Swiper
    //       scrollbar={{
    //         hide: true,
    //       }}
    //       modules={[Scrollbar]}
    //       className="mySwiper w-full relative h-full "
    //     >
    //       <SwiperSlide className='max-w-auto realtive h-auto relative'>
    //         <img src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/a893816c-ec5d-46a0-8b25-317790717d41/JORDAN+LUKA+3+PF.png" alt="" className='w-full transition-all duration-500 ease-in-out   h-[170px] sm:h-[180px] md:h-[200px] object-cover' height={200} width={300} onClick={() => route(`/${value.url}/${`${value.Name}`.split(' ').join("-").toLocaleLowerCase()}`)} />
    //       </SwiperSlide>
    //       <SwiperSlide className='max-w-auto realtive h-auto relative'>
    //         <img src="https://images.unsplash.com/photo-1570464197285-9949814674a7?q=80&w=1373&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className='w-full transition-all duration-500 ease-in-out  h-[170px] sm:h-[180px] md:h-[200px]  object-cover' height={200} width={300} onClick={() => route(`/${value.url}/${`${value.Name}`.split(' ').join("-").toLocaleLowerCase()}`)} />

    //       </SwiperSlide>
    //     </Swiper>
    //     <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">

    //     </div>
    //   </div>
    //   <div className='flex w-full items-center justify-between py-1 px-2 gap-0' onClick={() => route(`/${value.url}/${`${value.Name}`.split(' ').join("-").toLocaleLowerCase()}`)}>
    //     <h2 className=' text-sm md:text-[16px] font-medium  leading-[1.2] flex items-center gap-1'>{value?.product?.name}</h2>
    //     <p className='text-[11px] font-normal text-foreground  text-nowrap '>valinor & peroli</p>

    //   </div>
    //   <div className='w-fit relative flex self-end  items-center  justify-end px-2 -mt-2  gap-2'>
    //     <p className=' text-sm md:text-base  font-medium text-nowrap text-black'>$ {value?.product?.price}</p>
    //     <p className='text-[12px] font-normal text-red-400 line-through text-nowrap '>$ {value?.product?.discountprice}</p>
    //   </div>
    //   <div className='w-full relative grid grid-cols-[1fr_auto] py-1 border-t border-gray-300 items-center justify-center '>
    //     <AddToCardPopver currentProduct={value?.product} colors={color} sizes={size} >
    //       <button className='w-full relative h-auto flex items-center justify-center text-sm  font-medium text-black   border-r border-gray-300'>Add to Cart</button>
    //     </AddToCardPopver>

    //     <button className='flex items-center justify-center px-2' onClick={() => addToWishlist(value?.product)} >
    //       <PiHeartThin className={`text-[20px] flex items-center justify-center cursor-pointer hover:text-red-500 ${isWishlists ? "text-red-500" : ""}   `} />
    //     </button>

    //   </div>

    // </section>
    <section className='w-full relative h-full justify-between flex items-start border-none flex-col  group '>
      <Link to={`/${value.url}/${value?.product?.slug}`} className=' h-auto relative w-full bg-[#ebeeef] group transition-all duration-500 ease-in cursor-pointer  '>
        <Swiper
          scrollbar={{
            hide: true,
          }}

          modules={[Scrollbar]}
          className="mySwiper w-full relative h-full "
        >
          {/* <SwiperSlide className=' w-full realtive h-full relative'>
            <img src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/a893816c-ec5d-46a0-8b25-317790717d41/JORDAN+LUKA+3+PF.png" alt="" className='w-full transition-all duration-500 ease-in-out   h-[180px] sm:h-[200px] md:h-[250px] object-cover' height={200} width={300} />
          </SwiperSlide>
          <SwiperSlide className='w-full realtive h-full relative'>
            <img src="https://images.unsplash.com/photo-1570464197285-9949814674a7?q=80&w=1373&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className='w-full transition-all duration-500 ease-in-out h-[180px] sm:h-[200px] md:h-[250px]  object-cover' height={200} width={300} />

          </SwiperSlide> */}
          {
            productImage?.map((image, index) => (
              <SwiperSlide className='w-full realtive h-full relative'>
                <img src={`${image?.image_url} || "" `} alt={`${image.name}-valinor pelori`} className='w-full transition-all duration-500 ease-in-out h-[180px] sm:h-[200px] md:h-[250px]  object-cover' height={200} width={300} />
              </SwiperSlide>
            ))
          }
        </Swiper>
        {
          value?.product?.discounts &&
          <p className='text-[12px] font-medium text-white bg-red-500 w-fit  h-fit px-1  py-[2px] z-20  absolute top-3 left-3 '>-{value?.product?.discounts?.discount_persent}%</p>
        }

      </Link>
      <Link to={`/${value.url}/${value?.product?.slug}`} className='flex w-full items-center pt-2 justify-between  px-2 gap-0' >
        <h2 className=' text-sm md:text-[16px] font-medium  leading-[1.2] flex items-center gap-1'>{value?.product?.name}</h2>

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