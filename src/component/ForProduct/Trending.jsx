import React from 'react'
import TrendingProduct from './TrendingProduct'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';

import { Link } from 'react-router-dom'
import ModernCarousel from '../ForDeal/ModernCarousel';

function Trending({ data }) {



  return (
    <ModernCarousel apiData={data} />
  )
}

export default Trending