import React from 'react'
// import Product from './Product.page'
import ProductCard from '@/component/ForHome/ProductCard'
import 'swiper/css';
import 'swiper/css/pagination';
import CarouselProduct from '@/component/ForHome/CarouselProduct'
import { CgCheck } from "react-icons/cg";
import DeliverdCard from '@/component/ForDeliverd/DeliverdCard';
// import required modules
import { Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';

function Deliverd() {
  let num = [1, 2, 3, 4, 5, 6,]
  return (
   <section className='w-full relative h-full overflow-auto p-1 product-card-wrappar grid gap-2  grid-cols-1 sm:grid-cols-2 md:grid-cols-4 '>
      <DeliverdCard/>
     
   </section>
  )
}

export default Deliverd     